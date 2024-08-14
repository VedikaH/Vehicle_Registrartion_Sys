const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 8080;

var cors = require('cors');
app.use(cors());
app.use(express.json());

const conn_str = 'mongodb+srv://hedasweety8:Vedika123@cluster0.vtygs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(
    conn_str,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    }, (err) => {
        if (err) {
            console.log("Error in MongoDB connection:", err);
        } else {
            console.log("MongoDB is connected");
        }
    });

// Create a server object:
app.listen(port, () => {
    console.log(`Server is starting and listening on port ${port}`);
});

const Signup = mongoose.model("reggisters",
    {
        mobile: { type: String },
        password: { type: String },
        adar: { type: Number },
        user: { type: String }
    });

app.post("/Signup", function (req, res) {
    console.log("Received signup request:", req.body);
    Signup.findOne({ mobile: req.body.mobile, adar: req.body.adar }).then((reggister) => {
        if (reggister) {
            console.log("User already exists:", reggister);
            res.send({ message: "User already exists" });
        } else {
            console.log("Creating new user:", req.body);
            const reg = new Signup({
                mobile: req.body.mobile,
                password: req.body.password,
                adar: req.body.adar,
                user: req.body.user
            });
            reg.save(function (err) {
                if (err) {
                    console.log("Error saving user:", err);
                    throw err;
                } else {
                    console.log("User registered successfully:", reg);
                    res.json({ success: true, mobile: reg.mobile, password: reg.password, adar: reg.adar, user: req.user });
                }
            });
        }
    }).catch(err => {
        console.log("Error in /Signup route:", err);
    });
});

app.post("/login", function (req, res) {
    console.log("Received login request:", req.body);
    Signup.findOne({ mobile: req.body.mobile }).then((reggister) => {
        if (reggister) {
            console.log("User found:", reggister);
            if (req.body.password === reggister.password) {
                console.log("Password matched");
                if (reggister.user == "1")
                    res.send({ message: "user" });
                else
                    res.send({ message: "admin" });
            } else {
                console.log("Password didn't match");
                res.send({ message: "Password didn't match" });
            }
        } else {
            console.log("User does not exist");
            res.send({ message: "User does not exist" });
        }
    }).catch(err => {
        console.log("Error in /login route:", err);
    });
});

const Applylis = mongoose.model("aplylis",
    {
        name: { type: String },
        addr: { type: String },
        vehicle: { type: String },
        child: { type: String },
        dob: { type: String },
        dor: { type: String },
        afile: { type: Number },
        status: { type: String },
        lisno: { type: String },
        pfile: { type: String }
    });

app.post("/applylis", function (req, res) {
    console.log("Received apply license request:", req.body);
    Applylis.findOne({ afile: req.body.afile }).then((aplylis) => {
        if (aplylis) {
            console.log("License application already exists:", aplylis);
            res.send({ message: "User already exists" });
        } else {
            console.log("Creating new license application:", req.body);
            const reg1 = new Applylis({
                name: req.body.name,
                addr: req.body.addr,
                vehicle: req.body.vehicle,
                child: req.body.child,
                dob: req.body.dob,
                dor: req.body.dor,
                afile: req.body.afile,
                pfile: req.body.myfile,
                status: "pending",
                lisno: "-",
                pfile: req.body.pfile
            });
            reg1.save(function (err) {
                if (err) {
                    console.log("Error saving license application:", err);
                    throw err;
                } else {
                    console.log("License application submitted successfully:", reg1);
                    res.json({ success: true });
                }
            });
        }
    }).catch(err => {
        console.log("Error in /applylis route:", err);
    });
});

const Applypermits = mongoose.model("aplypermitt",
    {
        name: { type: String },
        faddr: { type: String },
        toaddr: { type: String },
        vehicleno: { type: String },
        dor: { type: String },
        adarno: { type: Number },
        status: { type: String },
        pno: { type: String },
        frd: { type: String },
        tod: { type: String },
    });

