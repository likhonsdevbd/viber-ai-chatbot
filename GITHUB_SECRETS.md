# GitHub Secrets Configuration Guide

This document explains how to configure GitHub Secrets for the CI/CD pipeline to run successfully.

## Required Secrets

The following secrets need to be configured in your GitHub repository for the Playwright tests to run correctly in the CI/CD pipeline.

### Firebase Configuration Secrets

Navigate to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Add the following secrets:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key | `AIzaSyCEu3gEvhw1iiGnTxh8GXJOS6PP2wQ2Irc` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | `viber-40f2a.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID | `viber-40f2a` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | `viber-40f2a.firebasestorage.app` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | `1049585237173` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID | `1:1049585237173:web:2628eecc8a9c7810fa52fc` |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Measurement ID | `G-N7YME4Z8KX` |

### MiniMax AI Configuration Secrets

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `MINIMAX_API_KEY` | MiniMax API Key (JWT token) | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `MODEL_NAME` | MiniMax Model Name | `minimax-m2` |
| `USE_MINIMAX` | Enable MiniMax Integration | `true` |

## How to Add Secrets

### Step-by-Step Guide

1. **Navigate to your repository on GitHub**
   
2. **Go to Settings**
   - Click on the "Settings" tab in your repository

3. **Access Secrets**
   - In the left sidebar, click on "Secrets and variables"
   - Select "Actions"

4. **Add New Secret**
   - Click on "New repository secret" button
   - Enter the secret name (exactly as shown in the tables above)
   - Paste the secret value
   - Click "Add secret"

5. **Repeat for all secrets**
   - Add all 10 secrets listed above

## Verification

After adding all secrets:

1. The CI/CD pipeline will automatically use these secrets during test runs
2. Push a commit or create a pull request to trigger the workflow
3. Check the Actions tab to see if the tests run successfully
4. If tests fail due to missing secrets, you'll see an error message indicating which secret is missing

## Security Notes

- ✅ Never commit secrets to your repository
- ✅ GitHub Secrets are encrypted and only exposed to workflows
- ✅ Secrets are not visible in logs or artifacts
- ✅ Update secrets immediately if they are compromised
- ✅ Use different secrets for production and development environments

## Local Development

For local development, create a `.env.local` file in the project root:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# MiniMax AI Configuration
MINIMAX_API_KEY=your_minimax_api_key_here
MODEL_NAME=minimax-m2
USE_MINIMAX=true
```

**Important:** The `.env.local` file is gitignored and will not be committed to the repository.

## Vercel Deployment

For Vercel deployment, add the same environment variables in:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add all the variables listed above
4. Deploy or redeploy your application

## Troubleshooting

### Tests Fail with "Environment Variable Not Set"

- Check that all secrets are added in GitHub repository settings
- Verify the secret names match exactly (case-sensitive)
- Ensure there are no extra spaces in secret values

### Firebase Authentication Errors in CI

- Verify Firebase API key is valid
- Check Firebase project settings for correct configuration
- Ensure Firebase project allows authentication methods you're testing

### MiniMax AI Not Responding in Tests

- Verify MiniMax API key is valid and not expired
- Check that `USE_MINIMAX` is set to `true`
- Ensure `MODEL_NAME` is correct

## Additional Resources

- [GitHub Actions - Using secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [Firebase - Web Setup](https://firebase.google.com/docs/web/setup)
- [Vercel - Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Last Updated:** 2025-11-06
