'use client'
import * as Dialog from '@radix-ui/react-dialog';
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
        <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 bg-viva-900/80' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] border border-viva-100 bg-viva-800 p-[25px] shadow-lg focus:outline-none'>
          <Dialog.Title className='m-0 text-[17px] text-xl font-medium'>
            {title}
          </Dialog.Title>
          <Dialog.Description className='mb-5 mt-[10px] whitespace-pre-line text-[15px] leading-normal'>
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
