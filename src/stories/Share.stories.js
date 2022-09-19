import Share from "../components/Share"


export default {
  title: "Share Widget",
  component: Share,

}

const Template = args => <Share {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: "Share",
  darkMode: "dark",
}

