import React,{Component} from 'react';


export class Pitch extends Component {

    render() {
        return(
            <div className="main">
            <div className="pitch">
                <p className="pitch__display">Locavoria</p>
                <p className="pitch__copy">Whether you're vegetarian, vegan, full-on carnivore or something in between, Locavoria connects you with the best local ingredient recommendations for your dinner table without judgement. We use a unique combination of location, dietary preferences and the latest data on current farming certifications in your region to help you be a more responsible foodie.</p>
                <p className="pitch__copy">Our project is new and growing all the time, so having your unique preferences on-file and knowing about your part of the world is of great value to us. Please consider joining us for our open-source, free project today.</p>
            </div>
        </div>
        );
    }
}