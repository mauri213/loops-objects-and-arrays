var people = [
	{
		firstName: 'Amanda',
		lastName: 'Harris',
		age: 42,
		gender: 'F',
		children: [
			{
				firstName: 'Ben',
				age: 18,
				gender: 'M',
			},
			{
				firstName: 'Lisa',
				age: 15,
				gender: 'F',
			},
		]
	},
	{
		firstName: 'Brian',
		lastName: 'Hall',
		age: 36,
		gender: 'M',
		children: [
			{
				firstName: 'Erica',
				age: 11,
				gender: 'F',
			},
			{
				firstName: 'Jenny',
				age: 8,
				gender: 'F',
			},
		]
	},
	{
		firstName: 'Terrence',
		lastName: 'Smith',
		age: 49,
		gender: 'M',
		children: [
			{
				firstName: 'David',
				age: 17,
				gender: 'M',
			},
			{
				firstName: 'Alex',
				age: 23,
				gender: 'F',
			},
			{
				firstName: 'Joe',
				age: 25,
				gender: 'M',
			},
		]
	},
	{
		firstName: 'Alyssa',
		lastName: 'Ingram',
		age: 28,
		gender: 'F',
		children: [
			{
				firstName: 'Jamie',
				age: 3,
				gender: 'F',
			},
			{
				firstName: 'Lori',
				age: 2,
				gender: 'F',
			},
		]
	},
];
//1.
people[0].children.push({
firstName: 'Matt',
age: 12,
})
console.log(people);

// 2.
for (var i = 0; i < people.length; i++) {
if (people[i].gender === 'M') {
	people[i].age += 5;
}
}
console.log(people);

// 3.
var j = 0;
var total = 0;

while (j < people.length) {
	total += people[j].age;
	j++;
}
avg = total / people.length;
console.log(children);

// 4.
var j ;

for (var i = 0; i < people.length; i++) {
	for (var j = 0; j <people[i].children.length; j++)
}

//5.
var msum = 0;
var fsum = 0;
var mct = 0;
var fct = 0;

for (var i = 0; i < people.length; i++) {
	for (var j = 0; j < people[i].children.length; j++) {
		if (people[i].children[j].gender === 'M') {
			// add to msum, increment mct
			msum = msum + people[i].children[j].age;
			mct++;
		} else if (people[i].children[j].age < 12) {
			// add to fsum, increment fct
			fsum = fsum + people[i].children[j].age;
			fct++;
		}
	}
}

// log out the average male age
avg = msum / mct;
console.log('Average male age: ' + avg);
// log out the average female age
avg = fsum / fct;
console.log('Average female age ' + avg);


