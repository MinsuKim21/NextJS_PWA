import ContextBox from '@/components/ContextBox'
import TypingAni from '@/components/TypingAni'
import useDelayedRender from '@/hook/useDelayed'

export default function Home() {
  const { showHtml, html } = useDelayedRender(
    3000,
    <div className="mt-20 sm:mx-20 mx-10 mb-36 bg-myOrange rounded-md animate-slide-top">
      <ContextBox
        firstContext="SMWYG는 뭐야??"
        secContext="Show Me What You Got!의 약자로, ChatGPT를 이용한 모의 면접 플랫폼입니다. AI를 활용해
        사용자의 잠재된 능력을 보여주세요!!!"
        time="12:34"
      />
      <ContextBox
        firstContext="면접은 어떻게 본다는거야??"
        secContext="보시는봐와 같이 대화형으로 진행됩니다. 인터넷에 많은 면접관련 질문을 수집해서 사용자에게 질문을 하고, 사용자가 답변을 하면 GPT를 사용하여 답변을 질문에 대한 답변에 대한 피드백을 줍니다."
        time="12:34"
      />
      <ContextBox
        firstContext="GPT를 신뢰할 수 있어??"
        secContext="GPT4 모델을 사용해서 답변하기에 GPT3보다 더욱 정확한 답변을 제공할 수 있습니다."
        time="12:35"
      />
      <ContextBox
        firstContext="웹사이트에서 밖에 지원을 안해?"
        secContext="아닙니다. SMWYG는 PWA를 지원하므로 앱 처럼 사용할 수 있습니다. ABOUT탭에서 자세한 내용을 확인해보세요."
        time="12:36"
      />
      <ContextBox
        firstContext="오!! 멋있는데!! 다른 기능은 없어?"
        secContext="다양한 테크 블로그를 크롤링해서 보여줍니다. 블로그를 통해 새로운 정보와 인사이트 받아보세요."
        time="12:36"
      />
      <ContextBox
        secContext="SMWYG에 대해 더 궁금하신게 있다면 상단에 TRY IT NOW 버튼을 눌러서 면접을 시작해보세요!"
        time="12:36"
      />
    </div>
  )

  return (
    <main className="pt-40">
      <div className="text-center">
        <TypingAni fontSize="xl:text-5xl md:text-4xl text-2xl" textColor="black">
          SMWYG?! 그게 뭐야??
        </TypingAni>
        {showHtml ? html : null}
      </div>
    </main>
  )
}
