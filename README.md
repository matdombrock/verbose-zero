# VERBOSE-ZERO
A simple, dependency-free verbose Javascript logging tool.

Does not require NodeJS but works well with it.

# INSTALL
```bash
# stable
npm install verbose-zero

# latest
npm install @mdombrock/verbose-zero
```
# USAGE
```js
//require verbose-zero
const v = require('verbose-zero');
//log a message
v.log("This is a message");
//log multiple messages with one line by sending an array to logm()
v.logm(["This is a multi-part message",Date.now()]);
```
# TOGGLING VERBOSE OUTPUT
Verbose logging is on by default. You can disable or re-enable it at run-time.
```js
//disable verbose logging
v.disable();
//re-enable verbose logging
v.enable();
```
