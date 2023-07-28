
import React from 'react';
import mainLogo from '../img/noimage.jpg';
import { format } from 'date-fns';
import Rated2 from './rate2'
export default class cardrated extends React.Component {
  state = {
    name: '',
    description: '',
    voteaverage: '',
    releasedate: '',
    img: '',
    genere: []
  }
  datechange = (date) => {
    if (date !== undefined && date !== null && date !== '') {
      return format(new Date(date), 'MMMM d, yyyy')
    }
    else {
      return 'date none'
    }
  }
  slicesrting = (str) => {
    if (str !== undefined) {
      const res = str.replace(/^(.{200}[^\s]*).*/, "$1")
      return res
    }
  }
  async getele22(url, options) {
    url = url + this.props.id
    const res = await fetch(url, options)
    if (res.ok) {
      const result = await res.json()

      return result

    }

  }
  urlrate = `https://api.themoviedb.org/3/movie/`;
  optionsrate = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzBhZmQ2OGU1ZGQ3NGQwY2I5ODc5ZjAwYzIyY2E3ZSIsInN1YiI6IjY0YjE2OGY1ZDIzNmU2MDBjNTg3MTJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JYez8alN4yAy4FGeixnq0Ej5TVIprItSEef5SJSILY'
    }
  };
  imgurl = 'http://image.tmdb.org/t/p/w500/'
  createurlimg = (url1, url2) => {
    if (url2) {
      return url1 + url2
    }
    else {
      return mainLogo
    }

  }
  genere = []
  componentDidMount() {

    this.getele22(this.urlrate, this.optionsrate).then((res) => {
      this.setState(({ name }) => { return { name: res.title } })
      this.setState(({ description }) => { return { description: res.overview } })
      this.setState(({ voteaverage }) => { return { voteaverage: res.vote_average } })
      this.setState(({ releasedate }) => { return { releasedate: res.release_date } })
      this.setState(({ img }) => { return { img: res.poster_path } })
      this.setState(({ genere }) => {
        console.log(res.genres)
        if (res.genres[0] === undefined) {
          return { genere: ['genere none '] }
        } else {
          res.genres.map((elem) => { 
            this.genere.push(elem.name) 
          })

          return { genere: this.genere }

        }

      })
    })

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

  render() {
    console.log(this.genere, this.state.genere)
    return (




      <section className='card'>
        <img style={{ width: '200px' }} src={this.createurlimg(this.imgurl, this.state.img)} className='card-img' alt='imgfilm'></img>
        <div className='card-description'>
          <div className='card-header'>
            <div className='section-name-rate'>
              <h2 className='card-film-name'>{this.state.name}</h2>
              <h2 style={{ borderColor: this.colorchange(Math.round(this.state.voteaverage)) }} className='card-film-rate'>{Math.round(this.state.voteaverage)}</h2>
            </div>
            <div className='section-descr-genere'>
              <p className='card-film-date'>{this.datechange(this.state.releasedate)}</p>
              <div className='card-film-genere-sec'>
                {this.state.genere.map((elem) => {
                  return <a href='sad' className='card-film-genere'>{elem}</a>
                })}
              </div>
            </div>
          </div>

          <p className='card-film-description'>{this.slicesrting(this.state.description)}</p>
          <Rated2 numrate={this.props.numrate}></Rated2>
        </div>
      </section>


    )
  }

}
