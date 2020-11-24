import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import slides from "./data.js";

ReactDOM.render(<App slides={slides} />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { connect } from "./redux/store";
// import App from "./components/App";

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App slides={props.slides}/>
// 	</Provider>,
// 	document.getElementById("root")
// );

// const mapStateToProps = (store) => {
// 	return {
// 		slideNo: store.slideReducer.slideNo,
// 		slides: store.slideReducer.slides
// 	};
// };

// export default connect(mapStateToProps, null)(App);
