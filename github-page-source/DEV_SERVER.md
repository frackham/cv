# Run Local Server

This document explains how to run the web application locally for development and testing.

## Why you need a local server
When you open an `index.html` file directly in your browser (e.g. `file:///C:/Repos/...`), the browser restricts JavaScript `import` statements for security reasons (CORS policy). 

To test the application locally, you must serve the files using a local web server.

## How to run the server
You can use Python or Node.js to spin up a quick server:

### Option 1: Python
Open your terminal, navigate to the `github-page-source` folder, and run:
\`\`\`bash
python -m http.server 8000
\`\`\`
Then open your browser and go to `http://localhost:8000`.

### Option 2: Node.js (npx)
If you have Node installed, navigate to the `github-page-source` folder and run:
\`\`\`bash
npx serve .
\`\`\`
Then open your browser and go to the link provided in the terminal (usually `http://localhost:3000`).

### Option 3: VS Code Extension
If you are using Visual Studio Code, you can install the **Live Server** extension by Ritwick Dey. 
Once installed, open `index.html` and click the **Go Live** button in the bottom right corner of the editor.
