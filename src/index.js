// https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa
import { circle, square, rect } from './shapes';
import { areaCalculator } from './areaCalculator';
import { sumCalculatorOputter } from './sumCalculatorOputter';

const shapes = [
  circle(0.5),
  square(5),
  rect(10, 5),
  square(7)
];

const areas = areaCalculator(shapes);
const output = sumCalculatorOputter(areas);

console.log(output.JSON());
output.HTML(document.getElementById('areas_sum'));
//output.ALERT()
