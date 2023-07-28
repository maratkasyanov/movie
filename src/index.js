import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/tabsChange'
import Cardsall from './components/cardsall';
import Input from './components/input';
import Spinner from './components/spinner'
import ErorrCom from './components/error'
import Cardsallrated from './components/cardsallrated'

export default class App extends React.Component {
  abs = []
  ratednum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  numrate = []
  state = {
    page: 1,
    search: '1',
    total: 50,
    corectlysearch: true,
    nowTab: 'search',
    sessionId: '',
    ratetab: [],
    numrate1: this.numrate,
    pageNow: 1,
    elemRated: [],
    loading: true,
    error: false,
    guestsessionid: '',
    rated: this.abs,
    ratednum1: this.ratednum,
    rate: [],
    names: ['Completed task', 'Completed task', 'Completed task', 'Completed task',
      'Completed task', 'Completed task', 'Completed task', 'Completed task'],
    dates: ['11 april', '12 march', '22 december', '3 january',
      '11 april', '11 april', '11 april', '11 april'],
    descriptions: [
      'sadadasdasdapril', '12 mdasdsadasdasdaarch', '22 decemdasdsadasdasdaarchmber', '3 jmdasdsadasdasdaarchanuary',
      '11 aprmdasdsadasdasdaarchil', '11 aprmdasdsadasdasdaarchil', '11 aprmdasdsadasdasdaarchil', '11 apmdasdsadasdasdaarchril'
    ],
    paths: ['', '', '', '',
      '', '', '', ''],
    pageN: '1',
    totalpages: 1,
    genere: ['', '', '', '', '', '', ''],
    id: []
  }

  imgurl = 'http://image.tmdb.org/t/p/w500/'
  status = false
  fetch = require('node-fetch');


