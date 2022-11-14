import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import {
    getDefaultWallets,
    RainbowKitProvider,
    lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from 'wagmi/providers/alchemy'
const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: 'y-XrzXcnrI5-InGayOmqKAfZOADFvF8s' })]
);
//[jsonRpcProvider({ rpc: () => { return {http: 'https://goerli.infura.io/v3/'} } })]
//publicProvider()

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({ accentColor: "#2662CB" })}
        //avatar={CustomAvatar}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
