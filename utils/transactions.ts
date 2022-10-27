import { Wallet, WalletContextState } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export async function transferFunds(receiverPubKey: string, amount: number, connection: Connection, wallet: WalletContextState) {

    try {
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey!,
            toPubkey: new PublicKey(receiverPubKey),
            lamports: amount * 1000000000,
        }));

        const signature = await wallet.sendTransaction(transaction, connection);

        const latestBlockHash = await connection.getLatestBlockhash();

        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature
        });

        console.log("Funds transfered successfuly!")
    } catch (e) {
        console.error("Failed", e);
    }
}