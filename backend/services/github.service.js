import { Octokit } from 'octokit';

/**
 * Get GitHub configuration from environment variables
 */
function getGitHubConfig() {
    return {
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        token: process.env.GITHUB_TOKEN
    };
}

/**
 * Update a file in the GitHub repository
 */
export async function updateGitHubFile(path, content, message) {
    const config = getGitHubConfig();
    const octokit = new Octokit({ auth: config.token });

    try {
        // Get the current file's SHA (required for updating)
        const { data: fileData } = await octokit.rest.repos.getContent({
            owner: config.owner,
            repo: config.repo,
            path,
        });

        if (Array.isArray(fileData)) {
            throw new Error('Target path is a directory, not a file.');
        }

        // Push the update
        await octokit.rest.repos.createOrUpdateFileContents({
            owner: config.owner,
            repo: config.repo,
            path,
            message,
            content: Buffer.from(content, 'utf-8').toString('base64'),
            sha: fileData.sha,
        });

        return { success: true };
    } catch (error) {
        console.error('GitHub API Error:', error);
        return { success: false, message: error.message };
    }
}

/**
 * Upload an image to a specific directory in GitHub
 */
export async function uploadGitHubImage(dir, fileName, fileBase64, message) {
    const config = getGitHubConfig();
    const octokit = new Octokit({ auth: config.token });
    const path = dir === 'backgrounds'
        ? `client/src/assets/backgrounds/${fileName}`
        : `client/src/assets/gallery/${dir}/${fileName}`;

    try {
        // Check if file exists to get SHA if overwrite is needed
        let sha;
        try {
            const { data: existingFile } = await octokit.rest.repos.getContent({
                owner: config.owner,
                repo: config.repo,
                path,
            });
            if (!Array.isArray(existingFile)) {
                sha = existingFile.sha;
            }
        } catch {
            // File doesn't exist, which is fine
        }

        await octokit.rest.repos.createOrUpdateFileContents({
            owner: config.owner,
            repo: config.repo,
            path,
            message,
            content: fileBase64,
            sha,
        });

        return { success: true };
    } catch (error) {
        console.error('GitHub API Error:', error);
        return { success: false, message: error.message };
    }
}

/**
 * List files in a specific directory in GitHub
 */
export async function listGitHubFiles(path) {
    const config = getGitHubConfig();
    const octokit = new Octokit({ auth: config.token });

    try {
        const { data } = await octokit.rest.repos.getContent({
            owner: config.owner,
            repo: config.repo,
            path,
        });

        if (Array.isArray(data)) {
            return {
                success: true,
                files: data
                    .filter(item => item.type === 'file')
                    .map(item => item.name)
            };
        }
        return { success: false, message: 'Path is not a directory.' };
    } catch (error) {
        console.error('GitHub API Error:', error);
        return { success: false, message: error.message };
    }
}

/**
 * Delete a file from the GitHub repository
 */
export async function deleteGitHubFile(path, message) {
    const config = getGitHubConfig();
    const octokit = new Octokit({ auth: config.token });

    try {
        // Get the current file's SHA (required for deleting)
        const { data: fileData } = await octokit.rest.repos.getContent({
            owner: config.owner,
            repo: config.repo,
            path,
        });

        if (Array.isArray(fileData)) {
            throw new Error('Target path is a directory, not a file.');
        }

        // Delete the file
        await octokit.rest.repos.deleteFile({
            owner: config.owner,
            repo: config.repo,
            path,
            message,
            sha: fileData.sha,
        });

        return { success: true };
    } catch (error) {
        console.error('GitHub API Error:', error);
        return { success: false, message: error.message };
    }
}

/**
 * Get repository information
 */
export async function getRepoInfo() {
    const config = getGitHubConfig();
    const octokit = new Octokit({ auth: config.token });

    try {
        const { data } = await octokit.rest.repos.get({
            owner: config.owner,
            repo: config.repo,
        });

        return {
            success: true,
            repo: {
                name: data.name,
                fullName: data.full_name,
                private: data.private,
                updatedAt: data.updated_at
            }
        };
    } catch (error) {
        console.error('GitHub API Error:', error);
        return { success: false, message: error.message };
    }
}
