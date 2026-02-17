import SectionContainer from "../ui/SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <div className="w-64 h-64 bg-slate-200 rounded-xl"></div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            About Me
          </h2>

          <p className="text-slate-600 mb-4">
            I am a MERN Full-Stack Software Engineer with a background in
            recruiting, client engagement, and financial services.
          </p>

          <p className="text-slate-600 mb-4">
            My strongest skill is not just building applications — but
            translating complex technical systems into clear business
            solutions that stakeholders understand.
          </p>

          <p className="text-slate-600">
            I focus on connecting engineering decisions to real business
            impact and measurable outcomes.
          </p>

        </div>
      </div>
    </SectionContainer>
  );
}
