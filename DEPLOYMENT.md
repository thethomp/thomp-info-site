# VPS Deployment Setup

This document explains how to set up automatic deployment to your VPS using GitHub Actions.

## Overview

The GitHub Action workflow (`.github/workflows/deploy.yml`) automatically:
1. Builds the portfolio site on every push to `main`
2. Runs linting and tests
3. Deploys the built files to your VPS
4. Reloads the web server

## Prerequisites

### 1. VPS Requirements
- Linux-based VPS (Ubuntu/Debian/CentOS)
- Web server installed (Nginx or Apache)
- SSH access enabled
- `sudo` privileges for the deployment user

### 2. Web Server Setup

#### For Nginx:
```bash
# Install Nginx
sudo apt update
sudo apt install nginx

# Basic configuration
sudo nano /etc/nginx/sites-available/default

# Example configuration:
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json;
}

# Enable and start Nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### For Apache:
```bash
# Install Apache
sudo apt update
sudo apt install apache2

# Enable rewrite module for SPA routing
sudo a2enmod rewrite

# Configure document root to /var/www/html
# Enable and start Apache
sudo systemctl enable apache2
sudo systemctl start apache2
```

## GitHub Secrets Setup

You need to add these secrets in your GitHub repository:

### Required Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

1. **`VPS_HOST`**
   - Your VPS IP address or domain name
   - Example: `192.168.1.100` or `your-server.com`

2. **`VPS_USERNAME`**
   - SSH username for your VPS
   - Example: `ubuntu`, `root`, or `deploy`

3. **`VPS_SSH_KEY`**
   - Private SSH key for authentication
   - Generate with: `ssh-keygen -t rsa -b 4096 -C "github-deploy"`
   - Copy the **private key** content (entire file including headers)

4. **`VPS_PORT`** (optional)
   - SSH port number
   - Default: `22`
   - Only add if you use a custom SSH port

### SSH Key Setup

1. **Generate SSH key pair on your local machine:**
   ```bash
   ssh-keygen -t rsa -b 4096 -C "github-deploy"
   # Save as: ~/.ssh/github_deploy_key (or similar)
   ```

2. **Copy public key to your VPS:**
   ```bash
   # Copy public key content
   cat ~/.ssh/github_deploy_key.pub
   
   # On your VPS, add to authorized_keys
   ssh your-user@your-vps
   mkdir -p ~/.ssh
   echo "YOUR_PUBLIC_KEY_CONTENT" >> ~/.ssh/authorized_keys
   chmod 600 ~/.ssh/authorized_keys
   chmod 700 ~/.ssh
   ```

3. **Add private key to GitHub Secrets:**
   ```bash
   # Copy entire private key content including headers
   cat ~/.ssh/github_deploy_key
   ```
   Copy this content and paste it as the `VPS_SSH_KEY` secret.

## VPS User Permissions

The deployment user needs permissions to write to `/var/www/html` and reload the web server:

```bash
# Add user to www-data group
sudo usermod -a -G www-data your-username

# Set proper ownership
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 775 /var/www/html

# Allow user to reload web server without password
sudo visudo
# Add this line (replace 'your-username' with actual username):
your-username ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx, /bin/systemctl reload apache2, /bin/mkdir, /bin/chown, /bin/chmod, /bin/rm, /bin/tar, /bin/cp
```

## Testing the Deployment

1. **Manual Test:**
   ```bash
   # Test SSH connection
   ssh -i ~/.ssh/github_deploy_key your-user@your-vps
   
   # Test web server
   curl http://your-vps-ip
   ```

2. **Deploy Test:**
   - Make a small change to your portfolio
   - Push to the `main` branch
   - Check GitHub Actions tab for deployment status
   - Visit your website to confirm changes

## Workflow Features

- **Automatic Building:** Builds the site using `npm run build`
- **Quality Checks:** Runs ESLint before deployment
- **Backup Creation:** Creates timestamped backups before deployment
- **Atomic Deployment:** Only deploys on successful builds
- **Server Reload:** Automatically reloads web server after deployment
- **PR Builds:** Builds on pull requests but doesn't deploy

## Customization

### Custom Deployment Path
To deploy to a different directory, change `/var/www/html` in the workflow to your desired path.

### Different Web Server
Modify the server reload command in the workflow:
```yaml
# For different web servers:
sudo systemctl reload httpd    # For Apache on CentOS/RHEL
sudo service nginx reload      # Alternative syntax
```

### Environment Variables
Add build-time environment variables:
```yaml
- name: Build project
  run: npm run build
  env:
    VITE_API_URL: ${{ secrets.API_URL }}
    VITE_ANALYTICS_ID: ${{ secrets.ANALYTICS_ID }}
```

## Troubleshooting

### Common Issues

1. **Permission Denied:**
   - Check SSH key is correct
   - Verify user has sudo permissions
   - Ensure `/var/www/html` is writable

2. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are in `package.json`
   - Check for TypeScript or linting errors

3. **Deployment Fails:**
   - Check VPS disk space: `df -h`
   - Verify web server is running: `sudo systemctl status nginx`
   - Check server logs: `sudo tail -f /var/log/nginx/error.log`

### Debug Commands

```bash
# Check workflow logs in GitHub Actions tab
# SSH into VPS to check:
sudo systemctl status nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
ls -la /var/www/html/
```

## Security Considerations

- Use a dedicated deployment user (not root)
- Restrict SSH key to specific commands if possible
- Keep VPS software updated
- Consider using fail2ban for SSH protection
- Use HTTPS with Let's Encrypt: `sudo certbot --nginx`

## Next Steps

After successful deployment:
1. Set up SSL certificate with Let's Encrypt
2. Configure domain name and DNS
3. Set up monitoring/alerts
4. Consider adding staging environment
5. Set up database if needed for future features