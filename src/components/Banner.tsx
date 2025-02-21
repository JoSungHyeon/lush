const Banner = () => {
  return (
    <div className="flex max-w-[1730px] mx-auto">
      <div className="w-[435px] flex flex-col items-center justify-center">
        <h2 className="text-[140px] font-bold w-full text-center leading-none">
          LUSH
        </h2>
        <img
          src="/img/banner/banner-left.png"
          alt="Banner-left"
          className="w-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/img/banner/banner-right.png"
          alt="Banner-right"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
