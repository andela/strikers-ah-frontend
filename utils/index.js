export default (component, attribute) => {
  const wrap = component.find(`[data-test='${attribute}']`);
  return wrap;
};
