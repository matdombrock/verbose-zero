# VERBOSE-ZERO
A simple, dependency-free verbose Javascript logging tool.

# INSTALL
```bash
npm install @mdombrock/verbose-zero
```
# USAGE
```js
//require verbose-zero
const v = require('verbose-zero');
//log a message
v.log("This is a message");
//log multiple messages with one line by sending an array to logm()
v.logm(["This is a multi part message",Date.now()]);
```
