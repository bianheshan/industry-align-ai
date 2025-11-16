import { Clock, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Resource {
  id: string;
  title: string;
  type: string;
  lastModified: string;
  status: "completed" | "in-progress" | "draft";
}

const resources: Resource[] = [
  {
    id: "1",
    title: "2024年托育服务与管理专业培养方案",
    type: "培养方案",
    lastModified: "2小时前",
    status: "completed",
  },
  {
    id: "2",
    title: "婴幼儿照护行业发展分析报告",
    type: "分析报告",
    lastModified: "1天前",
    status: "in-progress",
  },
  {
    id: "3",
    title: "区域托育人才需求调研数据",
    type: "数据报告",
    lastModified: "3天前",
    status: "completed",
  },
];

const statusConfig = {
  completed: { label: "已完成", color: "bg-green-500" },
  "in-progress": { label: "进行中", color: "bg-blue-500" },
  draft: { label: "草稿", color: "bg-gray-400" },
};

const ResourcesSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-muted/40 via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">我的资源</h2>
          <Button variant="ghost" className="group">
            查看全部
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className="group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-card/90 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-strong hover:-translate-y-2 cursor-pointer shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl shadow-soft group-hover:scale-110 transition-transform duration-500">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`px-3 py-1.5 text-xs rounded-full text-white backdrop-blur-sm shadow-soft ${statusConfig[resource.status].color}`}>
                    {statusConfig[resource.status].label}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {resource.type}
                </p>

                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>更新于 {resource.lastModified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;