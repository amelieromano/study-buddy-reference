// The profile form. It shows what you submitted on screen, but nothing is saved yet: refresh and it's gone.
"use client";

import { useState } from "react";

type Profile = {
  name: string;
  course: string;
  module: string;
  freeHours: string;
};

const emptyProfile: Profile = { name: "", course: "", module: "", freeHours: "" };

const fields: { key: keyof Profile; label: string; placeholder: string }[] = [
  { key: "name", label: "Your name", placeholder: "e.g. Sam" },
  { key: "course", label: "Course", placeholder: "e.g. Psychology" },
  { key: "module", label: "Module you want help with", placeholder: "e.g. Statistics" },
  { key: "freeHours", label: "When you're free", placeholder: "e.g. Tue and Thu after 2pm" },
];

export default function ProfileForm() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [saved, setSaved] = useState<Profile | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(profile);
  }

  return (
    <div className="mt-8 w-full max-w-xl">
      <form onSubmit={handleSubmit} className="sticker-card p-6 flex flex-col gap-4">
        {fields.map((field) => (
          <label key={field.key} className="flex flex-col gap-1 font-semibold">
            {field.label}
            <input
              value={profile[field.key]}
              onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
              placeholder={field.placeholder}
              required
              className="rounded-xl border-[3px] border-ink bg-cream px-3 py-2 font-normal"
            />
          </label>
        ))}
        <button type="submit" className="sticker-button bg-tomato mt-2 self-start">
          Save my profile
        </button>
      </form>

      {saved && (
        <div className="sticker-card mt-6 p-6">
          <h2 className="font-display font-bold text-2xl">Hi, {saved.name}!</h2>
          <p className="mt-2">
            {saved.course} · {saved.module}
          </p>
          <p className="mt-1">Free: {saved.freeHours}</p>
        </div>
      )}
    </div>
  );
}
