# Start of React JS from free code camp Hitesh

## Git Branching Guide

### Creating & Switching Branches

1. **Create a new branch (doesn't switch)**
   ```
   git branch BranchName
   ```

2. **Switch to a branch**
   ```
   git checkout BranchName
   ```

3. **Create and switch in one command** (recommended)
   ```
   git checkout -b BranchName
   ```

4. **List all branches**
   ```
   git branch
   ```
   - Current branch marked with `*`

### Working with Branches

5. **Make changes and commit**
   ```
   git add .
   git commit -m "Your message"
   ```

6. **First push to new branch** (sets upstream)
   ```
   git push -u origin BranchName
   ```
   - `-u` flag links local branch to remote

7. **Subsequent pushes on same branch**
   ```
   git push
   ```
   - Works because upstream is already set

### Important Points

- **First push:** Always use `git push -u origin BranchName`
- **After first push:** Use `git push` 
- **node_modules:** Automatically ignored by .gitignore
- **Line endings:** LF/CRLF warnings are normal on Windows

---

## React Setup Notes

<!-- npm create vite@latest -->

1. In Basic React application in package.json file scripts => 