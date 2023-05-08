export default function isClient(): boolean {
  return typeof window !== "undefined";
}
