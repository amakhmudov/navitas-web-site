import { useQuery } from "@tanstack/react-query";
import { fetchDb } from "@/lib/api.js";
import nbswo from "@/assets/img/nbswo.png";
import nbswoWebp from "@/assets/img/nbswo.webp";

export default function CTASection({ title }) {
  // Data is already cached from the page query — no extra network request
  const { data } = useQuery({ queryKey: ["db"], queryFn: fetchDb });
  const phone = data?.contact?.phone ?? "+31208932732";
  const phoneDisplay = data?.contact?.phoneDisplay ?? "020\u00a0893\u00a02732";

  return (
    <div className="relative before:content-[''] before:absolute before:w-full before:h-full md:before:h-1/2 before:left-0 before:top-0 before:bg-accent before:z-0 overflow-hidden">
      <div className="pt-12 relative space-y-12 bg-no-repeat bg-top nbswo-bg">
        <h2 className="text-white max-w-[80%] mx-auto">{title}</h2>

        <div className="flex max-md:flex-col justify-center md:space-x-4 max-md:space-y-4">
          <a href={`tel:${phone}`} className="btn max-md:mx-auto bg-white">
            Request a demo
          </a>
          <a href={`tel:${phone}`} className="btn max-md:mx-auto bg-white">
            or call {phoneDisplay}
          </a>
        </div>

        <picture className="block">
          <source srcSet={`${nbswoWebp} 1x, ${nbswoWebp} 2x`} />
          <img src={nbswo} width="1070" height="856" alt="would you like to get acquainted with Nation Business Suite without obligation" className="w-full max-w-[80%] mx-auto object-cover" />
        </picture>
      </div>
    </div>
  );
}
