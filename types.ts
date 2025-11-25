export interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  objective: string;
  action: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: 'unify' | 'predict' | 'optimize' | 'own';
}

export interface NavItem {
  label: string;
  href: string;
}
