import { jsxs as o, jsx as t, Fragment as X } from "react/jsx-runtime";
import { useEffect as z, useState as p, createContext as Ae, useContext as _e, useRef as te, useCallback as re } from "react";
const Te = ({ selectedCountry: r, onChange: l }) => /* @__PURE__ */ o("div", { className: "relative", children: [
  /* @__PURE__ */ o(
    "select",
    {
      value: r,
      onChange: (e) => l(e.target.value),
      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
      children: [
        /* @__PURE__ */ t("option", { value: "BENIN", children: "🇧🇯 Benin" }),
        /* @__PURE__ */ t("option", { value: "BURKINA_FASO", children: "🇧🇫 Burkina Faso" }),
        /* @__PURE__ */ t("option", { value: "CONGO_BRAZZAVILLE", children: "🇨🇬 Congo Brazzaville" }),
        /* @__PURE__ */ t("option", { value: "COTE_D_IVOIRE", children: "🇨🇮 Côte d'Ivoire" }),
        /* @__PURE__ */ t("option", { value: "SENEGAL", children: "🇸🇳 Sénégal" }),
        /* @__PURE__ */ t("option", { value: "TOGO", children: "🇹🇬 Togo" })
      ]
    }
  ),
  /* @__PURE__ */ t("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ t("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
] }), ee = {
  MTN: ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0167", "0169", "0190", "0191", "0192", "0193", "0196", "0197"],
  MOOV: ["0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199"],
  CELTIIS: ["0140", "0141", "0143", "0144", "0147"]
}, Z = {
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
}, Fe = {
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
}, Re = (r, l) => ee.MTN.includes(r) ? "MTN" : ee.MOOV.includes(r) ? "MOOV" : ee.CELTIIS.includes(r) ? "CELTIIS" : null, ne = (r) => {
  switch (r) {
    case "BENIN":
      return ["MTN", "MOOV", "CELTIIS"];
    case "COTE_D_IVOIRE":
      return ["MTN", "MOOV", "ORANGE"];
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
}, Me = (r, l, e, a, u) => {
  if (a === "CARD" && (u === "VISA" || u === "MASTERCARD"))
    return Math.ceil(r * 0.045);
  const s = Z[l];
  let g = 0;
  s && s[e] && (g = s[e]);
  const i = r * g;
  return Math.ceil(i);
}, ae = (r, l) => {
  const e = Fe[r];
  return e && e[l] ? e[l] : l.toLowerCase();
}, Pe = ({
  selectedNetwork: r,
  onChange: l,
  country: e
}) => {
  const a = ne(e);
  return z(() => {
    a.length > 0 && !a.includes(r) && l(a[0]);
  }, [e, r, a, l]), /* @__PURE__ */ o("div", { className: "relative", children: [
    /* @__PURE__ */ t(
      "select",
      {
        value: r,
        onChange: (u) => l(u.target.value),
        className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
        children: a.map((u) => /* @__PURE__ */ t("option", { value: u, children: u.replace("_", " ") }, u))
      }
    ),
    /* @__PURE__ */ t("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ t("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
  ] });
}, Ve = ({
  isOpen: r,
  onClose: l,
  status: e,
  message: a
}) => {
  if (z(() => {
    if (e === "SUCCESSFUL" || e === "SUCCESS") {
      const i = setTimeout(() => {
        l();
      }, 5e3);
      return () => clearTimeout(i);
    }
  }, [e, l]), !r) return null;
  const u = () => {
    switch (e) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-green-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) });
      case "FAILED":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) });
      case "PENDING":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ o("svg", { className: "animate-spin h-10 w-10 text-yellow-500", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ t("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ t("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }) });
      case "TIMEOUT":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
      default:
        return null;
    }
  }, s = () => {
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
  }, g = () => {
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
  return /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50", children: /* @__PURE__ */ o("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center", children: [
    u(),
    /* @__PURE__ */ t("h3", { className: "text-xl font-bold mb-2", children: e === "SUCCESSFUL" ? "Paiement Réussi" : e === "FAILED" ? "Paiement Échoué" : e === "SUCCESS" ? "Paiement Réussi" : e === "PENDING" ? "Traitement en cours" : "Vérification expirée" }),
    /* @__PURE__ */ t("p", { className: "text-gray-600 mb-6", children: a }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: l,
        className: `w-full ${g()} text-white font-bold py-3 px-4 rounded-md transition-colors duration-300`,
        children: s()
      }
    )
  ] }) });
}, De = ({ isOpen: r, onClose: l, onSubmit: e, reference: a }) => {
  const [u, s] = p(""), [g, i] = p(!1), f = (m) => {
    m.preventDefault(), i(!0), e(u);
  };
  return r ? /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: /* @__PURE__ */ o("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative", children: [
    /* @__PURE__ */ o("div", { className: "flex justify-between items-center border-b p-4", children: [
      /* @__PURE__ */ t("h3", { className: "text-lg font-medium", children: "Confirmation de paiement" }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: l,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "p-6", children: [
      /* @__PURE__ */ t("p", { className: "text-sm text-gray-600 mb-4", children: "Un code de confirmation a été envoyé à votre téléphone. Veuillez le saisir ci-dessous pour finaliser votre paiement." }),
      /* @__PURE__ */ o("div", { className: "mb-4", children: [
        /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 mb-1", children: "Référence de transaction:" }),
        /* @__PURE__ */ t("p", { className: "font-medium", children: a })
      ] }),
      /* @__PURE__ */ o("form", { onSubmit: f, children: [
        /* @__PURE__ */ o("div", { className: "mb-4", children: [
          /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Code OTP" }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "text",
              value: u,
              onChange: (m) => s(m.target.value),
              placeholder: "Entrez le code reçu par SMS",
              className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "submit",
            disabled: g,
            className: "w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50",
            children: g ? "Traitement en cours..." : "Confirmer le paiement"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, ge = Ae(void 0), ye = () => {
  const r = _e(ge);
  if (!r)
    throw new Error("useFeexPay must be used within a FeexPayProvider");
  return r;
}, Be = {
  amount: 0,
  description: "",
  id: "",
  token: "",
  mode: "SANDBOX"
}, Ze = ({ children: r }) => {
  const [l, e] = p(Be);
  return /* @__PURE__ */ t(ge.Provider, { value: { paymentConfig: l, setPaymentConfig: e }, children: r });
}, Ue = async () => {
  try {
    return (await (await fetch("https://api.ipify.org?format=json")).json()).ip;
  } catch {
    return "unknown";
  }
}, Ne = async (r) => {
  const l = ae(r.country, r.network), e = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  let a = r.phoneNumber.replace(/\+/g, "");
  if (a.length >= 8) {
    const u = a.slice(0, 3);
    a.startsWith(u + u) && (a = a.slice(u.length));
  }
  try {
    const u = window.location.origin, s = await Ue(), g = {
      phoneNumber: a,
      amount: r.amount,
      reseau: l,
      description: r.description,
      customId: r.customId,
      shop: r.id,
      token: r.token,
      merchant_domain: u,
      merchant_ip: s,
      payment_interface: "REACT",
      callback_info: r.callback_info || {},
      currency: r.currency || "XOF",
      first_name: r.first_name,
      email: r.email,
      otp: r.otp || ""
    }, i = await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(g)
    });
    if (!i.ok)
      throw new Error("Payment request failed");
    return await i.json();
  } catch (u) {
    throw console.error("Payment request error:", u), u;
  }
}, ze = async (r) => {
  const l = `https://api.feexpay.me/api/transactions/getrequesttopay/integration/${r}`;
  try {
    const e = await fetch(l);
    if (!e.ok)
      throw new Error("Status check failed");
    return await e.json();
  } catch (e) {
    throw console.error("Status check error:", e), e;
  }
}, We = async (r) => {
  const l = "https://api.feexpay.me/api/transactions/details";
  try {
    const a = {
      network: ae(r.country, r.network),
      amount: r.amount,
      shop: r.id
    }, u = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(a)
    });
    if (!u.ok)
      throw new Error("Failed to get transaction details");
    return await u.json();
  } catch (e) {
    throw console.error("Transaction details error:", e), e;
  }
}, Ge = async (r) => {
  const l = "https://api.feexpay.me/api/transactions/public/initcard";
  try {
    const e = {
      phone: r.phone,
      amount: r.amount,
      shop: r.id,
      first_name: r.first_name,
      last_name: r.last_name,
      email: r.email,
      type_card: r.type_card,
      currency: "XOF"
      // La devise est toujours XOF pour FeexPay
    }, a = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(e)
    });
    if (!a.ok)
      throw new Error("Card payment request failed");
    return await a.json();
  } catch (e) {
    throw console.error("Card payment request error:", e), e;
  }
}, he = async (r) => {
  const l = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  try {
    const e = "229", a = r.phoneNumber.startsWith("+229") ? r.phoneNumber.substring(4) : r.phoneNumber.startsWith("229") ? r.phoneNumber.substring(3) : r.phoneNumber, u = {
      phoneNumber: `229${a}`,
      country: e,
      phoneNumberRight: a,
      amount: r.amount.toString(),
      currency: "XOF",
      description: r.description || "Paiement via FeexPay",
      email: r.email,
      first_name: r.first_name,
      otp: r.otp || "",
      reference: r.reference || "",
      reseau: "CORIS",
      shop: r.id,
      token: r.token,
      callback_info: r.callback_info || {}
    }, s = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(u)
    });
    return {
      ...await s.json(),
      statusCode: s.status.toString()
    };
  } catch (e) {
    throw console.error("Wallet Coris payment request error:", e), e;
  }
}, xe = async (r) => {
  const l = `https://api.feexpay.me/api/shop/${r}/get_shop`;
  try {
    const e = await fetch(l);
    if (!e.ok)
      throw new Error("Shop retrieval failed");
    return await e.json();
  } catch (e) {
    throw console.error("Shop retrieval error:", e), e;
  }
}, pe = async (r, l, e, a) => {
  if (r.preventDefault(), !e())
    return;
  const {
    baseAmount: u,
    network: s,
    country: g,
    paymentConfig: i,
    generateRandomId: f,
    fullName: m,
    email: T,
    setStateCallbacks: y
  } = l, {
    setTransactionReference: F,
    setPaymentStatus: N,
    setStatusMessage: R,
    setStatusModalOpen: k,
    setIsLoading: x
  } = y;
  x(!0);
  try {
    const C = a(), h = await Ne({
      phoneNumber: C,
      amount: u,
      // Envoyer le montant sans frais
      network: s,
      country: g,
      // Ajout du paramètre country
      description: i.description,
      customId: i.customId || f(),
      id: i.id,
      token: i.token,
      currency: i.currency || "XOF",
      callback_info: i.callback_info || {},
      first_name: m,
      email: T
    });
    if (h.statusCode === "10") {
      N("INSUFFICIENT_FUNDS"), R("Fonds insuffisants. Veuillez vérifier votre solde et réessayer."), k(!0), x(!1), i.callback && i.callback({
        reference: h.reference,
        status: "FAILED",
        phoneNumber: C,
        reseau: s,
        callback_info: i.callback_info || {},
        description: i.description,
        transaction_id: h.reference,
        message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
        amount: i.amount,
        currency: i.currency || "XOF",
        first_name: m,
        email: T
      }), i.error_callback_url && (window.location.href = `${i.error_callback_url}?ref=${h.reference}`);
      return;
    } else if (h.statusCode === "92") {
      N("FAILED"), R("La transaction a été annulée. Veuillez réessayer."), k(!0), x(!1), i.callback && i.callback({
        reference: h.reference,
        status: "FAILED",
        phoneNumber: C,
        reseau: s,
        callback_info: i.callback_info || {},
        description: i.description,
        transaction_id: h.reference,
        message: "La transaction a été annulée. Veuillez réessayer.",
        amount: i.amount,
        first_name: m,
        email: T,
        currency: i.currency || "XOF"
      }), i.error_callback_url && (window.location.href = `${i.error_callback_url}?ref=${h.reference}`);
      return;
    }
    return F(h.reference), be(h.reference, l, s, a), { reference: h.reference };
  } catch (C) {
    console.error("Payment error:", C), N("FAILED"), R("Le paiement a échoué. Veuillez réessayer."), k(!0), x(!1);
  }
}, be = (r, l, e, a) => {
  let u = 0;
  const s = 12;
  let g = !1, i = null;
  const {
    paymentConfig: f,
    setStateCallbacks: m,
    fullName: T,
    email: y
  } = l, {
    setPaymentStatus: F,
    setStatusMessage: N,
    setStatusModalOpen: R,
    setIsLoading: k
  } = m, x = (h, M, P) => {
    if (l.isCallbackCalledRef.current) return;
    l.isCallbackCalledRef.current = !0, i && clearTimeout(i), F(h), N(M), R(!0), k(!1);
    const U = {
      reference: r,
      status: P,
      phoneNumber: a(),
      reseau: e,
      callback_info: f.callback_info || {},
      description: f.description,
      transaction_id: r,
      message: M,
      amount: f.amount,
      currency: f.currency || "XOF",
      first_name: T,
      email: y
    };
    f.callback && f.callback(U);
    const V = P === "SUCCESSFUL" || P === "SUCCESS";
    V && f.callback_url ? window.location.href = `${f.callback_url}?ref=${r}` : !V && f.error_callback_url && (window.location.href = `${f.error_callback_url}?ref=${r}`);
  }, C = async () => {
    if (!g) {
      u++;
      try {
        const h = await ze(r);
        if (h.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
          x("INSUFFICIENT_FUNDS", "Fonds insuffisants. Veuillez vérifier votre solde et réessayer.", "FAILED");
          return;
        } else if (h.reason === "PAYER NOT FOUND") {
          x("FAILED", "Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.", "FAILED");
          return;
        }
        const M = h.status.toUpperCase();
        switch (M) {
          case "SUCCESSFUL":
          case "SUCCESS":
            x("SUCCESSFUL", "Paiement réussi !", M);
            break;
          case "FAILED":
            x("FAILED", "Le paiement a échoué. Veuillez réessayer.", "FAILED");
            break;
          case "INSUFFICIENT_FUNDS":
            x("INSUFFICIENT_FUNDS", "Fonds insuffisants. Veuillez vérifier votre solde et réessayer.", "INSUFFICIENT_FUNDS");
            break;
          case "TIMEOUT":
            x("TIMEOUT", "La vérification du paiement a expiré.", "TIMEOUT");
            break;
          case "PENDING":
            u >= s ? x("TIMEOUT", "La vérification du paiement a expiré. Veuillez vérifier votre compte.", "TIMEOUT") : i = setTimeout(C, 1e4);
            break;
          default:
            u >= s && x("TIMEOUT", "Statut de transaction inconnu après plusieurs tentatives.", "TIMEOUT");
            break;
        }
      } catch (h) {
        console.error(`Status check failed for ref ${r}:`, h), u >= s && x("TIMEOUT", "La vérification du paiement a échoué après plusieurs tentatives.", "TIMEOUT");
      }
    }
  };
  return C(), () => {
    i && clearTimeout(i), g = !0;
  };
}, je = ({ id: r, onClose: l }) => {
  const [e, a] = p(null);
  return z(() => {
    (async () => {
      try {
        const s = await xe(r);
        a(s);
      } catch (s) {
        console.error("Erreur de récupération du id :", s);
      }
    })();
  }, [r]), /* @__PURE__ */ o("div", { className: "flex items-center justify-between px-4 py-2 border-b border-gray-200", children: [
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("img", { src: "https://api.feexpay.me/api/static/feexpay_logo-h.png", width: "100", alt: "Logo" }) }),
    /* @__PURE__ */ t("div", { className: "text-right text-xs text-gray-700 ", children: e && /* @__PURE__ */ o(X, { children: [
      /* @__PURE__ */ o("div", { className: "font-semibold", children: [
        "MARCHAND: ",
        e.name
      ] }),
      /* @__PURE__ */ o("div", { className: "text-xs text-gray-500", children: [
        "ID : ",
        e.reference
      ] })
    ] }) }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: l,
        className: "text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] });
}, $e = ({ isOpen: r, onClose: l }) => {
  var fe;
  const { paymentConfig: e } = ye(), [a, u] = p(() => e.case && ["MOBILE", "CARD", "WALLET"].includes(e.case) ? e.case : "MOBILE"), [s, g] = p("BENIN"), [i, f] = p("MTN"), [m, T] = p(""), [y, F] = p(""), [N, R] = p(""), [k, x] = p("VISA"), [C, h] = p(0), [M, P] = p(0), [U, V] = p(0), [H, A] = p(0), [K, D] = p(""), [G, b] = p(!1), [ve, S] = p("PENDING"), [Ee, E] = p(""), [J, w] = p(!1), [Ce, j] = p(!1), [se, Oe] = p(""), [oe, ie] = p(null), $ = te(!1), le = te(null), Y = re((n, c, v, _) => {
    const I = Me(n, c, v, _ || a, k);
    if (V(I), P(n + I), h(n), a === "CARD" && (k === "VISA" || k === "MASTERCARD"))
      A(4.5);
    else {
      const B = Z[c];
      B && B[v] ? A(B[v] * 100) : A(0);
    }
  }, [a, k]), L = re(async (n, c, v, _) => {
    try {
      const d = _ || a, I = await We({
        network: v,
        country: c,
        amount: n,
        id: e.id,
        token: e.token,
        callback_info: e.callback_info || {}
      });
      if (I && I.iffees) {
        let B = !1;
        if (n <= 30) {
          const O = Z[c];
          O && O[v] && O[v] > 0 && (V(1), P(n + 1), A(O[v] * 100), B = !0);
        }
        if (!B) {
          if (I.total !== void 0) {
            const O = I.total - n;
            V(O), P(I.total);
          } else
            Y(n, c, v, d);
          if (d === "CARD")
            A(4.5);
          else {
            const O = Z[c];
            O && O[v] ? A(O[v] * 100) : A(0);
          }
        }
      } else
        V(0), P(n), A(0);
      h(n);
    } catch (d) {
      console.error("Erreur lors de la récupération des détails de transaction:", d), Y(n, c, v, _);
    }
  }, [a, e.id, e.token, Y]);
  z(() => {
    e.amount && (h(e.amount), L(e.amount, s, i));
  }, [e, s, i, L]), z(() => {
    a === "WALLET" && (s === "BENIN" ? (f("CORIS"), e.amount && L(e.amount, s, "CORIS", a)) : s === "COTE_D_IVOIRE" ? (f("WAVE"), e.amount && L(e.amount, s, "WAVE", a)) : (g("BENIN"), f("CORIS"), e.amount && L(e.amount, "BENIN", "CORIS", a)));
  }, []);
  const ce = (n) => {
    f(n), e.amount && L(e.amount, s, n);
  }, we = () => {
    F(""), R(""), T(""), x("VISA");
  }, Ie = (n) => {
    if (we(), V(0), P(e.amount || 0), A(0), u(n), n === "WALLET")
      s === "BENIN" ? (f("CORIS"), e.amount && L(e.amount, s, "CORIS", n)) : s === "COTE_D_IVOIRE" ? (f("WAVE"), e.amount && L(e.amount, s, "WAVE", n)) : (g("BENIN"), f("CORIS"), e.amount && L(e.amount, "BENIN", "CORIS", n));
    else if (n === "MOBILE") {
      const c = ne(s);
      c.length > 0 && (c.includes(i) || f(c[0]), e.amount && L(e.amount, s, i, n));
    } else n === "CARD" && e.amount && L(e.amount, s, i, n);
  }, ue = (n) => {
    if (g(n), a === "WALLET")
      n === "BENIN" ? (f("CORIS"), e.amount && L(e.amount, n, "CORIS")) : n === "COTE_D_IVOIRE" && (f("WAVE"), e.amount && L(e.amount, n, "WAVE"));
    else {
      const c = ne(n);
      f(c[0]), e.amount && L(e.amount, n, c[0]);
    }
  }, de = (n) => {
    const c = n.target.value;
    if (s === "BENIN" && a !== "WALLET" && c.length >= 4) {
      const v = c.substring(0, 4), _ = Re(v);
      _ && f(_);
    }
    T(c);
  }, q = () => {
    if (!m) return m;
    let n = m.replace(/[^0-9]/g, ""), c = "";
    switch (s) {
      case "BENIN":
        c = "229";
        break;
      case "COTE_D_IVOIRE":
        c = "225";
        break;
      case "BURKINA_FASO":
        c = "226";
        break;
      case "CONGO_BRAZZAVILLE":
        c = "242";
        break;
      case "SENEGAL":
        c = "221";
        break;
      case "TOGO":
        c = "228";
        break;
      default:
        return n;
    }
    return n.startsWith(c + c) && (n = n.slice(c.length)), n.startsWith(c) ? n : c + n;
  }, Se = (n) => {
    switch (n) {
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
  }, ke = async (n) => {
    var _;
    if (n.preventDefault(), !Q())
      return;
    $.current = !1, w(!0);
    const c = ["MOOV CI", "ORANGE CI", "MOOV BF", "ORANGE BF", "FREE SN", "WAVE CI", "ORANGE SN"], v = ae(s, i);
    if (c.includes(v)) {
      try {
        const d = await Ne({
          phoneNumber: q(),
          amount: C,
          network: i,
          country: s,
          description: e.description || "Payment",
          customId: e.customId || "",
          id: e.id,
          token: e.token,
          currency: e.currency || "XOF",
          callback_info: e.callback_info || {},
          first_name: y || "",
          email: N || "",
          otp: ((_ = le.current) == null ? void 0 : _.value) || ""
        });
        if (d.payment_url && ie(d.payment_url), d.reference)
          D(d.reference), W(d.reference);
        else if (!d.payment_url)
          throw new Error("La réponse de paiement est invalide.");
      } catch (d) {
        console.error("Payment error:", d), S("FAILED"), E("Le paiement a échoué. Veuillez réessayer."), b(!0);
      } finally {
        w(!1);
      }
      return;
    }
    try {
      if (a === "CARD") {
        const d = y.split(" "), I = d[0] || "", B = d.slice(1).join(" ") || "", O = await Ge({
          phone: m,
          amount: C,
          id: e.id,
          first_name: I,
          last_name: B,
          email: N,
          type_card: k,
          token: e.token,
          currency: e.currency || "XOF"
        });
        O && O.reference ? (D(O.reference), W(O.reference)) : (S("FAILED"), E("La demande de paiement par carte a échoué. Veuillez réessayer."), b(!0), w(!1));
      } else if (a === "MOBILE") {
        const d = await pe(
          n,
          {
            phoneNumber: m,
            baseAmount: C,
            network: i,
            country: s,
            paymentConfig: e,
            transactionReference: K,
            fullName: y,
            email: N,
            generateRandomId: me,
            isCallbackCalledRef: $,
            setStateCallbacks: {
              setTransactionReference: D,
              setPaymentStatus: S,
              setStatusMessage: E,
              setStatusModalOpen: b,
              setIsLoading: w
            }
          },
          Q,
          q
        );
        d && d.reference && W(d.reference);
      } else if (a === "WALLET")
        if (s === "BENIN" && i === "CORIS")
          try {
            const I = y.split(" ")[0] || "", B = m.startsWith("+229") ? m : `+229${m}`, O = await he({
              phoneNumber: B,
              amount: C,
              id: e.id,
              email: N,
              first_name: I,
              description: "Paiement via FeexPay",
              token: e.token,
              currency: e.currency || "XOF",
              callback_info: e.callback_info || {}
            });
            O.statusCode === "201" ? (Oe(O.reference), j(!0), w(!1)) : (S("FAILED"), E("La demande de paiement a échoué. Veuillez réessayer."), b(!0), w(!1));
          } catch (d) {
            console.error("Error in Coris Wallet payment:", d), S("FAILED"), E("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), b(!0), w(!1);
          }
        else {
          const I = await pe(n, {
            phoneNumber: m,
            baseAmount: C,
            network: i,
            country: s,
            paymentConfig: e,
            transactionReference: K,
            generateRandomId: me,
            fullName: y,
            email: N,
            isCallbackCalledRef: $,
            setStateCallbacks: {
              setTransactionReference: D,
              setPaymentStatus: S,
              setStatusMessage: E,
              setStatusModalOpen: b,
              setIsLoading: w
            }
          }, Q, q);
          I && I.reference && W(I.reference);
        }
    } catch (d) {
      console.error("Error in payment submission:", d), S("FAILED"), E("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), b(!0), w(!1);
    }
  }, Q = () => {
    const n = e.fields_to_hide || [];
    if (a === "MOBILE" || a === "WALLET") {
      if (!n.includes("name") && !y.trim())
        return E("Veuillez entrer votre nom complet"), b(!0), !1;
      if (!n.includes("email") && (!N.trim() || !N.includes("@")))
        return E("Veuillez entrer une adresse email valide"), b(!0), !1;
      if (!m.trim() || m.length < 8)
        return E("Veuillez entrer un numéro de téléphone valide"), b(!0), !1;
      if (a === "WALLET" && s !== "BENIN" && s !== "COTE_D_IVOIRE")
        return E("Seuls le Bénin (Coris) et la Côte d'Ivoire (Wave) sont supportés pour les paiements Wallet"), b(!0), !1;
    } else if (a === "CARD") {
      if (!y || y.trim().split(" ").length < 2)
        return E("Veuillez entrer votre nom et prénom complets"), S("FAILED"), b(!0), !1;
      if (!N || !N.includes("@"))
        return E("Veuillez entrer une adresse email valide"), S("FAILED"), b(!0), !1;
      if (!m)
        return E("Veuillez entrer un numéro de téléphone valide"), S("FAILED"), b(!0), !1;
    }
    return !0;
  }, me = () => `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`, Le = async (n) => {
    w(!0);
    try {
      const v = y.split(" ")[0] || "", _ = m.startsWith("+229") ? m : `+229${m}`, d = await he({
        phoneNumber: _,
        amount: C,
        id: e.id,
        email: N,
        first_name: v,
        description: "Paiement via FeexPay",
        reference: se,
        otp: n,
        token: e.token,
        currency: e.currency || "XOF",
        callback_info: e.callback_info || {}
      });
      j(!1), d.reference ? d.status === "SUCCESSFUL" || d.status === "SUCCESS" ? (S("SUCCESSFUL"), E("Paiement effectué avec succès!"), b(!0), w(!1), e.callback_url && setTimeout(() => {
        window.location.href = `${e.callback_url}?ref=${d.reference}`;
      }, 2e3)) : d.status === "PENDING" ? (D(d.reference), W(d.reference)) : (S("FAILED"), E(d.message || "La transaction a échoué. Veuillez réessayer."), b(!0), w(!1), e.error_callback_url && setTimeout(() => {
        window.location.href = `${e.error_callback_url}?ref=${d.reference}`;
      }, 2e3)) : (S("FAILED"), E(d.message || "La confirmation du paiement a échoué. Veuillez réessayer."), b(!0), w(!1));
    } catch {
      S("FAILED"), E("Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer."), b(!0), w(!1), j(!1);
    }
  }, W = (n) => {
    be(n, {
      paymentConfig: e,
      fullName: y,
      email: N,
      isCallbackCalledRef: $,
      setStateCallbacks: {
        setTransactionReference: D,
        setPaymentStatus: S,
        setStatusMessage: E,
        setStatusModalOpen: b,
        setIsLoading: w
      }
    }, i, q);
  };
  return r ? /* @__PURE__ */ o("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: [
    /* @__PURE__ */ o("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col", children: [
      oe && /* @__PURE__ */ o("div", { className: "absolute inset-0 bg-white z-10 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => ie(null),
            className: "absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none",
            "aria-label": "Fermer la passerelle de paiement",
            children: /* @__PURE__ */ t("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ t(
          "iframe",
          {
            src: oe,
            className: "w-full h-full border-0",
            title: "Payment Gateway",
            allow: "payment"
          }
        )
      ] }),
      /* @__PURE__ */ t(je, { id: e.id, onClose: l }),
      /* @__PURE__ */ o("div", { className: "p-6 overflow-y-auto flex-grow", children: [
        /* @__PURE__ */ t("p", { className: "text-sm text-gray-600 text-center mb-4", children: "Remplissez les champs suivants pour effectuer votre paiement" }),
        !e.case && /* @__PURE__ */ t("div", { className: "flex justify-center mb-6 border-b pb-4 w-fit gap-2", children: [
          { label: "Mobile Money", value: "MOBILE", icon: /* @__PURE__ */ o("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#D45D00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ t("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
            /* @__PURE__ */ t("line", { x1: "12", y1: "18", x2: "12", y2: "18" })
          ] }) },
          { label: "Carte Bancaire", value: "CARD", icon: /* @__PURE__ */ o("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: [
            /* @__PURE__ */ t("path", { d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" }),
            /* @__PURE__ */ t("path", { fillRule: "evenodd", d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z", clipRule: "evenodd" })
          ] }) },
          { label: "Wallet", value: "WALLET", icon: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ t("path", { fillRule: "evenodd", d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z", clipRule: "evenodd" }) }) }
        ].map(({ label: n, value: c, icon: v }) => /* @__PURE__ */ o(
          "div",
          {
            className: `flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${a === c ? "bg-[#fff7ed] border-[#D45D00]" : "bg-white border-[#D45D00]"}`,
            onClick: () => Ie(c),
            children: [
              /* @__PURE__ */ t("div", { className: "w-8 h-8 rounded-full flex items-center justify-center mb-1", children: v }),
              /* @__PURE__ */ t("span", { className: "text-xs font-medium", children: n })
            ]
          },
          c
        )) }),
        /* @__PURE__ */ o("div", { className: "space-y-6", children: [
          !((e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name")) && a !== "CARD" ? /* @__PURE__ */ o("div", { className: "space-y-4", children: [
            /* @__PURE__ */ o("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ t("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: "1" }),
              "Informations Personnelles"
            ] }),
            !(e.fields_to_hide || []).includes("name") && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              "input",
              {
                type: "text",
                placeholder: "Nom et Prénoms",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: y,
                onChange: (n) => F(n.target.value)
              }
            ) }),
            !(e.fields_to_hide || []).includes("email") && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: N,
                onChange: (n) => R(n.target.value)
              }
            ) })
          ] }) : null,
          /* @__PURE__ */ o("div", { className: "space-y-4", children: [
            /* @__PURE__ */ o("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ t("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: a === "CARD" || (e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name") ? "1" : "2" }),
              a === "CARD" ? "Paiement par Carte Bancaire" : "Méthodes de paiement"
            ] }),
            a === "MOBILE" && /* @__PURE__ */ o(X, { children: [
              /* @__PURE__ */ o("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Te,
                  {
                    selectedCountry: s,
                    onChange: ue
                  }
                ) }),
                /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Pe,
                  {
                    selectedNetwork: i,
                    onChange: ce,
                    country: s
                  }
                ) })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex", children: [
                /* @__PURE__ */ t("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-gray-600 text-xs", children: Se(s) }) }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: m,
                    onChange: de
                  }
                )
              ] }),
              s === "SENEGAL" && i === "ORANGE" && /* @__PURE__ */ o(X, { children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "text",
                    ref: le,
                    id: "otp",
                    placeholder: "L’otp de validation",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                  }
                ),
                /* @__PURE__ */ t("span", { className: "text-xs text-gray-900", children: "L’otp de validation de la transaction obtenu en tapant #144#391# sur votre téléphone" })
              ] })
            ] }),
            a === "CARD" && /* @__PURE__ */ o("div", { className: "space-y-4", children: [
              /* @__PURE__ */ t("p", { className: "text-red-500 text-md", children: "Les paiements par cartes sont momentanément indisponibles." }),
              /* @__PURE__ */ o("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ o("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Prénom" }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      type: "text",
                      placeholder: "Prénom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: y.split(" ")[0] || "",
                      onChange: (n) => {
                        const c = y.split(" ").slice(1).join(" ");
                        F(`${n.target.value} ${c}`.trim());
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ o("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Nom" }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      type: "text",
                      placeholder: "Nom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: y.split(" ").slice(1).join(" ") || "",
                      onChange: (n) => {
                        const c = y.split(" ")[0] || "";
                        F(`${c} ${n.target.value}`.trim());
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "email",
                    placeholder: "exemple@email.com",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: N,
                    onChange: (n) => R(n.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Téléphone" }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone avec indicatif",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: m,
                    onChange: (n) => T(n.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Type de carte" }),
                /* @__PURE__ */ o(
                  "select",
                  {
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: k,
                    onChange: (n) => x(n.target.value),
                    children: [
                      /* @__PURE__ */ t("option", { value: "VISA", children: "VISA" }),
                      /* @__PURE__ */ t("option", { value: "MASTERCARD", children: "MASTERCARD" })
                    ]
                  }
                )
              ] })
            ] }),
            a === "WALLET" && /* @__PURE__ */ o(X, { children: [
              /* @__PURE__ */ o("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ o("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pays" }),
                  /* @__PURE__ */ o(
                    "select",
                    {
                      value: s,
                      onChange: (n) => ue(n.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      children: [
                        /* @__PURE__ */ t("option", { value: "BENIN", children: "🇧🇯 Bénin" }),
                        /* @__PURE__ */ t("option", { value: "COTE_D_IVOIRE", children: "🇨🇮 Côte d'Ivoire" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Réseau" }),
                  /* @__PURE__ */ o(
                    "select",
                    {
                      value: i,
                      onChange: (n) => ce(n.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      disabled: !0,
                      children: [
                        s === "BENIN" && /* @__PURE__ */ t("option", { value: "CORIS", children: "CORIS" }),
                        s === "COTE_D_IVOIRE" && /* @__PURE__ */ t("option", { value: "WAVE", children: "WAVE" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex", children: [
                /* @__PURE__ */ t("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-gray-600 text-sm", children: s === "BENIN" ? "+229" : s === "COTE_D_IVOIRE" ? "+225" : "" }) }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: m,
                    onChange: de
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ o("div", { className: "bg-gray-50 p-4 rounded-md", children: [
              /* @__PURE__ */ o("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ t("span", { className: "text-sm text-gray-600", children: "Montant :" }),
                /* @__PURE__ */ o("span", { className: "text-sm font-medium", children: [
                  (fe = e.amount) == null ? void 0 : fe.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ t("span", { className: "text-sm text-gray-600", children: "Frais* :" }),
                /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: U > 0 ? `${U.toLocaleString("fr-FR")} ${e.currency}` : `0 ${e.currency}` })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex justify-between font-bold", children: [
                /* @__PURE__ */ t("span", { children: "Montant Total à payer :" }),
                /* @__PURE__ */ o("span", { children: [
                  M.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-2", children: U > 0 ? `*Les frais de transaction sont de ${H.toFixed(1).replace(".", ",")}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction." })
            ] }),
            /* @__PURE__ */ t("div", { className: "pt-2", children: /* @__PURE__ */ o("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => l(),
                  className: "w-1/3 bg-gray-200 hover:bg-gray-300 text-primary-blue font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
                  children: "Retour"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  onClick: ke,
                  disabled: J,
                  className: `w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${J ? "opacity-70 cursor-not-allowed" : ""}`,
                  children: [
                    J ? /* @__PURE__ */ o("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ t("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                      /* @__PURE__ */ t("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                    ] }) : null,
                    "Payer ",
                    M.toLocaleString("fr-FR"),
                    " ",
                    e.currency
                  ]
                }
              )
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "mt-6 text-center text-xs text-gray-500 flex-shrink-0 bg-gray-50 w-full p-2", children: [
          /* @__PURE__ */ t("p", { className: "mt-2", children: "Paiements sécurisés par FeexPay" }),
          /* @__PURE__ */ o("p", { className: "mt-2", children: [
            "En payant par ce plugin, vous acceptez les ",
            /* @__PURE__ */ t("a", { className: "text-blue-900", style: { textDecoration: "underline" }, target: "_blank", href: "https://feexpay.me/fr/terms-and-conditions", children: "conditions générales d'utilisation de FeexPay" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(
      Ve,
      {
        isOpen: G,
        onClose: () => b(!1),
        status: ve,
        message: Ee
      }
    ),
    /* @__PURE__ */ t(
      De,
      {
        isOpen: Ce,
        onClose: () => {
          j(!1), w(!1);
        },
        onSubmit: Le,
        reference: se
      }
    )
  ] }) : null;
}, He = ({
  amount: r,
  description: l,
  id: e,
  token: a,
  callback_url: u,
  mode: s = "LIVE",
  customId: g,
  fields_to_hide: i,
  callback: f,
  currency: m = "XOF",
  case: T,
  callback_info: y,
  error_callback_url: F,
  custom_button: N = !1,
  buttonText: R = `Payer ${r} ${m}`,
  buttonClass: k
}) => {
  const [x, C] = p(!1), { setPaymentConfig: h } = ye(), M = te(null), [P, U] = p(!1), [V, H] = p(null);
  z(() => {
    (async () => {
      try {
        await xe(e), U(!0);
      } catch {
        H("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
      }
    })();
  }, [e]);
  const A = re(() => {
    h({
      amount: r,
      description: l,
      id: e,
      token: a,
      callback_url: u,
      mode: s,
      customId: g,
      fields_to_hide: i,
      callback: f,
      currency: m,
      case: T,
      callback_info: y,
      error_callback_url: F
    }), C(!0);
  }, [
    r,
    l,
    e,
    a,
    u,
    s,
    g,
    i,
    f,
    m,
    T,
    y,
    F,
    h
  ]);
  return z(() => {
    const D = M.current;
    if (!D) return;
    const G = () => {
      A();
    };
    return D.addEventListener("feexpay:trigger", G), () => {
      D.removeEventListener("feexpay:trigger", G);
    };
  }, [A]), /* @__PURE__ */ o("div", { ref: M, children: [
    V ? /* @__PURE__ */ t("p", { className: "text-red-600 text-sm mb-2", children: V }) : P && !N && /* @__PURE__ */ t(
      "button",
      {
        onClick: A,
        className: k || "bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
        children: R
      }
    ),
    x && /* @__PURE__ */ t(
      $e,
      {
        isOpen: x,
        onClose: () => {
          C(!1);
        }
      }
    )
  ] });
};
export {
  He as FeexPayButton,
  Ze as FeexPayProvider
};
