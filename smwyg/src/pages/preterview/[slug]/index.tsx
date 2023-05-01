import ContextBox from '@/components/ContextBox'
import TypingAni from '@/components/TypingAni'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default function index({ params }: Props) {
  const { data: session } = useSession()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const [ans, setAns] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch('/api/generate-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: text }),
    }).then((response) => {
      setLoading(false)
      return response.json()
    })

    try {
      setAns(response.text)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(text)
  }, [text])

  useEffect(() => {
    console.log(ans)
  }, [ans])

  return (
    <>
      <main className="pt-20 flex flex-col space-y-2 justify-around md:mx-20 ">
        {session ? (
          <>
            <ContextBox
              secContext={
                <TypingAni fontSize="text-base" fontWeight="font-bold">
                  {`${
                    session?.user?.name
                  }님 반갑습니다. ${params.slug.toUpperCase()} 면접을 맡게된 AI입니다.`}
                </TypingAni>
              }
            />
            {ans && (
              <ContextBox
                secContext={
                  <TypingAni fontSize="text-base" fontWeight="font-bold">
                    {ans}
                  </TypingAni>
                }
              />
            )}
          </>
        ) : (
          <></>
        )}
      </main>
      <div className="w-full h-10 fixed bottom-0 z-10 mx-auto flex justify-center mb-10">
        <div className="w-60 h-full text-secondary flex ">
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3 my-auto" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
              stroke-width="4"
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="px-3 py-2 w-full rounded-md shadow-xl focus:outline-none focus:ring-2 focus:ring-myGreen focus:ring-opacity-50"
              placeholder="텍스트를 입력하세요"
              onChange={handleText}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params
  return {
    props: {
      params: {
        slug,
      },
    },
  }
}
