import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 30000,
      retry: false,
    },
  },
});

export default queryClient;
