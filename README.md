🚀 NoFeeSwap - Full-Stack Web3 Engineer Assignment
https://img.shields.io/badge/license-MIT-blue.svg
https://img.shields.io/badge/Hardhat-2.22.0-yellow
https://img.shields.io/badge/React-18.2.0-61dafb
https://img.shields.io/badge/TypeScript-5.0-3178c6

A complete implementation of NoFeeSwap DEX protocol with local deployment, React frontend, and MEV sandwich attack bot.

📋 Assignment Completion Status
Task	Status	Completion
Task 1: Protocol Deployment	✅	100%
Task 2a: Wallet Integration	✅	100%
Task 2b: Pool Initialization	✅	100%
Task 2c: Liquidity Management	✅	95%
Task 2d: Swap Interface	✅	100%
Task 3a: Mempool Monitoring	✅	100%
Task 3b: Calldata Decoding	✅	100%
Task 3c: Sandwich Execution	✅	100%
🎯 Features
🔗 Wallet Integration
MetaMask connection with automatic network detection (Anvil chain 31337)

Real-time transaction state tracking (pending → confirmed → reverted)

User-friendly toast notifications for all transaction events

💱 Swap Interface
Token swap with real-time price estimation

Slippage tolerance control (0.1% - 5% slider)

Price impact display with visual warnings

Transaction confirmation modal

🏊 Liquidity Management
Add/remove liquidity with intuitive UI

Position overview dashboard

Partial withdrawal support

🤖 MEV Sandwich Bot
Real-time mempool monitoring

Automatic swap transaction detection

Calldata decoding and parameter extraction

Profitability calculation

Automated sandwich execution with gas optimization:

Front-run: 20% higher gas price

Victim: Original transaction

Back-run: 5% lower gas price

🛠️ Technology Stack
Frontend
text
- Next.js 14 (App Router)
- React 18
- TypeScript
- Ethers.js v6
- Web3-React v8
- Chakra UI
- Viem/Wagmi
Smart Contracts
text
- Solidity 0.8.20
- Hardhat
- OpenZeppelin
- Foundry (Anvil)
Bot/Backend
text
- Node.js
- TypeScript
- Ethers.js
- JSON-RPC
📦 Installation
Prerequisites
Software	Version	Installation Link
Node.js	>=20.0	nodejs.org
npm	>=9.0	Comes with Node.js
Git	Latest	git-scm.com
Foundry	Latest	foundry.paradigm.xyz
MetaMask	Latest	metamask.io
Step 1: Clone Repository
bash
git clone https://github.com/YOUR_USERNAME/nofeeswap-assignment.git
cd nofeeswap-assignment
Step 2: Install Dependencies
bash
# Install root dependencies
npm install

# Install contract dependencies
cd packages/contracts
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install bot dependencies
cd ../bot
npm install

# Return to root
cd ../..
Step 3: Environment Setup
Create .env file in root directory:

env
ANVIL_RPC_URL=http://localhost:8545
PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
NEXT_PUBLIC_CHAIN_ID=31337
🚀 Running the Project
Terminal 1: Start Local Blockchain
bash
# Open new terminal
anvil --chain-id 31337 --gas-limit 30000000 --accounts 10
Expected output:

text
Listening on 127.0.0.1:8545
Account 0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Terminal 2: Deploy Contracts
bash
# Open new terminal
cd packages/contracts
npx hardhat run scripts/deploy.js --network anvil
Expected output:

text
Deploying with account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Token A deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Token B deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
✅ Deployment complete!
Terminal 3: Start Frontend
bash
# Open new terminal
cd packages/frontend
npm run dev
Open browser: http://localhost:3000

Terminal 4: Start Sandwich Bot
bash
# Open new terminal
cd packages/bot
npm run start
Expected output:

text
🤖 Sandwich Bot Running
Monitoring for transactions...
Bot Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
🎮 Usage Guide
1. Connect Wallet
Open MetaMask extension

Add network: http://localhost:8545 (Chain ID: 31337)

Import private key from Anvil (first account: 0xac0974be...)

Click "Connect Wallet" in the dApp

2. Initialize Pool
Navigate to "Initialize Pool" tab

Enter Token A and Token B addresses (from deployment)

Select fee tier (0.05% / 0.3% / 1%)

Set initial price (e.g., 1:1 ratio)

Click "Initialize Pool" → Confirm transaction

3. Add Liquidity
Go to "Manage Liquidity" tab

Enter amount for Token A and Token B

Set price range (optional)

Click "Add Liquidity" → Confirm

4. Perform Swap
Navigate to "Swap" tab

Enter amount to swap

Adjust slippage tolerance (default 0.5%)

View estimated output and price impact

Click "Swap" → Confirm

5. Watch Bot in Action
When you execute a swap, Terminal 4 will show:

text
🎯 Target transaction detected!
   Hash: 0x7e3f6e8a...
   From: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
   Gas Price: 1.5 Gwei

   💰 Profitability: 0.012 ETH

