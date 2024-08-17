import React, { useState } from "react";

export default function Book() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {loading && (
        <div className="loader flex justify-center  ">
          <p>Loading...</p>
        </div>
      )}
      <iframe
        src="https://glowwithkindness.as.me/schedule.php?hl=en-US&gei=3H6hZoyMDdvckPIP3_vnwAI&rwg_token=AJKvS9W4_m_Da06OjKk0Kh2LkZdIgTVC-Rg-weYNZFwJ8NVu0a5W34XPKzyWbXnrv8pcbnopz-6I0_ut0yalAH6rhMyairzbRA%3D%3D"
        className={`w-full h-full pb-[10%] border-0 ${loading ? "hidden" : "block"}`}
        scrolling="auto" // Use 'auto' to allow scrolling when needed
        allowFullScreen
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
}
