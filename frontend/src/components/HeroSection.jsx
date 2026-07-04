import Button from "./Button";

function HeroSection() {
  return (
    <section className="text-center py-10 md:py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        AI-Powered Emergency Response &amp; Public Safety
      </h1>
      <p className="text-slate-600 max-w-2xl mx-auto mb-6">
        SentinelAI helps you report incidents, reach guardians, and get
        decision-support signals during emergencies — built with privacy and
        safety as core requirements.
      </p>
      <Button variant="danger" className="text-base px-6 py-3">
        Emergency SOS
      </Button>
    </section>
  );
}

export default HeroSection;
