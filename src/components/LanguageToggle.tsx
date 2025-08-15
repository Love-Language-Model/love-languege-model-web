import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTranslations } from '@/hooks/use-translations';
import { SupportedLanguage } from '@/types/i18n';

export const LanguageToggle = () => {
  const { changeLanguage, isEnglish } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: SupportedLanguage) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  const getCurrentLanguageLabel = () => {
    return isEnglish ? 'EN' : 'PT';
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 px-3 py-2 h-auto">
          <svg width="36" height="21" viewBox="0 0 36 21" className="!w-8 !h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M35.1522 3.5C35.1522 1.56953 33.5758 0 31.637 0H3.51522C1.57636 0 0 1.56953 0 3.5V17.5C0 19.4305 1.57636 21 3.51522 21H31.637C33.5758 21 35.1522 19.4305 35.1522 17.5V3.5ZM16.6973 19.25V1.75H3.51522C2.54304 1.75 1.75761 2.53203 1.75761 3.5V17.5C1.75761 18.468 2.54304 19.25 3.51522 19.25H16.6973ZM31.637 1.75H18.4549V19.25H31.637C32.6091 19.25 33.3946 18.468 33.3946 17.5V3.5C33.3946 2.53203 32.6091 1.75 31.637 1.75ZM8.78804 5.25C9.14506 5.25 9.46912 5.46875 9.60643 5.80234H9.60094L13.1162 14.5523C13.2974 15.0008 13.0777 15.5094 12.6273 15.6898C12.1769 15.8703 11.6661 15.6516 11.4849 15.2031L11.0015 14.0055H6.56906L6.08572 15.2031C5.90447 15.6516 5.39366 15.8703 4.94327 15.6898C4.49289 15.5094 4.27319 15.0008 4.45444 14.5523L7.96966 5.80234C8.10697 5.46875 8.43103 5.25 8.78804 5.25ZM8.78804 8.48203L10.304 12.25H7.2776L8.78804 8.48203ZM26.3641 5.25C26.8475 5.25 27.2429 5.64375 27.2429 6.125V6.99453H29.8793H30.7582C31.2415 6.99453 31.637 7.38828 31.637 7.86953C31.637 8.35078 31.2415 8.74453 30.7582 8.74453H30.4945L30.2638 9.37891C29.742 10.8062 28.9182 12.0914 27.8691 13.1523C28.0448 13.2781 28.2261 13.393 28.4128 13.5023L29.4509 14.1203C29.8684 14.3664 30.0002 14.9023 29.753 15.318C29.5059 15.7336 28.9676 15.8648 28.5502 15.6187L27.5121 15.0008C27.166 14.793 26.8255 14.5633 26.5014 14.3227C26.0511 14.6453 25.5732 14.9297 25.0734 15.1812L24.1232 15.6516C23.6893 15.8648 23.1565 15.6898 22.9423 15.2578C22.7281 14.8258 22.9038 14.3008 23.3377 14.082L24.288 13.6117C24.5846 13.4695 24.8647 13.3055 25.1393 13.1305L23.9914 11.9875C23.6508 11.6484 23.6508 11.0906 23.9914 10.7516C24.3319 10.4125 24.8921 10.4125 25.2327 10.7516L26.474 11.9875L26.5179 12.0312C27.4407 11.1289 28.1657 10.0188 28.6161 8.78281L28.6271 8.75H26.3641H21.9701C21.4868 8.75 21.0913 8.35625 21.0913 7.875C21.0913 7.39375 21.4868 7 21.9701 7H25.4853V6.125C25.4853 5.64375 25.8808 5.25 26.3641 5.25Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium">{getCurrentLanguageLabel()}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en-US' as SupportedLanguage)}
          className="cursor-pointer"
        >
          <span className="text-sm">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('pt-BR' as SupportedLanguage)}
          className="cursor-pointer"
        >
          <span className="text-sm">Português</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
