
const validateBlog = (req, res, next) => {
    const { title, category, short_description, content } = req.body;
    if (!title || !category ||!short_description || !content ) {
      return res.status(400).json({ error: 'Fields cannot be empty' });
    }
    next();
  };
  
module.exports={validateBlog}
 