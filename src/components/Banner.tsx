const Banner = () => {
  return (
    <div className="flex max-w-[1600px] h-[787px] items-center mx-auto justify-between gap-12 py-24">
      <div className="flex flex-col items-center justify-between h-full">
        <img
          src="/img/banner/banner-txt.png"
          alt="Banner-txt"
          className="w-full object-contain"
        />
        <img
          src="/img/banner/banner-left.png"
          alt="Banner-left"
          className="w-full object-contain"
        />
      </div>
      <div className="w-full h-full overflow-hidden">
        <img
          src="/img/banner/banner-right.png"
          alt="Banner-right"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
