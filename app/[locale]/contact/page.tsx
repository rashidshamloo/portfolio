// next
import dynamic from 'next/dynamic';

// components
import ContactTop from '@/components/Contact/ContactTop/ContactTop';
const Social = dynamic(() => import('@/components/Contact/Social/Social'));

const Contact = () => {
  return (
    <>
      <ContactTop />
      <Social />
    </>
  );
};

export default Contact;
