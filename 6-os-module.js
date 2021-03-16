const os = require('os');

// user info
const user = os.userInfo();
console.log(user);

//system upTime
console.log(`system up time is ${os.uptime()} seconds`);

// os properties

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemo: os.totalmem(),
  freeMemo: os.freemem(),
};
console.log(currentOs);
