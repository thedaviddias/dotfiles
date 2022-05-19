# My Dotfiles

## Installation

```
git clone --recurse-submodules https://github.com/thedaviddias/dotfiles ~/.dotfiles
cd ~/.dotfiles;
# run this using terminal (not iTerm, lest iTerm settings get discarded on exit)
./install.sh
```

* When it finishes, open iTerm and press Command + , to open preferences. Under Profiles > Colors, select "Load Presets" and choose the Solarized Dark Patch scheme. If it isn't there for some reason, import it from ~/.dotfiles/configs -- you may also need to select the Hack font and check the box for non-ascii font and set to Roboto Mono For Powerline (I've had mixed results for automating these settings--love a pull request that improves this)
* I've also found that you need to reboot before fast key repeat will be enabled

## Settings

### General System Changes

* Disable the sound effects on boot

### Security

### Trackpad, mouse, keyboard, Bluetooth accessories, and input

### Configuring the Screen

### Finder Configs

* Show hidden files by default
* Show all filename extensions
* Show status bar
* Show path bar
* When performing a search, search the current folder by default
* Avoid creating .DS_Store files on network volumes
* Use list view in all Finder windows by default
* Disable the warning before emptying the Trash
* Empty Trash securely by default
* Show the ~/Library folder
* Expand the following File Info panes: “General”, “Open with”, and “Sharing & Permissions”

### Dock & Dashboard

* Remove the auto-hiding Dock delay
* Remove the animation when hiding/showing the Dock
* Automatically hide and show the Dock

### Spotlight

* Disable Spotlight indexing for any volume that gets mounted and has not yet been indexed
* Disable Spotlight

### iTerm2

* Don’t display the annoying prompt when quitting iTerm
* Hide tab title bars

### Time Machine
* Prevent Time Machine from prompting to use new hard drives as backup volume
* Disable local Time Machine backups

### Activity Monitor
* Show the main window when launching Activity Monitor
* Visualize CPU usage in the Activity Monitor Dock icon
* Show all processes in Activity Monitor
* Sort Activity Monitor results by CPU usage

## Software Installation

homebrew, fontconfig, git, ruby (latest), nvm (node + npm), and zsh (latest) are all installed inside the install.sh as foundational software for running this project. Additional software is configured in config.js and can be customized in your own fork/branch (you can change everything in your own fork/brance). The following is the software that I have set as default:

### Utilities

* [coreutils](https://www.gnu.org/software/coreutils/) - An essential package with basic tools such as ls, rm...
* [wget](https://www.gnu.org/software/wget/) - To download data from the web and ftp, easier than curl
* [tree](http://mama.indstate.edu/users/ice/tree/) - To create beautiful indented listing of files
* [nmap](https://nmap.org/) - A powerful command line network discovery utility
* tmux
* [mas](https://github.com/mas-cli/mas) - Install App Store apps from the command line
### NPM Global Modules


### Ruby Gems

### Apps

* alfred
* iterm2
* the-unarchiver
* gpgtools


## Inspiration

Originally forked from https://github.com/atomantic/dotfiles and modified based on my personal choices.
## License
This project is licensed under MIT.
## ¯\\_(ツ)_/¯ Warning / Liability
> Warning:
The creator of this repo is not responsible if your machine ends up in a state you are not happy with. If you are concerned, look at the code to review everything this will do to your machine :)
