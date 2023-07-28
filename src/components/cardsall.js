import React from 'react';
import Card from './card';

import PaginationEl from './paginationEl';
export default class Cardsall extends React.Component {
  state = {

  }
  
 generatekey = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  render() {
    return (
      <div>

        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={0} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[0]} dates={this.props.dates[0]} descriptions={this.props.descriptions[0]}
            paths={this.props.paths[0]} rate={this.props.rate[0]} genere={this.props.genere[0]} id={this.props.id[0]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={1} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[1]} dates={this.props.dates[1]} descriptions={this.props.descriptions[1]}
            paths={this.props.paths[1]} rate={this.props.rate[1]} genere={this.props.genere[1]} id={this.props.id[1]} sessionId={this.props.sessionId} ></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={2} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[2]} dates={this.props.dates[2]} descriptions={this.props.descriptions[2]}
            paths={this.props.paths[2]} rate={this.props.rate[2]} genere={this.props.genere[2]} id={this.props.id[2]} sessionId={this.props.sessionId} ></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={3} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[3]} dates={this.props.dates[3]} descriptions={this.props.descriptions[3]}
            paths={this.props.paths[3]} rate={this.props.rate[3]} genere={this.props.genere[3]} id={this.props.id[3]} sessionId={this.props.sessionId} ></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={4} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[4]} dates={this.props.dates[4]} descriptions={this.props.descriptions[4]}
            paths={this.props.paths[4]} rate={this.props.rate[4]} genere={this.props.genere[4]} id={this.props.id[4]} sessionId={this.props.sessionId} ></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={5} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[5]} dates={this.props.dates[5]} descriptions={this.props.descriptions[5]}
            paths={this.props.paths[5]} rate={this.props.rate[5]} genere={this.props.genere[5]} id={this.props.id[5]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={6} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[6]} dates={this.props.dates[6]} descriptions={this.props.descriptions[6]}
            paths={this.props.paths[6]} rate={this.props.rate[6]} genere={this.props.genere[6]} id={this.props.id[6]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={7} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[7]} dates={this.props.dates[7]} descriptions={this.props.descriptions[7]}
            paths={this.props.paths[7]} rate={this.props.rate[7]} genere={this.props.genere[7]} id={this.props.id[7]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={8} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[8]} dates={this.props.dates[8]} descriptions={this.props.descriptions[8]}
            paths={this.props.paths[8]} rate={this.props.rate[8]} genere={this.props.genere[8]} id={this.props.id[8]} sessionId={this.props.sessionId} ></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={9} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[9]} dates={this.props.dates[9]} descriptions={this.props.descriptions[9]}
            paths={this.props.paths[9]} rate={this.props.rate[9]} genere={this.props.genere[9]} id={this.props.id[9]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={10} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[10]} dates={this.props.dates[10]} descriptions={this.props.descriptions[10]}
            paths={this.props.paths[10]} rate={this.props.rate[10]} genere={this.props.genere[10]} id={this.props.id[10]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={11} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[11]} dates={this.props.dates[11]} descriptions={this.props.descriptions[11]}
            paths={this.props.paths[11]} rate={this.props.rate[11]} genere={this.props.genere[11]} id={this.props.id[11]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={12} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[12]} dates={this.props.dates[12]} descriptions={this.props.descriptions[12]}
            paths={this.props.paths[12]} rate={this.props.rate[12]} genere={this.props.genere[12]} id={this.props.id[12]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={13} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[13]} dates={this.props.dates[13]} descriptions={this.props.descriptions[13]}
            paths={this.props.paths[13]} rate={this.props.rate[13]} genere={this.props.genere[13]} id={this.props.id[13]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={14} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[14]} dates={this.props.dates[14]} descriptions={this.props.descriptions[14]}
            paths={this.props.paths[14]} rate={this.props.rate[14]} genere={this.props.genere[14]} id={this.props.id[14]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={15} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[15]} dates={this.props.dates[15]} descriptions={this.props.descriptions[15]}
            paths={this.props.paths[15]} rate={this.props.rate[15]} genere={this.props.genere[15]} id={this.props.id[15]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={16} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[16]} dates={this.props.dates[16]} descriptions={this.props.descriptions[16]}
            paths={this.props.paths[16]} rate={this.props.rate[16]} genere={this.props.genere[16]} id={this.props.id[16]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={17} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[17]} dates={this.props.dates[17]} descriptions={this.props.descriptions[17]}
            paths={this.props.paths[17]} rate={this.props.rate[17]} genere={this.props.genere[17]} id={this.props.id[17]} sessionId={this.props.sessionId}></Card>
        </section>
        <section className='allcards'>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={18} addrating={this.props.addrating} imgurl={this.props.imgurl} names={this.props.names[18]} dates={this.props.dates[18]} descriptions={this.props.descriptions[18]}
            paths={this.props.paths[18]} rate={this.props.rate[18]} genere={this.props.genere[18]} id={this.props.id[18]} sessionId={this.props.sessionId}></Card>
          <Card key={this.generatekey(1, 10000)} ratednum={this.props.ratednum} num={19} addrating={this.props.addrating} imgurl={this.imgurl} names={this.props.names[19]} dates={this.props.dates[19]} descriptions={this.props.descriptions[19]}
            paths={this.props.paths[19]} rate={this.props.rate[19]} genere={this.props.genere[19]} id={this.props.id[19]} sessionId={this.props.sessionId}></Card>
        </section>
       
        <PaginationEl pages={this.props.pages} total={this.props.total}
          onPaginationChange={this.props.onPaginationChange} />
      </div>
    )



  }

}
