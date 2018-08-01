import * as React from 'react';
import Select, * as SelectModule from 'react-select';

const EXAMPLE_OPTIONS: SelectModule.OptionsType = [
    { value: 'one', label: 'One', first: true },
    { value: 'two', label: 'Two', last: true, custom: 'custom' }
];

const backspaceRemovesValue = () => <Select backspaceRemovesValue />;
const pageSize = () => <Select pageSize={5} />;
const rtl = () => <Select isRtl />;

const optionsAndValue = () => (
    <Select options={EXAMPLE_OPTIONS} value={EXAMPLE_OPTIONS[0]} />
);
