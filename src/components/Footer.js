import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
export default class Footer extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <div className="Footer">
          <Menu text>
            <Menu.Item
              name="Terms"
              active={activeItem === 'terms'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Privacy"
              active={activeItem === 'Privacy'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="RoadMap"
              active={activeItem === 'RoadMap'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Affiliates"
              active={activeItem === 'Affiliates'}
              onClick={this.handleItemClick}
            />
          </Menu>
          <div className="right">
            <Menu text>
              <Menu.Item
                name="Contact"
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Blog"
                active={activeItem === 'Blog'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="About"
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </div>
        </div>
      </>
    );
  }
}
