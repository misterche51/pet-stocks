import {
  CONVERTER_INPUT_RADIO_CHECKED,
  CONVERTER_OUTPUT_RADIO_CHECKED,
  CONVERTER_VALUE_INPUTED,
  CONVERTER_SUBMITTED,
 } from '../actions/converterActions';

 const initialState = {
   inputCurrency: 'USD',
   outputCurrency: 'EUR',
   inputValue: 100,
   outputValue: '',
 };

 export function converterReducer(state = initialState, {type, payload}) {
   switch(type) {
     case CONVERTER_INPUT_RADIO_CHECKED:
       return {
         ...state,
         inputCurrency: payload,
       }
      case CONVERTER_OUTPUT_RADIO_CHECKED:
        return {
          ...state,
          outputCurrency: payload,
        }
      case CONVERTER_VALUE_INPUTED:
        return {
          ...state,
          inputValue: payload,
        }
      case CONVERTER_SUBMITTED:
        return {
          ...state,
          outputValue: payload,
        }
        default:
          return state;
   }
 }