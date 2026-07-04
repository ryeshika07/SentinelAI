import { useEffect, useState } from "react";
import api from "./api/api";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import EmergencyActions from "./components/EmergencyActions";

function App() {
  const [backendStatus, setBackendStatus] = useState("checking");

  useEffect(() => {
    api
      .get("/health")
      .then(() => setBackendStatus("ok"))
      .catch(() => setBackendStatus("error"));
  }, []);

  return (
    <Layout backendStatus={backendStatus}>
      <HeroSection />
      <EmergencyActions />
    </Layout>
  );
}

export default App;
