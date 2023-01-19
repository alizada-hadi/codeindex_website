export default {
  name: 'projects',
  title: 'Projects',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'techs',
      title: 'Techs',
      type: 'array',
      of: [{name: 'name', title: 'Name', type: 'string'}],
    },
    {
      name: 'githubLink',
      title: 'GithubLink',
      type: 'string',
    },
    {
      name: 'previewLink',
      title: 'PreviewLink',
      type: 'string',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{name: 'name', title: 'Name', type: 'string'}],
    },
  ],
}
