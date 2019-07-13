import React, { Component } from 'react'
import sections from './directory.data.js';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss'

class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections:sections
        };
        
    }
  render() {
      
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id,...otherSectionProps}) =>(
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    )
  }
}
export default Directory