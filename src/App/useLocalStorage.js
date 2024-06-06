import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Implementación de efectos
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;

        // Valida si existen o no To-do's por defecto para asignarlos o tomarlos del local Storage.
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  }, [itemName, initialValue]);

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItems, loading, error };
}

export { useLocalStorage };
