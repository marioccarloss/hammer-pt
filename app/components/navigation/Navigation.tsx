import Link from 'next/link'
import { Logo } from '../Logo'
import useNavigation from '../../hooks/useNavigation';
import { Navigation } from '../../types/Navigation.d';
import Planet from '../icons/Planet';
import Arrow from '../icons/Arrow';

export function Navigation () {
  const { data: navigation } = useNavigation();

  return (
    <header className='px-3.5'>
      <nav className='flex items-center py-7 gap-7'>
        <Link href='/'>
          <Logo />
        </Link>
        <ul className='hidden lg:flex lg:ml-auto lg:gap-6'>
          {navigation && navigation?.map((item: Navigation) => (
            <li key={item.slug} className='lg:flex lg:items-center'>
              <Link
                href={`${item.slug}`}
                className={`${!item.light ? 'link' : 'link--negative'} ${!item.cta ? '' : 'btn--outline'}` }>
                  <span>
                    {item.name}
                  </span>
                  {item.childs && item.childs.length > 0 && (
                    <Arrow />
                  )}
              </Link>
            </li>
          ))}
        </ul>
        <span className='flex items-center gap-1 text-light cursor-pointer'>
          <Planet />
          <span>SPA</span>
          <Arrow />
        </span>
      </nav>
    </header>
  )
}
