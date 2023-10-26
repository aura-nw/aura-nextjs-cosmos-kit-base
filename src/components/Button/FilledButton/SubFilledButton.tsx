import { buttonClasses } from '..'

interface SubFilledButton {
  children: JSX.Element | string
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export const SubFilledButton: React.FC<SubFilledButton> = ({ children, size = 'md', onClick, className }) => {
  const classes = {
    sm: `${buttonClasses} text-[12px] leading-[16px] font-bold px-[12px] pt-[3px] pb-[7px] bg-light-gray text-second-color rounded-[8px] whitespace-nowrap`,
    md: `${buttonClasses} text-[16px] leading-[20px] font-bold px-[16px] pt-[5px] pb-[9px] bg-light-gray text-second-color rounded-[12px] whitespace-nowrap`,
    lg: `${buttonClasses} text-[20px] leading-[25px] font-bold px-[32px] pt-[10px] pb-[13px] bg-light-gray text-second-color rounded-[20px] whitespace-nowrap`,
  };

  const buttonClass = classes[size] || classes.md; // Provide a fallback value for unknown sizes

  return (
    <button onClick={onClick} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
};