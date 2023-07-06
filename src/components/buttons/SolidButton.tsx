import { ReactElement } from "react";

interface ISolidButton {
	name?: string;
	txtColor?: string;
	bgColor: string;
	children?: ReactElement;
	styles?: string;
	hoverBg?: string;
	onClick?: () => void;
}

const SolidButton = ({
	name,
	txtColor,
	bgColor,
	children,
	styles,
	hoverBg,
	onClick = () => {
		// console.log("clicked");
	},
}: ISolidButton) => {
	return (
		<button
			onClick={() => onClick()}
			className={`border-0 h-full rounded-lg py-2 ${txtColor} ${bgColor} ${hoverBg} ${styles}`}
		>
			{name || children}
		</button>
	);
};

export default SolidButton;
