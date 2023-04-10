import { CSSObjectWithLabel, ControlProps } from 'react-select';
const customSelectStyles = {
  control: (defaultStyles: CSSObjectWithLabel, state: ControlProps) => {
    let borderColor: string = 'rgb(22 163 74)';
    if (state.isFocused) borderColor = '#F9A109';
    if (state.isFocused && state.isDisabled) borderColor = '#F9A109';
    return {
      ...defaultStyles,
      '&:hover': {
        borderColor: 'none',
      },
      borderColor: 'rgb(22 163 74)',
      padding: '0.5rem 0.75rem',
      borderWidth: '2px',
      borderRadius: '0.375rem',
    };
  },
  valueContainer: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    margin: '0',
    padding: '0',
  }),
  input: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    margin: '0',
    padding: '0',
  }),
  indicatorSeparator: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    margin: '0',
    paddingTop: '0 ',
    paddingBottom: '0 ',
    display: 'none',
  }),
  indicatorsContainer: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    display: 'none',
  }),
};

export default customSelectStyles;
