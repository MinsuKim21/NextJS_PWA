import Skeleton from '@/components/Skeleton'
import { useState } from 'react'

export default function Blog() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <main className="pt-20 justify-around sm:mx-20 mx-10 h-full">
      {isLoading ? null : (
        <div className="mt-2 mx-4 space-y-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
      <iframe
        src="https://velog.io/tags"
        height="700"
        width="100%"
        sandbox=""
        seamless
        onLoad={() => setIsLoading(true)}
        className="overflow-y-hidden"
      />
    </main>
  )
}
