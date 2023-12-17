import { createStore } from "./react-redux/core.js";
import reducer from "./reducer.js";
import withLogger from "./react-redux/until/logger.js";

const { attach, connect, dispatch } = createStore(withLogger(reducer));

window.dispatch = dispatch;

export { attach, connect };
