import bankAccModel from "../models/bankAccModel.js"


const loginBankAcc = async (req, res) => {
    try {
        const { branchName, password } = req.body;

        console.log("🔹 Received login request for:", branchName);
        console.log("🔹 Entered password:", password);

        // Case-insensitive branch search
        const user = await bankAccModel.findOne({
            branchName: new RegExp(`^${branchName}$`, "i") // Case-insensitive
        });

        console.log("🔹 Query result:", user);

        if (!user) {
            console.log("❌ Error: Bank Doesn't Exist in DB");
            return res.status(404).json({ success: false, message: "Bank Doesn't Exist" });
        }

        if (user.password === password) {
            console.log("✅ Login successful for:", branchName);
            return res.status(200).json({ success: true, branchInfo: user });
        } else {
            console.log("❌ Error: Invalid Password");
            return res.status(401).json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.error("❌ Server Error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const getBankAccInfo = async (req, res) => {
    try {
        const { branchName } = req.body;

        console.log("🔹 Received branchName:", branchName);

        // Validate input
        if (!branchName) {
            console.log("❌ Error: branchName is missing");
            return res.status(400).json({ success: false, message: "Branch name is required" });
        }

        // Check database connection
        console.log("🔹 Querying database for:", branchName);

        // Case-insensitive search in MongoDB
        const branchInfo = await bankAccModel.findOne({
            branchName: new RegExp(`^${branchName}$`, "i") // Case-insensitive search
        }).lean();

        console.log("🔹 Query result:", branchInfo);

        if (!branchInfo) {
            console.log("❌ Error: Bank Doesn't Exist in DB");
            return res.status(404).json({ success: false, message: "Bank Doesn't Exist" });
        }

        console.log("✅ Found Bank:", branchInfo);
        res.status(200).json({ success: true, branchInfo });
    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


const addBankAcc = async (req, res) => {
    try {
        const { ifsc, bankName, password, branchName, logo, address, products } = req.body

        const exits = await bankAccModel.findOne({ifsc})
        if(exits){
            return res.json({success : false, message : "Bank Account Already Exists"})
        }

        const newBankAcc = new bankAccModel({
            ifsc,
            bankName,
            password,
            branchName,
            logo,
            address,
            products
        })

        const user = await newBankAcc.save()

        res.json({success : true, message : "Account Created Successfully"})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}

export { loginBankAcc, addBankAcc, getBankAccInfo }