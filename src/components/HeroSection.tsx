import { Brain, LineChart, FileEdit } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-secondary">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* SVG Animation Layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-float">
            <circle cx="200" cy="200" r="4" fill="url(#gradient1)" opacity="0.6">
              <animate attributeName="cy" values="200;180;200" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="150" r="4" fill="url(#gradient1)" opacity="0.6">
              <animate attributeName="cy" values="150;130;150" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="250" r="4" fill="url(#gradient1)" opacity="0.6">
              <animate attributeName="cy" values="250;230;250" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Connection lines */}
          <g stroke="url(#gradient1)" strokeWidth="1" fill="none" opacity="0.3">
            <line x1="200" y1="200" x2="400" y2="150">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="400" y1="150" x2="600" y2="250">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </line>
          </g>
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 70%, 60%)" />
              <stop offset="100%" stopColor="hsl(280, 80%, 70%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-center gap-4 animate-fade-in">
          <div className="p-4 bg-gradient-primary rounded-2xl shadow-strong backdrop-blur-xl animate-float">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="p-4 bg-gradient-primary rounded-2xl shadow-strong backdrop-blur-xl animate-float" style={{ animationDelay: '0.1s' }}>
            <LineChart className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="p-4 bg-gradient-primary rounded-2xl shadow-strong backdrop-blur-xl animate-float" style={{ animationDelay: '0.2s' }}>
            <FileEdit className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          智能人才培养方案平台
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          基于动态产业数据与AI大模型，为汽车专业教育提供智能化培养方案制定与优化
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 px-5 py-3 bg-card/70 backdrop-blur-xl rounded-full border border-primary/20 shadow-soft hover:shadow-medium hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-sm font-medium">实时产业数据</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-card/70 backdrop-blur-xl rounded-full border border-accent/20 shadow-soft hover:shadow-medium hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
            <span className="text-sm font-medium">AI智能分析</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-card/70 backdrop-blur-xl rounded-full border border-secondary/20 shadow-soft hover:shadow-medium hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
            <span className="text-sm font-medium">产教融合</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;