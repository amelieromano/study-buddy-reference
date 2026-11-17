// One study buddy shown as a sticker card: blob avatar, name, course, module and free hours.
import BlobAvatar from "@/components/BlobAvatar";
import type { Buddy } from "@/data";

export default function BuddyCard({ buddy }: { buddy: Buddy }) {
  return (
    <article className="sticker-card p-5">
      <BlobAvatar shape={buddy.blob.shape} color={buddy.blob.color} eyes={buddy.blob.eyes} size={80} />
      <h2 className="mt-4 font-display font-bold text-2xl">{buddy.name}</h2>
      <p className="font-semibold">{buddy.course}</p>
      <p>{buddy.module}</p>
      <p className="mt-3 text-sm">Free: {buddy.freeHours}</p>
    </article>
  );
}
