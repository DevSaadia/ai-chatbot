"use client";
import React, { useState } from "react";
export default function Home() {
  const [result, setResult] = useState("");

  const callApi = async (message) => {
    try {
      const response = await fetch("/api/cohere", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }), // Send message in request body
      });

      const data = await response.json();
      console.log(data);
      setResult(data.text);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  const [message, setMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={() => callApi(message)}>Call API</button>
      <p>{result}</p>
    </div>
  );
}
