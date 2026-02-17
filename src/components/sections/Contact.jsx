import SectionContainer from "../ui/SectionContainer";

export default function Contact() {
  return (
    <SectionContainer>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Let’s Connect
        </h2>

        <p className="text-slate-600 mb-6">
          Open to opportunities in Software Engineering, Technical Success, 
          and Product-facing roles.
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-slate-900 font-medium">
          <a href="mailto:your-email@example.com">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </SectionContainer>
  );
}

