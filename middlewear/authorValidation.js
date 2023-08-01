
const validateAuthor = (req, res, next) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/
    const { firstName, lastName, email, phoneNumber, bio } = req.body;
    if (!firstName || !lastName ||!email || !phoneNumber || !bio) {
      return res.status(400).json({ error: 'Fields cannot be empty' });
    }
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }
    if (!phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }
    next();
  };
  
module.exports={validateAuthor}
 