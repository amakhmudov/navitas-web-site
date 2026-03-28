import PersonnelIcon from "@/assets/icons/solutions/personnel.svg?react";
import VacanciesIcon from "@/assets/icons/solutions/vacancies.svg?react";
import ScheduleIcon from "@/assets/icons/solutions/schedule.svg?react";
import LeaveIcon from "@/assets/icons/solutions/leave.svg?react";
import TimeIcon from "@/assets/icons/solutions/time.svg?react";
import SolutionItem from "./SolutionItem.jsx";

const items = [
  {
    icon: PersonnelIcon,
    title: "Personnel management",
    bullets: [
      "General user information",
      "Assigning roles",
      "Access to certain companies",
      "Skills",
    ],
  },
  {
    icon: VacanciesIcon,
    title: "Vacancies / Applicants",
    bullets: [
      "Management of vacancies",
      "Applicant management",
      "Status of applicants within a job offer",
      "Also for internal applications",
    ],
  },
  {
    icon: ScheduleIcon,
    title: "Work schedules",
    bullets: [
      "Schedule based on contract",
      "Schedule based on planning",
      "National holidays",
      "Calculation of vacation days",
      "Adjustable per day",
      "Easy to copy",
    ],
  },
  {
    icon: LeaveIcon,
    title: "Sickness absence / leave",
    bullets: [
      "Sick leave procedures",
      "Leave requests with approval",
      "Feedback to employees via the intranet",
      "Immediately visible in the planning board for other employees",
    ],
  },
  {
    icon: TimeIcon,
    title: "Time registration",
    bullets: [
      "Time clock logic with tags",
      "Registration option via intranet",
      "Enter the type of work yourself",
      "Compare with planned and contractual hours",
      "Contract management",
      "Durations",
      "Integration with committees",
      "Integration with time registration",
    ],
  },
];

export default function HRMItems() {
  return (
    <>
      {items.map((item) => (
        <SolutionItem key={item.title} {...item} />
      ))}
    </>
  );
}
