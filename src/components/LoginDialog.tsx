import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Lock, Mail } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  agentTitle: string;
}

const LoginDialog = ({ open, onOpenChange, agentTitle }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现登录/注册逻辑
    console.log(isLogin ? "登录" : "注册", { email, password });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-0 bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur-xl shadow-strong">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
        
        <div className="relative p-8">
          {/* Header with icon */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-50 animate-pulse-glow" />
              <div className="relative bg-gradient-primary p-4 rounded-full shadow-strong">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <DialogHeader className="text-center space-y-2">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {isLogin ? "教师登录" : "教师注册"}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {isLogin 
                  ? `登录后可使用「${agentTitle}」` 
                  : "创建账号以使用智能体服务"}
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                教师邮箱
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="请输入教师邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-4 h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                登录密码
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-4 h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-foreground font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  确认密码
                </Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="请再次输入密码"
                    className="pl-4 h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    required
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-2">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-primary text-primary-foreground hover:shadow-strong transition-all duration-300 hover:scale-[1.02] shadow-medium font-semibold text-base"
              >
                {isLogin ? "立即登录" : "立即注册"}
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsLogin(!isLogin)}
                className="w-full h-12 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              >
                {isLogin ? "还没有账号？立即注册" : "已有账号？返回登录"}
              </Button>
            </div>
          </form>

          {/* Footer tip */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-xs text-center text-muted-foreground">
              登录即表示您同意我们的服务条款和隐私政策
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
