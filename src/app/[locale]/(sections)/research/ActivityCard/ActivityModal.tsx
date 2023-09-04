'use client';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function ActivityModal({
  learnMore,
  title,
  info,
}: {
  learnMore: string;
  title: string;
  info: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='inline-flex h-[35px] items-center justify-center border border-viva-300 px-2 text-sm font-medium leading-none focus:outline-none'>
          {learnMore}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-viva-900/80 data-[state=open]:animate-overlayShow' />
        <Dialog.Content className='fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] border border-viva-100 bg-viva-800 p-[25px] shadow-lg data-[state=open]:animate-contentShow focus:outline-none'>
          <Dialog.Title className='m-0 text-[17px] text-xl font-medium'>
            {title}
          </Dialog.Title>
          <Dialog.Description className='mb-5 mt-[10px] max-h-[400px] overflow-y-auto whitespace-pre-line text-[15px] leading-normal scrollbar-thin scrollbar-track-viva-700 scrollbar-thumb-viva-300 p-1'>
            {info}
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className='absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center border-none focus:outline-none'
              aria-label='Close'
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
