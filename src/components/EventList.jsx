import styles from './Eventlist.module.css'

export const EventList = ({ events, handleClick }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}
