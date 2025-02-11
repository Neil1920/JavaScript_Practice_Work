let user = {
    name:"Atharva Mannur",
    
    address: {
        city: "Sangli"
    },
    
    contact:{
        phone:"7038902575"
    },

    degree:{
        education:"B.Tech Computer Engineer"
    }
};
console.log(user.name);
console.log(user.address?.city);
console.log(user.contact?.phone);
console.log(user.degree?.education);