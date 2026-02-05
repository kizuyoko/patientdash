import type { ReactNode } from "react";
import Button from "./Button";
import Heading from "./Heading";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const Modal = ({
  isOpen, onClose, title, children
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* modal box */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg max-w-full min-w-md m-6 max-h-[80vh] flex flex-col p-6">
        {title && (
          <Heading>{title}</Heading>
        )}

        <div className="overflow-y-auto py-4">
          {children}
        </div>
        
        <div className="flex justify-end gap-2">
          <Button
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )

}

export default Modal;