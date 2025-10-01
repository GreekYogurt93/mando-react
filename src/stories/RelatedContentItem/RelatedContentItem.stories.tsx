import type { Meta, StoryObj } from '@storybook/react-vite';
import image from '../../../public/clouds.jpg'
import { RelatedContentItem } from './RelatedContentItem';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/RelatedContentItem',
  component: RelatedContentItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    background:{
      
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  
} satisfies Meta<typeof RelatedContentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    date:"01/12/2026",
    title:"Lorem ipsum dolor sit amet consectet",
    description:"This is what this should look like when the card is hovered. We would remove the ellipsis and show the tags.",
    image:image,
    imageAlt:"A calm sky",
    tags:["forecast","rain","meteo"]
  },
  parameters:{
    background:{
        red:{name:"default",value:"#314752"}
    }
  }
};
