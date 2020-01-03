export default function pick<T, K extends keyof T>(props: T, ...keys: readonly K[]): Pick<T, K> {
  return  Object.entries(props).reduce(
    (result, [key, value]) => {
      if (keys.includes(key as K)) {
        return {...result, [key]: value};
      }
      return result;
    }, {},
  ) as Pick<T, K>;
}
