import Image from "next/image";
import React from "react";

const AdsShowOne = () => {
  return (
    <div className="3xl:h-fulll mx-auto hidden max-w-md 3xl:block">
      <div className="overflow-hidden rounded-md">
        <Image
          width={300}
          height={400}
          className="h-full"
          quality={80}
          src="https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default AdsShowOne;
