export default function FrameCorners({
  inset = "1.5rem",
  className = "",
}: {
  inset?: string;
  className?: string;
}) {
  const corner = "absolute h-7 w-7 border-gold/50";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-10 ${className}`}
      style={{ top: inset, left: inset, right: inset, bottom: inset }}
    >
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}
