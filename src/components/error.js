import { Alert, Space } from 'antd';
import React from 'react';
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const ErorrCom = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      message="Произошла ошибка"
      description="Что-то пошло не так, попробуйте другой запрос"
      type="error"
      closeIcon
      onClose={onClose}
    />
  </Space>
);
export default ErorrCom;