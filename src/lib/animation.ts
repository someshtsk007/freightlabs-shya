export const gpuAcceleration = {
  transform: 'translateZ(0)',
  willChange: 'transform',
  backfaceVisibility: 'hidden',
} as const;

export const withGPU = (style?: React.CSSProperties) => ({
  ...gpuAcceleration,
  ...style,
});
