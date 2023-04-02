"use client";

import { useState } from "react";

import Modal from "./Modal";

type Props = {
  children: React.ReactNode;
  modalTitle?: string;
  modalContent: React.ReactNode;
};

export default function ModalOpener({
  children,
  modalTitle,
  modalContent,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="w-full" onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={modalTitle}>
        {modalContent}
      </Modal>
    </>
  );
}
