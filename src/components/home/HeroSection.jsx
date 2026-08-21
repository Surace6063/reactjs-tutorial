const HeroSection = () => {
  return (
     <section class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p class="text-emerald-400 text-xs uppercase tracking-widest mb-4">● 4 tracks enrolling now</p>
      <h1 class="text-5xl font-bold leading-tight mb-6">Compile a career in tech.</h1>
      <p class="text-slate-400 text-lg mb-8 max-w-md">
        Live, instructor-led training in cloud, security, and software engineering —
        built for people switching into IT.
      </p>
      <div class="flex gap-4 mb-8">
        <a href="#tracks" class="bg-amber-400 text-slate-950 font-semibold px-5 py-3 rounded hover:bg-amber-300">
          View course tracks
        </a>
        <a href="#path" class="border border-slate-700 px-5 py-3 rounded hover:border-slate-500">
          See how training runs
        </a>
      </div>
      <p class="text-xs text-slate-500">
        <span class="text-slate-200">94%</span> placed ·
        <span class="text-slate-200">3,200+</span> grads ·
        <span class="text-slate-200">40+</span> hiring partners
      </p>
    </div>
    </section>
  )
}
export default HeroSection