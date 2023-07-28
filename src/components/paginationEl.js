
import React, { useState } from 'react';
import { Pagination } from 'antd';

const PaginationEl = (props) => {
console.log(props)
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    props.onPaginationChange(page)
    setCurrent(page);
  };
  return <Pagination className='footer-pagination' current={props.pages} onChange={onChange} total={props.total} />;
};
export default PaginationEl;