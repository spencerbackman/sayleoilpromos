import React from 'react';
import flowood from './assets/images/Flowood-Cust-Promo.jpg';
import './assets/css/home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <img className="promo-image" src={flowood} alt="Flowood Crust Promo"/>
                <div className="form-container">
                    <form action="https://formspree.io/mrich@sayleoil.com" method="POST">
                        <input type="hidden" name="_cc" value="charlie@cwhitfieldmedia.com" />
                        <div className="input-holder">
                            <label htmlFor="form_name" className="form_label"> Name* </label>
                            <input type="text" name="name" className="input" />
                        </div>
                        <div className="input-holder">
                            <label htmlFor="_replyto" className="form_label"> Email* </label>
                            <input type="email" name="email" className="input" />
                        </div>
                        <div className="input-holder">
                            <label htmlFor="form_number" className="form_label"> Phone # </label>
                            <input type="number" name="number" className="input" />
                        </div>
                        <div className="button-holder">
                            <button id="form-button" type="submit"> Send to Sayle Oil </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;