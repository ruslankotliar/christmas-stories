'use client';

import getWindowDimensions from '@/hooks/useWindowDimensions';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FrameComponent = () => {
  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>();

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-screen md:w-2/3 md:left-1/2 md:-translate-x-1/2 h-28 md:h-48 top-20 md:top-42 fixed -translate-y-1/2 z-30">
        <Image
          src={'/images/frame-top.png'}
          alt="Frame top image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div
        className="absolute z-0 w-full flex flex-col 
      justify-start"
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className={`flex justify-between h-[50vh]`}>
            <div className="left-0 -translate-x-1/2 w-28 z-30">
              <div className="h-full">
                <Image
                  src={'/images/frame-side.png'}
                  alt="Frame side image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="-translate-y-24 h-full">
                <Image
                  src={'/images/frame-side.png'}
                  alt="Frame side image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="right-0 translate-x-1/2 w-28 z-30">
              <div className="h-full">
                <Image
                  src={'/images/frame-side.png'}
                  alt="Frame side image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="-translate-y-24 h-full">
                <Image
                  src={'/images/frame-side.png'}
                  alt="Frame side image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full h-20 bottom-0 z-30 flex translate-y-1/2">
        <div className="w-[60vw] h-full relative">
          <Image
            src={'/images/frame-bottom.png'}
            alt="Frame bottom image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="w-[60vw] h-full relative -translate-x-10">
          <Image
            src={'/images/frame-bottom.png'}
            alt="Frame bottom image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
};

export default FrameComponent;
