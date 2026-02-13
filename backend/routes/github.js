import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import * as githubService from '../services/github.service.js';

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

/**
 * POST /github/update-file
 * Update a file in the repository
 */
router.post('/update-file', async (req, res) => {
    try {
        const { path, content, message } = req.body;

        if (!path || !content || !message) {
            return res.status(400).json({
                error: 'Missing required fields',
                message: 'path, content, and message are required'
            });
        }

        const result = await githubService.updateGitHubFile(path, content, message);
        res.json(result);
    } catch (error) {
        console.error('Update file error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

/**
 * POST /github/upload-image
 * Upload an image to the repository
 */
router.post('/upload-image', async (req, res) => {
    try {
        const { dir, fileName, fileBase64, message } = req.body;

        if (!dir || !fileName || !fileBase64 || !message) {
            return res.status(400).json({
                error: 'Missing required fields',
                message: 'dir, fileName, fileBase64, and message are required'
            });
        }

        const result = await githubService.uploadGitHubImage(dir, fileName, fileBase64, message);
        res.json(result);
    } catch (error) {
        console.error('Upload image error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

/**
 * POST /github/list-files
 * List files in a directory
 */
router.post('/list-files', async (req, res) => {
    try {
        const { path } = req.body;

        if (!path) {
            return res.status(400).json({
                error: 'Missing required field',
                message: 'path is required'
            });
        }

        const result = await githubService.listGitHubFiles(path);
        res.json(result);
    } catch (error) {
        console.error('List files error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

/**
 * POST /github/delete-file
 * Delete a file from the repository
 */
router.post('/delete-file', async (req, res) => {
    try {
        const { path, message } = req.body;

        if (!path || !message) {
            return res.status(400).json({
                error: 'Missing required fields',
                message: 'path and message are required'
            });
        }

        const result = await githubService.deleteGitHubFile(path, message);
        res.json(result);
    } catch (error) {
        console.error('Delete file error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

/**
 * GET /github/repo-info
 * Get repository information
 */
router.get('/repo-info', async (req, res) => {
    try {
        const result = await githubService.getRepoInfo();
        res.json(result);
    } catch (error) {
        console.error('Repo info error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

export default router;
