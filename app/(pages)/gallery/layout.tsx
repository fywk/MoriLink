type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function GalleryLayout({ modal, children }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
