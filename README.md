# Farfetch E-Commerce Automation Testing Suite 🚀

[![Playwright](https://img.shields.io/badge/Playwright-1.42.1-blue?logo=playwright)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Professional automation testing framework for Farfetch's luxury e-commerce platform**  
*Ensuring flawless user experiences in high-end fashion e-commerce*


## 🌟 Key Features
- **Real-world scenario testing** on production environment
- **Anti-bot bypass** implementation using stealth techniques
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **Stateful sessions** with storage state management
- **CI/CD ready** with GitHub Actions integration

## 📌 𝘛𝘦𝘴𝘵 𝘊𝘢𝘴𝘦𝘴 𝘈𝘶𝘵𝘰𝘮𝘢𝘵𝘦𝘥:<br>
1️⃣ 𝗟𝗼𝗴𝗶𝗻: The user can successfully log in with valid credentials.<br>
2️⃣ 𝗔𝗱𝗱 𝘁𝗼 𝗖𝗮𝗿𝘁: Added random items to the cart.<br>
3️⃣ 𝗖𝗵𝗮𝗻𝗴𝗲 𝗜𝘁𝗲𝗺 𝗦𝗶𝘇𝗲: Tested changing the item size from the cart.<br>
4️⃣ 𝗖𝗵𝗮𝗻𝗴𝗲 𝗜𝘁𝗲𝗺 𝗤𝘂𝗮𝗻𝘁𝗶𝘁𝘆: Validated the ability to change the quantity of an item in the cart.<br>
5️⃣ 𝗥𝗲𝗺𝗼𝘃𝗲 𝗜𝘁𝗲𝗺𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗲 𝗖𝗮𝗿𝘁: Ensured that users can remove all items from the cart.<br>
6️⃣ 𝗔𝗱𝗱 𝘁𝗼 𝗪𝗶𝘀𝗵𝗹𝗶𝘀𝘁: Verified adding items to the wishlist.<br>
7️⃣ 𝗥𝗲𝗺𝗼𝘃𝗲 𝗜𝘁𝗲𝗺𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗲 𝗪𝗶𝘀𝗵𝗹𝗶𝘀𝘁: Ensured that users can remove all items from the wishlist.<br>

## 🛠️ Tech Stack
**Core Technologies**  
| ![Playwright](https://img.shields.io/badge/-Playwright-2E3440?logo=playwright) | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript) | ![POM](https://img.shields.io/badge/-POM%20Pattern-4B32C3) |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------|

**Supporting Tools**  
- **Faker-js**: Dynamic test data generation
- **Stealth Playwright**: Anti-detection mechanisms
- **Allure Reports**: Comprehensive test reporting
- **Dotenv**: Environment configuration

## 🧪 Automated Test Scenarios
| Flow                | Description                                  | Complexity Level |
|---------------------|----------------------------------------------|------------------|
| **User Auth**       | Valid/invalid login scenarios                | ⭐⭐             |
| **Cart Management** | Add/remove items, quantity/size changes      | ⭐⭐⭐⭐         |
| **Wishlist Flow**   | Add/remove from wishlist                     | ⭐⭐⭐           |
| **Session State**   | Persistent user state management             | ⭐⭐⭐⭐         |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16.x
- npm ≥ 9.x
- Git

### Installation
```bash
git clone https://github.com/Osama2262/Farfetch.git
cd Farfetch/tests
npm install
