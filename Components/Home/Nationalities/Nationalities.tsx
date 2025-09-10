import SectionHeading from "@/Components/Helper/SeactionHeading";
import React from "react";
import NationalitiesSlider from "./NationalitiesSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20 ">
      {/* Section Heading */}
      <SectionHeading heading="Exploring Popular Destination" />
      {/* Section Content */}
      <div className="mt-14 w-[82%] mx-auto">
        {/* Slider */}
        <NationalitiesSlider />
      </div>
    </div>
  );
};

export default Destination;
