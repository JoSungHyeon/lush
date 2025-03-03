const MiddleText = () => {
  return (
    <div className="text-center py-12 lg:py-24 px-4 lg:px-0">
      {/* 모바일 버전 - 한 줄로 표시 */}
      <h2 className="text-lg font-bold max-w-[280px] m-auto keep-all mb-4 lg:hidden">
        " 러쉬는 자연에서 얻은 신선한 재료와 동물실험을 하지 않는 정직한 재료를
        사용하여 모든 제품을 손으로 만듭니다. "
      </h2>

      {/* 데스크톱 버전 - 여러 줄로 표시 */}
      <div className="hidden lg:block">
        <h2 className="text-2xl font-bold max-w-[400px] m-auto keep-all">
          " 러쉬는 자연에서 얻은 신선한
        </h2>
        <h2 className="text-2xl font-bold m-auto keep-all">
          재료와 동물실험을 하지 않는 정직한 재료를
        </h2>
        <h2 className="text-2xl font-bold max-w-[400px] m-auto keep-all mb-4">
          사용하여 모든 제품을 손으로 만듭니다. "
        </h2>
      </div>

      <p className="text-xs lg:text-sm text-[#222222] max-w-[280px] lg:max-w-none mx-auto">
        더불어 공정 거래, 인권 보호, 포장 최소화 등 다양한 캠페인 활동을 통해
        기업 윤리와 신념을 알리고 있습니다.
      </p>
    </div>
  );
};

export default MiddleText;
