import Share from "../components/Share"


export default {
  title: "Components/Button",
  component: Share,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Share {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: "Share",
  mode: "dark",
}

