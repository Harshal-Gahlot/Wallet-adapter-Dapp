import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL as LPS } from "@solana/web3.js";

export default function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalanceNow() {
        const balanceTag = document.getElementById("balance")
        const balance = wallet.publicKey ? await connection.getBalance(wallet.publicKey) / LPS : '-';
        balanceTag.innerHTML = balance
    }
    getBalanceNow();
    return (
        <>
            <p>Your balance is <b id="balance"></b> SOL</p>
        </>
    );

}