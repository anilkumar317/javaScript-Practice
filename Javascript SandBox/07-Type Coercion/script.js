let x;

x = 5 + '5';
x = 5 + Number('5');

x = 5 * '5';
x = '5' ** '5';
// Here null was converted to Zero
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);
// Here true has been converted as '1'
x = 5 + true;
// false has been converted as '0'
x = 5 + false;
x = 5 + undefined;
console.log(x, typeof x);
