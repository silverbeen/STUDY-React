export function DistanceHook(distance: number) {
  if (distance > 1200) {
    return (distance / 1000).toFixed(1) + "km";
  } else {
    return Math.floor(distance) + "m";
  }
}
