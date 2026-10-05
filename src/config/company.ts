export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  addressShort: string;
  addressFull: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    google: string;
    threads: string;
    youtube: string;
  };
  features: {
    enableRealEstate: boolean;
    enableChatbotAI: boolean;
  };
}

export const companyConfig: CompanyConfig = {
  name: 'CAPSULE COMPANY',
  legalName: 'Capsule Company Private Limited',
  tagline: 'YOUR SPACE MAKER',
  phone: '+91 91879 24723',
  phoneRaw: '+919187924723',
  whatsappNumber: '919187924723',
  whatsappMessage: 'Hi Capsule Company, I would like to discuss my project and get a free consultation.',
  email: 'workscapsule@gmail.com',
  addressShort: 'Hebbal Kempapura, Ammanikere, Outer Ring Road, Bengaluru',
  addressFull: 'N.173, 1st & 2nd Floor, SLV Complex, Hebbal Kempapura, Ammanikere, Outer Ring Road, Kariyamma Layout, Bengaluru (Urban), Karnataka – 560024',
  city: 'Bengaluru (Urban)',
  state: 'Karnataka',
  pincode: '560024',
  country: 'India',
  googleMapsUrl: 'https://maps.google.com/?q=SLV+COMPLEX+Outer+Ring+Rd+Hebbal+Kempapura+Bengaluru',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.643323067756!2d77.5910485!3d13.0456247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a0b5b15855%3A0xcd50a0be3bce82e!2sHebbal%20Kempapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  socialLinks: {
    instagram: 'https://www.instagram.com/capsulecompany.in/',
    facebook: 'https://facebook.com/capsulecompany.in',
    google: 'https://maps.google.com/?q=Capsule+Company+Hebbal+Kempapura+Bengaluru',
    threads: 'https://www.threads.net/@capsulecompany.in',
    youtube: 'https://youtube.com/@capsulecompany',
  },
  features: {
    enableRealEstate: true,
    enableChatbotAI: false,
  },
};
