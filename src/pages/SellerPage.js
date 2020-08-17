import React from "react";
import BookSellInput from "../components/BookSellInput.js";
import BookSellList from "../components/BookSellList.js";
import { LIST_URI } from "../constants/urls";
class SellerPage extends React.Component {
  state = {
    items: [],
    showError: false,
    errorMessage: "",
  };

  //show books in uploade page
  componentDidMount() {
    this.fetchData();
  }
  //git items from DataBase
  fetchData() {
    fetch(LIST_URI)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ items: res });
      })
      .catch((err) => console.log(err));
  }
  //add items
  addItem = ({ title, price, type, image }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("image", image);
    fetch(LIST_URI, {
      method: "post",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("can't add book");
      })
      .then((res) => this.fetchData())
      .catch((err) => {
        this.setState(
          {
            showError: true,
            errorMessage: err.message,
          },
          () => {
            return setTimeout(
              () =>
                this.setState({
                  showError: false,
                  errorMessage: "",
                }),
              3000
            );
          }
        );
      });
  };
  //delete items
  deleteItem = (id) => {
    fetch(`${LIST_URI}/${id}`, {
      method: "delete",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("can't delete item");
      })
      .then((res) => this.fetchData())
      .catch((err) => {
        this.setState(
          {
            showError: true,
            errorMessage: err.message,
          },
          () => {
            return setTimeout(
              () =>
                this.setState({
                  showError: false,
                  errorMessage: "",
                }),
              3000
            );
          }
        );
      });
  };

  render() {
    return (
      <>
        <section className="section-seller">
          <div className="container">
            <div className="sign-out">
              <a href="/">sign out</a>
            </div>
            <div className="seller-name">
              <h1>
                welcome <span>Sara</span>
              </h1>
            </div>
            <div className="hero-seller">
              <h2>share book</h2>
            </div>
            <BookSellInput onSubmit={this.addItem} />
            <div className="your-book">
              <h2>Your Books</h2>
              {this.state.showError && (
                <span className="showError">{this.state.errorMessage}</span>
              )}
              {this.state.items.length > 0 ? (
                <BookSellList
                  items={this.state.items}
                  onDelete={this.deleteItem}
                />
              ) : (
                <div>
                  <h3 className="no-book">No Books Added!</h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default SellerPage;
