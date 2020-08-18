import React, {Component} from 'react';

class New extends Component{
    render() {
      var data = this.props.lion;
      var list = [];
      for(var i=0; i<data.length; i++){
        list.push(<li>{data[i]}</li>)
      }
      return (
        <header>
          <h1>{this.props.title}</h1>
          <p>{this.props.sub}</p>
          <ul>
              {list}
          </ul>
        </header>
      );
    }
  }

export default New;