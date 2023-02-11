import { GroupField } from "payload/types";

const Button: GroupField = {
  name: 'button',
  type: 'group',
  fields: [
    {
      name: "text",
      type: "text",
      required: true
    },
    {
      name: "url",
      type: "text",
      required: true
    },
    {
      name: "target",
      type: "text"
    },
    {
      name: "ariaLabel",
      type: "text"
    }
  ]
};

export default Button;