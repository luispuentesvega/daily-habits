import DailyTaskList from '../components/DailyTasks/DailyTaskList';
import DailyTaskForm from '../components/DailyTasks/DailyTaskForm';
import { useState, setState } from 'react';

export default function DailyTasks() {
  const [activities, setActivities] = useState([]);
  console.log('Activities:', activities);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="center-screen">
      <DailyTaskForm setActivities={addActivity} />
      <DailyTaskList activities={activities} />
    </div>
  );
}
