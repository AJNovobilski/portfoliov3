import React from "react";
import NAV from "./nav/NAV";
import HERO from "./hero/HERO";
import HERODARK from "./hero/HERODARK";

import HEAD from "next/head";

class PAGE extends React.Component {
  render(props) {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div>
          <HEAD>
            <title>{this.props.title}</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </HEAD>
          <NAV></NAV>
            <HERODARK
              mobileimage={this.props.image}
              desktopimage={this.props.image2}
              heroclass={this.props.heroclass}
              heading={this.props.heading}
              subheading ={this.props.subheading}
            ></HERODARK>




        </div>
    );
  }
}

export default PAGE;
