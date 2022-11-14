export const userSchema = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "transactions",
      title: "Transactions",
      type: "array",
      of: [{ type: "reference", to: { type: "transaction" } }],
    },
  ],
};
