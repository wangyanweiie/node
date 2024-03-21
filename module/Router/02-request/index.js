const serverModule = require("./server");
const relateRoute = require("./route");
const relateAPI = require("./api");

serverModule.useRoute(relateRoute);
serverModule.useRoute(relateAPI);

serverModule.handleStart();
