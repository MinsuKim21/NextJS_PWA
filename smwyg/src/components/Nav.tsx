import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggleBtn from './DarkModeToggleBtn'

type NavProps = {
  navItems: { name: string; routePath: string }[]
}

const activeStyle = 'text-myGreen py-1 border-b-2 border-myGreen'
const defaultStyle = 'py-2 hover:opacity-50'

const Nav: React.FC<NavProps> = ({ navItems }) => {
  const router = useRouter()

  const getLinkClassName = (path: string): string => {
    return router.pathname === path ? activeStyle : defaultStyle
  }

  return (
    <nav className=" md:block">
      <ul className="w-auto flex flex-row justify-center items-center">
        {navItems.map((item) => {
          return (
            <li key={item.routePath} className="btn btn-ghost font-medium text-base px-4">
              <Link href={item.routePath} className={getLinkClassName(item.routePath)}>
                {item.name}
              </Link>
            </li>
          )
        })}
        <li>
          <DarkModeToggleBtn />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
