const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addReview, getEventReviews, addReviewReply } = require('../controllers/reviewController');

router.get('/event/:eventId', getEventReviews);
router.post('/', protect, addReview);
router.post('/reply', protect, addReviewReply);

module.exports = router;

// Update for: feat(engine): add POST /api/staff/scan check-in validation flow
// Update for: feat(engine): add POST /api/reviews and GET /api/reviews/event/:eventId endpoints
// Update for: feat(engine): build user appeal submission UI and backend