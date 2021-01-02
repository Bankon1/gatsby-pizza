import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import PropTypes from 'prop-types';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-ca', {
  style: 'currency',
  currency: 'CAD',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => (
  <>
    <h2>
      {type.title} - {value && formatMoney(value / 100)}
    </h2>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(event) => onChange(createPatchFrom(event.target.value))}
      ref={inputComponent}
    />
  </>
);

PriceInput.focus = function () {
  this._inputElement.focus();
};

PriceInput.propTypes = {
  type: PropTypes.object,
  value: PropTypes.number,
  onChange: PropTypes.func,
  inputComponent: PropTypes.func,
};

export default PriceInput;
