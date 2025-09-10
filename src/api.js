// Use Railway URL in production, localhost in development
const BASE_URL = import.meta.env.PROD 
  ? "https://web-production-328141.up.railway.app" 
  : "http://localhost:8081";

const BASE = `${BASE_URL}/api/game`;

export async function startGame(payload) {
  console.log('API: Starting game with payload:', payload);
  console.log('API: Calling URL:', `${BASE}/start`);
  console.log('API: Environment - PROD:', import.meta.env.PROD);
  console.log('API: Base URL:', BASE_URL);
  
  try {
    const res = await fetch(`${BASE}/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: "cors", // Explicitly set CORS mode
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
  } catch (error) {
    console.error('API: Network/Fetch error:', error);
    throw error;
  }
}

export async function sendChoice({ sessionId, choice }) {
  console.log('API: Sending choice - sessionId:', sessionId, 'choice:', choice);
  console.log('API: Calling URL:', `${BASE}/turn`);
  
  try {
    const res = await fetch(`${BASE}/turn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: "cors", // Explicitly set CORS mode
      body: JSON.stringify({ sessionId, choice })
    });
    
    console.log('API: Turn response status:', res.status, res.statusText);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('API: Turn error response:', errorText);
      throw new Error(`Failed to send choice: HTTP ${res.status}: ${errorText}`);
    }
    
    const result = await res.json();
    console.log('API: Turn success response:', result);
    return result;
  } catch (error) {
    console.error('API: Turn network/fetch error:', error);
    throw error;
  }
}