export const colors = [
  '#3da5ff',
  '#00b9a8',
  '#83f3b8',
  '#74dc2e',
  '#afbf8d',
  '#ffe272',
  '#f1d299',
  '#986a33',
  '#ff9351',
  '#eba39c',
  '#ff3737',
  '#a72626',
  '#ff74bc',
  '#bf51e0',
  '#414796'
]

export type SdkOption = {
  title: string
  link: string
  links?: {
    title: string
    url: string
  }[]
  description: string
  randomLinks?: string[]
}

export const vitalikEthAddress = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'

export const wagmiSdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/wagmi',
    description: 'Basic configuration using wagmi as a driving library'
  },
  {
    title: 'SIWE',
    link: '/library/wagmi-siwe/',
    description: 'Configuration using wagmi and implementing sign in with ethereum'
  },
  {
    title: 'Without Email',
    link: '/library/wagmi-no-email/',
    description: 'Configuration using wagmi without email'
  },
  {
    title: 'Without Socials',
    link: '/library/wagmi-no-socials/',
    description: 'Configuration using wagmi without socials'
  },
  {
    title: 'Wallet Button',
    link: '/library/wagmi-wallet-button/',
    description: 'Configuration using wagmi with wallet buttons'
  },
  {
    title: 'Permissions(Sync)',
    link: '/library/wagmi-permissions-sync/',
    description: 'Configuration using wagmi and implementing ERC-7715 with passkey'
  },
  {
    title: 'Permissions(Async)',
    link: '/library/wagmi-permissions-async/',
    description: 'Configuration using wagmi and implementing ERC-7715 with ecdsa key'
  }
]

export const ethersSdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/ethers',
    description: 'Basic configuration using ethers as a driving library'
  },
  {
    title: 'SIWE',
    link: '/library/ethers-siwe/',
    description: 'Configuration using ethers and implementing sign in with ethereum'
  },
  {
    title: 'Without Email',
    link: '/library/ethers-no-email/',
    description: 'Configuration using ethers without email'
  },
  {
    title: 'Without Socials',
    link: '/library/ethers-no-socials/',
    description: 'Configuration using ethers without socials'
  },
  {
    title: 'Wallet Button',
    link: '/library/ethers-wallet-button/',
    description: 'Configuration using ethers with wallet buttons'
  }
]

export const ethers5SdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/ethers5',
    description: 'Basic configuration using ethers as a driving library'
  },
  {
    title: 'SIWE',
    link: '/library/ethers5-siwe/',
    description: 'Configuration using ethers and implementing sign in with ethereum'
  },
  {
    title: 'Without Socials',
    link: '/library/ethers5-no-socials/',
    description: 'Configuration using ethers without socials'
  },
  {
    title: 'Wallet Button',
    link: '/library/ethers5-wallet-button/',
    description: 'Configuration using ethers with socials'
  }
]

export const solanaSdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/solana',
    description: 'Basic configuration using solana as a driving library'
  },
  {
    title: 'Without Email',
    link: '/library/solana-no-email/',
    description: 'Configuration using solana without email'
  },
  {
    title: 'Without Socials',
    link: '/library/solana-no-socials/',
    description: 'Configuration using ethers without socials'
  },
  {
    title: 'Wallet Button',
    link: '/library/solana-wallet-button/',
    description: 'Configuration using solana with wallet buttons'
  }
]

export const multichainSdkOptions: SdkOption[] = [
  {
    title: 'Wagmi + Solana + Bitcoin',
    link: '/library/multichain-all',
    description: 'Configuration with Wagmi, Solana and Bitcoin adapters enabled for AppKit'
  },
  {
    title: 'Wagmi + Solana',
    link: '/library/multichain-wagmi-solana',
    description: 'Configuration with Wagmi and Solana adapters enabled for AppKit'
  },
  {
    title: 'Wagmi + Bitcoin',
    link: '/library/multichain-wagmi-bitcoin',
    description: 'Configuration with Wagmi and Bitcoin adapters enabled for AppKit'
  },
  {
    title: 'Ethers + Solana',
    link: '/library/multichain-ethers-solana',
    description: 'Configuration with Ethers and Solana adapters enabled for AppKit'
  },
  {
    title: 'Ethers5 + Solana',
    link: '/library/multichain-ethers5-solana',
    description: 'Configuration with Ethers 5 and Solana adapters enabled for AppKit'
  },
  {
    title: 'Basic',
    link: '/library/multichain-no-adapters',
    description: 'Configuration with no adapters enabled for AppKit'
  }
]

export const testingSdkOptions: SdkOption[] = [
  {
    title: 'Demo',
    link: '',
    description: 'All features enabled and randomly using ethers or wagmi',
    randomLinks: ['/library/wagmi-all', '/library/ethers-all']
  },
  {
    title: 'Demo w/ Sample Wallets',
    link: '',
    description:
      'All features enabled, with sample wallet links, and randomly using ethers or wagmi',
    randomLinks: ['/library/wagmi-all-internal', '/library/ethers-all-internal']
  },
  {
    title: 'Demo w/ Universal Links',
    link: '/library/universal-links',
    description:
      'All features enabled, and using universal links over deep links for mobile wallets'
  }
]

export const featuredSdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/wagmi',
    description: 'Basic configuration using wagmi as a driving library'
  },
  {
    title: 'Multichain',
    link: '/library/multichain-all',
    description: 'Configuration with Wagmi, Solana and Bitcoin adapters enabled for AppKit'
  },
  {
    title: 'Basic',
    link: '/library/multichain-no-adapters',
    description: 'Configuration with no adapters enabled for AppKit'
  }
]

export const bitcoinSdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/bitcoin',
    description: 'Basic configuration using bitcoin as a driving library'
  },
  {
    title: 'Wallet Button',
    link: '/library/bitcoin-wallet-button',
    description: 'Configuration using bitcoin with wallet buttons'
  }
]

export const siwxSdkOptions: SdkOption[] = [
  {
    title: 'Reown Authentication',
    link: '/library/reown-authentication',
    description: 'SIWX configuration using Reown Authentication'
  },
  {
    title: 'Default SIWX',
    link: '/library/siwx-default',
    description:
      'Multichain SIWX configuration with Ethers, Solana and Bitcoin adapters enabled for AppKit'
  }
]

export const paySdkOptions: SdkOption[] = [
  {
    title: 'Default',
    link: '/library/pay-default',
    description: 'AppKit Pay with default configuration'
  }
]

export const customSdkOptions: SdkOption[] = [
  {
    title: 'Exclude Wallet IDs',
    link: '/flag/exclude-wallet-ids',
    description: 'AppKit configuration with excluded wallet IDs enabled for Backpack'
  },
  {
    title: 'Enable Reconnect (disabled)',
    link: '/flag/enable-reconnect/wagmi',
    links: [
      {
        title: 'Wagmi',
        url: '/flag/enable-reconnect/wagmi'
      },
      {
        title: 'Ethers',
        url: '/flag/enable-reconnect/ethers'
      },
      {
        title: 'Ethers5',
        url: '/flag/enable-reconnect/ethers5'
      }
    ],
    description:
      'AppKit configuration with `enableReconnect` flag set to false to disable reconnect on page load'
  }
]
