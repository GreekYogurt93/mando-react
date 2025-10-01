import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
import logo from "../assets/cips-logo.svg"


const meta = {
  title: 'Example/CIPS Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
   
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    Link1:{ LinkLabel: "About us",LinkUrl:"/aboutus"},
    Link2:{ LinkLabel: "Contact",LinkUrl:"/contact"},
    SiteLogo:logo,
    SiteLogoAlt:"Some company logo",
    SiteLogoScreenReadText:"Some company logo",
    SiteLogoUrl:logo,
    MobileMenuLabel:"Menu"
   
    
  },
};

