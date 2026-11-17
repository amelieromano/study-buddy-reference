// The My profile page: a big blob avatar and a form to fill in your study details.
import BlobAvatar from "@/components/BlobAvatar";
import ProfileForm from "@/components/ProfileForm";

export default function ProfilePage() {
  return (
    <section className="pt-6 flex flex-col items-center">
      <BlobAvatar shape="flower" color="tomato" eyes="wide" size={160} />
      <h1 className="mt-4 font-display font-bold text-4xl sm:text-5xl">My profile</h1>
      <p className="mt-2 text-lg">Tell people what you’re studying and when you’re free.</p>
      <ProfileForm />
    </section>
  );
}
