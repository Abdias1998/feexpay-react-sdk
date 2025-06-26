# FeexPay React SDK

SDK React officiel pour intégrer les paiements FeexPay dans vos applications React.

## Installation

Avec npm :
```bash
npm install @feexpay/react-sdk
```

Avec yarn :
```bash
yarn add @feexpay/react-sdk
```

## Utilisation

### Importation

```javascript
import React from 'react';
import { FeexPayButton ,FeexPayProvider} from '@feexpay/react-sdk';

```

### Utilisation du bouton de paiement

```javascript
const handlePaymentCallback = (response) => {
  switch(response.status) {
    case 'SUCCESSFUL':
    case 'SUCCESS':
      console.log('Paiement réussi! Référence:', response.reference);
      break;
    case 'FAILED':
      console.log('Paiement échoué. Référence:', response.reference);
      break;
    case 'INSUFFICIENT_FUNDS':
      console.log('Fonds insuffisants. Référence:', response.reference);
      break;
    case 'TIMEOUT':
      console.log('Timeout. Référence:', response.reference);
      break;
  }
};

// Dans votre composant
<FeexPayProvider>
<FeexPayButton

  shop="YOUR_SHOP_ID"
  apiToken="YOUR_API_TOKEN"
  amount={100}
  description="Description du paiement"
  callbackUrl="https://votre-site.com/success"
  error_callabck_url :"https://votre-site.com/error"
  mode="LIVE"
  case :"" //MOBILE/WALLET/CARD
  currency :"" //Laiseer vide si vous voulez pas utilisez la methode par carte bancaire(USD ou CAD)
  buttonText="Payer"
  buttonClass="mt-3"
  fields_to_hide={["email", "name"]}
  callback={handlePaymentCallback}
  customId="123646473"
  callback_info ="INFORMATION SUPPLEMANTAIRE"
/>

</FeexPayProvider>


```
```

## Propriétés disponibles

### FeexPayButton

- `shop` (string) : Identifiant de votre boutique
- `apiToken` (string) : Votre clé API FeexPay
- `amount` (number) : Montant du paiement en XOF
- `description` (string) : Description du paiement
- `callbackUrl` (string) : URL de redirection après le paiement
- `mode` (string) : Mode d'opération ('SANDBOX' ou 'LIVE')
- `customId` (string) : Identifiant personnalisé
- `fields_to_hide` (array) : Champs à masquer dans le formulaire
- `callback` (function) : Fonction appelée après le paiement
- `currency` (string) : Devise (par défaut: XOF)
- `case` (string) : Mode de casse
- `buttonText` (string) : Texte du bouton (par défaut: "Payer")
- `buttonClass` (string) : Classes CSS pour le bouton
- `buttonStyles` (object) : Styles CSS personnalisés pour le bouton
- `defaultValueField` (object) : Valeurs par défaut pour certains champs

> **Note** : Le FeexPayProvider n'est pas nécessaire car toutes les configurations peuvent être passées directement au composant FeexPayButton.

## Méthodes de paiement supportées

- Mobile Money (MTN, MOOV, CELTIIS, ORANGE, etc.)
- Carte bancaire (VISA, MASTERCARD)
- Wallet (CORIS pour Bénin, WAVE pour Côte d'Ivoire)

## Pays supportés

- Bénin (préfixes téléphoniques: MTN, MOOV, CELTIIS)
- Côte d'Ivoire (MTN, MOOV, ORANGE, WAVE)
- Burkina Faso (MOOV, ORANGE)
- Congo Brazzaville (MTN)
- Sénégal (ORANGE, FREE)
- Togo (TOGOCOM, MOOV)

## Support

Pour toute question ou problème, contactez-nous à support@feexpay.me

## Licence

MIT

## Version

1.0.0
