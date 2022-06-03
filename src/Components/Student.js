import React, { Component } from 'react';
import ReadMore from './ReadMore';
import './Student.css';

class Student extends Component {
  /**
   * displays the birthday
   * @param {Date} - the date from data.json
   * @returns the birthday to be displayed in dd/mm/yyyy
   */
  dateConversion = (dob) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const now = new Date(dob);
    const convertedDate =
      days[now.getDay()] +
      ' ' +
      months[now.getMonth()] +
      ' ' +
      now.getFullYear();
    return convertedDate;
  };

  /**
   * returns a Strign which denotes if the student is eligible to graduate or not
   * @param {Object} certified-  checking for the student has completed the *
   * resume,linkedin,github,mockinterview
   * @param {Number} codewarsTotal- value greater than 600
   * @returns the selectedCohortCode with removed spaces
   */

  eligibleToGraduate = (certified, codewarsTotal) => {
    if (
      codewarsTotal > 600 &&
      certified.resume &&
      certified.linkedin &&
      certified.github &&
      certified.mockInterview
    ) {
      return 'On Track To Graduate';
    } else {
      return 'Not Ready To Graduate';
    }
  };

  render() {
    const { studentData } = this.props;

    const codeWarsTotal = studentData.codewars.current.total;
    return (
      <section>
        <div className='student' key={studentData.id}>
          <img
            style={{ width: '200px', height: '150px' }}
            src={studentData.profilePhoto}
            alt={studentData.names.preferredName}
          />
          <div className='studentDetails'>
            <h4>
              {studentData.names.preferredName} {studentData.names.middleName}{' '}
              {studentData.names.surName}
            </h4>
            <h4>{studentData.username}</h4>
            <h4>
              <span style={{ color: 'green' }}> Birthday:</span>{' '}
              {this.dateConversion(studentData.dob)}{' '}
            </h4>

            <ReadMore studentData={studentData} id={studentData.id} />
          </div>
          <div className='graduated'>
            <h4 style={{ color: 'green' }}>
              {this.eligibleToGraduate(
                studentData.certifications,
                codeWarsTotal
              )}
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Student;
