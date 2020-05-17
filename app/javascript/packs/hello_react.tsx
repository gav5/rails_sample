// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react'
import * as ReactDOM from 'react-dom'

type HelloProps = {
  name: String
}

export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hi {this.props.name}!</h1>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Lilibeth"/>,
    document.body.appendChild(document.createElement('div')),
  )
})
