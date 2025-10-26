import express from 'express';
import Content from '../models/Content.js';

const router = express.Router();

// Get all content by type
router.get('/:type', async (req, res) => {
  try {
    const data = await Content.find({ type: req.params.type });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single content by type and slug
router.get('/:type/:slug', async (req, res) => {
  try {
    const item = await Content.findOne({
      type: req.params.type,
      slug: req.params.slug,
    });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new content
router.post('/', async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update content by slug
router.put('/:slug', async (req, res) => {
  try {
    const updated = await Content.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
