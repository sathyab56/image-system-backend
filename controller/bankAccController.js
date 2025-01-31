import bankAccModel from "../models/bankAccModel.js"


const loginBankAcc = async (req, res) => {
    try {
        console.log(" Received login request:", req.body); // Log frontend request

        const { branchName, password } = req.body;

        if (!branchName || !password) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        console.log(" Searching for branch:", branchName);

        // Use case-insensitive search to avoid mismatches
        const user = await bankAccModel.findOne({ 
            branchName: { $regex: `^${branchName}$`, $options: "i" }
        });

        console.log(" Query Result:", user); // Log MongoDB query result

        if (!user) {
            return res.status(404).json({ success: false, message: "Bank Doesn't Exist" });
        }

        // If password is stored as a hashed value, use bcrypt to compare
        if (user.password === password) {  // Change this to bcrypt.compare(password, user.password) if hashed
            return res.status(200).json({ success: true, branchInfo: user });
        } else {
            return res.status(401).json({ success: false, message: "Invalid Credentials" });
        }

    } catch (error) {
        console.error(" Error:", error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};


const getBankAccInfo = async (req, res) => {
    try {
        const { branchName } = req.body

        const user = await bankAccModel.findOne({branchName})
        
        if(!user){
            return res.json({success : false, message : "Bank Doesn't Exists"})
        }

        res.json({success : true, branchInfo : user})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}

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