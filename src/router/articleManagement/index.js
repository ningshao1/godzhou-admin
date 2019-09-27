import React, { Component } from "react";
import {
  Form,
  Button,
  Table,
  Input,
  Row,
  Col,
  DatePicker,
  Select,
  Pagination
} from "antd";
import { Link } from "react-router-dom";
const ArticelSearch = props => {
  const { getFieldDecorator, resetFields, getFieldsValue } = props.form;
  return (
    <Form layout="inline">
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item label="标题">
            {getFieldDecorator("title")(<Input placeholder="请输入标题" />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="日期">
            {getFieldDecorator("Date")(<DatePicker format={"YYYY/MM/DD"} />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="分类">
            {getFieldDecorator("type")(
              <Select style={{ width: 200 }}>
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
              </Select>
            )}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: 15 }}
              onClick={() => props.getseachData(getFieldsValue())}
            >
              搜索
            </Button>
            <Button type="primary" onClick={() => resetFields()}>
              重置
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
const ArticeTable = props => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };
  const columns = [
    {
      title: "序列",
      render: (text, record, index) => {
        return <div>{index + 1}</div>;
      }
    },
    {
      title: "标题",
      dataIndex: "title",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "置顶",
      dataIndex: "Stick"
    },
    {
      title: "分类",
      dataIndex: "type"
    },
    {
      title: "发布时间",
      dataIndex: "Date"
    },
    {
      title: "点击",
      dataIndex: "hits"
    },
    {
      title: "操作",
      render: () => {
        return (
          <div>
            <Button style={{ marginRight: 10 }} type="primary">
              修改
            </Button>
            <Button type="primary"> 删除</Button>
          </div>
        );
      }
    }
  ];
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={props.tableData}
      pagination={false}
      size="middle"
    />
  );
};
const ArticelSearchForm = Form.create({ name: "Articel_search" })(
  ArticelSearch
);
export default class articleMangement extends Component {
  state = {
    searchData: null,
    tableData: [],
    page: {
      pageSize: 10,
      current: 1,
      total: 20
    }
  };
  componentWillMount() {
    this.getTableData();
  }
  getseachData = searchData => {};
  pageChange = (page, pageSize) => {
    const pageDate = Object.assign({}, this.state.page, { current: page });
    this.setState(
      {
        page: pageDate
      },
      () => this.getTableData()
    );
  };
  getTableData = page => {
    const tableData = Array.from({ length: this.state.page.pageSize }).map(
      (v, index) => {
        index =
          (this.state.page.current - 1) * this.state.page.pageSize + index + 1;
        return {
          title: `title` + index,
          Stick: "Stick" + index,
          type: "type" + index,
          Date: "Date" + index,
          hits: "hits" + index
        };
      }
    );
    this.setState({
      tableData
    });
  };
  render() {
    return (
      <div>
        <div style={{ paddingBottom: 10 }}>
          <Button type="primary">
            <Link to="/addArticle">新增文章</Link>
          </Button>
        </div>
        <div className="articel-search">
          <ArticelSearchForm getseachData={this.getseachData} />
          <ArticeTable tableData={this.state.tableData} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 20px"
            }}
          >
            <Button type="primary">删除</Button>
            <Pagination {...this.state.page} onChange={this.pageChange} />
          </div>
        </div>
      </div>
    );
  }
}
