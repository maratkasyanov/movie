import React from 'react';
import ReactDOM from 'react-dom';

export default class Tabs extends React.Component {
  state = {
    classNameSearch: "search-tab active",
    classNameRated: "rated-tab "
  }
  onClickSearch = (e) => {
    
    this.setState(() => {
      this.props.checktab('search')
      return {
        classNameSearch: 'search-tab active '
      }
    })

    this.setState(() => {
      return {
        classNameRated: 'rated-tab '
      }
    })
 
    e.preventDefault() 
  }
  onClickRate = (e) => {
    this.setState(() => {
      this.props.checktab('rated')
      return {
        classNameSearch: 'search-tab'
      }
    })
    e.preventDefault() 
    this.setState(() => {
      return {
        classNameRated: 'rated-tab active'
      }
    })
  }
  render() {
    console.log(this.props)
    return (
      <section className='tabs'>
        <div className='tabs-div'>
          <a onClick={this.onClickSearch} className={this.state.classNameSearch} href='sada'>Search</a>
          <a onClick={this.onClickRate} className={this.state.classNameRated} href='sda'>Rated</a>
        </div>
      </section>
    )
  }
}