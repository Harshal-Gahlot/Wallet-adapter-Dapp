import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
import Airdrop from './airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
	return (
		//  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> {/* may get 429 rate limited */}
		 <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/I9CzauUhcXs6DTsj7_3ek04AXLz3p6C0"}>
			<WalletProvider wallets={[]} autoConnect>
				<WalletModalProvider>
					<WalletMultiButton></WalletMultiButton>
					<WalletDisconnectButton></WalletDisconnectButton>
					<Airdrop></Airdrop>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}

export default App;
