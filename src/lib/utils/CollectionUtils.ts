export default class CollectionUtils {
  public static isEmpty(arr: any[] | null| undefined) {
    return !this.isNotEmpty(arr);
  }

  public static isNotEmpty(arr: any[] | null| undefined) {
    return Array.isArray(arr) && arr.length > 0;
  }
}
