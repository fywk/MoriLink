import { Dialog } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Modal({ isOpen, setIsOpen, children }: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dutch-white/75 bg-[radial-gradient(#f4ecca_15%,_transparent_15%),_radial-gradient(#f4ecca_14%,_transparent_14%)] bg-[length:25px_25px] bg-[position:0_0,12.5px_12.5px] bg-repeat"
        aria-hidden="true"
      ></div>

      {/* Container for dialog */}
      <div className="fixed inset-0 flex items-center justify-center px-5 py-8">
        {/* Actual dialog panel */}
        <Dialog.Panel className="grid w-full max-w-xl grid-rows-[auto_auto_45px] rounded-[2.75rem] bg-alabaster p-5 shadow-md">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="h-fit w-fit rounded-full p-2 ring-tiffany-blue hover:bg-[#ece5d4] focus:outline-none active:bg-[#ece5d4] ui-focus-visible:ring-3"
          >
            <IconX size={29} stroke={2.375} className="text-beaver" />
          </button>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
