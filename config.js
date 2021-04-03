module.exports = {
  brew: [
    'ack', // http://conqueringthecommandline.com/book/ack_ag
    'ag',
    'awscli',
    'bat', // alternative to `cat`: https://github.com/sharkdp/bat
    'bundle', // Bundler for non-Ruby dependencies from Homebrew.
    'coreutils',
    'dos2unix',
    'findutils', // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'fzf', // Command-line fuzzy finder
    'gawk',
    'gh',
    'gifsicle', // http://www.lcdf.org/gifsicle/
    'git-standup',
    'gnu-sed --with-default-names', // Install GNU `sed`, overwriting the built-in `sed` so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnupg',
    'goku',
    'grep --with-default-names',     // upgrade grep so we can get things like inverted match (-v)
    'homebrew/dupes/grep',     // better, more recent grep
    'homebrew/dupes/screen',     // better/more recent version of screen
    'httpie', // https://github.com/jkbrzt/httpie
    'hugo', // Static generator in GO
    'jq', // jq is a sort of JSON grep
    'mas', // Mac App Store CLI: https://github.com/mas-cli/mas
    'mongodb',
    'moreutils', // Install some other useful utilities like `sponge`
    'nmap',
    'openconnect',
    'postgresql',
    'rbenv',
    'readline', // ensure gawk gets good readline
    'reattach-to-user-namespace',
    'ruby-build',
    'sqlite',
    'todo-txt',
    'tree',
    'tree',
    'ttyrec',
    'vim --with-override-system-vi', // better, more recent vim
    'watch',
    'wget --enable-iri', // Install wget with IRI support
    'yarn',
    'zoom',
  ],
  cask: [
    '1password',
    'airmail',
    'alfred',
    'altair-graphql-client',
    'autojump',
    'bartender',
    'cakebrew',
    'cleanmymac',
    'cleanshot',
    'contexts',
    'devonthink',
    'diffmerge',
    'docker',
    'dropbox',
    'elgato-stream-deck',
    'figma',
    'firefox',
    'flux',
    'forklift',
    'google-chrome',
    'google-photos-backup-and-sync',
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
    'notion',
    'paw',
    'python',
    'python3',
    'skype',
    'slack',
    'switchhosts',
    'tableplus',
    'the-unarchiver',
    'things',
    'tower',
    'visual-studio-code',
    'vlc',
    'whatsapp',
  ],
  gem: [
  ],
  mas: [
    '1126100185', // Cashew
    '946399090', // Telegram Desktop
    '913158085', // Expressions
    '509818877', // Type Fu
    '918858936', // Airmail
    '1289197285', // MindNode
    '497799835', // Xcode
    '973134470', // Be Focused
    '937984704', // Amphetamine
    '409203825', // Numbers
    '734418810', // SSH Tunnel18
    '425424353', // The Unarchiver
    '1006087419', // SnippetsLab
    '975937182', // Fantastical
    '1451177988', // Carbonize
    '1268962404', // Smart JSON Editor
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
    'live-server',
    'netlify-cli',
    'npm-check-updates',
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
  ]
};
