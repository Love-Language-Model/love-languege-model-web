import { Mic, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';

const Index = () => {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24">
        <div className="w-full max-w-4xl px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl text-white/80 mb-12">
            {t('home.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                {t('home.getStarted')}
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80">
                Coming soon
                <Mic className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            {t('home.termsAcceptance')}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
