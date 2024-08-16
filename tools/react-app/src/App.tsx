import React from 'react';
import { Flex, Col, Row } from 'antd';
import FormRender, { useForm } from 'form-render';
import schema from './schema';

export default () => {
  const form = useForm();
  const [formData, setFormData] = React.useState({});
  const onFinish = (formData: any) => {
    console.log('formData:', formData);
    setFormData(formData);
  };

  return <>
    <Flex>
      <Row>
        <Col span={18} >
          <FormRender form={form} schema={schema} footer={true} onFinish={onFinish} />
        </Col>
        <Col span={6} >
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </Col>
      </Row>
    </Flex>

  </>;
};
