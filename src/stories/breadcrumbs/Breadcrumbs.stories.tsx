import type { Meta, StoryObj } from "@storybook/react-vite";
import { BreadCrumbs } from "./BreadCrumbs";



const meta = {
  title: 'Example/Breadcrumbs',
  component: BreadCrumbs,

} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
  args: {
    currentPageLabel:"Current Page",
    homePageLink:"/",
    homePageScreenReaderText:"Home page",
    pages:[{label:"About us",link:"/About-Us"},{label:"Meet the team",link:"/team"},{label:"Leadership",link:"/leadership"}]
   
   
    
  },
};
