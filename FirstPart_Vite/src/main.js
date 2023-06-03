import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import InitialBackground from "./components/ui/InitialBackground.vue";
import MainBackground from "./components/ui/MainBackground.vue";
import ProgressBar from "./components/ui/ProgressBar.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseDialog", BaseDialog);
app.component("BaseSpinner", BaseSpinner);
app.component("InitialBackground", InitialBackground);
app.component("MainBackground", MainBackground);
app.component("ProgressBar", ProgressBar);

app.mount("#app");
