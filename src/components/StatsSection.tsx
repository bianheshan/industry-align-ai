import { TrendingUp, Database, Sparkles, BookOpen } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
  suffix?: string;
}

const stats: Stat[] = [
  {
    label: "产业数据源",
    value: "150",
    suffix: "+",
    icon: <Database className="w-5 h-5" />,
  },
  {
    label: "AI模型调用",
    value: "10K",
    suffix: "+",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    label: "合作院校",
    value: "80",
    suffix: "+",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "准确率提升",
    value: "95",
    suffix: "%",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft text-center">
                <div className="inline-flex p-3 bg-gradient-primary rounded-lg mb-3 text-primary-foreground">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-muted-foreground">
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