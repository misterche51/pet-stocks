import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {arrows_horizontal} from 'react-icons-kit/ikons/arrows_horizontal'
import { connect } from 'react-redux';
import styles from './converter.module.css';
import { converterValueInputed, converterInputRadioChecked, converterOutputRadioChecked, converterSubmitted } from '../../actions/converterActions';



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
    this.props.converterSubmitHandler(`${(+this.props.inputValue * (+this.props.course.find((item) => item.ticker === ticker).bid)).toFixed(3)}`)
  }


  render() {
    return (
      <div className = {styles.wrapper}>
        <form className={styles.form} onSubmit = {this.submitButtonOnClickHandler}>
          <div className = {styles.formInner}>
            <div className = {styles.boxInput}>
              <div className={styles.radioList} onChange = {this.radioInputOnChangeHandler}>
                <input type="radio" name="converter-input" id="input-usd" aria-label="USD" className={styles.radioInput} defaultChecked/>
                <label htmlFor="input-usd" className={styles.radioLabel}>USD</label>
                <input type="radio" name="converter-input" id="input-eur" aria-label="EUR" className={styles.radioInput}/>
                <label htmlFor="input-eur" className={styles.radioLabel}>EUR</label>
                <input type="radio" name="converter-input" id="input-gbp" aria-label="GBP" className={styles.radioInput}/>
                <label htmlFor="input-gbp" className={styles.radioLabel}>GBP</label>
                <input type="radio" name="converter-input" id="input-chf" aria-label="CHF" className={styles.radioInput}/>
                <label htmlFor="input-chf" className={styles.radioLabel}>CHF</label>
              </div>
              <input className={styles.input} type={"text"} autoFocus={true} value={this.props.inputValue} onChange = {this.inputOnChangeHandler}></input>
            </div>
            <div className = {styles.box}>
              <div className="converter__radio-list" onChange = {this.radioOutputOnChangeHandler}>
                <input type="radio" name="converter-output" id="ouput-usd" aria-label="USD" className={styles.radioInput}/>
                <label htmlFor="ouput-usd" className={styles.radioLabel}>USD</label>
                <input type="radio" name="converter-output" id="ouput-eur" aria-label="EUR" className={styles.radioInput} defaultChecked/>
                <label htmlFor="ouput-eur" className={styles.radioLabel}>EUR</label>
                <input type="radio" name="converter-output" id="ouput-gbp" aria-label="GBP" className={styles.radioInput}/>
                <label htmlFor="ouput-gbp" className={styles.radioLabel}>GBP</label>
                <input type="radio" name="converter-output" id="ouput-chf" aria-label="CHF" className={styles.radioInput}/>
                <label htmlFor="ouput-chf" className={styles.radioLabel}>CHF</label>
              </div>
              <div className={styles.output}>{this.props.outputValue}</div>
            </div>
            <div className = {styles.submit}>
            <input className ={styles.submitButton} type="submit" value=""/>
            <Icon className = {styles.submitIcon} size={40} icon={arrows_horizontal}/>
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