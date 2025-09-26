import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './custom.css';

// Get the root element
const rootElement = document.getElementById("root");

// Ensure the root element exists
if (rootElement) {
  // Create a React root and render the App component
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found! Check if the HTML has an element with id 'root'.");
}
