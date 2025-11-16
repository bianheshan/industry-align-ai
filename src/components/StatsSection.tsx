import { TrendingUp, Database, Sparkles, BookOpen } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
  suffix?: string;
}

const stats: Stat[] = [
  {
    label: "托育数据源",
    value: "120",
    suffix: "+",
    icon: <Database className="w-5 h-5" />,
  },
  {
    label: "AI模型调用",
    value: "8K",
    suffix: "+",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    label: "合作院校",
    value: "65",
    suffix: "+",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "就业率提升",
    value: "92",
    suffix: "%",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-medium text-center shadow-soft hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative inline-flex p-4 bg-gradient-primary rounded-xl mb-3 text-primary-foreground shadow-medium group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;