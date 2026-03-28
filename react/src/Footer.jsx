import PhoneIcon from "@/assets/img/icons/phone.svg?react";
import PinIcon from "@/assets/img/icons/pin.svg?react";

export default function Footer() {
  const title = "Contact";

  return (
    <>
      <section className="container footer py-12 space-y-12 text-white bg-body text-center">
        <h2 className="text-white">{title}</h2>

        <div className="space-y-4">
          <p>
            Do you have any questions or would you like to get acquainted with NAITON Business Suite?
            <br />
            Contact us without obligation.
          </p>

          <ul className="flex max-lg:flex-col items-center justify-center lg:space-x-12 max-lg:space-y-6">
            <li>
              <a href="tel:310208932732" className="flex items-center lg:space-x-2 text-lg max-lg:flex-col max-lg:space-y-2">
                <PhoneIcon className="w-5 h-5 text-accent/70" />
                <span>020&nbsp;893&nbsp;2732</span>
              </a>
            </li>

            <li>
              <span className="flex items-center lg:space-x-2 text-lg max-lg:flex-col max-lg:space-y-2">
                <PinIcon className="w-5 h-5 text-accent/70" />

                <span>Kurt Callostraat 19 / 3067 CZ, Rotterdam</span>
              </span>
            </li>
          </ul>
        </div>

        <p>&copy;&nbsp;Copyright Naiton, {new Date().getFullYear()}</p>
      </section>
    </>
  );
}
