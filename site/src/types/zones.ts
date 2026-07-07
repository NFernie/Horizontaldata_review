export interface ExclusionZone {
  entry: number;
  murta: number;
  re_entry: number;
  length: number;
  default_reentry: boolean;
}

export interface ZonesPayload {
  alias: string;
  display: string;
  zones: ExclusionZone[];
}
