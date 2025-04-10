import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { CarIcon } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <Card>
      <div className="relative h-48 ">
        {car.images && car.images.length > 0 ? (
          <div className="relative w-full h-full">
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <CarIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default CarCard;
