const N = 12;
const parts = [];
for (let i = 0; i < N; i++) {
  const n = String(i).padStart(2, "0");
  const r = await fetch("/assets/chunks/index-BZ5qCCu3." + n + ".js");
  if (!r.ok) throw new Error("Failed to load bundle part " + n + " (" + r.status + ")");
  parts.push(await r.text());
}
const blob = new Blob(parts, { type: "text/javascript" });
await import(URL.createObjectURL(blob));
