
```
git clone --recurse-submodules https://github.com/thedaviddias/dotfiles ~/.dotfiles
cd ~/.dotfiles;
# run this using terminal (not iTerm, lest iTerm settings get discarded on exit)
./install.sh
```

* When it finishes, open iTerm and press Command + , to open preferences. Under Profiles > Colors, select "Load Presets" and choose the Solarized Dark Patch scheme. If it isn't there for some reason, import it from ~/.dotfiles/configs -- you may also need to select the Hack font and check the box for non-ascii font and set to Roboto Mono For Powerline (I've had mixed results for automating these settings--love a pull request that improves this)
* I've also found that you need to reboot before fast key repeat will be enabled
