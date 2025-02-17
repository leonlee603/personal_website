export default function TagBadge({ label, count }: { label: string | null, count: number }) {
  return (
    <div
      className={`flex gap-2 rounded-md border border-secondary bg-secondary/80 px-3 py-1 text-sm hover:border-primary hover:text-primary`}
    >
      <span>{label}</span>
      <span className="text-primary">{count}</span>
    </div>
  );
}
