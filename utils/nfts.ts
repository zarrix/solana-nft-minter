import { Metaplex, PublicKey, toMetaplexFileFromBrowser } from "@metaplex-foundation/js";

export async function mintNFT(metaplex: Metaplex, name: string, description: string, image: any) {
    try {
        // Upload MetaData
        const { uri, metadata } = await metaplex
            .nfts()
            .uploadMetadata({
                name,
                description,
                image: await toMetaplexFileFromBrowser(image)
            });

        // Mint NFT
        const nft = await metaplex
            .nfts()
            .create({
                uri,
                name,
                sellerFeeBasisPoints: 10000,
            });
        return nft;
    } catch (e) {
        throw e;
    }
}


export async function getAllNftsByOwner(metaplex: Metaplex, owner: PublicKey) {
    const nfts: any = []
    if (owner) {
        const data = await metaplex.nfts()
            .findAllByOwner({ owner })//.then(data => data.map(async d => (await fetch(d.uri)).json()))
            //.then(data => nfts.push(data[0]))//data.map(d => fetch(d.uri).then(res => res.json()).then(data => nfts.push(data))))
        
        for (let d of data) {
            const metadata = await (await fetch(d.uri)).json();
            nfts.push(metadata);
        }
    }
    
    return nfts;
}