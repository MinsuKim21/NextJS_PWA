import ContextBox from '@/components/ContextBox'
import TypingAni from '@/components/TypingAni'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import useDelayedRender from '@/hook/useDelayed'
import { useRouter } from 'next/router'

export default function Preterview() {
  const { data: session, status } = useSession()
  const { showHtml, html } = useDelayedRender(
    4900, //4900
    <ContextBox
      secContext={
        <>
          <li>
            <Link
              href={'/preterview/backend'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              백엔드
            </Link>
          </li>
          <li>
            <Link
              href={'/preterview/frontend'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              프론트엔드
            </Link>
          </li>
          <li>
            <Link
              href={'/preterview/computer-science'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              Computer Science
            </Link>
          </li>
          <li>
            <Link
              href={'/preterview/computer-science'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              Network
            </Link>
          </li>
          <li>
            <Link
              href={'/preterview/operting-system'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              Operating System
            </Link>
          </li>
          <li>
            <Link
              href={'/preterview/database'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              Database
            </Link>
          </li>
          <li>
            <Link
              href={'/preterview/algorithm'}
              className=" text-myGreen hover:text-lg hover:scale-105 hover:opacity-75 transition-all duration-500"
            >
              Algorithm
            </Link>
          </li>
          {/* 페이지 추가할때마다 링크 추가하기 */}
        </>
      }
    />
  )

  return (
    <main className="pt-20 flex flex-col space-y-2 justify-around md:mx-20 ">
      {status === 'authenticated' ? (
        <button
          className="btn btn-ghost bg-yellow-400 text-black hover:text-yellow-200"
          onClick={() => signOut()}
        >
          로그아웃
        </button>
      ) : (
        <button
          className="btn btn-ghost bg-yellow-400 text-black hover:text-yellow-200"
          onClick={() => {
            signIn('kakao')
          }}
        >
          카카오 로그인
        </button>
      )}
      {session ? (
        <>
          <ContextBox
            secContext={
              <TypingAni fontSize="text-base" fontWeight="font-bold">
                {session?.user?.name + '님 반갑습니다.' + ' 인터뷰를 진행 할 코스를 선택해주세요'}
              </TypingAni>
            }
          />
          {showHtml ? html : null}
        </>
      ) : (
        <></>
      )}
    </main>
  )
}
