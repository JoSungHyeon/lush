const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* 앱 다운로드 섹션 */}
          <div className="lg:w-[180px]">
            <p className="text-white text-base pb-4 font-bold">
              러쉬 앱 다운받기
            </p>
            <div className="flex lg:flex-col gap-2">
              <button className="w-[140px] lg:w-auto">
                <a href="">
                  <img
                    src="/img/footer/download_apple.png"
                    alt="down_apple"
                    className="w-full"
                  />
                </a>
              </button>
              <button className="w-[140px] lg:w-auto">
                <a href="">
                  <img
                    src="/img/footer/download_google.png"
                    alt="down_google"
                    className="w-full"
                  />
                </a>
              </button>
            </div>
          </div>

          {/* 고객센터와 기업선물 섹션 */}
          <div className="flex gap-8 lg:gap-16">
            <div>
              <p className="text-white text-base pb-4 font-bold">고객센터</p>
              <p className="text-[#a7a7a7] text-sm pb-2">
                webmaster@lush.co.kr
              </p>
              <a href="" className="text-[#a7a7a7] underline">
                러쉬톡 시작하기
                <img
                  src="/img/footer/icon_talk.png"
                  alt="icon_talk"
                  className="inline ml-2"
                />
              </a>
            </div>
            <div>
              <p className="text-white text-base pb-4 font-bold">기업선물</p>
              <p className="text-[#a7a7a7] text-sm">order@lush.co.kr</p>
            </div>
          </div>

          {/* 회사 정보 섹션 */}
          <div className="lg:flex-1">
            <p className="text-[#a7a7a7] text-sm pb-2">
              서울 강남구 학동로 336 (메이트리 빌딩(matree B/D)) 1층 주식회사
              러쉬코리아
            </p>
            <ul className="text-[#a7a7a7] text-sm list-disc pl-4 pb-2 space-y-1">
              <li>사이트 운영자 : 주식회사 러쉬코리아 I 대표이사 : 우미령</li>
              <li>사업자 등록번호 : 201-81-77964 사업자정보확인</li>
              <li>
                통신판매업 신고번호 : 2012-서울서초-0647 I 개인정보보호책임자 :
                장승웅
              </li>
            </ul>
            <p className="text-[#a7a7a7] text-sm">
              COPYRIGHT © LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* 약관 링크 섹션 */}
          <div className="order-first lg:order-last">
            <ul className="flex lg:flex-col gap-4 lg:gap-2 text-white text-sm lg:text-base">
              <li>
                <a href="">개인정보처리방침</a>
              </li>
              <li>
                <a href="">영상정보관리지침</a>
              </li>
              <li>
                <a href="">이용약관</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
