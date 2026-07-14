export interface TrajectoryStation {
  md: number;
  mtvds: number;
  incl?: number;
  x?: number;
  y?: number;
}

export interface TrajectoryPayload {
  alias: string;
  field?: string;
  owc_mtvds: number | null;
  hard_floor_mtvds: number | null;
  stations: TrajectoryStation[];
  lateral_window: {
    md_start: number;
    md_end: number;
    incl_min?: number;
  };
}
