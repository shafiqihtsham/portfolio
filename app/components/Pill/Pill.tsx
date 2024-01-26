import React from "react";

interface PillProps {
  text: String;
}

const Pill = (props: PillProps) => {
  return (
    <button
      type="button"
      className=" max-w-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-[12px] px-[7px] py-[5px] text-center me-2 mb-2 "
    >
      {props.text}
    </button>
  );
};

export default Pill;
