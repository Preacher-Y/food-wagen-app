import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
  return (
    <footer className="w-full bg-footer text-white">
      <div className="max-w-sm md:max-w-md lg:max-w-6xl 2xl:max-w-[1440px] mx-auto">
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-[auto_1fr_minmax(360px,420px)] sm:items-start sm:gap-x-12 lg:gap-x-16">
          <div className="grid grid-cols-3 gap-x-8 lg:gap-x-12">
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Company
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-footer-light/70">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Contact
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-footer-light/70">
                <li>
                  <a href="#">Help &amp; Support</a>
                </li>
                <li>
                  <a href="#">Partner with us</a>
                </li>
                <li>
                  <a href="#">Ride with us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Legal
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-footer-light/70">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Refund &amp; Cancellation</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:block" />
          <div className="w-full max-sm:mt-6">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-footer-light/70 uppercase">
              FOLLOW US
            </h3>

            <div className="flex items-center text-footer-light/70 gap-4 mb-6 sm:mb-8">
              <a href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <p className="text-footer-light/70 text-sm sm:text-base mb-4 sm:mb-6">
              Receive exclusive offers in your mailbox
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-footer-light/70 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="w-full bg-[#424242] text-white placeholder:text-footer-light/70 rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-lg whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="py-6 sm:py-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-footer-light/70">
            <p>All rights Reserved © Your Company, 2021</p>
            <p className="flex items-center gap-1">
              Made with{" "}
              <Heart width={15} height={15} className="fill-rate text-rate" />{" "}
              by <strong className="text-gray-200">Themewagon</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
