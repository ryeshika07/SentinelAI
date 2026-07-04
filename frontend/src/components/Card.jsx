function Card({ title, description, icon, highlight = false, className = "" }) {
  return (
    <div
      className={`rounded-lg border p-5 flex flex-col gap-2 ${
        highlight ? "border-red-300 bg-red-50" : "border-slate-200 bg-white"
      } ${className}`}
    >
      {icon && (
        <div className="text-2xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {description && <p className="text-sm text-slate-600">{description}</p>}
    </div>
  );
}

export default Card;
