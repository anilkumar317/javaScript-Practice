const library = [
    {
          title :"The Road Ahead",
          author: "Bill Gates ",
          status: {
          own: true,
         reading: false,
         read: false
         },
    },

    { 
        title :" Steave Jobs",
        author: "Walter Isacson ",
        status: {
            own: true,
            reading: false,
            read: false
        },
    },  

     { 
            title :" Mock and Dorsey",
            author: "Suzane collin",
            status: {
                own: true,
                reading: false,
                read: false
            },
     } ,

    ]

// soluton1
   library[0].status.read = true;
   library[1].status.read = true;
   library[2].status.read = true;

  console.log(library);

//   solution2

const {title: firstBook}= library[0];

console.log(firstBook);

// solution3

const str = JSON.stringify(library);

console.log(str);
