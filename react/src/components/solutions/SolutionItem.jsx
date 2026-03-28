/** Shared renderer for a single solution feature item with icon, title and bullet list. */
export default function SolutionItem({ icon: Icon, title, bullets }) {
  return (
    <li className="flex flex-col space-y-3 p-6 max-lg:px-0">
      <Icon className="text-accent max-md:mx-auto" />
      <p className="text-lead">{title}</p>
      <ul className="list-disc">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </li>
  );
}
