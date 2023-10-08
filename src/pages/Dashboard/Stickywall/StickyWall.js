import React, { useState } from 'react';
import { Modal, Checkbox, Button, Input, Select } from 'antd';
import './AttendanceList.scss';

export default function AttendanceList() {
  const editStudentCourse = (studentId, newCourseId) => {
    // ... (existing code)
  };

  const editStudentId = (studentId, newStudentId) => {
    // ... (existing code)
  };

  const editStudentContactInfo = (studentId, newContactInfo) => {
    // ... (existing code)
  };

  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([
    // ... (existing code)
  ]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    courseId: '',
    studentId: '',
    contactInfo: '',
  });
  const [presentStudents, setPresentStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleChange = (studentId) => {
    // ... (existing code)
  };

  const addNewStudent = () => {
    // ... (existing code)
  };

  const editStudentName = (studentId, newName) => {
    // ... (existing code)
  };

  const deleteStudent = (studentId) => {
    // ... (existing code)
  };

  const markAttendance = () => {
    // ... (existing code)
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const filteredStudents = students.filter((student) => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'present') return student.isPresent;
    if (filterStatus === 'absent') return !student.isPresent;
    return true;
  });

  const sortedStudents = filteredStudents.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="container">
      <div className="header">
        <h1>Student Attendance List</h1>
        {/* Remove the "Add New Student" Button */}
      </div>

      <div className="filters">
        <Input
          placeholder="Search students"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={filterStatus}
          onChange={(value) => setFilterStatus(value)}
          style={{ width: 120 }}
        >
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="present">Present</Select.Option>
          <Select.Option value="absent">Absent</Select.Option>
        </Select>
        <Select
          value={sortOrder}
          onChange={(value) => setSortOrder(value)}
          style={{ width: 120 }}
        >
          <Select.Option value="asc">A-Z</Select.Option>
          <Select.Option value="desc">Z-A</Select.Option>
        </Select>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            {/* Remove the "Course ID," "Student ID," and "Contact Info" columns */}
            <th scope="col">Attendance</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents
            .filter((student) =>
              student.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((student) => (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>
                  <Input
                    value={student.name}
                    onChange={(e) => editStudentName(student.id, e.target.value)}
                  />
                </td>
                <td>
                  <Checkbox
                    onChange={() => handleChange(student.id)}
                    checked={student.isPresent}
                  >
                    Present
                  </Checkbox>
                </td>
                <td>
                  {/* Remove the "Delete" Button */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal
        title="Add New Student"
        visible={open}
        onOk={addNewStudent}
        confirmLoading={false}
        onCancel={handleCancel}
      >
        <div>
          <Input
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          {/* Remove the "Course ID," "Student ID," and "Contact Info" Input fields */}
        </div>
      </Modal>

      <div className="summary">
        {/* ... (rest of the code) */}
      </div>
    </div>
  );
}
