const ButtonLarge = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = "px-16 py-4 rounded-2xl font-medium text-2xl transition-all duration-300 ease-in-out flex items-center justify-center gap-3 min-h-[65px] relative overflow-hidden group"
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-white bg-transparent hover:border-primary/50 relative"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {variant === 'outline' && (
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-gradient-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl"></div>
      )}
      <span className="relative z-10 flex items-center gap-3 pointer-events-none">
        {icon && <span className="w-6 h-6">{icon}</span>}
        {children}
      </span>
    </button>
  )
}

export default ButtonLarge
