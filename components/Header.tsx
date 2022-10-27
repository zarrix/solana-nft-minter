import React from 'react'
import Image from 'next/image'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function Header() {
    return (
        <div className='text-white p-2 flex justify-between items-center bg-[#2A2B2A]'>
            {/* Logo */}
            <h1 className='text-3xl font-mono font-extrabold md:pl-10'>Minter</h1>

            {/* Wallet */}
            {/* <button className='flex items-center justify-center px-3 space-x-2 rounded 
            shadow-md shadow-black bg-blue-900 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                <span className='hidden md:inline-flex'>Connect Wallet</span>
            </button> */}
            <WalletMultiButton />
        </div>
    )
}

export default Header