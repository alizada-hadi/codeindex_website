export default {
  name: 'team',
  title: 'Team',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'member',
      title: 'Member',
      type: 'array',
      of: [{type: 'member'}],
    },
  ],
}
