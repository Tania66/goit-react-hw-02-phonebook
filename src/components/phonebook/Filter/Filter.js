import React from 'react';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <LabelFilter>
    Find contacts by name:
    <InputFilter type="text" value={value} onChange={onChange}></InputFilter>
  </LabelFilter>
);
export default Filter;
