import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    name: 'home',
    route: '/'
  },
  {
    name: 'programs',
    route: '/programs'
  },
  {
    name: 'exercises',
    route: '/exercises'
  }
]

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        {navItems.map((navItem, index) => {
          return (
            <Menu.Item
              key={index}
              name={navItem.name}
              onClick={this.handleItemClick}
              active={activeItem === navItem.name}
              as={Link}
              to={navItem.route}
            />
          )
        })}
      </Menu>
    )
  }
}