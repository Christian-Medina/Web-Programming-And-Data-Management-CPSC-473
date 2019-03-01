//comments are console output

myTruck.createOrder({
  emailAddress: 'me@goldfinger.com',
  coffee: 'double mocha'
});
//Adding order for me@goldfinger.com
//undefined
myTruck.createOrder({
  emailAddress: 'dr@no.com',
  coffee: 'decaf'
});
//Adding order for dr@no.com
//undefined
myTruck.createOrder({
  emailAddress: 'm@bond.com',
  coffee: 'earl grey'
});
//Adding order for m@bond.com
//undefined
myTruck.printOrders();
//Truck #ncc-1701 has pending orders:
//Object {email: "me@goldfinger.com", coffee: "double mocha"}
//Object {email: "dr@no.com", coffee: "decaf"}
//Object {email: "m@bond.com", coffee: "earl grey"}
//undefined
myTruck.deliverOrder('dr@no.com');
//Delivering order for dr@no.com
//undefined
myTruck.deliverOrder('m@bond.com');
//Delivering order for m@bond.com
//undefined
myTruck.printOrders();
//Truck #ncc-1701 has pending orders:
//Object {email: "me@goldfinger.com", coffee: "double mocha"}
//undefined
