import { env } from "@/lib/env.mjs";

import type { NextApiRequest, NextApiResponse } from "next";

const VALID_PATHS = ["/gallery"] as const;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== env.MY_SECRET_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = Array.isArray(req.query.path)
    ? req.query.path[0]
    : req.query.path;

  // Check if path exists and is valid
  if (path) {
    if (!VALID_PATHS.includes(path)) {
      return res.status(401).json({ message: `'${path}' is not a valid path` });
    }
  } else {
    return res.status(401).json({ message: "A valid path must be provided" });
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(path);
    return res.json({
      revalidated: true,
      message: `'${path}' page has been revalidated`,
    });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
