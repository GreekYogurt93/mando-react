import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./Carousel";
import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"


const meta = {
  title: 'Example/Carousel',
  component: Carousel,

} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
    args: {
        title:"Page title",
        desc:"HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. ",
        slides:[{
            image: carousel1,
            altText: ""
        },{
            image: carousel2,
            altText: ""
        },{
            image: carousel3,
            altText: ""
        },{
            image: carousel3,
            altText: ""
        },{
            image: carousel3,
            altText: ""
        }]
      },
};