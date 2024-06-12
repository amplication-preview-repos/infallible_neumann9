import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
