import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import Error from "@/components/Error.jsx";
import App from "@/App.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data is largely static; cache for 1 hour before allowing a background refetch
      staleTime: 1000 * 60 * 60,
    },
  },
});

createRoot(document.getElementById("container")).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
