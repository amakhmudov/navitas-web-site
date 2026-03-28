export const fetchDb = () =>
  fetch("/data/db.json").then((r) => {
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    return r.json();
  });
