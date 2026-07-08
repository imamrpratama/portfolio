// Mirrors basePath in next.config.ts, which only applies in production
// builds and is not auto-applied to plain <img> tags.
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const asset = (path: string) => `${basePath}${path}`;
