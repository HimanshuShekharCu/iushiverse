# Guide: Uploading Files to GitHub via Web Interface

## Step-by-Step Instructions

### 1. Create or Access Your Repository

- Go to https://github.com/HimanshuShekharCu/iushiverse
- If the repository doesn't exist, click "New repository" and create it with the name `iushiverse`

### 2. Upload Files via Web Interface

#### Option A: Upload Individual Files

1. Click the **"Add file"** button (top right)
2. Select **"Upload files"**
3. Drag and drop files or click to browse
4. Add a commit message (e.g., "Initial commit")
5. Click **"Commit changes"**

#### Option B: Upload Multiple Files/Folders

1. Click **"Add file"** → **"Upload files"**
2. Drag entire folders or multiple files at once
3. GitHub will preserve folder structure
4. Add commit message and commit

### 3. Files to Upload

**Upload these files/folders:**

- ✅ `components/` (entire folder)
- ✅ `hooks/` (entire folder)
- ✅ `mock/` (entire folder)
- ✅ `pages/` (entire folder)
- ✅ `public/` (entire folder)
- ✅ `styles/` (entire folder)
- ✅ `.gitignore`
- ✅ `EMAILJS_SETUP.md`
- ✅ `next.config.js`
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `postcss.config.js`
- ✅ `README.md`
- ✅ `tailwind.config.js`
- ✅ `tsconfig.json`

**DO NOT upload:**

- ❌ `node_modules/` (already in .gitignore)
- ❌ `.next/` (already in .gitignore)
- ❌ `.env*` files (if any exist)
- ❌ `.DS_Store` files

### 4. Important Notes

⚠️ **Security Warning:** Your code contains sensitive keys:

- Firebase API keys in `hooks/useFirebase.ts`
- Web3Forms access key in `hooks/useEmail.ts`

**Recommendation:** After uploading, consider:

1. Moving these to environment variables (`.env.local`)
2. Adding `.env.local` to `.gitignore` (already done)
3. Using GitHub Secrets for CI/CD if needed

### 5. Quick Upload Tips

- **Large files:** GitHub has a 100MB file size limit
- **Many files:** You can upload up to 100 files at once via web interface
- **Folders:** Drag entire folders to maintain structure
- **Progress:** Watch the upload progress bar

### 6. After Upload

Once uploaded, you can:

- View files in the repository
- Clone the repository using git
- Share the repository URL
- Set up GitHub Pages for hosting

## Alternative: Using GitHub Desktop

If you prefer a GUI application:

1. Download GitHub Desktop: https://desktop.github.com/
2. Clone or add your repository
3. Drag files into the app
4. Commit and push

---

**Repository URL:** https://github.com/HimanshuShekharCu/iushiverse
