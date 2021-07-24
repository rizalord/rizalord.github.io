import { Global, css } from "@emotion/react"
import { useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from 'react'

export default function GlobalStyle ({ children }: { children: ReactNode }) {
    return (
      <div>
        <Global
          styles={css`
            ::selection {
              background-color: #2a61cc;
              color: #eff4f6;
            }
            ::-moz-selection {
              background-color: #2a61cc;
              color: #eff4f6;
            }
            html {
              scoll-behavior: smooth;
              cursor: default;
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              font-weight: 500;
              background: ${useColorModeValue("#eff4f6", "#1d1f28")};
              color: ${useColorModeValue("#1d1f28", "#eff4f6")};
            }
          `}
        />
        {children}
      </div>
    )
}
