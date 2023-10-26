interface ButtonProps {
  children: JSX.Element | string
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export const buttonClasses = 'flex items-center justify-center h-fit'
export const Button: React.FC<ButtonProps> = ({children, size = 'md', onClick, className}) => {
  const classes = {
    sm: `text-[14px] leading-[20px] font-bold`,
    md: `text-[16px] leading-[20px]`,
    lg: `text-[20px] leading-[25px] font-bold pt-[10px] pb-[13px]`,
  }
  return (
    <button onClick={onClick} className={`${classes[size]} ${className}`}>
      {children}
    </button>
  )
}
