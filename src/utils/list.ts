export type DataWithId = { id: number | string } | { _id: number | string };

export const isUnderScoreId = (
  dataId: unknown,
): dataId is { _id: number | string } =>
  (dataId as { _id: number | string })._id !== undefined;

export const getItemLayout =
  <T>(itemHeight: number) =>
  (_data: Array<T> | null | undefined, index: number) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

export const getDataId = <T extends DataWithId>(item: T) =>
  `${isUnderScoreId(item) ? item._id : item.id}`;
