import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '@/app/icon.svg';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className='fixed top-0 z-50 flex min-w-full flex-row place-content-center place-items-center gap-2 border-b-[1px] border-dashed border-viva-50/50 p-2 backdrop-blur-lg transition-all md:right-0 md:top-auto md:min-h-screen md:min-w-fit md:flex-col md:border-b-0 md:border-l-[1px]'>
      <Link className='mb-2' href='/'>
        <Image
          className='aspect-square h-12 w-12'
          src={logo}
          alt={'Ambrosialab Logo'}
          aria-label='Home'
        />
      </Link>
      <Link href='/about' className='font-semibold'>
        {t('about')}
      </Link>
      <Link href='/research' className='font-semibold'>
        {t('research')}
      </Link>
      <Link href='/team' className='font-semibold'>
        {t('team')}
      </Link>
      <Link href='/contact' className='font-semibold'>
        {t('contact')}
      </Link>
    </nav>
  );
}
