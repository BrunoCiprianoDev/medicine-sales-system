
import { useState } from "react";

export const usePainelOrdenacao = (orderByAttribute, parameters) => {

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(parameters[0].atributo);

  const handleChange = (event) => {
    setOrder(event.target.value);
  }

  const handleOrderBy = (event) => {
    setOrderBy(event.target.value);
  }

  const setFilter = () => {
    orderByAttribute(orderBy, order)
  }
  return { handleChange, handleOrderBy, setFilter, order, orderBy }

}