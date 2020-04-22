import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {arrows_horizontal} from 'react-icons-kit/ikons/arrows_horizontal'
import { connect } from 'react-redux';
import { converterValueInputed, converterInputRadioChecked, converterOutputRadioChecked, converterSubmitted } from '../actions/converterActions';
class Converter extends Component {
  constructor(props){
    super(props);
    this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
    this.radioInputOnChangeHandler = this.radioInputOnChangeHandler.bind(this);
    this.radioOutputOnChangeHandler = this.radioOutputOnChangeHandler.bind(this);
    this.submitButtonOnClickHandler = this.submitButtonOnClickHandler.bind(this);
  }

  inputOnChangeHandler(e) {
    e.preventDefault();
    this.props.inputValueChangeHandler(e.target.value);
  }

  radioInputOnChangeHandler(e) {
    (e.target.tagName === 'INPUT') && this.props.radioInputChangeHandler(e.target.ariaLabel);
  }

  radioOutputOnChangeHandler(e) {
    (e.target.tagName === 'INPUT') && this.props.radioOutputChangeHandler(e.target.ariaLabel);
  }

  submitButtonOnClickHandler(e) {
    e.preventDefault();
    const ticker = `${this.props.inputCurrency}/${this.props.outputCurrency}`;
    console.log(ticker);
    // console.log(this.props.course);
    // console.log(`${this.props.course.find((item) => item.ticker === "EUR/USD").bid}`)
    this.props.converterSubmitHandler(`${(+this.props.inputValue * (+this.props.course.find((item) => item.ticker === ticker).bid)).toFixed(3)}`)
  }


  render() {
    return (
      <div className = "converter">
        <form className="converter__form" onSubmit = {this.submitButtonOnClickHandler}>
          <div className = "converter__form-inner">
            <div className = "converter__box converter__box--input">
              <div className="converter__radio-list" onChange = {this.radioInputOnChangeHandler}>
                <input type="radio" name="converter-input" id="input-usd" aria-label="USD" className="visually-hidden" defaultChecked/>
                <label htmlFor="input-usd" className="converter__radio-label">USD</label>
                <input type="radio" name="converter-input" id="input-eur" aria-label="EUR" className="visually-hidden"/>
                <label htmlFor="input-eur" className="converter__radio-label">EUR</label>
                <input type="radio" name="converter-input" id="input-gbp" aria-label="GBP" className="visually-hidden"/>
                <label htmlFor="input-gbp" className="converter__radio-label">GBP</label>
                <input type="radio" name="converter-input" id="input-chf" aria-label="CHF" className="visually-hidden"/>
                <label htmlFor="input-chf" className="converter__radio-label">CHF</label>
              </div>
              <input className="converter__input" type={"text"} autoFocus={true} value={this.props.inputValue} onChange = {this.inputOnChangeHandler}></input>
            </div>
            <div className = "converter__box converter__box--ouput">
              <div className="converter__radio-list" onChange = {this.radioOutputOnChangeHandler}>
                <input type="radio" name="converter-output" id="ouput-usd" aria-label="USD" className="visually-hidden"/>
                <label htmlFor="ouput-usd" className="converter__radio-label">USD</label>
                <input type="radio" name="converter-output" id="ouput-eur" aria-label="EUR" className="visually-hidden" defaultChecked/>
                <label htmlFor="ouput-eur" className="converter__radio-label">EUR</label>
                <input type="radio" name="converter-output" id="ouput-gbp" aria-label="GBP" className="visually-hidden"/>
                <label htmlFor="ouput-gbp" className="converter__radio-label">GBP</label>
                <input type="radio" name="converter-output" id="ouput-chf" aria-label="CHF" className="visually-hidden"/>
                <label htmlFor="ouput-chf" className="converter__radio-label">CHF</label>
              </div>
              <div className="converter__output">{this.props.outputValue}</div>
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

const mapStateToProps = (state) => {
  return {
    inputCurrency: state.converter.inputCurrency,
    outputCurrency: state.converter.outputCurrency,
    inputValue: state.converter.inputValue,
    outputValue: state.converter.outputValue,
    course: state.currency.currencyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      inputValueChangeHandler: (value) => dispatch(converterValueInputed(value)),
      radioInputChangeHandler: (value) => dispatch(converterInputRadioChecked(value)),
      radioOutputChangeHandler: (value) => dispatch(converterOutputRadioChecked(value)),
      converterSubmitHandler: (value) => dispatch(converterSubmitted(value)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Converter);