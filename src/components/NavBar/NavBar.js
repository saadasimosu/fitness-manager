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
        route: 'programs'
    }
]

export default class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, {name} ) => this.setState( {activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing secondary>
                {navItems.map((navItem, index) => {
                    return(
                        <Menu.Item
                            key={index}
                            as={ Link }
                            name={navItem.name}
                            to={navItem.route}
                            active={activeItem === navItem.name} 
                            onClick={this.handleItemClick} 
                        />
                    )
                })}
            </Menu>
        )
    }
}