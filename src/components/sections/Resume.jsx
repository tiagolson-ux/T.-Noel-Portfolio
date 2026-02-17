import SectionContainer from "../ui/SectionContainer";

export default function Resume() {
  return (
    <SectionContainer>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Resume & Documents
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-xl">
            Download Resume
          </button>

          <button className="border border-slate-900 px-6 py-3 rounded-xl">
            View Cover Letter
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}

