import { jsxs as i, jsx as t, Fragment as Z } from "react/jsx-runtime";
import { useEffect as z, useState as g, createContext as Fe, useContext as Te, useRef as te, useCallback as re } from "react";
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
] }), ee = {
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
}, he = (r, l) => me.MTN.includes(r) ? "MTN" : me.MOOV.includes(r) ? "MOOV" : ee.MTN.includes(r) ? "MTN" : ee.MOOV.includes(r) ? "MOOV" : ee.CELTIIS.includes(r) ? "CELTIIS" : null, ne = (r) => {
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
}, De = (r, l, e, s, d) => {
  if (s === "CARD" && (d === "VISA" || d === "MASTERCARD"))
    return Math.ceil(r * 0.045);
  const o = H[l];
  let y = 0;
  o && o[e] && (y = o[e]);
  const a = r * y;
  return Math.ceil(a);
}, ae = (r, l) => {
  const e = Re[r];
  return e && e[l] ? e[l] : l.toLowerCase();
}, Pe = ({
  selectedNetwork: r,
  onChange: l,
  country: e
}) => {
  const s = ne(e);
  return z(() => {
    s.length > 0 && !s.includes(r) && l(s[0]);
  }, [e, r, s, l]), /* @__PURE__ */ i("div", { className: "relative", children: [
    /* @__PURE__ */ t(
      "select",
      {
        value: r,
        onChange: (d) => l(d.target.value),
        className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
        children: s == null ? void 0 : s.map((d) => /* @__PURE__ */ t("option", { value: d, children: d.replace("_", " ") }, d))
      }
    ),
    /* @__PURE__ */ t("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ t("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
  ] });
}, Ve = ({
  isOpen: r,
  onClose: l,
  status: e,
  message: s
}) => {
  if (z(() => {
    if (e === "SUCCESSFUL" || e === "SUCCESS") {
      const a = setTimeout(() => {
        l();
      }, 5e3);
      return () => clearTimeout(a);
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
    /* @__PURE__ */ t("p", { className: "text-gray-600 mb-6", children: s }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: l,
        className: `w-full ${y()} text-white font-bold py-3 px-4 rounded-md transition-colors duration-300`,
        children: o()
      }
    )
  ] }) });
}, Ue = ({ isOpen: r, onClose: l, onSubmit: e }) => {
  const [s, d] = g(""), [o, y] = g(!1), a = (f) => {
    f.preventDefault(), y(!0), e(s);
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
      /* @__PURE__ */ i("form", { onSubmit: a, children: [
        /* @__PURE__ */ i("div", { className: "mb-4", children: [
          /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Code OTP" }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "text",
              value: s,
              onChange: (f) => d(f.target.value),
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
            disabled: o,
            className: "w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50",
            children: o ? "Traitement en cours..." : "Confirmer le paiement"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, ye = Fe(void 0), Ne = () => {
  const r = Te(ye);
  if (!r)
    throw new Error("useFeexPay must be used within a FeexPayProvider");
  return r;
}, Be = {
  amount: 0,
  description: "",
  id: "",
  token: "",
  mode: "SANDBOX"
}, He = ({ children: r }) => {
  const [l, e] = g(Be);
  return /* @__PURE__ */ t(ye.Provider, { value: { paymentConfig: l, setPaymentConfig: e }, children: r });
}, ze = async () => {
  try {
    return (await (await fetch("https://api.ipify.org?format=json")).json()).ip;
  } catch {
    return "unknown";
  }
}, be = async (r) => {
  if (r.mode === "SANDBOX")
    return {
      status: "SUCCESSFUL",
      message: "Payment successful (SANDBOX MODE)",
      transaction_id: "ref_c36484845FDVvgDFEGEGEGE_REACT",
      reference: "ref_c36484845FDVvgDFEGEGEGE_REACT"
    };
  if (r.mode == "LIVE" && !r.token.startsWith("fp_"))
    throw new Error("Invalid token");
  const l = ae(r.country, r.network), e = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  let s = r.phoneNumber.replace(/\+/g, "");
  if (s.length >= 8) {
    const d = s.slice(0, 3);
    s.startsWith(d + d) && (s = s.slice(d.length));
  }
  try {
    const d = window.location.origin, o = await ze();
    let y = r.description;
    r.network === "MTN" && (y = y.replace(/[^a-zA-Z0-9 ]/g, ""));
    const a = {
      phoneNumber: s,
      amount: r.amount,
      reseau: l,
      description: y,
      customId: r.customId,
      shop: r.id,
      token: r.token,
      merchant_domain: d,
      merchant_ip: o,
      payment_interface: "REACT",
      callback_info: r.callback_info || {},
      currency: r.currency || "XOF",
      first_name: r.first_name,
      email: r.email,
      otp: r.otp || ""
    }, f = await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(a)
    });
    if (!f.ok)
      throw new Error("Payment request failed");
    return await f.json();
  } catch (d) {
    throw console.error("Payment request error:", d), d;
  }
}, Ge = async (r) => {
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
    const s = {
      network: ae(r.country, r.network),
      amount: r.amount,
      shop: r.id
    }, d = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(s)
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
    }, s = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r.token}`
      },
      body: JSON.stringify(e)
    });
    if (!s.ok)
      throw new Error("Card payment request failed");
    return await s.json();
  } catch (e) {
    throw console.error("Card payment request error:", e), e;
  }
}, pe = async (r) => {
  if (r.mode === "SANDBOX")
    return {
      status: "SUCCESSFUL",
      message: "Payment successful (SANDBOX MODE)",
      transaction_id: "sandbox-tx-id-" + (/* @__PURE__ */ new Date()).getTime(),
      reference: r.customId || "sandbox-ref-" + (/* @__PURE__ */ new Date()).getTime()
      // Remplissez les autres champs de TransactionResponse avec des données factices si nécessaire
    };
  const l = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  let e = r.description;
  r.network === "MTN" && (e = e.replace(/[^a-zA-Z0-9 ]/g, ""));
  try {
    const s = "229", d = r.phoneNumber.startsWith("+229") ? r.phoneNumber.substring(4) : r.phoneNumber.startsWith("229") ? r.phoneNumber.substring(3) : r.phoneNumber, o = {
      phoneNumber: `229${d}`,
      country: s,
      phoneNumberRight: d,
      amount: r.amount,
      currency: "XOF",
      description: e,
      email: r.email,
      first_name: r.first_name,
      otp: r.otp || "",
      reseau: "CORIS",
      shop: r.id,
      token: r.token,
      callback_info: r.callback_info || {}
    }, y = await fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(o)
    });
    return {
      ...await y.json(),
      statusCode: y.status.toString()
    };
  } catch (s) {
    throw console.error("Wallet Coris payment request error:", s), s;
  }
}, Ee = async (r) => {
  const l = `https://api.feexpay.me/api/shop/${r}/get_shop`;
  try {
    const e = await fetch(l);
    if (!e.ok)
      throw new Error("Shop retrieval failed");
    return await e.json();
  } catch (e) {
    throw console.error("Shop retrieval error:", e), e;
  }
}, ge = async (r, l, e, s) => {
  if (r.preventDefault(), !e())
    return;
  const {
    baseAmount: d,
    network: o,
    country: y,
    paymentConfig: a,
    generateRandomId: f,
    fullName: h,
    email: _,
    setStateCallbacks: b
  } = l, {
    setTransactionReference: T,
    setPaymentStatus: N,
    setStatusMessage: F,
    setStatusModalOpen: L,
    setIsLoading: E
  } = b;
  E(!0);
  try {
    const x = s(), m = await be({
      mode: a.mode,
      phoneNumber: x,
      amount: d,
      // Envoyer le montant sans frais
      network: o,
      country: y,
      // Ajout du paramètre country
      description: a.description,
      customId: a.customId || f(),
      id: a.id,
      token: a.token,
      currency: a.currency || "XOF",
      callback_info: a.callback_info || {},
      first_name: h,
      email: _
    });
    if (m.status === "SUCCESSFUL") {
      N("SUCCESSFUL"), E(!1), a.callback && a.callback({
        ...m,
        status: "SUCCESSFUL",
        message: m.message ?? "Payment successful (SANDBOX)",
        transaction_id: m.transaction_id ?? `sandbox-tx-${Date.now()}`,
        reference: m.reference ?? "",
        reseau: o,
        phoneNumber: x,
        amount: d,
        currency: a.currency || "XOF",
        description: a.description || "",
        callback_info: a.callback_info || {},
        first_name: h || "",
        email: _ || ""
      });
      return;
    }
    if (m.statusCode === "10") {
      N("INSUFFICIENT_FUNDS"), F("Fonds insuffisants. Veuillez vérifier votre solde et réessayer."), L(!0), E(!1), a.callback && a.callback({
        reference: m.reference,
        status: "FAILED",
        phoneNumber: x,
        reseau: o,
        callback_info: a.callback_info || {},
        description: a.description,
        transaction_id: m.reference,
        message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
        amount: a.amount,
        currency: a.currency || "XOF",
        first_name: h,
        email: _
      }), a.error_callback_url && (window.location.href = `${a.error_callback_url}?ref=${m.reference}`);
      return;
    } else if (m.statusCode === "37") {
      N("FAILED"), F("Le montant est inférieur au minimum autorisé par l'opérateur."), L(!0), E(!1), a.callback && a.callback({
        reference: m.reference,
        status: "FAILED",
        phoneNumber: x,
        reseau: o,
        callback_info: a.callback_info || {},
        description: a.description,
        transaction_id: m.reference,
        message: "Le montant est inférieur au minimum autorisé par l'opérateur.",
        amount: a.amount,
        currency: a.currency || "XOF",
        first_name: h,
        email: _
      }), a.error_callback_url && (window.location.href = `${a.error_callback_url}?ref=${m.reference}`);
      return;
    } else if (m.statusCode === "92") {
      N("FAILED"), F("La transaction a été annulée. Veuillez réessayer."), L(!0), E(!1), a.callback && a.callback({
        reference: m.reference,
        status: "FAILED",
        phoneNumber: x,
        reseau: o,
        callback_info: a.callback_info || {},
        description: a.description,
        transaction_id: m.reference,
        message: "La transaction a été annulée. Veuillez réessayer.",
        amount: a.amount,
        first_name: h,
        email: _,
        currency: a.currency || "XOF"
      }), a.error_callback_url && (window.location.href = `${a.error_callback_url}?ref=${m.reference}`);
      return;
    }
    return T(m.reference), xe(m.reference, l, o, s), { reference: m.reference };
  } catch (x) {
    console.error("Payment error:", x), N("FAILED"), F("Le paiement a échoué. Veuillez réessayer."), L(!0), E(!1);
  }
}, xe = (r, l, e, s) => {
  let d = 0;
  const o = 12;
  let y = !1, a = null;
  const {
    paymentConfig: f,
    setStateCallbacks: h,
    fullName: _,
    email: b
  } = l, {
    setPaymentStatus: T,
    setStatusMessage: N,
    setStatusModalOpen: F,
    setIsLoading: L
  } = h, E = (m, R, M) => {
    if (l.isCallbackCalledRef.current) return;
    l.isCallbackCalledRef.current = !0, a && clearTimeout(a), T(m), N(R), F(!0), L(!1);
    const U = {
      reference: r,
      status: M,
      phoneNumber: s(),
      reseau: e,
      callback_info: f.callback_info || {},
      description: f.description,
      transaction_id: r,
      message: R,
      amount: f.amount,
      currency: f.currency || "XOF",
      first_name: _,
      email: b
    };
    f.callback && f.callback(U);
    const D = M === "SUCCESSFUL" || M === "SUCCESS";
    D && f.callback_url ? window.location.href = `${f.callback_url}?ref=${r}` : !D && f.error_callback_url && (window.location.href = `${f.error_callback_url}?ref=${r}`);
  }, x = async () => {
    if (!y) {
      d++;
      try {
        const m = await Ge(r);
        if (m.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
          E("INSUFFICIENT_FUNDS", "Fonds insuffisants. Veuillez vérifier votre solde et réessayer.", "FAILED");
          return;
        } else if (m.reason === "PAYER NOT FOUND" || m.reason === "PAYER_NOT_FOUND") {
          E("FAILED", "Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.", "FAILED");
          return;
        }
        const R = m.status.toUpperCase();
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
            d >= o ? E("TIMEOUT", "La vérification du paiement a expiré. Veuillez vérifier votre compte.", "TIMEOUT") : a = setTimeout(x, 1e4);
            break;
          default:
            d >= o && E("TIMEOUT", "Statut de transaction inconnu après plusieurs tentatives.", "TIMEOUT");
            break;
        }
      } catch (m) {
        console.error(`Status check failed for ref ${r}:`, m), d >= o && E("TIMEOUT", "La vérification du paiement a échoué après plusieurs tentatives.", "TIMEOUT");
      }
    }
  };
  return x(), () => {
    a && clearTimeout(a), y = !0;
  };
}, $e = ({ id: r, onClose: l }) => {
  const [e, s] = g(null);
  return z(() => {
    (async () => {
      try {
        const o = await Ee(r);
        s(o);
      } catch (o) {
        console.error("Erreur de récupération du id :", o);
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
  var fe;
  const { paymentConfig: e } = Ne(), [s, d] = g(() => e.case && ["MOBILE", "CARD", "WALLET"].includes(e.case) ? e.case : "MOBILE"), [o, y] = g("BENIN"), [a, f] = g("MTN"), [h, _] = g(""), [b, T] = g(""), [N, F] = g(""), [L, E] = g("VISA"), [x, m] = g(0), [R, M] = g(0), [U, D] = g(0), [j, P] = g(0), [G, B] = g(""), [Ce, C] = g(!1), [K, k] = g("PENDING"), [ve, v] = g(""), [J, S] = g(!1), [Oe, X] = g(!1), [Se, we] = g(""), [se, oe] = g(null), W = te(!1), ie = te(null), Y = re((n, u, p, w) => {
    const O = De(n, u, p, w || s, L);
    if (D(O), M(n + O), m(n), s === "CARD" && (L === "VISA" || L === "MASTERCARD"))
      P(4.5);
    else {
      const V = H[u];
      V && V[p] ? P(V[p] * 100) : P(0);
    }
  }, [s, L]), A = re(async (n, u, p, w) => {
    try {
      const c = w || s, O = await We({
        network: p,
        country: u,
        amount: n,
        id: e.id,
        token: e.token
      });
      if (O && O.iffees) {
        let V = !1;
        if (n <= 30) {
          const I = H[u];
          I && I[p] && I[p] > 0 && (D(1), M(n + 1), P(I[p] * 100), V = !0);
        }
        if (!V) {
          if (O.total !== void 0) {
            const I = O.total - n;
            D(I), M(O.total);
          } else
            Y(n, u, p, c);
          if (c === "CARD")
            P(4.5);
          else {
            const I = H[u];
            I && I[p] ? P(I[p] * 100) : P(0);
          }
        }
      } else
        D(0), M(n), P(0);
      m(n);
    } catch (c) {
      console.error("Erreur lors de la récupération des détails de transaction:", c), Y(n, u, p, w);
    }
  }, [s, e.id, e.token, Y]);
  z(() => {
    e.amount && (m(e.amount), A(e.amount, o, a));
  }, [e, o, a, A]), z(() => {
    s === "WALLET" && (o === "BENIN" ? (f("CORIS"), e.amount && A(e.amount, o, "CORIS", s)) : o === "COTE_D_IVOIRE" ? (f("WAVE"), e.amount && A(e.amount, o, "WAVE", s)) : (y("BENIN"), f("CORIS"), e.amount && A(e.amount, "BENIN", "CORIS", s)));
  }, []), z(() => {
    if (K === "SUCCESSFUL") {
      const n = setTimeout(() => {
        l();
      }, 1500);
      return () => clearTimeout(n);
    }
  }, [K, l]);
  const le = (n) => {
    f(n), e.amount && A(e.amount, o, n);
  }, Ie = () => {
    T(""), F(""), _(""), E("VISA");
  }, ke = (n) => {
    if (Ie(), D(0), M(e.amount || 0), P(0), d(n), n === "WALLET")
      o === "BENIN" ? (f("CORIS"), e.amount && A(e.amount, o, "CORIS", n)) : o === "COTE_D_IVOIRE" ? (f("WAVE"), e.amount && A(e.amount, o, "WAVE", n)) : (y("BENIN"), f("CORIS"), e.amount && A(e.amount, "BENIN", "CORIS", n));
    else if (n === "MOBILE") {
      const u = ne(o);
      u.length > 0 && (u.includes(a) || f(u[0]), e.amount && A(e.amount, o, a, n));
    } else n === "CARD" && e.amount && A(e.amount, o, a, n);
  }, ce = (n) => {
    if (y(n), s === "WALLET")
      n === "BENIN" ? (f("CORIS"), e.amount && A(e.amount, n, "CORIS")) : n === "COTE_D_IVOIRE" && (f("WAVE"), e.amount && A(e.amount, n, "WAVE"));
    else {
      const u = ne(n);
      f(u[0]), e.amount && A(e.amount, n, u[0]);
    }
  }, ue = (n) => {
    const u = n.target.value;
    if (s === "WALLET") {
      _(u);
      return;
    }
    if (o === "COTE_D_IVOIRE") {
      if (u.length >= 2) {
        const p = u.substring(0, 2), w = he(p);
        console.log(`[DEBUG] CIV Prefix: ${p}, Detected Network: ${w}`), w && f(w);
      }
    } else if (o === "BENIN" && u.length >= 4) {
      const p = u.substring(0, 4), w = he(p);
      w && f(w);
    }
    _(u);
  }, $ = () => {
    if (!h) return h;
    let n = h.replace(/[^0-9]/g, ""), u = "";
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
        return n;
    }
    return n.startsWith(u + u) && (n = n.slice(u.length)), n.startsWith(u) ? n : u + n;
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
  }, _e = async (n) => {
    var w;
    if (n.preventDefault(), !Q())
      return;
    W.current = !1, S(!0);
    const u = ["MOOV CI", "ORANGE CI", "MOOV BF", "ORANGE BF", "FREE SN", "WAVE CI", "ORANGE SN"], p = ae(o, a);
    if (u.includes(p)) {
      try {
        const c = await be({
          mode: e.mode,
          // Ajout du mode ici
          phoneNumber: $(),
          amount: x,
          network: a,
          country: o,
          description: e.description || "Payment",
          customId: e.customId || "",
          id: e.id,
          token: e.token,
          currency: e.currency || "XOF",
          callback_info: e.callback_info || {},
          first_name: b || "",
          email: N || "",
          otp: ((w = ie.current) == null ? void 0 : w.value) || ""
        });
        if (c.status === "SUCCESSFUL") {
          e.callback && !W.current && (e.callback({
            ...c,
            transaction_id: c.transaction_id ?? "sandbox-tx-id",
            message: c.message ?? "Payment successful",
            status: "SUCCESSFUL",
            reseau: a,
            phoneNumber: $(),
            amount: x,
            currency: e.currency || "XOF",
            description: e.description || "Payment",
            callback_info: e.callback_info || {},
            first_name: b || "",
            email: N || ""
          }), W.current = !0), S(!1), k("SUCCESSFUL");
          return;
        }
        if (c.payment_url && oe(c.payment_url), c.reference)
          B(c.reference), q(c.reference);
        else if (!c.payment_url)
          throw new Error("La réponse de paiement est invalide.");
      } catch (c) {
        console.error("Payment error:", c), k("FAILED"), v("Le paiement a échoué. Veuillez réessayer."), C(!0);
      } finally {
        S(!1);
      }
      return;
    }
    try {
      if (s === "CARD") {
        const c = b.split(" "), O = c[0] || "", V = c.slice(1).join(" ") || "", I = await je({
          phone: h,
          amount: x,
          id: e.id,
          first_name: O,
          last_name: V,
          email: N,
          type_card: L,
          token: e.token,
          currency: e.currency || "XOF"
        });
        I && I.reference ? (B(I.reference), q(I.reference)) : (k("FAILED"), v("La demande de paiement par carte a échoué. Veuillez réessayer."), C(!0), S(!1));
      } else if (s === "MOBILE") {
        const c = await ge(
          n,
          {
            phoneNumber: h,
            baseAmount: x,
            network: a,
            country: o,
            paymentConfig: e,
            transactionReference: G,
            fullName: b,
            email: N,
            generateRandomId: de,
            isCallbackCalledRef: W,
            setStateCallbacks: {
              setTransactionReference: B,
              setPaymentStatus: k,
              setStatusMessage: v,
              setStatusModalOpen: C,
              setIsLoading: S
            }
          },
          Q,
          $
        );
        c && c.reference && q(c.reference);
      } else if (s === "WALLET")
        if (o === "BENIN" && a === "CORIS")
          try {
            const O = b.split(" ")[0] || "", V = h.startsWith("+229") ? h : `+229${h}`, I = await pe({
              phoneNumber: V,
              amount: x,
              id: e.id,
              email: N,
              first_name: O,
              description: "Paiement via FeexPay",
              token: e.token,
              currency: e.currency || "XOF",
              callback_info: e.callback_info || {},
              network: a,
              country: o,
              customId: e.customId || ""
            });
            I.statusCode === "201" ? (we(I.reference), X(!0), S(!1)) : (k("FAILED"), v("La demande de paiement a échoué. Veuillez réessayer."), C(!0), S(!1));
          } catch (c) {
            console.error("Error in Coris Wallet payment:", c), k("FAILED"), v("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), C(!0), S(!1);
          }
        else {
          const O = await ge(n, {
            phoneNumber: h,
            baseAmount: x,
            network: a,
            country: o,
            paymentConfig: e,
            transactionReference: G,
            generateRandomId: de,
            fullName: b,
            email: N,
            isCallbackCalledRef: W,
            setStateCallbacks: {
              setTransactionReference: B,
              setPaymentStatus: k,
              setStatusMessage: v,
              setStatusModalOpen: C,
              setIsLoading: S
            }
          }, Q, $);
          O && O.reference && q(O.reference);
        }
    } catch (c) {
      console.error("Error in payment submission:", c), k("FAILED"), v("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."), C(!0), S(!1);
    }
  }, Q = () => {
    const n = e.fields_to_hide || [];
    if (s === "MOBILE" || s === "WALLET") {
      if (!n.includes("name") && !b.trim())
        return v("Veuillez entrer votre nom complet"), C(!0), !1;
      if (!n.includes("email") && (!N.trim() || !N.includes("@")))
        return v("Veuillez entrer une adresse email valide"), C(!0), !1;
      if (!h.trim() || h.length < 8)
        return v("Veuillez entrer un numéro de téléphone valide"), C(!0), !1;
      if (s === "WALLET" && o !== "BENIN" && o !== "COTE_D_IVOIRE")
        return v("Seuls le Bénin (Coris) et la Côte d'Ivoire (Wave) sont supportés pour les paiements Wallet"), C(!0), !1;
    } else if (s === "CARD") {
      if (!b || b.trim().split(" ").length < 2)
        return v("Veuillez entrer votre nom et prénom complets"), k("FAILED"), C(!0), !1;
      if (!N || !N.includes("@"))
        return v("Veuillez entrer une adresse email valide"), k("FAILED"), C(!0), !1;
      if (!h)
        return v("Veuillez entrer un numéro de téléphone valide"), k("FAILED"), C(!0), !1;
    }
    return !0;
  }, de = () => `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`, Ae = async (n) => {
    S(!0);
    try {
      const p = b.split(" ")[0] || "", w = h.startsWith("+229") ? h : `+229${h}`, c = await pe({
        phoneNumber: w,
        amount: x,
        id: e.id,
        email: N,
        first_name: p,
        description: "Paiement via FeexPay",
        otp: n,
        token: e.token,
        currency: e.currency || "XOF",
        callback_info: e.callback_info || {},
        network: a,
        country: o,
        customId: e.customId || ""
      });
      if (X(!1), c.status === "FAILED") {
        k("FAILED"), v(c.message ?? "Le paiement a échoué."), C(!0), S(!1), e.callback && e.callback({
          reference: c.reference ?? "",
          status: "FAILED",
          phoneNumber: w,
          reseau: a,
          callback_info: e.callback_info || {},
          description: e.description ?? "",
          transaction_id: c.reference ?? "",
          message: c.message ?? "Le paiement a échoué.",
          amount: e.amount,
          currency: e.currency || "XOF",
          first_name: b,
          email: N
        }), e.error_callback_url && (window.location.href = `${e.error_callback_url}?ref=${c.reference}`);
        return;
      }
      if (c.reference)
        c.status && (c.status.toUpperCase() === "SUCCESSFUL" || c.status.toUpperCase() === "SUCCESS") ? (k("SUCCESSFUL"), v("Paiement effectué avec succès!"), C(!0), S(!1), e.onPaymentSuccess && e.onPaymentSuccess({ status: "SUCCESSFUL", reference: c.reference, message: "Paiement effectué avec succès!" }), e.callback_url && setTimeout(() => {
          window.location.href = `${e.callback_url}?ref=${c.reference}`;
        }, 2e3)) : (k("FAILED"), v(c.message || "La transaction a échoué. Veuillez réessayer."), C(!0), S(!1), e.onPaymentFailure && e.onPaymentFailure({ status: "FAILED", reference: c.reference, message: c.message || "La transaction a échoué. Veuillez réessayer." }), e.error_callback_url && setTimeout(() => {
          window.location.href = `${e.error_callback_url}?ref=${c.reference}`;
        }, 2e3));
      else {
        const O = c.message || "La confirmation du paiement a échoué. Veuillez réessayer.";
        k("FAILED"), v(O), C(!0), S(!1), e.onPaymentFailure && e.onPaymentFailure({ status: "FAILED", message: O });
      }
    } catch (u) {
      console.error("Error in OTP submission:", u);
      const p = "Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer.";
      k("FAILED"), v(p), C(!0), S(!1), X(!1), e.onPaymentFailure && e.onPaymentFailure({ status: "FAILED", message: p });
    }
  }, q = (n) => {
    xe(n, {
      paymentConfig: e,
      fullName: b,
      email: N,
      isCallbackCalledRef: W,
      setStateCallbacks: {
        setTransactionReference: B,
        setPaymentStatus: k,
        setStatusMessage: v,
        setStatusModalOpen: C,
        setIsLoading: S
      }
    }, a, $);
  };
  return r ? /* @__PURE__ */ i("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: [
    /* @__PURE__ */ i("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col", children: [
      se && /* @__PURE__ */ i("div", { className: "absolute inset-0 bg-white z-10 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => oe(null),
            className: "absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none",
            "aria-label": "Fermer la passerelle de paiement",
            children: /* @__PURE__ */ t("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ t(
          "iframe",
          {
            src: se,
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
        ].map(({ label: n, value: u, icon: p }) => /* @__PURE__ */ i(
          "div",
          {
            className: `flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${s === u ? "bg-[#fff7ed] border-[#D45D00]" : "bg-white border-[#D45D00]"}`,
            onClick: () => ke(u),
            children: [
              /* @__PURE__ */ t("div", { className: "w-8 h-8 rounded-full flex items-center justify-center mb-1", children: p }),
              /* @__PURE__ */ t("span", { className: "text-xs font-medium", children: n })
            ]
          },
          u
        )) }),
        /* @__PURE__ */ i("div", { className: "space-y-6", children: [
          !((e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name")) && s !== "CARD" ? /* @__PURE__ */ i("div", { className: "space-y-4", children: [
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
                value: b,
                onChange: (n) => T(n.target.value)
              }
            ) }),
            !(e.fields_to_hide || []).includes("email") && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: N,
                onChange: (n) => F(n.target.value)
              }
            ) })
          ] }) : null,
          /* @__PURE__ */ i("div", { className: "space-y-4", children: [
            /* @__PURE__ */ i("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ t("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: s === "CARD" || (e.fields_to_hide || []).includes("email") && (e.fields_to_hide || []).includes("name") ? "1" : "2" }),
              s === "CARD" ? "Méthode de paiement" : "Méthodes de paiement"
            ] }),
            s === "MOBILE" && /* @__PURE__ */ i(Z, { children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Me,
                  {
                    selectedCountry: o,
                    onChange: ce
                  }
                ) }),
                /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Pe,
                  {
                    selectedNetwork: a,
                    onChange: le,
                    country: o
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex", children: [
                /* @__PURE__ */ t("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-gray-600 text-xs", children: Le(o) }) }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: h,
                    onChange: ue
                  }
                )
              ] }),
              o === "SENEGAL" && a === "ORANGE" && /* @__PURE__ */ i(Z, { children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "text",
                    ref: ie,
                    id: "otp",
                    placeholder: "L’otp de validation",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                  }
                ),
                /* @__PURE__ */ t("span", { className: "text-xs text-gray-900", children: "L’otp de validation de la transaction obtenu en tapant #144#391# sur votre téléphone" })
              ] })
            ] }),
            s === "CARD" && /* @__PURE__ */ i("div", { className: "space-y-4", children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Prénom" }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      type: "text",
                      placeholder: "Prénom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: b.split(" ")[0] || "",
                      onChange: (n) => {
                        const u = b.split(" ").slice(1).join(" ");
                        T(`${n.target.value} ${u}`.trim());
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
                      value: b.split(" ").slice(1).join(" ") || "",
                      onChange: (n) => {
                        const u = b.split(" ")[0] || "";
                        T(`${u} ${n.target.value}`.trim());
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
                    value: N,
                    onChange: (n) => F(n.target.value)
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
                    value: h,
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
            s === "WALLET" && /* @__PURE__ */ i(Z, { children: [
              /* @__PURE__ */ i("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ t("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pays" }),
                  /* @__PURE__ */ i(
                    "select",
                    {
                      value: o,
                      onChange: (n) => ce(n.target.value),
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
                      value: a,
                      onChange: (n) => le(n.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      disabled: !0,
                      children: [
                        o === "BENIN" && /* @__PURE__ */ t("option", { value: "CORIS", children: "CORIS" }),
                        o === "COTE_D_IVOIRE" && /* @__PURE__ */ t("option", { value: "WAVE", children: "WAVE" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex", children: [
                /* @__PURE__ */ t("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-gray-600 text-sm", children: o === "BENIN" ? "+229" : o === "COTE_D_IVOIRE" ? "+225" : "" }) }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: h,
                    onChange: ue
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "bg-gray-50 p-4 rounded-md", children: [
              /* @__PURE__ */ i("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ t("span", { className: "text-sm text-gray-600", children: "Montant :" }),
                /* @__PURE__ */ i("span", { className: "text-sm font-medium", children: [
                  (fe = e.amount) == null ? void 0 : fe.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ t("span", { className: "text-sm text-gray-600", children: "Frais* :" }),
                /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: U > 0 ? `${U.toLocaleString("fr-FR")} ${e.currency}` : `0 ${e.currency}` })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex justify-between font-bold", children: [
                /* @__PURE__ */ t("span", { children: "Montant Total à payer :" }),
                /* @__PURE__ */ i("span", { children: [
                  R.toLocaleString("fr-FR"),
                  " ",
                  e.currency
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-2", children: U > 0 ? `*Les frais de transaction sont de ${j.toFixed(1).replace(".", ",")}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction." })
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
                  onClick: _e,
                  disabled: J,
                  className: `w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${J ? "opacity-70 cursor-not-allowed" : ""}`,
                  children: [
                    J ? /* @__PURE__ */ i("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
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
      Ve,
      {
        isOpen: Ce,
        onClose: () => C(!1),
        status: K,
        message: ve
      }
    ),
    /* @__PURE__ */ t(
      Ue,
      {
        isOpen: Oe,
        onClose: () => {
          X(!1), S(!1);
        },
        onSubmit: Ae,
        reference: Se
      }
    )
  ] }) : null;
}, Ke = ({
  amount: r,
  description: l,
  id: e,
  token: s,
  callback_url: d,
  mode: o = "LIVE",
  customId: y,
  fields_to_hide: a,
  callback: f,
  currency: h = "XOF",
  case: _,
  callback_info: b,
  error_callback_url: T,
  // custom_button = false,
  buttonText: N = `Payer ${r} ${h}`,
  buttonClass: F
}) => {
  const [L, E] = g(!1), { setPaymentConfig: x } = Ne(), m = te(null), [R, M] = g(!1), [U, D] = g(null);
  z(() => {
    (async () => {
      try {
        await Ee(e), M(!0);
      } catch {
        D("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
      }
    })();
  }, [e]);
  const j = re(() => {
    x({
      amount: r,
      description: l,
      id: e,
      token: s,
      callback_url: d,
      mode: o,
      customId: y,
      fields_to_hide: a,
      callback: f,
      currency: h,
      case: _,
      callback_info: b,
      error_callback_url: T
    }), E(!0);
  }, [
    r,
    l,
    e,
    s,
    d,
    o,
    y,
    a,
    f,
    h,
    _,
    b,
    T,
    x
  ]);
  return z(() => {
    const G = m.current;
    if (!G) return;
    const B = () => {
      j();
    };
    return G.addEventListener("feexpay:trigger", B), () => {
      G.removeEventListener("feexpay:trigger", B);
    };
  }, [j]), /* @__PURE__ */ i("div", { ref: m, children: [
    U ? /* @__PURE__ */ t("p", { className: "text-red-600 text-sm mb-2", children: U }) : R && // !custom_button &&
    /* @__PURE__ */ t(
      "button",
      {
        onClick: j,
        className: F || "bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
        children: N
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
