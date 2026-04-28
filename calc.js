import { SLA_TABLE, KPI_TABLE } from './config.js';

export function lookup(table, value) {
  for (const [threshold, multiplier] of table) {
    if (value >= threshold) return multiplier;
  }
  return 0;
}

export function calcBonus(sla, ob, kpi, base = 4000) {
  const pip = sla < 70 || ob < 70;
  const sm  = lookup(SLA_TABLE, sla);
  const om  = lookup(SLA_TABLE, ob);
  const km  = lookup(KPI_TABLE, kpi);

  const slaBonus = pip ? 0 : (base * 0.25) * (0.15 * sm);
  const obBonus  = pip ? 0 : (base * 0.25) * (0.85 * om);
  const kpiBonus = (base * 0.75) * km;
  const total    = slaBonus + obBonus + kpiBonus;

  return { slaBonus, obBonus, kpiBonus, total, pip, sm, om, km };
}
