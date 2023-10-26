# Build BASE
FROM node:16-alpine as BASE
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build Image
FROM node:16-alpine AS BUILD
WORKDIR /app

RUN apk add --no-cache curl
RUN curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bin

COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN yarn build
RUN cd .next/standalone
RUN node-prune

# Build production
FROM node:16-alpine AS PRODUCTION
ENV NODE_ENV production
WORKDIR /app

# COPY --from=BUILD /app/.env.example ./.env
COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/next.config.js ./
COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/.next/static ./.next/static

RUN mkdir -p /app/public/social-images/

EXPOSE 3000
CMD ["node", "server.js"]
