import { Component } from 'react';
import { connect } from 'react-redux';
import { thunkFetchData } from './actions/app';

class App extends Component {

  componentDidMount() {
    console.log('Mounted');
    this.props.fetchData();
  }
  render() {
    // console.log(this.props);
    const { data } = this.props;
    return (
      <div>
        <ul>
          {data.map(item => <li key={item.id}>{item.joke}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetched,
    isFetching: state.isFetching,
    error: state.fetchedError,
    // all: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(thunkFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
