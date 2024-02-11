import Image from 'next/image';
import React from 'react';

const AdsShow = () => {
  return (
    <aside className=' 4xl:col-span-3 3xl:col-span-4 h-full flex flex-col col-span-12 space-y-12 lg:col-span-12'>
      <div className='hidden 3xl:block 3xl:h-full max-w-md mx-auto min-h-[1000px]'>
        <div className='3xl:sticky top-20'>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='4xl:block 3xl:h-full hidden xl:block max-w-md mx-auto min-h-[1000px]'>
        <div className='3xl:sticky top-20'>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1592228533283-d78f7c1cf453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW1hem9ufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='hidden 4xl:block max-w-md mx-auto'>
        <div className='3xl:sticky top-20'>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1585250003680-b12dbff01e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHdpdHRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='hidden 4xl:block 3xl:h-full max-w-md mx-auto'>
        <div className='3xl:sticky top-20'>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='hidden 4xl:block 3xl:h-full max-w-md mx-auto'>
        <div className='3xl:sticky top-20'>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='hidden 4xl:block 3xl:h-[500px] max-w-md mx-auto'>
        <div className='3xl:sticky top-20'>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='hidden 4xl:block 3xl:h-full max-w-md mx-auto'>
        <div className='3xl:sticky top-20 space-y-8'>
          <div className='rounded-md overflow-hidden '>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaWRhc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
          <div className='rounded-md overflow-hidden'>
            <Image
              width={300}
              height={400}
              className='h-full'
              src='https://images.unsplash.com/photo-1585250003680-b12dbff01e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHdpdHRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdsShow;
