import ErrorIcon from "@/assets/img/icons/error.svg?react";

export default function Error({ error }) {
  return (
    <div className="container mx-auto flex items-center gap-2 justify-center space-x-2 px-4 py-9 text-body">
      <ErrorIcon className="text-body/60" />
      <span>{error?.message || "Error occurred, please refresh the page."}</span>
    </div>
  );
}
