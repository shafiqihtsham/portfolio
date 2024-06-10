import React from "react";

interface PillProps {
    text: String;
}

const Pill = (props: PillProps) => {
    return (
        <button
            type="button"
            className=" max-w-fit dark:bg-blue-950 dark:text-blue-400 bg-blue-400 text-blue-800 font-medium rounded-lg text-[12px] px-[7px] py-[5px] text-center me-2 mb-2 "
        >
            {props.text}
        </button>
    );
};

export default Pill;
