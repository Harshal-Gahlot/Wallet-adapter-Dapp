import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export default function SendTransaction() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [toPubKey, SetToPubKey] = useState('');
    const [amount, setAmount] = useState(0);

    async function sendOnClick() {
        const transaction = new Transaction();
        
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(toPubKey),
            lamports: amount * LAMPORTS_PER_SOL
        }))
        
        await wallet.sendTransaction(transaction, connection)

        alert(`Successfully transfered ${amount} SOL from ${wallet.publicKey} to ${toPubKey}`)
    }

    return (
        <section>
            <input value={toPubKey} onChange={(e) => SetToPubKey(e.target.value)} placeholder="To" />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
            <button onClick={sendOnClick}>Send</button>
        </section>
    )
}