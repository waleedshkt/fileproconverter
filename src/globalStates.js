import { hookstate as createState } from "@hookstate/core";

/* export const isAuth = createState(false);

export const subscription = createState({
    subscribed: false, 
    lastInvoiceDate: null,
    cardEnding: ""
}); */

export const selection = createState({
    from: "",
    to: "",
    files: []
});

export const misc = createState({
    isLoading: false, 
    message: { type: "error", content: "" }
});