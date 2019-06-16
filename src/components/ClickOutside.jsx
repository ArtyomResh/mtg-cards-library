import React, { PureComponent, Fragment } from 'react'
import { findDOMNode } from 'react-dom'
import { node, string, func } from 'prop-types'

export default class ClickOutside extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    component: node,
    onOutsideClick: func,
  }

  static defaultProps = {
    className: '',
    component: <Fragment />,
  }

  componentDidMount() {
    window.document.addEventListener('click', this.handleClick)
    window.document.addEventListener('keydown', this.handleKeypress)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.handleClick)
    window.document.removeEventListener('keydown', this.handleKeypress)
  }

  handleClick = event => {
    const { target } = event
    const domNode = findDOMNode(this)

    if (target !== domNode && !domNode.contains(target)) {
      this.props.onOutsideClick(event)
    }
  }

  handleKeypress = event => {
    const TAB_KEY = 9
    const ESC_KEY = 27

    if (event.keyCode === TAB_KEY || event.keyCode === ESC_KEY) {
      this.props.onOutsideClick(event)
    }
  }

  render() {
    const { component, children } = this.props
    const args = { className: this.props.className }

    return React.cloneElement(component, args, children)
  }
}
