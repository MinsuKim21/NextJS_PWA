import Link from 'next/link'
import { useRouter } from 'next/router'

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
    <nav>
      <ul className="w-full flex flex-row space-x-2">
        {navItems.map((item) => {
          return (
            <li
              key={item.routePath}
              className="btn btn-ghost sm:font-black font-bold md:text-base text-2xs px-0"
            >
              <Link href={item.routePath} className={getLinkClassName(item.routePath)}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
