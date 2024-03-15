Installation

With npm :
```bash
npm install @feexpay/react-sdk
```

With yarn :
```bash
yarn add @feexpay/react-sdk
```

Initialisation:

To import the library, we can make :

```bash
import Feexpay from ‘’@feexpay/react-sdk’’
```


To init and add the payment button, you add this code in script balise.

```bash
<Feexpay
     token = ‘’/*API KEY*/’’
      id = ‘’/*ID FOR USER*/ ‘’
      amount = ‘’/*Montant du paiement à effectuer */‘’
      callback={()=>alert(‘’Pay’’)}
/>
```

token (string): your token API key. 

id (string): your shop's id. 

callback (function): Function called back after payment has been made. 

amount (int): Amount of payment to be made in X OF.


You can get the shop's id and token API in your account FeexPay in Developer Menu.

