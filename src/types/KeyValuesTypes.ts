import { KeyValueEnum } from "../enums/KeyValueEnum";

export interface KeyValueType {
  key: KeyValueEnum;
  value: string;
}

export interface GetKeyValuesType {
  items: KeyValueType[];
}
