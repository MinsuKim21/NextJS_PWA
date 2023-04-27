type ContextBoxProps = {
  firstContext?: string | React.ReactNode
  secContext?: string | React.ReactNode
  time?: string
}

export default function ContextBox({ firstContext, secContext, time }: ContextBoxProps) {
  return (
    <div className="w-full">
      {/* 유저메시지 */}
      {firstContext && (
        <>
          <p className="text-right px-5 text-white">{time}</p>
          <div className="flex flex-row items-center justify-end py-2 px-4">
            <div className=" bg-primary text-primary-content py-2 px-4 rounded-xl max-w-xs break-all sm:text-lg text-base sm:font-semibold font-medium text-left">
              {firstContext}
            </div>
          </div>
        </>
      )}
      {/* 봇메시지 */}
      {secContext && (
        <>
          <p className="text-left px-5 text-white">{time}</p>
          <div className="flex flex-row items-center justify-start py-2 px-4">
            <div className="bg-secondary text-secondary-content py-2 px-4 rounded-xl max-w-xs break-all sm:text-lg text-base sm:font-semibold font-medium text-left">
              {secContext}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
