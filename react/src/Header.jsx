import clsx from "clsx";
import { Link, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Error from "@/components/Error.jsx";
import Loader from "@/components/Loader.jsx";
import Logo from "@/Logo.jsx";
import PhoneIcon from "@/assets/img/icons/phone.svg?react";
import { fetchDb } from "@/lib/api.js";

// Pure presentational — receives menu items from the parent query
function Navigation({ pathname, menuItems }) {
  return (
    <ul className="flex items-center space-x-2 md:space-x-12">
      {menuItems.map((item) => (
        <li key={item.href}>
          <Link to={item.href} className={clsx("menu-link", item.href === pathname && "active")}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const { data, isLoading, error } = useQuery({ queryKey: ["db"], queryFn: fetchDb });

  return (
    <>
      <h1 className="sr-only">Naiton Business Suite</h1>

      <header className="header">
        <div className="container flex items-center justify-between py-4">
          <Logo />

          <nav>
            {isLoading && <Loader />}
            {error && <Error error={error.message} />}
            {data?.menuItems && <Navigation pathname={pathname} menuItems={data.menuItems} />}
          </nav>

          <a
            href={`tel:${data?.contact?.phone ?? "+31208932732"}`}
            className="btn flex items-center space-x-2 text-white bg-accent max-lg:p-0 max-lg:!bg-transparent"
          >
            <PhoneIcon className="max-lg:text-accent max-lg:w-6 max-lg:h-6" />
            <span className="max-lg:hidden">
              {data?.contact?.phoneDisplay ?? "020\u00a0893\u00a02732"}
            </span>
          </a>
        </div>
      </header>
    </>
  );
}
