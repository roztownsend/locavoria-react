import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const closer = <FontAwesomeIcon icon={faTimes} />

const Modal = props => {
    if (!props.show) {
        return null
    }
        return ( 
        <>
            <div className="modal">
            <div className="modal-dialog">
                <div className="modal-form">
                <button className="fa-times modal-close" onClick={props.onClose}>{closer}</button>
                    <span className="modal-form__h2">Locavoria Sign-Up</span>
                <div className="modal-body">
            <form htmlFor="#">
                <label htmlFor="firstname">
                    First Name<br />
                    <input type="text" name="firstname" id="firstname" required />
                </label>
                <label htmlFor="secondname">
                    Last/Additional Names<br />
                    <input type="text" name="secondname" id="secondname" required />
                </label>
                <label htmlFor="email">
                    Email Address<br />
                    <input type="email" name="email" id="email" required />
                </label>
                <label htmlFor="location">
                    Your Location<br />
                    <small>(Please provide us with as much info as you're comfortable with here. We will never ask you to turn on your location!)</small><br />
                    <input type="location" name="location" id="location" required />
                </label>
                <label htmlFor="dietary">
                    Your Dietary Preferences<br />
                    <small>Here is where you can include any dietary restrictions and preferences in farming methods.</small>
                    <textarea type="text" name="dietary" id="dietary" required>
                    </textarea>
                </label>
                <button type="submit">Submit</button>
                </form>
                    </div>
                    </div>
                </div>
                </div>
        </>
        );
    }

export default Modal;