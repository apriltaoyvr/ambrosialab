import { useTranslations } from 'next-intl';
import ActivityModal from './ActivityModal';

export default function ActivityCard({ keyName }: { keyName: string }) {
  const t = useTranslations(`Research`);

  return (
    <section className='flex h-full max-w-md flex-col place-items-center justify-between gap-1 border border-viva-200 p-2'>
      <header className='text-center'>
        <hgroup>
          <h3 className='text-xl font-semibold mb-2'>{t(`${keyName}.title`)}</h3>
          <span className='max-w-prose'>{t(`${keyName}.description`)}</span>
        </hgroup>
      </header>
      <ActivityModal
        learnMore={t('learnMore')}
        title={t(`${keyName}.title`)}
        info={t(`${keyName}.info`)}
      />
    </section>
  );
}
