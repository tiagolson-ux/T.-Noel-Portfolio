import SectionContainer from "../ui/SectionContainer";

export default function Hero() {
  return (
    <SectionContainer>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Tia Noel
        </h1>

        <h2 className="text-2xl text-slate-700 mb-6">
          Full-Stack Engineer Bridging Technology & Business Strategy
        </h2>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          I design and build secure full-stack applications while translating
          complex technical systems into clear business impact.
        </p>
      </div>
    </SectionContainer>
  );
}
