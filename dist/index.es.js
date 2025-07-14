import { jsxs as i, jsx as t, Fragment as Z } from "react/jsx-runtime";
import { useEffect as W, useState as g, createContext as Fe, useContext as Te, useRef as ee, useCallback as te } from "react";
const Me = ({ selectedCountry: r, onChange: l }) => /* @__PURE__ */ i("div", { className: "relative", children: [
  /* @__PURE__ */ i(
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
] }), Q = {
  MTN: ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0167", "0169", "0190", "0191", "0192", "0193", "0196", "0197"],
  MOOV: ["0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199"],
  CELTIIS: ["0140", "0141", "0143", "0144", "0147"]
}, me = {
  MOOV: ["01", "02", "03", "40", "41", "42", "43", "50", "51", "52", "53", "70", "71", "72", "73", "80", "81", "82", "83", "90", "91", "92", "93"],
  MTN: ["04", "05", "06", "44", "45", "46", "54", "55", "56", "64", "65", "66", "74", "75", "76", "84", "85", "86", "94", "95", "96"]
}, H = {
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
}, Re = {
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
}, fe = (r, l) => me.MTN.includes(r) ? "MTN" : me.MOOV.includes(r) ? "MOOV" : Q.MTN.includes(r) ? "MTN" : Q.MOOV.includes(r) ? "MOOV" : Q.CELTIIS.includes(r) ? "CELTIIS" : null, re = (r) => {
  switch (r) {
    case "BENIN":
      return ["MTN", "MOOV", "CELTIIS"];
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
}, Pe = (r, l, e, a, d) => {
  if (a === "CARD" && (d === "VISA" || d === "MASTERCARD"))
    return Math.ceil(r * 0.045);
  const s = H[l];
  let y = 0;
  s && s[e] && (y = s[e]);
  const o = r * y;
  return Math.ceil(o);
}, ne = (r, l) => {
  const e = Re[r];
  return e && e[l] ? e[l] : l.toLowerCase();
}, Ve = ({
  selectedNetwork: r,
  onChange: l,
  country: e
}) => {
  const a = re(e);
  return W(() => {
    a.length > 0 && !a.includes(r) && l(a[0]);
  }, [e, r, a, l]), /* @__PURE__ */ i("div", { className: "relative", children: [
    /* @__PURE__ */ t(
      "select",
      {
        value: r,
        onChange: (d) => l(d.target.value),
        className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
        children: a == null ? void 0 : a.map((d) => /* @__PURE__ */ t("option", { value: d, children: d.replace("_", " ") }, d))
      }
    ),
    /* @__PURE__ */ t("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ t("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
  ] });
}, De = ({
  isOpen: r,
  onClose: l,
  status: e,
  message: a
}) => {
  if (W(() => {
    if (e === "SUCCESSFUL" || e === "SUCCESS") {
      const o = setTimeout(() => {
        l();
      }, 5e3);
      return () => clearTimeout(o);
    }
  }, [e, l]), !r) return null;
  const d = () => {
    switch (e) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-green-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) });
      case "FAILED":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) });
      case "PENDING":
        return /* @__PURE__ */ t("div", { className: "w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ i("svg", { className: "animate-spin h-10 w-10 text-yellow-500", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
  }, y = () => {
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
  return /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50", children: /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center", children: [
    d(),
    /* @__PURE__ */ t("h3", { className: "text-xl font-bold mb-2", children: e === "SUCCESSFUL" ? "Paiement Réussi" : e === "FAILED" ? "Paiement Échoué" : e === "SUCCESS" ? "Paiement Réussi" : e === "PENDING" ? "Traitement en cours" : "Vérification expirée" }),
    /* @__PURE__ */ t("p", { className: "text-gray-600 mb-6", children: a }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: l,
        className: `w-full ${y()} text-white font-bold py-3 px-4 rounded-md transition-colors duration-300`,
        children: s()
      }
    )
  ] }) });
}, Be = ({ isOpen: r, onClose: l, onSubmit: e }) => {
  const [a, d] = g(""), [s, y] = g(!1), o = (m) => {
    m.preventDefault(), y(!0), e(a);
  };
  return r ? /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center border-b p-4", children: [
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
    /* @__PURE__ */ i("div", { className: "p-6", children: [
      /* @__PURE__ */ t("p", { className: "text-sm text-gray-600 mb-4", children: "Un code de confirmation a été envoyé à votre téléphone. Veuillez le saisir ci-dessous pour finaliser votre paiement." }),
      /* @__PURE__ */ i("form", { onSubmit: o, children: [
        /* @__PURE__ */ i("div", { className: "mb-4", children: [
          /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Code OTP" }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "text",
              value: a,
              onChange: (m) => d(m.target.value),
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
            disabled: s,
            className: "w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50",
            children: s ? "Traitement en cours..." : "Confirmer le paiement"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, ge = Fe(void 0), ye = () => {
  const r = Te(ge);
  if (!r)
    throw new Error("useFeexPay must be used within a FeexPayProvider");
  return r;
}, Ue = {
  amount: 0,
  description: "",
  id: "",
  token: "",
  mode: "SANDBOX"
}, He = ({ children: r }) => {
  const [l, e] = g(Ue);
  return /* @__PURE__ */ t(ge.Provider, { value: { paymentConfig: l, setPaymentConfig: e }, children: r });
}, ze = async () => {
  try {
    return (await (await fetch("https://api.ipify.org?format=json")).json()).ip;
  } catch {
    return "unknown";
  }
}, Ne = async (r) => {
  const l = ne(r.country, r.network), e = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  let a = r.phoneNumber.replace(/\+/g, "");
  if (a.length >= 8) {
    const d = a.slice(0, 3);
    a.startsWith(d + d) && (a = a.slice(d.length));
  }
  try {
    const d = window.location.origin, s = await ze();
    let y = r.description;
    r.network === "MTN" && (y = y.replace(/[^a-zA-Z0-9 ]/g, ""));
    const o = {
      phoneNumber: a,
      amount: r.amount,
      reseau: l,
      description: y,
      customId: r.customId,
      shop: r.id,
      token: r.token,
      merchant_domain: d,
      merchant_ip: s,
      payment_interface: "REACT",
      callback_info: r.callback_info || {},
      currency: r.currency || "XOF",
      first_name: r.first_name,
      email: r.email,
      otp: r.otp || ""
    }, m = await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(o)
    });
    if (!m.ok)
      throw new Error("Payment request failed");
    return await m.json();
  } catch (d) {
    throw console.error("Payment request error:", d), d;
  }
}, We = async (r) => {
  const l = `https://api.feexpay.me/api/transactions/getrequesttopay/integration/${r}`;
  try {
    const e = await fetch(l);
    if (!e.ok)
      throw new Error("Status check failed");
    return await e.json();
  } catch (e) {
    throw console.error("Status check error:", e), e;
  }
}, Ge = async (r) => {
  const l = "https://api.feexpay.me/api/transactions/details";
  try {
    const a = {
      network: ne(r.country, r.network),
      amount: r.amount,
      shop: r.id
    }, d = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(a)
    });
    if (!d.ok)
      throw new Error("Failed to get transaction details");
    return await d.json();
  } catch (e) {
    throw console.error("Transaction details error:", e), e;
  }
}, je = async (r) => {
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
    const e = "229", a = r.phoneNumber.startsWith("+229") ? r.phoneNumber.substring(4) : r.phoneNumber.startsWith("229") ? r.phoneNumber.substring(3) : r.phoneNumber, d = {
      phoneNumber: `229${a}`,
      country: e,
      phoneNumberRight: a,
      amount: r.amount.toString(),
      currency: "XOF",
      description: r.description || "Paiement via FeexPay",
      email: r.email,
      first_name: r.first_name,
      otp: r.otp || "",
      reseau: "CORIS",
      shop: r.id,
      token: r.token,
      callback_info: r.callback_info || {}
    }, s = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
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
    baseAmount: d,
    network: s,
    country: y,
    paymentConfig: o,
    generateRandomId: m,
    fullName: f,
    email: _,
    setStateCallbacks: N
  } = l, {
    setTransactionReference: F,
    setPaymentStatus: x,
    setStatusMessage: T,
    setStatusModalOpen: L,
    setIsLoading: E
  } = N;
  E(!0);
  try {
    const O = a(), h = await Ne({
      phoneNumber: O,
      amount: d,
      // Envoyer le montant sans frais
      network: s,
      country: y,
      // Ajout du paramètre country
      description: o.description,
      customId: o.customId || m(),
      id: o.id,
      token: o.token,
      currency: o.currency || "XOF",
      callback_info: o.callback_info || {},
      first_name: f,
      email: _
    });
    if (h.statusCode === "10") {
      x("INSUFFICIENT_FUNDS"), T("Fonds insuffisants. Veuillez vérifier votre solde et réessayer."), L(!0), E(!1), o.callback && o.callback({
        reference: h.reference,
        status: "FAILED",
        phoneNumber: O,
        reseau: s,
        callback_info: o.callback_info || {},
        description: o.description,
        transaction_id: h.reference,
        message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
        amount: o.amount,
        currency: o.currency || "XOF",
        first_name: f,
        email: _
      }), o.error_callback_url && (window.location.href = `${o.error_callback_url}?ref=${h.reference}`);
      return;
    } else if (h.statusCode === "92") {
      x("FAILED"), T("La transaction a été annulée. Veuillez réessayer."), L(!0), E(!1), o.callback && o.callback({
        reference: h.reference,
        status: "FAILED",
        phoneNumber: O,
        reseau: s,
        callback_info: o.callback_info || {},
        description: o.description,
        transaction_id: h.reference,
        message: "La transaction a été annulée. Veuillez réessayer.",
        amount: o.amount,
        first_name: f,
        email: _,
        currency: o.currency || "XOF"
      }), o.error_callback_url && (window.location.href = `${o.error_callback_url}?ref=${h.reference}`);
      return;
    }
    return F(h.reference), be(h.reference, l, s, a), { reference: h.reference };
  } catch (O) {
    console.error("Payment error:", O), x("FAILED"), T("Le paiement a échoué. Veuillez réessayer."), L(!0), E(!1);
  }
}, be = (r, l, e, a) => {
  let d = 0;
  const s = 12;
  let y = !1, o = null;
  const {
    paymentConfig: m,
    setStateCallbacks: f,
    fullName: _,
    email: N
  } = l, {
    setPaymentStatus: F,
    setStatusMessage: x,
    setStatusModalOpen: T,
    setIsLoading: L
  } = f, E = (h, R, M) => {
    if (l.isCallbackCalledRef.current) return;
    l.isCallbackCalledRef.current = !0, o && clearTimeout(o), F(h), x(R), T(!0), L(!1);
    const B = {
      reference: r,
      status: M,
      phoneNumber: a(),
      reseau: e,
      callback_info: m.callback_info || {},
      description: m.description,
      transaction_id: r,
      message: R,
      amount: m.amount,
      currency: m.currency || "XOF",
      first_name: _,
      email: N
    };
    m.callback && m.callback(B);
    const P = M === "SUCCESSFUL" || M === "SUCCESS";
    P && m.callback_url ? window.location.href = `${m.callback_url}?ref=${r}` : !P && m.error_callback_url && (window.location.href = `${m.error_callback_url}?ref=${r}`);
  }, O = async () => {
    if (!y) {
      d++;
      try {
        const h = await We(r);
        if (h.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
          E("INSUFFICIENT_FUNDS", "Fonds insuffisants. Veuillez vérifier votre solde et réessayer.", "FAILED");
          return;
        } else if (h.reason === "PAYER NOT FOUND" || h.reason === "PAYER_NOT_FOUND") {
          E("FAILED", "Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.", "FAILED");
          return;
        }
        const R = h.status.toUpperCase();
        switch (R) {
          case "SUCCESSFUL":
          case "SUCCESS":
            E("SUCCESSFUL", "Paiement réussi !", R);
            break;
          case "FAILED":
            E("FAILED", "Le paiement a échoué. Veuillez réessayer.", "FAILED");
            break;
          case "INSUFFICIENT_FUNDS":
            E("INSUFFICIENT_FUNDS", "Fonds insuffisants. Veuillez vérifier votre solde et réessayer.", "INSUFFICIENT_FUNDS");
            break;
          case "TIMEOUT":
            E("TIMEOUT", "La vérification du paiement a expiré.", "TIMEOUT");
            break;
          case "PENDING":
            d >= s ? E("TIMEOUT", "La vérification du paiement a expiré. Veuillez vérifier votre compte.", "TIMEOUT") : o = setTimeout(O, 1e4);
            break;
          default:
            d >= s && E("TIMEOUT", "Statut de transaction inconnu après plusieurs tentatives.", "TIMEOUT");
            break;
        }
      } catch (h) {
        console.error(`Status check failed for ref ${r}:`, h), d >= s && E("TIMEOUT", "La vérification du paiement a échoué après plusieurs tentatives.", "TIMEOUT");
      }
    }
  };
  return O(), () => {
    o && clearTimeout(o), y = !0;
  };
}, $e = ({ id: r, onClose: l }) => {
  const [e, a] = g(null);
  return W(() => {
    (async () => {
      try {
        const s = await xe(r);
        a(s);
      } catch (s) {
        console.error("Erreur de récupération du id :", s);
      }
    })();
  }, [r]), /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-4 py-2 border-b border-gray-200", children: [
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("img", { src: "https://api.feexpay.me/api/static/feexpay_logo-h.png", width: "100", alt: "Logo" }) }),
    /* @__PURE__ */ t("div", { className: "text-right text-xs text-gray-700 ", children: e && /* @__PURE__ */ i(Z, { children: [
      /* @__PURE__ */ i("div", { className: "font-semibold", children: [
        "MARCHAND: ",
        e.name
      ] }),
      /* @__PURE__ */ i("div", { className: "text-xs text-gray-500", children: [
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
}, Xe = ({ isOpen: r, onClose: l }) => {
  var de;
  const { paymentConfig: e } = ye(), [a, d] = g(() => e.case && ["MOBILE", "CARD", "WALLET"].includes(e.case) ? e.case : "MOBILE"), [s, y] = g("BENIN"), [o, m] = g("MTN"), [f, _] = g(""), [N, F] = g(""), [x, T] = g(""), [L, E] = g("VISA"), [O, h] = g(0), [R, M] = g(0), [B, P] = g(0), [G, V] = g(0), [z, U] = g(""), [Ee, b] = g(!1), [Ce, k] = g("PENDING"), [ve, C] = g(""), [K, S] = g(!1), [Oe, j] = g(!1), [Ie, we] = g(""), [ae, se] = g(null), $ = ee(!1), oe = ee(null), J = te((n, c, p, I) => {
    const v = Pe(n, c, p, I || a, L);
    if (P(v), M(n + v), h(n), a === "CARD" && (L === "VISA" || L === "MASTERCARD"))
      V(4.5);
    else {
      const D = H[c];
      D && D[p] ? V(D[p] * 100) : V(0);
    }
  }, [a, L]), A = te(async (n, c, p, I) => {
    try {
      const u = I || a, v = await Ge({
        network: p,
        country: c,
        amount: n,
        id: e.id,
        token: e.token
      });
      if (v && v.iffees) {
        let D = !1;
        if (n <= 30) {
          const w = H[c];
          w && w[p] && w[p] > 0 && (P(1), M(n + 1), V(w[p] * 100), D = !0);
        }
        if (!D) {
          if (v.total !== void 0) {
            const w = v.total - n;
            P(w), M(v.total);
          } else
            J(n, c, p, u);
          if (u === "CARD")
            V(4.5);
          else {
            const w = H[c];
            w && w[p] ? V(w[p] * 100) : V(0);
          }
        }
      } else
        P(0), M(n), V(0);
      h(n);
    } catch (u) {
      console.error("Erreur lors de la récupération des détails de transaction:", u), J(n, c, p, I);
    }
  }, [a, e.id, e.token, J]);
  W(() => {
    e.amount && (h(e.amount), A(e.amount, s, o));
  }, [e, s, o, A]), W(() => {
    a === "WALLET" && (s === "BENIN" ? (m("CORIS"), e.amount && A(e.amount, s, "CORIS", a)) : s === "COTE_D_IVOIRE" ? (m("WAVE"), e.amount && A(e.amount, s, "WAVE", a)) : (y("BENIN"), m("CORIS"), e.amount && A(e.amount, "BENIN", "CORIS", a)));
  }, []);
  const ie = (n) => {
    m(n), e.amount && A(e.amount, s, n);
  }, Se = () => {
    F(""), T(""), _(""), E("VISA");
  }, ke = (n) => {
    if (Se(), P(0), M(e.amount || 0), V(0), d(n), n === "WALLET")
      s === "BENIN" ? (m("CORIS"), e.amount && A(e.amount, s, "CORIS", n)) : s === "COTE_D_IVOIRE" ? (m("WAVE"), e.amount && A(e.amount, s, "WAVE", n)) : (y("BENIN"), m("CORIS"), e.amount && A(e.amount, "BENIN", "CORIS", n));
    else if (n === "MOBILE") {
      const c = re(s);
      c.length > 0 && (c.includes(o) || m(c[0]), e.amount && A(e.amount, s, o, n));
    } else n === "CARD" && e.amount && A(e.amount, s, o, n);
  }, le = (n) => {
    if (y(n), a === "WALLET")
      n === "BENIN" ? (m("CORIS"), e.amount && A(e.amount, n, "CORIS")) : n === "COTE_D_IVOIRE" && (m("WAVE"), e.amount && A(e.amount, n, "WAVE"));
    else {
      const c = re(n);
      m(c[0]), e.amount && A(e.amount, n, c[0]);
    }
  }, ce = (n) => {
    const c = n.target.value;
    if (a === "WALLET") {
      _(c);
      return;
    }
    if (s === "COTE_D_IVOIRE") {
      if (c.length >= 2) {
        const p = c.substring(0, 2), I = fe(p);
        console.log(`[DEBUG] CIV Prefix: ${p}, Detected Network: ${I}`), I && m(I);
      }
    } else if (s === "BENIN" && c.length >= 4) {
      const p = c.substring(0, 4), I = fe(p);
      I && m(I);
    }
    _(c);
  }, X = () => {
    if (!f) return f;
    let n = f.replace(/[^0-9]/g, ""), c = "";
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
  }, Le = (n) => {
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
  }, Ae = async (n) => {
    var I;
    if (n.preventDefault(), !Y())
      return;
    $.current = !1, S(!0);
    const c = ["MOOV CI", "ORANGE CI", "MOOV BF", "ORANGE BF", "FREE SN", "WAVE CI", "ORANGE SN"], p = ne(s, o);
    if (c.includes(p)) {
      try {
        const u = await Ne({
          phoneNumber: X(),
          amount: O,
          network: o,
          country: s,
          description: e.description || "Payment",
          customId: e.customId || "",
          id: e.id,
          token: e.token,
          currency: e.currency || "XOF",
          callback_info: e.callback_info || {},
          first_name: N || "",
          email: x || "",
          otp: ((I = oe.current) == null ? void 0 : I.value) || ""
        });
        if (u.payment_url && se(u.payment_url), u.reference)
          U(u.reference), q(u.reference);
        else if (!u.payment_url)
          throw new Error("La réponse de paiement est invalide.");
      } catch (u) {
        console.error("Payment error:", u), k("FAILED"), C("Le paiement a échoué. Veuillez réessayer."), b(!0);
      } finally {
        S(!1);
      }
      return;
    }
    try {
      if (a === "CARD") {
        const u = N.split(" "), v = u[0] || "", D = u.slice(1).join(" ") || "", w = await je({
          phone: f,
          amount: O,
          id: e.id,
          first_name: v,
          last_name: D,
          email: x,
          type_card: L,
          token: e.token,
          currency: e.currency || "XOF"
        });
        w && w.reference ? (U(w.reference), q(w.reference)) : (k("FAILED"), C("La demande de paiement par carte a échoué. Veuillez réessayer."), b(!0), S(!1));
      } else if (a === "MOBILE") {
        const u = await pe(
          n,
          {
            phoneNumber: f,
            baseAmount: O,
            network: o,
            country: s,
            paymentConfig: e,
            transactionReference: z,
            fullName: N,
            email: x,
            generateRandomId: ue,
            isCallbackCalledRef: $,
            setStateCallbacks: {
              setTransactionReference: U,
              setPaymentStatus: k,
              setStatusMessage: C,
              setStatusModalOpen: b,
              setIsLoading: S
            }
          },
          Y,
          X
        );
        u && u.reference && q(u.reference);
      } else if (a === "WALLET")
        if (s === "BENIN" && o === "CORIS")
          try {
            const v = N.split(" ")[0] || "", D = f.startsWith("+229") ? f : `+229${f}`, w = await he({
              phoneNumber: D,
              amount: O,
              id: e.id,
              email: x,
              first_name: v,
              description: "Paiement via FeexPay",
              token: e.token,
              currency: e.currency || "XOF",
              callback_info: e.callback_info || {},
              network: o,
              country: s,
              customId: e.customId || ""
            });
            w.statusCode === "201" ? (we(w.reference), j(!0), S(!1)) : (k("FAILED"), C("La demande de paiement a échoué. Veuillez réessayer."), b(!0), S(!1));
          } catch (u) {
            console.error("Error in Coris Wallet payment:", u), k("FAILED"), C("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), b(!0), S(!1);
          }
        else {
          const v = await pe(n, {
            phoneNumber: f,
            baseAmount: O,
            network: o,
            country: s,
            paymentConfig: e,
            transactionReference: z,
            generateRandomId: ue,
            fullName: N,
            email: x,
            isCallbackCalledRef: $,
            setStateCallbacks: {
              setTransactionReference: U,
              setPaymentStatus: k,
              setStatusMessage: C,
              setStatusModalOpen: b,
              setIsLoading: S
            }
          }, Y, X);
          v && v.reference && q(v.reference);
        }
    } catch (u) {
      console.error("Error in payment submission:", u), k("FAILED"), C("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), b(!0), S(!1);
    }
  }, Y = () => {
    const n = e.fields_to_hide || [];
    if (a === "MOBILE" || a === "WALLET") {
      if (!n.includes("name") && !N.trim())
        return C("Veuillez entrer votre nom complet"), b(!0), !1;
      if (!n.includes("email") && (!x.trim() || !x.includes("@")))
        return C("Veuillez entrer une adresse email valide"), b(!0), !1;
      if (!f.trim() || f.length < 8)
        return C("Veuillez entrer un numéro de téléphone valide"), b(!0), !1;
      if (a === "WALLET" && s !== "BENIN" && s !== "COTE_D_IVOIRE")
        return C("Seuls le Bénin (Coris) et la Côte d'Ivoire (Wave) sont supportés pour les paiements Wallet"), b(!0), !1;
    } else if (a === "CARD") {
      if (!N || N.trim().split(" ").length < 2)
        return C("Veuillez entrer votre nom et prénom complets"), k("FAILED"), b(!0), !1;
      if (!x || !x.includes("@"))
        return C("Veuillez entrer une adresse email valide"), k("FAILED"), b(!0), !1;
      if (!f)
        return C("Veuillez entrer un numéro de téléphone valide"), k("FAILED"), b(!0), !1;
    }
    return !0;
  }, ue = () => `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`, _e = async (n) => {
    S(!0);
    try {
      const p = N.split(" ")[0] || "", I = f.startsWith("+229") ? f : `+229${f}`, u = await he({
        phoneNumber: I,
        amount: O,
        id: e.id,
        email: x,
        first_name: p,
        description: "Paiement via FeexPay",
        otp: n,
        token: e.token,
        currency: e.currency || "XOF",
        callback_info: e.callback_info || {},
        network: o,
        country: s,
        customId: e.customId || ""
      });
      if (j(!1), u.status === "FAILED") {
        k("FAILED"), C(u.message ?? "Le paiement a échoué."), b(!0), S(!1), e.callback && e.callback({
          reference: u.reference ?? "",
          status: "FAILED",
          phoneNumber: I,
          reseau: o,
          callback_info: e.callback_info || {},
          description: e.description ?? "",
          transaction_id: u.reference ?? "",
          message: u.message ?? "Le paiement a échoué.",
          amount: e.amount,
          currency: e.currency || "XOF",
          first_name: N,
          email: x
        }), e.error_callback_url && (window.location.href = `${e.error_callback_url}?ref=${u.reference}`);
        return;
      }
      if (u.reference)
        u.status && (u.status.toUpperCase() === "SUCCESSFUL" || u.status.toUpperCase() === "SUCCESS") ? (k("SUCCESSFUL"), C("Paiement effectué avec succès!"), b(!0), S(!1), e.onPaymentSuccess && e.onPaymentSuccess({ status: "SUCCESSFUL", reference: u.reference, message: "Paiement effectué avec succès!" }), e.callback_url && setTimeout(() => {
          window.location.href = `${e.callback_url}?ref=${u.reference}`;
        }, 2e3)) : (k("FAILED"), C(u.message || "La transaction a échoué. Veuillez réessayer."), b(!0), S(!1), e.onPaymentFailure && e.onPaymentFailure({ status: "FAILED", reference: u.reference, message: u.message || "La transaction a échoué. Veuillez réessayer." }), e.error_callback_url && setTimeout(() => {
          window.location.href = `${e.error_callback_url}?ref=${u.reference}`;
        }, 2e3));
      else {
        const v = u.message || "La confirmation du paiement a échoué. Veuillez réessayer.";
        k("FAILED"), C(v), b(!0), S(!1), e.onPaymentFailure && e.onPaymentFailure({ status: "FAILED", message: v });
      }
    } catch (c) {
      console.error("Error in OTP submission:", c);
      const p = "Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer.";
      k("FAILED"), C(p), b(!0), S(!1), j(!1), e.onPaymentFailure && e.onPaymentFailure({ status: "FAILED", message: p });
    }
  }, q = (n) => {
    be(n, {
      paymentConfig: e,
      fullName: N,
      email: x,
      isCallbackCalledRef: $,
      setStateCallbacks: {
        setTransactionReference: U,
        setPaymentStatus: k,
        setStatusMessage: C,
        setStatusModalOpen: b,
        setIsLoading: S
      }
    }, o, X);
  };
  return r ? /* @__PURE__ */ i("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: [
    /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col", children: [
      ae && /* @__PURE__ */ i("div", { className: "absolute inset-0 bg-white z-10 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => se(null),
            className: "absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none",
            "aria-label": "Fermer la passerelle de paiement",
            children: /* @__PURE__ */ t("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ t(
          "iframe",
          {
            src: ae,
            className: "w-full h-full border-0",
            title: "Payment Gateway",
            allow: "payment"
          }
        )
      ] }),
      /* @__PURE__ */ t($e, { id: e.id, onClose: l }),
      /* @__PURE__ */ i("div", { className: "p-6 overflow-y-auto flex-grow", children: [
        /* @__PURE__ */ t("p", { className: "text-sm text-gray-600 text-center mb-4", children: "Remplissez les champs suivants pour effectuer votre paiement" }),
        !e.case && /* @__PURE__ */ t("div", { className: "flex justify-center mb-6 border-b pb-4 w-fit gap-2", children: [
          { label: "Mobile Money", value: "MOBILE", icon: /* @__PURE__ */ i("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#D45D00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ t("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
            /* @__PURE__ */ t("line", { x1: "12", y1: "18", x2: "12", y2: "18" })
          ] }) },
          { label: "Carte Bancaire", value: "CARD", icon: /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: [
            /* @__PURE__ */ t("path", { d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" }),
            /* @__PURE__ */ t("path", { fillRule: "evenodd", d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z", clipRule: "evenodd" })
          ] }) },
          { label: "Wallet", value: "WALLET", icon: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ t("path", { fillRule: "evenodd", d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z", clipRule: "evenodd" }) }) }
        ].map(({ label: n, value: c, icon: p }) => /* @__PURE__ */ i(
          "div",
          {
            className: `flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${a === c ? "bg-[#fff7ed] border-[#D45D00]" : "bg-white border-[#D45D00]"}`,
            onClick: () => ke(c),
            children: [
              /* @__PURE__ */ t("div", { className: "w-8 h-8 rounded-full flex items-center justify-center mb-1", children: p }),
              /* @__PURE__ */ t("span", { className: "text-xs font-medium", children: n })
            ]
          },
          c
        )) }),
        /* @__PURE__ */ i("div", { className: "space-y-6", children: [
          !((e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name")) && a !== "CARD" ? /* @__PURE__ */ i("div", { className: "space-y-4", children: [
            /* @__PURE__ */ i("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ t("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: "1" }),
              "Informations Personnelles"
            ] }),
            !(e.fields_to_hide || []).includes("name") && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              "input",
              {
                type: "text",
                placeholder: "Nom et Prénoms",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: N,
                onChange: (n) => F(n.target.value)
              }
            ) }),
            !(e.fields_to_hide || []).includes("email") && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: x,
                onChange: (n) => T(n.target.value)
              }
            ) })
          ] }) : null,
          /* @__PURE__ */ i("div", { className: "space-y-4", children: [
            /* @__PURE__ */ i("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ t("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: a === "CARD" || (e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name") ? "1" : "2" }),
              a === "CARD" ? "Paiement par Carte Bancaire" : "Méthodes de paiement"
            ] }),
            a === "MOBILE" && /* @__PURE__ */ i(Z, { children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Me,
                  {
                    selectedCountry: s,
                    onChange: le
                  }
                ) }),
                /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Ve,
                  {
                    selectedNetwork: o,
                    onChange: ie,
                    country: s
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex", children: [
                /* @__PURE__ */ t("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-gray-600 text-xs", children: Le(s) }) }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: f,
                    onChange: ce
                  }
                )
              ] }),
              s === "SENEGAL" && o === "ORANGE" && /* @__PURE__ */ i(Z, { children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "text",
                    ref: oe,
                    id: "otp",
                    placeholder: "L’otp de validation",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                  }
                ),
                /* @__PURE__ */ t("span", { className: "text-xs text-gray-900", children: "L’otp de validation de la transaction obtenu en tapant #144#391# sur votre téléphone" })
              ] })
            ] }),
            a === "CARD" && /* @__PURE__ */ i("div", { className: "space-y-4", children: [
              /* @__PURE__ */ t("p", { className: "text-red-500 text-md", children: "Les paiements par cartes sont momentanément indisponibles." }),
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Prénom" }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      type: "text",
                      placeholder: "Prénom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: N.split(" ")[0] || "",
                      onChange: (n) => {
                        const c = N.split(" ").slice(1).join(" ");
                        F(`${n.target.value} ${c}`.trim());
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Nom" }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      type: "text",
                      placeholder: "Nom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: N.split(" ").slice(1).join(" ") || "",
                      onChange: (n) => {
                        const c = N.split(" ")[0] || "";
                        F(`${c} ${n.target.value}`.trim());
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "email",
                    placeholder: "exemple@email.com",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: x,
                    onChange: (n) => T(n.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Téléphone" }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone avec indicatif",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: f,
                    onChange: (n) => _(n.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Type de carte" }),
                /* @__PURE__ */ i(
                  "select",
                  {
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: L,
                    onChange: (n) => E(n.target.value),
                    children: [
                      /* @__PURE__ */ t("option", { value: "VISA", children: "VISA" }),
                      /* @__PURE__ */ t("option", { value: "MASTERCARD", children: "MASTERCARD" })
                    ]
                  }
                )
              ] })
            ] }),
            a === "WALLET" && /* @__PURE__ */ i(Z, { children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pays" }),
                  /* @__PURE__ */ i(
                    "select",
                    {
                      value: s,
                      onChange: (n) => le(n.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      children: [
                        /* @__PURE__ */ t("option", { value: "BENIN", children: "🇧🇯 Bénin" }),
                        /* @__PURE__ */ t("option", { value: "COTE_D_IVOIRE", children: "🇨🇮 Côte d'Ivoire" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Réseau" }),
                  /* @__PURE__ */ i(
                    "select",
                    {
                      value: o,
                      onChange: (n) => ie(n.target.value),
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
              /* @__PURE__ */ i("div", { className: "flex", children: [
                /* @__PURE__ */ t("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-gray-600 text-sm", children: s === "BENIN" ? "+229" : s === "COTE_D_IVOIRE" ? "+225" : "" }) }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: f,
                    onChange: ce
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "bg-gray-50 p-4 rounded-md", children: [
              /* @__PURE__ */ i("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ t("span", { className: "text-sm text-gray-600", children: "Montant :" }),
                /* @__PURE__ */ i("span", { className: "text-sm font-medium", children: [
                  (de = e.amount) == null ? void 0 : de.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ t("span", { className: "text-sm text-gray-600", children: "Frais* :" }),
                /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: B > 0 ? `${B.toLocaleString("fr-FR")} ${e.currency}` : `0 ${e.currency}` })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex justify-between font-bold", children: [
                /* @__PURE__ */ t("span", { children: "Montant Total à payer :" }),
                /* @__PURE__ */ i("span", { children: [
                  R.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-2", children: B > 0 ? `*Les frais de transaction sont de ${G.toFixed(1).replace(".", ",")}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction." })
            ] }),
            /* @__PURE__ */ t("div", { className: "pt-2", children: /* @__PURE__ */ i("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => l(),
                  className: "w-1/3 bg-gray-200 hover:bg-gray-300 text-primary-blue font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
                  children: "Retour"
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  onClick: Ae,
                  disabled: K,
                  className: `w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${K ? "opacity-70 cursor-not-allowed" : ""}`,
                  children: [
                    K ? /* @__PURE__ */ i("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ t("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                      /* @__PURE__ */ t("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                    ] }) : null,
                    "Payer ",
                    R.toLocaleString("fr-FR"),
                    " ",
                    e.currency
                  ]
                }
              )
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "mt-6 text-center text-xs text-gray-500 flex-shrink-0 bg-gray-50 w-full p-2", children: [
          /* @__PURE__ */ t("p", { className: "mt-2", children: "Paiements sécurisés par FeexPay" }),
          /* @__PURE__ */ i("p", { className: "mt-2", children: [
            "En payant par ce plugin, vous acceptez les ",
            /* @__PURE__ */ t("a", { className: "text-blue-900", style: { textDecoration: "underline" }, target: "_blank", href: "https://feexpay.me/fr/terms-and-conditions", children: "conditions générales d'utilisation de FeexPay" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(
      De,
      {
        isOpen: Ee,
        onClose: () => b(!1),
        status: Ce,
        message: ve
      }
    ),
    /* @__PURE__ */ t(
      Be,
      {
        isOpen: Oe,
        onClose: () => {
          j(!1), S(!1);
        },
        onSubmit: _e,
        reference: Ie
      }
    )
  ] }) : null;
}, Ke = ({
  amount: r,
  description: l,
  id: e,
  token: a,
  callback_url: d,
  mode: s = "LIVE",
  customId: y,
  fields_to_hide: o,
  callback: m,
  currency: f = "XOF",
  case: _,
  callback_info: N,
  error_callback_url: F,
  // custom_button = false,
  buttonText: x = `Payer ${r} ${f}`,
  buttonClass: T
}) => {
  const [L, E] = g(!1), { setPaymentConfig: O } = ye(), h = ee(null), [R, M] = g(!1), [B, P] = g(null);
  W(() => {
    (async () => {
      try {
        await xe(e), M(!0);
      } catch {
        P("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
      }
    })();
  }, [e]);
  const G = te(() => {
    O({
      amount: r,
      description: l,
      id: e,
      token: a,
      callback_url: d,
      mode: s,
      customId: y,
      fields_to_hide: o,
      callback: m,
      currency: f,
      case: _,
      callback_info: N,
      error_callback_url: F
    }), E(!0);
  }, [
    r,
    l,
    e,
    a,
    d,
    s,
    y,
    o,
    m,
    f,
    _,
    N,
    F,
    O
  ]);
  return W(() => {
    const z = h.current;
    if (!z) return;
    const U = () => {
      G();
    };
    return z.addEventListener("feexpay:trigger", U), () => {
      z.removeEventListener("feexpay:trigger", U);
    };
  }, [G]), /* @__PURE__ */ i("div", { ref: h, children: [
    B ? /* @__PURE__ */ t("p", { className: "text-red-600 text-sm mb-2", children: B }) : R && // !custom_button &&
    /* @__PURE__ */ t(
      "button",
      {
        onClick: G,
        className: T || "bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
        children: x
      }
    ),
    L && /* @__PURE__ */ t(
      Xe,
      {
        isOpen: L,
        onClose: () => {
          E(!1);
        }
      }
    )
  ] });
};
export {
  Ke as FeexPayButton,
  He as FeexPayProvider
};
