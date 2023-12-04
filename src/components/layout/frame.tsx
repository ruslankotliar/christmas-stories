import Image from 'next/image';

const FrameComponent = () => {
  return (
    <>
      <div className="w-screen md:w-1/2 md:left-1/2 md:-translate-x-1/2 h-80 top-24 md:top-26 absolute -translate-y-1/2 z-30">
        <Image
          src={'/images/frame-top.png'}
          alt="Frame top image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      {['-left-10 md:left-0 -translate-x-1/2', '-right-10 md:right-0 translate-x-1/2'].map(
        (pos, index) => (
          <div key={index} className={`${pos} h-screen w-60 fixed z-30`}>
            <Image
              src={'/images/frame-side.png'}
              alt="Frame side image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )
      )}
    </>
  );
};

export default FrameComponent;
