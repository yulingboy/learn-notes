import { VPTheme } from "@vue/theme";
import { h } from "vue";
import NavbarTitle from "./components/NavbarTitle.vue";

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {
      "navbar-title": () => h(NavbarTitle)
    });
  },
};
