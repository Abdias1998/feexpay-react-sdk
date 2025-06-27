import React from 'react';
import { PaymentStatus } from '../types/index';
interface StatusModalProps {
    isOpen: boolean;
    onClose: () => void;
    status: PaymentStatus;
    message: string;
}
declare const StatusModal: React.FC<StatusModalProps>;
export default StatusModal;
