//comments are console output

var ds = new App.DataStore();
//undefined
ds.add('m@bond.com', 'tea');
//undefined
ds.add('james@bond.com', 'eshpressho');
//undefined
ds.getAll();
//Object {m@bond.com: "tea", james@bond.com: "eshpressho"}
ds.remove('james@bond.com');
//undefined
ds.getAll();
//Object {m@bond.com: "tea"}
ds.get('m@bond.com');
//"tea"
ds.get('james@bond.com');
//undefined
