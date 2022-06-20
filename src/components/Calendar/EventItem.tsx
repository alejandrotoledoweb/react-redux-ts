import React from "react";
import { deleteUserEvent, UserEvent } from "../../redux/user-events";
import { useAppDispatch } from "../../hooks/index";

interface Props {
  event: UserEvent;
}

export const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useAppDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id));
  };
  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button className="calendar-event-delete-button" onClick={handleDeleteClick}>
        &times;
      </button>
    </div>
  );
};
