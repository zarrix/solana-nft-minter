import React from 'react'

type Props = {
    name: string,
    description: string,
    imageUrl: string
}

const NftCard = ({name, description, imageUrl}: Props) => {
    return (
        <div className='w-full h-84 bg-white rounded p-5'>
            <img src={imageUrl} className='h-72 w-full' />
            <div className='pl-5'>
                <h1 className='text-lg font-bold'>{name}</h1>
                <h2 className='text-sm text-gray-400'>{description}</h2>
            </div>

        </div>
    )
}

export default NftCard