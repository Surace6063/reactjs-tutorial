const ToolsList = () => {
  return (
     <section class="border-y border-slate-800 bg-slate-900/30">
    <div class="max-w-6xl mx-auto px-6 py-6">
      <p class="text-xs uppercase tracking-widest text-slate-600 mb-4">Tools you'll actually touch</p>
      <div class="flex flex-wrap gap-3 text-xs text-slate-400 font-mono">
        <span class="border border-slate-800 rounded-full px-3 py-1">AWS</span>
        <span class="border border-slate-800 rounded-full px-3 py-1">Kubernetes</span>
        <span class="border border-slate-800 rounded-full px-3 py-1">Terraform</span>
        <span class="border border-slate-800 rounded-full px-3 py-1">Linux</span>
        <span class="border border-slate-800 rounded-full px-3 py-1">Python</span>
        <span class="border border-slate-800 rounded-full px-3 py-1">React</span>
        <span class="border border-slate-800 rounded-full px-3 py-1">PostgreSQL</span>
      </div>
    </div>
  </section>
  )
}
export default ToolsList