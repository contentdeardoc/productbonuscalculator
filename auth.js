import { USERS } from './config.js';

const SESSION_KEY = 'dd_bonus_user';

export function getCurrentUser() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function login(email) {
  const normalized = email.trim().toLowerCase();
  const user = USERS[normalized];
  if (!user) return { ok: false, error: 'Email not recognized. Contact your administrator.' };
  const session = { email: normalized, ...user };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true, user: session };
}

export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

export function canEditTeam(user, teamKey) {
  if (!user) return false;
  if (user.role === 'admin') return true;
  if (user.role === 'manager') return user.teams.includes(teamKey);
  return false; // finance = view only
}

export function canViewTeam(user, teamKey) {
  if (!user) return false;
  if (user.role === 'admin' || user.role === 'finance') return true;
  if (user.role === 'manager') return user.teams.includes(teamKey);
  return false;
}

export function canSnapshot(user) {
  return user && (user.role === 'admin' || user.role === 'manager');
}

export function canViewAudit(user) {
  return user && (user.role === 'admin' || user.role === 'finance');
}

export function isAdmin(user) {
  return user && user.role === 'admin';
}
