let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800},
    { product: "Headphones", price: 150},
    { product: "Keyboard", price: 80}
];

// array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );
let initialValue = 0;
let totalSales = salesData.reduce((acc, sales)=>acc + sales.price, 0);
// console.log(totalSales);


let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
]


let lowStock = inventory.filter((quantity)=>(quantity.stock < 50));
// console.log(lowStock);


let userActivity = [
    {user: "Alice", activityCount: 55},
    {user: "BOb", activityCount: 72},
    {user: "Charlie", activityCount: 33}
];

//find most active user
let activeUser = userActivity.reduce((maxUser, user)=> 
    user.activityCount > maxUser.activityCount ?  user : maxUser)

// console.log(activeUser);


let expenses = [
    {description:"Groceries", amount: 50, category: "Food" },
    {description:"Electricity Bill", amount: 100, category: "Utilities" },
    {description:"Dinner", amount: 30, category: "Food" },
    {description:"Internet Bill", amount: 50, category: "Utilities" },
]

let expenseReport = expenses. reduce((report, expense)=>{
    // report[expense.category] += expense.amount;
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
},{})

// console.log(expenseReport);


//list unfinished task and sort it on the basis of priority
let tasks = [
    {description:"Write report", completed: false, priority: 2},
    {description:"Send email", completed: true, priority: 3},
    {description:"Prepare presentation", completed: false, priority: 1}
]

let pendingSortedTask = tasks
.filter((task)=>(!task.completed))
.sort((a,b)=>(a.priority - b.priority))
// console.log(pendingSortedTask);

let movieRatings = [
    {title: "Movie A", ratings:[4, 5, 3]},
    {title: "Movie B", ratings:[5, 5, 4]},
    {title: "Movie C", ratings:[3, 4, 2]},
];

let avgRatings = movieRatings.map((movie)=>{
    let total = movie.ratings.reduce((sum, ratings)=>(sum + ratings), 0)
    let average = total/movie.ratings.length;
    return {title : movie.title , averageRatings : average.toFixed(2)}
})
console.log(avgRatings);

