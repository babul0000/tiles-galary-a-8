import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-20">

            <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-10">
                <div>
                    <h2 className="text-2xl font-bold">TileGallery</h2>
                    <p className="text-gray-400 mt-3">
                        Modern tile collection for beautiful and elegant home design.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Tiles</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

                    <p className="text-gray-400">Email: support@tilegallery.com</p>
                    <p className="text-gray-400">Phone: +880 1234-567890</p>

                    <div className="flex gap-5 mt-4 text-xl">
                        <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                        <FaGithub className="cursor-pointer hover:text-gray-300 transition" />
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-700 text-center py-5 text-gray-500 text-sm">
                © {new Date().getFullYear()} TileGallery. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;