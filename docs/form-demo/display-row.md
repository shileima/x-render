---
order: 0
toc: content
mobile: false
group: 
  title: 最佳示例
  order: 2
---

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
import schema from './schema/baseControl';
import { Space, Input } from 'antd';

export default () => {

  // 自定义组件
  // const MyInput: React.FC<WidgetProps> = (props) => {
  //   const { value, onChange, age } = props;

  //   return (
  //     <Space>
  //       <Input
  //         style={{ width: 200 }}
  //         value={value}
  //         onChange={(e) => onChange(e.target.value)}
  //       />
  //       <div>{age}</div>
  //     </Space>
  //   );
  // };

  const form = useForm();

  const onFinish = (formData) => {
    console.log('formData：', formData);
  };

  return <FormRender form={form} schema={schema} footer={true} onFinish={onFinish} />;
};
```
