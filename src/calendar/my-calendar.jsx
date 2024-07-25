import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <h1>CALENDAR</h1>
            <Calendar
                onChange={setDate}
                value={date}
            />
        </div>
    );
};

export default MyCalendar;
