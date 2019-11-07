module.exports = {
  brew: [
    'mas',
    'rbenv',
    'ruby-build',
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // alternative to `cat`: https://github.com/sharkdp/bat
    'bat',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    // 'fortune',
    'fzf',
    'readline', // ensure gawk gets good readline
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // upgrade grep so we can get things like inverted match (-v)
    'grep --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    // Bundler for non-Ruby dependencies from Homebrew.
    'bundle',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'todo-txt',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri',
    'tree',
    'awscli'
  ],
  cask: [
    'alfred',
    'spotify',
    'cakebrew',
    'diffmerge',
    'docker',
    'google-chrome',
    'typora',
    'bartender',
    'hammerspoon',
    'karabiner-elements',
    'flux',
    'little-snitch',
    'macvim',
    'cyberduck',
    'forklift',
    'slack',
    'visual-studio-code',
    'vlc',
    'alfred',
    'tower',
    'autojump',
    'exa',
    'firefox',
    'iterm2',
    'react-native-debugger',
    'altair-graphql-client',
    'keycastr',
    'authy',
    'google-photos-backup-and-sync',
    'skype',
    'whatsapp',
    'paw',
    'ngrok',
    'python',
    'python3'
  ],
  gem: [
  ],
  mas: [
    '926036361', // LastPass
    '1351639930', // Gifski
    '1082624744', // Gifox
    '1126100185', // Cashew
    '961632517', // Be Focused Pro
    '946399090', // Telegram Desktop
    '913158085', // Expressions
    '1024917449', // Cloud Outliner Pro
    '509818877', // Type Fu
    '918858936', // Airmail
    '881415018', // myTuner Radio
    '507257563', // Sip
    '1289197285', // MindNode
    '497799835', // Xcode
    '973134470', // Be Focused
    '937984704', // Amphetamine
    '405399194', // Kindle
    '841285201', // Haskell
    '409203825', // Numbers
    '734418810', // SSH Tunnel18
    '425424353', // The Unarchiver
    '1006087419', // SnippetsLab
    '975937182', // Fantastical
    '409183694', // Keynote
    '1451177988', // Carbonize
    '1268962404', // Smart JSON Editor
  ],
  npm: [
    'antic',
    'alfred-dark-mode',
    'Alfred fkill',
    'select-branch',
    'carbon-now-cli',
    'buzzphrase',
    'eslint',
    'instant-markdown-d',
    'npm-check-updates',
    'prettyjson',
    'trash',
    'trash-cli',
    'live-server',
    'http-server',
    'svgo',
    'commitizen',
    'wifi',
    'wifi-password-cli',
    'imagemin-cli',
    'git-recall',
    'fkill',
    'vtop',
    'firefox',
    'graphql-playground',
    'qlmarkdown',
    'yo',
    'express-generator@4',
    'expo-cli',
    'prettier'
  ]
};
