import { Link } from "react-router";
import CTASection from "@/components/CTASection.jsx";
import SolutionSection, { CRMItems, HRMItems, WMSItems, LicencesItems } from "@/components/SolutionSection.jsx";
import SuccessCaseSection from "@/components/SuccessCaseSection.jsx";
import LazySection from "@/components/LazySection.jsx";

const sections = [
  {
    id: "crm",
    group: 1,
    title: "CRM",
    subtitle: "Client Relation Management",
    Component: CRMItems,
  },
  {
    id: "hrm",
    group: 1,
    title: "HRM",
    subtitle: "Human Resource Management",
    Component: HRMItems,
  },
  {
    id: "wms",
    group: 2,
    title: "WMS Module",
    subtitle: "Warehouse Management",
    Component: WMSItems,
  },
  {
    id: "licences",
    group: 2,
    title: "Licences",
    subtitle: "Updates, Licences and Modules",
    Component: LicencesItems,
  },
];

const group1 = sections.filter((s) => s.group === 1);
const group2 = sections.filter((s) => s.group === 2);

export default function Solutions() {
  return (
    <>
      <div className="container">
        <div className="px-4 py-9 text-white bg-accent flex items-center justify-between">
          <p className="h2 text-white">Solutions</p>

          <ul className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Solutions</span>
            </li>
          </ul>
        </div>
      </div>

      <LazySection>
        <section className="container pt-12 pb-6 max-md:text-center">
          {group1.map((section) => (
            <SolutionSection key={section.id} {...section} showDivider={true} />
          ))}
        </section>
      </LazySection>

      <LazySection>
        <section className="container relative before:content-[''] before:absolute before:w-[calc(100%-2rem)] before:h-full before:top-0 before:bg-accent before:z-0 overflow-hidden">
          <SuccessCaseSection className="container pt-12 pb-6 max-md:text-center" />
        </section>
      </LazySection>

      <LazySection>
        <section className="container pt-12 pb-6 max-md:text-center">
          {group2.map((section, index) => (
            <SolutionSection key={section.id} {...section} showDivider={index < group2.length - 1} />
          ))}
        </section>
      </LazySection>

      <LazySection>
        <section className="container pb-12">
          <CTASection title="Would you like to get acquainted with Nation Business Suite without obligation?" />
        </section>
      </LazySection>
    </>
  );
}
