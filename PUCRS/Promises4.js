let p = new Promise(() => {}); 
setTimeout(console.log, 0, p); // Promise <pending>

let p1 = new Promise((resolve, reject) => resolve()); 
setTimeout(console.log, 0, p1); // Promise <resolved>