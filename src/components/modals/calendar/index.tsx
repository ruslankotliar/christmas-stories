import { FC } from 'react';

import CloseIcon from '@/components/icons/closeIcon';
import { LINKS } from '@/constants';

interface PaymentModalProps {
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (isOpen: boolean) => void;
}

const PaymentModal: FC<PaymentModalProps> = ({ isPaymentModalOpen, setIsPaymentModalOpen }) => {
  return (
    <div
      className={`${
        isPaymentModalOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen z-40 p-1 md:p-10 bg-black bg-opacity-75 transition-all`}
      onClick={() => setIsPaymentModalOpen(false)}
    >
      <div
        className="h-full w-full bg-white rounded-md shadow-2xl overflow-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white w-full flex justify-end px-3 pt-3 md:px-10 md:pt-5 text-darkGreen">
          <button
            type="button"
            className="w-10 h-10 hover:scale-110 transition-transform"
            onClick={() => setIsPaymentModalOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="h-full w-full relative">
          <iframe
            src={LINKS.GOOGLE_CALENDAR}
            style={{ border: 0 }}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
