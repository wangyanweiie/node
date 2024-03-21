const serverModule = require("./server");
const relateRoute = require("./route");
const relateAPIRoute = require("./api");

serverModule.useRoute(relateRoute);
serverModule.useRoute(relateAPIRoute);

serverModule.handleStart();
