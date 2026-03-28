import InventoryIcon from "@/assets/icons/solutions/inventory.svg?react";
import LocationIcon from "@/assets/icons/solutions/location.svg?react";
import SolutionItem from "./SolutionItem.jsx";

const items = [
  {
    icon: InventoryIcon,
    title: "Inventory management",
    bullets: [
      "Multiple inventory locations - Vehicles can also be an inventory location",
      'Note: Based on "Iron stock" vehicle, we can create a pick list to get stock in the vehicle back up to standard → When order picking, send the items directly from Naiton via Postl / UPS / DHL to a location (immediately correct location or mechanic\'s home address)',
      'Determine required order quantities (suggestion) based on current Tickets and "Iron stocks" (Min / Max signals)',
      "Basis for purchasing / production",
      "Determining the value of stock",
      "Movements and the historical stock",
    ],
  },
  {
    icon: LocationIcon,
    title: "Where is the article in question located? What is its status?",
    bullets: [
      "Which warehouse, which vehicle?",
      "Piece or whole? → Send for repair",
      "Defective? → Repair center",
    ],
  },
];

export default function WMSItems() {
  return (
    <>
      {items.map((item) => (
        <SolutionItem key={item.title} {...item} />
      ))}
    </>
  );
}
