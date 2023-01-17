var languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages);
languages[0] = 'HTML';
languages[1] = 'CSS';
languages[2] = 'JavaScript';
languages[3] = 'React';
languages[5] = 'Postgres';
console.log(languages);

var firstElement = languages[0];
console.log('The 1st element of the array is', firstElement + '.');

var thirdElement = languages[2];
console.log('The 3rd element of the array is', thirdElement + '.');

var length = languages.length;
console.log('The length of the array is:', length);

var lastElement = languages[length - 1];
console.log('The last element in the array is', lastElement + '.');

var secondToLastElement = languages[length - 2];
console.log('The second to last element in the array is', secondToLastElement + '.');
