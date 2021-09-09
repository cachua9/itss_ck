import { useState } from "react";
const useStorage = () => {
    const [listStudent, setListStudent] = useState(["Huyen", "Hoa", "Hung", "Long"]);
    const [inputName, setInputName] = useState("");
    const [index, setIndex] = useState(-1);

    const handleChange = (e) => {
        setInputName(e.target.value);
    };

    const onClick = (e) => {
        e.preventDefault();
        setIndex(0);
        listStudent.map((name, idx) => {
            if(name == inputName) {
                setIndex(idx + 1);
            }
        })
    };

    return [index, inputName, handleChange, onClick];
};

export default useStorage;