# Path to your oh-my-zsh configuration.
export ZSH=$HOME/.dotfiles/oh-my-zsh

# if you want to use this, change your non-ascii font to Droid Sans Mono for Awesome
export ZSH_THEME="powerlevel10k/powerlevel10k"

# Set to this to use case-sensitive completion
export CASE_SENSITIVE="true"

# disable autosetting terminal title.
export DISABLE_AUTO_TITLE="true"

# Uncomment the following line to automatically update without prompting.
# export DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Which plugins would you like to load? (plugins can be found in ~/.dotfiles/oh-my-zsh/plugins/*)
plugins=(git colored-man-pages colorize brew osx history copyfile jsontools dirhistory zsh-completions zsh-syntax-highlighting)

autoload -U compinit && compinit

# Disable AutoCorrect in Zsh
unsetopt correct

source $ZSH/oh-my-zsh.sh

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

# NVM auto detection
source /usr/local/opt/nvm/nvm.sh

autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

# Added by Amplify CLI binary installer
export PATH="$HOME/.amplify/bin:$PATH"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
