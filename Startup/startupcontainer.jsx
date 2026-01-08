import React, { useState } from "react";
import StartupForm from "./startup";
import StartupDashboard from "./dashboard";

export default function StartupContainer() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [startupData, setStartupData] = useState(null);

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    setStartupData(null);      // clear data (optional but recommended)
    setShowDashboard(false);   // go back to form
  };

  return (
    <>
      {showDashboard ? (
        <StartupDashboard
          startupData={startupData}
          onLogout={handleLogout}   // 👈 pass logout function
        />
      ) : (
        <StartupForm
          onSuccess={(data) => {
            setStartupData(data);
            setShowDashboard(true);
          }}
        />
      )}
    </>
  );
}
