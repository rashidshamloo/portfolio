// next-intl
import { useTranslations } from 'next-intl';

// framer motion
import { AnimatePresence } from 'framer-motion';

// react-loading
import ReactLoading from 'react-loading';

// icons
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

// components
import Transition from '@/components/Common/Transition';

// types
interface contactFormLoadingProps {
  isLoading: boolean;
  isSending: boolean;
  isError: boolean;
}

const ContactFormLoading = ({
  isLoading,
  isSending,
  isError,
}: contactFormLoadingProps) => {
  // next-intl
  const t = useTranslations('Contact');

  return (
    <AnimatePresence>
      {isLoading && (
        <Transition className="absolute inset-[0.5rem] z-10 flex flex-col items-center justify-center rounded-xl bg-black/20 text-brightBlue drop-shadow-md translate-z-16 transform dark:bg-black/40 dark:text-brightBlue/50">
          <div className="flex aspect-square w-[12em] flex-col items-center justify-center gap-y-4 rounded-full border-[1px] border-brightBlue/70 bg-black/30 dark:border-brightBlue/50">
            {isSending && (
              <>
                <ReactLoading
                  type="spinningBubbles"
                  className="aspect-square w-[6em]"
                />
                <p className="text-xl font-medium">{t('sending')}</p>
              </>
            )}
            {!isSending && !isError && (
              <div className="flex flex-col items-center justify-center gap-y-4 text-[6rem]">
                <CheckCircleOutlineRoundedIcon
                  fontSize="inherit"
                  className="text-green-300 dark:text-green-600"
                />
                <p className="text-xl font-medium">{t('sent')}</p>
              </div>
            )}
            {!isSending && isError && (
              <div className="text-[6rem]">
                <CancelOutlinedIcon
                  fontSize="inherit"
                  className="text-red-300 dark:text-red-600"
                />
                <p className="text-center text-xl font-medium">{t('error')}</p>
              </div>
            )}
          </div>
        </Transition>
      )}
    </AnimatePresence>
  );
};

export default ContactFormLoading;
