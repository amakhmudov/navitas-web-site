import EmailIcon from "@/assets/icons/solutions/email.svg?react";
import ImacIcon from "@/assets/icons/solutions/imac.svg?react";
import TasksIcon from "@/assets/icons/solutions/tasks.svg?react";
import ContactIcon from "@/assets/icons/solutions/contact.svg?react";
import SlaIcon from "@/assets/icons/solutions/sla.svg?react";
import SolutionItem from "./SolutionItem.jsx";

const items = [
  {
    icon: EmailIcon,
    title: "Email module",
    bullets: [
      "General mail and Personal mail",
      "Link emails to customers and/or files",
      "Easy access sharing",
      "Convert email to task, assignment or ticket",
    ],
  },
  {
    icon: ImacIcon,
    title: "IMAC; Install - Move - Add - Change",
    bullets: [
      "Each relationship / customer has their own card",
      "Establish connections between relations / customers / assignments",
      "Example: Ticket (at Lidl) hanging under a customer (DN)",
      "Multiple email addresses per relationship",
      "History per relationship; who, what, where, notifications, assignments, tickets, solutions, etc.",
    ],
  },
  {
    icon: TasksIcon,
    title: "Tasks, assignments and tickets",
    bullets: [
      "Internal assignment of tasks/assignments to resources (people, vehicles and equipment), with time slotting and optimal suggestions",
      "Feedback to customers / Possibility of escalation",
      "Log customer issues",
    ],
  },
  {
    icon: ContactIcon,
    title: "Contact moments (Dossier formation)",
    bullets: [
      "Recording conversations - VOIP - Call actions",
      "Link to orders, invoices, tasks and payments",
      "Campaigns with phases and question paths, Acquisition and Periodic contact",
      "Conversion statistics",
    ],
  },
  {
    icon: SlaIcon,
    title: "SLA's",
    bullets: [
      "Variable SLAs per customer, different urgency levels",
      "Deadlines are determined based on SLA and urgency level",
      "Deadlines provide certain urgency/priority",
      "SLA's partially determine pricing",
    ],
  },
];

export default function CRMItems() {
  return (
    <>
      {items.map((item) => (
        <SolutionItem key={item.title} {...item} />
      ))}
    </>
  );
}
