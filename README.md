# ATM Web Interface

A simple, interactive front-end web application that simulates fundamental ATM operations such as checking account balances, depositing funds, and withdrawing cash.

## Overview

This project was built to practice core front-end web development fundamentals, focusing on structuring responsive interfaces and handling dynamic client-side logic using vanilla JavaScript.

## Features

- PIN Verification: Validates user input before granting access to banking actions.
- PIN for the account access is 1234.
- Balance Inquiry: Displays the current available account balance.
- Deposit System: Allows users to add money to their balance with real-time UI updates.
- Cash Withdrawal: Validates transactions to ensure requested amounts do not exceed the available balance.
- Transaction Feedback: Displays success and error messages based on user actions.

## Technologies Used

- HTML5: Page structure and semantic layout.
- CSS3: UI styling, layout positioning, and interactive states.
- JavaScript (ES6): DOM manipulation, state tracking, and transaction validation logic.

## Project Structure

```text
├── index.html        # HTML structure of the ATM interface
├── style.css         # Styling for buttons, inputs, and the card layout
└── script.js         # Core application logic and event listeners
