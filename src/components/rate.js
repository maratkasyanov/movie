
import React, { useState } from 'react';
import { Rate } from 'antd';
const desc = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10'];
const Rated = (props) => {
  const [value, setValue] = useState(0);
  console.log(props.ratenow)
    return (
      
      <span>
        <Rate count={10} tooltips={desc} onChange={setValue} value={value} onKeyDown={props.addrating(props.id,props.num,value)}/>
        {props.checkrate(value ? desc[value - 1] : 0)}
      </span>
      
    );

  


};
export default Rated;