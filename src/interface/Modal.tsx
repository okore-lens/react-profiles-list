/* eslint-disable react-refresh/only-export-components */

import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }: { onClose: () => void }) => (
	<section
		className="fixed top-0 left-0 w-full h-[100vh] z-10 bg-[#252525b4] cursor-pointer"
		onClick={onClose}
	></section>
);

const ModalBody = ({
	children,
	additionalStyles,
}: {
	children: ReactNode;
	additionalStyles?: string;
}) => (
	<section
		className={`fixed top-[20vh]  left-1/2 -translate-x-1/2 min-w-[15%] sm:max-w-[90%] max-h-[70vh] overflow-y-auto bg-white text-[#3a2727] p-4 rounded-lg z-20 ${additionalStyles}`}
	>
		<section className="relative">{children}</section>
	</section>
);

const modalEl: HTMLElement = document.getElementById("modal") as HTMLElement;

const Modal = ({
	onClose,
	children,
	additionalStyles,
}: {
	onClose: () => void;
	children: ReactNode;
	additionalStyles?: string;
}) => {
	return (
		<>
			{createPortal(<Backdrop onClose={onClose} />, modalEl)}
			{createPortal(
				<ModalBody additionalStyles={additionalStyles} children={children} />,
				modalEl
			)}
		</>
	);
};

export default Modal;
