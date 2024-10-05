import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from 'bs58';
import { useState } from "react";

export default function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [message, setMessage] = useState('');

    async function onClick() {
        if (!publicKey) throw new Error("Wallet not Connected!");
        if (!signMessage) throw new Error("Wallet doesn't support signing message!");
        if (message === '') throw new Error("Empty message");

        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage)

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            throw new Error("Invalid Message Signature")
        }
        alert(`Success! Message signature:  ${bs58.encode(signature)}`)
    }

    return (
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
            <button onClick={onClick}>Sign Message</button>
        </div>
    )

}