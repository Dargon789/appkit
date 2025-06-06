'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { type AppKitNetwork, base, baseSepolia, sepolia } from '@reown/appkit/networks'

import { AppKitButtons } from '@/src/components/AppKitButtons'
import { WagmiPermissionsSyncTest } from '@/src/components/Wagmi/WagmiPermissionsSyncTest'
import { AppKitProvider } from '@/src/context/AppKitContext'
import { ERC7715PermissionsProvider } from '@/src/context/ERC7715PermissionsContext'
import { PasskeyProvider } from '@/src/context/PasskeyContext'
import { ConstantsUtil } from '@/src/utils/ConstantsUtil'

const queryClient = new QueryClient()

const networks = [baseSepolia, sepolia, base] as [AppKitNetwork, ...AppKitNetwork[]]

const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks,
  projectId: ConstantsUtil.ProjectId
})

const config = {
  adapters: [wagmiAdapter],
  networks,
  defaultNetwork: sepolia,
  projectId: ConstantsUtil.ProjectId,
  features: {
    smartSessions: true,
    emailShowWallets: false,
    socials: []
  },
  termsConditionsUrl: 'https://reown.com/terms-of-service',
  privacyPolicyUrl: 'https://reown.com/privacy-policy'
}

export default function Wagmi() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ERC7715PermissionsProvider>
          <PasskeyProvider>
            <AppKitProvider config={config}>
              <AppKitButtons />
              <WagmiPermissionsSyncTest />
            </AppKitProvider>
          </PasskeyProvider>
        </ERC7715PermissionsProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
