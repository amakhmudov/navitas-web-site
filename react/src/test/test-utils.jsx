/** Shared wrapper that provides QueryClient + MemoryRouter for component tests. */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router";

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // fail fast in tests — no retries
        staleTime: 0,
      },
    },
  });
}

export function Wrapper({ children, initialPath = "/" }) {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[initialPath]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
}
