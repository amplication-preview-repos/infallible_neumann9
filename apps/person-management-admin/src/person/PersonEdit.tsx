import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
