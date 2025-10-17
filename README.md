---

## Day 1 - Counter Contract (Deployed & Verified on Base Sepolia)

### **Project Task Title**

Build, Deploy, and Verify a simple **Counter Smart Contract** using **Foundry** on **Base Sepolia Testnet**.

---

## **Pre-requisites**

Ensure Foundry is installed and up-to-date before you begin.

### Install Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

###  Verify Installation

```bash
forge --version
```

## **Source Contract (`src/Counter.sol`)**

### Description

A simple smart contract that allows incrementing and decrementing a counter value on-chain.

### Explanation

* `count` - Stores the counter’s current value.
* `increment()` - Increases the value by 1.
* `decrement()` - Decreases the value by 1.
* Public visibility allows reading the counter from outside the contract.

---

## **Test Contract (`test/Counter.t.sol`)**

### Description

Automated Foundry tests to validate the Counter contract.

### Explanation

* `setUp()` runs before each test.
* `testIncrement()` checks if the counter increases correctly.
* `testDecrement()` verifies that the counter decreases.
* `assertEq()` ensures values match expected results.

---

## **Deployment Script (`script/DeployCounter.s.sol`)**

### Description

Script to deploy the Counter contract to **Base Sepolia**.

### Explanation

* `vm.startBroadcast()` - Begins broadcasting transactions to the network.
* `Counter counter = new Counter()` - Deploys the smart contract.
* `console.log()` - Logs the deployed address.
* `vm.stopBroadcast()` - Stops the broadcast.

---

##  **Configuration Files**

### foundry.toml

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
optimizer = true
optimizer_runs = 200
```
Defines:

* Source folder (`src`)
* Output directory (`out`)
* Library path (`lib`)
* Optimization settings for efficient bytecode.

---

### .env

```bash
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
RPC_URL=https://sepolia.base.org
ETHERSCAN_API_KEY=YOUR_BASESCAN_API_KEY
```
Used for secure environment configuration:

* `PRIVATE_KEY`: Wallet key (keep secret - never push to GitHub)
* `RPC_URL`: Network endpoint for Base Sepolia
* `ETHERSCAN_API_KEY`: For automatic contract verification on BaseScan

---

## **Foundry Commands**
```bash
forge build
forge test
forge script script/DeployCounter.s.sol --rpc-url $RPC_URL --broadcast --verify
```
---

🔗 **Verified Contract:**
[View on BaseScan](https://sepolia.basescan.org/address/0x26432c2e13aDa57A199B4090f1dA875Da184305e)

---

## **Caution**

Add `.env` file to `.gitignore` to protect private data:

```
# Ignore environment files
.env
```

---

## **Conclusion**

Successfully deployed and verified a **Counter Smart Contract** on **Base Sepolia** using **Foundry** - completing **Day 1** of the Base Building Challenge.

---
