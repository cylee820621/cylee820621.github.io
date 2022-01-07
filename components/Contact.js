import MessageForm from './MessageForm';
import ContactInfo from './ContactInfo';

function Contact() {
  return (
    <div id='contact' className='flex flex-wrap gap-20 justify-center p-20'>
      <MessageForm />
      <ContactInfo />
    </div>
  );
}

export default Contact;