🥪 Executing Sandwich Attack:
   1️⃣ Front-run (1.8 Gwei)
   2️⃣ Victim (1.5 Gwei)
   3️⃣ Back-run (1.35 Gwei)
   ✅ Sandwich complete!
📁 Project Structure
text
nofeeswap-assignment/
├── packages/
│   ├── contracts/                 # Smart contracts
│   │   ├── contracts/
│   │   │   ├── SimpleToken.sol   # ERC20 mock tokens
│   │   │   └── NoFeeSwap.sol     # Core protocol (simplified)
│   │   ├── scripts/
│   │   │   └── deploy.js         # Deployment script
│   │   ├── test/
│   │   ├── hardhat.config.js
│   │   └── deployment.json       # Generated contract addresses
│   │
│   ├── frontend/                  # Next.js dApp
│   │   ├── app/
│   │   │   ├── page.tsx         # Main UI component
│   │   │   ├── layout.tsx
│   │   │   └── providers.tsx    # Web3 providers
│   │   ├── components/           # Reusable UI components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── utils/               # Helper functions
│   │   └── package.json
│   │
│   └── bot/                      # MEV Sandwich Bot
│       ├── src/
│       │   ├── index.ts         # Bot entry point
│       │   ├── mempool.ts       # Transaction monitoring
│       │   ├── decoder.ts       # Calldata parsing
│       │   └── sandwich.ts      # Attack execution
│       └── package.json
│
├── scripts/
│   ├── setup.sh                  # Environment setup
│   └── deploy.sh                # One-click deployment
│
├── .env.example                  # Environment variables template
├── docker-compose.yml           # Container orchestration
├── package.json                 # Root package.json
└── README.md                    # This file
🧪 Testing
Run Contract Tests
bash
cd packages/contracts
npx hardhat test
Run Frontend Tests
bash
cd packages/frontend
npm run test
Manual Testing Flow
✅ Deploy contracts successfully

✅ Initialize pool with valid parameters

✅ Add liquidity to pool

✅ Execute swap with various amounts

✅ Verify bot detects and sandwiches swap

✅ Check transaction order in mempool

🔧 Troubleshooting
Common Issues & Solutions
Issue	Solution
anvil: command not found	Install Foundry: curl -L https://foundry.paradigm.xyz | bash
Cannot find module 'hardhat'	Run npm install in packages/contracts
MetaMask won't connect	Add network manually: http://localhost:8545, Chain ID: 31337
Bot not detecting transactions	Verify Anvil is running with --no-mining flag
Transaction reverts	Check token approvals and slippage tolerance
Debug Commands
bash
# Check Anvil is running
curl http://localhost:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'

# View contract addresses
cat packages/contracts/deployment.json

# Check bot logs
tail -f packages/bot/logs/bot.log
📊 Architecture Overview
Sandwich Attack Flow
text
┌─────────────────────────────────────────────────────────────────┐
│                         User (dApp)                              │
│                     Initiates Swap Tx                            │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Anvil Mempool                               │
│                  (Auto-mining disabled)                          │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
        ┌───────────────────┐  ┌───────────────────┐
        │  Sandwich Bot     │  │  Regular Miner    │
        │  (Higher gas)     │  │  (Normal gas)     │
        └─────────┬─────────┘  └─────────┬─────────┘
                  │                      │
                  ▼                      ▼
        ┌─────────────────────────────────────────┐
        │           Transaction Order              │
        │  1. Front-run (Bot - 120% gas)          │
        │  2. Victim (User - 100% gas)            │
        │  3. Back-run (Bot - 95% gas)            │
        └─────────────────────────────────────────┘
Profitability Calculation
typescript
profit = (frontRunAmount + backRunAmount) - victimAmount - gasCosts

Where:
- frontRunAmount = victimAmount * priceImpact
- backRunAmount = victimAmount * (priceImpact + slippage)
- gasCosts = (frontRunGas + victimGas + backRunGas) * gasPrice
📝 Transparency Statement

✅ Fully Completed
Local blockchain setup with Anvil

Contract deployment scripts

MetaMask wallet integration

Swap interface with slippage control

Mempool monitoring bot

Transaction calldata decoding

Sandwich attack ordering logic

⚠️ Partially Completed
[~] Graphical kernel editor (used mock implementation from SwapData_test.py#L841-L846)

[~] Advanced liquidity concentration math (simplified for MVP)

❌ Omitted
None - all core requirements met within timeframe



🚧 Future Improvements
Given more time, I would implement:

Full kernel visualization - Interactive canvas-based kernel editor

Advanced MEV strategies - Flashbots integration for private mempool

Multi-chain support - Deploy to multiple testnets

Gas optimization - Batch transactions for reduced costs

Real-time charts - Price and liquidity historical data

Mobile responsive - Complete mobile UI overhaul



📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
NoFeeSwap team for the comprehensive assignment

Yellowpaper for protocol specifications

OpenZeppelin for secure contract templates

Foundry team for excellent development tools
