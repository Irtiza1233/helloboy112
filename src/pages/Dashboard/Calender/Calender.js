import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const courses = [
  'Web Development',
  'JavaScript',
  'SEO Basics',
  'Data Science',
  'iOS Development',
  'Blockchain',
  'Python',
];

export default function Calendar() {
  const [allEvents, setAllEvents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [description, setDescription] = useState('');

  const addEvent = () => {
    const newEvent = {
      courseName: selectedCourse,
      courseCode,
      description,
    };
    setAllEvents((prevEvents) => [...prevEvents, newEvent]);
    setSelectedCourse('');
    setCourseCode('');
    setDescription('');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="courseSelect" className="form-label">
                Select a Course
              </label>
              <select
                id="courseSelect"
                className="form-control"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="" disabled>
                  Choose a course
                </option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Course Code"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={addEvent}>
              Add Event
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Events</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
                <th scope="col">Course Code</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {allEvents.map((event, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{event.courseName}</td>
                  <td>{event.courseCode}</td>
                  <td>{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
