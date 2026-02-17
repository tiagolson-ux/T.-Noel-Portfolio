import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

export default function Projects() {
  return (
    <SectionContainer>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Technical Solutions & Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card title="GigGoals App">
            A MERN full-stack application with authentication,
            protected routes, and job tracking functionality.
          </Card>

          <Card title="Auth System">
            JWT-based authentication with secure login,
            protected dashboard access, and token persistence.
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
