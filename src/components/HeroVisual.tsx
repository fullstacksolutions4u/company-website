import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-3/2 w-full max-w-3xl overflow-visible lg:-mr-16 lg:max-w-none xl:-mr-24">
      <div className="absolute inset-0 overflow-hidden rounded-3xl lg:rounded-r-none">
        <Image
          src="/women_banner.png"
          alt="AI-powered software engineering, visualized as a human-android hybrid profile with connected service capabilities"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 48rem, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>
    </div>
  );
}
