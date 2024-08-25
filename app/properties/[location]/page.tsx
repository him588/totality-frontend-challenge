"use client";
import { properties } from "@/types";
import { Properties } from "@/data";
import { searchCriteriaContext } from "@/app/components/context";
import { Card, Header } from "@/app/components/core";
import SearchBar from "@/app/components/core/searchbar";
import { Footer } from "@/app/components/core";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

interface FilterCriteria {
  minValue: number;
  maxValue: number;
  location: string;
  rooms: string;
}

function Page() {
  const searchCriteria = useContext(searchCriteriaContext)?.searchCriteria;
  const [shownItem, setShownItem] = useState<properties[]>([]);

  function filterProperties(
    properties: properties[],
    criteria: FilterCriteria
  ): properties[] {
    return properties.filter((property) => {
      const { price, address, bedroom } = property;

      // Check if the price is within the specified range
      const matchesPrice =
        price >= criteria.minValue && price <= criteria.maxValue;

      // Check if at least one of the location criteria matches
      const matchesCity = criteria.location
        ? address.city.toLowerCase() === criteria.location.toLowerCase()
        : false;
      const matchesState = criteria.location
        ? address.state.toLowerCase() === criteria.location.toLowerCase()
        : false;
      const matchesCountry = criteria.location
        ? address.country.toLowerCase() === criteria.location.toLowerCase()
        : false;

      const matchesLocation = matchesCity || matchesState || matchesCountry;

      // Check if the rooms match
      const matchesRooms = bedroom === criteria.rooms;

      // Return true only if all conditions are strictly matched
      return matchesPrice && matchesLocation && matchesRooms;
    });
  }

  useEffect(() => {
    if (searchCriteria) {
      setShownItem(filterProperties(Properties, searchCriteria));
    }
  }, [searchCriteria]);

  return (
    <div className="min-h-screen w-full bg-white">
      <ToastContainer />
      <div className="w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
        <Header />
        <div className="px-4 sm:px-7 ">
          <SearchBar />
        </div>
      </div>
      <div className="h-auto min-h-[50vh] px-4 sm:px-7 py-2 flex flex-wrap gap-4 sm:gap-3">
        {shownItem.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-10">
            <p className="text-2xl sm:text-4xl font-bold text-center">
              Sorry, no data available regarding your query
            </p>
            <Image
              src={
                "https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?uid=R86992373&ga=GA1.1.1317662829.1724499322&semt=ais_hybrid"
              }
              alt="No data available"
              height={300}
              width={300}
              unoptimized
            />
          </div>
        ) : (
          shownItem.map((item, key) => (
            <Card
              key={key}
              className="w-full sm:w-[48%] lg:w-[24%]"
              properties={item}
            />
          ))
        )}
      </div>
      <div className="px-4 sm:px-7 py-4 bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9]">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
