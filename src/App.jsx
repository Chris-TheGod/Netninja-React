import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import { Modal } from './components/Modal'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id)
    })
  }

  const subtitle = 'All the latest news in Marioland'

  return (
    <div className='App'>
      <Title title='Events in your area' subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </div>
        ))}
      <Modal>
        <h2>10% off coupon code!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>
    </div>
  )
}

export default App
