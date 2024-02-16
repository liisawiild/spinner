const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

spinner.forEach((value, index) => {
  setTimeout(() => {
    process.stdout.write(value);
}, index * 100);
});

setTimeout (() => {
  console.log("\n");
}, 500);





