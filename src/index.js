import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes";
import { Toaster } from "sonner";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <AppRoutes />
    <Toaster richColors />
  </>
);
