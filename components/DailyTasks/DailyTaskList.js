export default function DailyTaskList({ activities }) {
  return (
    <div className="center-element mt-10">
      <table className="ui celled table">
        <thead>
          <th />
          <th>Time</th>
          <th>Activity</th>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>
                <div className="ui checkbox">
                  <input type="checkbox" name="done" />
                  <label>Mark as done</label>
                </div>
              </td>
              <td>
                {activity.from} - {activity.to}
              </td>
              <td>{activity.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
