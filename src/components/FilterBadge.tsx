export default function FilterBadge({
  isActive,
  children,
}: {
  isActive: boolean, 
  children: React.ReactNode;
}) {
  return <div className={`rounded-full px-3 py-1 text-sm hover:bg-secondary/80 ${isActive ? "bg-secondary text-primary" : ""}`}>{children}</div>;
}
