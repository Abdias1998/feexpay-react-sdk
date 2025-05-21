import React from 'react';

interface PaymentFormProps {
  fullName: string;
  setFullName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  fullName,
  setFullName,
  email,
  setEmail,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nom et Prénoms"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-sm"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <input
          type="email"
        
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
      >
        Continuer
      </button>
    </form>
  );
};

export default PaymentForm;