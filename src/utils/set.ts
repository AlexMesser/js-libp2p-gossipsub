/**
 * Exclude up to `ineed` items from a set if item meets condition `cond`
 */
export function removeItemsFromSet<T>(
  superSet: Set<T>,
  ineed: number,
  cond: (peer: T) => boolean = () => true
): Set<T> {
  const subset = new Set<T>()
  if (ineed <= 0) return subset

  for (const id of superSet) {
    if (subset.size >= ineed) break
    if (cond(id)) {
      subset.add(id)
      superSet.delete(id)
    }
  }

  return subset
}

/**
 * Exclude up to `ineed` items from a set
 */
export function removeFirstNItemsFromSet<T>(superSet: Set<T>, ineed: number): Set<T> {
  return removeItemsFromSet(superSet, ineed, () => true)
}
