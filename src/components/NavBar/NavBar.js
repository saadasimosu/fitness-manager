import React, { Component, Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './../Home/Home';
import { Programs } from './../Programs/Programs';

export default class NavBar extends Component {
    state = { activeItem: 'programs' }

    handleItemClick = (e, {name} ) => this.setState( {activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Router>
                <Fragment>
                    <Menu pointing secondary>
                        <Menu.Item
                            as={ Link }
                            name='home'
                            to='/'
                            active={activeItem === 'home'} 
                            onClick={this.handleItemClick} 
                        />
                        <Menu.Item
                            as={ Link }
                            name='programs'
                            to='programs'
                            active={activeItem === 'programs'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Route exact path ="/" component={Home} />
                    <Route path ="/programs" component={Programs} />
                </Fragment>
            </Router>
        )
    }
}