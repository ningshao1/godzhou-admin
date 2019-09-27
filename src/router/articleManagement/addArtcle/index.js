import React from "react";
import { Form, Input, Select, Button } from "antd";
import EditorDemo from "@c/Editor";
function addForm(props) {
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      <Form.Item label="标题">
        {getFieldDecorator("title", {
          rules: [{ required: true, message: "请输入标题!" }]
        })(<Input placeholder="请输入标题" />)}
      </Form.Item>
      <Form.Item label="标签">
        {getFieldDecorator("labels", {
          rules: [{ required: true, message: "请输入选择标签!" }]
        })(
          <Select placeholder="请选择标签" mode="multiple">
            <Select.Option value="rmb">1132</Select.Option>
          </Select>
        )}
      </Form.Item>
    </Form>
  );
}
const WrappedForm = Form.create({ name: "time_related_controls" })(addForm);
export default class AddArticle extends React.Component {
  render() {
    return (
      <div>
        <WrappedForm />
        <EditorDemo />
        <Button type="primary">提交</Button>
      </div>
    );
  }
}
