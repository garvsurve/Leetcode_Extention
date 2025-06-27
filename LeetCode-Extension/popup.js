document.getElementById('saveBtn').addEventListener('click', async () => {
    const approach = document.getElementById('approach').value;
  
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.local.set({ [tab.url]: approach }, () => {
      alert('Approach saved for this problem!');
    });
  });
  
  document.getElementById('chatBtn').addEventListener('click', async () => {
    const question = document.getElementById('questionInput').value;
    if (!question.trim()) return;
  
    // Dummy API call (replace with your chatbot integration)
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = "Thinking...";
  
    const response = await fetch('https://your-backend-or-openai-api.com/get-solution', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
  
    const data = await response.json();
    responseDiv.innerText = data.solution || "No response received.";
  });
  