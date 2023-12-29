'use client';

// react
import { useState, useEffect } from 'react';

// emailjs
import emailjs from '@emailjs/browser';
const EMAILJS_API_KEY = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

// recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// react-hook-form
import { useForm } from 'react-hook-form';

// react-next-tilt
import { Tilt } from 'react-next-tilt';

// material-ui
import { TextField, InputAdornment } from '@mui/material';
import { Email, Person } from '@mui/icons-material';

// next-intl
import { useLocale, useTranslations } from 'next-intl';

// react-device-detect
import { isMobile } from 'react-device-detect';

// components
import Button from '@/components/Common/Button';
import ContactFormLoading from './ContactFormLoading';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// styles
import inputStyles from '@/styles/inputStyles';

// glass provider
import glassProvider from '@/styles/glassProvider';

// types
interface contactFormProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ContactForm = ({ setUserName, setUserEmail }: contactFormProps) => {
  const darkMode = useNextThemes();

  // states
  const [captcha, setCaptcha] = useState('');
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [nameShrink, setNameShrink] = useState(false);
  const [emailShrink, setEmailShrink] = useState(false);
  const [messageShrink, setMessageShrink] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

  // next-intl
  const t = useTranslations('Contact');
  const locale = useLocale();

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { user_name: '', user_email: '', message: '' },
  });

  // handle events
  const onSubmit = handleSubmit(async (d) => {
    if (!captcha) {
      setShowCaptchaError(true);
      return;
    }
    setIsLoading(true);
    setIsSending(true);
    setIsError(false);
    try {
      await emailjs.send(
        'gmail',
        'portfolio_contact_form',
        {
          user_name: d.user_name,
          user_email: d.user_email,
          message: d.user_email,
          'g-recaptcha-response': captcha,
        },
        EMAILJS_API_KEY,
      );
      setIsSending(false);
      setTimeout(() => setIsLoading(false), 1000);
      // reset the form
      reset();
      // reset name and email on letter
      setUserName('');
      setUserEmail('');
      // reset shrink states
      setNameShrink(false);
      setEmailShrink(false);
      setMessageShrink(false);
    } catch (e) {
      setIsError(true);
      setIsSending(false);
      setTimeout(() => setIsLoading(false), 1000);
    }
  });

  if (
    (errors.user_name || errors.user_email || errors.message) &&
    !captcha &&
    !showCaptchaError
  ) {
    setShowCaptchaError(true);
  }

  // input styles
  const inputColor = darkMode ? '#ECF2F866' : '#2F2235AA';
  const inputHoverColor = darkMode ? '#FFFFFF88' : '#5B6B8D';
  const inputBGColor = darkMode ? '#FFFFFF11' : '#00000007';
  const inputHoverBgColor = darkMode ? '#FFFFFF05' : '#00000011';

  const inputSxProps = inputStyles(
    inputColor,
    inputHoverColor,
    inputBGColor,
    inputHoverBgColor,
  );

  return (
    <Tilt
      perspective="2000px"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      gyroMaxAngleY={15}
      spotGlareMaxOpacity={!darkMode ? 0.7 : 0.2}
      lineGlareMaxOpacity={!darkMode ? 0.3 : 0.02}
      lineGlareColor={!darkMode ? undefined : 'silver'}
      borderRadius="12px"
      className={
        'relative mx-auto inline-flex max-w-[98%] items-center justify-center rounded-xl text-[0.75rem] sm:text-sm lg:text-[0.925rem] xl:text-base' +
        glassProvider
      }
      disableScrollOnTouch={false}
    >
      <ContactFormLoading
        isLoading={isLoading}
        isSending={isSending}
        isError={isError}
      />
      {/* setting backdrop-blur on a child div because it flattens the transform-style-3d if set on parent */}
      <div className="absolute inset-0 -z-[1] backdrop-blur-[2px]"></div>
      <div className="glass relative flex aspect-[3/4] w-[30em] max-w-full flex-col items-center justify-center gap-y-[3em] rounded-xl px-[1.5em] py-[3em] text-darkViolet/70 transform-style-3d dark:text-brightBlue/50 sm:max-w-[unset] sm:pb-[1.5em] sm:pt-[2em]">
        <h1
          className="
        text-center text-[1.875em] font-bold uppercase translate-z-16 transform"
        >
          {t('formTitle')}
        </h1>

        <form
          className="flex w-full flex-col items-center gap-y-[1em] will-change-transform translate-z-8 transform [&_input]:autofill:bg-transparent [&_textarea]:autofill:bg-transparent"
          onSubmit={onSubmit}
        >
          <TextField
            sx={inputSxProps}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: { ml: 4.5 },
              shrink: nameShrink,
            }}
            onFocus={() => setNameShrink(true)}
            {...register('user_name', {
              onBlur: (e) => setNameShrink(!!e.target.value),
              required: t('errorNameEmpty'),
              minLength: {
                value: 2,
                message: t('errorNameShort'),
              },
              onChange: (e) =>
                setUserName((e.target as HTMLInputElement).value),
            })}
            error={!!errors.user_name}
            helperText={errors.user_name?.message}
            label={t('placeholderName')}
            variant="outlined"
            fullWidth
          />
          <TextField
            sx={inputSxProps}
            label={t('placeholderEmail')}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: { ml: 4.5 },
              shrink: emailShrink,
            }}
            onFocus={() => setEmailShrink(true)}
            {...register('user_email', {
              onBlur: (e) => setEmailShrink(!!e.target.value),
              required: t('errorEmailEmpty'),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t('errorEmailInvalid'),
              },
              onChange: (e) =>
                setUserEmail((e.target as HTMLInputElement).value),
            })}
            error={!!errors.user_email}
            helperText={errors.user_email?.message}
          />
          <TextField
            sx={inputSxProps}
            label={t('placeholderMessage')}
            variant="outlined"
            fullWidth
            multiline
            minRows={6}
            InputLabelProps={{
              shrink: messageShrink,
            }}
            onFocus={() => setMessageShrink(true)}
            {...register('message', {
              required: t('errorMessageEmpty'),
              onBlur: (e) => setMessageShrink(!!e.target.value),
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <div>
            <ReCAPTCHA
              sitekey="6LdNaCYmAAAAADODTVmVq54OulVOis9-AyxEYOeS"
              onChange={(e) => {
                if (!!e) {
                  setCaptcha(e);
                  setShowCaptchaError(false);
                } else {
                  setCaptcha('');
                  if (errors.user_name || errors.user_email || errors.message)
                    setShowCaptchaError(true);
                }
              }}
              className={
                'overflow-hidden rounded-md transform [&>*]:-mb-[2px] [&>*]:-mr-[2px] ' +
                (showCaptchaError ? 'border-[1px] border-[#d32f2f]' : '')
              }
              theme={darkMode ? 'dark' : 'light'}
              hl={locale}
              key={String(darkMode)}
              size={isMobile ? 'compact' : 'normal'}
            />
            <p
              className={
                'ml-[1em] mt-[2px] font-mui text-[0.75em] tracking-[0.03333em] text-[#d32f2f] ' +
                (showCaptchaError ? '' : 'hidden')
              }
            >
              {t('errorCaptcha')}
            </p>
          </div>
          <div className="mt-[0.5em] inline-block rounded-xl bg-darkViolet/10 p-1 dark:bg-brightBlue/10 dark:[&_.aws-btn>span>span>*]:opacity-80 [&_.aws-btn>span>span>span]:text-xs [&_.aws-btn>span>span>span]:font-medium xl:[&_.aws-btn>span>span>span]:text-sm [&_a>span>span>span>svg]:text-base">
            <Button type="contact" text={t('buttonSend')} />
          </div>
        </form>
      </div>
    </Tilt>
  );
};

export default ContactForm;
