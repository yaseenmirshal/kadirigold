'use client'
import { FaBuilding, FaHandshake, FaShieldAlt, FaWallet, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone, FaInstagram } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-zinc-900 text-white p-4">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900 via-transparent to-zinc-900 opacity-40"></div>
      
      {/* Header Image with Fading Effect */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('/kaidirlogo.jpg')` }}>
        {/* Top Fading Effect */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      </div>

      {/* Company Name Below the Logo */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-yellow-400">KADIRI GOLD</h1>
        <p className="text-gray-400 text-lg">Bullion Jewellery L.L.C</p>
      </div>

      {/* Additional Fading Effect Under the Text */}
      <div className="w-full h-12 bg-gradient-to-t from-zinc-900 to-transparent"></div>

      {/* Icons for Website, Phone, Instagram, Email, and Location */}
      <div className="w-full max-w-md flex justify-center space-x-4">
        <button
          onClick={() => handleButtonClick('tel:+97142560194')}
          className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shadow-md hover:bg-zinc-700 transition-all"
        >
          <FaPhone className="text-yellow-400 text-xl" />
        </button>
        <button
          onClick={() => handleButtonClick('https://www.kadirigold.com')}
          className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shadow-md hover:bg-zinc-700 transition-all"
        >
          <FaGlobe className="text-yellow-400 text-xl" />
        </button>
        <button
          onClick={() => handleButtonClick('https://www.instagram.com/kadirigoldjewelleryllc/')}
          className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shadow-md hover:bg-zinc-700 transition-all"
        >
          <FaInstagram className="text-yellow-400 text-xl" />
        </button>
        <button
          onClick={() => handleButtonClick('mailto:info@kadirigold.com')}
          className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shadow-md hover:bg-zinc-700 transition-all"
        >
          <FaEnvelope className="text-yellow-400 text-xl" />
        </button>
        <button
          onClick={() => handleButtonClick('https://maps.app.goo.gl/tRz4tXwBv1oKqfw96')}
          className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shadow-md hover:bg-zinc-700 transition-all"
        >
          <FaMapMarkerAlt className="text-yellow-400 text-xl" />
        </button>
      </div>

      {/* About Section */}
      <div className="w-full max-w-md bg-zinc-800 rounded-lg p-6 shadow-lg mt-6">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">About</h2>
        <p className="text-gray-400">
          Kadiri Gold is a trusted name in the bullion and jewellery industry, offering premium-quality gold products and exceptional service. Specializing in gold bullion, coins, and exquisite jewellery, we cater to investors and collectors seeking reliability and elegance.
        </p>
      </div>

      {/* Contact Details */}
      <div className="w-full max-w-md space-y-4 mt-6">
        {[ 
          { icon: <FaBuilding className="text-yellow-400" />, label: 'Office No.', url: 'tel:+971564226479' },
          { icon: <FaHandshake className="text-yellow-400" />, label: 'Dealing', url: 'tel:+971564226950' },
          { icon: <FaShieldAlt className="text-yellow-400" />, label: 'Compliance', url: 'tel:+971564226709' },
          { icon: <FaWallet className="text-yellow-400" />, label: 'Accounts', url: 'tel:+971564226542' }
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item.url)}
            className="w-full flex items-center justify-between bg-zinc-800 rounded-lg p-4 shadow-md hover:bg-zinc-700 transition-all"
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <HiArrowNarrowRight className="text-xl text-yellow-400" />
          </button>
        ))}
      </div>

      {/* App Store and Play Store Icons */}
      <div className="w-full max-w-md flex justify-center space-x-4 mt-6">
        <button
          onClick={() => handleButtonClick('https://apps.apple.com/in/app/kadiri-gold-jewellery/id6741804948')}
          className="hover:opacity-80 transition-all"
        >
          <img src="./apple.png" alt="App Store" className="w-32 h-10" />
        </button>
        <button
          onClick={() => handleButtonClick('https://play.google.com/store/apps/details?id=com.artifitia.kadirigoldbullion&pcampaignid=web_share')}
          className="hover:opacity-80 transition-all"
        >
          <img src="./playyy.png" alt="Play Store" className="w-32 h-14" />
        </button>
      </div>

      {/* Powered By Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>Powered by</p>
        <a href="https://www.artifita.com" className="text-yellow-400 hover:underline">www.artifita.com</a>
      </div>
    </div>
  );
}