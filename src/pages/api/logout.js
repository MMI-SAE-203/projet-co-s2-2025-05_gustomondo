// src/pages/api/logout.js
import { logoutResponse } from '../JS/backend.mjs';

export async function POST() {
  // Renvoie un 303 + suppression du cookie + redirection vers /login
  return logoutResponse();
}
