#!/bin/sh

dockutil --no-restart --remove all
dockutil --no-restart --add "/Applications/ForkLift.app"
dockutil --no-restart --add "/Applications/Spotify.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/Slack.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/Google Chrome.app"
dockutil --no-restart --add "/Applications/Visual Studio Code.app"
dockutil --no-restart --add "/Applications/Tower.app"
dockutil --no-restart --add "/Applications/CyberDuck.app"
dockutil --no-restart --add "/Applications/Tor.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'




dockutil --no-restart --add "/Applications/Utilities/Activity Monitor.app"

killall Dock

echo "Success! Dock is set."
