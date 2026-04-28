import { SCRIPT_URL } from './config.js';

export async function sendSnapshot({ manager, month, notes, rows }) {
  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({ manager, month, notes, rows }),
    headers: { 'Content-Type': 'application/json' },
  });
  // no-cors means we can't read the response — we optimistically assume success
  return { ok: true };
}
