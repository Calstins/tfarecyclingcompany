import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
            <p className="text-gray-700 mb-2">Ikeja Location:</p>
            <p className="text-gray-600">
              Plot A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria.
            </p>
            <p className="text-gray-700 mt-4 mb-2">Ikorodu Location:</p>
            <p className="text-gray-600">
              No. 4, Kawu Alabi crescent, Shofunwa estate, Ikorodu, Lagos,
              Nigeria.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
            <p className="text-gray-600 mb-1">
              <Link
                href="tel:+2348033000180"
                className="hover:text-primary transition-colors"
              >
                +234 803 300 0180
              </Link>
            </p>
            <p className="text-gray-600">
              <Link
                href="tel:+2348056212866"
                className="hover:text-primary transition-colors"
              >
                +234 805 621 2866
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Email Us</h3>
            <p className="text-gray-600">
              <Link
                href="mailto:tfarecyclingcompany@gmail.com"
                className="hover:text-primary transition-colors"
              >
                tfarecyclingcompany@gmail.com
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Instagram className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Follow Us</h3>
            <p className="text-gray-600">
              <Link
                href="https://www.instagram.com/tfarecyclingcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @tfarecyclingcompany
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-tfa-gray/5 rounded-lg border border-gray-100">
        <h3 className="font-semibold text-lg mb-3">Get a Custom Quote</h3>
        <p className="text-gray-700 mb-4">
          Looking for custom furniture or bulk orders? Request a personalized
          quote tailored to your specific needs.
        </p>
        <Link
          href="#quote"
          className="text-primary font-medium hover:underline"
        >
          Request a Quote →
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
