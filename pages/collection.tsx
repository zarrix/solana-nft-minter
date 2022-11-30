import { useWallet } from '@solana/wallet-adapter-react';
import { NextPage } from 'next';
import Head from 'next/head';
import { type } from 'os';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Loading from '../components/Loading';
import NftCard from '../components/NftCard';
import { useMetaplex } from '../hooks/useMetaplex';
import { getAllNftsByOwner } from '../utils/nfts';

type Nft = {
    name: string,
    description: string,
    image: string
}

type Props = {}

const Collection: NextPage = () => {

    const metaplex = useMetaplex();
    const { publicKey } = useWallet();

    const [nfts, setNfts] = useState<Nft[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (publicKey) {
            setLoading(true);
            getAllNftsByOwner(metaplex)
                .then(data => {
                    setNfts(data)
                    setLoading(false);
                });
        } else {
        }
    }, [publicKey]);

    return (
        <div>
            <Head>
                <title>My Collection</title>
            </Head>

            <div className='w-full h-full mt-40 bg-[#512da8] flex flex-col items-center justify-center'>
                {/* search & filter section */}
                <form className='w-full lg:w-[50%] px-10  py-20'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Nfts..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                {/* MarketPlace */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-2'>

                    {loading ? 
                        <div className='w-screen flex justify-center items-center py-10'><Loading /></div>
                    : nfts.map((nft, index) => 
                        <NftCard key={index} name={nft.name} description={nft.description} imageUrl={nft.image} />
                    )}
                </div>
                {/* NFT Card */}



            </div>
        </div>
    )
}

export default Collection;