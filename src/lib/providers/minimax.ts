export const MINIMAX_OPENAI_BASE_URL = 'https://api.minimax.io/v1'
export const MINIMAX_CN_OPENAI_BASE_URL = 'https://api.minimaxi.com/v1'
export const MINIMAX_ANTHROPIC_BASE_URL = 'https://api.minimax.io/anthropic'
export const MINIMAX_CN_ANTHROPIC_BASE_URL = 'https://api.minimaxi.com/anthropic'

export function isMiniMaxAnthropicEndpoint(endpoint: string | null | undefined): boolean {
  return (endpoint || '').trim().replace(/\/+$/, '').toLowerCase().endsWith('/anthropic')
}
