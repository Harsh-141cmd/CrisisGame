// Use Railway URL in production, localhost in development
const BASE_URL = import.meta.env.PROD 
  ? "https://web-production-328141.up.railway.app"
  : "http://localhost:8081";

const BASE = `${BASE_URL}/api/game`;

export async function startGame(payload) {
  console.log('API: Starting game with payload:', payload);
  console.log('API: Calling URL:', `${BASE}/start`);
  
  const res = await fetch(`${BASE}/start`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });
  
  console.log('API: Response status:', res.status, res.statusText);
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error('API: Error response:', errorText);
    throw new Error(`HTTP ${res.status}: ${errorText}`);
  }
  
  const result = await res.json();
  console.log('API: Success response:', result);
  return result;
}

export async function sendChoice({ sessionId, choice }) {
  const res = await fetch(`${BASE}/turn`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ sessionId, choice })
  });
  if (!res.ok) throw new Error("Failed to turn");
  return res.json();
}