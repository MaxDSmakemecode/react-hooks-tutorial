// here the logic is encapsulated and can be used in any other component
// (the logic of storing state)
// this is the big advantage of hooks

import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
