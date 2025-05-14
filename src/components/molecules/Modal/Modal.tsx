import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-[#1f1f1f] p-8 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.95)] w-80 max-w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
};
