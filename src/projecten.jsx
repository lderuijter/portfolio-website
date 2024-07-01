import React from 'react';
import ProjectenJson from './projects.json';

class Projecten extends React.Component {
    render() {
      const json = ProjectenJson;
      const arr = [];
      Object.keys(json).forEach(function(key) {
        arr.push(json[key]);
      });
      return <ul>{arr.map((item, key) => <ProjectenReturn key={key} titel={item.titel} beschrijving={item.beschrijving} />)}</ul>;
    }
  }
  
  class ProjectenReturn extends React.Component {
    render() {
        return <div>{this.props.titel + " - " + this.props.beschrijving}</div>;
    }
  }
  
export default Projecten;