import UpdatesIcon from "@/assets/icons/solutions/updates.svg?react";
import LicenseIcon from "@/assets/icons/solutions/license.svg?react";
import HostingIcon from "@/assets/icons/solutions/hosting.svg?react";
import SolutionItem from "./SolutionItem.jsx";

const items = [
  {
    icon: UpdatesIcon,
    title: "All customers will receive new updates",
    bullets: [
      "Users can update in 1 to 2 minutes",
      "Updates can also be done centrally via an admin",
      "No frozen outdated versions",
      "Posting updates in consultation",
    ],
  },
  {
    icon: LicenseIcon,
    title: "License model and SLA (Service Level Agreement)",
    bullets: [
      "All necessary modules and licenses, for all users",
      "So no license per user and no license per module",
      "Including the App",
      "No extra costs for using the App, no strip list principle",
      "Unlimited use of the software within the group of companies with which we have entered into the agreement",
    ],
  },
  {
    icon: HostingIcon,
    title: "Hosting",
    bullets: [
      "Incl. power and data consumption and firewalls",
      "Backup and roll-back facilities",
      "Hot swappable drives",
    ],
  },
];

export default function LicencesItems() {
  return (
    <>
      {items.map((item) => (
        <SolutionItem key={item.title} {...item} />
      ))}
    </>
  );
}
