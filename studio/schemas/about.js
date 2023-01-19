export default {
  name: 'about',
  title: 'About',
  type: 'document',

  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'profession'}],
    },
  ],
}
