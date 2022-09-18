import Button from "../components/Button"


export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: "Share",
  size: "md",
}

