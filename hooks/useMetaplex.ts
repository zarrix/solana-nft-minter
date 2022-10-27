import { bundlrStorage, Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";

export function useMetaplex() {
    const { connection } = useConnection();
    const wallet = useWallet();

    const metaplex = useMemo(() => {
        return Metaplex.make(connection)
            .use(walletAdapterIdentity(wallet))
            .use(bundlrStorage({
                address: "https://devnet.bundlr.network",
                providerUrl: "https://api.devnet.solana.com",
                timeout: 60000,
            }))
    }, [connection, wallet]);

    return metaplex;
}