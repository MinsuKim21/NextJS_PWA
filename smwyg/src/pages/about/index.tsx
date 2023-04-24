export default function About() {
  return (
    <main className="pt-20 flex flex-col space-y-10 justify-around px-20 mb-30">
      <div className="w-full">
        <h1 className="text-primary w-full text-2xl font-black">PWA란?</h1>

        <p className="text-primary text-xl font-black">Progressive Web App의 준말 </p>
        <p className="text-xl font-black break-words">
          웹사이트가 앱스토어에서 다운받은 네이티브 앱처럼 사용 할 수 있음 앱개발자가 아니어도
          웹으로 앱을 만들 수 있다. <br /> <del>거지같은 ReactNative 안녕!!</del>
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-primary w-full text-2xl font-black">앱 다운 방법</h1>
        <div className="text-xl font-black">
          <br />
          <p>안드로이드</p>
          <ol type="1" className="!list-decimal pl-7 sm:text-xl sm:font-black text-base font-bold">
            <li>크롬으로 next-js-pwa-gules.vercel.app 접속</li>
            <li>점세개 메뉴 누름 (캐밥메뉴라고 함 ㅋㅋ)</li>
            <li>SMWYG 설치 누름</li>
            <li>화면에 표시된 안내를 따라함</li>
          </ol>
        </div>
        <br />
        <div className="text-xl font-black">
          <p>IOS</p>
          <ol type="1" className="!list-decimal pl-7 sm:text-xl sm:font-black text-base font-bold">
            <li>사파리로 next-js-pwa-gules.vercel.app 접속</li>
            <li>책깔피 옆에 공유버튼 누름</li>
            <li>홈 화면에 추가 누름</li>
            <li>화면에 표시된 안내를 따라함</li>
          </ol>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-primary w-full text-2xl font-black">왜 만들었냐</h1>
        <p className="text-xl font-black">
          걍 면접 질문 찾아서 풀어보고 정답 찾아서 대조하는거 귀찮아서 만듬, <br />
          겸사겸사 NextJS랑 SEO 최적화 PWA 공부하고 있는 거지
          <br /> 이왕 만든거 님들도 쓰셈ㅋㅋ
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-primary w-full text-2xl font-black">후원하기</h1>
        <p className="font-bold text-xl">
          ChatGPT 4를 이용해서 만들어진거라 보수적으로 약 700토큰임 건당 $0.03씩임.. 아래링크 걸어둠
          후원해줭 ㅠㅠ
          <br />
          밥먹고 살자고 하는짓인데 밥을 굶으면 억울하자나.. 그래서 후원해주면 감사하겠음
        </p>
        <a className="text-myPupple font-bold text-lg" href="https://toss.me/민수는혼란스럽다">
          후원하기
        </a>
      </div>
    </main>
  )
}
