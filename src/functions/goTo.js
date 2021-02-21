const getTop = (component) => {
  // Función que calcula la distancia que existe de un componente y hasta arriba de la página
  return parseInt(
    component.getBoundingClientRect().top + document.scrollingElement.scrollTop
  );
};
export const goto = (_ref) => {
  const top = getTop(_ref.current) - 100;
  window.scroll({
    top: top,
    left: 0,
    behavior: "smooth",
  });
};
