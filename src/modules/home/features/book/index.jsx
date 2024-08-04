import React, { useState } from "react";

export default function Book() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-[250vh] flex flex-col overflow-hidden">
      {loading && (
        <div className="loader flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
      <iframe
        src="https://glowwithkindness.as.me/schedule.php?hl=en-US&gei=3H6hZoyMDdvckPIP3_vnwAI&rwg_token=AJKvS9W4_m_Da06OjKk0Kh2LkZdIgTVC-Rg-weYNZFwJ8NVu0a5W34XPKzyWbXnrv8pcbnopz-6I0_ut0yalAH6rhMyairzbRA%3D%3D"
        className={`w-full h-full border-0 ${loading ? "hidden" : "block"}`}
        scrolling="no"
        allowFullScreen
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
}
