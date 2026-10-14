## Issue 1: Logic Error in Deposit Calculation

- **Location:** Line 12; file: receipt.ts
- **Issue:** There is an extra comma breaking the function
- **Explanation:** creates an empty (undefined) element inside the array
- **Suggested Fix:** Erase the comma from the function 
- **Current Status:** Fixed


## Issue 2: Invalid Object Assignment Syntax in addItem

- **Location:** Line 17; file: receipt.ts
- **Issue:** The addItem function uses equals signs (=) inside the object literal instead of colons (:).
- **Explanation:** I used = instead of : inside the item object. In JavaScript, objects use colons like "name": name to set properties, so putting equal signs in there caused a syntax error.
- **Suggested Fix:** Change the = signs inside the object to : colons, like { name: name, price: price }.
- **Current Status:** Fixed

## Issue 3: Incorrect Item Matching and Removal Logic in deleteItem

- **Location:** Lines 22–23; file: receipt.ts
- **Issue:** deleteItem searches for the literal string "name" and always deletes the last item in the array instead of the requested item.
- **Explanation:** ITEMS.indexOf("name") tries to find the literal word "name" instead of checking the name property inside each item object. Because it can't find it, it fails to get the right position. Then, ITEMS.pop() simply chops off whatever item is at the end of the array, regardless of what item you actually wanted to delete.
- **Suggested Fix:** indexOf(): indexOf() only works when an array holds simple values like plain numbers or text (example, [1, 2, 3] or ["apple", "banana"]). But our array holds objects with properties (name and price). indexOf("paper towels") won't find anything because the array element is { name: "paper towels", price: 21.99 }, not just "paper towels", so we should change to findIndex(item => item?.name === name) so it can look inside each object and locate the exact item's position. Then, replace ITEMS.pop() with ITEMS.splice(idx, 1) to remove that specific item from the array instead of always dropping the last one.
- **Current Status:** Fixed

## Issue 4: Invalid Loop Syntax, Object Indexing, and Function Reassignment in total

- **Location:** Lines 27–31; file: receipt.ts
- **Issue:** The total function tries to loop through a raw number (3) not a list or collection that can be looped through, incorrectly uses the loop variable like an array position index (ITEMS[i]), and overwrites its own function name (total = ...) with a math number instead of using a separate sum variable.
- **Explanation:** The code breaks for three reasons: for (const i of 3) tries to loop through the number 3 instead of an actual list, which crashes the code. ITEMS[i] fails because in a for...of loop, i represents the full object itself (the grocery item) rather than a position index like 0 or 1.
Then, total = total + ... replaces the total function itself with a number, and this stops the function from working at all.
- **Suggested Fix:** Create a starting variable let subtotal = 0;, loop through the list correctly using for (const item of ITEMS), add each item.price to subtotal, and return subtotal at the end.
- **Status:** Fixed

## Issue 5: Incorrect Tax Calculation and Variable Shadowing in tax

- **Location:** Lines 34–37; file: receipt.ts
- **Issue:** The tax function adds the tax rate directly to the total price instead of multiplying, and has the same name with the inner variable.
- **Explanation:** The tax function adds the tax rate directly to the total price instead of multiplying , to find tax, you have to multiply the subtotal by the tax rate (like $10 \times 0.10$). The code was using a plus sign (+) instead. If subtotal was $10, adding 0.10 just made the total $10.10 instead of calculating the real tax, also the variable tax is named exactly as inside the function. 
- **Suggested Fix:** Change the math to multiplication: Multiply the subtotal by the tax rate (total() * taxRate). Rename the inner variable: Change const tax inside the function to something clear like const taxAmount so it doesn't crash with the function's name.
- **Current Status:** Fixed

## Issue 5: Incorrect Template Literal Formatting and Property Access in printReceipt

- **Location:** Lines 40–50; file: receipt.ts
- **Issue:** The printReceipt function uses single quotes instead of backticks, uses bad bracket notation to access properties, and prints the function definition itself instead of calling it.
- **Explanation:** The function uses regular single quotes ('...') instead of backticks (`...`). This stops JavaScript from filling in ${item.name}, so it just prints out the literal text ${item.name} on the screen instead of the actual food name. 
It also tries to grab object info with broken brackets and quotes, which causes syntax errors or returns undefined instead of the actual price.
It writes total instead of calling total(). Leaving off the parentheses prints the literal function code onto the receipt instead of running it to get the calculated total.
- **Suggested Fix:** Changing the single quotes (') to backticks (`) so that template literals actually work and turn variables like ${item.name} into real text. Instead of using messy brackets, changing to direct dot notation like item.name and item.price so the code grabs the right info without breaking.
Adding parenthesis () to total() and tax() so JavaScript actually runs those functions and gives us the final dollar amounts instead of printing the raw function code.
- **Current Status:** Fixed



----
## Root Cause
- 1. Root Cause
Example: In the addItem() function, the code uses = instead of : when creating an object, const newItem = { "name" = name, "price" = price };
A root cause is the underlying reason a problem occurs. Here, the object is written using = instead of : to assign values to its properties..

## Error

Example: In the total() function, the code says for (const i of 3).

Explanation: The code tries to loop through the number 3, which is not possible. This causes a TypeScript error, and the subtotal cannot be calculated.

## Defect or Bug

Example: In the deleteItem() function, the code uses ITEMS.pop().

Explanation: This removes the last item from the list instead of the item the user wants to delete. This is a mistake in the program's logic.

## Failure

Example: In the tax() function, the code adds the tax rate directly to the subtotal.

Explanation: The tax is calculated incorrectly because the code adds the tax rate instead of calculating a percentage of the subtotal. This makes the final receipt show the wrong tax amount, it is a failure because it is producing the wrong outcome.

