import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import ListingItem from '../Components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListing();
      } catch (err) {
        console.log(err);
      }
    };

    const fetchRentListing = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListing();
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSaleListing = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOfferListing();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next <span className='text-slate-500'>perfect</span> <br />place with ease</h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Deva Estate is the best place to find your next perfect place to live.
          <br />
          We have a wide range of prperties for you to choose from.
        </div>
        <Link className='text-xs sm:text-sm text-blue-800 font-bold hover:underline' to={'/search'}>
          Lets get started...
        </Link>
      </div>

      <Swiper navigation>
        {offerListings && offerListings.length > 1 && offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div className="h-[500px]" style={{ background: `url(${listing.imageURLs[0]}) center no-repeat`, backgroundSize: 'cover' }} key={listing._id}></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
                Show more offers
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                Show more places for rent
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
                Show more places for sale
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div >
  )
}
