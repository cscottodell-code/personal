import type { Module } from '~/types'

export const terminalModule: Module = {
  id: 1,
  title: "Terminal Foundations",
  description: "Navigation, file management, and essential commands",
  estimatedTime: "2-3 hours",

  sections: [
    {
      id: "1-1",
      title: "1.1 What is Terminal?",
      content: `
        <h3>The Command Line Interface</h3>
        <p>Terminal is a text-based interface for interacting with your computer. Instead of clicking icons and menus, you type commands. Think of it as having a direct conversation with your computer.</p>

        <p><strong>Why learn Terminal?</strong> As someone who excels at spreadsheets, you already understand the power of formulas and automation. Terminal takes that to the next level - it's like having access to thousands of formulas that can control your entire computer.</p>

        <h3>Spreadsheet Analogy</h3>
        <p>Think of it this way:</p>
        <ul>
          <li><strong>GUI (clicking)</strong> = Manually typing values into cells one at a time</li>
          <li><strong>Terminal (commands)</strong> = Writing formulas that process thousands of cells instantly</li>
        </ul>

        <p>Every action you take by clicking - opening folders, copying files, renaming things - can be done in Terminal, often faster and with the ability to repeat it automatically.</p>

        <h3>Terminal vs. Command Prompt</h3>
        <p>On Mac, the default command line is called <strong>Terminal</strong>. It uses a shell called <strong>zsh</strong> (Z shell). Windows has "Command Prompt" and "PowerShell" - they work differently, but the concepts are similar.</p>

        <p>Since you're on a Mac, we'll focus exclusively on Terminal and zsh throughout this course.</p>
      `
    },
    {
      id: "1-2",
      title: "1.2 Opening Terminal",
      content: `
        <h3>Three Ways to Open Terminal</h3>
        <p>You have several options:</p>

        <p><strong>Method 1: Spotlight Search (Fastest)</strong></p>
        <ul>
          <li>Press <code>Command + Spacebar</code></li>
          <li>Type "Terminal"</li>
          <li>Press <code>Enter</code></li>
        </ul>

        <p><strong>Method 2: Applications Folder</strong></p>
        <ul>
          <li>Open <strong>Finder</strong></li>
          <li>Go to <strong>Applications → Utilities</strong></li>
          <li>Double-click <strong>Terminal</strong></li>
        </ul>

        <p><strong>Method 3: Launchpad</strong></p>
        <ul>
          <li>Open Launchpad (pinch with four fingers on trackpad)</li>
          <li>Type "Terminal" in the search</li>
          <li>Click the Terminal icon</li>
        </ul>

        <h3>What You'll See</h3>
        <p>When Terminal opens, you'll see something like:</p>
        <div class="code-block"><code>scott@Scotts-MacBook ~ %</code></div>

        <p>This is called the <strong>prompt</strong>. It tells you:</p>
        <ul>
          <li><code>scott</code> - Your username</li>
          <li><code>@Scotts-MacBook</code> - Your computer's name</li>
          <li><code>~</code> - Your current location (~ means home folder)</li>
          <li><code>%</code> - Ready for your command (zsh uses %, bash uses $)</li>
        </ul>

        <h3>Pro Tip: Keep Terminal in Your Dock</h3>
        <p>Right-click the Terminal icon in your Dock while it's open and select "Options → Keep in Dock". You'll use it frequently!</p>
      `
    },
    {
      id: "1-3",
      title: "1.3 Understanding Command Structure",
      content: `
        <h3>Anatomy of a Command</h3>
        <p>Every Terminal command follows this pattern:</p>
        <div class="code-block"><code>command [options] [arguments]</code></div>

        <p>Let's break this down with an example:</p>
        <div class="code-block"><code>ls -la Documents</code></div>

        <ul>
          <li><code>ls</code> = The command (list files)</li>
          <li><code>-la</code> = Options (flags that modify behavior)</li>
          <li><code>Documents</code> = Argument (what to run the command on)</li>
        </ul>

        <h3>Spreadsheet Analogy</h3>
        <p>Think of commands like Excel functions:</p>
        <table class="command-table">
          <thead>
            <tr><th>Excel</th><th>Terminal</th></tr>
          </thead>
          <tbody>
            <tr><td>=SUM(A1:A10)</td><td>command argument</td></tr>
            <tr><td>=VLOOKUP(A1,B:C,2,FALSE)</td><td>command -options argument1 argument2</td></tr>
          </tbody>
        </table>

        <h3>Options (Flags)</h3>
        <p>Options modify how a command works. They usually start with:</p>
        <ul>
          <li><code>-</code> (single dash) for single-letter options: <code>-l</code>, <code>-a</code></li>
          <li><code>--</code> (double dash) for word options: <code>--all</code>, <code>--help</code></li>
        </ul>

        <p>Single-letter options can be combined: <code>-la</code> is the same as <code>-l -a</code></p>

        <h3>Case Sensitivity</h3>
        <p><strong>Important:</strong> Terminal is case-sensitive!</p>
        <ul>
          <li><code>Documents</code> and <code>documents</code> are different folders</li>
          <li><code>-a</code> and <code>-A</code> are different options</li>
        </ul>
      `
    },
    {
      id: "1-4",
      title: "1.4 Navigating with pwd and ls",
      content: `
        <h3>pwd - Print Working Directory</h3>
        <p>Your first command! Type <code>pwd</code> and press Enter:</p>
        <div class="code-block"><code>pwd</code></div>

        <p>This shows your current location, like:</p>
        <div class="code-block"><code>/Users/scott</code></div>

        <p>The output is a <strong>path</strong> - a series of folders separated by <code>/</code>. Reading left to right:</p>
        <ul>
          <li><code>/</code> - Root (the very top of your file system)</li>
          <li><code>Users</code> - A folder containing all user accounts</li>
          <li><code>scott</code> - Your home folder</li>
        </ul>

        <h3>ls - List Contents</h3>
        <p>The <code>ls</code> command shows what's in the current folder:</p>
        <div class="code-block"><code>ls</code></div>

        <p>Output might look like:</p>
        <div class="code-block"><code>Desktop    Documents  Downloads  Movies  Music  Pictures</code></div>

        <h3>ls Options</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Shows</th></tr>
          </thead>
          <tbody>
            <tr><td>ls</td><td>Basic list of files and folders</td></tr>
            <tr><td>ls -l</td><td>Long format with details (permissions, size, date)</td></tr>
            <tr><td>ls -a</td><td>All files, including hidden ones (starting with .)</td></tr>
            <tr><td>ls -la</td><td>All files with details (most useful!)</td></tr>
            <tr><td>ls -lh</td><td>Details with human-readable sizes (KB, MB, GB)</td></tr>
          </tbody>
        </table>

        <h3>Reading ls -la Output</h3>
        <div class="code-block"><code>drwxr-xr-x  5 scott staff  160 Dec 13 10:00 Documents</code></div>
        <ul>
          <li><code>d</code> = Directory (folder). Files show <code>-</code></li>
          <li><code>rwxr-xr-x</code> = Permissions (who can read/write/execute)</li>
          <li><code>5</code> = Number of links</li>
          <li><code>scott</code> = Owner</li>
          <li><code>staff</code> = Group</li>
          <li><code>160</code> = Size in bytes</li>
          <li><code>Dec 13 10:00</code> = Last modified</li>
          <li><code>Documents</code> = Name</li>
        </ul>
      `
    },
    {
      id: "1-5",
      title: "1.5 Changing Directories (cd)",
      content: `
        <h3>cd - Change Directory</h3>
        <p>The <code>cd</code> command moves you between folders. It's how you navigate your file system.</p>

        <h3>Basic Usage</h3>
        <div class="code-block"><code>cd Documents</code></div>
        <p>This moves you into the Documents folder (if it exists in your current location).</p>

        <h3>Essential cd Commands</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>cd Documents</td><td>Go into Documents folder</td></tr>
            <tr><td>cd ..</td><td>Go up one level (parent folder)</td></tr>
            <tr><td>cd ~</td><td>Go to home folder (shortcut)</td></tr>
            <tr><td>cd /</td><td>Go to root (top of file system)</td></tr>
            <tr><td>cd -</td><td>Go to previous location</td></tr>
            <tr><td>cd ~/Desktop</td><td>Go to Desktop (from anywhere)</td></tr>
          </tbody>
        </table>

        <h3>Understanding Paths</h3>
        <p><strong>Relative paths</strong> start from where you are:</p>
        <div class="code-block"><code>cd Documents          # Go into Documents in current folder
cd ../Downloads       # Go up, then into Downloads</code></div>

        <p><strong>Absolute paths</strong> start from root (/):</p>
        <div class="code-block"><code>cd /Users/scott/Documents    # Full path from root</code></div>

        <h3>Spaces in Folder Names</h3>
        <p>Folders with spaces need special handling:</p>
        <div class="code-block"><code># These all work:
cd "My Folder"          # Quotes
cd My\\ Folder           # Backslash escape
cd My' 'Folder          # Single quotes around space</code></div>

        <h3>Pro Tip: Tab Completion</h3>
        <p>Type part of a folder name and press <code>Tab</code> to auto-complete!</p>
        <div class="code-block"><code>cd Doc[Tab]    # Completes to: cd Documents</code></div>
        <p>If multiple matches exist, press Tab twice to see options.</p>
      `
    },
    {
      id: "1-6",
      title: "1.6 Creating Files and Folders",
      content: `
        <h3>mkdir - Make Directory</h3>
        <p>Creates a new folder:</p>
        <div class="code-block"><code>mkdir Projects</code></div>

        <p>Create nested folders with <code>-p</code>:</p>
        <div class="code-block"><code>mkdir -p Projects/web/my-app</code></div>
        <p>This creates all three folders at once, even if Projects doesn't exist yet.</p>

        <h3>touch - Create Empty File</h3>
        <p>Creates a new empty file:</p>
        <div class="code-block"><code>touch notes.txt</code></div>

        <p>Create multiple files at once:</p>
        <div class="code-block"><code>touch file1.txt file2.txt file3.txt</code></div>

        <h3>Practical Example</h3>
        <p>Setting up a project folder:</p>
        <div class="code-block"><code># Create project structure
mkdir -p my-project/src
mkdir -p my-project/docs
cd my-project
touch README.md
touch src/index.js

# Verify with ls
ls -la</code></div>

        <h3>touch's Other Use</h3>
        <p>If a file already exists, <code>touch</code> updates its "last modified" timestamp without changing the content. This is sometimes useful for triggering file watchers.</p>

        <h3>Naming Best Practices</h3>
        <ul>
          <li>Avoid spaces - use hyphens or underscores: <code>my-project</code>, <code>my_project</code></li>
          <li>Use lowercase for consistency</li>
          <li>Be descriptive: <code>sales-report-2024.csv</code> not <code>sr24.csv</code></li>
          <li>Include file extensions: <code>.txt</code>, <code>.md</code>, <code>.js</code></li>
        </ul>
      `
    },
    {
      id: "1-7",
      title: "1.7 Copying and Moving Files",
      content: `
        <h3>cp - Copy Files</h3>
        <p>Copies a file from one place to another:</p>
        <div class="code-block"><code>cp source.txt destination.txt</code></div>

        <h3>cp Examples</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>cp file.txt backup.txt</td><td>Copy to same folder with new name</td></tr>
            <tr><td>cp file.txt ~/Desktop/</td><td>Copy to Desktop, keep same name</td></tr>
            <tr><td>cp file.txt ~/Desktop/new.txt</td><td>Copy to Desktop with new name</td></tr>
            <tr><td>cp -r folder/ backup/</td><td>Copy entire folder (recursive)</td></tr>
          </tbody>
        </table>

        <h3>mv - Move or Rename</h3>
        <p>Moves a file, or renames it if staying in the same folder:</p>
        <div class="code-block"><code>mv old-name.txt new-name.txt    # Rename
mv file.txt ~/Documents/        # Move to Documents</code></div>

        <h3>mv Examples</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>mv old.txt new.txt</td><td>Rename file</td></tr>
            <tr><td>mv file.txt ../</td><td>Move up one folder</td></tr>
            <tr><td>mv *.txt Documents/</td><td>Move all .txt files to Documents</td></tr>
            <tr><td>mv folder/ new-folder/</td><td>Rename folder</td></tr>
          </tbody>
        </table>

        <h3>Important: mv Overwrites!</h3>
        <p><strong>Warning:</strong> If the destination file exists, <code>mv</code> will overwrite it without asking!</p>
        <p>Use <code>mv -i</code> for interactive mode (asks before overwriting):</p>
        <div class="code-block"><code>mv -i important.txt backup.txt</code></div>

        <h3>Wildcards</h3>
        <p>Use <code>*</code> to match multiple files:</p>
        <div class="code-block"><code>cp *.txt backup/           # Copy all .txt files
mv report-*.csv archive/   # Move all report CSV files</code></div>
      `
    },
    {
      id: "1-8",
      title: "1.8 Deleting Files Safely",
      content: `
        <h3>rm - Remove Files</h3>
        <p><strong>⚠️ WARNING:</strong> <code>rm</code> permanently deletes files. There is no Trash, no undo, no recovery (without special tools).</p>

        <div class="code-block"><code>rm file.txt              # Delete a file
rm file1.txt file2.txt   # Delete multiple files</code></div>

        <h3>rm Options</h3>
        <table class="command-table">
          <thead>
            <tr><th>Option</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>rm -i file.txt</td><td>Interactive - asks for confirmation</td></tr>
            <tr><td>rm -r folder/</td><td>Recursive - delete folder and all contents</td></tr>
            <tr><td>rm -f file.txt</td><td>Force - no warnings (DANGEROUS)</td></tr>
            <tr><td>rm -rf folder/</td><td>Force recursive (VERY DANGEROUS)</td></tr>
          </tbody>
        </table>

        <h3>Safe Deletion Practices</h3>
        <p>1. <strong>Always double-check your path first:</strong></p>
        <div class="code-block"><code>pwd                    # Where am I?
ls                     # What's here?
rm -i suspicious.txt   # Delete with confirmation</code></div>

        <p>2. <strong>Use the Trash instead when possible:</strong></p>
        <div class="code-block"><code># Move to Trash instead of permanent delete
mv file.txt ~/.Trash/</code></div>

        <p>3. <strong>Never use rm -rf without careful thought:</strong></p>
        <div class="code-block"><code># This will delete EVERYTHING in the folder, instantly
# NO confirmation, NO recovery
rm -rf folder/

# NEVER run this (would delete your entire system):
# rm -rf /</code></div>

        <h3>rmdir - Remove Empty Directories</h3>
        <p>Safer option for folders - only works if the folder is empty:</p>
        <div class="code-block"><code>rmdir empty-folder/    # Only works if empty</code></div>

        <h3>Pro Tip: Create an Alias</h3>
        <p>You can make <code>rm</code> always ask for confirmation by adding to your ~/.zshrc:</p>
        <div class="code-block"><code>alias rm='rm -i'</code></div>
      `
    },
    {
      id: "1-9",
      title: "1.9 Viewing File Contents",
      content: `
        <h3>cat - Display Entire File</h3>
        <p>Shows the complete contents of a file:</p>
        <div class="code-block"><code>cat filename.txt</code></div>

        <p>Combine multiple files:</p>
        <div class="code-block"><code>cat file1.txt file2.txt</code></div>

        <h3>less - Page Through Files</h3>
        <p>Better for large files - lets you scroll:</p>
        <div class="code-block"><code>less long-file.txt</code></div>

        <p><strong>less Navigation:</strong></p>
        <ul>
          <li><code>Space</code> or <code>f</code> - Page down</li>
          <li><code>b</code> - Page up</li>
          <li><code>↑/↓</code> - Line by line</li>
          <li><code>/search</code> - Search for "search"</li>
          <li><code>n</code> - Next search result</li>
          <li><code>q</code> - Quit</li>
        </ul>

        <h3>head and tail - Beginning and End</h3>
        <div class="code-block"><code>head filename.txt      # First 10 lines
head -20 filename.txt  # First 20 lines
tail filename.txt      # Last 10 lines
tail -50 filename.txt  # Last 50 lines</code></div>

        <h3>tail -f - Watch Live Updates</h3>
        <p>Extremely useful for watching log files in real-time:</p>
        <div class="code-block"><code>tail -f /var/log/system.log</code></div>
        <p>Press <code>Ctrl+C</code> to stop watching.</p>

        <h3>Spreadsheet Analogy</h3>
        <ul>
          <li><code>cat</code> = Viewing the whole spreadsheet at once</li>
          <li><code>less</code> = Scrolling through the spreadsheet</li>
          <li><code>head</code> = Looking at just the first few rows</li>
          <li><code>tail</code> = Looking at just the last few rows</li>
          <li><code>tail -f</code> = Watching as new rows get added in real-time</li>
        </ul>

        <h3>wc - Word Count</h3>
        <p>Count lines, words, and characters:</p>
        <div class="code-block"><code>wc filename.txt         # Lines, words, characters
wc -l filename.txt      # Just line count</code></div>
      `
    },
    {
      id: "1-10",
      title: "1.10 Finding Files",
      content: `
        <h3>find - Search by Name</h3>
        <p>Locate files anywhere in your file system:</p>
        <div class="code-block"><code>find . -name "report.txt"</code></div>

        <p>The <code>.</code> means "start searching from current directory".</p>

        <h3>find Examples</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Finds</th></tr>
          </thead>
          <tbody>
            <tr><td>find . -name "*.txt"</td><td>All .txt files in current folder and subfolders</td></tr>
            <tr><td>find ~/Documents -name "*.pdf"</td><td>All PDFs in Documents</td></tr>
            <tr><td>find . -name "*.js" -type f</td><td>Only files (not folders) ending in .js</td></tr>
            <tr><td>find . -type d -name "node_*"</td><td>Folders starting with "node_"</td></tr>
            <tr><td>find . -mtime -7</td><td>Files modified in last 7 days</td></tr>
            <tr><td>find . -size +10M</td><td>Files larger than 10 megabytes</td></tr>
          </tbody>
        </table>

        <h3>Case-Insensitive Search</h3>
        <div class="code-block"><code>find . -iname "readme*"   # Finds README, readme, ReadMe, etc.</code></div>

        <h3>grep - Search Inside Files</h3>
        <p>Find text within files:</p>
        <div class="code-block"><code>grep "search term" filename.txt</code></div>

        <h3>grep Examples</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>grep "error" log.txt</td><td>Find "error" in log.txt</td></tr>
            <tr><td>grep -i "error" log.txt</td><td>Case-insensitive search</td></tr>
            <tr><td>grep -r "TODO" .</td><td>Search recursively in all files</td></tr>
            <tr><td>grep -n "function" *.js</td><td>Show line numbers</td></tr>
            <tr><td>grep -c "test" file.txt</td><td>Count matches</td></tr>
          </tbody>
        </table>

        <h3>Combining find and grep</h3>
        <div class="code-block"><code># Find all JS files containing "useState"
find . -name "*.js" -exec grep -l "useState" {} \\;</code></div>
      `
    },
    {
      id: "1-11",
      title: "1.11 Keyboard Shortcuts",
      content: `
        <h3>Essential Keyboard Shortcuts</h3>
        <p>These will dramatically speed up your Terminal use:</p>

        <h3>Navigation</h3>
        <table class="command-table">
          <thead>
            <tr><th>Shortcut</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td>Tab</td><td>Auto-complete file/folder names</td></tr>
            <tr><td>↑ / ↓</td><td>Cycle through command history</td></tr>
            <tr><td>Ctrl + A</td><td>Move cursor to beginning of line</td></tr>
            <tr><td>Ctrl + E</td><td>Move cursor to end of line</td></tr>
            <tr><td>Option + ← / →</td><td>Move cursor word by word</td></tr>
          </tbody>
        </table>

        <h3>Editing</h3>
        <table class="command-table">
          <thead>
            <tr><th>Shortcut</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td>Ctrl + U</td><td>Delete from cursor to beginning</td></tr>
            <tr><td>Ctrl + K</td><td>Delete from cursor to end</td></tr>
            <tr><td>Ctrl + W</td><td>Delete previous word</td></tr>
            <tr><td>Ctrl + Y</td><td>Paste deleted text</td></tr>
          </tbody>
        </table>

        <h3>Control</h3>
        <table class="command-table">
          <thead>
            <tr><th>Shortcut</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td>Ctrl + C</td><td>Cancel current command / stop running process</td></tr>
            <tr><td>Ctrl + Z</td><td>Suspend current process (resume with <code>fg</code>)</td></tr>
            <tr><td>Ctrl + D</td><td>Exit Terminal / end input</td></tr>
            <tr><td>Ctrl + L</td><td>Clear screen (same as <code>clear</code>)</td></tr>
            <tr><td>Ctrl + R</td><td>Search command history</td></tr>
          </tbody>
        </table>

        <h3>Using Ctrl + R (History Search)</h3>
        <p>This is incredibly powerful:</p>
        <ol>
          <li>Press <code>Ctrl + R</code></li>
          <li>Start typing part of a previous command</li>
          <li>Press <code>Ctrl + R</code> again to see older matches</li>
          <li>Press <code>Enter</code> to run, or <code>→</code> to edit first</li>
        </ol>

        <h3>Tab Completion Deep Dive</h3>
        <p>Tab completion works for:</p>
        <ul>
          <li>File and folder names</li>
          <li>Command names</li>
          <li>Git branches</li>
          <li>And much more (depends on your setup)</li>
        </ul>

        <p>Double-tap Tab to see all possibilities when there are multiple matches.</p>
      `
    },
    {
      id: "1-12",
      title: "1.12 Environment Variables and PATH",
      content: `
        <h3>What Are Environment Variables?</h3>
        <p>Environment variables are settings that affect how your Terminal and programs behave. Think of them as global settings available to any program.</p>

        <h3>Viewing Environment Variables</h3>
        <div class="code-block"><code>echo $HOME        # Your home directory
echo $USER        # Your username
echo $PATH        # Where Terminal looks for commands
env               # List all environment variables</code></div>

        <h3>The PATH Variable</h3>
        <p>When you type a command like <code>ls</code>, Terminal needs to find the actual program. <code>PATH</code> tells it where to look.</p>

        <div class="code-block"><code>echo $PATH</code></div>

        <p>Output might look like:</p>
        <div class="code-block"><code>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</code></div>

        <p>These are folders separated by <code>:</code>. Terminal searches them in order.</p>

        <h3>which - Find Command Location</h3>
        <div class="code-block"><code>which ls        # Shows: /bin/ls
which node      # Shows where node is installed
which code      # Shows where VS Code command is</code></div>

        <h3>Setting Environment Variables</h3>
        <p><strong>Temporary (current session only):</strong></p>
        <div class="code-block"><code>export MY_VAR="hello"
echo $MY_VAR</code></div>

        <p><strong>Permanent (add to ~/.zshrc):</strong></p>
        <div class="code-block"><code>export API_KEY="your-api-key"
export PATH="$PATH:/new/folder"</code></div>

        <h3>The .zshrc File</h3>
        <p>This file runs every time you open Terminal. It's where you put:</p>
        <ul>
          <li>Environment variables</li>
          <li>Aliases (command shortcuts)</li>
          <li>Custom functions</li>
          <li>PATH modifications</li>
        </ul>

        <div class="code-block"><code># View your .zshrc
cat ~/.zshrc

# Edit with VS Code (if installed)
code ~/.zshrc</code></div>

        <p>After editing, reload with:</p>
        <div class="code-block"><code>source ~/.zshrc</code></div>
      `
    },
    {
      id: "1-13",
      title: "1.13 Useful Commands",
      content: `
        <h3>System Information</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>whoami</td><td>Display current username</td></tr>
            <tr><td>date</td><td>Show current date and time</td></tr>
            <tr><td>cal</td><td>Display calendar</td></tr>
            <tr><td>uptime</td><td>How long computer has been running</td></tr>
            <tr><td>df -h</td><td>Disk space usage</td></tr>
            <tr><td>du -sh folder/</td><td>Size of a folder</td></tr>
          </tbody>
        </table>

        <h3>Process Management</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>ps</td><td>List running processes</td></tr>
            <tr><td>ps aux</td><td>Detailed process list</td></tr>
            <tr><td>top</td><td>Live process monitor (q to quit)</td></tr>
            <tr><td>kill PID</td><td>Stop a process by ID</td></tr>
            <tr><td>killall name</td><td>Stop all processes with name</td></tr>
          </tbody>
        </table>

        <h3>Network Commands</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>ping google.com</td><td>Test network connection</td></tr>
            <tr><td>curl url</td><td>Download a URL's content</td></tr>
            <tr><td>ifconfig</td><td>Network interface info</td></tr>
          </tbody>
        </table>

        <h3>Text Manipulation</h3>
        <table class="command-table">
          <thead>
            <tr><th>Command</th><th>What It Does</th></tr>
          </thead>
          <tbody>
            <tr><td>echo "text"</td><td>Print text to screen</td></tr>
            <tr><td>sort file.txt</td><td>Sort lines alphabetically</td></tr>
            <tr><td>uniq file.txt</td><td>Remove duplicate lines</td></tr>
            <tr><td>wc -l file.txt</td><td>Count lines</td></tr>
          </tbody>
        </table>

        <h3>Getting Help</h3>
        <div class="code-block"><code>man ls           # Manual for ls (q to quit)
ls --help        # Quick help for ls
tldr ls          # Simplified examples (if installed)</code></div>
      `
    },
    {
      id: "1-14",
      title: "1.14 Pipes and Redirection",
      content: `
        <h3>The Pipe Operator |</h3>
        <p>Pipes send the output of one command as input to another. This is like chaining Excel functions together.</p>

        <div class="code-block"><code>ls -la | less</code></div>
        <p>Lists files, then lets you scroll through the output.</p>

        <h3>Common Pipe Examples</h3>
        <div class="code-block"><code># Find lines containing "error" and count them
cat log.txt | grep "error" | wc -l

# List files sorted by size
ls -lS | head -10

# Find unique words
cat file.txt | sort | uniq</code></div>

        <h3>Output Redirection ></h3>
        <p>Save output to a file instead of displaying it:</p>
        <div class="code-block"><code>ls -la > file-list.txt      # Create/overwrite file
ls -la >> file-list.txt     # Append to file</code></div>

        <h3>Input Redirection <</h3>
        <p>Use a file as input to a command:</p>
        <div class="code-block"><code>sort < unsorted.txt > sorted.txt</code></div>

        <h3>Practical Examples</h3>
        <div class="code-block"><code># Save all JS files to a list
find . -name "*.js" > js-files.txt

# Count lines in all Python files
find . -name "*.py" -exec wc -l {} \\; | sort -n

# Filter and save log errors
grep "ERROR" app.log > errors.txt

# Create a dated backup list
ls -la > "backup-$(date +%Y%m%d).txt"</code></div>

        <h3>Spreadsheet Analogy</h3>
        <p>Pipes are like chaining functions in Excel:</p>
        <ul>
          <li><code>=SORT(UNIQUE(A:A))</code> → <code>cat file | sort | uniq</code></li>
          <li><code>=COUNTIF(A:A,"*error*")</code> → <code>grep "error" file | wc -l</code></li>
        </ul>
      `
    },
    {
      id: "1-15",
      title: "1.15 Common Mistakes and Troubleshooting",
      content: `
        <h3>Mistake 1: Spaces in Paths</h3>
        <p><strong>Problem:</strong></p>
        <div class="code-block"><code>cd My Documents      # Doesn't work!</code></div>

        <p><strong>Solution:</strong></p>
        <div class="code-block"><code>cd "My Documents"    # Use quotes
cd My\\ Documents     # Or escape the space</code></div>

        <h3>Mistake 2: Wrong Directory</h3>
        <p><strong>Problem:</strong> "No such file or directory"</p>
        <p><strong>Solution:</strong> Always check where you are:</p>
        <div class="code-block"><code>pwd                  # Where am I?
ls                   # What's here?</code></div>

        <h3>Mistake 3: Permission Denied</h3>
        <p><strong>Problem:</strong> "Permission denied"</p>
        <p><strong>Solution:</strong> Use <code>sudo</code> for admin tasks:</p>
        <div class="code-block"><code>sudo command         # Run as administrator</code></div>
        <p>⚠️ Be careful with sudo - it can modify system files!</p>

        <h3>Mistake 4: Command Not Found</h3>
        <p><strong>Problem:</strong> "command not found"</p>
        <p><strong>Possible causes:</strong></p>
        <ul>
          <li>Typo in command name</li>
          <li>Program not installed</li>
          <li>Program not in PATH</li>
        </ul>
        <p><strong>Debug:</strong></p>
        <div class="code-block"><code>which programname    # Is it installed?
echo $PATH           # Is the folder in PATH?</code></div>

        <h3>Mistake 5: Forgetting to Save Terminal Changes</h3>
        <p>After editing ~/.zshrc, changes don't apply until you:</p>
        <div class="code-block"><code>source ~/.zshrc      # Reload config
# Or simply open a new Terminal window</code></div>

        <h3>Getting Unstuck</h3>
        <table class="command-table">
          <thead>
            <tr><th>Situation</th><th>Solution</th></tr>
          </thead>
          <tbody>
            <tr><td>Command running forever</td><td>Press <code>Ctrl + C</code></td></tr>
            <tr><td>Stuck in vim/less/man</td><td>Press <code>q</code> to quit</td></tr>
            <tr><td>Weird characters showing</td><td>Type <code>reset</code> and Enter</td></tr>
            <tr><td>Screen is messed up</td><td>Press <code>Ctrl + L</code> or type <code>clear</code></td></tr>
          </tbody>
        </table>

        <h3>Pro Tips</h3>
        <ul>
          <li>Use <code>Tab</code> completion religiously - it prevents typos</li>
          <li>Use <code>↑</code> arrow to repeat recent commands</li>
          <li>Test destructive commands with <code>ls</code> first (e.g., <code>ls *.txt</code> before <code>rm *.txt</code>)</li>
          <li>When in doubt, use <code>man command</code> to read the manual</li>
        </ul>
      `
    }
  ],

  flashcards: [
    { id: "fc-1-1", front: "What command shows your current location?", back: "<code>pwd</code> (Print Working Directory)" },
    { id: "fc-1-2", front: "How do you list all files including hidden ones?", back: "<code>ls -la</code> (or <code>ls -a</code> for just hidden)" },
    { id: "fc-1-3", front: "How do you go up one directory level?", back: "<code>cd ..</code> (two dots)" },
    { id: "fc-1-4", front: "What does ~ represent in Terminal?", back: "Your home directory (e.g., /Users/scott)" },
    { id: "fc-1-5", front: "What command creates a new folder?", back: "<code>mkdir foldername</code>" },
    { id: "fc-1-6", front: "How do you create nested folders at once?", back: "<code>mkdir -p parent/child/grandchild</code>" },
    { id: "fc-1-7", front: "How do you copy a file?", back: "<code>cp source destination</code>" },
    { id: "fc-1-8", front: "How do you move or rename a file?", back: "<code>mv old new</code> (same command for both)" },
    { id: "fc-1-9", front: "What does Tab do while typing?", back: "Auto-completes file and folder names" },
    { id: "fc-1-10", front: "What key cancels a running command?", back: "<code>Ctrl + C</code>" },
    { id: "fc-1-11", front: "How do you view a command's manual?", back: "<code>man commandname</code> (press q to quit)" },
    { id: "fc-1-12", front: "How do you search inside files?", back: "<code>grep \"searchterm\" filename</code>" },
    { id: "fc-1-13", front: "What does the pipe operator | do?", back: "Sends output of one command as input to another" },
    { id: "fc-1-14", front: "How do you save command output to a file?", back: "<code>command > filename</code> (> creates/overwrites, >> appends)" },
    { id: "fc-1-15", front: "How do you clear the Terminal screen?", back: "<code>clear</code> or <code>Ctrl + L</code>" }
  ],

  quiz: [
    {
      id: "q-1-1",
      question: "What does 'pwd' stand for?",
      options: ["Print Working Directory", "Password", "Power Down", "Print Window Display"],
      correctIndex: 0,
      explanation: "pwd shows your current location in the file system by printing the full path."
    },
    {
      id: "q-1-2",
      question: "Which command lists files with detailed information?",
      options: ["ls", "ls -l", "dir", "list -a"],
      correctIndex: 1,
      explanation: "The -l flag gives a 'long' listing with permissions, owner, size, and date."
    },
    {
      id: "q-1-3",
      question: "How do you navigate to a folder called 'Documents'?",
      options: ["go Documents", "cd Documents", "nav Documents", "open Documents"],
      correctIndex: 1,
      explanation: "cd (change directory) is the command for navigating to folders."
    },
    {
      id: "q-1-4",
      question: "What does 'cd ..' do?",
      options: ["Goes to root directory", "Goes to home directory", "Goes up one level", "Lists parent folder"],
      correctIndex: 2,
      explanation: "Two dots (..) represents the parent directory - one level up."
    },
    {
      id: "q-1-5",
      question: "Which command creates an empty file?",
      options: ["new file.txt", "create file.txt", "touch file.txt", "make file.txt"],
      correctIndex: 2,
      explanation: "touch creates an empty file or updates the timestamp of an existing file."
    },
    {
      id: "q-1-6",
      question: "How do you copy data.csv to backup.csv?",
      options: ["copy data.csv backup.csv", "cp data.csv backup.csv", "mv data.csv backup.csv", "dup data.csv backup.csv"],
      correctIndex: 1,
      explanation: "cp copies files. mv would move/rename it instead."
    },
    {
      id: "q-1-7",
      question: "What keyboard shortcut cancels a running command?",
      options: ["Cmd + C", "Ctrl + C", "Ctrl + Z", "Escape"],
      correctIndex: 1,
      explanation: "Ctrl + C sends an interrupt signal to stop the current process."
    },
    {
      id: "q-1-8",
      question: "What does Tab do while typing a command?",
      options: ["Adds a tab character", "Shows help", "Auto-completes names", "Cycles through history"],
      correctIndex: 2,
      explanation: "Tab completion saves typing and prevents typos by auto-completing file/folder names."
    },
    {
      id: "q-1-9",
      question: "Which command displays file contents?",
      options: ["view", "show", "cat", "display"],
      correctIndex: 2,
      explanation: "cat (concatenate) displays file contents. For long files, use 'less'."
    },
    {
      id: "q-1-10",
      question: "What symbol represents the home directory?",
      options: ["@", "#", "~", "$"],
      correctIndex: 2,
      explanation: "Tilde (~) is a shortcut for your home directory. cd ~ takes you home."
    },
    {
      id: "q-1-11",
      question: "How do you delete a folder and all its contents?",
      options: ["rm folder/", "del folder/", "rm -r folder/", "rmdir folder/"],
      correctIndex: 2,
      explanation: "rm -r (recursive) deletes folders and contents. rmdir only works on empty folders."
    },
    {
      id: "q-1-12",
      question: "What does 'grep' do?",
      options: ["Grabs files", "Searches text inside files", "Groups commands", "Graphs data"],
      correctIndex: 1,
      explanation: "grep searches for text patterns within files and shows matching lines."
    },
    {
      id: "q-1-13",
      question: "How do you send output to a file instead of the screen?",
      options: ["command | file.txt", "command > file.txt", "command >> screen", "command to file.txt"],
      correctIndex: 1,
      explanation: "> redirects output to a file. >> appends instead of overwriting."
    },
    {
      id: "q-1-14",
      question: "What does the PATH environment variable do?",
      options: ["Shows current directory", "Stores file locations", "Tells Terminal where to find commands", "Lists recent paths"],
      correctIndex: 2,
      explanation: "PATH contains directories that Terminal searches when you type a command."
    },
    {
      id: "q-1-15",
      question: "How do you reload your .zshrc after editing it?",
      options: ["restart", "refresh ~/.zshrc", "source ~/.zshrc", "reload terminal"],
      correctIndex: 2,
      explanation: "source runs the file in the current session. Or you can open a new Terminal."
    }
  ],

  terminalCommands: {
    "pwd": "/Users/learner",
    "ls": "Desktop    Documents  Downloads  Movies    Music     Pictures  Projects",
    "ls -la": `total 0
drwxr-x---+ 15 learner staff  480 Dec 13 10:00 .
drwxr-xr-x   5 root    admin  160 Dec 13 09:00 ..
-rw-------   1 learner staff    7 Dec 13 10:00 .bash_history
drwx------   3 learner staff   96 Dec 13 09:30 .cache
-rw-r--r--   1 learner staff  234 Dec 13 09:45 .zshrc
drwx------   4 learner staff  128 Dec 13 09:00 Desktop
drwx------   5 learner staff  160 Dec 13 09:00 Documents
drwx------   3 learner staff   96 Dec 13 09:00 Downloads
drwx------   3 learner staff   96 Dec 13 09:00 Movies
drwx------   3 learner staff   96 Dec 13 09:00 Music
drwx------   4 learner staff  128 Dec 13 09:00 Pictures
drwxr-xr-x   6 learner staff  192 Dec 13 10:00 Projects`,
    "ls Documents": "notes.txt   reports     work",
    "cd Documents": "(Changed to Documents)",
    "cd ..": "(Moved up one level)",
    "cd ~": "(Changed to home directory)",
    "cd /": "(Changed to root)",
    "mkdir Test": "(Created folder: Test)",
    "mkdir -p a/b/c": "(Created nested folders: a/b/c)",
    "touch test.txt": "(Created file: test.txt)",
    "whoami": "learner",
    "date": () => new Date().toString(),
    "cal": `   December 2024
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31`,
    "echo $HOME": "/Users/learner",
    "echo $USER": "learner",
    "echo $PATH": "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",
    "which ls": "/bin/ls",
    "uptime": " 10:30  up 2 days, 14:32, 2 users, load averages: 1.23 1.45 1.67",
    "cat ~/.zshrc": "# Path configuration\nexport PATH=$PATH:/usr/local/bin\n\n# Aliases\nalias ll='ls -la'\nalias ..='cd ..'",
    "head notes.txt": "(First 10 lines of notes.txt would appear here)",
    "tail notes.txt": "(Last 10 lines of notes.txt would appear here)",
    "man ls": "(Manual page for ls - press q to quit)",
    "clear": ""
  }
}
