import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/auth';
import { useTranslations } from '@/hooks/use-translations';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { login, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      await login(email, password, rememberMe);
      navigate('/chat', { replace: true });
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header showLoginButton={false} />
      <div className="flex-1 flex items-center justify-center pt-24">
        <div className="w-full max-w-md px-4">
          <h1 className="text-3xl font-bold font-title mb-8 text-center">{t('auth.welcomeBack')}</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('auth.email')}
                required
                className="bg-black border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.password')}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth.password')}
                required
                className="bg-black border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm text-white/70">
                {t('auth.rememberMe')}
              </Label>
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? t('common.loading') : t('auth.login')}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-white/70">
              {t('auth.dontHaveAccount')}{' '}
              <Link to="/signup" className="text-white hover:underline">
                {t('auth.signUp')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
