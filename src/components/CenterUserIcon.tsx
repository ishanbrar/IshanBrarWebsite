import Link from "next/link";
import Image from "next/image";

export function CenterUserIcon() {
  return (
    <Link
      href="/me"
      className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      aria-label="About me"
    >
      <Image
        src="/icons/user.gif"
        alt=""
        width={64}
        height={64}
        unoptimized
        className="h-14 w-14 object-contain sm:h-16 sm:w-16"
      />
    </Link>
  );
}
