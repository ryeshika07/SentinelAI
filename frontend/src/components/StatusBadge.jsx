const STATUS_CONFIG = {
  checking: {
    label: "Checking backend...",
    dot: "bg-yellow-400",
    text: "text-yellow-800",
    bg: "bg-yellow-50",
  },
  ok: {
    label: "Backend connected",
    dot: "bg-green-500",
    text: "text-green-800",
    bg: "bg-green-50",
  },
  error: {
    label: "Backend unreachable",
    dot: "bg-red-500",
    text: "text-red-800",
    bg: "bg-red-50",
  },
};

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.checking;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${config.bg} ${config.text}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${config.dot}`}
        aria-hidden="true"
      />
      {config.label}
    </div>
  );
}

export default StatusBadge;
