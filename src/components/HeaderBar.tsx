import  { useEffect, useState } from 'react';

// Fonction déjà définie
const getShop = async (shop: string): Promise<{ name: string; reference: string }> => {
  const apiUrl = `https://api.feexpay.me/api/shop/${shop}/get_shop`;

  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error('Shop retrieval failed');

  return await response.json();
};

const HeaderBar = ({ shop  , onClose }: { shop: string; onClose: () => void }) => {
  const [shopData   , setShopData] = useState<{ name: string; reference: string } | null>(null);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const data = await getShop(shop);
        setShopData(data);
      } catch (err) {
        console.error('Erreur de récupération du shop :', err);
      }
    };

    fetchShop();
  }, [shop]);

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      {/* Logo à gauche */}
      <div>
        <img src="https://api.feexpay.me/api/static/feexpay_logo-h.png" width="100" alt="Logo" />
      </div>

      {/* Informations du shop au centre-droit */}
      <div className="text-right text-xs text-gray-700 ">
        {shopData&& (
          <>
            <div className="font-semibold">MARCHAND: {shopData.name}</div>
            <div className="text-xs text-gray-500">ID : {shopData.reference}</div>
          </>
        )}
      </div>

      {/* Bouton de fermeture à droite */}
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default HeaderBar;
