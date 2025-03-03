const MiddleBanner = () => {
  return (
    <div className="hidden lg:flex py-24 max-w-[1600px] mx-auto flex-col gap-24">
      <div className="relative">
        <img
          src="/img/middlebanner/middle_1.png"
          alt="middle-banner1"
          className="w-full"
        />
      </div>
      <div className="relative">
        <img
          src="/img/middlebanner/middle_2.png"
          alt="middle-banner2"
          className="w-full"
        />
      </div>
      <div className="relative">
        <img
          src="/img/middlebanner/middle_3.png"
          alt="middle-banner3"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MiddleBanner;
