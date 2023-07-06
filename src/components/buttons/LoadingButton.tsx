import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILoadingButton {
	name: string;
	txtColor?: string;
	bgColor: string;
	styles?: string;
	hoverBg?: string;
	isLoading: boolean;
	onClick?: () => void;
}

const LoadingButton = ({
	name,
	txtColor,
	bgColor,
	styles,
	hoverBg,
	isLoading,
	onClick = () => {
		// console.log("clicked");
	},
}: ILoadingButton) => {
	return (
		<button
			disabled={isLoading}
			className={`border-0 h-full relative rounded-lg py-2 ${txtColor} ${
				isLoading ? "bg-mild" : bgColor
			} ${hoverBg} ${styles}`}
			onClick={() => onClick()}
		>
			{isLoading ? (
				<FontAwesomeIcon
					icon={faSpinner}
					spin
					className={` text-secondary  m!-0 !p-0 `}
				/>
			) : (
				<p>{name}</p>
			)}
		</button>
	);
};

export default LoadingButton;
