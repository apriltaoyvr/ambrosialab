import { useTranslations } from 'next-intl';
import ActivityCard from './ActivityCard';

export default function Research() {
  const t = useTranslations('Research');
  const keys = [
    'activities.cosmetics',
    'activities.food',
    'activities.medical',
    'activities.testing',
    'activities.patents',
    'activities.science',
    'activities.regulations',
  ] as const;

  return (
    <>
      <header className='text-center'>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
      </header>
      <main className='flex flex-row flex-wrap place-content-center place-items-center gap-2 md:grid md:grid-cols-2'>
        {keys.map((key) => (
          <ActivityCard key={key} keyName={key} />
        ))}
      </main>
    </>
  );
}
