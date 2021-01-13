import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

const rangeHours = _.range(4, 23);
const HOURS = _.flatMap(rangeHours, (hour) => [
  hour < 10 ? `0${hour}:00` : `${hour}:00`,
  hour < 10 ? `0${hour}:30` : `${hour}:30`,
]);

export default function DailyTasksForm({ setActivities }) {
  const { register, handleSubmit, watch, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Submit');
    console.log(data);
    setActivities(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="ui form center center-element"
    >
      <h1 className="ui header">Daily Activities</h1>
      <div className="fields">
        <div className="field">
          <label>From</label>
          <select
            data-testid="from"
            name="from"
            ref={register}
            className="ui fluid dropdown"
          >
            {HOURS.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>To</label>
          <select name="to" ref={register} className="ui fluid dropdown">
            {HOURS.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div className="ten wide field">
          <label>Activity</label>
          <input
            type="text"
            name="name"
            placeholder="Activity Name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span className="error">Activity name is required</span>
          )}
        </div>
      </div>
      <button className="ui primary button">Add Activity</button>
    </form>
  );
}
