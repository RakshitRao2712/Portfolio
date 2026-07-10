import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Button } from "@/components/ui/button";

export default function DemoOne() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <WebGLShader />
      <div className="relative  p-2 w-full mx-auto max-w-3xl">
        <main className="relative py-10 overflow-hidden bg-black/40 backdrop-blur-sm">
          <h1 className="mb-3 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">Let's Connect</h1>
          <p className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg">click the card above to visit my linkedin.</p>


        </main>
      </div>
    </div>
  )
}
