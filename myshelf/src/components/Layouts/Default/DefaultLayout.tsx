"use client";

import { Global } from "@emotion/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, optimism, polygon } from "wagmi/chains";
import { ContentWrapper, globalStyle } from "./style";
import { Menu } from "@/components/Menu";

if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) {
  throw new Error(
    "You need to provide a NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID env variable"
  );
}

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
const chains = [mainnet, polygon, optimism];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Global styles={globalStyle} />

      <WagmiConfig config={wagmiConfig}>
        <ContentWrapper>
          <Menu />
          <main>{children}</main>
        </ContentWrapper>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
