"use client";

import { useRouter } from "next/navigation";

import { Dialog } from "@headlessui/react";

export default function GalleryModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleClick = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onClose={handleClick} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-dutch-white/75" aria-hidden="true"></div>

      <div className="fixed inset-0 flex items-center justify-center px-5 py-8">
        <Dialog.Panel className="grid w-full max-w-3xl grid-flow-row rounded-[2.75rem] bg-alabaster p-5 py-[45px] shadow-md">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
