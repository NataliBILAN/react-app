import React from 'react';
import Select from 'react-select';

const CategorySelector = ({ value, options, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={options}
    placeholder="Категория"
  />
);

// class CategorySelector extends Component {
//   state = {
//     selectedOption: null,
//   };

//   onCategoryChange = selectedOption => {
//     this.setState({ selectedOption }); // отображается выбор в селекте
//     // this.props.handleCategoryChange(selectedOption.value);
//     console.log(this.state);
//   };

//   render() {
//     const { selectedOption } = this.state;
//     const { categories } = this.props;
//     const options = categories.map(category => ({
//       value: category.name,
//       label: category.name,
//     }));
//     console.log(this.state);
//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.onCategoryChange}
//         options={options}
//         placeholder="Категория"
//       />
//     );
//   }
// }
export default CategorySelector;
