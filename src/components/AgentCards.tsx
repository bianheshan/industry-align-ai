import { MapPin, Users, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const agents: AgentCard[] = [
  {
    id: "regional",
    title: "区域产业分析智能体",
    description: "基于实时产业数据，深度分析区域汽车产业发展趋势与人才需求特征",
    icon: <MapPin className="w-8 h-8" />,
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: "talent",
    title: "人才需求分析智能体",
    description: "精准识别岗位能力要求，智能匹配专业技能与产业需求",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "curriculum",
    title: "培养方案修订智能体",
    description: "智能生成与优化人才培养方案，确保教学内容与产业发展同步",
    icon: <FileText className="w-8 h-8" />,
    gradient: "from-cyan-500 to-purple-500",
  },
];

const AgentCards = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          三大智能体助力精准育人
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-strong hover:-translate-y-2">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${agent.gradient} rounded-xl mb-6 shadow-medium text-white`}>
                  {agent.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {agent.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {agent.description}
                </p>
                
                {/* Action button */}
                <Button 
                  className="w-full group/btn bg-gradient-primary hover:shadow-medium transition-all duration-300"
                >
                  <span>进入智能体</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentCards;