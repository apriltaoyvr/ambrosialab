import { useTranslations } from 'next-intl';

export default function ActivityCard({ keyName }: { keyName: string }) {
  const t = useTranslations(`Research.${keyName}`);

  return (
    <section className='flex flex-col gap-1 p-2 border border-viva-200 place-items-center justify-between max-w-md h-full'>
      <header className='text-center'>
        <hgroup>
          <h3 className='text-xl font-semibold'>{t('title')}</h3>
          <span className='max-w-prose'>{t('description')}</span>
        </hgroup>
      </header>
      <aside>
        <button className='text-sm'>Learn more</button>
      </aside>
    </section>
  );
}
