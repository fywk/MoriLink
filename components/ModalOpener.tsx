"use client";

import { useState } from "react";

import Modal from "./Modal";

type Props = {
  children: React.ReactNode;
  modalContent: React.ReactNode;
};

export default function ModalOpener({ children, modalContent }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="w-full" onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalContent}
      </Modal>
    </>
  );
}
