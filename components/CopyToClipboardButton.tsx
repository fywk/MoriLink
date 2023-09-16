"use client";

import { ID_PLACEHOLDER } from "@/lib/constants";

type Props = {
  text: string;
  children: React.ReactNode;
};

export default function CopyToClipboardButton({ text, children }: Props) {
  if (text === ID_PLACEHOLDER) return null;

  async function copyTextToClipboard(text: string) {
    return await navigator.clipboard.writeText(text);
  }

  function supportsPopover(): boolean {
    return HTMLElement.prototype.hasOwnProperty("popover");
  }

  function showToast() {
    // Create a toast popover element
    const toast = document.createElement("article");
    toast.popover = "manual"; // manual popover state cannot be "light dismissed"
    toast.classList.add("toast-popover");

    // Give the toast its text content, and add it to the DOM
    toast.textContent = "Copied to the clipboard.";
    document.body.appendChild(toast);

    // Show the popover
    toast.showPopover();

    // Remove the toast from the DOM after 3 seconds
    setTimeout(() => {
      toast.hidePopover();
      toast.remove();
    }, 3000);
  }

  function handleClick() {
    copyTextToClipboard(text).catch((err) => {
      console.log(err);
    });

    const popoverIsSupported = supportsPopover();
    if (popoverIsSupported) showToast();
  }

  return (
    <button onClick={handleClick} className="h-full" type="button">
      {children}
    </button>
  );
}
