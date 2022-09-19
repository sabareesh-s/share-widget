import Share from "../components/Share"


export default {
  title: "Share Widget",
  component: Share,

}

const Template = args => <Share {...args} />

export const Green = Template.bind({})
Green.args = {
  label: "Share",
  button: "success"
}




