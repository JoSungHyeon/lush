const BottomBanner = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-12 lg:py-24 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center">
        <div className="relative w-full lg:w-auto">
          <img
            src="/img/bottombanner/bottom_left.png"
            alt="bottom_left"
            className="w-full"
          />
          <div className="absolute bottom-4 lg:bottom-7 left-4 lg:left-7">
            <div className="pb-2 lg:pb-4">
              <p className="text-white font-bold text-sm lg:text-base">
                설문조사
              </p>
              <strong className="text-white text-xl lg:text-2xl font-bold">
                여러분의 러쉬 경험을 남겨주세요!
              </strong>
            </div>
            <button className="text-white px-6 lg:px-10 py-2 lg:py-4 border block text-sm lg:text-base">
              <a href="">바로 참여하기</a>
            </button>
          </div>
        </div>

        <div className="relative w-full lg:w-auto">
          <img
            src="/img/bottombanner/bottom_right.png"
            alt="bottom_right"
            className="w-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] px-4 lg:px-0">
            <strong className="block text-lg lg:text-2xl font-bold pb-3 lg:pb-4 text-center">
              러쉬의 이념과 가치
            </strong>
            <p className="keep-all w-full lg:w-[50%] mx-auto pb-6 lg:pb-10 text-xs lg:text-base leading-relaxed text-center">
              신선한 과일과 채소, 최상의 에센셜 오일, 그리고 안전한 원료를
              사용하여 효과적인 제품을 만들 수 있다는 것을 믿습니다.
            </p>
            <div className="grid grid-cols-3 gap-3 lg:gap-5 w-full">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex justify-center">
                  <img
                    src={`/img/bottombanner/right_${num}.png`}
                    alt={`right_${num}`}
                    className="w-[65%] lg:w-[70%]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
