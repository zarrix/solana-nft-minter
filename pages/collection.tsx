import { useWallet } from '@solana/wallet-adapter-react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import NftCard from '../components/NftCard';
import { useMetaplex } from '../hooks/useMetaplex';

type Nft = {
    name: string,
    description: string,
    imageUrl: string
}

type Props = {}

const collection = (props: Props) => {

    const metaplex = useMetaplex();
    const { publicKey } = useWallet();

    const [nfts, setNfts] = useState<Nft[]>();

    useEffect(() => {
        if (publicKey) {
            metaplex.nfts()
                .findAllByOwner({owner: publicKey})
                .then(data => console.log(data.map(d => fetch(d.uri).then( res => res))))  
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Connect your wallet!',
                text: 'Connect your wallet to see your nfts'
            })
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
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                {/* MarketPlace */}
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2'>
                    <NftCard />
                    <NftCard />
                    <NftCard />
                    <NftCard />
                    <NftCard />
                    <NftCard />
                    <NftCard />
                </div>
                {/* NFT Card */}



            </div>
        </div>
    )
}

export default collection;