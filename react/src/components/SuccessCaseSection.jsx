import { useState } from "react";
import clsx from "clsx";
import ChevronDown from "@/assets/img/icons/chevron-down.svg?react";

export default function SuccessCaseSection() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <section className="container relative before:content-[''] before:absolute before:w-[calc(100%-2rem)] before:h-full before:top-0 before:bg-accent before:z-0 overflow-hidden">
      <div className="py-12 relative space-y-12 bg-no-repeat bg-top max-md:bg-contain nbswo-bg">
        <div className="text-center space-y-2">
          <h2 className="text-white max-w-[80%] mx-auto">Success Case</h2>
          <p className="text-lead text-white">To give an impression of what is possible</p>
        </div>

        <div className={clsx("relative max-md:px-8 text-white max-w-xl mx-auto space-y-3 overflow-hidden transition-all duration-1000", toggleDropdown || "max-h-80")} aria-expanded={toggleDropdown}>
          <p>A funeral director orders a coffin via your website;</p>

          <ul className="list-hyphen space-y-3">
            <li>He logs in to the customer portal.</li>
            <li>A kind of 3-dimensional box configurator helps him choose the right properties such as: dimensions, shape, type of wood, color, covering, fittings, etc. In the meantime, he sees a 3-dimensional image of what he is working on. ordering is.</li>
            <li>Based on existing purchase orders, orders, current stock, delivery times, current prices and the like, an estimated delivery time and price is issued by the system. Payment could even be made directly (integrated shopping cart technology).</li>
            <li>After ordering, the funeral director automatically receives an email with his order, or a confirmation of receipt by letter or something else (standard document management). In the meantime, he can keep track of the status of his order via the customer portal.</li>
          </ul>

          <p>Following this command, the system goes to work;</p>

          <ul className="list-hyphen space-y-3">
            <li>Stocks are automatically checked, purchase orders are generated and orders placed, stock is updated and production is prepared.</li>
            <li>Provisional production planning is made and the provisional production date is determined based on delivery dates of the materials, available FTE, production speed, etc.</li>
            <li>Provisional loading, transport and delivery date is determined and updated on the customer portal. If necessary, send another email or standard note to the funeral director in question.</li>
            <li>Once all materials have been received, production receives a final order via, for example, a tablet in the workshop (including drawings and the like), the final production date is recorded and the customer portal is updated.</li>
            <li>After final production and/or completion notification, loading, transport and delivery dates are definitively determined and scheduled via route optimization. Delivery date and time are shared with the funeral director via email, letter and customer portal.</li>
            <li>Based on the route determined by route optimization (which can still be adjusted manually until then), the loading order is determined and communicated to the guys in the workshop via mobile phone or tablet.</li>
            <li>During transport, any delays will be immediately shared with the funeral director, if necessary. via SMS and the customer portal updated (Fleet management, file information, etc.).</li>
          </ul>

          <p>In the meantime, all changes in all relevant modules are of course monitored and processed by the system. So, from ordering, through purchasing, inventory management, production, transport, up to and including invoice and financial processing such as forecasting and actual costing.</p>

          <div className="absolute left-0 bottom-0 w-full pt-12 bg-gradient-to-b via-accent from-transparent to-accent">
            <button type="button" onClick={() => setToggleDropdown(!toggleDropdown)} className="flex items-center space-x-2 text-xl mx-auto cursor-pointer" aria-label={toggleDropdown ? "Show less" : "Show more"} aria-expanded={toggleDropdown}>
              <ChevronDown className={toggleDropdown ? "rotate-180" : ""} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
