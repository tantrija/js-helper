## **@tantrija/helper-functions**  
*A comprehensive collection of helper functions for formatting data types like dates, numbers, strings, and more.*

![npm](https://img.shields.io/npm/v/@tantrija/helper-functions) ![license](https://img.shields.io/npm/l/@tantrija/helper-functions) ![downloads](https://img.shields.io/npm/dm/@tantrija/helper-functions)

---

### **Table of Contents**

1. [About](#about)  
2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Features](#features)  
5. [Examples](#examples)  
6. [API Reference](#api-reference)  
7. [Contributing](#contributing)  
8. [Support and Issues](#support-and-issues)  
9. [License](#license)

---

## **About**

`@tantrija/helper-functions` is a lightweight and versatile library that provides a **comprehensive collection of helper functions** for common tasks like:

- Formatting **dates**, **numbers**, and **strings**  
- Manipulating **arrays** and **objects**  
- Providing reliable and consistent formatting across your JavaScript/TypeScript projects  

It is designed to simplify development workflows and reduce the need for repetitive coding.

---

## **Installation**

To install the package, use **npm** or **yarn**:

### Using npm:
```bash
npm install @tantrija/helper-functions
```

### Using yarn:
```bash
yarn add @tantrija/helper-functions
```

---

## **Usage**

### Importing Functions

You can import specific helper functions based on the category:

#### **ES Modules Syntax**
```typescript
import { capitalize, toSnakeCase } from '@tantrija/helper-functions/string';
import { flattenToDepth, uniqueByKey } from '@tantrija/helper-functions/array';
import { formatDate, isLeapYear } from '@tantrija/helper-functions/date';
import { deepMerge, isEmptyObject } from '@tantrija/helper-functions/object';
```

#### **CommonJS Syntax**
```javascript
const { capitalize, toSnakeCase } = require('@tantrija/helper-functions/string');
const { flattenToDepth, uniqueByKey } = require('@tantrija/helper-functions/array');
const { formatDate, isLeapYear } = require('@tantrija/helper-functions/date');
const { deepMerge, isEmptyObject } = require('@tantrija/helper-functions/object');
```

---

## **Features**

1. 🚀 **Comprehensive Utilities**:  
   Includes helper functions for:  
   - **Strings**: Capitalization, casing, formatting, and manipulation  
   - **Arrays**: Flattening, sorting, grouping, and filtering  
   - **Objects**: Deep merge, key-value mapping, and validation  
   - **Numbers**: Validation, math operations, and formatting  
   - **Dates**: Formatting, comparisons, and date utilities  

2. ✅ **Type-Safe**:  
   Fully written in **TypeScript** for better type inference and IntelliSense support.

3. 📦 **Lightweight**:  
   Import only the functions you need to keep your bundle size small.

4. 🛠️ **Well-Tested**:  
   Includes an extensive suite of tests for reliability and performance.

---

## **Examples**

### **String Utilities**

```typescript
import { capitalize, toSnakeCase } from '@tantrija/helper-functions/string';

console.log(capitalize('hello world')); // "Hello world"
console.log(toSnakeCase('Hello World Example')); // "hello_world_example"
```

### **Array Utilities**

```typescript
import { flattenToDepth, uniqueByKey } from '@tantrija/helper-functions/array';

const nestedArray = [1, [2, [3, [4]]]];
console.log(flattenToDepth(nestedArray, 2)); // [1, 2, 3, [4]]

const data = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }];
console.log(uniqueByKey(data, 'id'));
// [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
```

### **Object Utilities**

```typescript
import { deepMerge, isEmptyObject } from '@tantrija/helper-functions/object';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };
console.log(deepMerge(obj1, obj2)); // { a: 1, b: { c: 2, d: 3 } }

console.log(isEmptyObject({})); // true
```

### **Date Utilities**

```typescript
import { formatDate, isLeapYear } from '@tantrija/helper-functions/date';

const date = new Date();
console.log(formatDate(date, 'YYYY-MM-DD')); // "2024-06-15"

console.log(isLeapYear(2024)); // true
```

---

## **API Reference**

For a full list of available helper functions and detailed documentation, please visit the [API Documentation](https://github.com/tantrija/js-helper#readme).

---

## **Contributing**

We welcome contributions to improve this library. If you have ideas, suggestions, or bug fixes:

1. **Fork** the repository.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/tantrija/js-helper.git
   cd js-helper
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Add your changes and tests.

6. Submit a **Pull Request**.

---

## **Support and Issues**

For any issues or bugs, please open an issue on GitHub:  
[https://github.com/tantrija/js-helper/issues](https://github.com/tantrija/js-helper/issues)

For questions, email: **[admin@tantrija.com](mailto:admin@tantrija.com)**

---

## **License**

This project is licensed under the [MIT License](./LICENSE).

---

**Thank you for using `@tantrija/helper-functions`! If you find it useful, give it a ⭐ on GitHub.** 🚀