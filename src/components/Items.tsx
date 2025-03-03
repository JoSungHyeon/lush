const Items = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row max-w-[1200px] items-center mx-auto justify-between py-12 lg:py-24 gap-12">
        <div className="flex flex-col items-center w-full lg:w-auto">
          <p className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-10">
            보디 스프레이
          </p>
          <img
            src="/img/items/item_1.png"
            alt="body-spray class"
            className="w-[30%] lg:w-[80%]"
          />
        </div>
        <div className="flex flex-col items-center w-full lg:w-auto">
          <p className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-10">
            헤어 케어
          </p>
          <img
            src="/img/items/item_2.png"
            alt="hair-care"
            className="w-[30%] lg:w-[80%]"
          />
        </div>
        <div className="flex flex-col items-center w-full lg:w-auto">
          <p className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-10">
            바디 케어
          </p>
          <img
            src="/img/items/item_3.png"
            alt="body-care"
            className="w-[30%] lg:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
