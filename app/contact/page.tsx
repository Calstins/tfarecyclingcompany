import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactForm';
import QuoteRequestForm from '@/components/contact/QouteRequestForm';
import FAQSection from '@/components/contact/FAQSection';

export const metadata: Metadata = {
  title: 'Contact Us | TFA',
  description:
    'Get in touch with TFA for inquiries, custom orders, or to learn more about our sustainable furniture made from recycled tyres.',
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-tfa-black to-tfa-gray text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions, want to place an order, or interested in custom
              furniture? We'd love to hear from you and help bring sustainable
              style to your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-16 md:py-24 bg-tfa-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request a Quote
              </h2>
              <p className="text-lg text-gray-700">
                Looking for custom furniture or bulk orders? Fill out the form
                below with your requirements, and we'll provide you with a
                detailed quote.
              </p>
            </div>

            <QuoteRequestForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
