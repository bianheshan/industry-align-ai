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
    title: "2024年新能源汽车专业培养方案",
    type: "培养方案",
    lastModified: "2小时前",
    status: "completed",
  },
  {
    id: "2",
    title: "智能网联汽车产业分析报告",
    type: "分析报告",
    lastModified: "1天前",
    status: "in-progress",
  },
  {
    id: "3",
    title: "区域人才需求调研数据",
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
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
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
              <div className="relative h-full bg-card backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full text-white ${statusConfig[resource.status].color}`}>
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