import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/normalize.css';
import '../src/styles/style.scss';

import {Navigation} from './components/Navigation';
import {Pitch} from './components/Pitch';
import Modal from './components/Modal';

export default function ModalApp() {
  const [show, setShow] = useState(false)

  return (
    <div className="main">
    <button className="signup-btn" onClick={() => setShow(true) }>Sign Up</button>
    <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

ReactDOM.render(
  <>
  <Navigation />
  <Pitch />
  <ModalApp />
  </>,
  document.getElementById('root')
);