export function DistanceHook(distance: number) {
  if (distance > 2000) {
    return (distance / 1000).toFixed(1) + "km";
  } else {
    return Math.floor(distance) + "m";
  }
}
