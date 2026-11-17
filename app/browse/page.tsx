// The Browse page: course chips at the top and a grid of study buddy cards.

const courses = ["All courses", "Economics", "Computer Science", "History", "Psychology", "Law"];

const sampleBuddies = [
  { name: "Maya", course: "Economics", module: "Econometrics", freeHours: "Mon and Wed, 2–4pm" },
  { name: "Aisha", course: "Computer Science", module: "Algorithms", freeHours: "Tue, 10am–1pm" },
  { name: "Sofia", course: "History", module: "Modern British History", freeHours: "Thu after 3pm" },
];

export default function BrowsePage() {
  return (
    <section className="pt-6">
      <h1 className="font-display font-bold text-4xl sm:text-5xl">Browse buddies</h1>
      <p className="mt-2 text-lg">Pick a course to see who’s free.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {courses.map((course) => (
          <span key={course} className="rounded-full border-[3px] border-ink bg-paper px-4 py-1.5 font-display font-semibold">
            {course}
          </span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6">
        {sampleBuddies.map((buddy) => (
          <article key={buddy.name} className="sticker-card p-5">
            <div className="h-20 w-20 rounded-full bg-cream border-[3px] border-ink" />
            <h2 className="mt-4 font-display font-bold text-2xl">{buddy.name}</h2>
            <p className="font-semibold">{buddy.course}</p>
            <p>{buddy.module}</p>
            <p className="mt-3 text-sm">Free: {buddy.freeHours}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
