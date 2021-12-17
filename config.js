module.exports = {
  brew: [
    'coreutils',
    'moreutils',
    'findutils',
    'gnu-sed --with-default-names', // Install GNU `sed`, overwriting the built-in `sed` so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnupg',
    'vim --with-override-system-vi', // better, more recent vim
    'grep --with-default-names',     // upgrade grep so we can get things like inverted match (-v)
    'openssh',
    'git',
    'git-lfs',
    'ack', // http://conqueringthecommandline.com/book/ack_ag
    'ag',
    'awscli',
    'bat', // alternative to `cat`: https://github.com/sharkdp/bat
    'bundle', // Bundler for non-Ruby dependencies from Homebrew.
    'dos2unix',
    'findutils', // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'fzf', // Command-line fuzzy finder
    'gawk',
    'gh',
    'git-standup',
    'goku',
    'homebrew/dupes/grep',     // better, more recent grep
    'homebrew/dupes/screen',     // better/more recent version of screen
    'httpie', // https://github.com/jkbrzt/httpie
    'jq', // jq is a sort of JSON grep
    'mas', // Mac App Store CLI: https://github.com/mas-cli/mas
    'mongodb',
    'moreutils', // Install some other useful utilities like `sponge`
    'nmap',
    'openconnect',
    'postgresql',
    'python',
    'python@2',
    'rbenv',
    'readline', // ensure gawk gets good readline
    'reattach-to-user-namespace',
    'ruby-build',
    'sqlite',
    'todo-txt',
    'tree',
    'tmux',
    'ttyrec',
    'watch',
    'wget --enable-iri', // Install wget with IRI support
    'yarn',
  ],
  cask: [
    '1password',
    'affinity-designer',
    'affinity-photo',
    'airmail',
    'alfred',
    'altair-graphql-client',
    'audio-hijack',
    'autojump',
    'bartender',
    'cakebrew',
    'camo-studio',
    'cleanmymac',
    'cleanshot',
    'contexts',
    'devonthink',
    'diffmerge',
    'discord',
    'docker',
    'elgato-stream-deck',
    'farrago',
    'fig',
    'figma',
    'firefox',
    'forklift',
    'google-chrome',
    'gpg-suite',
    'grammarly',
    'hammerspoon',
    'hazel',
    'iterm2',
    'karabiner-elements',
    'keyboard-maestro',
    'little-snitch',
    'microsoft-edge',
    'mindnode-pro',
    'mockoon',
    'monitorcontrol',
    'ngrok',
    'nordvpn',
    'notion',
    'obs',
    'obsidian',
    'postman',
    'raindropio',
    'renamer',
    'screenflow',
    'slack',
    'switchhosts',
    'tableplus',
    'teamviewer',
    'the-unarchiver',
    'things',
    'tower',
    'twitch',
    'unity',
    'visual-studio-code',
    'vlc',
    'whatsapp',
    'zoomus',
  ],
  gem: [
  ],
  mas: [
    '1126100185', // Cashew
    '946399090', // Telegram Desktop
    '913158085', // Expressions
    '509818877', // Type Fu
    '497799835', // Xcode
    '937984704', // Amphetamine
    '409203825', // Numbers
    '734418810', // SSH Tunnel18
    '1006087419', // SnippetsLab
    '975937182', // Fantastical
    '1451177988', // Carbonize
    '1268962404', // Smart JSON Editor
    '880001334', // Reeder
    '1403919533', // MWeb
    '409183694', // Keynote
  ],
  npm: [
    '@aws-amplify/cli',
    'Alfred fkill',
    'alfred-dark-mode',
    'antic',
    'buzzphrase',
    'carbon-now-cli',
    'commitizen',
    'dotenv-cli',
    'expo-cli',
    'express-generator@4',
    'firefox',
    'fkill',
    'gatsby-cli',
    'git-recall',
    'graphql-playground',
    'http-server',
    'imagemin-cli',
    'instant-markdown-d',
    'lerna',
    'live-server',
    'netlify-cli',
    'npm-check',
    'plop',
    'prettyjson',
    'qlmarkdown',
    'select-branch',
    'svgo',
    'trash-cli',
    'trash',
    'vercel',
    'vtop',
    'wifi-password-cli',
    'wifi',
    'yarn-check',
  ]
};
