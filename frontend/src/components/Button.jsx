const VARIANT_STYLES = {
  primary: "bg-slate-900 text-white hover:bg-slate-800",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50",
};

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
