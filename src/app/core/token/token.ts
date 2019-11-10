export interface Token {
  aud: number,
  exp: number,
  iat: number,
  jti: string,
  name: string,
  role: string,
  scp: string,
  sub: string
}