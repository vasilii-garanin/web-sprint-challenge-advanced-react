import { useState } from 'react';

const useLocalStorage = (key, initialData) =>
{
    const [values, setValues] = useState(() => 
    {

        if (localStorage.getItem(key))
        {
            return (JSON.parse(localStorage.getItem(key)));
        } else
        {
            localStorage.setItem(key, JSON.stringify(initialData));
            return (initialData);
        }

    });

    const setStoredValues = (values) =>
    {
        localStorage.setItem(key, JSON.stringify(values));
        setValues(values);
    };
    return [values, setStoredValues];
};

export default useLocalStorage;