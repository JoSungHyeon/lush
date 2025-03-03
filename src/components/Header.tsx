import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-black fixed top-0 left-0 w-full z-10 bg-white max-lg:h-[72px]">
      {/* 햄버거 버튼 (모바일) */}
      <button
        className="hidden max-lg:block absolute right-4 top-4 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-6 h-4">
          <div
            className={`absolute w-6 h-0.5 bg-black transition-all top-0 ${
              isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-black transition-all top-1/2 -translate-y-1/2 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-black transition-all bottom-0 ${
              isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : ''
            }`}
          ></div>
        </div>
      </button>

      {/* 네비게이션 메뉴 */}
      <ul
        className={`flex justify-center items-center max-lg:flex-col max-lg:w-full max-lg:absolute max-lg:top-full max-lg:bg-white max-lg:border-b max-lg:border-black ${isOpen ? 'max-lg:block' : 'max-lg:hidden'}`}
      >
        <li>
          <a
            href=""
            className="px-10 py-6 block max-lg:w-full max-lg:text-center hover:bg-gray-100"
          >
            러쉬소개
          </a>
        </li>
        <li>
          <a
            href=""
            className="px-10 py-6 block max-lg:w-full max-lg:text-center hover:bg-gray-100"
          >
            캠페인
          </a>
        </li>
        <li>
          <a
            href=""
            className="px-10 py-6 block max-lg:w-full max-lg:text-center hover:bg-gray-100"
          >
            스파
          </a>
        </li>
        <li>
          <a
            href=""
            className="px-10 py-6 block max-lg:w-full max-lg:text-center hover:bg-gray-100"
          >
            매장안내
          </a>
        </li>
        <li>
          <a
            href=""
            className="px-10 py-6 block max-lg:w-full max-lg:text-center hover:bg-gray-100"
          >
            B2B
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
