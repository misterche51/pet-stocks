import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {arrows_horizontal} from 'react-icons-kit/ikons/arrows_horizontal'

class Converter extends Component {
  render() {
    return (
      <div className = "converter">
        <form className="converter__form">
          <div className = "converter__form-inner">
            <div className = "converter__box converter__box--input">
              <div className="converter__radio-list">
                <input type="radio" name="converter-input" id="input-usd" className="visually-hidden" defaultChecked/>
                <label htmlFor="input-usd" className="converter__radio-label">USD</label>
                <input type="radio" name="converter-input" id="input-eur" className="visually-hidden"/>
                <label htmlFor="input-eur" className="converter__radio-label">EUR</label>
                <input type="radio" name="converter-input" id="input-gbp" className="visually-hidden"/>
                <label htmlFor="input-gbp" className="converter__radio-label">GBP</label>
                <input type="radio" name="converter-input" id="input-chf" className="visually-hidden"/>
                <label htmlFor="input-chf" className="converter__radio-label">CHF</label>
              </div>
              <input className="converter__input" type={"text"}></input>
            </div>
            <div className = "converter__box converter__box--ouput">
              <div className="converter__radio-list">
                <input type="radio" name="converter-output" id="ouput-usd" className="visually-hidden"/>
                <label htmlFor="ouput-usd" className="converter__radio-label">USD</label>
                <input type="radio" name="converter-output" id="ouput-eur" className="visually-hidden" defaultChecked/>
                <label htmlFor="ouput-eur" className="converter__radio-label">EUR</label>
                <input type="radio" name="converter-output" id="ouput-gbp" className="visually-hidden"/>
                <label htmlFor="ouput-gbp" className="converter__radio-label">GBP</label>
                <input type="radio" name="converter-output" id="ouput-chf" className="visually-hidden"/>
                <label htmlFor="ouput-chf" className="converter__radio-label">CHF</label>
              </div>
              <div className="converter__output"></div>
            </div>
            <div className = "converter__submit">
            <input className ="converter__submit-button" type="submit" value=""/>
            <Icon className = "converter__submit-icon" size={40} icon={arrows_horizontal}/>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Converter;
