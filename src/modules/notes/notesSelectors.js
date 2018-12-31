const getItems = state => state.notes.items;

const getFilter = state => state.notes.filter;

const getFilteredNotes = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  return items.filter(item => item.text.includes(filter));
};

export default { getItems, getFilter, getFilteredNotes };

// это селекторы,т.е. функции,которые возвращают часть состояния.Получают весь стэйт,возвращают кусочек
