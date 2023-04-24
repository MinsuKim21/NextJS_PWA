import { useState, useEffect } from 'react'

const useDelayedRender = (delay: number, html: JSX.Element) => {
  const [showHtml, setShowHtml] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHtml(true)
    }, delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return { showHtml, html }
}

export default useDelayedRender
