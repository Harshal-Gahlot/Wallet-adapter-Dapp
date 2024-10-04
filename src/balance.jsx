import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL as LPS } from "@solana/web3.js";

export default function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalanceNow() {
        const balance = wallet.publicKey ? await connection.getBalance(wallet.publicKey) / LPS : '-';
        document.getElementById("balance").innerHTML = balance
    }
    getBalanceNow();

    return <p>Your balance is <b id="balance"></b> SOL</p>;

}