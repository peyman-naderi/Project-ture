import React from "react";
import { IoHeart } from "react-icons/io5";
import Image from "next/image";

type Hotel = {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  price: string;
};

type Props = {
  hotel: Hotel;
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      {/* Image & Fav */}
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Image */}
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

        {/* Fav button */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <IoHeart className="w-3 h-3 text-gray-600" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-600 mt-3 font-medium mb-6">
          {hotel.location}
        </p>

        {/* Ratings */}
        <div className="flex items-center space-x-2">
          <div className="px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs">
            {hotel.rating}
          </div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">
            {hotel.reviews} Reviews
          </p>
        </div>

        {/* Prices */}
        <p className="mt-3 text-gray-700 font-medium">
          Starting from{" "}
          <span className="text-blue-600 font-bold">US${hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
