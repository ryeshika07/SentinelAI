import StatusBadge from "./StatusBadge";

function Navbar({ backendStatus }) {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-lg text-slate-900">SentinelAI</span>
        <StatusBadge status={backendStatus} />
      </div>
    </nav>
  );
}

export default Navbar;
