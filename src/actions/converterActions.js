export const CONVERTER_INPUT_RADIO_CHECKED = 'CONVERTER_INPUT_RADIO_CHECKED';
export const CONVERTER_OUTPUT_RADIO_CHECKED = 'CONVERTER_OUTPUT_RADIO_CHECKED';
export const CONVERTER_VALUE_INPUTED = 'CONVERTER_VALUE_INPUTED';
export const CONVERTER_SUBMITTED = 'CONVERTER_SUBMITTED'


export function converterInputRadioChecked(payload) {
  return {
    type: CONVERTER_INPUT_RADIO_CHECKED,
    payload,
  }
}

export function converterOutputRadioChecked(payload) {
  return {
    type: CONVERTER_OUTPUT_RADIO_CHECKED,
    payload,
  }
}

export function converterValueInputed(payload) {
  return {
    type: CONVERTER_VALUE_INPUTED,
    payload
  }
}

export function converterSubmitted(payload) {
  return {
    type: CONVERTER_SUBMITTED,
    payload
  }
}