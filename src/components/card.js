import React from 'react';
import mainLogo from '../img/noimage.jpg';
import { format } from 'date-fns';
import Rated from './rate'

export default class card extends React.Component {
  state = {
    genere: [],
    rated: false,
    rateeeee: 0
  }
  slicesrting = (str) => {
    if (str !== undefined) {
      const res = str.replace(/^(.{200}[^\s]*).*/, "$1")
      return res
    }
  }
  datechange = (date) => {
    if (date !== undefined && date !== null && date !== '') {
      return format(new Date(date), 'MMMM d, yyyy')
    }
    else {
      return 'date none'
    }
  }
  imgurl = (imgurl, path) => {
    if (path !== null) {
      const res = imgurl + path
      return res
    }
    else {
      return mainLogo
    }

  }
  idkey = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  rating = null
  checkrate = (rate) => {
    this.rating = rate
  }
  generes = []
  urlrate = `https://api.themoviedb.org/3/movie/`;
  optionsrate = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzBhZmQ2OGU1ZGQ3NGQwY2I5ODc5ZjAwYzIyY2E3ZSIsInN1YiI6IjY0YjE2OGY1ZDIzNmU2MDBjNTg3MTJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JYez8alN4yAy4FGeixnq0Ej5TVIprItSEef5SJSILY'
    }
  };
  async getele22(url, options) {
    ////страница здесь
    url = url + this.props.id
    const res = await fetch(url, options)
    if (res.ok) {
      const result = await res.json()

      return result
    }

  }
  resss = []
  returngeneres = (arr) => {
    if (arr !== undefined) {
      if (arr.length > 0) {
        arr.map((elem) => {
          return elem
        })
      }
    }
  }
  checkidrate = (arr, id) => {
    arr.map((elem) => {
      if (elem.id === id) {
        this.setState(({ rated }) => {
          return { rated: true }
        })
        this.setState(({ rateeeee }) => {
          return {
            rateeeee: elem.rate
          }
        })
        return elem.rate
      }
      else {
        return 0
      }
    })
  }
  componentDidMount() {
    this.getele22(this.urlrate, this.optionsrate).then((res) => {
      if (res !== undefined) {
        res.genres.map((elem) => {

          this.resss.push(elem.name)
          return 1
        })
        this.setState(({ genere }) => {
          return {
            genere: this.resss
          }
        })

      }
    })
    this.returngeneres(this.state.genere)
  }
  colorchange = (review) => {
    if (review <= 3) {
      let res = '#E90000'

      return res
    } else if (review > 3 && review <= 5) {
      let res = '#E97E00'

      return res
    }
    else if (review > 5 && review <= 7) {

      let res = '#E9D100'

      return res
    }
    else {
      let res = '#66E900'

      return res
    }
  }
  generatekey = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  render() {
    if (this.props.names !== undefined) {

      return (
        <section key={this.generatekey(1, 1000)} className='card'>
          <img style={{ width: '200px' }} src={this.imgurl(this.props.imgurl, this.props.paths)} className='card-img' alt='imgfilm'></img>
          <div className='card-description'>
            <div className='card-header'>
              <div className='section-name-rate'>
                <h2 className='card-film-name'>{this.props.names}</h2>
                <h2 style={{ borderColor: this.colorchange(Math.round(this.props.rate)) }} className='card-film-rate'>{Math.round(this.props.rate)}</h2>
              </div>
              <div className='section-descr-genere'>
                <p className='card-film-date'>{this.datechange(this.props.dates)}</p>
                <div className='card-film-genere-sec'>
                {this.state.genere.map((elem) => { return <a href='asad' key={this.generatekey(1, 1000)} className='card-film-genere'>{elem}</a> })}
                </div>
              </div>
            </div>

            <p className='card-film-description'>{this.slicesrting(this.props.descriptions)}</p>
            <Rated addrating={this.props.addrating} num={this.props.num} id={this.props.id} ses={this.props.sessionId} checkrate={this.checkrate}></Rated>
          </div>
        </section>
      )





    }
    else if (this.props.names === undefined || this.props.names === null) {
      return (
        <section></section>
      )
    }
  }



}
