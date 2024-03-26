const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
  getReactions
} = require('../../controllers/thoughtsController');

router.get('/', getAllThoughts);
router.post('/', createThought);
router.get('/:id', getThoughtById);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

router.post('/:thoughtId/reactions', addReaction); // Add a reaction to a thought
router.get('/:thoughtId/reactions', getReactions); // Get all reactions for a specific thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction); // Remove a reaction from a thought

module.exports = router;
