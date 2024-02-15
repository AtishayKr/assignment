export const addItem = ({id}) => {
  return {type: 'add', payload: id};
};
export const removeItem = ({id}) => {
  return {type: 'remove', payload: id};
};
