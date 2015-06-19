function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./deep/foo"));
__export(require("./deep/deeper/bar"));
exports.bas = "123";
