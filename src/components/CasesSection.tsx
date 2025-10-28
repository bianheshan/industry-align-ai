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
    school: "XX职业技术学院",
    title: "新能源汽车专业改革",
    result: "就业率提升至98%，获省级教学成果奖",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "2",
    school: "XX交通职业学院",
    title: "智能网联专业建设",
    result: "与5家头部企业建立深度合作",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "3",
    school: "XX汽车工程学院",
    title: "课程体系优化升级",
    result: "学生技能水平提升40%",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const CasesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">精选成功案例</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-strong">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-2xl rounded-full" />
                
                <div className="relative">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 text-primary">
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