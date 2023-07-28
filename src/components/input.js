import React from 'react';
import { debounce } from "lodash";
export default class Input extends React.Component {
  // state = {
  //   label: ''
  // }

  state = {
    isLoading: false,
    inputValue: "",
    label: ""
  };
  
  debounceTest = debounce(val => {
    this.setState({
      isLoading: false,
      label:val
    });
    console.log(val)
    console.log(this.state)
    this.props.onAdd(this.state.label.trim())
         this.setState({
           label: '',
           inputValue:''
         })
  }, 1500);

  testDebounce = event => {
    const { target: { value } } = event;
    this.setState({
      isLoading: true,
      inputValue: value
    });
    this.debounceTest(value);
   
  // onLableChange = (e) => {
  //   this.setState({
  //     label: e.target.value
  //   })
  //   setTimeout(() => {
  //     e.preventDefault()
  //     this.props.onAdd(this.state.label.trim())
  //     this.setState({
  //       label: ''
  //     })
  //   }, 1500);
  // }
  // onSubmit = (e) => {
  }
  render() {
    return (
      
        <input type="text" className="cards-rearch"
          placeholder="Type to search..."
          autoFocus onChange={this.testDebounce}
          value={this.state.inputValue}
          />
      
    )
  }

}