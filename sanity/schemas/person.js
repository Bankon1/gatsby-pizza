import { MdPerson as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'person',
  // visible title
  title: 'Slicemasters',
  type: 'document',
  // can take any React component
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 100,
      },
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a little bit about this person',
    },
  ],
};
