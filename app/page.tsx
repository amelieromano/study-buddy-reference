// The Home page: the big title, a cluster of blob buddies and a button to start browsing.
import Link from "next/link";
import BlobAvatar from "@/components/BlobAvatar";
import Doodle from "@/components/Doodle";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center pt-10 sm:pt-16">
      <div className="relative">
        <Doodle kind="burst" color="cobalt" className="absolute -top-6 -right-10 w-12" />
        <h1 className="font-display font-bold text-6xl sm:text-8xl">Study Buddy</h1>
        <Doodle kind="squiggle" color="tomato" className="mx-auto mt-1 w-56 sm:w-80" />
      </div>
      <p className="mt-6 text-xl sm:text-2xl">Find someone to study with</p>

      <div className="mt-10 flex items-end justify-center -space-x-4">
        <BlobAvatar shape="cloud" color="cobalt" eyes="dots" size={96} className="-rotate-6" />
        <BlobAvatar shape="spiky" color="tomato" eyes="wide" size={120} />
        <BlobAvatar shape="arch" color="bubblegum" eyes="dots" size={104} className="rotate-3" />
        <BlobAvatar shape="round" color="forest" eyes="sleepy" size={88} className="-rotate-3" />
        <BlobAvatar shape="flower" color="bubblegum" eyes="wide" size={100} className="rotate-6" />
      </div>

      <Link href="/browse" className="sticker-button bg-tomato mt-12 text-xl">
        Find a buddy
      </Link>
    </section>
  );
}
