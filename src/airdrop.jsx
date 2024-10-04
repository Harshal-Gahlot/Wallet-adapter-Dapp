import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    console.log('start');
    const [amount, setAmount] = useState(0)

    async function sendAirDrop() {
        console.log("amount", amount);
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        console.log("after");
        alert("Air Droped SOL successfully!");
    }

    return (
        <div>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount"></input>
            <button onClick={sendAirDrop}>Air Drop</button>
        </div>
    );
}