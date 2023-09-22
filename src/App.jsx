import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import { Modal } from './components/Modal'
import { EventList } from './components/EventList'

function App() {
  const [showModal, setShowModal] = useState(false)
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

  const handleClose = () => setShowModal(false)

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
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% off coupon code!</h2>
          <p>Use the code NINJA10 at the checkout.</p>
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Show modal</button>
      </div>
    </div>
  )
}

export default App
