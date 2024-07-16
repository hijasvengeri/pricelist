
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
// import '../styles/homePage.css';

const TaskPage = () => {
  const { date } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasksByDate = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products', {
          params: {
            date: moment(date, 'DD-MM-YY').format('YYYY-MM-DD'),
          },
        });
        const { data } = response;

        // Filter the tasks based on the clickedDate
        const filteredData = data.filter((task) => {
          const taskDate = moment(task.date).format('YYYY-MM-DD');
          return taskDate === moment(date, 'DD-MM-YY').format('YYYY-MM-DD');
        });

        setTasks(filteredData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasksByDate();
  }, [date]);

  return (
    <div>
      <h1>{date}</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          {/* <p>Date: {task.date}</p> */}
          <p> {task.task}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskPage;




