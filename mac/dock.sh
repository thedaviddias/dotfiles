#!/bin/sh

dockutil --no-restart --remove all
dockutil --no-restart --add "/Applications/Finder.app"
dockutil --no-restart --add "/Applications/Things.app"
dockutil --no-restart --add "/Applications/Music.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/Reeder.app"
dockutil --no-restart --add "/Applications/Pocket.app"
dockutil --no-restart --add "/Applications/Notion.app"
dockutil --no-restart --add "/Applications/MWeb.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/Airmail 3.app"
dockutil --no-restart --add "/Applications/Slack.app"
dockutil --no-restart --add "/Applications/Discord.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/MindNode.app"
dockutil --no-restart --add "/Applications/DEVONagent Pro.app"
dockutil --no-restart --add "/Applications/DEVONthink 3.app"
dockutil --no-restart --add "/Applications/Eagle.app"
dockutil --no-restart --add "/Applications/Tower.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/Visual Studio Code.app"
dockutil --no-restart --add "/Applications/Google Chrome.app"
dockutil --no-restart --add "/Applications/Figma.app"
dockutil --no-restart --add "/Applications/Firefox.app"
dockutil --no-restart --add "/Applications/ResponsivelyApp.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

dockutil --no-restart --add "/Applications/Farrago.app"
dockutil --no-restart --add "/Applications/Loopback.app"

defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

killall Dock

echo "Success! Dock is set."
