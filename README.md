# 💸 FeexPay React SDK

SDK officiel pour intégrer les paiements **FeexPay** dans vos applications **React** de manière simple et rapide.

---

## 🚀 Installation

```bash
npm install @abdias1998/feexpay_lite
```

ou

```bash
yarn add @abdias1998/feexpay_lite
```

---

## 📆 Importation

Ajoutez les composants et le fichier CSS dans votre application :

```tsx
import React from 'react';
import { FeexPayProvider, FeexPayButton } from '@abdias1998/feexpay_lite';
import '@abdias1998/feexpay_lite/style.css';
```

---

## 💻 Exemple d'utilisation

```tsx
function App() {
  return (
    <div className="App">
      <h1>Intégration de FeexPay dans React</h1>

      <FeexPayProvider>
        <FeexPayButton
          amount={10}
          description="Test Payment"
          shop="Votre shop id"
          token="Votre api token"
          customId="23455"
          callback_url="https://example.com/callback"
          callback_info={{
            description: "Test Payment",
            fullname: "John Doe",
            email: "john.doe@example.com",
            phone: "12345678"
          }}
          mode="LIVE"
          currency="XOF"
          buttonClass="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
          callback={(response) => {
            console.log(response);
          }}
        />
      </FeexPayProvider>
    </div>
  );
}

export default App;
```

---

## 🛠 Props du composant `FeexPayButton`

| Prop                 | Type       | Requis   | Description                                  |                        |
| -------------------- | ---------- | -------- | -------------------------------------------- | ---------------------- |
| `amount`             | `number`   | ✅        | Montant à payer                              |                        |
| `description`        | `string`   | ✅        | Description du paiement                      |                        |
| `shop`               | `string`   | ✅        | ID du shop fourni par FeexPay                |                        |
| `token`           | `string`   | ✅        | Token API d'authentification                 |                        |
| `customId`           | `string`   | ✅        | ID personnalisé de la transaction            |                        |
| `callback_url`        | `string`   | ✅        | URL de redirection post-paiement             |                        |
| `callback_info`      | `object`   | ✅        | Infos utilisateur (nom, email, téléphone...) |                        |
| `mode`               | \`"LIVE"   | "SANDBOX"\` | ✅                                            | Mode de fonctionnement |
| `currency`           | `string`   | ✅        | Devise (`XOF`, `USD`, etc.)                  |                        |
| `buttonClass`        | `string`   | ❌        | Classe CSS personnalisée pour le bouton      |                        |
| `buttonText`         | `string`   | ❌        | Texte personnalisé du bouton                 |                        |
| `fields_to_hide`     | `string[]` | ❌        | Champs à masquer (`"email"`, `"name"`, etc.) |                        |
| `callback`           | `function` | ❌        | Callback JavaScript à la fin du paiement     |                        |
| `error_callback_url` | `string`   | ❌        | URL de redirection en cas d'erreur           |                        |

---

## 🔐 Sécurité

* Ne jamais exposer de tokens sensibles dans des environnements publics.
* Utilisez le mode `SANDBOX` pour vos intégrations de test.

---

## 🧰 Dépendances

* React 18 ou 19 compatible
* Tailwind CSS recommandé pour la personnalisation

---

## 🧠 Aide et Support

En cas de besoin ou d'intégration personnalisée, contactez l'équipe FeexPay ou ouvrez une *issue* sur [GitHub](https://github.com/Abdias1998/feexpay-react-sdk/issues).

---

## © FeexPay - 2025
