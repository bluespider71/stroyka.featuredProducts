import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@4.6/dist/css/bootstrap.min.css";

import { createElement } from "lwc";
import App from "./app";

export const story = () => createElement("c-app", { is: App });
