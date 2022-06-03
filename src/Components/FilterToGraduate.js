import { Component } from 'react';
// import Student from './Student';

class FilterToGraduate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTrack: false,
      all: false,
    };
  }
  myChangeHandler = (name) => {
    this.setState((prev) => ({
      [name]: !prev[name],
    }));
  };

  render() {
    //  const { data} = this.props;

    // const filterButtons = filterArr.map((ele) => (
    //   <button
    //      onClick={() => {
    //        this.onClickFunction(data, ele);
    //      }}
    //     key={ele}
    //   >
    //     {ele}
    //   </button>
    // ));

    return (
      <div>
        <button name='all' onClick={this.myChangeHandler('all')}>
          All{' '}
        </button>
        {this.state.display && <h1>All</h1>}

        <button name='onTrack' onClick={this.myChangeHandler('onTrack')}>
          OnTrackToGraduate{' '}
        </button>
        {this.state.display && <h1>OnTrack!</h1>}
      </div>
    );
  }
}

export default FilterToGraduate;
