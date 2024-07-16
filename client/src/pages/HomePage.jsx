

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
// import '../styles/homePage.css'; 

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/products');
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  let groupedTasks = tasks.reduce((acc, current) => {
    const date = moment(current.date).format('DD-MM-YY');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(current.task);
    return acc;
  }, {});

  const sortedTasks = Object.keys(groupedTasks)
    .sort((a, b) => moment(a, 'DD-MM-YY') - moment(b, 'DD-MM-YY'))
    .reduce((acc, key) => {
      acc[key] = groupedTasks[key];
      return acc;
    }, {});

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (task) {
      try {
        await axios.post('http://localhost:3000/api/products', {
          date: moment(selectedDate).format('YYYY-MM-DD'),
          task: task,
        });
        setTask('');
        fetchTasks();
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd-MM-yyyy"
        />
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="container">
        {Object.keys(sortedTasks).map((date, index) => (
          <div className="column" key={index}>
            <h2 style={{ cursor: 'pointer' }}>
              <Link to={`/tasks/${date}`}>
                {date}
              </Link>
              &nbsp;&nbsp;&nbsp;{moment(date, 'DD-MM-YY').format('dddd')}
            </h2>
            <ul>
              {sortedTasks[date].map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
