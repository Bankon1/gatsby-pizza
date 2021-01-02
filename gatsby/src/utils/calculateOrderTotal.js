import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // 1. Loop oper each item in the order
  // 2. Calc to total for that pizza
  // 3. Add that total to the running total
  return order.reduce((runningTotal, singleOrder) => {
    const currPizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
    return (
      runningTotal + calculatePizzaPrice(currPizza.price, singleOrder.size)
    );
  }, 0);
}
