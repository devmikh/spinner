const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    if (i === arr.length - 1) process.stdout.write(`\r${arr[i]}   \n`);
    else process.stdout.write(`\r${arr[i]}   `);
  }, delay);
  delay += 200;
}

