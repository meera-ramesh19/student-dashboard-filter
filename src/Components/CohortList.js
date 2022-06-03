import { Component } from 'react';
// import Students from './Students';
import './CohortList.css';

class CohortList extends Component {
  render() {
    const { spacedUniqueCohortArray } = this.props;
    //  const { data } = this.props;
    // const sortedArray = data.sort((a, b) => {
    //   return (
    //     new Date(b.cohort.cohortStartDate) - new Date(a.cohort.cohortStartDate)
    //   );
    // });

    // const uniqueCohortArray = Array.from(
    //   new Set(sortedArray.map((ele) => ele.cohort.cohortCode))
    // );
    // uniqueCohortArray.unshift('All Students');

    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color,
          backgroundColor: color,
          height: 2,
        }}
      />
    );

    return (
      <aside className='sideBar'>
        <h2>Choose a Class by Start Date</h2>
        <ul>
          {spacedUniqueCohortArray.map((ele, indx) => {
            return (
              <div key={indx} className='cohortName'>
                <li
                  className='uniqueCohort'
                  onClick={() => this.props.customClickHandler(ele)}
                  style={{
                    listStyleType: 'none',
                    fontWeight: '700',
                    fontFamily: 'Cursive',
                    fontSize: '1.3rem',
                  }}
                >
                  {ele}
                </li>
                <ColoredLine color='green' />
              </div>
            );
          })}
        </ul>
      </aside>
    );
  }
}

export default CohortList;
