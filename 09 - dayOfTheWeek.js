// create a function dayOfTheWeek that will receive a string of a day of the week as a parameter, and return 'get some rest!' if the argument received 
// is 'Sunday', otherwise, return 'no time to rest, it's just ...' where ... is the day of the week
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

const dayOfTheWeek = (day) => {
   switch(day) {
      case "Sunday":
         return "Get Some Rest!"
         break
      case "Monday":
         return "Get to work!"
         break
      default: 
         return "What day even is it?!"
   }
}

console.log(dayOfTheWeek("Saturday"))
