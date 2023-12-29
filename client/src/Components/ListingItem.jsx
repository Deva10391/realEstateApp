import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
    return (
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
            <Link to={`/listing/${listing._id}`}>
                <img className='h-[320px] sm:h-[22px] w-full object-cover hover:scale-105 transition-scale duration-300' src={listing.imageURLs[0] || 'https://picsum.photos/300/200'} alt={listing.name} />
                <div className='p-3 flex flex-col gap-2 w-full'>
                    <p className='text-lg font-semibold text-slate-700 truncate'>{listing.name}</p>

                    <div className='flex items-center gap-1'>
                        <MdLocationOn className='h-4 w-4 text-green-700' />
                        <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
                    </div>

                    <p className='text-sm text-gray-600 line-clamp-2'>
                        {listing.description}
                    </p>

                    <p className='text-slate-500 mt-2 font-semibold'>
                        $
                        {listing.offer ? Number(listing.discountedPrice).toLocaleString('en-US') : Number(listing.regularPrice).toLocaleString('en-US')}
                        {listing.type === 'rent' && ' / month'}
                    </p>
                    <div className='text-slate-700 flex flex-row gap-4'>
                        <div className='font-bold text-xs'>
                            {listing.bathRooms > 1 ? `${listing.bedRooms} beds ` : `${listing.bedRooms} bed `}
                        </div>
                        <div className='font-bold text-xs'>
                            {listing.bathRooms > 1 ? `${listing.bathRooms} bathrooms ` : `${listing.bathRooms} bathroom `}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
