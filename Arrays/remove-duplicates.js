const arr = [1, 2, 1, 2, 1, 3, 4, 3, 3, 4, 1];

let temp = [];

arr.sort((a, b) => a - b);

temp.push(arr[0]);
//temp ->1 ,1

for (let i = 1; i < arr.length; i++) {
  if (temp[arr.length - 1] !== arr[i]) {
    temp.push(arr[i]);
  }
}

console.log("temp", temp);
