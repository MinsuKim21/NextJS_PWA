type ContextBoxProps = {
  firstContext?: string
  secContext?: string
  time: string
}

export default function ContextBox({ firstContext, secContext, time }: ContextBoxProps) {
  return (
    <div className="w-full">
      {/* 유저메시지 */}
      {firstContext && (
        <>
          <p className="text-right px-5 text-white">{time}</p>
          <div className="flex flex-row items-center justify-end py-2 px-4">
            <div className="avatar online mb-auto">
              <div className="w-12 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
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
            <div className="avatar online mb-auto">
              <div className="w-12 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
