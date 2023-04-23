import Link from 'next/link'
import Nav from './Nav'
import Image, { StaticImageData } from 'next/image'
import Logo from '../../public/logo.png'
import DarkLogo from '../../public/darklogo.png'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'About', routePath: '/about' },
  { name: 'Contect', routePath: '/contect' },
  { name: 'Try', routePath: '/preterview' },
]

const Header: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const storedValue = localStorage.getItem('theme')
    if (storedValue !== null) {
      storedValue === 'light' ? setDarkMode(false) : setDarkMode(true)
    }
  }, [])

  return (
    <header className="w-full h-14 sm:h-16 fixed z-10 flex justify-center px-5 sm:px-8 border-b">
      <div className="max-w-screen-lg w-full flex justify-between items-center">
        <div>
          <Link href="/">
            {isDarkMode && isDarkMode ? (
              <Image
                src={DarkLogo}
                alt="dark logo"
                width={100}
                height={30}
                className="sm:w-250 w-100"
              />
            ) : (
              <Image
                src={Logo}
                alt="light logo"
                width={100}
                height={30}
                className="sm:w-250 w-100"
              />
            )}
          </Link>
        </div>
        <Nav navItems={navItems} />
      </div>
    </header>
  )
}

export default Header
