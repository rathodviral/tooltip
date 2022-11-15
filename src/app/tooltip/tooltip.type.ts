export type TooltipPlacement = 'left' | 'right' | 'top' | 'bottom';

export interface Tooltip {
  text: string;
  placement: TooltipPlacement;
  delay?: number;
}
