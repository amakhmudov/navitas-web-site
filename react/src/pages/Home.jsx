import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { fetchDb } from "@/lib/api.js";
import CTASection from "@/components/CTASection.jsx";
import Error from "@/components/Error.jsx";
import ProjectsSwiper from "@/components/ProjectsSwiper.jsx";
import Loader from "@/components/Loader.jsx";
import LazySection from "@/components/LazySection.jsx";
import ChevronLeft from "@/assets/img/icons/chevron-left.svg?react";
import ChevronRight from "@/assets/img/icons/chevron-right.svg?react";
import naitonOopbp from "@/assets/img/naiton-oopbp.webp";
import naitonOopbpJpg from "@/assets/img/naiton-oopbp.png";

// Eagerly load all project/client images via glob — avoids 32 individual import lines
const projectImageGlob = import.meta.glob("/src/assets/img/projects/**/*.{webp,jpg}", { eager: true, import: "default" });
const clientImageGlob = import.meta.glob("/src/assets/img/clients/*.{svg,png}", { eager: true, import: "default" });

function getProjectImages(id) {
  const base = `/src/assets/img/projects/${id}/${id}`;
  return {
    webp: projectImageGlob[`${base}.webp`],
    webp2x: projectImageGlob[`${base}@2x.webp`],
    mobileWebp: projectImageGlob[`${base}-mobile.webp`],
    mobileWebp2x: projectImageGlob[`${base}-mobile@2x.webp`],
    jpg: projectImageGlob[`${base}.jpg`],
    jpg2x: projectImageGlob[`${base}@2x.jpg`],
    mobileJpg: projectImageGlob[`${base}-mobile.jpg`],
    mobileJpg2x: projectImageGlob[`${base}-mobile@2x.jpg`],
  };
}

function getClientImage(id) {
  return clientImageGlob[`/src/assets/img/clients/${id}.svg`] ?? clientImageGlob[`/src/assets/img/clients/${id}.png`];
}

export default function Home() {
  const { data: dbData, isLoading, error } = useQuery({ queryKey: ["db"], queryFn: fetchDb });

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  const projects = dbData.projects.map((project) => ({
    ...project,
    ...getProjectImages(project.id),
  }));
  const clients = dbData.clients.map((client) => ({
    ...client,
    img: getClientImage(client.id),
  }));

  return (
    <>
      <section className="container">
        <div className="relative">
          <ProjectsSwiper>
            {projects.map((project, index) => (
              <div key={project.id} className="swiper-slide">
                <picture>
                  <source media="(min-width: 562px)" srcSet={`${project.webp} 1x, ${project.webp2x} 2x`} type="image/webp" />
                  <source media="(max-width: 560px)" srcSet={`${project.mobileWebp} 1x, ${project.mobileWebp2x} 2x`} type="image/webp" />
                  <source media="(min-width: 562px)" srcSet={`${project.jpg} 1x, ${project.jpg2x} 2x`} />
                  <source media="(max-width: 560px)" srcSet={`${project.mobileJpg} 1x, ${project.mobileJpg2x} 2x`} />

                  <img src={project.jpg} srcSet={`${project.jpg} 1x, ${project.jpg2x} 2x`} alt={project.alt} width="1440" height="600" className="w-full object-cover" loading={index <= 1 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : index === 1 ? "low" : undefined} decoding={index === 0 ? "sync" : "async"} />
                </picture>
              </div>
            ))}
          </ProjectsSwiper>

          <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between">
            <button type="button" className="projects-navigation__prev w-10 h-10 text-white bg-accent opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-25 transition" aria-label="previous project">
              <ChevronLeft />
            </button>

            <button type="button" className="projects-navigation__next w-10 h-10 text-white bg-accent opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-25 transition" aria-label="next project">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section className="container py-12 space-y-12 max-md:text-center">
        <h2>Optimization of operational business&nbsp;processes</h2>

        <div className="flex max-md:flex-wrap gap-x-6 mx-auto">
          <div className="w-full md:w-3/12">
            <h3>Based on standard and company-specific&nbsp;modules</h3>
          </div>

          <div className="w-full md:w-9/12 space-y-3">
            <p className="text-lead">Naiton combines online and offline sales with your internal business processes. We work on an ongoing process, based on your specific situation.</p>

            <p>Moreover, Naiton not only helps generate new business, we also specialize in client retention. We retain regular customers and focus on repeat orders, which are more cost-efficient than acquiring new customers. We use order histories and innovative customer profiles.</p>
          </div>
        </div>

        <LazySection>
          <picture className="block">
            <source srcSet={`${naitonOopbp} 1x, ${naitonOopbp} 2x`} type="image/webp" />
            <img src={naitonOopbpJpg} width="1074" height="512" alt="naiton - optimization of operational business processes" className="w-full max-w-[80%] mx-auto object-cover" loading="lazy" decoding="async" />
          </picture>
        </LazySection>

        <p className="text-center">
          <Link to="/solutions/" className="btn text-white bg-accent">
            View Naiton solutions
          </Link>
        </p>

        <LazySection>
          <CTASection title="Would you like to get acquainted with Nation Business Suite without obligation?" />
        </LazySection>

        <LazySection>
          <div className="flex max-md:flex-wrap max-md:space-y-6">
            <div className="w-full md:w-3/12">
              <h3>Our Clients</h3>
            </div>

            <div className="w-full md:w-9/12">
              <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
                {clients.map((client) => (
                  <li key={client.id}>
                    <a href={client.link} target="_blank" rel="noopener noreferrer" className="flex w-full h-full px-4 py-10 rounded bg-body/5 items-center justify-center hover:shadow-2xl duration-500 transition">
                      <img src={client.img} width="156" height="38" alt={client.name} loading="lazy" decoding="async" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </LazySection>

        <hr className="border-t" />

        <LazySection>
          <div className="flex max-md:flex-wrap max-md:space-y-6">
            <div className="w-full md:w-3/12">
              <h3>Interesting fact</h3>
            </div>

            <div className="w-full md:w-9/12">
              <p>Managed from the Netherlands, with more than 30 permanent (international) developers, English, German and Dutch-language support and maintenance. Internationally oriented solutions; the package is multi-language, multi-currency, multi-business (intercompany and intracompany)… but also international VAT payments, for example, are available on request.</p>
            </div>
          </div>
        </LazySection>
      </section>
    </>
  );
}
