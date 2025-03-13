import { hookstate as createState } from "@hookstate/core";

export const isAuth = createState(false);

export const subscription = createState({
    subscribed: false, 
    lastInvoiceDate: null,
    cardEnding: ""
});

export const misc = createState({
    isLoading: false, 
    message: { type: "error", content: "" }
});