function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} SentinelAI</span>
        <span>AI outputs are decision-support signals, not guarantees.</span>
      </div>
    </footer>
  );
}

export default Footer;
