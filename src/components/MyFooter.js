import React, {Component} from "react";
import '../css/MyFooter.css';


class FooterContainer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <section className="navigation">
          <nav>
            <div>
              <p>Project by Aldo</p>
            </div>
          </nav>
          <nav>
            <div>
              <button className="button-signin">Make my wishlist</button>
            </div>
          </nav>
        </section>
      </footer>
    )
  }
}

export default FooterContainer;
