// name: f22 
var myCount = flow.get("count");
flow.set("count", 123);
var count = context.get('count')||0;
count += 1;
context.set('count',count);
msg.count = count;
return msg;

