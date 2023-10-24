import React from 'react';

function Btn({ text, backgroundColor, hoverColor }) {
	const buttonClasses = `py-[7px] px-[11px] text-[17px] text-white  transition ease-linear delay-100 rounded-[15px] shadow-[3px_3px_2px_-1px_rgba(0,0,0,0.9)] ${backgroundColor} ${hoverColor} focus:shadow-[inset_-1px_-1px_2px_1px_rgba(0,0,0,0.9),3px_3px_2px_-1px_rgba(0,0,0,0.9)]`;
	return (
		<>
			<button className={buttonClasses}>{text}</button>
		</>
	);
}

export default Btn;
