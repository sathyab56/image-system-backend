import mongoose from "mongoose";
console
const bankAccSchema = new mongoose.Schema({
    ifsc : {
        type : String,
        required : true,
    },
    bankName: {
        type: String,
        required: true,
    },
    password : {
        type : String,
        required : true
    },
    branchName : {
        type : String,
        required : true,
        unique : true
    },
    logo : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    products : {
        type : Array,
        required : true
    }
}, { minimize : false })

const bankAccModel = mongoose.models.bankAcc || mongoose.model('bankAccs', bankAccSchema)

// Function to initialize the database and insert sample data
const initializeDatabase = async () => {
    try {
        // Sample data to insert
        const sampleData = [
           
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1102,
                        branchName: "Kalathode",
                        address: "V/140/(2) Jsr Square Building, Kalathode, Ollukkara (Po). Thrissur District. Pin 680655."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1107,
                        branchName: "Kattapana",
                        address: "11/239-D Mani'S Complex, Village Office Road, Near New Bus Stand, Kattappana- 685508"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1115,
                        branchName: "Thiruvalla",
                        address: "Xxvi 185/1 Pulimattathu Building, Ramanchira, Muthoor P.O. Thiruvalla, Pathanamthitta 689107."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1103,
                        branchName: "Edapally",
                        address: "38/211 A, Grace Tower, Near Edappally Bye Pass Junction, Edappally – Ernakulam 682024"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1111,
                        branchName: "Perumbavoor",
                        address: "20/1170 A, Near Jacobite Church, Kottayam Road, Perumbavoor, Ernakulam 683542."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1105,
                        branchName: "Palai",
                        address: "Melhor Building, Room No 372, A1, Near Rto Office , Chethimattom, Palai Kottayam 686575."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1108,
                        branchName: "Kozhikode",
                        address: "6/140 A, G, Grand Arcade, Near Christian College, Kannur Road, Nadakkavu, Kozhikode 673011"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1110,
                        branchName: "Perinthalmanna",
                        address: "14/32/6, Metro Tower, Ground Floor, Jubilee Junction, Pattambi Road, Perinthalmanna, Malappuram 679322."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1109,
                        branchName: "Chandranagar",
                        address: "Room No A3/3163/15, Ground Floor , Khloe Complex, Nh, Chandra Nagar, Palakkad 678007."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1136,
                        branchName: "Kuzhalmannam  II",
                        address: "Xv/381 Kannanur Junction,Kuzhalmannam-Ii,Kannadi,Palakkad 678702"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1104,
                        branchName: "Kollengode",
                        address: "Xiv/579, Safa Tower, Near Sai Medical Center, Payyalore, Kollengode, Palakkad 678506."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1106,
                        branchName: "Valkulambu",
                        address: "16/825, 826,  Kodiyattil Complex, Near Mmup School, Valkulambu, Koranchira Po, Palakkad  678684."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1144,
                        branchName: "Thuneri",
                        address: "5/328 & 328A,Near Ration Shop,Thuneri,Ooty,Nilgiris District,Tamil Nadu 643002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1130,
                        branchName: "Vennikulam",
                        address: "309/1-3-1, Thottathil Building, Vennikulam , Puramattom,Pathanamthitta District Pin  689544"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1139,
                        branchName: "Elayamuthur",
                        address: "101/2, Near Mosque,, Kallapuram Road, Elayamuthur,Tiruppur, Tamilnadu 642154"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1116,
                        branchName: "Avanavancherry",
                        address: "No Viii/165/2 Chirayil Building, Avanavancherry P.O. Attingal, Thiruvananthapuram, 695101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1119,
                        branchName: "Kolanchery",
                        address: "Iv/651, 652, 649, Santhi Park Apartments, Madurai Kochi Road,Kolencherry. Ernakulam 682311"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1114,
                        branchName: "Muvattupuzha",
                        address: "Ground Floor, Pearl Tower,Near Signal Junction,Velloorkunnam,Muvattupuzha,Ernakulam District. Pin 686661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1138,
                        branchName: "Chengalam East",
                        address: "Pulthakadiyil Buildings, Sy.No 502/10, Ground Floor, Oppositite St.Antony'S School, Chengalam East, Akalakunnam Panchayath, Kottayam, 686585"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1118,
                        branchName: "Kodungallur",
                        address: "197,198,199,200, Edison Complex, North Paravur Road, Kodungallur, Thrissur 680664"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1131,
                        branchName: "Kollam",
                        address: "A & S Towers, Kallumthazum Junction, Kallumthazum, Kilikolloor, Kollam , Kerala- 691004"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1122,
                        branchName: "Irinjalakuda",
                        address: " 566A, Blaze Court Building, Tana, Irinjalakuda P O, Thrissur, Kerala 680121."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1121,
                        branchName: "Chalakudy",
                        address: "Ground Floor, Mercherry Plaza, Near North Bus Stand, Chalakudy, Thrissur District. Pin 680307"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1117,
                        branchName: "Valappad",
                        address: "Sy No 583, Near Ioc Petrol Pump, Nh 17, Edamuttom, Thrissur-680568"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1124,
                        branchName: "Maradu",
                        address: "Ragam,Door No 10106,Maradu Village,Kanayannur Taluk,Ernakulam District – 682304"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1128,
                        branchName: "Mukkam",
                        address: "1/829 A-829C, Ground Floor, K V Complex, Mukkam, Kozhikode Distrit. Pin 673602"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1120,
                        branchName: "Valanchery",
                        address: "Sy No: 338/5/6, Ground Floor,Rahath Annex, Kuttipuram Road, Valanchery, Malappuram - 676552"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1113,
                        branchName: "Alathur",
                        address: " Xv/1053, Xv/1054,Ground Floor,Thrissur Tower,Near Alathur Court,Court Road, Alathur 678541"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1123,
                        branchName: "Malappuram",
                        address: "10/89,10/90,10/91, Ground Floor ,U M K Tower, Jubilee Road, Bypass-Uphill, Malappuram. Pin- 676505"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1127,
                        branchName: "Kotakkal",
                        address: "13/832,Mas Building,Edarikode, Kottakkal,Malappuram-676501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1132,
                        branchName: "Kottayam",
                        address: "Adithya Commercial Arcade,Ground And First Floor, No Xvi/118B,118H,Mc Road, Kottayam. Kottayam District. Pin 686001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1154,
                        branchName: "Adoor",
                        address: "Survey No 153/16 & 148/25-1,Near Fire Station,M C Road,Adoor,Pathanamthitta - 689 693"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1137,
                        branchName: "Changaramkulam",
                        address: "16/441, 16/442 Ground Floor, Glasco Tower, Changaramkulam,  Main Road,Malappuram District. Pin 679575                                                                                        "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1141,
                        branchName: "Thalassery",
                        address: "Survey No 24/P, Near Alp School, Thalassery Desamangalam Road, Thalassery Thrissur 679532"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1125,
                        branchName: "Poopara",
                        address: "4/313 Kumali Munnar Road, Santhanpara, Poopara, Idukki 685619."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1129,
                        branchName: "North Paravur",
                        address: "Vithayahil Square,  Sy No: 245/2 B. Near Kmk Junction,Paravur -Cherai Road,North Paravur, Pin 683513"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1146,
                        branchName: "Vadakkumbhagom",
                        address: "No.466/A1,2,3., Sivasakthi Shopping Centre, Vadakkumbhagom Village, Ashtamichira,Thrissur District,Pin-680731"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1153,
                        branchName: "Thripunithura",
                        address: "Sy No 116/3, Srishti Building,Near Police Station,Vaikom Road,Thripunithara – 682301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1140,
                        branchName: "Poomalaikunda",
                        address: "No.189/1B,Dharmapuri, Dharmapuri-Kottur Main Road, Theni, Tamil Nadu  625520"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1145,
                        branchName: "Uzhavoor",
                        address: "222/5, Puthiyakunnel Buildings, Near St Stephens  Church, Uzhavoor, Kottayam District – Pin 686634"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1171,
                        branchName: "Vanchiyoor",
                        address: "Ground Floor,Tc-82/1779,Vignesh Tower,Opp: Holy Angels School,Convent Road,Vanchiyoor,Thiruvananthapuram Pin 695 035"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1155,
                        branchName: "Patturaickal",
                        address: "Prasad Arcade,Ground Floor,Sy No: 1610/3P,Opposite Cmi Devamatha Provincial House,Shornur Road,Patturaikkal,Thrissur – 680022"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1168,
                        branchName: "Palakkad-Town",
                        address: "Ground Floor,18/763-2,Ahamed Square,Near Ksrtc Stand,Ksrtc Link Road,Dpo Junction,Palakkad . Pin 678007"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1162,
                        branchName: "Koothattukulam",
                        address: "Ground Floor,Sy No 605/3-1,604/2, Johns Tower, Near Bsnl Office, T B Junction,Mc Road, Koothattukulam , Ernakulam Dist, Pin- 686 662"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1164,
                        branchName: "Manarcad",
                        address: "Ground Floor, Vettikkunnel Arcade, Manarcad - Puthuppally Road, Manarcad, Kottayam  District. Pin 686 019"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1159,
                        branchName: "Kannur",
                        address: "No :Ttn/9/794, Parkans Building, Thavakkara,Kannur, Kannur – 670002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1169,
                        branchName: "Pozhuthana",
                        address: "Ground Floor,Room No:10/330/C/D/E,Kpm Building ,Near Pozhuthana Town Bus Stop, Vythiri 6Th Mile Road, Wayanad 673575"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1152,
                        branchName: "Kinalur",
                        address: "7/158 C Kinalur,Near Ezhukandi Junction,  Thamarassery, Kozhikode – 673612"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1165,
                        branchName: "Manjeri",
                        address: "Ground Floor,16/811-822, V K Building, Manjeri-Nilambur Road , Manjeri , Malappuram District Pin- 676121"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1167,
                        branchName: "Nilambur",
                        address: "Vp Plaza, Near Little Flower Higher Secondary School, Janathapadi, Nilambur,Malappuram District Pin 679329"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1134,
                        branchName: "Ottapalam",
                        address: "D Square, Palakkad Road, Ottapalam,Palakkad, Kerala- 679101 ,"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1157,
                        branchName: "Anaviratty",
                        address: "Ground Floor,Door No:14/349, Survey No:355/4, Kambiline Junction,Anaviratty P O, Idukki Ditrict Pin -628057"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1112,
                        branchName: "Adimaly",
                        address: "1132, 1St Floor, Valiyaparambil Complex, Nh-49,Adimaly,Idukki District, Pin 685561"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1183,
                        branchName: "Elamkulam",
                        address: "Ground Floor,54/3854-1, St.Marys Tower, Elamkulam Junction, S A Road,  Elamkulam, Kadavanthra Ernakulam Dist ,Pin- 682020"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1156,
                        branchName: "MG Road,Thrissur",
                        address: "Sy. No : 1422/1,Room No 25/469/6-13, Pooma Complex, Near Naduvilal Junction,M G Road, Thrissur - 680001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1143,
                        branchName: "Thodupuzha",
                        address: "195/23,  Kuruthukulam Arcade, Kanjiramattam Bypass Road, Opposite Ksrtc Bus Stand, Thodupuzha. Pin-685584"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1126,
                        branchName: "Kothamangalam",
                        address: "Ward No 2/368, Mm Towers, Aluva Munnar Bypass, Malayinkeezhu Junction, Kothamangalam, Ernakulam District Pin 686691"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1142,
                        branchName: "Bakery Junction",
                        address: "Marvallil Dr.Koshy'S  Buildings,Tc-29/4013(1), Ground Floor, Near Bakery Flyover,Thycaud P.O. Panavila  Thiruvananthapuram  Pin 695014"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1148,
                        branchName: "Andheri East",
                        address: "Unit No.15,Options Primo Marol, Industrial Area, Midc Cross, Road No.21, Nearvijay Nagar, Flyover Bridge, Andheri East-400093"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1174,
                        branchName: "Kuravilangad",
                        address: "Ground Floor, Nidhiry Bazar, Near Panchayath Office, Central Junction, Kuruvilangad, Kottayam Dist -686633"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1135,
                        branchName: "Pattambi",
                        address: "6/657,Kopan Commercial Centre, Pattambi Palakkad Main Road, Pattambi, Palakkad District Pin: 679306"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1147,
                        branchName: "Vattavada",
                        address: "No 33/C, Near Krishi Bhavan, Koviloor P O, Idukki District Kerala Pin -685615"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1173,
                        branchName: "Karol Bagh",
                        address: "House No/Plot No R/03-Block C/5 ,Ground Floor, Karol Bagh,New Rohtak  Road, North Delhi,Delhi-110005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1158,
                        branchName: "Kanjirappally",
                        address: "Ground Floor 8/399 A2/A3 , Trade Centre-Near Hp Petrol Pump , Myca Junction, 686507"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1150,
                        branchName: "Palavayal",
                        address: "8 / 516 A, B, C, D, Opposite St John'S Hs School, Palavayal P O, Kasargode - 670511"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1184,
                        branchName: "Chemmanthatta",
                        address: " No 344A,B,Ground Floor,Near Ayyappankav Temple,P O Chemmanthatta,Thrissur,Kerala- 680501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1160,
                        branchName: "Kiralur",
                        address: "Door No 8 / 553 E, Sy No 203 /1P, Near Mount Carmel Church,Kiralur Village, Thalappilly Thaluk, Thrissur Dist, Pin-680541"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1149,
                        branchName: "Inchamudi",
                        address: "No: 239 / 1, Cherpu- Thriprayar Road, Chirakkal Jn, Inchamudi, Thrissur - 680564"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1151,
                        branchName: "Thayyur",
                        address: "Sariga Complex, Ground Floor 3/240, Opposite Govt High School, Thayyur, Thrissur- 680584"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1192,
                        branchName: "Kuppadithara",
                        address: "Thoppil Buildings, Ground Floor, 6/160, Chiriankolly Kuppadithara Road, Cheriankolli, Kuppadithara, Wayanad – 670645"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1181,
                        branchName: "Palarivattom",
                        address: "Ground Floor,Pocudyil Building,32/2496, A ,B Near Slplaza, Palarivattom, Kochin-682025"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1185,
                        branchName: "Pilakkad",
                        address: "Svy No: 54/12, 54/13, Rabeeh Tower,Pilakkad Jn, Thali Road,  Thrissur-680585"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1193,
                        branchName: "Virupakka",
                        address: "Rabiya Tower, Survey No:79/4, Virupakka, Vazhani Po, Thrissur, 680589"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1434,
                        branchName: "Hatta",
                        address: " No 261/14, Near Bus Stand,Opp Maharani Laxmibai School,Hatta P O, Hatta Dist,Madhya Pradesh - 470775"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1175,
                        branchName: "Ranni",
                        address: "Thannimoottil Building ,Ground Floor , Near Sc Up School ,Pazhavangadi , Punalur –Muvattupuzha Road ,Ranni,Pathanamthitta Pin 689673"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1182,
                        branchName: "Ettumanoor",
                        address: "Ground Floor ,Chirayil Arcade, Ettumanoor, Kottayam,686631"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1187,
                        branchName: "Mallappally",
                        address: "Ground Floor,Vattasseril Plaza , Theatre Junction, Mallappally – Thiruvalla Road,Pathanamthitta – 689585"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1186,
                        branchName: "Changanasserry",
                        address: "15/139 A, Sweety Building, Laikkad Bus Stop,Perunna, Changanassery-686102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1172,
                        branchName: "Koramangala",
                        address: "Golden House, 820 , 8Th Block, Ganapati Temple Road Koramangla,Bangalore,560095"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1161,
                        branchName: "Keezhanthoor",
                        address: "Door No- 3/239 , Sv No- 449/9 , Kochumalayil House, Keezhanthoor,Kanthaloor P O , Idukki Dist,  Pin- 685620,"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1177,
                        branchName: "Dumka",
                        address: "No 11/35 ,Ward No 13,Plot No: 72/76,Near Teen Bazar Chowk, Bhagalpur Road ,Dumka, Jharkhand, Dumka Pincode-814101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1179,
                        branchName: "Rohini",
                        address: "No- 15, F- 26, Sector- 7, Rohini, New Delhi - 110085 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1176,
                        branchName: "Paschim Vihar",
                        address: "14/474 Ground Floor,Sunder Vihar, Paschim Vihar, North Delhi Pin 110087"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1188,
                        branchName: "Pathanamthitta",
                        address: "Kuzhiyil Geevs Arcade, Near Police Station, Old Police Station Road, Opp. Municipality Office,Pathanamthitta, Pin 689645"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1189,
                        branchName: "Cherthala",
                        address: "Jt Trade Centre, Near X-Ray Junction, Tsc Road, Alleppy- Cherthala Road, Alleppy Dist-688524, Kerala."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1198,
                        branchName: "Kanhangad",
                        address: "Ground And First Floor, M K Tower, Door No: 15/9A, 15/9B, Opposite To Lic Office, Kanhangad Main Road, Kanhangad, Kerala -671315"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1199,
                        branchName: "Vadakara",
                        address: "First Floor, Crystal  Building, Opposite Jyothi Petrol Pump, Karimbanapalam, Vadakara - 673101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1201,
                        branchName: "Tirur",
                        address: "A A K Tower (Parappurath Tower) Naduvilangadi, Tirur, Malappuram- 676107 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1191,
                        branchName: "Thathamangalam",
                        address: "Thathamangalam - Krishna, Block No. 49A/48 Near Bhajana Madam, Thathamangalam Jn, Chittoor-Kozhinjampara Road, Sh-27, Palakkad - 678102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1204,
                        branchName: "Mannarkkad",
                        address: "Kudu Building, Near Kseb Office, Kozhikode- Palakkad Main Road, Mannarkkad, Palakkad – 678582"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1203,
                        branchName: "Chavakkad",
                        address: "T.T Complex, North Bypass Road, Friendship Nagar, Chavakkad , Kerala-680506"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1211,
                        branchName: "Pattikadu",
                        address: "Alappat Building, Near Old Nh Road, Pattikkad, Thrissur, Kerala- 680652"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1209,
                        branchName: "Aluva",
                        address: "Door No: 19/253 (2), Ground Floor, Dew Properties, Near Bsnl Office , Ima Junction, Power House Road, Aluva - 683101."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1197,
                        branchName: "Alapuzha",
                        address: "Kainakari Building, Ground Floor & First Floor 15/492D, Bl-04/27  Gf And 1329 Sq Feet First Floor, Near To Power House, Shavakottapalam Ernakulam- Alapuzha Road Alapuzha Pin 688007"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1200,
                        branchName: "Kayamkulam",
                        address: "Kadeesa Orthodox Cathedral Building, First Floor, Near Police Station, K.P Road, Kayamkulam, Alapuzha, Pin-690502."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1202,
                        branchName: "Vattiyoorkavu",
                        address: "10/111 Bhaskara Towers  , Opposite Saraswathy Vidhyalaya, Arappura Jn,   Vattiyoorkavu, Trivandrum 695013"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1210,
                        branchName: "Vadakkencheri",
                        address: "No.1230 – 34,Mannarkudi Building,Thrissur Road, Vadakkenchery, Palakkad,678683"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1212,
                        branchName: "Wadakkanchery",
                        address: " Ground Floor, Muscat Plaza, Near: Dist Hospital Ottupara, Wadakkanchery, Thrissur. Kerala.  Pin - 680590"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1206,
                        branchName: "Kottarakkara",
                        address: "Uthradam Building, Opp Kristuraj Hospital,Qs Road, Pulamon, Kottarakkara, Kerala-691531"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1213,
                        branchName: "Kanjappally",
                        address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641 653"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1214,
                        branchName: "Vadapudur",
                        address: "No 336/1D,Opp.J V Complex,Pollachi-Kovai Main Road,Vadapudur Village-641032,Coimbatore Dist,Tamilnadu"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1216,
                        branchName: "Mannuthy",
                        address: "Pookkodan Arcade, Near Esaf Bhavan, Mannuthy, Thrissur-Kerala-680651"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1207,
                        branchName: "Kumbanad",
                        address: "No. 15/1002, Acel Park, Muttumon Jn. Kumbanad, Pathanamthitta District. Pin- 689547 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1170,
                        branchName: "Raipur",
                        address: "Kartar Sharan Niwas, Pandritarai Main Road,Near Mandi Gate, Raipur P O, Raipur Dist, Chhattisgarh – 492001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1220,
                        branchName: "Mysore",
                        address: "Ground Floor , 484  Ashoka Road , Mysore, Karnataka,570001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1226,
                        branchName: "Mannanthala",
                        address: "No.37/9, Daniel Tower, M C Road, Mannanthala, Mannanthala  P O , Thiruvanathapuram – 695015"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1208,
                        branchName: "Mavelikara",
                        address: "Geo Commercial Complex, Ground Floor Vi/62,63, Bl-55/17, Mitchel Junction , Mavelikara, Pin-690101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1230,
                        branchName: "Haripad",
                        address: "Door No 21/22, Gloria Arcade, Near R K Junction, N H 66, Haripad, Alapuzha, Pin : 690514"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1225,
                        branchName: "Paravoor Part",
                        address: "Ground Floor S-163/9-2 Pukkulam Bus Stop Jn. Paravur Part Paravur- Chathannur Road Paravur Part- Kollam Pin 691301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1217,
                        branchName: "Kazhakkoottam",
                        address: "Rafa Complex Ground Floor Kp- Iv/199 C.D.E.F  Opposite To Ioc Outlet Kazhakoottam.Pin 695582"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1194,
                        branchName: "Ranchi",
                        address: "Door No -2,3,Manoranjan Apartments ,Kadru Main Road, Kadru, Ranchi,Jharkhand- 834002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1205,
                        branchName: "Angamaly",
                        address: "Ground Floor Bl-2, 552/7/3, 552/21, T.B Junction Angamaly - Manjapra Road, Angamaly-683572"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1224,
                        branchName: "Piravom",
                        address: "Piravom Tower,Ground Floor,5/212 E,Near Old Petrol Pump Jn,Piravom-Muvattupuzha Road,Piravom.Ernakulam-686664"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1222,
                        branchName: "Kozhenchery",
                        address: " No:372/7-2,Koithodathu Building  ,Near Maramon Bridge, P O Maramon, (Dist),Kerala-689549"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1166,
                        branchName: "Kasaragod",
                        address: "New Stylo Complex, Near Police Station, Bank Road, Kasaragod, Pin 671121"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1229,
                        branchName: "Irimbranellur",
                        address: "Rs Tower, Enamakkal P O, Near Kettungal, Irimbranellur, Thrissur Dst, Pin : 680510"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1221,
                        branchName: "R S Puram",
                        address: "Srivari Kikani Center,Ground Floor,Wd-22,2/4,Chinthamani Jn,Krishnaswami Road,Coimbatore 641002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1233,
                        branchName: "Chalakkal",
                        address: "Door No: 10/31 C,D,Chitilappally Towers, Old Market Junction, Chalakkal, Thrissur District. Pin 680552"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1218,
                        branchName: "Velachery",
                        address: "No:267/33,Rite Choice Apartments,Velachery Main Road,Velachery,Chennai-600042"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1219,
                        branchName: "Mogappair East",
                        address: " No. 273, Opposite Naidu Hall, Near Dav High School, Panneer Nagar, Mogappair East, Chennai 600037"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1235,
                        branchName: "Mottanuthu",
                        address: "Door No 2/104, Nagulagoundanpatty Village , P O Mottanuthu, Theni District, Tamil Nadu, 625512"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1231,
                        branchName: "Unjampatty",
                        address: "P P S Complex, 452,Periyakulam Road, Unjampatty Village, Theni District, Tamil Nadu. Pin 625531"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1234,
                        branchName: "Changanassery",
                        address: "Marrette Tower, Near Private Bus Stand, Palace Road, Changanassery, Kottayam Dist,686101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1232,
                        branchName: "Kodom",
                        address: "A. L. C. Memorial Buildings, Sy No: 1/42 Aib,Kodom Village, Vellarikundu Taluk, Kasaragod Dist. Pin- 671531"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1195,
                        branchName: "Vijayawada",
                        address: "Ground Floor,40-9/1-24,119/1B,3B,Opposite To Paradise Hotel,Benz Circle,Benz Circle Road,Vijayawada-520010"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1236,
                        branchName: "Cheemeni II",
                        address: "Sy No44/1, Cheemeni Village, Kalichamaram Junction, Kasargod District,671314"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1227,
                        branchName: "Nagpur",
                        address: "Vimal Enclave, Ground Floor, Ugf -1/2 18, Near Vnit College, Gopal Nagar, Nagpur, Maharashtra - 440022"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1196,
                        branchName: "Bhubaneshwar",
                        address: "No – 453/1471 , Jayadev Vihar Road, Jaydev Vihar, Bhubaneshwar, Dist . Khurda, Odisha -   751 013"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1228,
                        branchName: "Bhopal",
                        address: "G-9 Tower Ground Floor A4-A5,  Opposite To Aura Mall, Gulmohar Mahakali Girinirmad Sehkari Samiti, Maryadit, Bhopal,462039"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1238,
                        branchName: "Pune",
                        address: "No 9,10,19, Samruddhi Center, Near Chandan Nagar Square, Kharadi, Pune Nagar Road,Pune, Maharashtra , 411014"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1291,
                        branchName: "Vennur",
                        address: "Door No: 31,32/9, Sy No 105/2, Vennur Village, Vennur P O, Thrissur - 680587"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1292,
                        branchName: "Kainakary ",
                        address: "No.167 D,Pazhayampallil Building, Kainakary North Village,Kainakary P.O,  Alappuzha Dist Pin - 688501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1240,
                        branchName: "G C Avenue",
                        address: "No 34, Bagati House, Ganesh Chandra Avenue, Kolkata, Pin - 700013"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1242,
                        branchName: "Garia Rathtalla",
                        address: "No. 3151, Sanjeevani Apartment, South 24 Parganas, Garia P O, Kolkata Dist, West Bengal- 700084"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1251,
                        branchName: "Cuttack",
                        address: "S R Conclave,Near Sangam Cinema Hall, Mahatab Road,Arunodaya Market P.O, Cuttack, Odisha - 753012"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1237,
                        branchName: "Indore",
                        address: "Eb 237,Kachan Place,Opp.Bombay Hospital, 94 Scheme, Bombay Hospital Road, Indore, Madhya Pradesh - 452010"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1247,
                        branchName: "Vashi",
                        address: "Yogita Sadan, Ground Floor, Plot No.3, Sector 26-A, Koprigoan,Palm Beach Road, Navi Mumbai-400703"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1298,
                        branchName: "Ramtek",
                        address: "Channa Classes,Ambedkar Chowk,Tehsil Road, Ramtek,Maharashtra-441106"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1262,
                        branchName: "Butibori",
                        address: "Metro Square,No.28,29,30,Plot No-X-1,Near Police Stn,Butibori Industrial Area,Rengapar,Nagpur,Maharashtra-441122"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1368,
                        branchName: "Kurkheda",
                        address: "Manuja Complex,Near Old Bus Stand,Main Road Kurkheda,Gadchirol Dist,Maharashtra-441209"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1279,
                        branchName: "Bhandara",
                        address: "Khan Complex,Plot No.34,Ground Floor,Opp.Jindal Petrol Pump,Sainath Colony,Nh-6 Road,Bhandara,Maharashtra-441904"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1263,
                        branchName: "Wardha",
                        address: "Giriraj Bhavan,Plot No-2,Aarti Chowk,Near Aarti Takies,Nagpur Road,Wardha,Maharashtra-442001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1258,
                        branchName: "Washim",
                        address: "Patni Commercial Complex,Wing-B,No.3,4,5,Risod Road,Washim,Maharashtra-444505"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1299,
                        branchName: "Warud",
                        address: "No.357,Ground Floor,Shriraowadi,Approach Road,Warud, Amravati-444906"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1366,
                        branchName: "Betul",
                        address: "Awasthi Complex,1St Floor,Near Canara Bank & Lic Office,Jh College Road,Betul,Madhya Pradesh-460001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1363,
                        branchName: "Seoni",
                        address: "Ist Floor,Ramayan Sadan,Jabalpur Road,Lugharwada P.O, Bhinjharwada,Seoni,Madhya Pradesh-480661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1294,
                        branchName: "Waraseoni",
                        address: "Ward No 7, Near Railway Crossing Wara, Waraseoni, Madhyapradesh-481331"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1365,
                        branchName: "Katni",
                        address: "No: 612, Tiwari Bhavan, Katni P O, Katni Dist, Madhya Pradesh- 483501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1364,
                        branchName: "Shahdol",
                        address: "Ground Floor, No.1/91, Near Madan Hardware, Burhar Road, Shahdol  , Madhyapradesh- 484001 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1362,
                        branchName: "Nagod",
                        address: " Plot No 379/2, Bagri Tower , Singhpur Chowk , Singhpur Road ,Nagod P O,Satna, Madhya Pradesh-485446"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1245,
                        branchName: "Bhilai",
                        address: "Ground Floor,Shanti Plaza,Near Maa Ambey Hospital,Power House,G.E Road,Bhilai,Durg,Chhattisgarh-490011"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1257,
                        branchName: "Balod",
                        address: "Krishna Plaza,Near Railway Station,Haldi,Balod-Rajnandgaon Road,Balod,Chhattisgarh-491226"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1286,
                        branchName: "Rajnandgaon",
                        address: "Kanwar Heights,Khasra Ni80/14,86/19,Kourin Bhatha Village,Rajnandgaon,Chattisgarh-491441"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1289,
                        branchName: "Donagargarh",
                        address: "Bldng.No.932/2-3,Near Bhagat Singh Square,Dongargarh,Rajnandgaon,Chattisgarh-491445"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1276,
                        branchName: "Mahasamund",
                        address: "Rajput Tower,Raipur Road,Mahasamund,Chattisgarh-493445"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1297,
                        branchName: "Bagbahara",
                        address: "Krishna Kunji,Plot No30/9,Lalpur,Bagbahara,Mahasamund,Chhattisgarh-493449"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1275,
                        branchName: "Pithora",
                        address: "No-12,Ward No.47,Bus Stand Road,Pithora,Mahasamund,Chattisgarh-493551"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1344,
                        branchName: "Pakhanjore",
                        address: "Survey No.355, First Floor, Opposite Police Station, Bhanu Pratappur Road,Kanker Dist, Chattisgarh"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1274,
                        branchName: "Korba",
                        address: "Guru Shraddha Tower,Khasra No192/17,193/11,Naharika Gantagarh Road,Korba,Chhattisgarh-495677"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1278,
                        branchName: "Raigarh",
                        address: "Shyam Tower,Jagatpur Village,Dhimrapur, Raigarh,Chhattisgarh-496001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1347,
                        branchName: "Chamarajanagar",
                        address: "Asha Complex,Bujangeshwara Extension Sampige Road,Near Axis Bank,Chamarajanagar,Karnataka-571313"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1348,
                        branchName: "Mandya",
                        address: "No :1201 , Ashok Nagar,2Nd Cross  , Vv Road, Mandya-Karnataka- 571401"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1349,
                        branchName: "Hassan",
                        address: "Kalabairaveshwara Tower,Ward No 34,H N Pura Road,Channapattana,Hassan Dist,Karnataka - 573201"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1376,
                        branchName: "Minjur",
                        address: "No. 453A,Th Road,Near Minjur Police Station,Minjur P O,Tiruvallur, Tamil Nadu.- 601203."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1369,
                        branchName: "Kovalam",
                        address: "No. 2/278A, Sivaneshwara Building, Near Kovalam Bus Stand, Kovalam Post, Kanchipuram Dist, -Tamilnadu-603112"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1380,
                        branchName: "Thiruvannamalai",
                        address: "N0.8.Vijay Towers, Muthuvinayagar Kovil Street,Railway Station Road, Thiruvannamalai P O, Thiruvannamalai Dist, Tamil Nadu - 606601"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1310,
                        branchName: "Batlagundu",
                        address: "M.Saraswathy Arcade,94A/2,First Floor,Near O2 Residency, Dindigul Road Batlagundu-624202."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1372,
                        branchName: "Andipatti",
                        address: "No:100/1-2, Kamatchi Complex, Vaigai Dam Road, Near Angel Vidhya Mandhir Matric Hr Sec School, Andipatti Post, Theni, Tamilnadu-625512"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1379,
                        branchName: "Bodinayakanur",
                        address: "No 13/6/90,Thevaram Main Road, Mc Puram,Bodinayakanur P O, Theni, Tamilnadu.Pin 625582"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1382,
                        branchName: "Nagercoil",
                        address: "No.1 ,Edison'S Building, S L B  South Road, Opp.S L B Girls High School, Nagercoil P O, Kanyakumari Dist Tamilnadu -629001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1378,
                        branchName: "Thakkalai",
                        address: "Angel Complex,Thakkalai, Mettukadai Road,Padmanabapuram Muncipality,Kalkulam Taluk,Kanyakumari,Tamil Nadu-629175"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1253,
                        branchName: "Colachel",
                        address: "No 23-86/2,23-86/3,  Jemi Complex, Near Anna Salai, Opp Dsp Office, Colachel, Kanyakumari, Tamil Nadu- 629159"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1373,
                        branchName: "Kanyakumari",
                        address: "No 17/48 - A3,Leela Balan Complex, Near Vivekanandha Kendra, Madhavapuram, Kanyakumari District , Pin - 629702   "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1381,
                        branchName: "Kanchipuram",
                        address: "20 Ab, Vilakadi Koil Street, Near Keeramandapam Bus Stop, Kanchipuram, Tamilnadu - 631502"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1313,
                        branchName: "Elavamalai",
                        address: "Sy.No.284/17,Elavamalai Village, Near Grace Hss,Bhavani-Kavundapadi Road, Erode,Tamil Nadu-638316"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1321,
                        branchName: "Ambodi",
                        address: "Syno.229,Near Sellap Panpalayam Bus Stop,Coimbatore-Sathyamangalam Road,Coimbatore,Tamil Nadu-638459"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1377,
                        branchName: "Kangeyam",
                        address: "No 588A,588A-1,Tiruppur Road, Kangeyam, Tamilnadu- 638701"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1371,
                        branchName: "Ondi Puthur",
                        address: " No 589 M.M Tower,  Kamarajar Road,  Uppilipalayam (Po),Singanallur,Coimbatore- Tamil Nadu -641015"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1323,
                        branchName: "Vellanaipatti",
                        address: "No.3/2-1,2,R R Complex,Near P A M School,Arasur Road,Vellanaipatti Village,Coimbatore,Tamil Nadu-641048"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1308,
                        branchName: "Mettupalayam",
                        address: "Ground Floor, No.196/3B,Opposite To Sree Ganga Saw Mill, Ooty Highway,  Mettupalayam,  Coimbatore (Dt.).Pin-641301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1266,
                        branchName: "Pollachi",
                        address: "58/3A,Opp.Atsctheater,Muncipal Boys Hss Street,Pollachi, Coimbatore, Tamil Nadu-642001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1269,
                        branchName: "Anamalai",
                        address: "No 83, 630/2015, Near Old Bus Stand,Pollachi Main Road , P O Anamalai, Coimbatore, Tamil Nadu-642104 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1360,
                        branchName: "Payyannur",
                        address: "Pmc. Xvii / 1940, K V G Complex, New Bus Stand Road, Payyannur, Kannur Dist- Kerala- 670307"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1352,
                        branchName: "Kalpetta",
                        address: "No 16/155-1,De Paul Arcade , Kalpetta, Wayanad,Kerala-673121"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1359,
                        branchName: "Koyilandi",
                        address: "Delma Complex, Kannur Road,Koyilandi,673305"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1312,
                        branchName: "Thinoor",
                        address: "Mp Complex, Ground Floor Building,Kumbalachola Junction,Po Mullambath,Kumbalachola -Kammai Road, Kozhikode-673507"
                
                
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1301,
                        branchName: "Balussery",
                        address: "Ground Floor,Down Town Complex,Balussery-Koilandi S H Road,Balussery,Kozhikode,Kerala-673612"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1273,
                        branchName: "Muthalamada",
                        address: "Ist Floor,P.S.S Plaza,Muthalamada Road,Muthalamada, Palakkad-678507"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1283,
                        branchName: "Edakkara",
                        address: "Musliyarangadi,Edakkara P.O,Malappuram,Kerala-679331"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1361,
                        branchName: "Mission",
                        address: "No- 332/1-2, Jas Complex, T B Road, Mission Quarters, Thrissur- Kerala- 680001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1356,
                        branchName: "Amballur",
                        address: "Jayamohan Shopping Complex, Ground Floor, Amballur, Thrissur - 680 302"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1293,
                        branchName: "Karimban",
                        address: "No.4/1067-72,Nellamkuzhiyil Building,Neriamangalam Main Road,Karimban,Idukki,Kerala-685602"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1354,
                        branchName: "Vaikom",
                        address: " No:7/448 C, Palackal Court, Near Ksrtc Bus Stand, Kochukavala, Vaikom P O ,Kottayam Dist ,Kerala -686141"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1357,
                        branchName: "Aroor",
                        address: "Vathiazhath Building, Opposite Indian Oil Petrol Pump, Aroor P O, Alappuzha Dist, Kerala- 688534"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1355,
                        branchName: "Thrikkunnapuzha",
                        address: "No 275, Kumbalth Building, ,Thrikkunapuzha P O, Alappuzha,Kerala- 690515"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1267,
                        branchName: "Punalur",
                        address: "Kannan Arcade,13/872 C D,Near Sree Krishna Swami Temple,Anjal Road,Punalur, Kollam-691305"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1285,
                        branchName: "Varkala",
                        address: "Ground Floor,Sham Complex,Opp. Railway Station,Varkala,Thiruvananthapuram-695141"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1300,
                        branchName: "Parassala",
                        address: "Matharakal Complex, Parasuvaikkal,Kaliakkavilai-Thiruvananthapuram Road,Parassala,Thiruvananthapuram-695508"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1383,
                        branchName: "Nalhati",
                        address: "Niribili Bhavan, No. 6668, Near Narkeltala Bus Stand, N H - 60, Nalhati-West Bengal-731220"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1343,
                        branchName: "Bounsi",
                        address: "Upper Ground Floor , Pahtak Ji Bazar, Bhagalpur Hasdiya Road, Bounsi, Banka- 813104"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1346,
                        branchName: "Pakur",
                        address: "Khasara No 1218/2273, Khata No.76, Near Pakur Police Station, Bhagatpara, Pakur P O, Jharkhand-816107"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1345,
                        branchName: "Bagodar",
                        address: " No 1813-1814,Bagodar P O,Giridih Dist, Jharkhand, - 825322"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1255,
                        branchName: "Dhanbad",
                        address: "Bhramdeo Chambers,Saraidhela Main Road,Near Ozone Galleria Mall,Saraidhela,Dhanbad,Jharkhand-828127"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1260,
                        branchName: "Sironcha",
                        address: "Door No 908,Survey No 503/2,Near Bus Stand,Sironcha,Gadchiroli,Maharashtra,442504"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1280,
                        branchName: "Gadchandur",
                        address: "Swapnaputri,Plot No 13,14,19,20,Near Nagar Parishadh,Adilabad Road,Gadchandur,Chandrapur Dist,Maharashtra,442908"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1281,
                        branchName: "Nagbhid",
                        address: "No 463/15,Near Kale Hospital,Nh - 6 Road,Nagbhid,Chandrapur Dist.,Maharashtra-441205  "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1282,
                        branchName: "Warora",
                        address: "No 21,Vinayak Layout,Tilak Ward,Near Ratnamala Square,Warora,Chandrapur Dist.,Maharashtra,442907"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1287,
                        branchName: "Kulasekaram",
                        address: "Sachin Plaza, Kadaivilagam, Cherupallur Post, Kulasekaram, Kanyakumari District – 629161"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1290,
                        branchName: "Brahmapuri",
                        address: "1St Floor,Sri Nandkishor Devaji,Pise Plot No 50,Sheshnagar,Brahmapuri,Chandrapur Dist.,Maharashtra,441206"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1358,
                        branchName: "Kattakkada",
                        address: " No 17/95A- 95B, Kottur Road,Near Kattakada Civil Station,Kattakada P O , Trivandrum Dist,Kerala-695572"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1370,
                        branchName: "Chamorshi",
                        address: "Plot No. 37,Manprabha Complex,Ashti Corner, Mul Road, Chamorshi,Dist. Gadchiroli, Maharashtra – 442603"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1374,
                        branchName: "Thoothur",
                        address: " Jerald Complex, Near To St.Jude'S College, College Road Thoothur, Kanyakumari Dist,Tamil Nadu-629154"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1241,
                        branchName: "Salem",
                        address: "Prema Perumal Trinity Commercial Complex,Near Keerthana Theatre,Salem Junction,Salem,Tamil Nadu-636005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1244,
                        branchName: "Erode",
                        address: "Ground Floor,Velmurugan Complex,Near Dina Thanthi Office,Nachiappa Street,Erode,Tamil Nadu-638001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1264,
                        branchName: "Kottayi-I",
                        address: "C M Arcade,Near Govt Ghss School,Kottayi-I Village,Palakkad, Kerala -678572"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1250,
                        branchName: "Thane",
                        address: "No.1,Eucalyptus,Near R-Mall,Ghodbunder Service Road,Thane West,Thane,Maharashtra-400607"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1284,
                        branchName: "Ambalapuzha",
                        address: "Meera Commercial Complex,Near Manasameera Auditorium,Ambalapuzha-Thiruvalla Road,Ambalapuzha-688561"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1387,
                        branchName: "Koduvayur",
                        address: "Vinayaka Complex, Kottappadi, Koduvayur P O, Palakkad District-Kerala-678501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1252,
                        branchName: "Pazhayannur",
                        address: "Ponnu Complex,Ground Floor,19/803,Pazhayannur-Chelakkara Road,Pazhayannur,Thrissur-680587"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1302,
                        branchName: "Vadanappally",
                        address: "Ground Floor , Kok Square , No 15/237/B , Vadanappally , Chavakkad Road Thrissur  680614"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1388,
                        branchName: "Puthunagaram",
                        address: " No: 1112/2021,Opposite To Islamic English Medium School,Puthunagaram P O,Palakkad Dist,Kerala 678 503"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1295,
                        branchName: "Cherpulacherry",
                        address: "13/1802 & 13/1863, Sharjah Tower, Cherpulacherry Po  , Palakkad, Kerala-679503"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1396,
                        branchName: "Vandithavalam",
                        address: "Ist Floor,Pakkam Complex, Pollachi Main Road,Vandithavalam, Palakkad,Kerala-678534"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1389,
                        branchName: "Vadakarapathy",
                        address: "No:949-950,Velanthavalam Palakad Road, Vadakarapathy P O,Palakkad,Kerala-678556"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1386,
                        branchName: "Elapully I",
                        address: " No 596,Viharas Building, Petta Junction, Elappully P O ,Palakkad,Kerala-678682"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1390,
                        branchName: "Vandazhi I",
                        address: "Velamkunnel Tower,Mangalamdam Road,Mudappallur P.O,Palakkad-678705"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1331,
                        branchName: "Karunagappally",
                        address: "Vandana Towers, Lalaji Junction, Near Vandana Auditorium, Karunagappally, Kollam - 690518"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1493,
                        branchName: "Kurichikkara",
                        address: "Choorangattu Arcade, Near  Up School Thanikkudam, Thanikkudam Junction, Kuruchikkara P O,  Thrissur, Kerala- 680028"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1420,
                        branchName: "Cherpu",
                        address: " No 42/D,Thekkiniyath Tower,Near Urakam Po,Cherpu,District Thrissur,Kerala- 680306"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1246,
                        branchName: "Durg",
                        address: "Samarth Plaza,Polsaypara , Station Road, Durg,Chhattisgarh -  491001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1320,
                        branchName: "Yavatmal",
                        address: "Sheetal Plaza, Ground Floor, No. 78/2Gughane Lay Out, Jam Roadyavatmal, Maharashtra.Pin-445001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1261,
                        branchName: "Kanhan",
                        address: "No.202/2, Kanhan,Beside Taj Complex, Nagpur Road,Maharashtra – 441401"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1306,
                        branchName: "Chhindwara",
                        address: "Chouksey Tower,Ward No 45Loniya, Parasia Roadchhindwara, Madhya Pradesh-480001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1296,
                        branchName: "Heggadadevankote",
                        address: "Ground Floor, Near Anjaneya Templeward No.6, 1St Main Road, Hd Kotemysore, Karnataka-571114"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1415,
                        branchName: "Pallivasal Anachal",
                        address: "Kolath Building, Opposite St George Church, Chithirapuram P O Anachal, Idukki, Kerala - 685565"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1417,
                        branchName: "Rajakumari",
                        address: "First Floor, Kuthanapillil Arcade, Rajakumari South P O, Idukki- Kerala 685619"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1307,
                        branchName: "Narmadapuram",
                        address: "Gourav Bhavan,Ward No 24, Rasuliya, Nh-69Hoshangabad,Madhya Pradesh - 461001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1336,
                        branchName: "Ulsoor",
                        address: "No 137,Prakash Square,Old Madras Road,Near Ulsoor Metro Station,Ulsoor,Bengaluru,Karnataka - 560008"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1403,
                        branchName: "Puduchery",
                        address: " No:16, Andalle Selvaradjou, 100 Feet Road, Ellaipillaichavady, Oulgaret, Puducherry, Union Territory Of Puduchery- 605005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1496,
                        branchName: "Cuddalore",
                        address: "Building Number 25, South Kavery Street Cuddalore P O, Cuddalore Dist-  Tamil Nadu -607001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1288,
                        branchName: "Sathyamangalam",
                        address: "No.13/1,6:Vsb The Nest,Post Office Road,Sathyamangalam,Erode,Tamil Nadu-638401"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1391,
                        branchName: "Areekode",
                        address: "Um Avenue,Puthalam Junction,Areekode P O,Malappuram District,Kerala-673639"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1419,
                        branchName: "Keezhur",
                        address: " No 377/A,C,D,Integra Arcade, Kannur Airport Main Road,Keezhur- Iritty P O ,Kannur,Kerala-670 703"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1492,
                        branchName: "Muhamma",
                        address: "Str Building, Alappuzha_Madurai State Highway, Alappuzha-688525-Kerala"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1329,
                        branchName: "Sihora",
                        address: " No.9,Shivaji Ward, Near Khitola Tiraha (Trijunction), Jabalpur, Madhyapradesh- 483225."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1404,
                        branchName: "Cumbum",
                        address: "Odai Street,Opposite Amaravathi Theater, Near New Bus Stand, Cumbum, Theni District, Tamilnadu - 625516"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1322,
                        branchName: "Palayamkottai",
                        address: "Door No.58, Ground Floor, Ivy  Towers, Trivandrum Main Road, Palayamkottai, Tirunelveli,Tamil Nadu-627002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1305,
                        branchName: "Dharapuram",
                        address: "Archana Complex,Ground Floor, No. 355A-2Madurai By Pass Road, Dharapuramdist Tirupur, Tamil Nadu- 638656"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1407,
                        branchName: "Nemmara",
                        address: "1St Floor, Kailas Tower, Ayloor Road, Nemmara, Palakkad,Kerala - 678508"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1315,
                        branchName: "Kawardha",
                        address: "Chandra Vanshi Plaza,Pandatarai,Main Road,Kabirdham,Kawardha,Chhattisgarh-491559"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1340,
                        branchName: "Elumathur",
                        address: "Rs 615/1B2,Elumathur-B Village,Elumathur Po,Muthur-Erode Road,Erode,Tamil Nadu-638104"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1375,
                        branchName: "Thalakkarai",
                        address: "No.368/3C2,Thalakkarai Village,Near Mari Amman Kovil,Kuttyappa Gounder Colony,Coimbatore-642005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1507,
                        branchName: "Bokaro",
                        address: "Agarwal Bhavan, Opp Vaibhav Hotel, Sadar Bazar, Bye Pass Road Chas, Bokaro-Jharkhand-827013"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1351,
                        branchName: "Mugu",
                        address: "No.5/391-C,D,E&F,M.A.H.Complex,Near Badar Juma Masjid,Munditharka Road,Mugu Village,671551"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1335,
                        branchName: "Guwahati",
                        address: "Binita Deka Complex, 2Nd Floor, Hengrabari Road, Gmc Ward No 44, Guwahati -781006"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1413,
                        branchName: "Mepparambu",
                        address: "Chulliyil Tower , Shornur Road, Mepparamb, Palakkad,Kerala-678004"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1304,
                        branchName: "Viluppuram",
                        address: " No 20/3A,Ranganathan Road, Opp Ramakrishna Mission,Vilupuram P O, Vilupuram District,Tamilnadu – 605602"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1330,
                        branchName: "Patna",
                        address: "Nath Tower, Ground Floor, No.4, Kavi Raman Path, Nageshwar Colony, Boring Road, Patna, Bihar-800001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1339,
                        branchName: "Jaipur",
                        address: " Delight Tower- Commercial Office, Govind Marg- B-23, Gurunanakpura, Raja Parak, Jaipur, Rajasthan -302004 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1392,
                        branchName: "Pandikkad",
                        address: "No 7/568A&B,Vps Building,Near Pkm Hospital,Pandikkad, Malappuram-676521"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1259,
                        branchName: "Gondiya",
                        address: "Kashi Enclave,Rani Avanty Bai Square,Tiroda Main Road, Gondia,441614"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1309,
                        branchName: "Kuniyamuthur",
                        address: "No.8, Krs Towers, Palakkad Road,Kuniyamuthur, Coimbatore - 641008."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1319,
                        branchName: "Morshi",
                        address: "No. 202, 203, 205, Patel Complex,Medshi,Main Market Road, Morshi,444905"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1385,
                        branchName: "Kongad I",
                        address: "Nandanam Arcade, Opposite To P B Complex,Cherupulassery-Palakkad Road,Kongad, Kongad -1Palakkad (Dist.) Kerala- 678631"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1327,
                        branchName: "Purnia",
                        address: "Ground And First Floors, Opposite To Atiyana Bus Stand,Ward No. 22, Bhatta Bazar,Chitrabani Road, Purnia District,Bihar-854301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1318,
                        branchName: "Chandrapur",
                        address: "Firsr Floor, Street No- 37,Gung Ward,Opposite To Azad Garden,Chandrapur,442401"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1328,
                        branchName: "Rewa",
                        address: "No. 250, Ground Floor, Infront Of Rajput Gun Servcie, Dhekha, R.I Circle, Rewa,Madhya Pradesh -486001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1399,
                        branchName: "Thachanattukara",
                        address: "Kurikkal Building, No. 2/721-724,Thachanattukara P O, Palakkad,Kerala- 678583"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1317,
                        branchName: "Ahmedabad",
                        address: "No.5,6,7,S V Square Mall, Ranip,Godrej City Road,  Ahmedabad,Gujarat-382470"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1270,
                        branchName: "Dindigul",
                        address: "22 A, Sakthi Tower,Ground Floor,Opp Sukanya Lodge,Thadikombu Road, Dindigul-624001."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1499,
                        branchName: "Ambalapara II",
                        address: "Ground Floor,No-422/2,3,Near Thoufeeq Padi Bus Stop,Ottapalam -Ambalappara Road,Ambalappara P O, Palakkad Dist, Kerala-679512."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1483,
                        branchName: "Gola",
                        address: "No: 97 ,Near Dvc Chowk,Mathua Tand, Kumhardaga,Gola P O, Ramgarh Jharkhand, Pin - 829110   "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1498,
                        branchName: "Nainpur",
                        address: "No 512/8 , Ifco Bazar, Nainpur P O, Mandla Dist, Madhya Pradesh, 481776"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1395,
                        branchName: "Tirurangadi",
                        address: "Ground And First Floor, Chemmad Parappanangadi Road, Opposite To Trikkulam Siva Temple, Tirurangadi, Malappuram, Kerala- 676306"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1500,
                        branchName: "Nagalassery",
                        address: "No. 24/6 ,Koottanad-Thrithala Road, Koottanad,Palakkad, Kerala - 679533"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1394,
                        branchName: "Ponnani",
                        address: "Ground Floor, Ckd Mall, Opposite Tevar Temple, Cv Junction, Ponnani, Malappuram, Kerala. Pin Code: 679577"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1516,
                        branchName: "Elappara",
                        address: "No:417, Opp Elappara Panchayath Office, Elappara P O, Idukki Dist, Kerala- 685501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1513,
                        branchName: "Venjaramoodu",
                        address: "Rari Tower , Near Indian Coffee House , Mc Road , Venjaramoodu ,  Trivandrum , Kerala -695607"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1512,
                        branchName: "Anchal",
                        address: "No:1595, 1St Floor,Sree Gokulam Towers, Opposite Anchal Grama Panchayath, Anchal P O , Kollam, Kerala – 691306 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1514,
                        branchName: "Perinjanam",
                        address: "West Bay Complex, Opp Govt Up School, Po Perinjanam Thrissur (Dt) Kerala – 680 686"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1515,
                        branchName: "Akola",
                        address: "Plot No 3,  Madhav Nagar,Gourakshan Road ,Akola P O, Akola Dist, Maharashtra - 444001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1517,
                        branchName: "Perumpilavu",
                        address: "16/282-X, Nasco Square, Perumpilavu, Karikkad P O, Thrissur, Kerala - 680519"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1398,
                        branchName: "Alanallur I",
                        address: "Fawaz Complex, No.  9/722,723,724,810,811&812,Opposite To Ayyappankavu Temple,  Alanallur, Palakkad (Dist.) , Kerala-  678601."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1408,
                        branchName: "Njarackal",
                        address: "Chakkiyeth Building,V P Road,Njarackal, Ernakulam, Kerala -682505"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1409,
                        branchName: "Pampadi",
                        address: "Makkal Sidhan Memmorial Complex, Opposite Vimalambika Public  School, Kalachanda, Pampady, Kottayam, Kerala- 686502"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1488,
                        branchName: "Hunusur",
                        address: "Door No 2171/3579/5,B.M Road,Opposite Cescom,Hunsur P.O,Mysore Dist,Karnataka-571105"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1384,
                        branchName: "Mangalam Dam",
                        address: "G.K Tower, No. 12/847, 848, & 849, Ground Floor, Mangalam Dam- Mudappallur Road, Palakkad, Kerala- 678706"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1416,
                        branchName: "Parathodu",
                        address: "No Xi/208 , St.George Church Building, Near St. George Forane Church, Kambilikandam, Parathodu P O,Idukki, Kerala -685571"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1480,
                        branchName: "Giridh",
                        address: "Khata No- Th 171/911,Giridih-Bengabad Road,Near Navjeevan Nursing Home,Giridih District, Jharkhand-815301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1482,
                        branchName: "Hazaribag",
                        address: "No 657-658,Matwari, Korrah Po, Hazaribagh Dist,Jharkhand-825303 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1444,
                        branchName: "Karanja",
                        address: "Plot No 123,Mangrulpir Road,Near Apmc Market,Karanja P O,Washim Dist,Maharashtra-444105"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1442,
                        branchName: "Darwha",
                        address: "Kamal Plaza, Opposite To District Session Court, Yavatmal Road, Darwha Po,Yavatmal District, Maharashtra - 445202  "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1486,
                        branchName: "Kollegala",
                        address: "Building No.20-116-50B, Near Geetha Primary School, Ramakrishna Paramahamsa Road, Kollegala, Chamarajanagar, Karnataka- 571440"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1490,
                        branchName: "Nanjanagudu",
                        address: "Sri Nanjundeshwara Complex,Kanakanagar Industrial Area, Main Road, Near Bridge Bus Stop, Nanjanagudu, 571302"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1485,
                        branchName: "Barharwa",
                        address: "No-305, Near Govt Hospital, Ratanpur, Barharwa P O,Sahebgunj Dist,Jharkhand - Pin - 816101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1443,
                        branchName: "Hingna",
                        address: "Plot No 7,Ward No 18,Near Deshmukhwadi Bus Stop,  Hingna,  Nagpur Dist, Maharashtra - 441203 "    
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1441,
                        branchName: "Chandurbazar",
                        address: "Samaya Complex, Opposite Old Panchyat Samiti, Walgaon Road, Chandurbazar, Amravati Dist, Maharashtra-444704"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1423,
                        branchName: "Bhuvanagiri",
                        address: "No 16,Mp Kovil Street, Near Sri Ragvendra  Temple,Bhuvanagiri P O, Cuddalore District,Tamilnadu – 608601"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1511,
                        branchName: "Thirpparappu",
                        address: "Jessy Building, Pillai Veedu,Thirpparappu Post,Kanniyakumari District,Tamilnadu-629161."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1410,
                        branchName: "Kuttiyadi",
                        address: "Barka Building,Wayanad Road, Kuttiady ,Kozhikode, Kerala-673508 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1412,
                        branchName: "Perambra",
                        address: "No: 1242/A - E , Royal Arcade, Opp St Francis Church, Perambra P O, Kozhikode District, Kerala-673 525 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1454,
                        branchName: "Keelkatalai",
                        address: "No:155,Medavakkam Main Road, Near Keelkatalai Bus Terminal, Keelkatalai P O, Chennai, Tamilnadu-600117"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1455,
                        branchName: "Madhurantakam",
                        address: "No. 10&11, Near Gov Hospital Bus Stand,Chunambed Road, Chengalpattu, Madhurantakam P O, Tamilnadu- 603306"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1460,
                        branchName: "Chinnamannur",
                        address: "No 167, V.K.R Complex,Karukattankulam,Cumbum Road,Chinnamanur Po,Theni District,Tamilnadu – 625515"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1427,
                        branchName: "Ambasamudram",
                        address: "8/42B First Floor, Agasthiyar Koil Stop,Papanasam Main Road, Ambasamudram-627401"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1461,
                        branchName: "Alangulam",
                        address: "No 12/680D, AR Complex, Opp Bharat Petrol Bunk, Alangulam P O , Tenkasi District, Tamil nadu- 627851"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1457,
                        branchName: "Kottagiri",
                        address: " No 14/11H4, Club Road,Kottagiri P O,Nilgiris District,Tamil Nadu – 643217"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1400,
                        branchName: "Cheyyar",
                        address: "No 93,Arcot Road, Near To Esi Hospital, Cheyyar. P O,Thiruvannamalai District,Tamilnadu- 604407"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1472,
                        branchName: "Mallankinaru",
                        address: "461/19 Vnr Complex,Kalkurici Road,Mallankinaru Po,Virudhunagar District,Tamilnadu-626109"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1465,
                        branchName: "Kovilpatti",
                        address: "No 1,Arunachalam Pettai Street,Opp Kamarajar Statue,Kovilpatti P O , Thoothukudi Dist,Tamil Nadu – 628501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1467,
                        branchName: "Katpadi",
                        address: "A2/309, Auxilium College Road, Katpadi P O, Vellore Dist, Tamil Nadu- 632006"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1464,
                        branchName: "Arani",
                        address: " Dorairaj Complex,Arcot Road,Near Mangamaram Bus Stop , Chevur P O,  Thiruvannamalai.Tamil Nadu - 632316"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1451,
                        branchName: "Anthiyur",
                        address: "Door No: 262, Selva Complex, Near Mangalam School, Bhavani Road,Anthiyur, Erode Tamilnadu- 638501"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1425,
                        branchName: "Gudalur",
                        address: "12/717C,Ooty Mysore Road,Gudalur Po,Gudalur District, Tamilnadu-643211"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1503,
                        branchName: "Vattamkulam",
                        address: "No.12/18-C,D, Vkm Fort, Edappal,Malappuram Dist, Kerala- 679 576"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1476,
                        branchName: "Katghora",
                        address: "No 11, Rahmaniya Ward, Main Road,Katghora Po,Korba District,Chhattisgarh - 495445"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1473,
                        branchName: "Akaltara",
                        address: " No 16, Sherinarayan Road, Near Block Office, Ambedhakar Chowk,Akaltara P O, Janjgir-Champa Dist, Chhattisgarh-495552"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1524,
                        branchName: "Nellaya",
                        address: "No.3/711, Kk Building, Pattambi-Cherpulacherry,Road, Nellaya P O, Palakkad Dist, Kerala -679335"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1510,
                        branchName: "Poothadi",
                        address: "Door No 16/ 402 K, Sy. No S-321, Poothadi Village, Kenichira Post, Wayanad Dist Kerala – 673 596"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1506,
                        branchName: "Sulthan Bathery",
                        address: "Door No 18/531 Pqr, Manjima Complex, Near Assumption Church, Sulthan Bathery, Wayanad Dist Kerala – 673592"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1521,
                        branchName: "Mangalam",
                        address: "Azhikkottil Tower, Mangalam  P O, Mangalam, Malappuram Kerala, 676561"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1518,
                        branchName: "Angadippuram",
                        address: "Arl Building, Calicut Road, Malappuram District, Angadippuram, Kerala , 679321"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1504,
                        branchName: "Thrikkadeeri",
                        address: "Mecca Building, No. Vii/664, Cherpulassery- Ottapalam Road, Thrikkadeeri Po, Palakkad District, Kerala – 679502."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1526,
                        branchName: "Triprangode",
                        address: "Sy No 5-223/1, Triprangode Village, Ponnani-Tirur Road,Chamravattom , P O ,Malappuram Dist, Kerala - 676 102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1422,
                        branchName: "Thondamuthur",
                        address: "No 9/9A,Bhulvanpatti  Road, Near Thondamuthur Police Station,Thondamuthur P O ,Coimbatore, Tamil Nadu- 641109"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1529,
                        branchName: "Pozhiyoor",
                        address: " No: 6/468,Ravi'S Mall, Uchakada Junction ,Kulathoor, Uchakada P O, Thiruvanathapuram  District, Kerala – 695506"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1534,
                        branchName: "Hinganghat",
                        address: "Darbar House, Nehru Ward Station Road, Hinghanghat,Wardha District,Maharashtra - 442301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1533,
                        branchName: "Akot",
                        address: "No 3/1,Sindhi Camp,Hiwarkhed Road,Akot Po, Akola Dist, Maharashtra - 444 101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1495,
                        branchName: "Amarwara",
                        address: "Block –B, Ward,  No. 5, Rani Durgawati  Mohalla, Near Gurukul School, Amarwara P.O, Chhindwara , Madhya Pradesh, 480221"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1475,
                        branchName: "Shivrinarayan",
                        address: "Near Vishwageeta Bhawan, Kharod Road, Shivrinarayan  P.O, Janjgir –Champa, Chhattisgarh, 495557"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1474,
                        branchName: "Kharsia",
                        address: "PH No:22 Mishra Colony, Near M G Govt College, Kharsia, Raigarh, Chhatisgarh- 496661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1428,
                        branchName: "Amla",
                        address: "Khasra No 521/23,521/8/1,Govind Colony Main Road,Opp To Hanuman Temple, Amla P O, Amla District ,Madhyapradesh-460551"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1401,
                        branchName: "Panruti",
                        address: "No 4D/4, Opp To Panruti Muncipal Court,Panruti P O,Cuddalore Dist,Tamil Nadu - 607106"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1424,
                        branchName: "Palani",
                        address: "No 6:Vsr Building,Gounder Itteri Road,Palani, Tamil Nadu-624 601."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1445,
                        branchName: "Koradi",
                        address: "Building No.1334, Mahadula, Koradi Po , Nagpur, Maharashtra,441111"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1446,
                        branchName: "Nerparsopant",
                        address: "Sawangekar Building, Sawala Nagar ,Amaravati Road, Nerparsopant P.O, Yavatmal, Maharashtra, 445102"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1468,
                        branchName: "Tindivanam",
                        address: "No 29,Mariamman Kovil Street, Near Muncipality,  Tindivanam P O,Villupuram Dist,Tamil Nadu - 604001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1531,
                        branchName: "Bhatapara",
                        address: "292/40-41, Krishna Plaza, Maharani Chowk, Near Pwd Office,Bhatapara P O, Baloda Bazar Dist-Chhattisgarh- 493118"
                
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1532,
                        branchName: "Champa",
                        address: "Om City Centre ,Near Barpali Chowk ,Railway Station Road, Champa, Janjgir- Champa Dist, Chattishgarh 495671"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1406,
                        branchName: "Parippally",
                        address: "Ground  Floor, Udayagiri Complex, Karamcodu, Kollam, Kerala 691579"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1414,
                        branchName: "Marayoor",
                        address: "Cheruvallathu Building, Near Ganapathy Covil, Marayoor, Idukki, Kerala-685620"
                
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1447,
                        branchName: "Sakoli",
                        address: "Plot No:28/3/1 Nh 06, Sky Tower, Sendurwafa,Sakoli P O, Bhandara, Maharashtra-441802"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1448,
                        branchName: "Reddiarchattiram",
                        address: " No:325,Near India Postoffice, Reddiarchattiram P O, Dindigal District, Tamil Nadu Pin- 624622"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1466,
                        branchName: "Sathankulam",
                        address: "93/2, R.D Complex, Main Road, Sathankulam Po, Thoothukudi, Tamilnadu 628704"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1522,
                        branchName: "Edavanna",
                        address: "Hiba Tower, Cpa Junction, Edavanna, Malappuram, Kerala 676541"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1523,
                        branchName: "Tavanur",
                        address: "Arukandathil Arcade, Ayankalam Junction , Tavanur Po, Malappuram , Kerala 679573"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1530,
                        branchName: "Ramanattukara",
                        address: "Rose Complex, Opp. Kandayi Petrol Pump, Ramanattukara, Kozhikode, Kerala,673633"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1453,
                        branchName: "Kattankulathur",
                        address: "Hig-17,Maraimalai Nagar,Chengalpet,Kattankulathur, Maraimalai Nagar P O,Chengelpet ,Kanchipuram Dist,Tamilnadu-603209"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1481,
                        branchName: "Godda",
                        address: "Plot No 72,Near Routara Chowk Durga  Mandir,Near Police Barrier,Pirpaiti Main Road, Godda District, Godda P Ojharkhand Pin 814133"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1469,
                        branchName: "Tirukkoyilur",
                        address: "No:14 Srm Towers,South Street,Keelaiyur, Tirukkoyilur P O, Tirukkoyilur, Tamilnadu- 605757"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1449,
                        branchName: "Sanarpatti",
                        address: "Opp. Govt Girls School, Gopalpatti, Vembarpatti P O, Dindigul District , Tamil Nadu, 624308"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1458,
                        branchName: "Manjoor-Selas",
                        address: "No:2/345C,Manjoor Road, Opp To Post Office, Nilgiris Dist, Tamil Nadu- 643213"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1268,
                        branchName: "Patla",
                        address: "Ground Floor, Permit No. A3-Ba (152723)2018 , Maipady Post, Near District Institute Of Education And Training, Seethangoli Road, Maipady, Pin.671124."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1332,
                        branchName: "Chengannur",
                        address: "Kaduvettur Manthanath Buildings, Near Municipal Office ,Railway Station Road, Chengannur, Alapuzha, 689121"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1314,
                        branchName: "Thirumeni",
                        address: "Sneham Building, No. Ba. 116/15-16, Ground Floor, Opposite To Milk Marketing Society,Thirumeni- Thabore Road, Cherupuzha, Kannur District, Kerala- 670511"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1501,
                        branchName: "Chalissery ",
                        address: "Sy No 340/1,2,3, Chalissery Village , Perumbilavu-Koottanad Road, Palakkad , 679536"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1527,
                        branchName: "Parli  II",
                        address: "No.17/370, Pulikkottil Complex, Parli Ii Village, Palakkad, Kerala , 678612"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1536,
                        branchName: "Manjeshwar",
                        address: "No:11/120-L,120-O, City Tower Building, Hosangadi -Anekal Road, Hosangadi,Manjeshwar, Kasaragod -671323"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1535,
                        branchName: "Kotappadi",
                        address: "Door No.5/789, Ooty Main Road, Opp. St.Joseph Church, Meppadi P O , Wayanad, Kerala, 673577"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1544,
                        branchName: "Pardi",
                        address: "Plot No.591/150 Ward No.21,Surya Nagar ,Beside Haldiram Head Office, Old Bhandara Road ,Old Pardi Naka ,Pardi -Nagpur,Maharashtra 440002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1545,
                        branchName: "Kunnathidavaka",
                        address: "A M Tower, No 11/303 – A & B, Wayanad Road , Vythiri P O , Wayanad, 673576"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1519,
                        branchName: "Pathiripala",
                        address: "No.6/939-943, Thachoos Arcade , Palakkad- Ponnani Road, Lakkidi – Perur – Ii Village, Palakkad, 679302"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1418,
                        branchName: "Vandanmedu",
                        address: "Vattamala Building, Near Community Health Center,Puttady  P  O,  Idukki, Kerala-685 551"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1421,
                        branchName: "Thiruvanmiyur",
                        address: "1/356, Kalathumettu Street, Kottivakkam Po , Chennai , 600041"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1543,
                        branchName: "Tirukalukundram",
                        address: "1A, Rajapalayam Street, Mamallapuram Road, Tirukalukundram Po , Kancheepuram , 603109"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1450,
                        branchName: "Vedasandur",
                        address: "No 65K, 1/1A & 1/2 A, Vadamadurai Road,Vedasandur P O,Dindigul Dist,Tamil Nadu - 624710"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1548,
                        branchName: "Pallikunnu",
                        address: "Vtc Building, Near Pallikunnu Church , Pallikunnu P O, Wayanad , 673122"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1547,
                        branchName: "Puducode",
                        address: "No.8/569, 570 , Puducodevillage , Anchumuri , Puducode P O , Palakkad , 678687"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1439,
                        branchName: "Sohagpur",
                        address: "No.15/201, Chandra Complex, Near Civil Court Chouraha,Sohagpur P O, Hoshangabad, 461772"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1456,
                        branchName: "Uthiramerur",
                        address: " No -46,Senguntha Pillaiyar Koli Street, Uthiramerur P O, Kanchipuram District,Tamil Nadu – 603406"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1462,
                        branchName: "Puliankudi",
                        address: "No:142/143, Shakila Complex, Puliankudi P O, Tenkasi Dist, Tamilnadu- 627855"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1539,
                        branchName: "Villivakkam",
                        address: "5/1 F-Type, 4Th Main Road, Sidco Nagar, Villivakkam, Chennai, Tamil Nadu -600049 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1541,
                        branchName: "Tumsar",
                        address: "Plot No 1600,Bhandara Road,Near Bus Stand,Vinoba Nagar,Tumsar P O,Bhandara District,Maharashtra – 441912"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1542,
                        branchName: "Paratwada",
                        address: "Plot No:8, Amarawati Road,Near Bus Stand,Shivaji Ward, Paratwada, Amarawati, Maharashtra-444805"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1497,
                        branchName: "Bina",
                        address: "No  51,Railway Station Road, Shastri Ward, Bina P O,Sagar District,Madhya Pradesh – 470113"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1432,
                        branchName: "Garhakota",
                        address: "Plot No 95/5,Jagdish Ward, Garhakota P O,Dist - Sagar, Madhya Pradesh,Pin - 470229"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1437,
                        branchName: "Sausar",
                        address: " Sharma Complex, Near Tehsil Office , Sausar P O, Chhindwara-Madhyapradesh-480106"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1436,
                        branchName: "Pandhurna",
                        address: "Yamuna Complex, Jalram Ward, Nagar Road,Pandhurna P O, Chhindwara , 480334 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1470,
                        branchName: "Ulundurpettai",
                        address: "No.61, T V Nallur Road , Near Sumangali Mahal , Ulundurpettai P O, Kallakurichi District, Tamilnadu-606107"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1471,
                        branchName: "Aruppukottai",
                        address: "No 187-C (3),Opposie To Csi Church,Aruppukottai P O, Virudhunagar Dist,Tamil Nadu-626101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1463,
                        branchName: "Udumalaipettai",
                        address: "No 10 B, C, Namadhu Plaza, Opp Kuttai Thidal, Dali Road, Udumalaipettai P O, Tiruppur, Tamil Nadu- 642126"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1405,
                        branchName: "Sasthamkotta",
                        address: "Aiswarya Arcade,Bharanikavu, Sasthamkotta P O, Kollam , Kerala-690520"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1546,
                        branchName: "Karuvarakundu",
                        address: "Vayalil Arcade, Near Bus Stand, Malappuram, 676523"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1559,
                        branchName: "Multai",
                        address: "1St Floor, Mahajan Traders Building, Near Agrawal Petrol Pumb, Betul Road, Multai P O, Betul, 460661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1550,
                        branchName: "Nasrullaganj",
                        address: "Ward No:15, Rala Village,  Rishi Nagar,  Opp Mp Warehouse,  Indore-Bhopal Road, Nasrullaganj P O, Sehore Dist, Madhyapradesh- 466331"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1576,
                        branchName: "Vellinezhi",
                        address: "Ark Complex , 8/228A, Cherplassery – Palakkad Road, Thiruvazhiyodu Po, Palakkad, Kerala – 679 514"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1549,
                        branchName: "Othukkungal",
                        address: "Pvg Arcade, Near Mattathur Govt L P School, Othukkungal P O, Malappuram, 676528"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1553,
                        branchName: "Anuppur",
                        address: "Plot No: 678/2968/2/2, Ward No 11, Opp Excellence School, Near Shankar Mandir Chowk, Anuppur P O, Anuppur Dist, Madhyapradesh-484224"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1558,
                        branchName: "Mandla",
                        address: "18, Awantibai Ward, Near Dr. Teja Clinic, Mandla P O, Madhya Pradesh,481661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1565,
                        branchName: "Umred",
                        address: " No-13, Bhishi Road, Infront Of Ambedkar Bhawan,Bhandarkar Layout, Umred P O,Dist - Nagpur, Maharashtra - 441203"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1563,
                        branchName: "Murtijapur",
                        address: "Godawari Tower, Ashirwad Nagar, Karanja Road, Murtijapur Po, Akola-444107"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1564,
                        branchName: "Teosa",
                        address: " No 292,Opp Police Station,Teosa P O, Dist - Amravati,Maharashtra - Pin - 444903"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1557,
                        branchName: "Dindori",
                        address: "Ground Floor, City Pride Commercial, Ward No-6, Opposite Neelam Hotel, Dindori P O, Dindori Dist, Madhyapradesh-481880"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1431,
                        branchName: "Gadarwara",
                        address: "Bhama Ward, Palotanganj,Narsinghpur,Gadarwara Dist,Mp-487551"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1561,
                        branchName: "Pawai",
                        address: "No-A263/5, New Ward 15, Opp Tehsil Office, Katni Road, Pawai P O, Panna Dist , Madhyapradesh- 488446"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1440,
                        branchName: "Umaria",
                        address: " No 24, Near Old Bus Stand, Station Road,Umaria P O , Umaria ,Madhya Pradesh- 484661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1435,
                        branchName: "Maihar",
                        address: "Annapurna Complex, Near Civil Court, Sarla Nagar Road, Maihar P O , Satna District , Madhya Pradesh-485771"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1580,
                        branchName: "Muppainad ",
                        address: "Anand Building, Vaduvanchal,  Muppainad Village , Near Vaduvanchal Post Office , Wayanad, 673581"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1555,
                        branchName: "Thirunavaya   ",
                        address: "No:11/971-973,Opp.Thirunavaya Panchayat Office, Thirunavaya  Po, Malappuram , 676301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1556,
                        branchName: "Kuruva   ",
                        address: "No:7/287,288, Kuruva Village, Near  Kuruva Panchayat Office, Malappuram , 676507"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1567,
                        branchName: "Sadar",
                        address: "Plot No 1, Aswathi Nagar Road,Near Zingabai Takli Signal,Sadiqabad, Mankapur P O, Nagpur, Maharashtra-440013"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1190,
                        branchName: "Perinthatta",
                        address: "N.116/H,J,R, Nangarath Complex, Aravanchal P O, Kannur Dist, Kerala- 670353"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1575,
                        branchName: "Purakkadi",
                        address: "No:206/11/12/19/33/37, Cholayil Building, Near 54Th Mile Bus Stop, Nh – 766, Meenangadi Po, Wayanad , 673591"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1537,
                        branchName: "Mundur I ",
                        address: "Sajana Arcade, No. Vii/ 713, Mundur- 1 Village , Near Primary Health Centre, Mundur- Po, Palakkad, 678592"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1478,
                        branchName: "Sarangarh ",
                        address: "Door No.2, Civil Lines, Near City Cinema Hall , Sarangarh P.O, 496445"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1487,
                        branchName: "Maddur",
                        address: "No-31A, Old. M .C Road,Maddur P O, Mandya Dist, Karnataka - 571428"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1350,
                        branchName: "Angadimogaru",
                        address: "No 69, Angadimogaru Village, Near Katheeb Nagar Masgid, Seethangoli- Perla Road, Kasargod, 671321"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1566,
                        branchName: "Yelandur",
                        address: " Swamy Complex, Santhemarahalli Main Road, Near Bus Stand, Chamarajnagar, 571441."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1581,
                        branchName: "Thrithala",
                        address: "No. 1/645 A, B,C, Castle Arcade, Thrithala, Po  , Palakkad , 679534"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1133,
                        branchName: "Kozhinjampara",
                        address: "Vii/613-620, Ground Floor ,Kat Swamy Complex, Near Ar Kalyanamandapam , Pollachi , Road, Kozhinjampara, Palakkad District.Pin:678555"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1163,
                        branchName: "Mananthavady",
                        address: " Kallat Square Mall, Mysore Road, Mananthavady, Wayanad Dist Pin – 670645"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1178,
                        branchName: "Cbe Trichy Road",
                        address: "Ground Floor ,Nadar Building No-1371, Trichy Road ,Coimbatore,641018"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1180,
                        branchName: "Lajpat Nagar",
                        address: "No-L-110 &L-111 , Ground Floor, Near Ring Road , Lajpat Nagar -11, New Delhi,110024"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1223,
                        branchName: "Purasawalkam",
                        address: "Mjrk Tower,  Ground Floor Premices No:8 , Re Survey No- 740/1, Old Sv No-285(Part)- Doc No- 2852 Of Purasawalkam Sro Opposite- Gangadeswara Koil, Purasawalkam Gangadeswara Koil Street Chennai- Corporation 600084"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1215,
                        branchName: "Masagoundenchettipalayam",
                        address: "Opp.Sandhya Nagar, Chemmani Chettipalayam, Masagoundan Chettipalayam P.O, Coimbatore,Tamil Nadu-641107"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1249,
                        branchName: "Hosur",
                        address: "643/1 D,Rkg Manor,Opp.Traffic Police Stn, Bangalore Bypass Road, Hosur, Tamil Nadu - 635109"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1256,
                        branchName: "Dhamtari",
                        address: "Balaji Plaza,Plot No43/1,43/4,Ground And First Floor,Motor Stand Ward,Dhamtari,Chattisgarh-493773"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1254,
                        branchName: "Vizhinjam",
                        address: "Building No:62/1027-2- 6, Henry'S Arcade , Vizhinjam P O, Trivandrum, Kerala-695521"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1353,
                        branchName: "Poovar",
                        address: "K K Complex, Groundfloor No.3/411-D,Near To Puthyathura Bus Stop Poovar-Vizhinjam Road, Puthyathura Trivandrum-695526"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1367,
                        branchName: "Sagar",
                        address: "No:463,Chourasiya Tower, Gopal Ganj,  Adarsh Road,Sagar P O, Sagar District, Madhya Pradesh- 470002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1239,
                        branchName: "Surat",
                        address: "21St Century Building, Ground Floor, Near World Trade Centre, Udahna Darwazha, Surat- 395002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1393,
                        branchName: "Perumpadappa",
                        address: " Siya Complex Building, Opposite Police Station, Perumpadappa, Malappuram- 679580"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1508,
                        branchName: "Olavakode",
                        address: "No:01/1298, Poopas Arcade, Near Kseb Office,P O Olavakode, Palakkad- Kerala-678002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1452,
                        branchName: "Gopichettipalayam",
                        address: "No 13,Bajanai Koil Street,Gopichettipalayam, P O Pudhupalayam, Erode , Tamilnadu- 638476"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1459,
                        branchName: "Ooty",
                        address: "No:181& 181A, Coonoor Ooty Road, Ooty P O, Nilgiris Dist, Tamil Nadu- 643001"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1509,
                        branchName: "Annur",
                        address: "No: 2824,Vinayaka Centre, Sathy Main Road, Annur, Coimbatore-641653."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1540,
                        branchName: "Thudiyalur",
                        address: " No 288/B Vellakinaru Pirivu,Thudiyalur,G N Mills Post, Coimbatore,Tamilnadu-641029"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1426,
                        branchName: "Thiruvallur",
                        address: "No.167/1A,  Jn Road, Opp Bsnl Office,  Thiruvallur P O , Thiruvallur  Dist, Tamil Nadu- 602001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1438,
                        branchName: "Seonimalwa",
                        address: "Plot ,No 54 , Near Kusum Mahavidyalaya Main Road , Seonimalwa P O, Hoshangabad ,461221"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1311,
                        branchName: "Madurai",
                        address: "Viruman Centre, Premises No 19/1, Ground Floor , Pandiyarajapuram Main Street, Madurai Corporation , Madurai , 625016 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1562,
                        branchName: "Shahpur",
                        address: "No:275,Near Durga Chowk, Station Road, Shahpur P O, Betul Dist, Madhya Pradesh-460440"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1552,
                        branchName: "Royapuram",
                        address: "No 242,Ennore Express Road,Royapuram P O, Chennai,Tamil Nadu - 600013"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1528,
                        branchName: "Melmuri",
                        address: "Sy No 133,134, Melmuri Village , Opp. Bus Stand,  Kadampuzha P O, Malappuram , 676553"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1560,
                        branchName: "Panna",
                        address: "Annapurna Complex, Hospital Road, Benisagar Mohalla, Panna- Madhya Pradesh- 488001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1574,
                        branchName: "Pulpalli",
                        address: "Nellatt Building, Near  Police Station, Pulpalli Po, Wayanad, 673579"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1520,
                        branchName: "Nedumkandam",
                        address: "Aiswarya Complex, No.15/938,15/939,15/942,15/943, Opposite Nedumkandam Court, Poopara- Kattappana Road, Nedumkandam, Idukki- 685553"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1433,
                        branchName: "Harda",
                        address: "No  91/5 & 91/14, Sai Palace, Fakaruddin Ali Ahmad Ward, Harda Po, Harda Dist, Madhyapradesh- 461331"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1494,
                        branchName: "Shrirangapattana",
                        address: "No:1000, Near Lakshmi Temple, Kumbarageri Street, P O Shrirangapattana, Mandya, Karnataka -571438 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1429,
                        branchName: "Begamganj",
                        address: "No:58, Krishi Galla Mandi,Begamganj P O, Raisen Dist, Madhya Pradesh- 464881"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1430,
                        branchName: "Chhatarpur",
                        address: "Plot Number 01, Agrawal Building, Opp  Old Bundelkhand Garaje, Jawahar Road , Near Bus Stand Chhatarpur, Madhya Pradesh 471001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1477,
                        branchName: "Mungeli ",
                        address: "Dewangan House, Near Cseb Office, Kawardha Road, Mungeli P.O, Chhattisgarh, 495334"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1489,
                        branchName: "Krishnarajanagara",
                        address: "Patel Complex, 7Th  Main Road, 7Th  Main Road, Mysore , 571602"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1579,
                        branchName: "Kanhangad",
                        address: "V S Complex , Railway Station Road , Cheruvathur Po , Kasargod, 671313"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1568,
                        branchName: "Mahe",
                        address: "No: 1/2, Paikkatt Building, Mahe P O, Mahe Dist, Ut Of Puduchery- 673310"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1411,
                        branchName: "Thamarassery",
                        address: "No:776, Royal Tower, Near Taluk Supply Office, Chungam, Thamarassery P O, Kozhikode, Kerala -673573"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1554,
                        branchName: "Nalleppilly",
                        address: "S.A Arcade, Main Road, Nalleppilly P O, Palakkad, 678553"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1569,
                        branchName: "Sangumugham",
                        address: "No :297/1,Valiyathura Muttathara Road, Kallumodu Junction, Vallakadavu P O, Thiruvanthapuram,Kerala -695008"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1570,
                        branchName: "Bhagalpur",
                        address: "Jaiswal Tower, Rbss Road, Bhikhanpur, P.S.- Ishakchak, Bhagalpur P O, Bihar- 812001 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1572,
                        branchName: "Saharsa",
                        address: "Neta Ji Subhash Chowk, Kahara Block Road, Near Maa Kali Mandir,Saharsa,  Bihar-852202 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1491,
                        branchName: "Narasipur",
                        address: "No 241/A,Vidyodaya College Road,Near Vidyodaya College, T Narasipura P O, Mysore,Karnataka - 571124"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1573,
                        branchName: "Dhamdha",
                        address: "Plot No-08,No:1,  Indira Gandhi Ward,Near Nagar Gate Block, Bemetra -Durg Main Road,Dhamdha P O,Durg District,Chhattisgarh- 491331."
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1484,
                        branchName: "Ramgarh ",
                        address: "Plot No. 39, Building No. Tc/28-1,Kalyani Complex,  1St Floor, Kalyani Complex,Thana Chowk, Ramgarh, Jharkhand - 829122"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1571,
                        branchName: "Katihar",
                        address: "No : 21/22,,Ambedkar Chowk Mirchaibari Road, Katihar P O,Katihar Dist, Bihar- 854105."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1479,
                        branchName: "Raniganj ",
                        address: "No 26 Nsb Road,Near Anandlok More,Ranigunj,Dist-Paschimbardhman,West Bengal-713358"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1551,
                        branchName: "Gomtinagar",
                        address: "Plot No.B-2/309,Near Patrakar Puram Circle, Vikas Khand, Rafi Ahmad Kidwai Ward, Gomti Nagar, Lucknow, Uttar Pradesh – 226010"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1584,
                        branchName: "Eruthempathy",
                        address: "No. 14/397,398,399, Opposite To St. Peter And Paul Church, Eruthempathy Po, Palakkad District, Kerala- 678555"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1538,
                        branchName: "Wandoor",
                        address: "T K C Building, Near Sub Treasury, Wandoor P O, Malappuram, Kerala, 679328"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1585,
                        branchName: "Maninagar",
                        address: "1/A,B, N &N Building, Devang Society - No:3,  Bhairavnath Road,  Nr. Jawahar Chowk, Maninagar, Ahmedabad, Gujarat- 380008"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1338,
                        branchName: "Shillong",
                        address: "Harnam Complex, Motphran Point, G S Road, East Khasi Hills, Shillong -  Meghalaya,793002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1586,
                        branchName: "Edayoor",
                        address: "Door No 10/34 A-E, Pookkattiri, Edayoor Village, Near Edayoor Panchayat Office, Malappuram, Kerala-676552"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1588,
                        branchName: "Parappanangadi",
                        address: "No Xxi/250 (38/722), Naha'S Son'S Complex, Parappanangadi P O, Malappuram, Kerala- 676303"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1602,
                        branchName: "Kizhakkencheri-I",
                        address: "No.21/860,861, Near Vsa Auditorium, Kundukad, Kizhakkenchery P O, Palakkad-Kerala- 678684"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1587,
                        branchName: "Veliyankode",
                        address: "No:136/G, Near Gram Panchayat Office, Veliyankode Village, Eramangalam  P O, Malappuram, Kerala- 679587"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1604,
                        branchName: "HSR Layout ",
                        address: "Door No.1318, 24Th Main Road, Sector 2, Parangipalya, Bengaluru- Karnataka- 560102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1589,
                        branchName: "Kariavattom",
                        address: "No:1/623-D-I, Kvm Complex, Pattikkad Chungam, Near Pattikkad Post Office, Pattikkad P O, Malappuram- Kerala- 679325"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1593,
                        branchName: "Pulamanthole",
                        address: "No 8/711B, H S  Road, Pulamanthole P O- Malappuram-Kerala-679323"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1592,
                        branchName: "Mayur Vihar",
                        address: "C-18,Sashi Garden, Mayur Vihar, Phase - 1, New Delhi- 110091"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1590,
                        branchName: "Talakkad",
                        address: "No Tp18/484-A1, Mehaque Towers, B P Angadi P O, Malappuram-Kerala- 676102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1582,
                        branchName: "Chungathara",
                        address: "Door No 14/146A, Kuzhikandan Area Building, Near St. George Orthodox Church, Chungathara P O, Malappuram-Kerala- 679334"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1603,
                        branchName: "Panamaram",
                        address: "No:360/17, Kalpetta –Manathavady Road, Near St. Judes Town Church, Panamaram P O, Wayanad-Kerala- 670721"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1583,
                        branchName: "Kalladikode",
                        address: "No 578/580, Karimba Ii Village, Kalladokode P O, Palakkad, Kerala- 678596"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1591,
                        branchName: "Koppam",
                        address: "No 3/1667B, Ptr Tower, Near Vyapara Bhavan, Koppam P O, Palakkad, Kerala- 679307"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1595,
                        branchName: "Thiruvali",
                        address: "No:378/A-F, Thiruvali Village, Thiruvali P O, Malappuram, Kerala- 676123"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1605,
                        branchName: "Kavanoor",
                        address: "City Tower, Kavanoor, Kavanoor P O, Malappuram-Kerala- 673639"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1594,
                        branchName: "SR Nagar",
                        address: "No:71/A, Surya Plaza, Near Sanjeev Reddy Nagar Junction, Vengalarao Nagar, Hyderabad, Telangana- 500038"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1578,
                        branchName: "Vellamunda",
                        address: " No 145/Abcd , Baba Building,Near St.Anne'S English Medium Public School,Vellamunda 10Th Mail, Vellamunda P O,Wayanad,Kerala 670731"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1618,
                        branchName: "Chittaranjan Park ",
                        address: "D – 596 , Chittaranjan Park, Opposite Ramanaujan College, New Delhi-110019"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1601,
                        branchName: "Gurugram",
                        address: "No 4, Ild Trade Centre, Sector 47, Sohna Road, Gurugram, Gurgaon- 122018"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1597,
                        branchName: "Vadodara",
                        address: "No.1, Trivya Complex, Natubhai Circle, Gotri Road P O, Vadodara, Gujarat-390021"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1600,
                        branchName: "Chandigarh",
                        address: "Sco 2931-2932, Sector 22- C, Chandigarh, Chandigarh-160022"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1324,
                        branchName: "Kariyampalayam",
                        address: "No.640/3, Kariyampalayam Village,Near Amman Temple, Silayappan Palayam Road, Coimbatore Dist, Tamil Nadu- 641653"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1606,
                        branchName: "Pulikkal",
                        address: "Room No. 575/C,575/D- & 575/E,  Kondotty Ramanattukara Road, Near Pulikkal Grama Panchayath,Pulikkal Village, Malappuram-Kerala-673637"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1609,
                        branchName: "Puthuppariyaram",
                        address: "Kvs Complex, Ground Floor, No 816-821, Opp Kerala Armed Battalion Head Quarters, Puthuppariyaram Village, Muttikulangara P O-Palakkad-Kerala-678594"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1616,
                        branchName: "Kodur",
                        address: "Room No:3/254, Paloli Complex, Chemmankadavu, Kodur Post, Malappuram, Kerala- 676504"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1610,
                        branchName: "Chalavara",
                        address: "No.207 B,C, N T Building, Kayiliad, Chalavara Post, Palakkad, Kerala- 679122"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1599,
                        branchName: "Panvel",
                        address: "No, 19,20,21 National Paradise Co- Operative Society Building, Plot No 290/1, Takka, Panvel, Raigad, Maharashtra-410206"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1608,
                        branchName: "Ongallur",
                        address: "No.287/H, Dorus Tower, Pokkupadi, Ongallur Post, Palakkad, Kerala- 679313"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1615,
                        branchName: "Kadampazhipuram",
                        address: "No.1162-1165, Sree Bhavan Complex, Opp Kerala Sarvodaya Sangham, Kadampazhipuram Post, Palakkad, Kerala-678633"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1623,
                        branchName: "Kalikavu",
                        address: "No.11/480, Thodiyil Bazar,Near Block Office, Kalikavu Po, Malappuram District, Kerala, 676525."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1626,
                        branchName: "Thenkurissi",
                        address: "No .17/38, Ss Building, Kayaramkulam, Thenkurissi P O, Palakkad, Kerala- 678 671."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1630,
                        branchName: "Vallapuzha",
                        address: "No. 13/532, Unais Tower, Vallapuzha P O, Palakkad, Kerala- 679336"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1633,
                        branchName: "Thalapuzha",
                        address: "No. 8/56-I,Muscat Plaza, Thalapuzha Post, Wayanad, Kerala-670644"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1622,
                        branchName: "Makkaraparamba",
                        address: "No:11/529-Av, 529 I, Reem Mall, Makkaraparamba P O, Malappuram , Kerala- 676507"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1624,
                        branchName: "Chulliyode",
                        address: "No.19/507 D, Apv Complex, Chulliyode P O, Wayanad, Kerala-673592"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1627,
                        branchName: "Adiperanda",
                        address: "No. 578-581, Izhra Tower, Adiperanda Junction, Kairady P O, Palakkad, Kerala-678510"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1628,
                        branchName: "Karinkallathani",
                        address: "AP Tower,  Opposite  Athani Masjid, Kanhiramukku P O, Malappuram Dist-Kerala-679584"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1629,
                        branchName: "Vaniyamkulam",
                        address: "No. 4/1377-1378, Mubarak Building, Opp Ajapamadam, Vaniyamkulam  P O, Palakkad, Kerala-679522"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1634,
                        branchName: "Kulavanmukku",
                        address: "No.16/44, Aiswarya Complex, Kuzhalmannam P O, Palakkad-Kerala-678702"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1635,
                        branchName: "Kuthannur",
                        address: "No.5/576, Kochu Building, Kuthannur P O, Palakkad,Kerala-678721"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1596,
                        branchName: "Prahlad Nagar",
                        address: "Door No,15, Prahlad Nagar, Campus Corner - 2, Prahlad Nagar P O, Ahmedabad- Gujarat-380015"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1625,
                        branchName: "Vaniyampara",
                        address: "No 12/724/727, Bj Complex, Near St, George Orthodox Church, Vaniyampara, Panniyankara  P O, Palakkad- 678683"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1631,
                        branchName: "Agali",
                        address: "Kunnath Building, Opp Govt. L.P School- Agali, Agali P O, Palakkad, Kerala- 678581"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1632,
                        branchName: "Melarcode",
                        address: "No. 4/849, Metro Tower , Near Old Theatre Junction, Melarcode P O, Palakkad, Kerala-678703"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1620,
                        branchName: "HBR Layout",
                        address: "No. 638/669/G, Msr Icon, 1St Stage, 1St Main, Hennur- Bellary Road, Near Hbr Bda Complex, Hbr Layout, Bengaluru, Karnataka-560043"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1646,
                        branchName: "Vettom",
                        address: "Door No.6/456-F, Ktm Complex,Pachattiri Po, Malappuram, Kerala- 676105"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1621,
                        branchName: "Annanagar",
                        address: " West Woods, New No. 32, Old No.205, 5Th Avenue, “Y” Block, Anna Nagar,Chennai, Tamil Nadu - 600040"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1617,
                        branchName: "Thenkara",
                        address: "Door No.8/789,790, N Spot Arcade,Thenkara (P.O), Mannarkkad,Palakkad,Kerala-678582"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1651,
                        branchName: "Vadavannur",
                        address: "No:2/465,467, Bismi Complex, Opp. Gowry Shankar Mandapam, Vadavannur , Palakkad, Kerala-678504"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1640,
                        branchName: "Perikkalloor",
                        address: "Door No.2/230 F, St Thomas Church Building, Perikkalloor  P O, Wayanad-Kerala-673579"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1642,
                        branchName: "Kalpakancheri",
                        address: "Door No.13/533, Cc Complex, Kalpakancheri P O, Malappuram, Kerala-676551"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1638,
                        branchName: "Padinjarethara",
                        address: "Building No.11/232-G,F, K C Complex ,Padinjarethara,Wayanad,Kerala-673575"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1639,
                        branchName: "Kattikulam",
                        address: "Door No.9/408, Mysore Road, Kattikulam P O, Wayanad Dist,Kerala- 670646."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1654,
                        branchName: "Mongam",
                        address: "Door No.5/620,V P Complex,Cinima Padi, Mongam P O, Malappuram District,Kerala-673642"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1645,
                        branchName: "Tanur",
                        address: "Azwa Arcade, Near Tanur Bus Stand, Nadakkave, Tanur, Malappuram, Kerala- 676302"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1648,
                        branchName: "Chelari",
                        address: "No. 60/B, Pp Tower, Panvel Kanyakumari Nh 66,Chelari, Malappuram, Kerala-673636"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1649,
                        branchName: "Kanjiram",
                        address: "3/668-672, P K Building, Main Road, Opp Mariamman Kovil, Pottassery  Post, Palakkad Dist, Kerala - 678598"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1652,
                        branchName: "Mankada",
                        address: "Door No.12/729 , Zaina Centre, Mankada P O, Malappuram District, Kl-679324"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1650,
                        branchName: "Kanjikode",
                        address: "Door No. 3/ 130, Ettonnil Building, Ktc Junction, Kanjikode P O,Palakkad Dist,Kl-678621"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1637,
                        branchName: "Cheeral",
                        address: "Door No.12/720-L,Palackall Arcade, Cheeral P O, Wayanad District,  Kerala 673595"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1653,
                        branchName: "Pookottumpadam",
                        address: "No: Ap/16/325-A ,G, Near To Mary Matha School, Amarambalam,Malappuram,Kerala- 679332"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1643,
                        branchName: "Vengara",
                        address: "Door No :10/598 - 600,Thottasseri Complex, Near Janatha Bazar, Thazheangadi,Near Janatha Bazar, Vengara, Malappuram Dist, Kerala-676304"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1641,
                        branchName: "Puthanathani",
                        address: "No 22/1373 To 1376,Mattil Mall, Nh -66, Kurumbathur, Puthanathani P O,Malappuram, Kerala-676552"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1647,
                        branchName: "Kunnumpuram",
                        address: "No 07/710H, P C Complex, Airport Road, Kunnumpuram, Ar Nagar P O, Malappuram, Kerala - 676 305"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1644,
                        branchName: "Tanalur",
                        address: "Door No.12/71G, Moopan’S Square, Tanalur P O ,Malappuram District,Kerala-676307"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1655,
                        branchName: "Kolathur",
                        address: "Door No.2/562 Q,S,T,R,V, Epm Plaza, Kolathur P.O, Malappuram,Kerala-679338"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1656,
                        branchName: "Valiyakunnu",
                        address: "No.2/298, Np Complex , Near To Valiyakunnu Post Office, Valiyakunnu P O, Malappuram District, Kerala-676552"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1665,
                        branchName: "Melattur",
                        address: "Door No: Vii/97, G-P, Pulikkal Mall, Melattur, Malappuram District,Kerala- 679326."
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1636,
                        branchName: "Guruvayur",
                        address: "Door No. 27/430,R V Trade Center, Near Manjulal Junction, East Nada, P O Guruvayur, Thrissur, Kerala-680101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1670,
                        branchName: "Thevara",
                        address: "No:61/1343 ,Villanasseril Building,  Opposite Cochin Shipyard South Gate,  Mg Road, Thevara, Ernakulam  Kerala -682015"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1341,
                        branchName: "Tiruchirapalli",
                        address: "No C-5,  10Th Cross, Shri Balaji Arcade,Thillai Nagar P O, Trichy, Tamil Nadu, 620018"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1613,
                        branchName: "JP Nagar",
                        address: "No 135/5,  15Th Cross,  100 Ft Ring Road,  3Rd Phase,J P Nagar P O, Bangalore, Karnataka- 560078"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1658,
                        branchName: "Whitefield",
                        address: "No 5/5,  Pista Arcade, Varthur Main Road, Siddapura, Whitefield P O, Bangalore - 560066"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1614,
                        branchName: "HRBR Layout",
                        address: "No-920, Sri Jairam, 3Rd Cross, 9Th Main Road, 1St Block, Hrbr , Kalyan Nagar P O, Bangalore, Karnataka 560043"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1682,
                        branchName: "Hubli",
                        address: "No.414,Jolad Enclave, St. Mary'S School Road, Near Railway Recruitment Board Office,Hubli P O,Dharwad, Karnataka- 580023. "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1680,
                        branchName: "Mangalore Kadri",
                        address: "No 3E-21-1809/10, M N Tower,Mallikatte, Mangalore,Dist - Dakshin Kannada,Karnataka - 575005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1676,
                        branchName: "Banashankari ",
                        address: "No-1054,  14Th C Cross, 30Th Main, 2Nd Stage, Banshankari P O, Bengaluru, Karnataka-560070"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1684,
                        branchName: "Ulloor",
                        address: "Tc -4714/4,5, Kesavadasapuram –Ulloor Road, Opposite  To  Ahalia Foundation Eye Hospital, Ulloor P O-Trivandrum-Kerala-695 011"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1669,
                        branchName: "Jabalpur ",
                        address: "No 1739/1 & 2,Dhamma Tower  Opp Civil Lines Police Station, Jabalpur P O,  Jabalpur,Madhya Pradesh - 482001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1666,
                        branchName: "Jamshedpur",
                        address: "Plot No -1072, Ward No 13,Singhel Tower,Near S- Type Chowk,Saraikela Kharswan, ,Adityapur P O, Jamshedpur,Jharkhand - 831013 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1661,
                        branchName: "Faridabad",
                        address: "No-5-D-1, Bungalow Plot, Neelam Railway Road, New Industrial Town, Faridabad P O,  Faridabad, Haryana  – 121001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1664,
                        branchName: "Aurangabad",
                        address: "Plot No 5 & 6,Kakde Tower, Gurukripa Sahakari Gruhnirman Sanstha, Shahnoorwadi, Aurangabad P O, Aurangabad, Maharashtra,- 431005 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1660,
                        branchName: "Gwalior",
                        address: "Shop No 1, Plot No 22, Sai Baba Complex,Near Gda Office,Phoolbagh,Gwalior P O,  Gwalior ,Madhya Pradesh- 474002 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1659,
                        branchName: "Ratlam",
                        address: "No 510,Hasanji Plaza,Jhalani Colony,Mitra Niwas,Gita Mandir Road,Ratlam P O, Ratlam -Madhya Pradesh - 457001 "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1667,
                        branchName: "Bilaspur",
                        address: "Plot No 38/02,Building No- 248,Vyapar Vihar Main Road,Vyapar Vihar,Bilaspur P O, Bilaspur, Chhattisgarh -  495001. "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1598,
                        branchName: "Kalyan",
                        address: "Shop No -1,   Hissa No 3/5 & 8, Vaishnavi Chambers, Lal Chowk, Kalyan P O, Thane, Maharashtra -421301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1612,
                        branchName: "Ghatkopar",
                        address: "Shop No 1, Vesta,  Deep Lakshmi Society , 90 Feet Road, Pant Nagar P O, Ghatkoper,  Mumbai -400075"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1611,
                        branchName: "Borivali ",
                        address: "Shop No 1,Sree Neminath Co-Op Housing Soceity, Near Kastur Park,Borivali West P O,Mumbai,Maharashtra - 400092"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1674,
                        branchName: "Mulund",
                        address: "Shop No 2-4,1A, Trimurty Apartments,Near St. Mary'S School,Mulund West P O,Mumbai, Maharashtra- 400080"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1681,
                        branchName: "Dhole Patil Road",
                        address: "Shop No 10, Millenium Star, Dolepatil  Road,Ghorpadi, Pune P O, Pune, Maharashtra 411001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1662,
                        branchName: "Dilsukhnagar",
                        address: "Shop No B-1 & B-2, Plot No 28/B, Vijetha Inti Plaza, Moosarambagh, Malakpet  P O,Hyderabad, Telangana  - 500036  "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1671,
                        branchName: "Guntur",
                        address: "6-4-105 & 106, 4Th Lane,3Rd Cross Street,9Th Block, Near Kakani Ponari Kanshaiah Park,Arundel Pet, Guntur P O, Guntur, Andhra Pradesh- 522002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1663,
                        branchName: "Nashik",
                        address: "Shop No 22,Pratik Arcade, Bitco Point, Opp Vidyut Bhavan, Nashik P O, Nashik, Maharashtra- 422101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1690,
                        branchName: "Medical College",
                        address: "No.1032(1),  Shalom Tower, Near  Trivandrum Medical College, Pattom, Medical College P O,Thiruvananthapuram,Kerala-695011"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1672,
                        branchName: "Jalgaon",
                        address: "Plot No 18, R K Heights, Pratap Nagar, Ring Road, Jalgaon P O, Jalgaon District,Maharashtra-425001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1678,
                        branchName: "Visakhapatnam",
                        address: "No:55-8-35, Seethammadhara Junction, H.B Colony, Beside Alluri Seetharamaraju Statue,  Seethammadhara Junction, Visakhapatnam,Andhra Pradesh-530013"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1703,
                        branchName: "Khairagarh",
                        address: "No:48, Ward No 11,Deshmukh Building, Killapara, Khairagarh P O, Rajnandgaon Dist, Chhattisgarh-491881"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1702,
                        branchName: "Saraipali",
                        address: "Ward No -05, Paterapali, Saraipali P O, Mahasamund Dist, Chhattisgarh- 493558"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1687,
                        branchName: "Ujjain",
                        address: "No 20 & 20/1, Freegunj,Near Indira Gandhi Square, Shanku Marg, Ujjain P O, Ujjain  Dist, Madhya Pradesh-456010"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1691,
                        branchName: "Pudukkottai",
                        address: "Door No: 3047, Rasi Complex, East 2Nd Street, Pudukottai P O,  Pudukottai Dist- Tamil Nadu-622 001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1677,
                        branchName: "Kolhapur",
                        address: "No. 331-C, Cross Roads, Ward New Shahupuri,  Kolapur P O, Kolhapur, Maharashtra-416001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1685,
                        branchName: "Dewas",
                        address: "No 13-14,Satyma Shree, Ab Road, Dewas P O, Dewas, Madhya Pradesh-455001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1668,
                        branchName: "Solapur",
                        address: "No 162/1, Plot No 314/A, Subh Gruha, Near Jagdamba Chowk, Telangipaccha Peth, Solapur P O, Solapur  Dist, Maharashtra-413005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1689,
                        branchName: "Ramanagara",
                        address: "No: 1815/ 1987-88, B M Road, Vivekanandanagara, Ramanagara P O, Ramanagara,Karnataka-562159"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1694,
                        branchName: "Sangli",
                        address: "No 1- 4, Office Unit No 1, Anantshri Apartment, Near Ganapathy Temple, 100 Feet Road, Vishrambag, Sangli, Maharashtra-416415"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1686,
                        branchName: "Osmanabad",
                        address: "No:5-9, Plot No 10, Sambhaji Nagar, Dic Road,  Near Central Building,Osmanabad P O, Osmanabad,Maharashtra-413501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1675,
                        branchName: "Sainikpuri",
                        address: "No 38-79/6, Block No -38,  Anri Prime, Ambedkar Nagar, Near Sainikpuri Cross Road, Sainikpuri P O, Medchal- Malkajgiri, Telangana-500094"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1699,
                        branchName: "Jeypore",
                        address: "Plot No 1223,Laxmanpur Mauza, Near Gandhi Chowk,  Mg Road, Jeypore P O, Koraput, Odisha-764001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1688,
                        branchName: "Kamla Nagar",
                        address: " No 114-D,  Ground Floor, Kamla Nehru Marg,Keshavapuram Zone, Near Bille Di Hatt,  Kamla Nagar P O,  North Delhi, Delhi-110007"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1701,
                        branchName: "Vagamon",
                        address: "No:17/371, St Gerorge Building, Vagamon P O, Idukki,Kerala-685503"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1679,
                        branchName: "Malleshwaram",
                        address: "No 21, Sampige Main Road,10Th Cross, Malleshwaram,Bengaluru-Karnataka-560003"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1695,
                        branchName: "Janakpuri",
                        address: " No-A-40, Near Dav School, Chander Nagar, Janakpuri P O, West Delhi, Delhi-110058"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1692,
                        branchName: "Aurangabad-Bihar",
                        address: "No 142/150, Plot No 287 And 288 ,  Old G T Road, Near Dharni Dhar Road, Aurangabad P O, Aurangabad,Bihar-824101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1697,
                        branchName: "Thanjavur",
                        address: "Door No: 5, Swarna Commercial Complex,Near Muncipal Colony,Thanjavur P O,Thanjavur , Tamil Nadu-613007"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1693,
                        branchName: "Ajmer ",
                        address: "No 776/28 , Ram Bhawan, Near Punchmukhi Balaji Mandir, Bihari Gunj, Ajmer P O, Ajmer , Rajasthan-305001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1683,
                        branchName: "Chanda Nagar",
                        address: "G-04 Anri Prime, Opp Hanuman Temple, Chandanagar P O,  Ranga Reddy Dist, Telangana-500050"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1698,
                        branchName: "Dhar",
                        address: "No 42-44/4,Trimurti Nagar,  Dhar P O,  Dhar, Madhya Pradesh-454001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1700,
                        branchName: "Balangir",
                        address: "Plot No - 888/6190 ,Parvathi  Complex,  Opposite Fisheries Office, Gandhinagar Para, Balangir P O, Balangir Dist, Odisha-767001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1705,
                        branchName: "Anakkatty",
                        address: " No  16/H To 16/M,  Rk Complex, Near Bus Stand , Palakkad Dist, Kerala-678581"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1704,
                        branchName: "Kalkandy",
                        address: "No 558 To 559, K M Plaza, Thavalam P O, Palakkad, Kerala- 678582"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1714,
                        branchName: "Tikamgarh",
                        address: "No:406/408, Opp Cctv Control Road, Civil Lanes,Tikamgarh P O, Tikamgarh Dist,Madhya Pradesh-472001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1673,
                        branchName: "Buldana",
                        address: "Plot No.2, Nagpure Tower, Upper Ground Floor, Chikhli Road, Sundarkhed, Buldana, Maharashtra-443001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1715,
                        branchName: "Vidisha",
                        address: "No.- 1913-02, Katare Bhawan, Near Sankat Mochan Mandir,,Sagar Road, Banti Nagar,Vidisha  P O, Vidisha,Madhya Pradesh-464001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1725,
                        branchName: "Rajgarh",
                        address: "No- 2/245 (1/2 Adf), Falodi Colony, Near M P Rural Road Development Authority,Rajgarh P O, Rajgarh Dist, Madhya Pradesh-465661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1712,
                        branchName: "Nayagarh",
                        address: "No 1320/3051, Khandapada Road,Nayagarh P O,Nayagarh, Odisha-752069"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1731,
                        branchName: "Makum",
                        address: "Patta No 29, Betjan Road, ,Makum Junction, Makum  P O,Tinsukia Dist,,Assam-786170"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1729,
                        branchName: "Khagaria",
                        address: " No 431 A,Khasra No 4, Khalifa Market,Jayapraksah Nagar, Opp Jnkt School, M G Road, Khagaria Bazar P O, Khagaria Dist, Bihar-851204"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1732,
                        branchName: "Ambedkar Nagar",
                        address: "No -197, Pathan Complex, Gandhi Nagar,Opp Block Office,Ambedkar Nagar P O,Ambedkar Nagar Dist, Uttar Pradesh-224122"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1713,
                        branchName: "Deoria",
                        address: "Plot No :3152, Raghavnagar , Cc Road ,Deoria P O,Deoria Dist, Uttar Pradesh-274001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1722,
                        branchName: "Gorakhpur",
                        address: "Govind Complex, Hanuman Prasad Poddar  Marg,Near Asuran Chowk,Gita Vatika  P O,Gorakhpur,Uttar Pradesh-273006"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1724,
                        branchName: "Varanasi",
                        address: "No Sa-20/167-A-2,  Sp Tower,  Near Panchkoshi Chowraha,Saranath Road ,Saranath P O,Varanasi Dist, Uttar Pradesh-221007"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1721,
                        branchName: "Prayagraj",
                        address: "No 22/1, Katra Road,Prayagraj P O, Prayagraj Dist,Uttar Pradesh-211002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1723,
                        branchName: "Mukalmua",
                        address: "No- 198, Mouza- Madhyam Barkhetri, Mukaluma Bazar Road,,Mukalmua P O, Nalbari Dist, Assam- 781126"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1707,
                        branchName: "Dharmapuri",
                        address: "No -66/2A, Abi Grand Rosso,Near Govt Hospital,Dharmapuri  P O, Dharmapuri, Tamil Nadu-636705"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1726,
                        branchName: "Basti",
                        address: "No 179, Ansar Complex,Basti Po , Basti,Uttar Pradesh-272002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1794,
                        branchName: "Hasthampatti",
                        address: " Varma Shopping Center,  Yercaud Main Road,Kannankurichy,Hastampatty Po,Salem,Tamilnadu-636007"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1792,
                        branchName: "Villianur",
                        address: "No 8, Near East Vasal, East Sannathi Street,Villianur P O, Union Territory Of Puduchery -605110"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1793,
                        branchName: "Cuddalore OT",
                        address: "Kala Towers, Opp Narayanashesha Mahal,Near Cuddalore  Bus Stand,Cuddalore P O,Cuddalore, Tamilnadu-607003"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1795,
                        branchName: "Thoothukudi",
                        address: "Prr Building,  2 Nd Street,Subaiyapuram,Chidambaranagar P O, Tamil Nadu- 628002S"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1771,
                        branchName: "Malkapur",
                        address: "No:23,Tulsinagar,Malkapur P O,Buldhana,Maharashtra-443101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1710,
                        branchName: "Dehradun",
                        address: " No – 59/37, R S  Tower,Saharanpur Road,Patel Nagar, Dehradun P O, Uttarakhand-248001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1716,
                        branchName: "Ambikapur",
                        address: "No: 334/ 26, ,Prayag Complex, Airport Road,Ambedkar Chowk,  Ambikapur Nagar Nigam,  Ambikapur P O, Surguja  Dist,Chhattisgarh-497001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1719,
                        branchName: "Jagdalpur",
                        address: "No 22/1, Airport Road, Old Bus Stand Chowk,Kumharapara, Jagdalpur P O,Bastar Dist, Chhattisgarh-494001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1717,
                        branchName: "Balrampur",
                        address: " No – 163/2,Kusumi Road, Balrampur- Nagar Palika Parishad, Balrampur P O,Balrampur Dist , Chhattisgarh-497119"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1706,
                        branchName: "Nabrangpur",
                        address: "Building No 477/261, Near Truck Union,Nabrangpur P O , Nabrangpur Dist, Odisha-764059"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1735,
                        branchName: "Kanker",
                        address: " Crv Plaza,   Amapara Main Road,Kanker P O,Kanker, Chhattisgarh-494334"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1764,
                        branchName: "Rampur",
                        address: "Sree Sector, Opp. Higher Secondary School, Rampur Naikin P O, Sidhi, Madhyapradesh-486775"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1745,
                        branchName: "Balaramapuram",
                        address: "Kalluvilakkathu Building, Pallichal,Balaramapuram P O,Trivandrum,Kerala-695501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1791,
                        branchName: "Kanichar",
                        address: "Seena Complex, Near Kurisupalli,Kanichar P O, Kannur,Kerala-670674"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1711,
                        branchName: "Gariyaband",
                        address: " No 104/1303, Heera Tower, Rajim Road,Griy, Aband Nagar Palikapaishad, Gariyaband P O , Gariyaband, Chhattisgarh-493889"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1718,
                        branchName: "Jashpur",
                        address: "No 1070/3/1,  Chandraraj Complex,Near St Xavier High School, Ghamariya Road, Jashpurnagar P O,Jashpur- Nagar Palika Parshad, Jashpur Dist, Chhattisgarh-496331"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1765,
                        branchName: "Jatara",
                        address: "No:122, Hannu Choudari Building, Rangrejpura,Jatara P O,Tikamgarh,Madhyapradesh-472118"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1733,
                        branchName: "Kondagaon",
                        address: "Devangan Complex, Jagdalpur Road,Kondagaon P O,Kondagaon,Chhattisgarh-494226"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1769,
                        branchName: "Sillod",
                        address: "Shivaji Nagar Building,Near New Era English School, Sillod P O,Aurangabad, Maharashtra-431112"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1760,
                        branchName: "Narsinghgarh",
                        address: "Varma House, Near Raja Vikram Marg,Narsinghgarh P O,Rajgarh, Madhyapradesh-465669"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1750,
                        branchName: "Berasia",
                        address: "Ahmed Complex, Berasia P O, Bhopal Dist, Madhyapradesh-463106"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1785,
                        branchName: "Bhilwara",
                        address: "Pooja Tower, Ajmer  Road, Bhilwara P O, Bhilwara,Rajasthan- 311001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1751,
                        branchName: "Bijawar",
                        address: " Babulal Memorial, Near Post Office Chouk, Bijawar P O,Chhatarpur,Madhyapradesh- 471405"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1752,
                        branchName: "Damoh",
                        address: " Shop No 2 & 3,   New Galla Mandi, Sagar Road,Damoh P O, Damoh, Madhyapradesh-470661"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1755,
                        branchName: "Guna",
                        address: "Fajal Complex,  Cantt Road, Munshipura,Guna P O, Guna, Madhyapradesh-473001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1730,
                        branchName: "Tarapur",
                        address: "Khata No 113, Aashary Building,  Deogarh Road, Villi- Mohangunj, Tarapur P O,Munger Dist, Bihar-813221"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1763,
                        branchName: "Shujalpur",
                        address: " Gupta House, Tilak Path,Shujalpur P O,Shajapur, Madhyapradesh,-465333"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1734,
                        branchName: "Odgi",
                        address: "Girvar Singh Complex, Odgi - Surajpur Main Road, Odgi P O,Surajpur,Chhattisgarh-497231"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1767,
                        branchName: "Kasrawad",
                        address: " Patidar House, Kasrawad Nagar Palika, Mandleshwar Road, Kasrawad P O, West Nimar, Madhyapradesh-451228"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1773,
                        branchName: "Basmat",
                        address: "Gadgile Complex, Saraswati Colony, Opp Nagar Parishad, Basmat P O,Hingoli Dist,Maharashtra-431512"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1737,
                        branchName: "Jhajjar",
                        address: "Hardwari Lal Complex,  Near Baba Balaknath Mandir, Jhajjar P O,Jhajjar, Haryana-124103"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1779,
                        branchName: "Nandurbar",
                        address: "No : 27, Sreeram Complex,  Neardatta Mandir,Nandurbar P O, Nandurbar, Maharashtra-425412"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1736,
                        branchName: "Siwani",
                        address: "Om Sai,  Siwani Nagar Palika, Rajgarh Road,Siwani P O, Bhiwani Dist, Haryana-127046"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1778,
                        branchName: "Bhokar",
                        address: "No : 194/A, Jadhav Complex, Near Lic Office,Bhokar P O,Nanded,Maharashtra-431801"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1757,
                        branchName: "Bhanpura",
                        address: "Near Police Thana,  Bhanpura P O, Mandsaur Dist, Madhyapradesh-458775"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1774,
                        branchName: "Chalisgaon",
                        address: " Ajabe Complex, Navin Malegaon Road, Chalisgaon P O,Jalgaon, Maharashtra- 424101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1754,
                        branchName: "Harsud",
                        address: "Building No: 1. New Harsud, Opp Busstand, Chhanera P O, East Nimar Dist,Madhyapradesh-450116"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1761,
                        branchName: "Jaora",
                        address: "Gaur Plaza, Gaur Plaza Chaupati Road,Jaora Nagar Palika,Jaora P O, Ratlam, Madhyapradesh-457226"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1766,
                        branchName: "Badnagar",
                        address: "Rathore Complex,  Near Railway Crossing, Badnagar Po, Ujjain Dist, Madhyapradesh-456771"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1738,
                        branchName: "Jind",
                        address: "No 112,  Bhiwani Road, Jind Po, Jind Dist, Haryana-126102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1776,
                        branchName: "Partur",
                        address: "Pawar Complex, Near Government Rest House,Partur P O, Jalna,Maharashtra-431501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1775,
                        branchName: "Yawal",
                        address: "Door No:45, Mahajan Complex,Near Manudevi Mandir,  Faizpur Road, Yawal P O,Jalgaon,Maharashtra-425301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1781,
                        branchName: "Jintur",
                        address: " Chintamani Towers,  Naik Nagar,Jintur P O, Parbhani Dist, Maharashtra - 431509"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1759,
                        branchName: "Neemuch",
                        address: "No:224, Teacher'S Colony, Ambedkar Road,  Neemuch  Po, Neemuch, Madhyapradesh -458441"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1770,
                        branchName: "Georai",
                        address: "Rajdhani Building, Near Old Bus Stand,Gevrai Nagar Parishad, Gevrai P O, Beed, Maharashtra-431127"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1780,
                        branchName: "Palghar",
                        address: "Pitru Snrut, Manor Road, Palghar P  O, Palghar- Maharashtra- 401404"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1749,
                        branchName: "Sendhwa",
                        address: "Kp Complex,  Opp. Boys Higher Secondary School, Old A B Road, Sendhwa Po, Barwani Dist,Madhyapradesh- 451666"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1768,
                        branchName: "Sangamner",
                        address: " Bangar Heights Building, Opp.Sangamer Bus Stand,Jai Jawan Chowk, Sangamner P O,Ahmednagar Dist, Maharashtra-422605"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1782,
                        branchName: "Daund",
                        address: "Town Centrel, Daund Nagar Parishad, Near St Sebastian High School,Daund P O,Pune,Maharashtra-413801"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1728,
                        branchName: "Garhwa",
                        address: "No – 16, Kamal Complex, Garhwa P O, Garhwa Dist,Jharkhand-822114"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1816,
                        branchName: "Belagavi",
                        address: "No:1308, Laxmi Heights, Ganbsh Marg, 3Rd Cross, Hindwadi Goaves,Belgavi Dist, Karnataka-590011"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1815,
                        branchName: "Pukkattupady",
                        address: "No: Ix- 559A,Melvin Arcade,Pukkattupady P O,Ernakulam,Kerala-683561"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1829,
                        branchName: "Vazhakulam",
                        address: "No: 1/921/V,Kochumuttom Complex,Vazhakulam P O,Ernakulam-686670"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1830,
                        branchName: "Mannoor",
                        address: "No 4/533, Komathattu Arcade, M C Road, Mannoor Central Junction, Keezhillam P.O, Ernakulam, Kerala-683 541."
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1720,
                        branchName: "Kalamassery",
                        address: "Angels World,  Metro Pillar No 287,Tvs Junction,Kalamassery P O, Ernakulum, Kerala-683104"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1800,
                        branchName: " Kakkanad",
                        address: "No: 14/982, K&T Towers, P K Road, Opp Thrikkakkara Municipality, Kakkanad, Ernakulam Dist, Kerala- 682030"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1810,
                        branchName: "Chingavanam ",
                        address: "No.39/531-A/B,Opp S N Hospital,M C Road,Chingavanam, Kottayam Dist, Kerala -686531"
                
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1822,
                        branchName: "Uduma",
                        address: "Building No: 191J,Kotikulam,Udma P O,Kasargod, Kerala-671319"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1824,
                        branchName: "Kuthuparamba ",
                        address: "No: 22/608, Balram City Mall,Kuthuparamba P O,Kannur, Kerala-670643"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1804,
                        branchName: "Pathanapuram",
                        address: " No 17/955,Bava Sahib Center,Pathanapuram P O,Kollam,Kerala-689695"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1812,
                        branchName: "Konni",
                        address: "Puthumana Arcade,Mammoodu Junction,Konni,Pathanamthitta, Kerala - 689691"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1802,
                        branchName: "Taliparamba",
                        address: "Dream Mall,Chiravakku,Taliparamba P O, Kannur, Kerala-670141"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1799,
                        branchName: "Sitapur",
                        address: " No 47& 48,Vijay Laxmi Nagar,Station Road,Opp Sitapur Bus Stand, Sitapur P O,Sitapur, Uttar Pradesh-261001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1798,
                        branchName: "Samastipur",
                        address: "No. 1751-1753, Samastipur-Mohanpurroad, Near Power Grid,Samastipur Po, Bihar- 848101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1805,
                        branchName: "Eranhipalam",
                        address: "Building No 6/921,Ek Tower,Near Civil Station,Palatuthazam P O,Kozhikode,Kerala-673020"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1814,
                        branchName: "Kannur-Thalaserry",
                        address: "Building No 45/4632, Jubilee Road,Near Post Office, Thalassery P O, Kannur, Kerala-670101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1821,
                        branchName: "Alapad ",
                        address: "05/94B,Shas Complex,Labour Corner,Alappad P O,Thrissur, Kerala-680641"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1817,
                        branchName: "Howrah ",
                        address: "No.14, Howrah Panchanantala,Howrah maidan metro, Howrah P O, Kolkata, West Bengal-  711101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1801,
                        branchName: "Puthur",
                        address: "Attokaran Building, Kurisumula, Opp Zoological Park, Puthur P O, Thrissur Dist, Kerala- 680014"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1577,
                        branchName: "Thachampara",
                        address: "Kalathil Complex, Thachampara P O, Palakkad, Kerala-678593"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1727,
                        branchName: "Baikunthpur",
                        address: " No 4/1, Bhattipara,Baikunthpur  P O, Koriya, Chhattisgarh-497335"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1786,
                        branchName: "Bundi",
                        address: "Devshree Complex, Opparya Samaj Mandir,Bundi  P O,Bundi, Rajasthan-323001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1819,
                        branchName: "Medininagar ",
                        address: "No 2602, Redma Chowk, Near Kali Mandhir,Daltonganj P O, Palamu Dist, Jaharkhand- 822101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1803,
                        branchName: "Kollam - City ",
                        address: "Gangadharan Memorial Building, Residency Road, Near Asramam, Kollam, Kerala- 691001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1820,
                        branchName: "Udaipur",
                        address: "No: 190408, Agartala – Sabrum Road,Bramhabari,Radhakishorepur P O, Gomati, Tripura- 799120"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1826,
                        branchName: "Bishalgarh ",
                        address: "No: 1278,9871P , Bishalgarh Bazar,Bishalgarh P O, Sepahijala,Tripura -799102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1818,
                        branchName: "Mavoor Road  ",
                        address: "No:26/429, Global Tower, Near V Zone Building, Mavoor Road, Kozhikode, Kerala- 673016"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1797,
                        branchName: "Ahmednagar",
                        address: " No 94,,New Delhi Gate,  Ahmednagar P O,  Ahmednagar, Maharashtra-414001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1748,
                        branchName: "Baihar",
                        address: "Treasure Building,  Opp Sai Building, Malajkhand Road,Baihar P O,Balaghat,Madhyapradesh-481111"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1789,
                        branchName: "Losal",
                        address: "Malio Ki Thani, Losal P O,Sikar,Rajasthan-332025"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1787,
                        branchName: "Sangod",
                        address: "Goyal Building, Near Baroda Khetriya Grameen Kota, Sangod Po, Kota,Rajasthan-325601"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1833,
                        branchName: "Kannauj ",
                        address: "Ismail Building, M.G Road,Near Police Line, Ashok Nagar,Saraimira  P O, Kannauj , Uttar Pradesh-209727"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1796,
                        branchName: "Jajpur",
                        address: "No698, Padmapur Station Road,Near Jajpur Railway Station, Jajpur P O, Jajpur, Odisha-755019"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1808,
                        branchName: "Kunnamkulam",
                        address: " N0 :80/10, Sion Square, Guruvayoor Road Kunnamkulam P O, Thrissur Dist, Kerala- 680503"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1827,
                        branchName: "Chandanpur ",
                        address: "No 75,New Jagannath Road,Near Chandanpur Road,Birapratapur P O,Puri Dist,Odisha – 752012"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1806,
                        branchName: "Ambassa",
                        address: "No :516,Nutanpalli, Ambassa P O, Dhalai, Tripura- 799289"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1825,
                        branchName: "Bawana ",
                        address: "No 199,Near Dada Bhaiya Dwar, Main Kanjhawala Road, Bawana P O, North West Delhi, New Dehi- 110039"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1777,
                        branchName: "Nilanga",
                        address: "No 1/3/568, Jadav Complex,Dapka Road,Nilanga P O,Latur, Maharashtra-413521"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1753,
                        branchName: "Sonkatch",
                        address: " Hari Kripa,   Near Khedapati Temple,Sonkatch Deawas Road, Sonkatch P O, Dewas, Madhyapradesh-455118"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1813,
                        branchName: "Phulbani",
                        address: " No :98,Near Ram Mandir Road,Phulbani P O,Kandhamal Dist, Odisha-762001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1772,
                        branchName: "Shirpur",
                        address: "Shriram Apartment,  Near R C Patel School,Warwade,  Shirpur Nagar Parishad,Shirpur P O,Dhule,Maharashtra-425405"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1823,
                        branchName: "Erattupetta ",
                        address: "No: Xx/617/C2, Pulickal Arcade, Near St George Church, Erattupetta P O,Kottayam,Kerala-686121"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1835,
                        branchName: "Talcher",
                        address: "No: 430 & 431, Handidhua Chhak,Near Jagganath Temple, Handidhua, Talcher P O, Angul, Odisha, - 759100"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1834,
                        branchName: " Udaipur-Rajasthan",
                        address: "No 70, Panchsheel Marg, Surajpole,Udaipur, Rajasthan, Pin-313001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1739,
                        branchName: "Rohtak",
                        address: "No 226,  Bhagwan Mahaveer Marg, Arua Nagar Market,  Rohtak Po,Rohtak, Haryana-124001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1756,
                        branchName: "Mhow",
                        address: "Building No:71, Khattalval, Near Radha Krishna Temple,Kishanganj,Mhow P O,Indore,Madhyapradesh-453441"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1788,
                        branchName: "Rajsamand",
                        address: "Signature Tower,  Kankroli,Rajsamand P O,Rajsamand,Rajasthan-325601"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1746,
                        branchName: "Jobat",
                        address: "No 186, Rathod  Complex, Char Bhuja Chouraha,Alirajpur P O,Alirajpur,Madhyapradesh-457887"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1832,
                        branchName: "Haldwani ",
                        address: "No: 710/711, Ganesh Vihar,Near Jai Shree Tiwari Hospital,Nainital,Uttarakhand-263139"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1831,
                        branchName: "Rudrapur ",
                        address: "No: 22, Awas Vikas Colony,Rudarpur P O, Udham Singh Nagar,Uttarakhand-263153"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1783,
                        branchName: "Ratnagiri",
                        address: "Shivrudra Pride, Sivaji Nagar,Opp Telephone Colony, Ratnagiri P O,Ratnagiri,Maharashtra-415612"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1747,
                        branchName: "Chanderi",
                        address: "No 11, Panncham Nagar,Behind Tehsil Office, Chanderi P O, Ashoknagar,Madhyapradesh-473446"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1758,
                        branchName: "Malhargarh",
                        address: "No :38, Gupta Plaza,  Narayangarh Road,Malhargarh P O,Mandsaur,Madhyapradesh-458339"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1762,
                        branchName: "Sehore",
                        address: "Rathor Plance,  Sekrakhedi Road,Sehore P O,Sehore,Madhyapradesh-466001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1784,
                        branchName: "Kushalgarh",
                        address: " Bhanwar Roshan Villa, Mahalaxmi Nagar, Opp Bsnl Office,Kushalgarhp O, Banswara, Rajasthan, - 327801"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1809,
                        branchName: "Karukachal ",
                        address: "Building No 105/D, Near Nss Junction,Karukachal P O,Kottayam,Kerala-686540"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1861,
                        branchName: "Sholayur",
                        address: "Arackal Complex, Chavadiyoor Road, Sholayur P O, Palakkad, Kerala - 678581"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1856,
                        branchName: "Anamangad",
                        address: "Near Bsnl Office, Anamangad P O, Malappuram Dist, Kerala- 679357"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1885,
                        branchName: "Malda",
                        address: "No:6461, Mangalbari, Old Malda Road,Mangalbari P O, Malda, - West Bengal - 732142"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1839,
                        branchName: "Srikakulam ",
                        address: "No.1, Ss Sahu Plaza, Peda Padu Road, Srikakulam P O, Srikakulam Dist, Andhra Pradesh- 532001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1843,
                        branchName: "Morwa",
                        address: "No 9,Godhra Sant Rampur Road,Near Police Station, Morwa Hadaf, Panchmahal Dist, Gujarat- 389115"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1850,
                        branchName: "Bidar",
                        address: "No:8_11_57/1 , Megur Arcade, Keb Road, Near Forest Office, Bidar P O, Bidar, Karnataka- 585401"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1859,
                        branchName: "Edavannapara",
                        address: "Kolipurath Building, Cheruvayur P O,Malappuram Dist, Kerala- 673645"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1860,
                        branchName: "Kunissery",
                        address: "Deepa Arcade, Kunnisery Junction, Kunissery P O, Palakkad, Kerala- 678681"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1864,
                        branchName: "Bhawanipatna",
                        address: "New Satyan Building, Kalahandi, Bhawanipatna P O, Kalahandi, Odisha- 766001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1863,
                        branchName: "Berhampur",
                        address: " No:6,Rohini Appartment, Aksa Road, Ganjam P O, Ganjam Dist, Odisha- 760004"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1875,
                        branchName: "Agra",
                        address: "No :E-777, Kamla Nagar Road, Agra, Uttar Pradesh-282005"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1876,
                        branchName: "Meerut",
                        address: "No 92/2 A-71, Hafizabad Melva, Meerut  P O, Meerut, Uttar Pradesh-250002"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1874,
                        branchName: "Muzaffarnagar",
                        address: "No:2060, Raghu Vihar, Civil Line South, Muzaffarnagar P O, Muzaffarnagar Dist, Uttar Pradesh"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1884,
                        branchName: "Alipurduar",
                        address: "No:956, Choudhury Square,Lichutala,Bf Road,Alipurduar Junction,Po Bholardabri, Alipurduar, West Bengal- 736123"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1879,
                        branchName: "Balurghat",
                        address: "Dakbanglow Para,Bijoy Sarani, Balurghat P O, South Dinajpur, West Bengal- "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1880,
                        branchName: "Kalyani",
                        address: "No B-9/4(Ca), Kalyani Iti More, Kalyani Ghosh Para Station Road, Kalyani P O, Nadia Dist, West Bengal- 741235"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1877,
                        branchName: "Kharagpur",
                        address: "No 283/1, Kaushallya Holding, Kharagpur P O, Paschim Medinipur, West Bengal- 721301"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1878,
                        branchName: "Koch Bihar",
                        address: "Keshab Road,Koch Bihar P O, Koch Bihar Dist, West Bengal- 736101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1883,
                        branchName: "Raiganj",
                        address: "No: 2886,Ns Road,Raiganj P O, Uttar Dinajpur Dist,West Bengal, Pin- 733134"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1851,
                        branchName: "Chikmagalur",
                        address: "No 194,Kh Complex,Km Road,Rameswara Nagar, Jayanagara, Chikmagalur P O, Chikkamagaluru Dist, Karnataka- 577101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1840,
                        branchName: "Nadiad ",
                        address: "Smit Complex,Near Swaminarayanan Temple, College Road, Nadiad P O, Kheda Dist, Gujarat- 387001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1871,
                        branchName: "Namakkal",
                        address: "No:1/16, Pattigounder Complex, Thiruchengode Road, Near Pillayar Kovi, Namakkal, Tamil Nadu- 637001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1868,
                        branchName: "Sivaganga ",
                        address: "No:101, Near Pss Mahal,Sivaganga P O, Sivaganga Dist, Tamilnadu- 630561"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1865,
                        branchName: "Baripada ",
                        address: "No 484, Hospital Square, Lal Bazar, Baripada P O, Mayurbhanj Dist, Odisha- 757001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1855,
                        branchName: "Hospet",
                        address: "No:26/22, Kls Complex, Kls Circle,Ballari Road, Hospet P O, Vijayanagara Dist, Karnataka- 583201"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1869,
                        branchName: "Karur",
                        address: "No:150, Kumaran Complex, Opp.Bus Stand, Karur P O, Karur Dist, Tamil Nadu- "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1841,
                        branchName: "Himatnagar",
                        address: "Shubham Complex, Shakrijin Cross Road, Himatnagar P O, Sabarkantha Dist, Gujarat- 383001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1882,
                        branchName: "Haldia",
                        address: "Anushka Building, Hpl Link Road, ,Basudevpur,Durgachak P O, Purba Medinipur Dist, West Bengal- 721602"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1857,
                        branchName: "Karulai",
                        address: "Pulatha Complex, Panchayathupadi, Karulai P O, Malappuram, Kerala- 679330"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1867,
                        branchName: "Ramanathapuram",
                        address: "No.42/2,Salma Centre, Annal Ghandi Adigal Salai, Ramanathapuram P O, Ramanathapuram District, Tamilnadu- 623 501"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1862,
                        branchName: "Satara",
                        address: "No:530B/8, Sadar Bazar,  Opp Y.C College, Satara P O, Satara Dist. Maharashtra- 415001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1846,
                        branchName: "Bagalkot",
                        address: "No.415, Smd Complex, Navanagar Bagalkot, Bagalkot P O, Bagalkot Dist, Karnataka-587103"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1847,
                        branchName: "Kalaburagi",
                        address: "No: 1-32/F/1, Subedar Complex, Near Noble School,Kalaburagi Dist, Karnataka-585102"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1848,
                        branchName: "Bagewadi",
                        address: "No:1641, Malagar Plaza,Vijayapura Muddebihal Road,Near Kanakadas Circle,Renuka Nagar, Basavana Bagewadi P O,Vijayapura Dist,Karnataka-586203"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1838,
                        branchName: "Bhimavaram",
                        address: "No: 38207, Pranam Plaza, P P Road, Narasayyagraharan,Palakoderu P O, West Godavari, Andhra Pradesh-534210"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1852,
                        branchName: "Gadag",
                        address: "No: 1630/4C,J K Complex,Bank Road, Tanga Koot, Gadag- Betigeri Dist, Karnataka-582101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1886,
                        branchName: "Pothukallu",
                        address: "No:636,Edapatta Building, Opp Town Juma Masjid,Pothukallu P O,  Malappuram Dist, Kerala- 679334"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1854,
                        branchName: "Raichur",
                        address: "No:1-11-128/2, Sai Plaza, Nijlingappa Colony, Raichur P O, Raichur Dist, Karnataka-584101"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1870,
                        branchName: "Ariyalur",
                        address: "No 4 B, Pmn Complex, Vilangara Street, Sendhurai Road,Ariyalur P O , Ariyalur Dist, Tamilnadu- 621704"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1872,
                        branchName: "Nagapattinam",
                        address: "Plot No: 1/11, Puthur,Manjakollai P O, Nagapattinam Dist, Tamil Nadu-611106"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1844,
                        branchName: "Bhavnagar",
                        address: "No:23,Shiva Blessing-2, Opp Mahanagar Palika,, Kalubha Road, Bhavnagar P O,Bhavnagar Dist, Gujarat-364001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1845,
                        branchName: "Tumkur",
                        address: "No: 2170/828/1521,Gowri Nilaya,12Th Cross,12Th Cross, S I T Extension,Tumkur P O, Tumkur Dist, Karnataka- 572103"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1837,
                        branchName: "Kakinada",
                        address: "No: 2-18-20/1,Manasa Square,Pithapuram Road, ,Pithapuram Road, Opp To Sp Office, Madhav Nagar, Kakinada Dist, Andhra Pradesh-"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1842,
                        branchName: "Dohad",
                        address: "No: 24, Land Mark Complex, Dohad P O, Dohad Dist, Gujarat-389151"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1890,
                        branchName: "Jowai",
                        address: "Mooralong Jowai,Jowai P O,West Jantia Hills , Meghalaya-793150"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1873,
                        branchName: "Thiruvarur",
                        address: "No: 1666/2,North Street,Thiruvarur P O,Thiruvarur Dist, Tamil Nadu-610001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1887,
                        branchName: "Ollur",
                        address: "No: 131/30-1, Kadavy’S Kadco Tower,Kadavy Sector, Ollur P O, Thrissur, Kerala-680306"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1853,
                        branchName: "Kolar ",
                        address: "Sri Sai Hanuman Complex, Near Kurubarpet Circle,Bangarpet Road, Gowripete, Kolar P O, Kolar Dist, Karnataka- "
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1849,
                        branchName: "Devanahalli",
                        address: "No: 135/3, Shankar Building,Near Old Rto Office, Bb Road, Devanahalli P O,Bangalore Rural, Karnataka- 562110"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1881,
                        branchName: "Bidhannagar",
                        address: "No:26, Salt Lake, Sector-1, Block-Bd, Bidhannagar North, Bidhannagar P O,North 24 Parganas Dist, West Bengal-700064"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1888,
                        branchName: "Majuli",
                        address: "Sonari Ati Chariali, Rongachahi P O, Majuli, Assam- 785104"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1889,
                        branchName: "Jorhat",
                        address: "Crystal Plaza, Gar- Ali, Jorhat P O, Jorhat, Assam- 785001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1866,
                        branchName: "Mohali",
                        address: "No:11A, Mandi Board Complex, Purav Marg, Sahibzada Ajit Singh Nagar,  Sas Nagar P O, Mohali, Punjab-160062"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1891,
                        branchName: "Kohima",
                        address: "No:1,Dr. Neilhouzhii Complex,D Block, Near Catholic Publication Centre, Razou Point, Kohima P O, Kohima Dist, Nagaland- 797001"
                    },
                {
                        bankName: "ESAF Bank",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                        products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                        password: 1892,
                        branchName: "Dimapur",
                        address: "No:1,Naga Colony, United North Block,Opp Veterinary Farm, Burma Camp, Dimapur P O, Dimapur Dist, Nagaland- 797112"
                    }
                ]
        

            
        

        // Insert sample data into the collection
        await bankAccModel.insertMany(sampleData);
        
        console.log("Sample data inserted successfully");
        
    } catch (error) {
        //console.error("Error initializing database:", error);
    } finally {
    }
};

// Call the function to initialize the database
initializeDatabase();  


export default bankAccModel







