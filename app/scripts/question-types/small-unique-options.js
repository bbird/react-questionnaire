import React from 'react'
import NextButton from '../ui-lib/next-button.js'
import {store} from '../store.js'
export default class SmallUniqueOptions extends React.Component{
  constructor(){
    super();
    this.state = {
      selected: null
    }
  }
  _selectOne(selected,parent){
      parent.setState({selected:selected.id});
      store(parent.props.questionNumber,selected.description,{ElementType:"unique"});
    };
  render(){
    let _generateOptions = (function(options,parent,selectFunction){
      return(
        <ul className="options-ul text-center">
        {options.map(function(option){
            return (
                <li className={(parent.state.selected === option.id)?"selected":"unselected"} key={option.id}>
                  <a href="#" className="select-link" onClick={selectFunction.bind(this,option,parent)}>
                    {option.description}
                  </a>
                </li>
              );
              }
              )
        }
        </ul>
      );
    });
    return(
      <div className="well">
        <h1 className="text-center">{this.props.question}</h1>
        {_generateOptions(this.props.options,this,this._selectOne)}
        <NextButton skippable={this.props.skippable} nextFunc={this.props.nextFunc}/>
      </div>
    );
  }
}
