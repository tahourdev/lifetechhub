import Image from "next/image";
import React from "react";

const AdsShow = () => {
  return (
    <aside className=" col-span-12 flex h-full flex-col space-y-12 lg:col-span-12 3xl:col-span-4 4xl:col-span-3">
      <div className="mx-auto hidden min-h-[1000px] max-w-md 3xl:block 3xl:h-full">
        <div className="top-20 3xl:sticky">
          <div className="overflow-hidden rounded-md">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-auto hidden min-h-[1000px] max-w-md xl:block 3xl:h-full 4xl:block">
        <div className="top-20 3xl:sticky">
          <div className="overflow-hidden rounded-md">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1592228533283-d78f7c1cf453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW1hem9ufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-md 4xl:block">
        <div className="top-20 3xl:sticky">
          <div className="overflow-hidden rounded-md">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1585250003680-b12dbff01e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHdpdHRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-md 3xl:h-full 4xl:block">
        <div className="top-20 3xl:sticky">
          <div className="overflow-hidden rounded-md">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-md 3xl:h-[500px] 4xl:block">
        <div className="top-20 3xl:sticky">
          <div className="overflow-hidden rounded-md">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-md 3xl:h-full 4xl:block">
        <div className="top-20 space-y-8 3xl:sticky">
          <div className="overflow-hidden rounded-md ">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-md">
            <Image
              width={300}
              height={400}
              className="h-full"
              src="https://images.unsplash.com/photo-1585250003680-b12dbff01e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHdpdHRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdsShow;
