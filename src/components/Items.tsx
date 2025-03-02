const Items = () => {
  return (
    <div className="flex max-w-[1200px] items-center mx-auto justify-between py-24 gap-12">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-center mb-10">보디 스프레이</p>
        <img
          src="/img/items/item_1.png"
          alt="body-spray class"
          className="w-[80%]"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-center mb-10">헤어 케어</p>
        <img src="/img/items/item_2.png" alt="hair-care" className="w-[80%]" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-center mb-10">바디 케어</p>
        <img src="/img/items/item_3.png" alt="body-care" className="w-[80%]" />
      </div>
    </div>
  );
};

export default Items;
