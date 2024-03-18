import { createRoot } from "react-dom/client";
import App from "./App";
import { Toaster } from "sonner";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    <Toaster richColors />
  </>
);
