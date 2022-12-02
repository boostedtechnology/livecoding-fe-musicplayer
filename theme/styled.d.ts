import "styled-components"
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        default: string
      }
      fonts: {
        white: string
        gray: string
        green: string
      }
    }
  }
}
