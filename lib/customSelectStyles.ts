import { CSSObjectWithLabel } from 'react-select';

const customSelectStyles = {
  control: (defaultStyles: CSSObjectWithLabel, state: any) => {
    let borderColor: string = 'rgb(22 163 74)';
    if (state.isFocused) borderColor = 'red';

    return {
      ...defaultStyles,
      '&:hover': {
        borderColor: 'none',
      },

      borderColor: state.isFocused ? 'rgb(59 130 246)' : 'rgb(22 163 74) ',
      padding: '0.5rem 0.75rem',
      borderWidth: '2px',
      borderRadius: '0.375rem',
      boxShadow: 'none',
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
