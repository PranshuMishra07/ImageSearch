import React from "react";
import axios from "axios";
import Card from "./Card";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";

const mapStateToProps = (state) => ({
  data: state.globaldata.data,
});

const mapDispatchToprops = (dispatch) => ({
  setData: dispatch.globaldata.setData,
  resetData: dispatch.globaldata.resetData,
});

class Home extends React.Component {
  state = {
    data: [],
    loading: false,
    query: "",
    count: 1,
  };

  componentDidMount() {
    this.props.resetData();
    this.searchOnMount();
  }

  searchOnMount = (count = 1) => {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.unsplash.com/photos/?page=${count}&per_page=9&client_id=3kjBCmdLzmtDKWdWzAkzSgOD2XFolT097Uo5TOWoCmI`
      )
      .then((data) => {
        this.setState((pre) => {
          const array = [...pre.data, ...data.data];
          this.props.setData(array);
          return { data: array, loading: false };
        });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  performSearch = (query, count = 1) => {
    if (count === 1) {
      this.setState({ data: [] });
    }
    this.setState({ loading: true });
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=${count}&per_page=9&query=${query}&client_id=3kjBCmdLzmtDKWdWzAkzSgOD2XFolT097Uo5TOWoCmI`
      )
      .then((data) => {
        this.setState((pre) => {
          const array = [...pre.data, ...data.data.results];
          this.props.setData(array);
          return { data: array, loading: false };
        });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.performSearch(this.state.query);
    e.currentTarget.reset();
  };

  onSearchChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1> loading </h1>
        ) : (
          <>
            <div style={{ height: "100px" }} />
            <form className="search-form" onSubmit={this.handleSubmit}>
              <div className="inputContainer">
                <input
                  placeholder="Search for image here ..."
                  className="inputClass"
                  type="text"
                  onChange={this.onSearchChange}
                />
                <button
                  type="submit"
                  id="submit"
                  style={{
                    position: "absolutes",
                    marginLeft: "-30px",
                    marginTop: "-5px",
                    background: "transparent",
                  }}
                >
                  <FaSearch
                    style={{
                      backgroundColor: "#78D3CF",
                      fontSize: "35px",
                      color: "white",
                      margin: "-17px",
                      borderRadius: "17px",
                    }}
                  />
                </button>
              </div>
            </form>

            <Card data={this.state.data} />
            <div style={{ height: "50px" }} />
            <button
              className="loadmore"
              onClick={() => {
                this.setState((pre) => ({ count: pre.count + 1 }));
                const count = this.state.count;
                this.state.query.length === 0
                  ? this.searchOnMount(count + 1)
                  : this.performSearch(this.state.query, count + 1);
              }}
            >
              <h4 className="textloadmore">load More</h4>
            </button>
            <div style={{ height: "100px" }} />
          </>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Home);
