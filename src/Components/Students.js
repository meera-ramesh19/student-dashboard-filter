import { Component } from 'react';
import Student from './Student';
import './Students.css';
// import FilterToGraduate from './FilterToGraduate';
class Students extends Component {
  
  
  render() {
    const { data, selectedCohortCode,studentCopy,
       btns 
     } = this.props;

    /*
     *  removes the space from the SelectedCohortCode
     * @param {state variable} - selectedCohortCode
     * @returns the selectedCohortCode with removed spaces
     */
    const newselectedCohortCode = selectedCohortCode.split(' ').join('');

    /**
     *  filters the cohortCode
     * @param {[]Array} data- array
     * @returns filtered array
     */
    const cohortStudents = data.filter(
      (ele) => ele.cohort.cohortCode === newselectedCohortCode
    );

    const cohortSelected =
      selectedCohortCode === 'All Students'
        ? data.length
        : cohortStudents.length;

    
    return (
      <div className='students'>
        <div className='cohortHeader'>
          <h2>{selectedCohortCode}</h2>
          <small>
            Total Students:{' '}
            <span style={{ color: 'green', fontWeight: '900' }}>
              {cohortSelected}
            </span>
          </small>
        </div>
        {btns.map((btn, index) => {
          return (
            <div className='btns' key={index}>
              <button key={index} value={btn} onClick={this.props.handleBtns}>
                {btn}
              </button>
            </div>
          );
        })}

        <div className='studentInfo'>
          {selectedCohortCode === 'All Students'
            ? data.map((datas) => {
                 return <Student key={datas.id} studentData={datas} 
                  studentCopy={studentCopy}
                  />;
              })
            : cohortStudents.map((datas) => {
                return <Student key={datas.id} studentData={datas} 
                 studentCopy={studentCopy}
                />;
              })}
        </div>
      </div>
    );
  }
}

export default Students;









// {/* <div className='btns'>
//           <button value='All' onClick={this.props.handleBtns}>
//             All
//           </button>
//           <button value='OnTrackToGraduate' onClick={this.props.handleBtns}>
//             OnTrackToGraduate
//           </button>
//           <button value='NotReadyToGraduate' onClick={this.props.handleBtns}>
//            Not Ready
//           </button>
//         </div> */}