  url = `https://api.themoviedb.org/3/search/movie?query=`;
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzBhZmQ2OGU1ZGQ3NGQwY2I5ODc5ZjAwYzIyY2E3ZSIsInN1YiI6IjY0YjE2OGY1ZDIzNmU2MDBjNTg3MTJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JYez8alN4yAy4FGeixnq0Ej5TVIprItSEef5SJSILY'
    }
  };


  ////обработка ошибок 
  onErrr = () => {
    this.setState(({ error }) => {
      return { error: true }
    })
  }

  totalPag = (total1) => {
    this.setState(({ totalpages }) => {
      return {
        totalpages: total1 * 10
      }
    })
  }

  arrname = []
  arrdate = []
  arrdescr = []
  arrimg = []
  arrrate = []
  genereids = []
  ids = []
  reslen = 0
  changepagepag = () => {
    this.setState(({ pageN }) => {
      return {
        pageN: this.state.pageNow
      }
    })
  }
  onPaginationChange = (page1) => {
    this.setState(({ page }) => {
      return {
        page: page1
      }
    })
  }
  async getele(url, options) {
    ////страница здесь
    url = url + this.state.search + '&page=' + String(this.state.page)
    const res = await fetch(url, options)
    if (res.ok) {
      const result = await res.json()

      this.reslen = result.results.length

      if (result.results !== undefined && result.results.length > 0) {
        this.totalPag(result.total_pages)
        return result
      }
    }
    else if (this.reslen === 0) {
      alert('ничего не найдено')
      this.props.statusCheck(this.reslen === 0)
    }
    else {
      res.catch((this.onErrr))
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
  reloadPage = () => {
    this.setState(({ page }) => {
      return {
        page: 1
      }
    })
  }

  ////изменение запроса
  componentDidUpdate(props, state) {

    if (this.state.search !== state.search) {
      this.reloadPage()
      this.setState(({ page }) => {
        return {
          page: 1,
          loading: true
        }
      })
      this.getele(this.url, this.options)
        .then((res) => {
          ///отработка ошибки по длине!!!
          this.arrname = []
          console.log(res === undefined)
          if (res !== undefined) {
            res.results.map((elem) => {
              this.arrname.push(elem.title)
              return 1
            })
            setTimeout(() => {
              this.setState(({ names }) => {
                let newarrNames = [...this.arrname.slice(0, 20)]
                return {
                  names: newarrNames
                }
              })
            }, 500);
          } else {

            alert('ничего не найдено')
          }

        }).catch((this.onErrr))

      ///получение id
      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res)
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            this.ids=[]
            res.results.map((elem) => {
              
              this.ids.push(elem.id)
              return 1
            })
            setTimeout(() => {
              this.setState(({ genere }) => {

                let id = [...this.ids.slice(0, 20)]
                console.log(id)
                return {
                  id: id
                }
              })
            }, 500);
          }
        }).catch((this.onErrr))
      ////получение даты
      let arrdate = []
      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res === undefined)
          ///отработка ошибки по длине!!!

          if (res !== undefined) {
            res.results.map((elem) => {


              arrdate.push(elem.release_date)
              return 1
            })
            setTimeout(() => {
              this.setState(({ dates }) => {

                let newarrDates = [...this.arrdate.slice(0, 20)]

                return {
                  dates: newarrDates
                }
              })
            }, 500);
          }
        }).catch((this.onErrr))
      //////получение описания overview

      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res === undefined)
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            this.arrdescr = []
            res.results.map((elem) => {

              this.arrdescr.push(elem.overview)
              return 1
            })
            console.log(this.arrdescr)
            setTimeout(() => {
              this.setState(({ descriptions }) => {

                let newarrDates1 = [...this.arrdescr.slice(0, 20)]

                return {
                  descriptions: newarrDates1
                }
              })
            }, 500);
          }
        }).catch((this.onErrr))
      ////получение картинок
      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res === undefined)
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            this.arrimg = []
            res.results.map((elem) => {

              this.arrimg.push(elem.poster_path)
              return 1
            })
            setTimeout(() => {
              this.setState(({ paths }) => {

                let newarrDates = [...this.arrimg.slice(0, 20)]

                return {
                  paths: newarrDates,
                }
              })
            }, 500);
          }

        }).catch((this.onErrr))
      ////получение рейтинга
      this.getele(this.url, this.options)
        .then((res) => {
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            res.results.map((elem) => {

              this.arrrate.push(elem.vote_average)
              return 1
            })
            setTimeout(() => {
              this.setState(({ rate, loading }) => {

                let newarrDates = [...this.arrrate.slice(0, 20)]

                return {
                  rate: newarrDates,
                  loading: false
                }
              })
            }, 500);
          }
        }).catch((this.onErrr))

    }
    else if (this.state.page !== state.page) {
      this.setState(({ loading }) => {
        return {
          loading: true
        }
      })
      this.getele(this.url, this.options)
        .then((res) => {
          ///отработка ошибки по длине!!!
          this.arrname = []
          console.log(res === undefined)
          if (res !== undefined) {
            res.results.map((elem) => {

              this.arrname.push(elem.title)
              return 1
            })
            setTimeout(() => {
              this.setState(({ names }) => {
                let newarrNames = [...this.arrname.slice(0, 20)]
                return {
                  names: newarrNames
                }
              })
            }, 500);
          } else {

            alert('ничего не найдено')
          }

        }).catch((this.onErrr))
      ////получение даты
      let arrdate = []
      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res === undefined)
          ///отработка ошибки по длине!!!

          if (res !== undefined) {
            res.results.map((elem) => {


              arrdate.push(elem.release_date)
              return 1
            })
            setTimeout(() => {
              this.setState(({ dates }) => {

                let newarrDates = [...arrdate.slice(0, 20)]

                return {
                  dates: newarrDates
                }
              })
            }, 500);
          } else {

            alert('ничего не найдено')
          }
        }).catch((this.onErrr))

      ////получение id
      this.getele(this.url, this.options)
        .then((res) => {
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            this.ids = []
            res.results.map((elem) => {
              console.log(elem.id)
              this.ids.push(elem.id)
              return 1
            })
            setTimeout(() => {
              this.setState(({ id }) => {

                let id21 = [...this.ids.slice(0, 20)]
                console.log(id21)
                return {
                  id: id21
                }
              })
            }, 500);
          }
        }).catch((this.onErrr))
      //////получение описания overview

      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res === undefined)
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            this.arrdescr = []
            res.results.map((elem) => {

              this.arrdescr.push(elem.overview)
              return 1
            })
            console.log(this.arrdescr)
            setTimeout(() => {
              this.setState(({ descriptions }) => {

                let newarrDates1 = [...this.arrdescr.slice(0, 20)]

                return {
                  descriptions: newarrDates1
                }
              })
            }, 500);
          } else {

            alert('ничего не найдено')
          }

        }).catch((this.onErrr))
      ////получение картинок
      this.getele(this.url, this.options)
        .then((res) => {
          console.log(res === undefined)
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            this.arrimg = []
            res.results.map((elem) => {

              this.arrimg.push(elem.poster_path)
              return 1
            })
            setTimeout(() => {
              this.setState(({ paths, loading }) => {

                let newarrDates = [...this.arrimg.slice(0, 20)]

                return {
                  paths: newarrDates,
                  loading: false
                }
              })
            }, 500);
          } else {

            alert('ничего не найдено')
          }

        }).catch((this.onErrr))
      ////получение рейтинга
      this.getele(this.url, this.options)
        .then((res) => {
          ///отработка ошибки по длине!!!
          if (res !== undefined) {
            res.results.map((elem) => {

              this.arrrate.push(elem.vote_average)
              return 1
            })
            setTimeout(() => {
              this.setState(({ rate, loading }) => {

                let newarrDates = [...this.arrrate.slice(0, 20)]

                return {
                  rate: newarrDates,
                  loading: false
                }
              })
            }, 500);
          }
        }).catch((this.onErrr))
    }

  }

  onAdd = (label) => {
    if (label !== '') {
      this.setState(({ search }) => {
        return {
          search: label
        }
      })
    }

  }
  componentDidMount() {
    ///создание гостевой сессии
    const urlG = 'https://api.themoviedb.org/3/authentication/guest_session/new';
    const optionsG = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzBhZmQ2OGU1ZGQ3NGQwY2I5ODc5ZjAwYzIyY2E3ZSIsInN1YiI6IjY0YjE2OGY1ZDIzNmU2MDBjNTg3MTJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JYez8alN4yAy4FGeixnq0Ej5TVIprItSEef5SJSILY'
      }
    };
    fetch(urlG, optionsG)
      .then(res => res.json())
      .then(json => {
        this.setState(({ sessionId }) => {
          return {
            sessionId: json.guest_session_id
          }
        })
      })
      .catch(err => console.error('error:' + err));
    ////поиск
    /////получение названия фильма
    this.getele(this.url, this.options)

      .then((res) => {

        ///отработка ошибки по длине!!!
        if (res !== undefined) {
          res.results.map((elem) => {
            this.arrname.push(elem.title)
            return 1
          })
          setTimeout(() => {
            this.setState(({ names }) => {
              let newarrNames = [...this.arrname.slice(0, 20)]
              return {
                names: newarrNames
              }
            })
          }, 500);
        }
        else {

          alert('ничего не найдено')
        }
      }).catch((this.onErrr))
    ///получение id
    this.getele(this.url, this.options)
      .then((res) => {

        ///отработка ошибки по длине!!!
        if (res !== undefined) {
          res.results.map((elem) => {
            
            this.ids.push(elem.id)
            return 1
          })
          setTimeout(() => {
            this.setState(({ genere }) => {

              let newarrDates = [...this.ids.slice(0, 20)]

              return {
                id: newarrDates
              }
            })
          }, 500);
        }
      }).catch((this.onErrr))
    ////получение даты
    this.getele(this.url, this.options)
      .then((res) => {
        this.arrdate = []

        ///отработка ошибки по длине!!!
        if (res !== undefined) {
          res.results.map((elem) => {

            this.arrdate.push(elem.release_date)
            return 1
          })
          setTimeout(() => {
            this.setState(({ dates }) => {

              let newarrDates = [...this.arrdate.slice(0, 20)]
              return {
                dates: newarrDates
              }
            })
          }, 500);
        }

      }).catch((this.onErrr))
    //////получение описания overview
    this.getele(this.url, this.options)
      .then((res) => {

        ///отработка ошибки по длине!!!
        if (res !== undefined) {
          res.results.map((elem) => {

            this.arrdescr.push(elem.overview)
            return 1
          })
          setTimeout(() => {
            this.setState(({ descriptions }) => {

              let newarrDates = [...this.arrdescr.slice(0, 20)]

              return {
                descriptions: newarrDates
              }
            })
          }, 500);
        }

      }).catch((this.onErrr))
    ////получение картинок
    this.getele(this.url, this.options)
      .then((res) => {

        ///отработка ошибки по длине!!!
        if (res !== undefined) {
          res.results.map((elem) => {

            this.arrimg.push(elem.poster_path)
            return 1
          })
          setTimeout(() => {
            this.setState(({ paths, loading }) => {

              let newarrDates = [...this.arrimg.slice(0, 20)]

              return {
                paths: newarrDates,
              }
            })
          }, 500);
        }
      }).catch((this.onErrr))
    ////получение рейтинга
    this.getele(this.url, this.options)
      .then((res) => {

        ///отработка ошибки по длине!!!
        if (res !== undefined) {
          res.results.map((elem) => {

            this.arrrate.push(elem.vote_average)
            return 1
          })
          setTimeout(() => {
            this.setState(({ rate, loading }) => {

              let newarrDates = [...this.arrrate.slice(0, 20)]

              return {
                rate: newarrDates,
                loading: false
              }
            })
          }, 500);
        }
      }).catch((this.onErrr))

  }


  statusCheck = (usl) => {
    console.log(usl)
    if (usl === true) {
      this.setState(({ corectlysearch }) => {
        return {
          corectlysearch: false
        }
      })
    } else {
      this.setState(({ corectlysearch }) => {
        return {
          corectlysearch: true
        }
      })
    }
  }

  checktab = (tabname) => {
    console.log(tabname)
    this.setState(({ nowTab }) => {
      return {
        nowTab: tabname
      }
    })
  }



  time = 0
  addrating = (id, index, rate1) => {
    if (rate1 > 0) {




      console.log(rate1)

      if (this.state.rate !== id) {

        console.log(id)
        this.abs.push({ id: id, rate: rate1 })
        this.time = new Date()
      }

      console.log(this.ratednum)

    }
  }

  render() {
    console.log(this.abs)

    if (this.state.loading === true && this.state.error === false) {
      return <Spinner />
    }
    else if (this.state.error === true && this.reslen !== 0) {
      return <ErorrCom />
    }
    else {
      if (this.state.nowTab === 'search') {
        console.log(this.state.dates)
        return (
          <div>
            <Tabs checktab={this.checktab} />
            <Input onAdd={this.onAdd} />
            <Cardsall addrating={this.addrating}
              sessionId={this.state.sessionId} pageNow={String(this.state.page)}
              statusCheck={this.statusCheck}
              search={this.state.search}
              onPaginationChange={this.onPaginationChange}
              num={0} imgurl={this.imgurl} names={this.state.names} dates={this.state.dates} descriptions={this.state.descriptions}
              paths={this.state.paths} rate={this.state.rate} genere={this.state.genere} id={this.state.id}
              pages={this.state.page} total={this.state.totalpages}
            />
          </div>
        )
      } else {

        return (
          <div>
            <Tabs checktab={this.checktab} />
            <Cardsallrated time={this.time} rated={this.state.rated} />
          </div>
        )
      }
    }


  }

}

ReactDOM.render(<App />, document.getElementById('root'))