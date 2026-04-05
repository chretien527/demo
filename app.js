// Replace with your actual API key

require('dotenv').config({ path: './app.env' });
const API_KEY = process.env.GEMINI_API_KEY;
const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=" + API_KEY;

async function callGemini(prompt) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }]
    })
  });

  const data = await response.json();

if (data.candidates && data.candidates.length > 0) {
  console.log("Gemini response:", data.candidates[0].content.parts[0].text);
} else {
  console.error("Unexpected response:", data);
}
}

// Example usage
callGemini("Hi, How are you?");
