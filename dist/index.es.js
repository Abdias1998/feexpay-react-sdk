import { jsxs as i, jsx as r, Fragment as Q } from "react/jsx-runtime";
import { useEffect as D, useState as N, createContext as Ie, useContext as ke, useCallback as ee, useRef as _e } from "react";
const Se = ({ selectedCountry: t, onChange: c }) => /* @__PURE__ */ i("div", { className: "relative", children: [
  /* @__PURE__ */ i(
    "select",
    {
      value: t,
      onChange: (e) => c(e.target.value),
      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
      children: [
        /* @__PURE__ */ r("option", { value: "BENIN", children: "🇧🇯 Benin" }),
        /* @__PURE__ */ r("option", { value: "BURKINA_FASO", children: "🇧🇫 Burkina Faso" }),
        /* @__PURE__ */ r("option", { value: "CONGO_BRAZZAVILLE", children: "🇨🇬 Congo Brazzaville" }),
        /* @__PURE__ */ r("option", { value: "COTE_D_IVOIRE", children: "🇨🇮 Côte d'Ivoire" }),
        /* @__PURE__ */ r("option", { value: "SENEGAL", children: "🇸🇳 Sénégal" }),
        /* @__PURE__ */ r("option", { value: "TOGO", children: "🇹🇬 Togo" })
      ]
    }
  ),
  /* @__PURE__ */ r("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ r("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
] }), G = {
  CORIS: ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199", "0140", "0141", "0143", "0144", "0147"],
  MTN: ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0167", "0169", "0190", "0191", "0192", "0193", "0196", "0197"],
  MOOV: ["0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199"],
  CELTIIS: ["0140", "0141", "0143", "0144", "0147"]
}, X = {
  BENIN: {
    MTN: 0.017,
    MOOV: 0.017,
    CELTIIS: 0.017,
    CORIS: 0.017
  },
  COTE_D_IVOIRE: {
    MTN: 0.029,
    MOOV: 0.029,
    ORANGE: 0.029,
    WAVE: 0.032
  },
  BURKINA_FASO: {
    MOOV: 0.032,
    ORANGE: 0.039
  },
  CONGO_BRAZZAVILLE: {
    MTN: 0.03
  },
  SENEGAL: {
    ORANGE: 0.019,
    FREE: 0.019
  },
  TOGO: {
    TOGOCOM: 0.03,
    MOOV: 0.03
  }
}, Le = {
  BENIN: {
    MTN: "MTN",
    MOOV: "MOOV",
    CELTIIS: "CELTIIS BJ",
    CORIS: "CORIS"
  },
  COTE_D_IVOIRE: {
    MTN: "MTN CI",
    MOOV: "MOOV CI",
    ORANGE: "ORANGE CI",
    WAVE: "WAVE CI"
  },
  BURKINA_FASO: {
    MOOV: "MOOV BF",
    ORANGE: "ORANGE BF"
  },
  CONGO_BRAZZAVILLE: {
    MTN: "MTN CG"
  },
  SENEGAL: {
    ORANGE: "ORANGE SN",
    FREE: "FREE SN"
  },
  TOGO: {
    TOGOCOM: "TOGOCOM TG",
    MOOV: "MOOV TG"
  }
}, Ae = (t, c) => G.MTN.includes(t) ? "MTN" : G.MOOV.includes(t) ? "MOOV" : G.CELTIIS.includes(t) ? "CELTIIS" : G.CORIS.includes(t) ? "CORIS" : null, re = (t) => {
  switch (t) {
    case "BENIN":
      return ["MTN", "MOOV", "CELTIIS", "CORIS"];
    case "COTE_D_IVOIRE":
      return ["MTN", "MOOV", "ORANGE", "WAVE"];
    case "BURKINA_FASO":
      return ["MOOV", "ORANGE"];
    case "CONGO_BRAZZAVILLE":
      return ["MTN"];
    case "SENEGAL":
      return ["ORANGE", "FREE"];
    case "TOGO":
      return ["TOGOCOM", "MOOV"];
    default:
      return ["MTN", "MOOV"];
  }
}, Te = (t, c, e, s, d) => {
  if (s === "CARD" && (d === "VISA" || d === "MASTERCARD"))
    return Math.ceil(t * 0.045);
  const o = X[c];
  let n = 0;
  o && o[e] && (n = o[e]);
  const l = t * n;
  return Math.ceil(l);
}, te = (t, c) => {
  const e = Le[t];
  return e && e[c] ? e[c] : c.toLowerCase();
}, Fe = ({
  selectedNetwork: t,
  onChange: c,
  country: e
}) => {
  const s = re(e);
  return D(() => {
    s.length > 0 && !s.includes(t) && c(s[0]);
  }, [e, t, s, c]), /* @__PURE__ */ i("div", { className: "relative", children: [
    /* @__PURE__ */ r(
      "select",
      {
        value: t,
        onChange: (d) => c(d.target.value),
        className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
        children: s.map((d) => /* @__PURE__ */ r("option", { value: d, children: d.replace("_", " ") }, d))
      }
    ),
    /* @__PURE__ */ r("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ r("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
  ] });
}, Me = ({
  isOpen: t,
  onClose: c,
  status: e,
  message: s
}) => {
  if (D(() => {
    if (e === "SUCCESSFUL" || e === "SUCCESS") {
      const l = setTimeout(() => {
        c();
      }, 5e3);
      return () => clearTimeout(l);
    }
  }, [e, c]), !t) return null;
  const d = () => {
    switch (e) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return /* @__PURE__ */ r("div", { className: "w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-green-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) });
      case "FAILED":
        return /* @__PURE__ */ r("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) });
      case "PENDING":
        return /* @__PURE__ */ r("div", { className: "w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ i("svg", { className: "animate-spin h-10 w-10 text-yellow-500", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ r("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ r("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }) });
      case "TIMEOUT":
        return /* @__PURE__ */ r("div", { className: "w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
      default:
        return null;
    }
  }, o = () => {
    switch (e) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return "Continuer";
      case "FAILED":
      case "TIMEOUT":
        return "Réessayer";
      default:
        return "Fermer";
    }
  }, n = () => {
    switch (e) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return "bg-green-500 hover:bg-green-600";
      case "FAILED":
        return "bg-red-500 hover:bg-red-600";
      case "TIMEOUT":
        return "bg-gray-500 hover:bg-gray-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  return /* @__PURE__ */ r("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50", children: /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center", children: [
    d(),
    /* @__PURE__ */ r("h3", { className: "text-xl font-bold mb-2", children: e === "SUCCESSFUL" ? "Paiement Réussi" : e === "FAILED" ? "Paiement Échoué" : e === "SUCCESS" ? "Paiement Réussi" : e === "PENDING" ? "Traitement en cours" : "Vérification expirée" }),
    /* @__PURE__ */ r("p", { className: "text-gray-600 mb-6", children: s }),
    /* @__PURE__ */ r(
      "button",
      {
        onClick: c,
        className: `w-full ${n()} text-white font-bold py-3 px-4 rounded-md transition-colors duration-300`,
        children: o()
      }
    )
  ] }) });
}, Re = ({ isOpen: t, onClose: c, onSubmit: e, reference: s }) => {
  const [d, o] = N(""), [n, l] = N(!1), p = (f) => {
    f.preventDefault(), l(!0), e(d);
  };
  return t ? /* @__PURE__ */ r("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center border-b p-4", children: [
      /* @__PURE__ */ r("h3", { className: "text-lg font-medium", children: "Confirmation de paiement" }),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: c,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "p-6", children: [
      /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mb-4", children: "Un code de confirmation a été envoyé à votre téléphone. Veuillez le saisir ci-dessous pour finaliser votre paiement." }),
      /* @__PURE__ */ i("div", { className: "mb-4", children: [
        /* @__PURE__ */ r("p", { className: "text-sm text-gray-500 mb-1", children: "Référence de transaction:" }),
        /* @__PURE__ */ r("p", { className: "font-medium", children: s })
      ] }),
      /* @__PURE__ */ i("form", { onSubmit: p, children: [
        /* @__PURE__ */ i("div", { className: "mb-4", children: [
          /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Code OTP" }),
          /* @__PURE__ */ r(
            "input",
            {
              type: "text",
              value: d,
              onChange: (f) => o(f.target.value),
              placeholder: "Entrez le code reçu par SMS",
              className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "submit",
            disabled: n,
            className: "w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50",
            children: n ? "Traitement en cours..." : "Confirmer le paiement"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, me = Ie(void 0), pe = () => {
  const t = ke(me);
  if (!t)
    throw new Error("useFeexPay must be used within a FeexPayProvider");
  return t;
}, Ve = {
  amount: 0,
  description: "",
  shop: "",
  apiToken: "",
  mode: "SANDBOX"
}, qe = ({ children: t }) => {
  const [c, e] = N(Ve);
  return /* @__PURE__ */ r(me.Provider, { value: { paymentConfig: c, setPaymentConfig: e }, children: t });
}, Pe = async () => {
  try {
    return (await (await fetch("https://api.ipify.org?format=json")).json()).ip;
  } catch {
    return "unknown";
  }
}, he = async (t) => {
  const c = te(t.country, t.network), e = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  let s = t.phoneNumber.replace(/\+/g, "");
  if (s.length >= 8) {
    const d = s.slice(0, 3);
    s.startsWith(d + d) && (s = s.slice(d.length));
  }
  try {
    const d = window.location.origin, o = await Pe(), n = {
      phoneNumber: s,
      amount: t.amount,
      reseau: c,
      description: t.description,
      customId: t.customId,
      shop: t.shop,
      token: t.apiToken,
      merchant_domain: d,
      merchant_ip: o,
      payment_interface: "REACT",
      callback_info: t.callback_info || {},
      currency: t.currency || "XOF",
      first_name: t.first_name,
      email: t.email
    }, l = await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t.apiToken}`
      },
      body: JSON.stringify(n)
    });
    if (!l.ok)
      throw new Error("Payment request failed");
    return await l.json();
  } catch (d) {
    throw console.error("Payment request error:", d), d;
  }
}, De = async (t) => {
  const c = `https://api.feexpay.me/api/transactions/getrequesttopay/integration/${t}`;
  try {
    const e = await fetch(c);
    if (!e.ok)
      throw new Error("Status check failed");
    return await e.json();
  } catch (e) {
    throw console.error("Status check error:", e), e;
  }
}, Be = async (t) => {
  const c = "https://api.feexpay.me/api/transactions/details";
  try {
    const s = {
      network: te(t.country, t.network),
      amount: t.amount,
      shop: t.shop
    }, d = await fetch(c, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t.apiToken}`
      },
      body: JSON.stringify(s)
    });
    if (!d.ok)
      throw new Error("Failed to get transaction details");
    return await d.json();
  } catch (e) {
    throw console.error("Transaction details error:", e), e;
  }
}, Ue = async (t) => {
  const c = "https://api.feexpay.me/api/transactions/public/initcard";
  try {
    const e = {
      phone: t.phone,
      amount: t.amount,
      shop: t.shop,
      first_name: t.first_name,
      last_name: t.last_name,
      email: t.email,
      type_card: t.type_card,
      currency: "XOF"
      // La devise est toujours XOF pour FeexPay
    }, s = await fetch(c, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t.apiToken}`
      },
      body: JSON.stringify(e)
    });
    if (!s.ok)
      throw new Error("Card payment request failed");
    return await s.json();
  } catch (e) {
    throw console.error("Card payment request error:", e), e;
  }
}, de = async (t) => {
  const c = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  try {
    const e = "229", s = t.phoneNumber.startsWith("+229") ? t.phoneNumber.substring(4) : t.phoneNumber.startsWith("229") ? t.phoneNumber.substring(3) : t.phoneNumber, d = {
      phoneNumber: `229${s}`,
      country: e,
      phoneNumberRight: s,
      amount: t.amount.toString(),
      currency: "XOF",
      description: t.description || "Paiement via FeexPay",
      email: t.email,
      first_name: t.first_name,
      otp: t.otp || "",
      reference: t.reference || "",
      reseau: "CORIS",
      shop: t.shop,
      token: t.apiToken,
      callback_info: t.callback_info || {}
    }, o = await fetch(c, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    });
    return {
      ...await o.json(),
      statusCode: o.status.toString()
    };
  } catch (e) {
    throw console.error("Wallet Coris payment request error:", e), e;
  }
}, ze = async (t) => {
  const c = `https://api.feexpay.me/api/shop/${t}/get_shop`;
  try {
    const e = await fetch(c);
    if (!e.ok)
      throw new Error("Shop retrieval failed");
    return await e.json();
  } catch (e) {
    throw console.error("Shop retrieval error:", e), e;
  }
}, fe = async (t, c, e, s) => {
  if (t.preventDefault(), !e())
    return;
  const {
    baseAmount: d,
    network: o,
    country: n,
    paymentConfig: l,
    generateRandomId: p,
    fullName: f,
    email: x,
    setStateCallbacks: h
  } = c, {
    setTransactionReference: w,
    setPaymentStatus: y,
    setStatusMessage: v,
    setStatusModalOpen: m,
    setIsLoading: _
  } = h;
  _(!0);
  try {
    const L = s(), I = await he({
      phoneNumber: L,
      amount: d,
      // Envoyer le montant sans frais
      network: o,
      country: n,
      // Ajout du paramètre country
      description: l.description,
      customId: l.customId || p(),
      shop: l.shop,
      apiToken: l.apiToken,
      currency: l.currency || "XOF",
      callback_info: l.callback_info || {},
      first_name: f,
      email: x
    });
    if (I.statusCode === "10") {
      y("INSUFFICIENT_FUNDS"), v("Fonds insuffisants. Veuillez vérifier votre solde et réessayer."), m(!0), _(!1), l.callback && l.callback({
        reference: I.reference,
        status: "FAILED",
        phoneNumber: L,
        reseau: o,
        callback_info: l.callback_info || {},
        description: l.description,
        transaction_id: I.reference,
        message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
        amount: l.amount,
        currency: l.currency || "XOF",
        first_name: f,
        email: x
      }), l.error_callback_url && (window.location.href = `${l.error_callback_url}?ref=${I.reference}`);
      return;
    } else if (I.statusCode === "92") {
      y("FAILED"), v("La transaction a été annulée. Veuillez réessayer."), m(!0), _(!1), l.callback && l.callback({
        reference: I.reference,
        status: "FAILED",
        phoneNumber: L,
        reseau: o,
        callback_info: l.callback_info || {},
        description: l.description,
        transaction_id: I.reference,
        message: "La transaction a été annulée. Veuillez réessayer.",
        amount: l.amount,
        first_name: f,
        email: x,
        currency: l.currency || "XOF"
      }), l.error_callback_url && (window.location.href = `${l.error_callback_url}?ref=${I.reference}`);
      return;
    }
    return w(I.reference), ye(I.reference, c, o, s), { reference: I.reference };
  } catch (L) {
    console.error("Payment error:", L), y("FAILED"), v("Le paiement a échoué. Veuillez réessayer."), m(!0), _(!1);
  }
}, ye = (t, c, e, s) => {
  let d = 0;
  const o = 12, {
    paymentConfig: n,
    setStateCallbacks: l,
    fullName: p,
    email: f
  } = c, {
    setPaymentStatus: x,
    setStatusMessage: h,
    setStatusModalOpen: w,
    setIsLoading: y
  } = l, v = setInterval(async () => {
    d++;
    try {
      const m = await De(t);
      if (m.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
        clearInterval(v), x("INSUFFICIENT_FUNDS"), h("Fonds insuffisants. Veuillez vérifier votre solde et réessayer."), w(!0), y(!1), n.callback && n.callback({
          reference: m.reference,
          status: "FAILED",
          phoneNumber: s(),
          reseau: e,
          callback_info: n.callback_info || {},
          description: n.description,
          transaction_id: m.reference,
          message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
          amount: n.amount,
          first_name: p,
          email: f,
          currency: n.currency || "XOF"
        }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`);
        return;
      } else if (m.reason === "PAYER NOT FOUND") {
        clearInterval(v), x("FAILED"), h("Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer."), w(!0), y(!1), n.callback && n.callback({
          reference: m.reference,
          status: "FAILED",
          phoneNumber: s(),
          reseau: e,
          callback_info: n.callback_info || {},
          description: n.description,
          transaction_id: m.reference,
          message: "Le paiement a echoué. Veuillez vérifier le numéro et réessayer.",
          amount: n.amount,
          first_name: p,
          email: f,
          currency: n.currency || "XOF"
        }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`);
        return;
      }
      const _ = m.status.toUpperCase();
      switch (_) {
        case "SUCCESSFUL":
        case "SUCCESS":
          clearInterval(v), x("SUCCESSFUL"), h("Paiement réussi !"), w(!0), y(!1), n.callback && n.callback({
            reference: m.reference,
            status: _,
            phoneNumber: s(),
            reseau: e,
            callback_info: n.callback_info || {},
            description: n.description,
            transaction_id: m.reference,
            message: "La transaction a été effectuée avec succès.",
            amount: n.amount,
            currency: n.currency || "XOF",
            first_name: p,
            email: f
          }), n.callbackUrl && (window.location.href = `${n.callbackUrl}?ref=${t}`);
          break;
        case "FAILED":
          clearInterval(v), x("FAILED"), h("Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement."), w(!0), y(!1), n.callback && n.callback({
            reference: m.reference,
            status: _,
            phoneNumber: s(),
            reseau: e,
            callback_info: n.callback_info || {},
            description: n.description,
            transaction_id: m.reference,
            message: "Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.",
            amount: n.amount,
            currency: n.currency || "XOF",
            first_name: p,
            email: f
          }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`);
          break;
        case "INSUFFICIENT_FUNDS":
          clearInterval(v), x("INSUFFICIENT_FUNDS"), h("Fonds insuffisants. Veuillez vérifier votre solde et réessayer."), w(!0), y(!1), n.callback && n.callback({
            reference: m.reference,
            status: _,
            phoneNumber: s(),
            reseau: e,
            callback_info: n.callback_info || {},
            description: n.description,
            transaction_id: m.reference,
            message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
            amount: n.amount,
            currency: n.currency || "XOF",
            first_name: p,
            email: f
          }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`);
          break;
        case "TIMEOUT":
          clearInterval(v), x("TIMEOUT"), h("La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut."), w(!0), y(!1), n.callback && n.callback({
            reference: m.reference,
            status: _,
            phoneNumber: s(),
            reseau: e,
            callback_info: n.callback_info || {},
            description: n.description,
            transaction_id: m.reference,
            message: "La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
            amount: n.amount,
            currency: n.currency || "XOF",
            first_name: p,
            email: f
          }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`);
          break;
        case "PENDING":
          d >= o && (clearInterval(v), x("TIMEOUT"), h("La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut."), w(!0), y(!1), n.callback && n.callback({
            reference: m.reference,
            status: "TIMEOUT",
            phoneNumber: s(),
            reseau: e,
            callback_info: n.callback_info || {},
            description: n.description,
            transaction_id: m.reference,
            message: "La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
            amount: n.amount,
            currency: n.currency || "XOF",
            first_name: p,
            email: f
          }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`));
          break;
        default:
          d >= o && (clearInterval(v), x("TIMEOUT"), h("Le statut de la transaction est inconnu après plusieurs tentatives."), w(!0), y(!1), n.callback && n.callback({
            reference: t,
            status: "TIMEOUT",
            phoneNumber: s(),
            reseau: e,
            callback_info: n.callback_info || {},
            description: n.description,
            transaction_id: t,
            message: "Le statut de la transaction est inconnu après plusieurs tentatives.",
            amount: n.amount,
            currency: n.currency || "XOF",
            first_name: p,
            email: f
          }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`));
          break;
      }
    } catch (m) {
      console.error(`Status check failed for ref ${t}:`, m), d >= o && (clearInterval(v), x("TIMEOUT"), h("La vérification du paiement a échoué après plusieurs tentatives."), w(!0), y(!1), n.callback && n.callback({
        reference: t,
        status: "TIMEOUT",
        phoneNumber: s(),
        reseau: e,
        callback_info: n.callback_info || {},
        description: n.description,
        transaction_id: t,
        message: "La vérification du paiement a échoué après plusieurs tentatives.",
        amount: n.amount,
        currency: n.currency || "XOF",
        first_name: p,
        email: f
      }), n.error_callback_url && (window.location.href = `${n.error_callback_url}?ref=${t}`));
    }
  }, 2e4);
  return () => {
    clearInterval(v);
  };
}, $e = async (t) => {
  const c = `https://api.feexpay.me/api/shop/${t}/get_shop`, e = await fetch(c);
  if (!e.ok) throw new Error("Shop retrieval failed");
  return await e.json();
}, We = ({ shop: t, onClose: c }) => {
  const [e, s] = N(null);
  return D(() => {
    (async () => {
      try {
        const o = await $e(t);
        s(o);
      } catch (o) {
        console.error("Erreur de récupération du shop :", o);
      }
    })();
  }, [t]), /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-4 py-2 border-b border-gray-200", children: [
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("img", { src: "../public/logo.png", width: "100", alt: "Logo" }) }),
    /* @__PURE__ */ r("div", { className: "text-right text-xs text-gray-700 ", children: e && /* @__PURE__ */ i(Q, { children: [
      /* @__PURE__ */ i("div", { className: "font-semibold", children: [
        "MARCHAND: ",
        e.name
      ] }),
      /* @__PURE__ */ i("div", { className: "text-xs text-gray-500", children: [
        "ID : ",
        e.reference
      ] })
    ] }) }),
    /* @__PURE__ */ r(
      "button",
      {
        onClick: c,
        className: "text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] });
}, je = ({ isOpen: t, onClose: c }) => {
  var ue;
  const { paymentConfig: e } = pe(), [s, d] = N(() => e.case && ["MOBILE", "CARD", "WALLET"].includes(e.case) ? e.case : "MOBILE"), [o, n] = N("BENIN"), [l, p] = N("MTN"), [f, x] = N(""), [h, w] = N(""), [y, v] = N(""), [m, _] = N("VISA"), [L, I] = N(0), [B, P] = N(0), [U, V] = N(0), [q, T] = N(0), [Z, R] = N(""), [$, E] = N(!1), [ge, A] = N("PENDING"), [be, O] = N(""), [H, S] = N(!1), [Ne, W] = N(!1), [ne, xe] = N(""), [ae, se] = N(null), K = ee((a, u, C, g) => {
    const M = Te(a, u, C, g || s, m);
    if (V(M), P(a + M), I(a), s === "CARD" && (m === "VISA" || m === "MASTERCARD"))
      T(4.5);
    else {
      const k = X[u];
      k && k[C] ? T(k[C] * 100) : T(0);
    }
  }, [s, m]), F = ee(async (a, u, C, g) => {
    try {
      const b = g || s, M = await Be({
        network: C,
        country: u,
        amount: a,
        shop: e.shop,
        apiToken: e.apiToken,
        callback_info: e.callback_info || {}
      });
      if (M && M.iffees)
        if (M.total !== void 0) {
          const k = M.total - a;
          if (V(k), P(M.total), b === "CARD")
            T(4.5);
          else {
            const Y = X[u];
            Y && Y[C] ? T(Y[C] * 100) : T(0);
          }
        } else
          K(a, u, C, b);
      else if (a <= 30) {
        const k = X[u];
        k && k[C] && k[C] > 0 ? (V(1), P(a + 1), T(k[C] * 100)) : (V(0), P(a), T(0));
      } else
        V(0), P(a), T(0);
      I(a);
    } catch (b) {
      console.error("Erreur lors de la récupération des détails de transaction:", b), K(a, u, C, g);
    }
  }, [s, e.shop, e.apiToken, K]);
  D(() => {
    e.amount && (I(e.amount), F(e.amount, o, l));
  }, [e, o, l, F]), D(() => {
    s === "WALLET" && (o === "BENIN" ? (p("CORIS"), e.amount && F(e.amount, o, "CORIS", s)) : o === "COTE_D_IVOIRE" ? (p("WAVE"), e.amount && F(e.amount, o, "WAVE", s)) : (n("BENIN"), p("CORIS"), e.amount && F(e.amount, "BENIN", "CORIS", s)));
  }, []);
  const oe = (a) => {
    p(a), e.amount && F(e.amount, o, a);
  }, ve = () => {
    w(""), v(""), x(""), _("VISA");
  }, Ee = (a) => {
    if (ve(), V(0), P(e.amount || 0), T(0), d(a), a === "WALLET")
      o === "BENIN" ? (p("CORIS"), e.amount && F(e.amount, o, "CORIS", a)) : o === "COTE_D_IVOIRE" ? (p("WAVE"), e.amount && F(e.amount, o, "WAVE", a)) : (n("BENIN"), p("CORIS"), e.amount && F(e.amount, "BENIN", "CORIS", a));
    else if (a === "MOBILE") {
      const u = re(o);
      u.length > 0 && (u.includes(l) || p(u[0]), e.amount && F(e.amount, o, l, a));
    } else a === "CARD" && e.amount && F(e.amount, o, l, a);
  }, ie = (a) => {
    if (n(a), s === "WALLET")
      a === "BENIN" ? (p("CORIS"), e.amount && F(e.amount, a, "CORIS")) : a === "COTE_D_IVOIRE" && (p("WAVE"), e.amount && F(e.amount, a, "WAVE"));
    else {
      const u = re(a);
      p(u[0]), e.amount && F(e.amount, a, u[0]);
    }
  }, le = (a) => {
    const u = a.target.value;
    if (o === "BENIN" && s !== "WALLET" && u.length >= 4) {
      const C = u.substring(0, 4), g = Ae(C);
      g && p(g);
    }
    x(u);
  }, j = () => {
    if (!f) return f;
    let a = f.replace(/[^0-9]/g, ""), u = "";
    switch (o) {
      case "BENIN":
        u = "229";
        break;
      case "COTE_D_IVOIRE":
        u = "225";
        break;
      case "BURKINA_FASO":
        u = "226";
        break;
      case "CONGO_BRAZZAVILLE":
        u = "242";
        break;
      case "SENEGAL":
        u = "221";
        break;
      case "TOGO":
        u = "228";
        break;
      default:
        return a;
    }
    return a.startsWith(u + u) && (a = a.slice(u.length)), a.startsWith(u) ? a : u + a;
  }, Ce = (a) => {
    switch (a) {
      case "BENIN":
        return "+229";
      case "COTE_D_IVOIRE":
        return "+225";
      case "BURKINA_FASO":
        return "+226";
      case "CONGO_BRAZZAVILLE":
        return "+242";
      case "SENEGAL":
        return "+221";
      case "TOGO":
        return "+228";
      default:
        return "";
    }
  }, we = async (a) => {
    if (a.preventDefault(), !J())
      return;
    S(!0);
    const u = ["MOOV CI", "ORANGE CI", "MOOV BF", "ORANGE BF", "FREE SN", "WAVE CI"], C = te(o, l);
    if (u.includes(C)) {
      try {
        const g = await he({
          phoneNumber: j(),
          amount: L,
          network: l,
          country: o,
          description: e.description || "Payment",
          customId: e.customId || "",
          shop: e.shop,
          apiToken: e.apiToken,
          currency: e.currency || "XOF",
          callback_info: e.callback_info || {},
          first_name: h || "",
          email: y || ""
        });
        if (g.payment_url && se(g.payment_url), g.reference)
          R(g.reference), z(g.reference);
        else if (!g.payment_url)
          throw new Error("La réponse de paiement est invalide.");
      } catch (g) {
        console.error("Payment error:", g), A("FAILED"), O("Le paiement a échoué. Veuillez réessayer."), E(!0);
      } finally {
        S(!1);
      }
      return;
    }
    try {
      if (s === "CARD") {
        const g = h.split(" "), b = g[0] || "", M = g.slice(1).join(" ") || "", k = await Ue({
          phone: f,
          amount: L,
          shop: e.shop,
          first_name: b,
          last_name: M,
          email: y,
          type_card: m,
          apiToken: e.apiToken,
          currency: e.currency || "XOF"
        });
        k && k.reference ? (R(k.reference), z(k.reference)) : (A("FAILED"), O("La demande de paiement par carte a échoué. Veuillez réessayer."), E(!0), S(!1));
      } else if (s === "MOBILE") {
        const b = await fe(a, {
          phoneNumber: f,
          baseAmount: L,
          network: l,
          country: o,
          paymentConfig: e,
          transactionReference: Z,
          fullName: h,
          email: y,
          generateRandomId: ce,
          setStateCallbacks: {
            setTransactionReference: R,
            setPaymentStatus: A,
            setStatusMessage: O,
            setStatusModalOpen: E,
            setIsLoading: S
          }
        }, J, j);
        b && b.reference && z(b.reference);
      } else if (s === "WALLET")
        if (o === "BENIN" && l === "CORIS")
          try {
            const b = h.split(" ")[0] || "", M = f.startsWith("+229") ? f : `+229${f}`, k = await de({
              phoneNumber: M,
              amount: L,
              shop: e.shop,
              email: y,
              first_name: b,
              description: "Paiement via FeexPay",
              apiToken: e.apiToken,
              currency: e.currency || "XOF",
              callback_info: e.callback_info || {}
            });
            k.statusCode === "201" ? (xe(k.reference), W(!0), S(!1)) : (A("FAILED"), O("La demande de paiement a échoué. Veuillez réessayer."), E(!0), S(!1));
          } catch (g) {
            console.error("Error in Coris Wallet payment:", g), A("FAILED"), O("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), E(!0), S(!1);
          }
        else {
          const b = await fe(a, {
            phoneNumber: f,
            baseAmount: L,
            network: l,
            country: o,
            paymentConfig: e,
            transactionReference: Z,
            generateRandomId: ce,
            fullName: h,
            email: y,
            setStateCallbacks: {
              setTransactionReference: R,
              setPaymentStatus: A,
              setStatusMessage: O,
              setStatusModalOpen: E,
              setIsLoading: S
            }
          }, J, j);
          b && b.reference && z(b.reference);
        }
    } catch (g) {
      console.error("Error in payment submission:", g), A("FAILED"), O("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), E(!0), S(!1);
    }
  }, J = () => {
    const a = e.fields_to_hide || [];
    if (s === "MOBILE" || s === "WALLET") {
      if (!a.includes("name") && !h.trim())
        return O("Veuillez entrer votre nom complet"), E(!0), !1;
      if (!a.includes("email") && (!y.trim() || !y.includes("@")))
        return O("Veuillez entrer une adresse email valide"), E(!0), !1;
      if (!f.trim() || f.length < 8)
        return O("Veuillez entrer un numéro de téléphone valide"), E(!0), !1;
      if (s === "WALLET" && o !== "BENIN" && o !== "COTE_D_IVOIRE")
        return O("Seuls le Bénin (Coris) et la Côte d'Ivoire (Wave) sont supportés pour les paiements Wallet"), E(!0), !1;
    } else if (s === "CARD") {
      if (!h || h.trim().split(" ").length < 2)
        return O("Veuillez entrer votre nom et prénom complets"), A("FAILED"), E(!0), !1;
      if (!y || !y.includes("@"))
        return O("Veuillez entrer une adresse email valide"), A("FAILED"), E(!0), !1;
      if (!f)
        return O("Veuillez entrer un numéro de téléphone valide"), A("FAILED"), E(!0), !1;
    }
    return !0;
  }, ce = () => `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`, Oe = async (a) => {
    S(!0);
    try {
      const C = h.split(" ")[0] || "", g = f.startsWith("+229") ? f : `+229${f}`, b = await de({
        phoneNumber: g,
        amount: L,
        shop: e.shop,
        email: y,
        first_name: C,
        description: "Paiement via FeexPay",
        reference: ne,
        otp: a,
        apiToken: e.apiToken,
        currency: e.currency || "XOF",
        callback_info: e.callback_info || {}
      });
      W(!1), b.reference ? b.status === "SUCCESSFUL" || b.status === "SUCCESS" ? (A("SUCCESSFUL"), O("Paiement effectué avec succès!"), E(!0), S(!1), e.callbackUrl && setTimeout(() => {
        window.location.href = `${e.callbackUrl}?ref=${b.reference}`;
      }, 2e3)) : b.status === "PENDING" ? (R(b.reference), z(b.reference)) : (A("FAILED"), O(b.message || "La transaction a échoué. Veuillez réessayer."), E(!0), S(!1), e.error_callback_url && setTimeout(() => {
        window.location.href = `${e.error_callback_url}?ref=${b.reference}`;
      }, 2e3)) : (A("FAILED"), O(b.message || "La confirmation du paiement a échoué. Veuillez réessayer."), E(!0), S(!1));
    } catch (u) {
      console.error("Error in OTP submission:", u), A("FAILED"), O("Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer."), E(!0), S(!1), W(!1);
    }
  }, z = (a) => {
    ye(a, {
      paymentConfig: e,
      fullName: h,
      email: y,
      setStateCallbacks: {
        setTransactionReference: R,
        setPaymentStatus: A,
        setStatusMessage: O,
        setStatusModalOpen: E,
        setIsLoading: S
      }
    }, l, j);
  };
  return t ? /* @__PURE__ */ i("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: [
    /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col", children: [
      ae && /* @__PURE__ */ i("div", { className: "absolute inset-0 bg-white z-10 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: () => se(null),
            className: "absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none",
            "aria-label": "Fermer la passerelle de paiement",
            children: /* @__PURE__ */ r("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ r(
          "iframe",
          {
            src: ae,
            className: "w-full h-full border-0",
            title: "Payment Gateway",
            allow: "payment"
          }
        )
      ] }),
      /* @__PURE__ */ r(We, { shop: e.shop, onClose: c }),
      /* @__PURE__ */ i("div", { className: "p-6 overflow-y-auto flex-grow", children: [
        /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 text-center mb-4", children: "Remplissez les champs suivants pour effectuer votre paiement" }),
        !e.case && /* @__PURE__ */ r("div", { className: "flex justify-center mb-6 border-b pb-4 w-fit gap-2", children: [
          { label: "Mobile Money", value: "MOBILE", icon: /* @__PURE__ */ i("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#D45D00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ r("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
            /* @__PURE__ */ r("line", { x1: "12", y1: "18", x2: "12", y2: "18" })
          ] }) },
          { label: "Carte Bancaire", value: "CARD", icon: /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: [
            /* @__PURE__ */ r("path", { d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" }),
            /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z", clipRule: "evenodd" })
          ] }) },
          { label: "Wallet", value: "WALLET", icon: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z", clipRule: "evenodd" }) }) }
        ].map(({ label: a, value: u, icon: C }) => /* @__PURE__ */ i(
          "div",
          {
            className: `flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${s === u ? "bg-[#fff7ed] border-[#D45D00]" : "bg-white border-[#D45D00]"}`,
            onClick: () => Ee(u),
            children: [
              /* @__PURE__ */ r("div", { className: "w-8 h-8 rounded-full flex items-center justify-center mb-1", children: C }),
              /* @__PURE__ */ r("span", { className: "text-xs font-medium", children: a })
            ]
          },
          u
        )) }),
        /* @__PURE__ */ i("div", { className: "space-y-6", children: [
          !((e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name")) && s !== "CARD" ? /* @__PURE__ */ i("div", { className: "space-y-4", children: [
            /* @__PURE__ */ i("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ r("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: "1" }),
              "Informations Personnelles"
            ] }),
            !(e.fields_to_hide || []).includes("name") && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
              "input",
              {
                type: "text",
                placeholder: "Nom et Prénoms",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: h,
                onChange: (a) => w(a.target.value)
              }
            ) }),
            !(e.fields_to_hide || []).includes("email") && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: y,
                onChange: (a) => v(a.target.value)
              }
            ) })
          ] }) : null,
          /* @__PURE__ */ i("div", { className: "space-y-4", children: [
            /* @__PURE__ */ i("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ r("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: s === "CARD" || (e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name") ? "1" : "2" }),
              s === "CARD" ? "Paiement par Carte Bancaire" : "Méthodes de paiement"
            ] }),
            s === "MOBILE" && e.currency !== "CAD" && e.currency !== "USD" && /* @__PURE__ */ i(Q, { children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
                  Se,
                  {
                    selectedCountry: o,
                    onChange: ie
                  }
                ) }),
                /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
                  Fe,
                  {
                    selectedNetwork: l,
                    onChange: oe,
                    country: o
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex", children: [
                /* @__PURE__ */ r("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ r("span", { className: "text-gray-600 text-xs", children: Ce(o) }) }),
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: f,
                    onChange: le
                  }
                )
              ] })
            ] }),
            s === "CARD" && (e.currency === "CAD" || e.currency === "USD") && /* @__PURE__ */ i("div", { className: "space-y-4", children: [
              /* @__PURE__ */ r("p", { className: "text-red-500 text-md", children: "Les paiements par cartes sont momentanément indisponibles." }),
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Prénom" }),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      type: "text",
                      placeholder: "Prénom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: h.split(" ")[0] || "",
                      onChange: (a) => {
                        const u = h.split(" ").slice(1).join(" ");
                        w(`${a.target.value} ${u}`.trim());
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Nom" }),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      type: "text",
                      placeholder: "Nom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: h.split(" ").slice(1).join(" ") || "",
                      onChange: (a) => {
                        const u = h.split(" ")[0] || "";
                        w(`${u} ${a.target.value}`.trim());
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "email",
                    placeholder: "exemple@email.com",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: y,
                    onChange: (a) => v(a.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Téléphone" }),
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone avec indicatif",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: f,
                    onChange: (a) => x(a.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Type de carte" }),
                /* @__PURE__ */ i(
                  "select",
                  {
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: m,
                    onChange: (a) => _(a.target.value),
                    children: [
                      /* @__PURE__ */ r("option", { value: "VISA", children: "VISA" }),
                      /* @__PURE__ */ r("option", { value: "MASTERCARD", children: "MASTERCARD" })
                    ]
                  }
                )
              ] })
            ] }),
            s === "WALLET" && e.currency !== "CAD" && e.currency !== "USD" && /* @__PURE__ */ i(Q, { children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pays" }),
                  /* @__PURE__ */ i(
                    "select",
                    {
                      value: o,
                      onChange: (a) => ie(a.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      children: [
                        /* @__PURE__ */ r("option", { value: "BENIN", children: "Bénin" }),
                        /* @__PURE__ */ r("option", { value: "COTE_D_IVOIRE", children: "Côte d'Ivoire" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ r("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Réseau" }),
                  /* @__PURE__ */ i(
                    "select",
                    {
                      value: l,
                      onChange: (a) => oe(a.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      disabled: !0,
                      children: [
                        o === "BENIN" && /* @__PURE__ */ r("option", { value: "CORIS", children: "Coris" }),
                        o === "COTE_D_IVOIRE" && /* @__PURE__ */ r("option", { value: "WAVE", children: "Wave" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex", children: [
                /* @__PURE__ */ r("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ r("span", { className: "text-gray-600 text-sm", children: o === "BENIN" ? "+229" : o === "COTE_D_IVOIRE" ? "+225" : "" }) }),
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: f,
                    onChange: le
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "bg-gray-50 p-4 rounded-md", children: [
              /* @__PURE__ */ i("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ r("span", { className: "text-sm text-gray-600", children: "Montant :" }),
                /* @__PURE__ */ i("span", { className: "text-sm font-medium", children: [
                  (ue = e.amount) == null ? void 0 : ue.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ r("span", { className: "text-sm text-gray-600", children: "Frais* :" }),
                /* @__PURE__ */ r("span", { className: "text-sm font-medium", children: U > 0 ? `${U.toLocaleString("fr-FR")} ${e.currency}` : `0 ${e.currency}` })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex justify-between font-bold", children: [
                /* @__PURE__ */ r("span", { children: "Montant Total à payer :" }),
                /* @__PURE__ */ i("span", { children: [
                  B.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ r("p", { className: "text-xs text-gray-500 mt-2", children: U > 0 ? `*Les frais de transaction sont de ${q.toFixed(1).replace(".", ",")}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction." })
            ] }),
            /* @__PURE__ */ r("div", { className: "pt-2", children: /* @__PURE__ */ i("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ r(
                "button",
                {
                  onClick: () => c(),
                  className: "w-1/3 bg-gray-200 hover:bg-gray-300 text-primary-blue font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
                  children: "Retour"
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  onClick: we,
                  disabled: H,
                  className: `w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${H ? "opacity-70 cursor-not-allowed" : ""}`,
                  children: [
                    H ? /* @__PURE__ */ i("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ r("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                      /* @__PURE__ */ r("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                    ] }) : null,
                    "Payer ",
                    B.toLocaleString("fr-FR"),
                    " ",
                    e.currency
                  ]
                }
              )
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "mt-6 text-center text-xs text-gray-500 flex-shrink-0 bg-gray-50 w-full p-2", children: [
          /* @__PURE__ */ r("p", { className: "mt-2", children: "Paiements sécurisés par FeexPay" }),
          /* @__PURE__ */ i("p", { className: "mt-2", children: [
            "En payant par ce plugin, vous acceptez les ",
            /* @__PURE__ */ r("a", { className: "text-blue-900", style: { textDecoration: "underline" }, target: "_blank", href: "https://feexpay.me/fr/terms-and-conditions", children: "conditions générales d'utilisation de FeexPay" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r(
      Me,
      {
        isOpen: $,
        onClose: () => E(!1),
        status: ge,
        message: be
      }
    ),
    /* @__PURE__ */ r(
      Re,
      {
        isOpen: Ne,
        onClose: () => {
          W(!1), S(!1);
        },
        onSubmit: Oe,
        reference: ne
      }
    )
  ] }) : null;
}, Ze = ({
  amount: t,
  description: c,
  shop: e,
  apiToken: s,
  callbackUrl: d,
  mode: o = "LIVE",
  customId: n,
  fields_to_hide: l,
  callback: p,
  currency: f = "XOF",
  case: x,
  callback_info: h,
  error_callback_url: w,
  custom_button: y = !1,
  buttonText: v = `Payer ${t} ${f}`,
  buttonClass: m
}) => {
  const [_, L] = N(!1), { setPaymentConfig: I } = pe(), B = _e(null), [P, U] = N(!1), [V, q] = N(null);
  D(() => {
    (async () => {
      try {
        await ze(e), U(!0);
      } catch {
        q("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
      }
    })();
  }, [e]);
  const T = ee(() => {
    I({
      amount: t,
      description: c,
      shop: e,
      apiToken: s,
      callbackUrl: d,
      mode: o,
      customId: n,
      fields_to_hide: l,
      callback: p,
      currency: f,
      case: x,
      callback_info: h,
      error_callback_url: w
    }), L(!0);
  }, [
    t,
    c,
    e,
    s,
    d,
    o,
    n,
    l,
    p,
    f,
    x,
    h,
    w,
    I
  ]);
  return D(() => {
    const R = B.current;
    if (!R) return;
    const $ = () => {
      T();
    };
    return R.addEventListener("feexpay:trigger", $), () => {
      R.removeEventListener("feexpay:trigger", $);
    };
  }, [T]), /* @__PURE__ */ i("div", { ref: B, children: [
    V ? /* @__PURE__ */ r("p", { className: "text-red-600 text-sm mb-2", children: V }) : P && !y && /* @__PURE__ */ r(
      "button",
      {
        onClick: T,
        className: m || "w-full bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
        children: v
      }
    ),
    _ && /* @__PURE__ */ r(
      je,
      {
        isOpen: _,
        onClose: () => {
          L(!1);
        }
      }
    )
  ] });
};
export {
  Ze as FeexPayButton,
  qe as FeexPayProvider
};
