import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Hero');

  return (
    <main className='z-10 min-h-screen'>
      <video
        className='fixed left-0 top-0 z-0 min-h-full object-cover'
        autoPlay
        muted
        loop
      >
        <source
          src='https://res.cloudinary.com/dsbhmynmq/video/upload/ac_none,q_auto:low,vc_auto/v1669323859/AmbrosiaLab/sour-cherry-blossom_uowq2m_xokjws.webm'
          type='video/webm'
        />
      </video>
      <header className='absolute z-10 flex min-h-screen min-w-full flex-col place-content-center place-items-center gap-2 bg-gradient-to-b from-viva-700/10 to-viva-700'>
        <h1 className='text-4xl lg:text-6xl'>{t('title')}</h1>
        <h2 className='text-lg lg:text-2xl'>{t('subtitle')}</h2>
      </header>
    </main>
  );
}
