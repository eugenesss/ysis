import React, { Component } from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";

function TabContainer({ children }) {
  return <Typography component="div">{children}</Typography>;
}

class TabsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  //Tabs Header
  handleChange(value) {
    this.setState({ activeIndex: value });
  }

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;
    return (
      <RctCollapsibleCard
        heading={
          <Tabs
            value={activeIndex}
            onChange={(e, value) => this.handleChange(value)}
            variant="fullWidth"
            textColor="inherit"
            indicatorColor="primary"
          >
            {children.map((child, key) => (
              <Tab
                key={key}
                icon={<i className={`zmdi-hc-2x zmdi ${child.props.icon}`} />}
                label={child.props.label}
              />
            ))}
          </Tabs>
        }
      >
        <SwipeableViews
          axis={"x"}
          index={this.state.activeIndex}
          onChangeIndex={index => this.handleChangeIndex(index)}
        >
          {children.map((child, key) => (
            <TabContainer key={key}>
              <div className="px-40 py-10">{child}</div>
            </TabContainer>
          ))}
        </SwipeableViews>
      </RctCollapsibleCard>
    );
  }
}

export default TabsWrapper;
