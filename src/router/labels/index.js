import React from "react";
import { Input, Button, Tag } from "antd";
import { CSSTransition } from "react-transition-group";
import "./labels.less";
const colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan"
];
function LabelList(props) {
  const { labelData, type, styles } = props;
  return (
    <div style={styles}>
      <div
        style={{
          marginBottom: 15,
          paddingBottom: 10,
          borderBottom: "1px solid #ccc"
        }}
      >
        {type === 1 ? "内置标签" : "自定义标签"}
      </div>
      <div>
        {labelData.map((item, i) => (
          <Tag color={colors[i % 8]} size="large" closable={type !== 1} key={i}>
            {item.labelName}
          </Tag>
        ))}
      </div>
    </div>
  );
}
export default class Labels extends React.Component {
  state = {
    labelError: false,
    customData: [],
    labelValue: ""
  };
  labelInput = React.createRef();
  setLabel = () =>
    this.setState({
      labelError: !this.state.labelError
    });
  addLable = () => {
    this.setState({
      customData: [
        ...this.state.customData,
        {
          labelName: this.state.labelValue
        }
      ]
    });
  };
  render() {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <label className="labels-star">标签名称：</label>
        </div>
        <div style={{ display: "flex" }}>
          <Input
            id="cheese"
            value={this.state.labelValue}
            onChange={event =>
              this.setState({ labelValue: event.target.value })
            }
          />
          <Button
            style={{ marginLeft: 20 }}
            type="primary"
            onClick={this.addLable}
          >
            添加
          </Button>
        </div>
        <CSSTransition
          in={this.state.labelError}
          classNames="label-error"
          className="label-error"
          timeout={200}
        >
          <div>该项为必填项</div>
        </CSSTransition>
        <LabelList
          labelData={[
            { labelName: "12313" },
            { labelName: "222" },
            { labelName: "333" }
          ]}
          type={1}
        />
        <LabelList
          labelData={this.state.customData}
          type={2}
          styles={{ marginTop: 20 }}
        />
      </div>
    );
  }
}
