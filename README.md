# Automated Deployment Pipeline to AWS EC2 using GitHub Actions

A simple Node.js Express app demonstrating a CI/CD pipeline that automates deployment to an AWS EC2 instance using **GitHub Actions** and **PM2**.

---

## 🚀 Project Overview

This project showcases:
- Automated code deployment to EC2 whenever there is a **push to main branch** or a **manual trigger (workflow_dispatch)**.
- Use of **GitHub Secrets** to manage sensitive data (EC2 SSH Key, Host, PORT).
- Process management using **PM2**.
- Environment variable handling with `.env`.

---

## ⚙️ Tech Stack

- Node.js (Express)
- GitHub Actions (CI/CD)
- AWS EC2
- PM2 (Process Manager)
- EJS (Template Engine)

---

## ⚡ How It Works

1. Code pushed to the `main` branch triggers the workflow.
2. GitHub Actions installs dependencies, lints, and runs tests.
3. The SSH key and EC2 Host IP are taken from GitHub Secrets.
4. Code is deployed via `git pull` into the EC2 instance.
5. The app is run or restarted using PM2.
6. The app serves a simple webpage showing a dynamic message.

---

## 📝 Prerequisites

- GitHub Secrets configured:
    - `EC2_KEY`: Private SSH key for EC2 access.
    - `EC2_HOST`: EC2 public IP.
    - Other necessary secrets (e.g., `PORT`, API keys if applicable).

- EC2 Instance set up with Node.js, Git, and PM2 installed.

---

## 🎯 Outcome

On successful deployment, the application can be accessed at:
