import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Projects_providor from "./Contexts/Projects_providor.jsx";
import Handle_scroll_provider from "./Contexts/Handle_scroll_provider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Handle_scroll_provider>
        <Projects_providor>
          <App />
        </Projects_providor>
      </Handle_scroll_provider>
    </BrowserRouter>
  </StrictMode>,
);
