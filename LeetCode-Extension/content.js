const container = document.createElement('div');
container.id = 'leetcode-helper-widget';
container.innerHTML = `
  <div class="leetcode-helper-box">

    <!-- MARKING SECTION -->
    <div class="section marking-section">
      <h3>📝 Mark Your Approach</h3>
      <select id="approach">
        <option value="brute">Brute Force</option>
        <option value="optimal">Optimal</option>
        <option value="needs_opt">Needs Optimization</option>
      </select>
      <button id="saveBtn">Save</button>
    </div>

    <hr>

    <!-- CHATBOT SECTION -->
    <div class="section chatbot-section">
      <h3>🤖 Optimized Solution Assistant</h3>
      <textarea id="questionInput" placeholder="Paste question here..."></textarea>
      <button id="chatBtn">Get Optimized Solution</button>
      <div id="response"></div>
    </div>

  </div>
`;
document.body.appendChild(container);
