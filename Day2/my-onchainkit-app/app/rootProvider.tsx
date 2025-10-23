"use client";
import { ReactNode } from "react";
import { baseSepolia } from "viem/chains";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../wagmi.config";
import "@coinbase/onchainkit/styles.css";

const queryClient = new QueryClient();

export function RootProvider({ children }: { children: ReactNode }) {
  // Add the console log here (before return)
  console.log("Using Project ID:", process.env.NEXT_PUBLIC_PROJECT_ID);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_CDP_API_KEY}
          chain={baseSepolia}
          config={{
            appearance: {
              mode: "auto",
              theme: "default",
            },
            wallet: {
              display: "modal",
            },
          }}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
