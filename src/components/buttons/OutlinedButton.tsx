import { ReactElement } from "react";

interface IOutlinedButton {
	name?: string;
	txtColor?: string;
	borderColor: string;
	children?: ReactElement;
	styles?: string;
	hoverBg?: string;
	onClick?: () => void;
}

const OutlinedButton = ({
	name,
	txtColor,
	borderColor,
	children,
	styles,
	hoverBg,
	onClick = () => {
		// console.log("clicked");
	},
}: IOutlinedButton) => {
	return (
		<button
			onClick={onClick}
			className={`border h-full rounded-lg  cursor-pointer${txtColor} ${borderColor} ${styles} ${hoverBg}`}
		>
			{name || children}
		</button>
	);
};

export default OutlinedButton;
