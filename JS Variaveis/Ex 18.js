/* 18)No JavaScript, podemos usar "template literals" para incorporar expressões
dentro de strings de texto. Isso é útil quando queremos inserir o valor de uma
variável dentro de uma string. Use um único "template literal" para interpolar
suas variáveis na frase "My name is NAME. My favorite city is CITY." Substitua
"NAME" e "CITY" na string acima interpolando os valores salvos em variáveis
"myName" e "myCity". Use "console.log()" para imprimir sua frase no console.
Para saber mais sobre "template literals", visite:

"https://developer.mozilla.org/pt-
BR/docs/Web/JavaScript/Reference/Template_literals”. */

var name = "Pedro";
var city = "São Paulo";

console.log('My name is ' + name + ". My favorite city is" + city + ".");