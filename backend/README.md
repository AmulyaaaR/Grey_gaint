# Grey Gaint Admin Backend

Secure backend server for the Grey Gaint Admin Panel, implementing TOTP-based authentication with JWT session management.

## Features

- ✅ **TOTP Authentication** - Time-based OTP using `speakeasy`
- ✅ **JWT Sessions** - 1-hour token expiry with HttpOnly cookies
- ✅ **GitHub API Proxy** - All GitHub operations proxied through authenticated endpoints
- ✅ **Rate Limiting** - 5 login attempts per 15 minutes per IP
- ✅ **Security Headers** - Helmet middleware for common vulnerability protection
- ✅ **Environment Validation** - Fail-fast on missing required variables
- ✅ **CORS with Credentials** - Secure cross-origin requests with cookie support

## Prerequisites

- Node.js (v16+)
- GitHub Personal Access Token (fine-grained recommended)
- TOTP authenticator app (Google Authenticator, Authy, etc.)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
# GitHub Configuration (use fine-grained token)
GITHUB_TOKEN=github_pat_xxxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER=Amulyaaar
GITHUB_REPO=grey_gaint

# Generate OTP Secret (see below)
OTP_SECRET=YOUR_BASE32_SECRET

# Generate JWT Secret (see below)
JWT_SECRET=your_jwt_secret_here

# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. Generate Secrets

#### Generate OTP Secret

```bash
node -e "const s=require('speakeasy').generateSecret({name:'GreyGaint'}); console.log('OTP Secret:', s.base32); console.log('QR Code URL:', s.otpauth_url)"
```

**Important**: Scan the QR code URL with your authenticator app to set up OTP generation.

#### Generate JWT Secret

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Create GitHub Fine-Grained Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Click "Generate new token"
3. Set:
   - **Token name**: Grey Gaint Admin
   - **Expiration**: 90 days (or as needed)
   - **Repository access**: Only select repositories → Choose `grey_gaint`
   - **Repository permissions**: 
     - Contents: **Read and write**
4. Generate and copy the token (starts with `github_pat_`)

## Running the Server

### Development

```bash
npm run dev
```

Server will start on `http://localhost:3001`

### Production

```bash
NODE_ENV=production npm start
```

## API Endpoints

### Authentication

- `POST /admin/login` - Verify OTP and issue JWT
- `POST /admin/logout` - Clear HttpOnly cookie
- `GET /admin/verify` - Check authentication status

### GitHub Proxy (All require authentication)

- `POST /github/update-file` - Update file in repository
- `POST /github/upload-image` - Upload image to repository
- `POST /github/list-files` - List files in directory
- `POST /github/delete-file` - Delete file from repository
- `GET /github/repo-info` - Get repository information

### Health Check

- `GET /health` - Server health status

## Security Features

1. **HttpOnly Cookies** - JWT stored securely, inaccessible to JavaScript
2. **SameSite=Strict** - CSRF protection
3. **Rate Limiting** - Prevents brute-force attacks
4. **Helmet** - Security headers (XSS, clickjacking protection)
5. **CORS Restriction** - Only authorized origins
6. **Environment Validation** - Server won't start without required vars
7. **Fine-Grained Tokens** - Minimal GitHub permissions

## Troubleshooting

### Server won't start

Check that all required environment variables are set:
- `GITHUB_TOKEN`
- `GITHUB_OWNER`
- `GITHUB_REPO`
- `OTP_SECRET`
- `JWT_SECRET`

### OTP verification fails

- Ensure your system time is synchronized (TOTP is time-based)
- Check that OTP_SECRET matches your authenticator app
- OTP must be exactly 6 digits, numeric only

### GitHub API calls fail

- Verify GitHub token has correct permissions (Contents: Read & Write)
- Check token hasn't expired
- Ensure GITHUB_OWNER and GITHUB_REPO are correct

## License

MIT
