// Static export has no image optimizer, so serve the original file and
// prefix the GitHub Pages base path (next/image doesn't add it to src).
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const path = src.startsWith("/") ? `${base}${src}` : src;
  return `${path}?w=${width}`;
}
