import { headers } from "next/headers";

/** Use in Server Components to build the full origin (e.g. http://localhost:3000) for calling local API routes. */
export async function getBaseUrl() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto =
    headersList.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}
