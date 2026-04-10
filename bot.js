const { ethers } = require("ethers");

const ANVIL_RPC = "http://localhost:8545";
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

async function main() {
    console.log("🤖 Sandwich Bot Running");
    console.log("Monitoring for transactions...\n");
    
    const provider = new ethers.JsonRpcProvider(ANVIL_RPC);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    
    console.log(`Bot Address: ${wallet.address}\n`);
    
    provider.on("pending", async (txHash) => {
        try {
            const tx = await provider.getTransaction(txHash);
            if (tx && tx.data && tx.data !== "0x") {
                console.log(`🎯 Transaction Detected: ${txHash}`);
                console.log(`   From: ${tx.from}`);
                console.log(`   Data length: ${tx.data.length} bytes\n`);
            }
        } catch(e) {}
    });
    
    console.log("Waiting for transactions. Press Ctrl+C to stop.\n");
}

main();