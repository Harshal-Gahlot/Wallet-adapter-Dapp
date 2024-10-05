import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import Airdrop from './airdrop';
import ShowBalance from './balance';
import SignMessage from './signMessage';
import SendTransaction from './sendTransaction'; 
import { Buffer } from 'buffer';

window.Buffer = Buffer;

function App() {
	return (
		// <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/I9CzauUhcXs6DTsj7_3ek04AXLz3p6C0"}>
		<ConnectionProvider endpoint={"https://api.devnet.solana.com"}> {/* may get 429 rate limited */}
			<WalletProvider wallets={[]} autoConnect>
				<WalletModalProvider>
					<WalletMultiButton></WalletMultiButton>
					<WalletDisconnectButton></WalletDisconnectButton>
					<Airdrop></Airdrop>
					{/* <ShowBalance></ShowBalance> */}
					<SignMessage></SignMessage>
					<SendTransaction></SendTransaction>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}

export default App;
