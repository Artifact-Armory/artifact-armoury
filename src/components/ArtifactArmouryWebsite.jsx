// Artifact Armoury Website Root Component
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ArtifactArmouryWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Artifact Armoury</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#kickstarter" className="hover:underline">Kickstarter</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#products" className="block">Products</a>
            <a href="#kickstarter" className="block">Kickstarter</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section with Banner */}
      <section id="home" className="relative w-full">
        <img
          src="/images/banner.jpeg"
          alt="Artifact Armoury Banner"
          className="w-full h-[300px] object-cover md:h-[400px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Hyper-Realistic Historical Miniatures</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Crafted from real-life scans of reenactors, bringing history to your tabletop.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded-full p-3 shadow-lg hover:scale-110 transition-all">
        ↑
      </button>

      {/* About Section */}
      <section id="about" className="px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
        <p className="text-base md:text-lg">More details coming soon about our story, team, and historical scanning process.</p>
      </section>

      {/* Product Showcase with Images */}
      <section id="products" className="px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-4">Product Showcase</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="/images/ww2_UK_commando_kneeling_side_Sgtmiller.jpeg" alt="UK Commando" className="rounded shadow-md" />
          <img src="/images/ww2_GER_infantry_firing_front_Oberhans.jpeg" alt="GER Infantry" className="rounded shadow-md" />
          <img src="/images/ww2_USSR_rifleman_prone_top_Ivan.jpeg" alt="USSR Rifleman" className="rounded shadow-md" />
          <img src="/images/napoleonic_FR_dragoon_charging_side_Pierre.jpeg" alt="French Dragoon" className="rounded shadow-md" />
        </div>
      </section>

      {/* Kickstarter Section */}
      <section id="kickstarter" className="px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-4">Kickstarter Coming Soon</h3>
        <p className="text-base md:text-lg">Sign up for our newsletter to be the first to know when we launch!</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <form className="space-y-4 max-w-lg">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-md dark:bg-gray-800" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md dark:bg-gray-800" />
          <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-md dark:bg-gray-800" />
          <button type="submit" className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-900 py-3 rounded-md hover:opacity-90 transition-all">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-8 bg-gray-100 dark:bg-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Artifact Armoury. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="underline hover:text-blue-500">Follow us on Instagram</a>
        </p>
      </footer>
    </main>
  );
}
