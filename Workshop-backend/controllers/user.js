const pool = require("../config");
const bcrypt = require("bcrypt");
const jwt = require(`jsonwebtoken`);
const { validateAdminSignin, validateAdminSignup } = require(`../schemas/admin`);
const { validateProduct } = require('../schemas/product');

const nodemailer = require(`nodemailer`);
require(`dotenv`).config();

var transporter = nodemailer.createTransport({
    service: `gmail`,
    auth: {
        user: process.env.GMAILUSER,
        pass: process.env.GMAILPASSWORD
    }
});


module.exports.createAdmin = async (req, res) => {
    const { error } = validateAdminSignup(req.body);
    if (error) {
        var e = "";
        error.details.forEach(element => {
            e = e + " " + element.message;
        });

        return res.status(400).json(e);
    }

    const { email, password, name } = req.body;
    try {
        var existingAdmin = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    } catch (err) {
        return res.status(500).json("Server Error1!");
    }
    if (existingAdmin.rows[0] && existingAdmin.rows[0].activated) {
        return res.status(422).json("User already Registered, please login!");
    }
    else if (existingAdmin.rows[0] && !existingAdmin.rows[0].activated) {
        try {
            let date = new Date();
            let expTime = date.getTime() + 1000 * 60 * 60;   //this generates the time of (current time + one hour)
            const payload = {
                role: `admin`,
                expTime
            }
            const expTimeToken = jwt.sign(payload, process.env.SECRET, { expiresIn: "1hr" });

            const newAdmin = await pool.query(`UPDATE users SET temporaryToken=$1 WHERE user_id=$2 RETURNING *`, [expTimeToken, existingAdmin.rows[0].user_id]);

            var mailOptions = {
                from: process.env.GMAILUSER,
                to: email,
                subject: `Activate Account`,
                text: `Click the below button to confirm your email!`,
                html: `<body style="border-radius:2%;border: 1px solid orangered;background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,92,114,1) 53%, rgba(67,73,73,1) 100%);padding: 30px;"><h1 style="color: rgb(177, 59, 59)">Hello  <strong>` + name + `</strong>,</h1><h3 style="color: rgb(146, 146, 158)">Thank you for registering at MyVGym app. Please click the button below to complete your activation:</h3><button style="padding: 10px;border: 1px solid red; background:none"><a style = "color: #eaeef5c7; text-decoration: none; padding: 15px; font-size: 20px;"href="http://localhost:3000/verify/${expTimeToken}` + `">Activate Account</button></body>`
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Email sent: ` + info.response);
                }
            });

            return res.json({ expTimeToken: expTimeToken, mail: true });
        } catch (err) {
            return res.status(500).json(`Server Error2!`);
        }

    }
    else {
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        try {
            let date = new Date();
            let expTime = date.getTime() + 1000 * 60 * 60;   //this generates the time of (current time + one hour)
            const payload = {
                role: `admin`,
                expTime
            }
            const expTimeToken = jwt.sign(payload, process.env.SECRET, { expiresIn: "1hr" });

            const newAdmin = await pool.query(`INSERT INTO users(name, email, password, temporarytoken)  VALUES($1, $2, $3, $4) RETURNING *`, [name, email, bcryptPassword, expTimeToken]);

            var mailOptions = {
                from: process.env.GMAILUSER,
                to: email,
                subject: `Activate Account`,
                text: `Click the below button to confirm your email!`,
                html: `<body style="border-radius:2%;border: 1px solid orangered;background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,92,114,1) 53%, rgba(67,73,73,1) 100%);padding: 30px;"><h1 style="color: rgb(177, 59, 59)">Hello  <strong>` + name + `</strong>,</h1><h3 style="color: rgb(146, 146, 158)">Thank you for registering at MyVGym app. Please click the button below to complete your activation:</h3><button style="padding: 10px;border: 1px solid red; background:none"><a style = "color: #eaeef5c7; text-decoration: none; padding: 15px; font-size: 20px;"href="http://localhost:3000/verify/${expTimeToken}` + `">Activate Account</button></body>`
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Email sent: ` + info.response);
                }
            });

            return res.json({ expTimeToken: expTimeToken, mail: true });
        } catch (err) {
            return res.status(500).json(`Server Error!`);
        }
    }
};


