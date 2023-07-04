import {
	faCircleCheck,
	faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RequestStatusProps {
	type: "success" | "error";
	message: string | undefined;
	textSize?: string;
}

const RequestStatus = ({ type, message, textSize }: RequestStatusProps) => {
	return (
		<section
			className={`flex  px-5 py-3 rounded-lg  ${
				type === "error" && "bg-[#fdeded]"
			} ${type === "success" && "bg-[#edf7ed]"} `}
		>
			<section>
				{type === "error" && (
					<FontAwesomeIcon
						icon={faCircleExclamation}
						className="text-red-400"
					/>
				)}
				{type === "success" && (
					<FontAwesomeIcon icon={faCircleCheck} className="text-green-400" />
				)}
			</section>
			<section
				className={`ml-5  ${type === "error" && "text-red-700"} ${
					type === "success" && "text-green-700"
				}  ${textSize}`}
			>
				{message}
			</section>
		</section>
	);
};

export default RequestStatus;
