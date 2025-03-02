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
      <div className="w-full h-full overflow-hidden relative">
        <img
          src="/img/banner/banner-right.png"
          alt="Banner-right"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <strong className="text-4xl font-bold block mb-1">
            건강한 빛을 위한 첫걸음,
          </strong>
          <strong className="text-4xl font-bold block mb-2">
            지금 시작하세요.
          </strong>
          <p className="text-sm text-white">
            매일을 특별하게 만드는 작은 변화가 시작됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
