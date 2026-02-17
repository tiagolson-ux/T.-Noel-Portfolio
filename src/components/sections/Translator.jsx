import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

export default function Translator() {
  return (
    <SectionContainer>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          How I Translate Technical Systems Into Business Outcomes
        </h2>

        {/* Architecture Explanation */}
        <div className="mb-16 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="bg-slate-200 p-6 rounded-lg">
              Frontend
            </div>
            <div className="bg-slate-200 p-6 rounded-lg">
              API
            </div>
            <div className="bg-slate-200 p-6 rounded-lg">
              Database
            </div>
          </div>

          <p className="text-slate-600 max-w-2xl mx-auto">
            I simplify system architecture into clear, business-friendly
            explanations that align engineering decisions with measurable
            outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-3">
              Before & After Analysis
            </h3>
            <p className="text-slate-600">
              Demonstrate how technical improvements directly impact user
              adoption, retention, and business KPIs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-3">
              JWT Explained Simply
            </h3>
            <p className="text-slate-600">
              I translate authentication systems into real-world analogies
              stakeholders understand — like secure ID badges for digital
              systems.
            </p>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}

