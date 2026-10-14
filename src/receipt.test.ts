import { describe, test, expect } from '@jest/globals';
import { addItem, deleteItem, tax, ITEMS } from './fixed_receipt';

describe('Grocery Receipt Tests', () => {

test('Happy-path: adds a valid item successfully', () => {
  addItem("apple", 1.50); // Good input
  expect(ITEMS.length).toBeGreaterThan(0); // Checking that it worked
});

test('Unhappy-path: handles deleting a non-existent item safely', () => {
  const result = deleteItem("helicopter");
  expect(result).toBeDefined();
});

test('Edge-case: handles zero tax', () => {
    const result = tax(0);
    expect(result).toBe(0);
  });
});
