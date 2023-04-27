import ContextBox from '@/components/ContextBox'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Preterview() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <main className="pt-20 flex flex-col space-y-5 justify-around md:mx-20 ">
      {session ? (
        <button
          className="btn btn-ghost bg-yellow-400 text-black hover:text-yellow-200"
          onClick={() => signOut()}
        >
          로그아웃
        </button>
      ) : (
        <button
          className="btn btn-ghost bg-yellow-400 text-black hover:text-yellow-200"
          onClick={() => signIn('kakao')}
        >
          카카오 로그인
        </button>
      )}
      {session ? <ContextBox secContext={session?.user?.name + '님 반갑습니다.' + ''} /> : <></>}
    </main>
  )
}
