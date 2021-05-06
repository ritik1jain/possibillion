import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
const ReactGridLayout = WidthProvider(RGL);

class BoundedLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 6,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 6
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout,
    disabled: false,
    noOfClaims: 0
     };

     this.handleClick = this.handleClick.bind(this);
  }

handleClick (e) {
    // e.preventDefault();
    if(this.state.noOfClaims <3){
        this.setState({
            disabled: true,
            noOfClaims: this.state.noOfClaims + 1
        });
        setTimeout(() => {
            this.setState({disabled: !this.state.disabled})
        }, 60000);
    }
}

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Player image cap" />
        <CardBody>
          <CardTitle tag="h5">Player Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Club/Country Name</CardSubtitle>
          <CardText>Player Description.</CardText>
          <Button>Claim</Button>
        </CardBody>
      </Card>
    </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
        const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        return {
          x: (i * 2) % 6,
          y: Math.floor(i / 3) * 2,
          w: 2,
          h: 8,
          i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        isBounded={true}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default BoundedLayout;