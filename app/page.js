'use client'
import { FaBuilding, FaHandshake, FaShieldAlt, FaWallet, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone, FaInstagram } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-zinc-900 text-white p-4">
      {/* Background Design Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900 via-transparent to-zinc-900 opacity-40"></div> */}

      {/* Header Image */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('/kaidirlogo.jpg')` }}>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      </div>

      {/* Company Name */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-yellow-400">KADIRI GOLD</h1>
        <p className="text-gray-400 text-lg">Bullion Jewellery L.L.C</p>
      </div>

      {/* Social & Contact Icons */}
      <div className="w-full max-w-md flex justify-center space-x-4 mt-4">
        {[
          { icon: <FaPhone />, url: 'tel:+97142560194', newTab: false },
          { icon: <FaGlobe />, url: 'https://www.kadirigold.com', newTab: true },
          { icon: <FaInstagram />, url: 'https://www.instagram.com/kadirigoldjewelleryllc/', newTab: true },
          { icon: <FaEnvelope />, url: 'mailto:info@kadirigold.com', newTab: true },
          { icon: <FaMapMarkerAlt />, url: 'https://maps.app.goo.gl/tRz4tXwBv1oKqfw96', newTab: true }
        ].map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shadow-md hover:bg-zinc-700 transition-all text-yellow-400 text-xl"
            {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} // Opens in new tab only for specific links
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Contact Details */}
      <div className="w-full max-w-md space-y-4 mt-6">
        {[
          { icon: <FaBuilding />, label: 'Office No.', url: 'tel:+971564226479' },
          { icon: <FaHandshake />, label: 'Dealing', url: 'tel:+971564226950' },
          { icon: <FaShieldAlt />, label: 'Compliance', url: 'tel:+971564226709' },
          { icon: <FaWallet />, label: 'Accounts', url: 'tel:+971564226542' }
        ].map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="w-full flex items-center justify-between bg-zinc-800 rounded-lg p-4 shadow-md hover:bg-zinc-700 transition-all text-white"
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl text-yellow-400">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <HiArrowNarrowRight className="text-xl text-yellow-400" />
          </a>
        ))}
      </div>

      {/* App Store and Play Store Icons */}
      <div className="w-full max-w-md flex justify-center space-x-4 mt-6">
      <a href="https://apps.apple.com/in/app/kadiri-gold-jewellery/id6741804948" target="_blank" rel="noopener noreferrer">
          <img src="./apple.png" alt="App Store" className="w-32 h-10 mt-2 hover:opacity-80 transition-all" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.artifitia.kadirigoldbullion&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
          <img src="./playyy.png" alt="Play Store" className="w-32 h-14 hover:opacity-80 transition-all" />
        </a>
      </div>

      {/* Powered By Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>Powered by</p>
        <a href="https://www.artifita.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">www.artifita.com</a>
      </div>
    </div>
  );
}
