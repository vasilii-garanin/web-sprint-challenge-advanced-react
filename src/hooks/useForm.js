// write your custom hook here to control your checkout form
import { values } from "lodash";
import useLocalStorage from "./useLocalStorage";

const useForm = (initialData) =>
{
    const [value, setValues] = useLocalStorage("fields", initialData);

    const handleChanges = e =>
    {
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value
            }
        );
    };
    return ([values, handleChanges]);
};

export default useForm;