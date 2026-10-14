// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

export interface GroceryItem {
  name: string;
  price: number;
}

export const ITEMS: GroceryItem[] = [
  { name: "milk", price: 3.49 },
  { name: "bread", price: 2.99 },
  { name: "eggs", price: 4.50 }
];

export function addItem(name: string, price: number) {
  const newItem: GroceryItem = { name, price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const idx = ITEMS.findIndex(item => item.name === name);
  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }
  return ITEMS;
}

export function total(): number {
  let sum = 0;
  for (const item of ITEMS) {
    sum += item.price;
  }
  return sum;
}

export function tax(taxRate: number): number {
  return total() * taxRate;
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name} : $${item.price.toFixed(2)}`);
  }

  console.log("************************");
  const subtotal = total();
  const calculatedTax = tax(taxRate);
  const grandTotal = subtotal + calculatedTax;

  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Tax: $${calculatedTax.toFixed(2)}`);
  console.log(`Total: $${grandTotal.toFixed(2)}`);
}
// AI transparency: AI was used to clean up this code.