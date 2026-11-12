import Link from "next/link";

export default function ContentCard({ href, className = "", children }) {
  if (href) {
    return <Link href={href} className={`block min-w-0 ${className}`}>{children}</Link>;
  }

  return <article className={`min-w-0 ${className}`}>{children}</article>;
}
