export default function omit<T, K extends keyof T>(props: T, ...keys: readonly K[]): Omit<T, K> {
  return Object.entries(props).reduce(
    (result, [key, value]) => {
      if (keys.includes(key as K)) {
        return result;
      }
      return {...result, [key]: value};
    }, {},
  ) as Omit<T, K>;
}
