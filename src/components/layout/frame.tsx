import Image from 'next/image';

const FrameComponent = () => {
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
      {['-left-10 md:left-0 -translate-x-1/2', '-right-10 md:right-0 translate-x-1/2'].map(
        (pos, index) => (
          <div key={index} className={`${pos} h-screen w-52 fixed z-30`}>
            <Image
              src={'/images/frame-side.png'}
              alt="Frame side image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )
      )}
      <div className="w-2/3 md:w-1/2 left-1/2 -translate-x-1/2 bottom-0 h-20 md:h-40 absolute z-30">
        <Image
          src={'/images/frame-bottom.png'}
          alt="Frame bottom image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
};

export default FrameComponent;
