//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
const wait = "wait 5 sec";
console.log(wait);

i = 1;
setTimeout(() => {
  console.log("ready?");
  let rocket = setInterval(() => {
    ++i;
    console.log("🚀");
    if (i > 10) {
      clearInterval(rocket);
    }
  }, 1000);
}, 5000);
