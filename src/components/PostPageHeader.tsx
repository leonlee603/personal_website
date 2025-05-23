export default function PostPageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-3 py-8 md:py-9 lg:py-12">{children}</div>;
}
