export const DEMO_CREDENTIALS = {
  username: 'staff@gudivada.in',
  password: 'gudivada123',
} as const

const AUTH_KEY = 'gudivada_auth'

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === 'true'
}

export function login(username: string, password: string): boolean {
  const valid =
    username.trim().toLowerCase() === DEMO_CREDENTIALS.username &&
    password === DEMO_CREDENTIALS.password
  if (valid) sessionStorage.setItem(AUTH_KEY, 'true')
  return valid
}

export function logout(): void {
  sessionStorage.removeItem(AUTH_KEY)
}
