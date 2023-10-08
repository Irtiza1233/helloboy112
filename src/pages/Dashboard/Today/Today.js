import React, { useState } from 'react';
import { Modal, Button, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function StudentList() {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    courseName: '',
    studentId: '',
    contactInfo: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studentToUpdate, setStudentToUpdate] = useState(null);
  const [studentToRemove, setStudentToRemove] = useState(null);

  const itCourses = [
    'Web Development',
    'JavaScript',
    'SEO Basics',
    'Data Science',
    'iOS Development',
    'Blockchain',
    'Python',
  ];

  const editStudent = (student) => {
    setStudentToUpdate(student);
    setNewStudent({
      name: student.name,
      courseName: student.courseName,
      studentId: student.studentId,
      contactInfo: student.contactInfo,
    });
    setSelectedCourse(student.courseName);
    setOpen(true);
  };

  const addNewStudent = () => {
    if (studentToUpdate) {
      updateStudent();
    } else {
      const studentToAdd = {
        id: students.length + 1,
        name: newStudent.name,
        courseName: selectedCourse,
        studentId: newStudent.studentId,
        contactInfo: newStudent.contactInfo,
      };

      setStudents([...students, studentToAdd]);
      setNewStudent({
        name: '',
        courseName: '',
        studentId: '',
        contactInfo: '',
      });

      setOpen(false);
    }
  };

  const updateStudent = () => {
    const updatedStudents = students.map((s) =>
      s.id === studentToUpdate.id
        ? {
            ...s,
            name: newStudent.name,
            courseName: selectedCourse,
            studentId: newStudent.studentId,
            contactInfo: newStudent.contactInfo,
          }
        : s
    );
    setStudents(updatedStudents);
    setStudentToUpdate(null);
    setOpen(false);
  };

  const removeStudent = () => {
    const updatedStudents = students.filter((s) => s.id !== studentToRemove.id);
    setStudents(updatedStudents);
    setStudentToRemove(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Students List</h1>
        <Button type="primary" onClick={() => setOpen(true)}>
          Add New Student
        </Button>
      </div>

      <div className="filters">
        <Input
          placeholder="Search students"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          placeholder="Sort Order"
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
            <th scope="col">Course Name</th>
            <th scope="col">Student ID</th>
            <th scope="col">Contact Info</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students
            .filter((student) =>
              student.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => {
              if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            })
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.courseName}</td>
                <td>{student.studentId}</td>
                <td>{student.contactInfo}</td>
                <td>
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => editStudent(student)}
                    style={{ marginRight: '8px' }}
                  />
                  <Button
                    type="danger"
                    icon={<DeleteOutlined />}
                    onClick={() => setStudentToRemove(student)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal
        title={studentToUpdate ? 'Edit Student' : 'Add New Student'}
        visible={open}
        onOk={addNewStudent}
        confirmLoading={false}
        onCancel={() => {
          setStudentToUpdate(null);
          setOpen(false);
        }}
      >
        <div>
          <Input
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
    <Select
  placeholder="Choose a course"
  value={selectedCourse}
  onChange={(value) => setSelectedCourse(value)}
  style={{ width: '100%' }}
>
  <option value="" disabled>
    Choose a course
  </option> 
  {itCourses.map((course) => (
    <Select.Option key={course} value={course}>
      {course.length > 15 ? course.substring(0, 15) + '...' : course}
    </Select.Option>
  ))}
</Select>

          <Input
            placeholder="Student ID"
            value={newStudent.studentId}
            onChange={(e) =>
              setNewStudent({ ...newStudent, studentId: e.target.value })
            }
          />
          <Input
            placeholder="Contact Info"
            value={newStudent.contactInfo}
            onChange={(e) =>
              setNewStudent({ ...newStudent, contactInfo: e.target.value })
            }
          />
        </div>
      </Modal>

      <Modal
        title="Confirm Delete"
        visible={!!studentToRemove}
        onOk={removeStudent}
        onCancel={() => setStudentToRemove(null)}
      >
        Are you sure you want to delete this student?
      </Modal>

      <div className="summary">{/* ... (rest of the code) */}</div>
    </div>
  );
}
