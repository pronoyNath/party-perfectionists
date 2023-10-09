<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: </b></summary>
<p>

#### Answer: (B) ReferenceError: greetign is not defined

<i>In the code provided, there is a typographical error. You declared the variable as "greeting" but then tried to access "greetign," which is not defined, resulting in a ReferenceError.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (C) "12"

<i>In JavaScript, when you attempt to add a number and a string using the "+" operator, it results in a NaN (Not-a-Number) value because the types are not compatible for arithmetic addition.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (A) ['🍕', '🍫', '🥑', '🍔']

<i>The code initially assigns the value of food[0], which is "🍕", to the favoriteFood property of the info object. Later, it reassigns the favoriteFood property to "🍝". However, this reassignment does not affect the food array in any way. Therefore, when you log the food array, it remains unchanged and still contains the original elements, resulting in ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B) Hi there, undefined

<i>In the sayHi function, there is a parameter name, but when you call the function with sayHi(), you don't provide any argument, so name becomes undefined inside the function. Therefore, the function returns "Hi there, undefined" when logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (C) 3

<i>The forEach method iterates through the nums array, and for each element num, it checks if num is truthy (not equal to 0). For the values 1, 2, and 3 in the array, the condition is true, so count gets incremented by 1 for each of these values. Therefore, count becomes 3, and that's the value logged to the console.</i>

</p>
</details>
