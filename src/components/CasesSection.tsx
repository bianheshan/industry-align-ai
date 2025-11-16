import { Award, Building2, TrendingUp } from "lucide-react";

interface Case {
  id: string;
  school: string;
  title: string;
  result: string;
  icon: React.ReactNode;
}

const cases: Case[] = [
  {
    id: "1",
    school: "XX幼儿师范学院",
    title: "托育服务专业改革",
    result: "就业率提升至96%，获省级教学成果奖",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "2",
    school: "XX职业技术学院",
    title: "婴幼儿照护专业建设",
    result: "与8家托育机构建立深度合作",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "3",
    school: "XX师范高等专科学校",
    title: "早期教育课程优化升级",
    result: "学生专业技能水平提升45%",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const CasesSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">精选成功案例</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-card/90 backdrop-blur-2xl rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-strong shadow-medium hover:-translate-y-2">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4 text-primary shadow-soft group-hover:scale-110 transition-transform duration-500">
                    {caseItem.icon}
                  </div>

                  <div className="text-sm font-medium text-primary mb-2">
                    {caseItem.school}
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {caseItem.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {caseItem.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;