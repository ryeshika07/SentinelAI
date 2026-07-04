import Card from "./Card";

const ACTIONS = [
  {
    title: "Report Incident",
    description: "Log a fire, flood, accident, or safety threat.",
    highlight: false,
  },
  {
    title: "Emergency SOS",
    description: "Alert your guardians with your location.",
    highlight: true,
  },
  {
    title: "AI Assistant",
    description: "Get guided help and preparedness info.",
    highlight: false,
  },
  {
    title: "Safe Route",
    description: "Compare routes by estimated risk, not just speed.",
    highlight: false,
  },
  {
    title: "Safety Score",
    description: "See an explainable area risk indicator.",
    highlight: false,
  },
  {
    title: "Guardian",
    description: "Manage trusted emergency contacts.",
    highlight: false,
  },
];

function EmergencyActions() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {ACTIONS.map((action) => (
        <Card
          key={action.title}
          title={action.title}
          description={action.description}
          highlight={action.highlight}
        />
      ))}
    </section>
  );
}

export default EmergencyActions;
