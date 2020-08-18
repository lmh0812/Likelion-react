import React, {Component} from 'react';
import './App.css';
import New from './components/new'
import Old from './components/old'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:"멋쟁이 사자처럼 7기", sub:"운영진"},
      staff:["모수혁","박현성","성은지"], 
      subject2:{title:"멋쟁이 사자처럼 8기", sub:"리액트"},
      student:["재윤님","명현님","지혜님"]
    }
  }
  render() {
    return (
      <div>
      <h1>hello world</h1>
      <New title={this.state.subject2.title} sub={this.state.subject2.sub} lion={this.state.student}></New>
      <Old title={this.state.subject.title} sub={this.state.subject.sub} likelion={this.state.staff}></Old>
      </div>
    );
  }
}



export default App;
