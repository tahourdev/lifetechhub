import Image from "next/image";
import React from "react";

const AdsShow = () => {
  return (
    <aside className="col-span-12 flex flex-col space-y-12 lg:col-span-12 3xl:col-span-4 3xl:min-h-screen 4xl:col-span-3">
      <div className="mx-auto hidden max-w-md 3xl:block 3xl:h-full">
        <div className="top-20 3xl:sticky"></div>
      </div>
      <div className="mx-auto hidden max-w-md xl:block 3xl:h-full 4xl:block">
        <div className="top-20 3xl:sticky"></div>
      </div>
    </aside>
  );
};

export default AdsShow;
