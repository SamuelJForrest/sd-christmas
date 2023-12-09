import "bootstrap/dist/css/bootstrap.css";
import "./reset.css";
import "./app.css";
import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app"),
});

export default app;
