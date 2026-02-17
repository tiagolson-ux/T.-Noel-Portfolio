import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

export default function Demos() {
  return (
    <SectionContainer>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Business & Product Strategy Demonstrations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Card>
            <h3 className="text-xl font-semibold mb-3">
              Synchrony Bank – UX Optimization Demo
            </h3>
            <p className="text-slate-600 mb-4">
              Proposed improvements to credit card onboarding flow to reduce
              friction and increase completion rates.
            </p>
            <p className="text-sm text-slate-500">
              Focus: User authentication flow, dashboard clarity, and reduced
              onboarding drop-off.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-3">
              Capgemini – Enterprise System Translation Demo
            </h3>
            <p className="text-slate-600 mb-4">
              Demonstrated how to explain API architecture and JWT authentication
              to business stakeholders in non-technical language.
            </p>
            <p className="text-sm text-slate-500">
              Focus: Technical-to-business translation, architecture simplification,
              and stakeholder clarity.
            </p>
          </Card>

        </div>
      </div>
    </SectionContainer>
  );
}
