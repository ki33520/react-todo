'use strict';
var React = require("react");
var ReactDOMServer = require("react-dom/server");

var util = {
    getSharedComponent: function(componentName, entryFile) {
        entryFile = entryFile || "app.jsx";
        console.log("../../shared/chunk/" + componentName + "/" + entryFile)
        return React.createFactory(require("../../shared/chunk/" + componentName + "/" + entryFile));
    },
    getMarkupByComponent: function(component) {
        return ReactDOMServer.renderToString(component);
    }
}

module.exports = util;