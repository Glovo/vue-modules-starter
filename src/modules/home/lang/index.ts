import { LocaleMessageObject } from "vue-i18n";
import { Locales } from "@/modules/i18n/locales";

import en from "./en";
import ar from "./ar";

let langs: Map<string, LocaleMessageObject> = new Map();
langs.set(Locales.EN, en);
langs.set(Locales.AR, ar);

export { langs };
