import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  return (
    <>
      <section className='flex flex-col place-content-center place-items-center'>
        <hgroup className='text-center'>
          <h1>{t('intro.title')}</h1>
        </hgroup>
        <article>
          <p className='paragraph'>{t('intro.info')}</p>
        </article>
      </section>
      <section className='flex flex-col place-content-center place-items-center '>
        <hgroup className='text-center'>
          <h2>{t('story.title')}</h2>
        </hgroup>
        <article>
          <p className='paragraph'>{t('story.info')}</p>
        </article>
      </section>
    </>
  );
}
