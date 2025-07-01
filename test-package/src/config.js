export const feexpayConfig = {
  shop: '671a774c706593edb3dc4ab2',
  apiToken: 'fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ',
  mode: 'LIVE',
  callback_url: 'https://votre-site.com/success',
  currency: 'XOF',
  callback: (response) => {
    console.log('Réponse du paiement:', response);
    
    switch(response.status) {
      case 'SUCCESSFUL':
      case 'SUCCESS':
        console.log('Paiement réussi ! Référence:', response.reference);
        alert('Paiement réussi !');
        break;
      case 'FAILED':
        console.log('Paiement échoué. Référence:', response.reference);
        alert('Paiement échoué');
        break;
      case 'INSUFFICIENT_FUNDS':
        console.log('Fonds insuffisants. Référence:', response.reference);
        alert('Fonds insuffisants');
        break;
      case 'TIMEOUT':
        console.log('Timeout. Référence:', response.reference);
        alert('Timeout');
        break;
    }
  },
  callback_info: {
    description: 'Test de paiement',
    fullname: 'John Doe',
    email: 'john.doe@example.com',
    phone: '12345678'
  }
};