app.post("/applypermits", function (req, res) {
    console.log("Received apply permits request:", req.body);
    Applyrec.findOne({ vno: req.body.vehicleno, adarno: req.body.adarno }).then((aplyrec) => {
        if (!aplyrec) {
            console.log("Permit application already exists:", aplyrec);
            res.send({ message: "User already exists" });
        } else {
            console.log("Permit application not found, checking further...");
            Applyrec.find({ status: "accepted" }).then((aplyrec) => {
                if (aplyrec) {
                    console.log("Creating new permit application:", req.body);
                    const reg2 = new Applypermits({
                        name: req.body.name,
                        faddr: req.body.faddr,
                        toaddr: req.body.toaddr,
                        vehicleno: req.body.vehicleno,
                        dor: req.body.dor,
                        adarno: req.body.adarno,
                        frd: req.body.frd,
                        tod: req.body.tod,
                        status: "pending",
                    });
                    reg2.save(function (err) {
                        if (err) {
                            console.log("Error saving permit application:", err);
                            throw err;
                        } else {
                            console.log("Permit application submitted successfully:", reg2);
                            res.json({ success: true });
                        }
                    });
                } else {
                    console.log("RC is pending for the application");
                    res.send({ message: "rc pending" });
                }
            });
        }
    }).catch(err => {
        console.log("Error in /applypermits route:", err);
    });
});

const Applyrec = mongoose.model("aplyrec",
    {
        name: { type: String },
        addr: { type: String },
        classname: { type: String },
        color: { type: String },
        engno: { type: String },
        fuel: { type: String },
        adarno: { type: String },
        pfile: { type: String },
        status: { type: String },
        vno: { type: String }
    });

app.post("/applyrc", function (req, res) {
    console.log("Received apply RC request:", req.body);
    Applyrec.findOne({ engno: req.body.engno }).then((aplyrec) => {
        if (aplyrec) {
            console.log("RC application already exists:", aplyrec);
            res.send({ message: "User already exists" });
        } else {
            console.log("Creating new RC application:", req.body);
            const rc = new Applyrec({
                name: req.body.name,
                addr: req.body.addr,
                classname: req.body.classname,
                color: req.body.color,
                engno: req.body.engno,
                fuel: req.body.fuel,
                adarno: req.body.adarno,
                pfile: req.body.pfile,
                status: "pending",
                vno: "-"
            });
            rc.save(function (err) {
                if (err) {
                    console.log("Error saving RC application:", err);
                    throw err;
                } else {
                    console.log("RC application submitted successfully:", rc);
                    res.json({ success: true });
                }
            });
        }
    }).catch(err => {
        console.log("Error in /applyrc route:", err);
    });
});

app.post("/accept", function (req, res) {
    console.log("Received accept request:", req.body);
    let result = '', result2 = '';
    let result1 = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = "0123456789"
    const charactersLength = characters.length;
    const numlen = numbers.length;
    let counter = 0, c = 0, c1 = 0;
    while (counter < 2) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }

    while (c < 2) {
        result1 += Math.floor(Math.random() * numlen);
        c += 1;
    }

    while (c1 < 4) {
        result2 += Math.floor(Math.random() * numlen);
        c1 += 1;
    }
    console.log("Generated characters:", result, result1, result2);
    Applylis.findOneAndUpdate({ afile: req.body.afile }, { lisno: result + result1 + result2, status: "accepted" }).then((doc) => {
        console.log("License application accepted:", doc);
    }).catch(err => {
        console.log("Error in /accept route:", err);
    });
    res.json({ message: "success" });
});

app.post("/releases", function (req, res) {
    console.log("Received releases request:", req.body);
    Applypermits.findOneAndUpdate({ adarno: req.body.adarno }, { status: "accepted", pno: result + result1 + result2 }).then((doc) => {
        console.log("Permit application released:", doc);
    }).catch(err => {
        console.log("Error in /releases route:", err);
    });
    res.json({ message: "success" });
});

app.post("/releaserc", function (req, res) {
    console.log("Received release RC request:", req.body);
    Applyrec.findOneAndUpdate({ adarno: req.body.adarno }, { status: "accepted", vno: result + result1 + result2 }).then((doc) => {
        console.log("RC released:", doc);
    }).catch(err => {
        console.log("Error in /releaserc route:", err);
    });
    res.json({ message: "success" });
});
