import { createConfig, http } from "wagmi";
import { baseSepolia } from "viem/chains";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";

//  Read environment variable
const projectId =
  process.env.NEXT_PUBLIC_PROJECT_ID ||
  (typeof window !== "undefined"
    ? (window as any).NEXT_PUBLIC_PROJECT_ID
    : "");

if (!projectId) {
  console.error(" Missing NEXT_PUBLIC_PROJECT_ID in .env file!");
}

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    metaMask({
      dappMetadata: { name: "Base Frontend Day 2" },
    }),
    coinbaseWallet({
      appName: "Base Frontend Day 2",
      preference: "smartWalletOnly",
    }),
    walletConnect({
      projectId,
      showQrModal: true,
    }),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
  ssr: true,
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
