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
    title: "区域托育产业分析智能体",
    description: "基于实时产业数据，深度分析区域托育行业发展趋势与人才需求特征",
    icon: <MapPin className="w-8 h-8" />,
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: "talent",
    title: "托育人才需求分析智能体",
    description: "精准识别托育岗位能力要求，智能匹配专业技能与行业需求",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "curriculum",
    title: "培养方案修订智能体",
    description: "智能生成与优化托育专业人才培养方案，确保教学内容与行业发展同步",
    icon: <FileText className="w-8 h-8" />,
    gradient: "from-cyan-500 to-purple-500",
  },
];

const AgentCards = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
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
              <div className="relative h-full bg-card/90 backdrop-blur-2xl rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-strong hover:-translate-y-3 shadow-medium">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-15 rounded-3xl transition-all duration-500`} />
                
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`relative inline-flex p-5 bg-gradient-to-br ${agent.gradient} rounded-2xl mb-6 shadow-strong text-white group-hover:scale-110 transition-transform duration-500`}>
                  {agent.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  className="w-full group/btn bg-gradient-primary hover:shadow-strong transition-all duration-500 hover:scale-105 shadow-medium backdrop-blur-xl"
                >
                  <span>进入智能体</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-500" />
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