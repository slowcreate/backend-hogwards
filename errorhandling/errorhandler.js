import HTTPError from "../errors/HTTPError.js"; // ret stien

export function errorHandler(err, req, res, next) {
  if (err instanceof HTTPError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  if (err.code === "23503") {
    return res.status(404).json({ error: "Related item not found" });
  }
  if (err.code === "23505") {
    return res.status(409).json({ error: "Already exists" });
  }
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
