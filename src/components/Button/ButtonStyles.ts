import { css } from 'styled-components'
import { palette, fonts } from '../../theme'

export const buttonBase = css`
  font-family: ${fonts.family.sans};
  font-weight: ${fonts.weight.regular};
  border: 0;
  border-radius: 0.25em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-transform: uppercase;
  background: ${palette.transparent};
`

export const small = css`
  font-size: ${fonts.size.base};
  padding: 10px 16px;
`

export const medium = css`
  font-size: ${fonts.size.md};
  padding: 11px 20px;
`

export const large = css`
  font-size: ${fonts.size.lg};
  padding: 12px 24px;
`

export const text = css`
  color: ${palette.theme.primary.main};
  &:hover {
    color: ${palette.theme.primary.dark};
    background: rgba(0,0,0,0.08);
  }
`

export const outlined = css`
  color: ${palette.theme.primary.main};
  border: 1px solid ${palette.theme.primary.main};
  &:hover {
    color: ${palette.theme.primary.dark};
  border-color: ${palette.theme.primary.dark};
  }
`

export const filled = css`
  color: ${palette.light.text.theme};
  background: ${palette.theme.primary.main};
  &:hover {
    background: ${palette.theme.primary.dark};
  }
`