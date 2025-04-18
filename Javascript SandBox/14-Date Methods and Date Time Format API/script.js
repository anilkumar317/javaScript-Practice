let x;

let d = new Date();

x = d.toDateString();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth()+1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getMilliseconds();

x =`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);

x = Intl.DateTimeFormat('default',{month:'long'}).format(d);


x = d.toLocaleString('default',
     {  
        weekday: 'long',
        year: 'numeric',
        date: 'long',
        month:'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        milliseconds: 'numeric',

     });



console.log(x, typeof x);
