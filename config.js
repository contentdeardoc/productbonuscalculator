// ─── Central configuration ───────────────────────────────────────────────────
// Edit this file to add users, teams, reports, or update the Apps Script URL.

export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyH1-kiSnOU-nDrDhe8iYNts2zRk39C8LVHdNJshoOa6rRxbY9Ek8EHzZNwp6ecr8lB/exec';
export const SHEET_URL  = 'https://docs.google.com/spreadsheets/d/12ikQ0aMmFHAiw1PNwJQtgAKexoJftbNqblstWAxdorM/edit?gid=0#gid=0';

// ─── Users & roles ────────────────────────────────────────────────────────────
// role: 'admin' | 'manager' | 'finance'
// team: which team key(s) this manager owns (ignored for admin/finance)
export const USERS = {
  'mmorales@getdeardoc.com':  { name: 'Fernanda Morales', role: 'manager', teams: ['ai'] },
  'lucy@getdeardoc.com':      { name: 'Lucy',             role: 'manager', teams: ['fulfil'] },
  'sofia@getdeardoc.com':     { name: 'Sofia',            role: 'manager', teams: ['dash'] },
  'desparza@getdeardoc.com':  { name: 'Daniel Esparza',   role: 'finance', teams: [] },
  'dvega@getdeardoc.com':     { name: 'Diego Jimenez',    role: 'finance', teams: [] },
  // Add yourself as admin — change this email:
  'admin@getdeardoc.com':     { name: 'Admin',            role: 'admin',   teams: [] },
};

// ─── Teams & members ──────────────────────────────────────────────────────────
export const TEAMS = {
  ai: {
    label: 'AI Chat',
    base: 4000,
    groups: {
      'ai-chat': {
        label: 'Chat Specialists',
        members: ['Trébol Guerrero', 'Andrea Gomez'],
      },
      'ai-pls': {
        label: 'PLS',
        members: ['Pablo Hernandez', 'David Dueñas'],
      },
    },
    // Reports attached to this team — add as many as needed
    reports: [
      { id: 'ai-sla',  label: 'SLA Report',        url: '', source: 'salesforce' },
      { id: 'ai-ob',   label: 'Onboarding Report',  url: '', source: 'salesforce' },
      { id: 'ai-kpi',  label: 'KPI Scorecard',      url: '', source: 'sheets' },
    ],
  },
  dash: {
    label: 'Dashboard',
    base: 4000,
    groups: {
      dash: {
        label: 'Dashboard Team',
        members: ['Iris Ordonez', 'Michelle Azua', 'Mafer Pulido'],
      },
    },
    reports: [
      { id: 'dash-sla', label: 'SLA Report',       url: '', source: 'salesforce' },
      { id: 'dash-ob',  label: 'Onboarding Report', url: '', source: 'salesforce' },
      { id: 'dash-kpi', label: 'KPI Scorecard',     url: '', source: 'sheets' },
    ],
  },
  fulfil: {
    label: 'Fulfillment',
    base: 4000,
    groups: {
      fulfil: {
        label: 'Fulfillment Team',
        members: ['Ana Laura Herrera', 'Carlos Herrera', 'Dave Allen', 'Violeta Navarrete'],
      },
    },
    reports: [
      { id: 'ful-sla', label: 'SLA Report',        url: '', source: 'salesforce' },
      { id: 'ful-ob',  label: 'Onboarding Report',  url: '', source: 'salesforce' },
      { id: 'ful-kpi', label: 'KPI Scorecard',      url: '', source: 'sheets' },
    ],
  },
};

// ─── Payout lookup tables ─────────────────────────────────────────────────────
export const SLA_TABLE = [
  [100, 1.25], [97.5, 1.15], [95, 1], [90, 0.95], [85, 0.9],
  [80, 0.85],  [75, 0.8],    [70, 0.75], [0, 0],
];

export const KPI_TABLE = [
  [150, 2],   [140, 1.8], [130, 1.65], [120, 1.5], [110, 1.25],
  [100, 1.1], [90, 1],    [85, 0.9],   [80, 0.8],  [75, 0.7],
  [70, 0.6],  [0, 0],
];
