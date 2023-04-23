import Link from 'next/link'
import Nav from './Nav'
import Image from 'next/image'
import Logo from '../../public/logo.png'

const navItems = [
  { name: 'About', routePath: '/about' },
  { name: 'Contect', routePath: '/contect' },
  { name: 'Try', routePath: '/preterview' },
]

const Header: React.FC = () => {
  return (
    <header className="w-full h-14 sm:h-16 fixed z-10 flex justify-center px-5 sm:px-8 bg-white border-b">
      <div className="max-w-screen-lg w-full flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width={100} height={30} className="sm:w-250 w-100" />
          </Link>
        </div>
        <Nav navItems={navItems} />
      </div>
    </header>
  )
}

export default Header
