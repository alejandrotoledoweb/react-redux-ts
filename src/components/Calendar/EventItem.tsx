import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { deleteUserEvent, updateUserEvent, UserEvent } from "../../redux/user-events";

interface Props {
  event: UserEvent;
}

export const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useAppDispatch();

  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(event.title);
  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id));
  };

  const handleClickTitle = () => {
    setEditable(!editable);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleBlur = () => {
    if (title !== event.title) {
      dispatch(updateUserEvent({ ...event, title: title }));
    }
    setEditable(false);
  };

  const startTime = event.dateStart.slice(15, 24);
  const endTime = event.dateEnd.slice(15, 24);

  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">
          {startTime} - {endTime}
        </div>
        <div className="calendar-event-title">
          {editable ? (
            <input
              title="event-name"
              ref={inputRef}
              type="text"
              value={title}
              onChange={handleChangeTitle}
              onBlur={handleBlur}
            />
          ) : (
            <span onClick={handleClickTitle}> {event.title}</span>
          )}
        </div>
      </div>
      <button className="calendar-event-delete-button" onClick={handleDeleteClick}>
        &times;
      </button>
    </div>
  );
};
