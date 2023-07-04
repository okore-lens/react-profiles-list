// dependencies
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
	return (
		<section className="bg-subtle-light h-full flex items-center justify-center w-full">
			<FontAwesomeIcon
				icon={faSpinner}
				spin
				className={`  text-secondary  m!-0 !p-0 `}
			/>
		</section>
	);
};

export default Spinner;
