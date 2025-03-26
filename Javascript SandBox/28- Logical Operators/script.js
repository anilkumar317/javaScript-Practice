console.log(10 > 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 15);

// && - will return the first falsy value or the last value

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const post = ['Post One', 'Post Two'];
post.length > 0 && console.log(post[0]);

// || - will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;
console.log(b);

//  ?? - Returns rightside operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;
c = console.log(c);
