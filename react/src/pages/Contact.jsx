import { Link } from "react-router";
import CTASection from "@/components/CTASection.jsx";
import LazySection from "@/components/LazySection.jsx";
import PhoneIcon from "@/assets/img/icons/phone.svg?react";
import PinIcon from "@/assets/img/icons/pin.svg?react";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="px-4 py-9 text-white bg-accent flex items-center justify-between">
          <p className="h2 text-white">Contact</p>

          <ul className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>

      <LazySection>
        <section className="container py-12">
          <ul className="flex max-lg:flex-col max-lg:space-y-6 items-start justify-center">
            <li className="lg:px-12">
              <a href="tel:+31208932732" className="flex lg:flex-col md:text-center items-center lg:space-y-3 max-lg:space-x-3">
                <PhoneIcon className="text-accent size-9 shrink-0" />
                <span className="h3">020&nbsp;893&nbsp;2732</span>
              </a>
            </li>

            <li className="lg:px-12">
              <span className="flex lg:flex-col md:text-center items-center lg:space-y-3 max-lg:space-x-3">
                <PinIcon className="text-accent size-9 shrink-0" />
                <span className="h3">Kurt Callostraat 19 3067 CZ, Rotterdam Netherlands</span>
              </span>
            </li>
          </ul>
        </section>
      </LazySection>

      <LazySection>
        <section className="section container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.6278302935148!2d4.547359477575084!3d51.940741678953025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cd3112003f99%3A0x542fa7388ed22c0b!2sKurt%20Callostraat%2019%2C%203067%20CZ%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1697114422462!5m2!1sen!2s" width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Naiton address on google map"></iframe>
        </section>
      </LazySection>

      <LazySection>
        <section className="container">
          <CTASection title="Would you like to get acquainted with Nation Business Suite without obligation?" />
        </section>
      </LazySection>
    </>
  );
}
