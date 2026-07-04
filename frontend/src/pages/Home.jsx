import { useEffect, useState } from "react";
import api from "../api/api";

function Home() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage("Backend not connected ❌");
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-cyan-400">SentinelAI</h1>

      <p className="mt-4 text-xl text-gray-300">
        AI-Powered Emergency Response Platform
      </p>

      <div className="flex gap-4 mt-10">
        <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">
          🚨 Report Incident
        </button>

        <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
          🆘 Emergency SOS
        </button>
      </div>

      <div className="mt-12 bg-slate-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-3">Backend Status</h2>

        <p className="text-green-400">✅ Connected</p>

        <p className="mt-4 text-lg">{message}</p>
      </div>
    </div>
  );
}

export default Home;
