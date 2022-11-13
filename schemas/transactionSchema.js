export const transactionSchema = {
  name: 'txHash',
  title: 'Transaction Hash',
  type: 'document',
  fields: [
    {
      name: 'txHash',
      title: 'Transaction Hash',
      type: 'string',
    },
    {
      name: 'fromAddress',
      title: 'From Address',
      type: 'string',
    },
    {
      name: 'toAddress',
      title: 'To Address',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
  ],
}