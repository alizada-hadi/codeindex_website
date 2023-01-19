export default {
  name: 'member',
  title: 'Member',
  type: 'document',

  fields: [
    {
      name: 'fullname',
      title: 'Fullname',
      type: 'string',
    },
    {
      name: 'profile',
      title: 'Profile',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },

    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'socialMedia'}],
    },
  ],
}
