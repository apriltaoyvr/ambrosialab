export default function SectionLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='flex min-h-screen flex-col place-content-center place-items-center gap-4 p-12'>
      {children}
    </main>
  );
}