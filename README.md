# Mike Thompson's Portfolio Site

A modern, responsive portfolio website showcasing Mike Thompson's professional experience as a Senior Staff Machine Learning Software Engineer. Built with React 19, Vite, and Tailwind CSS with automated VPS deployment.

## 🚀 Live Site

Visit the live portfolio: [Your Domain Here]

## 📋 Table of Contents

- [Features](#features)
- [Local Development](#local-development)
- [VPS Setup Guide](#vps-setup-guide)
- [GitHub Actions Deployment](#github-actions-deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🚀 Features

- **Modern Design**: Glass-morphism effects, gradient backgrounds, and smooth animations
- **Interactive Elements**: Mouse tracking, scroll-based animations, and hover effects
- **Responsive Layout**: Optimized for all device sizes
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Automated Deployment**: GitHub Actions workflow for seamless VPS deployment

## Local Development

### Prerequisites

- Node.js 20+ (required for GitHub Actions compatibility)
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/thomp-info-site.git
cd thomp-info-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
npm run dev      # Start development server (usually port 5173 or 5174)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

### Development Workflow

1. Always run `npm run build` after making changes to ensure no build errors
2. Run `npm run lint` to check code quality
3. If both pass, changes are ready for deployment

## VPS Setup Guide

### Complete Ubuntu 22.04 Server Setup

This guide will set up a fresh Ubuntu 22.04 VM to host this portfolio site with automated GitHub Actions deployment.

#### 1. Initial System Setup & Security

```bash
# Update the system
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y curl wget git unzip software-properties-common ufw fail2ban

# Configure firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw --force enable

# Configure fail2ban for SSH protection
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

#### 2. Create Deployment User

```bash
# Create a dedicated deployment user
sudo adduser deploy
sudo usermod -aG sudo deploy

# Add to www-data group for web server permissions
sudo usermod -aG www-data deploy

# Switch to deployment user
su - deploy
```

#### 3. Install and Configure Nginx

```bash
# Install Nginx
sudo apt update
sudo apt install -y nginx

# Create web directory
sudo mkdir -p /var/www/html

# Set proper ownership and permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 775 /var/www/html

# Enable and start Nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### 4. Configure Nginx for React SPA

```bash
# Backup default config
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup

# Create new configuration
sudo nano /etc/nginx/sites-available/default
```

**Nginx Configuration Content:**
```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/html;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
    
    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

```bash
# Test configuration and reload
sudo nginx -t
sudo systemctl reload nginx
```

#### 5. Install SSL Certificate with Certbot

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Set up automatic renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Test renewal
sudo certbot renew --dry-run
```

#### 6. Configure SSH Keys for GitHub Actions

```bash
# Generate SSH key pair (run on your local machine)
ssh-keygen -t rsa -b 4096 -C "github-deploy-$(date +%Y%m%d)"
# Save as: ~/.ssh/github_deploy_key

# Copy public key to server
ssh-copy-id -i ~/.ssh/github_deploy_key.pub deploy@your-server-ip

# Or manually on the server:
mkdir -p ~/.ssh
echo "YOUR_PUBLIC_KEY_CONTENT" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

#### 7. Configure Sudo Permissions for Deployment

```bash
# Allow deployment user to run necessary commands without password
sudo visudo

# Add this line at the end (replace 'deploy' with your username):
deploy ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx, /bin/systemctl reload apache2, /bin/mkdir, /bin/chown, /bin/chmod, /bin/rm, /bin/tar, /bin/cp
```

#### 8. Test Web Server

```bash
# Create a test page
echo "<h1>Server Setup Complete!</h1>" | sudo tee /var/www/html/index.html

# Test locally
curl http://localhost

# Test externally (replace with your server IP)
curl http://your-server-ip
```

## GitHub Actions Deployment

### Required GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Add these secrets:

1. **`VPS_HOST`**: Your VPS IP address or domain name
   ```
   Example: 192.168.1.100 or your-server.com
   ```

2. **`VPS_USERNAME`**: SSH username (e.g., `deploy`)

3. **`VPS_SSH_KEY`**: Private SSH key content
   ```bash
   # Get the private key content:
   cat ~/.ssh/github_deploy_key
   # Copy the ENTIRE output including headers
   ```

4. **`VPS_PORT`**: SSH port (optional, defaults to 22)

### Deployment Workflow

The GitHub Actions workflow automatically:

1. ✅ Builds the site on every push to `main`
2. ✅ Runs ESLint for code quality
3. ✅ Creates timestamped backups before deployment  
4. ✅ Deploys built files to `/var/www/html`
5. ✅ Sets proper file permissions
6. ✅ Reloads Nginx
7. ✅ Only runs on successful builds

### Manual Deployment Test

```bash
# Test SSH connection
ssh -i ~/.ssh/github_deploy_key deploy@your-server-ip

# Test deployment commands
sudo systemctl status nginx
ls -la /var/www/html/
```

## Project Structure

```
thomp-info-site/
├── .github/workflows/     # GitHub Actions deployment
├── src/
│   ├── App.jsx           # Main portfolio component
│   ├── components/       # React components
│   ├── assets/           # Static assets
│   └── index.css         # Global styles
├── public/               # Public assets (images, etc.)
├── dist/                 # Built files (generated)
├── CLAUDE.md            # Development guidelines
├── DEPLOYMENT.md        # Detailed deployment docs
└── package.json         # Dependencies and scripts
```

## Technologies Used

- **React 19** - UI framework with concurrent features
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting
- **GitHub Actions** - CI/CD pipeline
- **Nginx** - Web server
- **Ubuntu 22.04** - Server OS

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check Node.js version
node --version  # Should be 20+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for errors
npm run build
npm run lint
```

#### Deployment Issues
```bash
# Check SSH connection
ssh deploy@your-server-ip

# Check Nginx status
sudo systemctl status nginx

# Check logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Check permissions
ls -la /var/www/html/
sudo chown -R www-data:www-data /var/www/html
```

#### SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificates
sudo certbot renew

# Test configuration
sudo nginx -t
sudo systemctl reload nginx
```

### Server Monitoring

```bash
# Check server resources
htop
df -h
free -h

# Monitor deployment
tail -f /var/log/nginx/access.log

# Check service status
sudo systemctl status nginx
sudo systemctl status fail2ban
sudo systemctl status ufw
```

### Backup and Recovery

```bash
# Manual backup
sudo tar -czf /home/deploy/website-backup-$(date +%Y%m%d_%H%M%S).tar.gz -C /var/www/html .

# List backups created by deployment
ls -la /var/www/html.backup.*

# Restore from backup
sudo rm -rf /var/www/html/*
sudo tar -xzf /var/www/html.backup.YYYYMMDD_HHMMSS -C /var/www/html/
sudo chown -R www-data:www-data /var/www/html
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests: `npm run build && npm run lint`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Mike Thompson - [Your Contact Information]

Project Link: [https://github.com/your-username/thomp-info-site](https://github.com/your-username/thomp-info-site)
