import React from 'react';
import _ from 'lodash';
import './teacherStyles.css';
import { Button } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';

const TeacherDetails = ({ teacher, backToTeachers }) => {
  return (
    <>
      <div className='teacher-details-container'>
        <Button
          sx={{ color: 'rgba(107, 118, 138, 0.937)' }}
          size='small'
          onClick={backToTeachers}
        >
          <KeyboardArrowLeft />
          Back To Teachers
        </Button>
        <table>
          <thead>
            <th colSpan={2}>
              <h1 className='teacher-detail-header'>
                <span>{teacher.teacherName}</span>
                <span className='teacher-age'>{teacher.age} years</span>
              </h1>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3 className='teacher-detail-non-header'>Id</h3>
              </td>
              <td>
                <h3 className='teacher-detail-non-header'>{teacher.id}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className='teacher-detail-non-header'>Salary</h3>
              </td>
              <td>
                <h3 className='teacher-detail-non-header'>
                  &#8377; {teacher.salary}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className='teacher-detail-non-header'>Specializations</h3>
              </td>
              <td>
                <h3 className='teacher-detail-non-header'>
                  {teacher.specializations
                    .map(
                      (sub) => `📘 ${_.capitalize(sub.replaceAll('_', ' '))}`
                    )
                    .join('  ')}
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeacherDetails;
