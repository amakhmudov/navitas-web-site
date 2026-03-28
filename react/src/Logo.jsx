import { Link } from "react-router";
import NaitonLogo from "@/assets/img/naiton-logo.svg?react";

export default function Logo() {
  return (
    <Link to="/" aria-label="Home" title="Home" className="max-md:w-[52px] overflow-hidden">
      <NaitonLogo />
    </Link>
  );
}
