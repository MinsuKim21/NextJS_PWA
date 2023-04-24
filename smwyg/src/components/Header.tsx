import Link from 'next/link'
import Nav from './Nav'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import DarkLogo from '../../public/darklogo.png'
import { useState } from 'react'
import DarkModeToggle from '@/components/DarkModeToggleBtn'

const navItems = [
  { name: 'About', routePath: '/about' },
  { name: 'Blog', routePath: '/blog' },
  { name: 'Try it now', routePath: '/preterview' },
]

const Header: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)

  const handleDarkModeChange = (darkMode: boolean | ((prevState: boolean) => boolean)) => {
    setDarkMode(darkMode)
  }

  return (
    <header className="w-full bg-base-100 h-14 sm:h-16 fixed z-10 flex justify-center px-5 sm:px-8 border-b">
      <div className="max-w-screen-lg w-full flex justify-between items-center">
        <div>
          <Link href="/">
            {isDarkMode ? (
              <Image
                src={DarkLogo}
                alt="dark logo"
                width={100}
                height={30}
                priority
                className="sm:w-250 w-100"
              />
            ) : (
              <Image
                src={Logo}
                alt="light logo"
                width={100}
                height={30}
                priority
                className="sm:w-250 w-100"
              />
            )}
          </Link>
        </div>
        <Nav navItems={navItems} />
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={handleDarkModeChange} />
      </div>
    </header>
  )
}

export default Header
