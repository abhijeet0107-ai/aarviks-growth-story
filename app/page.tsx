import AgeCounter from "./components/AgeCounter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 dark:from-zinc-900 dark:to-zinc-800 font-serif">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 sm:py-32 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-amber-100/20 to-transparent dark:from-amber-900/20"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-full bg-gradient-to-l from-rose-100/20 to-transparent dark:from-rose-900/20"></div>
          <div className="absolute inset-0 bg-[url('/hero-dots.svg')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-amber-800 dark:text-amber-200 drop-shadow-md">
            Welcome, Little Aarvik
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl">
            Born on February 5th, 2026 to the loving parents Abhijeet Kumar & Ritu Priya,
            Baby Aarvik has already filled our days with wonder, laughter, and endless joy.
            Every moment with you is a precious story we're honored to tell.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <AgeCounter className="mx-auto md:mx-0" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-6 sm:py-28 lg:py-32 max-w-4xl mx-auto">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-800 dark:text-amber-200">
            A Story in the Making
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-50 dark:border-amber-900/20">
              <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">First Smile</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Your first smile lit up our world like sunrise through morning mist.
                We'll never forget how your eyes crinkled and your whole being seemed to glow.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-50 dark:border-amber-900/20">
              <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">Tiny Triumphs</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                From grasping our fingers to lifting your head during tummy time,
                each small victory is a milestone we celebrate with hearts full of pride.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-50 dark:border-amber-900/20">
              <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">Sweet Dreams</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Watching you sleep, peaceful and trusting, reminds us of life's purest moments.
                Your breathing is our favorite lullaby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Tribute */}
      <section className="relative py-20 px-6 bg-amber-50 dark:bg-zinc-900/50">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-800 dark:text-amber-200">
            To Abhijeet & Ritu
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Your love created this miracle. In your eyes, Aarvik finds safety, in your arms,
            comfort, and in your hearts, a home. Thank you for sharing this precious journey with us.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 text-center text-zinc-600 dark:text-zinc-400">
        <p className="mb-4">
          <span className="font-medium">Last updated:</span> {new Date().toLocaleDateString()}
        </p>
        <p>
          Made with love for Baby Aarvik &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}