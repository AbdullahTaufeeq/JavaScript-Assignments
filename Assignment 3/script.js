var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 5000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
    
  ];


  //---------1

//   var productId = 103;

//  for (var i = 0; i < products.length; i++) {

//   if (products[i].id === productId) {

//   console.log(products[i]);

//   }
// }



  //---------2

//   for (var i = 0; i < products.length; i++) {

//   console.log(products[i].title);

//  }

  //---------3

//   var productId = 101;

//  for (var i = 0; i < products.length; i++) {

//   if (products[i].id === productId) {

//     for (var j = 0; j < products[i].variations.length; j++) {

//       console.log(products[i].variations[j].color);

//     }
//   }
// }

  //---------4

//   var productId = 101;
//   var total = 0;

//  for (var i = 0; i < products.length; i++) {

//   if (products[i].id === productId) {

//     for (var j = 0; j < products[i].variations.length; j++) {

//       total += products[i].variations[j].quantity;

//     }
//   }
// }

// console.log("Total Quantity:" +  total);


  //---------5

//   for (var i = 0; i < products.length; i++) {

//     for (var j = 0; j < products[i].variations.length; j++) {

//       if (products[i].variations[j].quantity < 2) {

//         console.log(products[i].title);
        
//       }
//     }
//   }

  //---------6

// var maxAvg = 0;
// var highRprod = null

// for (var i=0; i< products.length; i++){
//     var product= products[i];
//     var sum=0;

//     for (var j=0; j< product.reviews.length; j++){
//         sum += product.reviews[j].rating;
//     }

//     var avg=sum/product.reviews.length;

//     if(avg>maxAvg){
//         maxAvg=avg;
//         highRprod=product
//     }

//     console.log("Highest Rated Product is:"+" "+products.title[j])


// }



//---------7

// var activeReviews = [];
// var product = products[0]; // Sony LED 40 inch

// for (var i = 0; i < product.reviews.length; i++) {
//     if (product.reviews[i].status == true) {
//         activeReviews[activeReviews.length] = product.reviews[i];
//     }
// }

// for (var j = 0; j < activeReviews.length; j++) {
//     console.log("{\"user\": \"" + activeReviews[j].user + "\", \"rating\": " + activeReviews[j].rating + ", \"title\": \"" + activeReviews[j].title + "\", \"comments\": \"" + activeReviews[j].comments + "\", \"date\": \"" + activeReviews[j].date + "\"}");
// }



//---------8

// for (var i = 0; i < products.length; i++) {
//   var product = products[i];
//   var maxPrice = 0;
//   var expensiveVariation = null;

//   for (var j = 0; j < product.variations.length; j++) {
//       if (product.variations[j].price > maxPrice) {
//           maxPrice = product.variations[j].price;
//           expensiveVariation = product.variations[j];
//       }
//   }

//   console.log("Product " + product.id + " = " + product.title + " - " + expensiveVariation.color + " (" + expensiveVariation.price + ")");
// }

//---------9

// var totalStockValue = 0;

// for (var i = 0; i < products.length; i++) {
//     var product = products[i];
    
//     for (var j = 0; j < product.variations.length; j++) {
//         totalStockValue += product.variations[j].price * product.variations[j].quantity;
//     }
// }

// console.log("Total Stock Value: " + totalStockValue);


