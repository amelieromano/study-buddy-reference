// The profile form. It shows your card on screen, but nothing is saved yet: refresh and it's gone.
"use client";

import { useState } from "react";
import BuddyCard from "@/components/BuddyCard";
import { courses } from "@/data";

type Profile = {
  name: string;
  course: string;
  module: string;
  freeHours: string;
};

const emptyProfile: Profile = { name: "", course: "", module: "", freeHours: "" };

const inputStyle = "rounded-xl border-[3px] border-ink bg-cream px-3 py-2 font-normal";

export default function ProfileForm() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [submitted, setSubmitted] = useState<Profile | null>(null);

  function update(key: keyof Profile, value: string) {
    setProfile({ ...profile, [key]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(profile);
  }

  return (
    <div className="mt-8 w-full max-w-xl">
      <form onSubmit={handleSubmit} className="sticker-card p-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1 font-semibold">
          Your name
          <input value={profile.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Sam" required className={inputStyle} />
        </label>
        <label className="flex flex-col gap-1 font-semibold">
          Course
          <select value={profile.course} onChange={(e) => update("course", e.target.value)} required className={inputStyle}>
            <option value="" disabled>
              Pick your course
            </option>
            {courses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 font-semibold">
          Module you want help with
          <input value={profile.module} onChange={(e) => update("module", e.target.value)} placeholder="e.g. Statistics" required className={inputStyle} />
        </label>
        <label className="flex flex-col gap-1 font-semibold">
          When you’re free
          <input value={profile.freeHours} onChange={(e) => update("freeHours", e.target.value)} placeholder="e.g. Tue and Thu after 2pm" required className={inputStyle} />
        </label>
        <button type="submit" className="sticker-button bg-tomato mt-2 self-start">
          Save my profile
        </button>
      </form>

      {submitted && (
        <div className="mt-8">
          <h2 className="font-display font-bold text-2xl">Your card</h2>
          <p className="mb-4">This is how other students will see you on Browse.</p>
          <BuddyCard buddy={{ id: 0, ...submitted, blob: { shape: "flower", color: "tomato", eyes: "wide" } }} />
        </div>
      )}
    </div>
  );
}
