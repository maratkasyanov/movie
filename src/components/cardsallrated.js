import React from 'react';
import Cardrated from './cardrated';
export default class Cardsallrated extends React.Component {

  state = {
    time: this.props.time
  }

  ratedid = [...this.props.rated]
  generatekey = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  render() {

    return (
      <div>
        <section className='ratedcards'>
          {this.props.rated.map((elem) => {

            return <Cardrated numrate={elem.rate} key={this.generatekey(1, 1000)} id={elem.id} time={String(this.state.time)}></Cardrated>

          })}
        </section>
      </div>
    )



  }

}
