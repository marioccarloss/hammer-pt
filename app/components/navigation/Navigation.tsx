import Link from 'next/link'
import { Logo } from '../Logo'
import useNavigation from '../../hooks/useNavigation';
import { Navigation } from '../../types/Navigation.d';
import Image from 'next/image';
import Planet from '../icons/Planet';
import Arrow from '../icons/Arrow';
import Hamburger from '../icons/Hamburger';

export function Navigation () {
  const { data: navigation, bgImage } = useNavigation();

  return (
    <header className='px-4 relative z-10'>
      <nav className='relative flex items-center py-7 gap-10 z-10'>
        <Link href='/'>
          <Logo />
        </Link>
        <ul className='hidden xl:flex lg:ml-auto lg:gap-6'>
          {navigation && navigation?.map((item: Navigation) => (
            <li key={item.slug} className='lg:flex lg:items-center'>
              <Link
                href={`${item.slug}`}
                className={`${!item.light ? 'link' : 'link--negative'} ${!item.cta ? '' : 'btn--outline lg:max-h-[48px] min-w-[166px]'}`}>
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
        <span className='hidden xl:flex items-center gap-1 text-light cursor-pointer'>
          <Planet />
          <span>SPA</span>
          <Arrow />
        </span>
        <div className='xl:hidden ml-auto'>
          <Hamburger />
        </div>
      </nav>
      <div className='absolute hidden lg:block right-0 top-0 md:w-[1200px] h-auto md:min-w-[625px] w-[800px]'>
        <Image
          src={bgImage.image.src}
          className='absolute sm:!left-[54%] lg:!left-54%] !left-[40%] lg:w-auto overflow-visible'
          alt={bgImage.image.alt}
          width={1020}
          height={600}
        />
      </div>
    </header>
  )
}
