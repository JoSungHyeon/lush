const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1600px] lg:h-[787px] items-center mx-auto justify-between gap-12 pb-24 pt-[calc(6em+72px)] px-4 lg:px-0">
      <div className="flex flex-col items-center justify-between lg:h-full w-full lg:w-auto">
        <img
          src="/img/banner/banner-txt.png"
          alt="Banner-txt"
          className="w-full object-contain max-w-[500px] lg:max-w-none mb-8 lg:mb-0"
        />
        <img
          src="/img/banner/banner-left.png"
          alt="Banner-left"
          className="w-full object-contain max-w-[500px] lg:max-w-none"
        />
      </div>
      <div className="w-full h-[400px] lg:h-full overflow-hidden relative">
        <img
          src="/img/banner/banner-right.png"
          alt="Banner-right"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-10 text-white">
          <strong className="text-2xl lg:text-4xl font-bold block mb-1">
            건강한 빛을 위한 첫걸음,
          </strong>
          <strong className="text-2xl lg:text-4xl font-bold block mb-2">
            지금 시작하세요.
          </strong>
          <p className="text-xs lg:text-sm text-white">
            매일을 특별하게 만드는 작은 변화가 시작됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
