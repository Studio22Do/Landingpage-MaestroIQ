const Button = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded-[12px] font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[40px]"
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-white hover:bg-primary hover:text-white bg-transparent"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