module.exports.addProduct = async (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) {
        var e = "";
        error.details.forEach(element => {
            e = e + " " + element.message;
        });

        return res.status(400).json(e);
    }

    const { productName, type, brand, regularPrice, salePrice, quantity, length, height, width, weight, color, quality, description } = req.body;
    try {
        const product = await pool.query("INSERT INTO products(admin_id, name, type, brand, regularPrice, salePrice, quantity, length, height, width, weight, color, quality, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *", [req.user.id, productName, type, brand, regularPrice, salePrice, quantity, length, height, width, weight, color, quality, description]);

    } catch (err) {
        return res.status(500).json(err.message)
    }
    return res.json({ p: "Product Added" });
};

module.exports.getProducts = async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM products");
        return res.json(products.rows);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

module.exports.signin = async (req, res) => {
    const { error } = validateAdminSignin(req.body);
    if (error) {
        var e = "";
        error.details.forEach(element => {
            e = e + " " + element.message;
        });

        return res.status(400).json(e);
    }

    const { email, password } = req.body;
    var admin;
    try {
        admin = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    } catch (err) {
        return res.status(500).json(`Server Error!`);
    }

    if (!admin.rows[0]) return res.status(401).json("User not found, please signup!");
    if (!admin.rows[0].activated) return res.status(401).json("Kindly verify your account first!");
    console.log(admin.rows[0])
    const validPassword = await bcrypt.compare(password, admin.rows[0].password);
    if (!validPassword) return res.status(401).json(`The password you entered is incorrect!`);

    const role = admin.rows[0].role ? 'admin' : 'client';

    const payload = {
        id: admin.rows[0].user_id,
        role: role
    }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1hr" });
    return res.json({ token: token });
};


module.exports.adminAuth = async (req, res, next) => {
    const { id } = req.body;
    const expTimeTokenBody = id;
    const date = new Date();

    if (!expTimeTokenBody) return res.json({ err: "Your token has expired!" });
    try {
        const admin = await pool.query("SELECT * FROM users WHERE temporarytoken=$1", [expTimeTokenBody]);
        console.log(admin.rows[0]);
        if (!admin.rows[0]) { return res.json({ err: `Your token has expired!` }) }

        if (!admin.rows[0].activated) {
            const decodedToken = jwt.verify(expTimeTokenBody, process.env.SECRET);
            console.log(decodedToken.expTime + "aaaaaa");
            console.log(admin.rows[0].temporarytoken)
            if (date.getTime() < decodedToken.expTime) {
                const update = await pool.query("UPDATE users SET activated=$1 WHERE temporaryToken=$2", [true, admin.rows[0].temporarytoken]);
                var mailOptions = {
                    from: process.env.GMAILUSER,
                    to: admin.rows[0].email,
                    subject: `Activation Link`,
                    text: `Your account has been successfully activated`,
                    html: `<body style="border-radius:2%;border: 1px solid orangered;background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,92,114,1) 53%, rgba(67,73,73,1) 100%);padding: 30px;"><h1 style="color: rgb(177, 59, 59)">Hello ` + admin.rows[0].name + `,</h1><h3 style="color: rgb(146, 146, 158)">Your account has been activated successfully!</h3></body>`
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return res.status(403).json(error);
                    } else {
                        console.log(`Email sent: ` + info.response);
                        return res.json("Email has been verified");
                    }
                });
            } else {
                res.json({ err: `Your token has expired!` });
            }
        } else {
            return res.json({ err: `Account already verified!` });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

module.exports.verifyToken = (req, res) => {
    try {
        console.log(req.user)
        return res.json({ 'user_id': req.user.id, 'role': req.user.role });
    } catch (err) {
        return res.status(500).send('Server Error!');
    }
}

module.exports.adminDashboard = (req, res) => {
    res.json(req.user.role);
}



// module.exports.adminAuth = async (req, res, next) => {
//     const { token } = req.body;

//     try {
//         const admin = await pool.query("SELECT * FROM users WHERE temporarytoken=$1", [token]);
//         console.log(token)
//         if (!admin.rows) { res.json(`please register first`) }
//         if (!admin.rows[0].activated) {
//             const update = await pool.query("UPDATE users SET activated=$1 WHERE temporaryToken=$2", [true, token]);
//             var mailOptions = {
//                 from: process.env.GMAILUSER,
//                 to: admin.email,
//                 subject: `Activation Link`,
//                 text: `Your account has been successfully activated`,
//                 html: `<body style="background-color:#f6d55c;padding: 30px;"><h1>Hello ` + admin.user + `,</h1><h3>Your account has been successfully activated</h3></body>`
//             };

//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log(`Email sent: ` + info.response);
//                 }
//             });
//             return res.json(`Account has been verified!`);
//         } else {
//             return res.json(`Account already verified!`);
//         }
//     } catch (err) {
//         return res.status(500).json(err);
//     }
// }