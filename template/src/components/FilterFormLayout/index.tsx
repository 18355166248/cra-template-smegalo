import { Form, Button } from 'antd';
import React, { FC } from 'react';
import { isFunction } from 'lodash';
import './index.scoped.scss';

interface Props {
  onOk: (formData: any) => void; // 查询回调
  onCreate: () => void; // 新增
  children: React.ReactNode; // 表单内容
  onReset?: () => void; // 重置回调
  onValuesChange?: (params: any) => void; // 重置回调
  initialValues?: any; // 表单初始值
}

const FilterFormLayout: FC<Props> = (props: Props) => {
  const {
    onOk,
    onReset,
    onCreate,
    onValuesChange,
    initialValues = {},
    children,
  } = props;

  const [form] = Form.useForm();

  function _onFinish() {
    if (isFunction(onOk)) onOk(form.getFieldsValue());
  }

  function _onValuesChange(params: any) {
    if (isFunction(onValuesChange)) onValuesChange(params);
  }

  function _onReset() {
    form.resetFields();
    if (isFunction(onReset)) onReset();
  }

  return (
    <div>
      <Form
        form={form}
        className="filterformlayout flex"
        name="basic"
        layout="inline"
        initialValues={initialValues}
        onFinish={_onFinish}
        onValuesChange={_onValuesChange}
      >
        {children}

        <div className="flex justify-between flex-grow mb-4">
          <div>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            {onReset && (
              <Button onClick={_onReset} className="ml-2">
                重置
              </Button>
            )}
          </div>

          <Button type="primary" onClick={onCreate}>
            新增
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FilterFormLayout;
