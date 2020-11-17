(function () {
      "use strict";

      var express = require("express"),
            request = require("request"),
            endpoints = require("../endpoints"),
            helpers = require("../../helpers"),
            app = express();

      app.get("/catalogue/images*", function (req, res, next) {
            console.log("GET /catalogue/images* .... received");
            var url = endpoints.catalogueUrl + req.url.toString();
            console.log("  url: ", url);
            request
                  .get(url)
                  .on("error", function (e) {
                        next(e);
                  })
                  .pipe(res);
      });

      app.get("/catalogue*", function (req, res, next) {
            //console.log("GET /catalogue*  .... received");
            //console.log("  endpoints.catalogueUrl: ", endpoints.catalogueUrl);
            //console.log("  req.url.toString(): ", req.url.toString());
            helpers.simpleHttpRequest(
                  endpoints.catalogueUrl + req.url.toString(),
                  res,
                  next
            );
      });

      app.get("/tags", function (req, res, next) {
            //console.log("GET /tags .... received");
            helpers.simpleHttpRequest(endpoints.tagsUrl, res, next);
      });

      module.exports = app;
})();
