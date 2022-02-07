let tool = 'marker';
 
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen' // Atribui o primeiro valor que retornar TRUE, (strings vazias retorna FALSE)
 
console.log(`The ${writingUtensil} is mightier than the sword.`);
