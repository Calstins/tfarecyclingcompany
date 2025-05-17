'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Adebola Adeyemi',
    role: 'Founder & Creative Director',
    bio: 'Adebola founded TFA with a vision to transform waste into beautiful furniture. With a background in industrial design and environmental science, she leads our creative direction and sustainability initiatives.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    social: {
      instagram: '#',
      linkedin: '#',
      email: 'mailto:contact@tfa.com',
    },
  },
  {
    name: 'Emmanuel Okonkwo',
    role: 'Head of Production',
    bio: 'Emmanuel oversees our workshop operations and brings over 15 years of furniture crafting experience. His expertise ensures that every piece meets our high standards of quality and durability.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    social: {
      instagram: '#',
      linkedin: '#',
      email: 'mailto:contact@tfa.com',
    },
  },
  {
    name: 'Folake Adegoke',
    role: 'Design Specialist',
    bio: 'Folake brings creativity and innovation to our design process. With her background in furniture design and sustainable materials, she creates pieces that are both beautiful and functional.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    social: {
      instagram: '#',
      linkedin: '#',
      email: 'mailto:contact@tfa.com',
    },
  },
  {
    name: 'Tunde Bakare',
    role: 'Master Craftsman',
    bio: `Tunde's skillful hands transform raw materials into finished masterpieces. With decades of experience in furniture making, he leads our team of artisans and ensures impeccable craftsmanship.`,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    social: {
      instagram: '#',
      linkedin: '#',
      email: 'mailto:contact@tfa.com',
    },
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700">
            Behind every piece of furniture at TFA is a team of passionate,
            creative minds dedicated to transforming discarded tyres into
            purposeful, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-tfa-gray/5 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  {member.social.instagram && (
                    <Link
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  )}
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  )}
                  {member.social.email && (
                    <Link
                      href={member.social.email}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            Our team also includes skilled artisans, apprentices, and support
            staff who contribute to every aspect of our work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
