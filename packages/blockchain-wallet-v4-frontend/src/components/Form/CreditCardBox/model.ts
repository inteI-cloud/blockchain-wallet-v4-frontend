// https://github.com/medipass/react-credit-card-input/blob/master/src/utils/formatter.js
export const DEFAULT_CVC_LENGTH = 3
export const DEFAULT_ZIP_LENGTH = 5
export const DEFAULT_CARD_MIN = 13
export const DEFAULT_CARD_FORMAT = /(\d{1,4})/g
export const DEFAULT_CARD_SVG_LOGO =
  'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTc2IDM3NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5wbGFjZWhvbGRlcjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9InBsYWNlaG9sZGVyIj4gICAgICAgICAgICA8cGF0aCBkPSJNNTI3LjkzMzc5MywzNzYuOTk4MjggTDQ4LjA2NjIwNjksMzc2Ljk5ODI4IEMzNS40MjM0ODAzLDM3Ny4xMDM5NjggMjMuMjU2NTg2NCwzNzIuMTg3ODkgMTQuMjQyMzI4MSwzNjMuMzMxNjE4IEM1LjIyODA2OTc1LDM1NC40NzUzNDYgMC4xMDQ5MTcxMDIsMzQyLjQwNDQwNyAwLDMyOS43NzQ0OTQgTDAsNDcuMjI1NDU1NCBDMC4xMDQ5MTcxMDIsMzQuNTk1NTQyNSA1LjIyODA2OTc1LDIyLjUyNDYwNCAxNC4yNDIzMjgxLDEzLjY2ODMzMTkgQzIzLjI1NjU4NjQsNC44MTIwNTk4NSAzNS40MjM0ODAzLC0wLjEwNDAxODI5NiA0OC4wNjYyMDY5LDAuMDAxNjY5NDg2NDYgTDUyNy45MzM3OTMsMC4wMDE2Njk0ODY0NiBDNTQwLjU3NjUyLC0wLjEwNDAxODI5NiA1NTIuNzQzNDE0LDQuODEyMDU5ODUgNTYxLjc1NzY3MiwxMy42NjgzMzE5IEM1NzAuNzcxOTMsMjIuNTI0NjA0IDU3NS44OTUwODMsMzQuNTk1NTQyNSA1NzYsNDcuMjI1NDU1NCBMNTc2LDMyOS45NzI5MTMgQzU3NS42NzI3ODYsMzU2LjE5NTY2MyA1NTQuMTg0MjczLDM3Ny4yMTg4NTcgNTI3LjkzMzc5MywzNzYuOTk4MjggWiIgaWQ9InNoYXBlIiBmaWxsPSIjRThFQkVFIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4gICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiM3NTc1NzUiIHN0cm9rZS13aWR0aD0iMjAiIHg9IjQxOCIgeT0iNTgiIHdpZHRoPSI5MSIgaGVpZ2h0PSI2MyIgcng9IjMwIj48L3JlY3Q+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiBmaWxsPSIjNzU3NTc1IiB4PSI1MyIgeT0iMjA4IiB3aWR0aD0iMTA3IiBoZWlnaHQ9IjQwIiByeD0iOCI+PC9yZWN0PiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgZmlsbD0iIzc1NzU3NSIgeD0iNDEzIiB5PSIyMDgiIHdpZHRoPSIxMDciIGhlaWdodD0iNDAiIHJ4PSI4Ij48L3JlY3Q+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiBmaWxsPSIjNzU3NTc1IiB4PSIyOTMiIHk9IjIwOCIgd2lkdGg9IjEwNyIgaGVpZ2h0PSI0MCIgcng9IjgiPjwvcmVjdD4gICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIGZpbGw9IiM3NTc1NzUiIHg9IjE3MyIgeT0iMjA4IiB3aWR0aD0iMTA3IiBoZWlnaHQ9IjQwIiByeD0iOCI+PC9yZWN0PiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+'
export const DEFAULT_SECURITY_CODE_NAME = 'CVC'

export const CARD_TYPES = [
  {
    cvcLength: 4,
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 15,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CID',
    startPattern: /^3[47]/,
    type: 'AMEX',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 16,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: DEFAULT_SECURITY_CODE_NAME,
    startPattern: /^5019/,
    type: 'DANKORT',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 19,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: DEFAULT_SECURITY_CODE_NAME,
    startPattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
    type: 'HIPERCARD',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 14,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: DEFAULT_SECURITY_CODE_NAME,
    startPattern: /^(36|38|30[0-5])/,
    type: 'DINERSCLUB',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 16,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CVD',
    startPattern: /^(6011|65|64[4-9]|622)/,
    type: 'DISCOVER',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 16,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CAV',
    startPattern: /^35/,
    type: 'JCB',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 19,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: DEFAULT_SECURITY_CODE_NAME,
    startPattern: /^(6706|6771|6709)/,
    type: 'LASER',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 19,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: DEFAULT_SECURITY_CODE_NAME,
    startPattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
    type: 'MAESTRO',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMjhDMzAuMjA5MSAwIDMyIDEuNzkwODYgMzIgNFYxNkMzMiAxOC4yMDkxIDMwLjIwOTEgMjAgMjggMjBINEMxLjc5MDg2IDIwIDAgMTguMjA5MSAwIDE2VjRaIiBmaWxsPSIjRjBGMkY3Ii8+CjxwYXRoIGQ9Ik0xOC42Nzg5IDUuNjI0NjNIMTMuMzIzNVYxNC4zNzE2SDE4LjY3ODlWNS42MjQ2M1oiIGZpbGw9IiNGRjVGMDAiLz4KPHBhdGggZD0iTTEzLjg3NSA5Ljk5OTMxQzEzLjg3NDQgOS4xNTcwNSAxNC4wNjUzIDguMzI1NjggMTQuNDMzNCA3LjU2ODFDMTQuODAxNSA2LjgxMDUzIDE1LjMzNyA2LjE0NjYgMTUuOTk5NiA1LjYyNjU4QzE1LjE3OSA0Ljk4MTY3IDE0LjE5MzUgNC41ODA2NCAxMy4xNTU4IDQuNDY5MzJDMTIuMTE4IDQuMzU4MDEgMTEuMDY5OSA0LjU0MDg5IDEwLjEzMTIgNC45OTcwOEM5LjE5MjQ4IDUuNDUzMjYgOC40MDEwNCA2LjE2NDM0IDcuODQ3MzQgNy4wNDkwNUM3LjI5MzYzIDcuOTMzNzUgNyA4Ljk1NjM5IDcgMTAuMDAwMUM3IDExLjA0MzggNy4yOTM2MyAxMi4wNjY0IDcuODQ3MzQgMTIuOTUxMUM4LjQwMTA0IDEzLjgzNTggOS4xOTI0OCAxNC41NDY5IDEwLjEzMTIgMTUuMDAzMUMxMS4wNjk5IDE1LjQ1OTMgMTIuMTE4IDE1LjY0MjIgMTMuMTU1OCAxNS41MzA4QzE0LjE5MzUgMTUuNDE5NSAxNS4xNzkgMTUuMDE4NSAxNS45OTk2IDE0LjM3MzZDMTUuMzM2OCAxMy44NTM0IDE0LjgwMTEgMTMuMTg5MiAxNC40MzMgMTIuNDMxNEMxNC4wNjUgMTEuNjczNSAxMy44NzQxIDEwLjg0MTggMTMuODc1IDkuOTk5MzFaIiBmaWxsPSIjRUIwMDFCIi8+CjxwYXRoIGQ9Ik0yNC40Njg0IDEzLjQ0NjFWMTMuMjY2OUgyNC41NDU3VjEzLjIyOThIMjQuMzYxOFYxMy4yNjY5SDI0LjQzNDRWMTMuNDQ2MUgyNC40Njg0Wk0yNC44MjU0IDEzLjQ0NjFWMTMuMjI5OEgyNC43Njk3TDI0LjcwNDggMTMuMzg0M0wyNC42Mzk5IDEzLjIyOThIMjQuNTg0M1YxMy40NDYxSDI0LjYyNDVWMTMuMjgyM0wyNC42ODQ4IDEzLjQyMjlIMjQuNzI2NUwyNC43ODY3IDEzLjI4MjNWMTMuNDQ2MUgyNC44MjU0WiIgZmlsbD0iI0Y3OUUxQiIvPgo8cGF0aCBkPSJNMjUuMDAwMSA5Ljk5ODkyQzI1IDExLjA0MjcgMjQuNzA2MyAxMi4wNjU0IDI0LjE1MjUgMTIuOTUwMUMyMy41OTg3IDEzLjgzNDkgMjIuODA3MiAxNC41NDU5IDIxLjg2ODMgMTUuMDAyMUMyMC45Mjk1IDE1LjQ1ODIgMTkuODgxMyAxNS42NDA5IDE4Ljg0MzUgMTUuNTI5NUMxNy44MDU3IDE1LjQxOCAxNi44MjAyIDE1LjAxNjggMTUuOTk5NiAxNC4zNzE3QzE2LjY2MTkgMTMuODUxMiAxNy4xOTc0IDEzLjE4NzEgMTcuNTY1NSAxMi40Mjk0QzE3LjkzMzcgMTEuNjcxOCAxOC4xMjUgMTAuODQwNSAxOC4xMjUgOS45OTgxNUMxOC4xMjUgOS4xNTU4MSAxNy45MzM3IDguMzI0NDcgMTcuNTY1NSA3LjU2Njg1QzE3LjE5NzQgNi44MDkyNCAxNi42NjE5IDYuMTQ1MTMgMTUuOTk5NiA1LjYyNDY0QzE2LjgyMDIgNC45Nzk1MyAxNy44MDU3IDQuNTc4MzEgMTguODQzNSA0LjQ2NjgzQzE5Ljg4MTMgNC4zNTUzNSAyMC45Mjk1IDQuNTM4MTIgMjEuODY4MyA0Ljk5NDI0QzIyLjgwNzIgNS40NTAzNiAyMy41OTg3IDYuMTYxNDMgMjQuMTUyNSA3LjA0NjE3QzI0LjcwNjMgNy45MzA5IDI1IDguOTUzNjEgMjUuMDAwMSA5Ljk5NzM4VjkuOTk4OTJaIiBmaWxsPSIjRjc5RTFCIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
    maxCardNumberLength: 16,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CVC',
    startPattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
    type: 'MASTERCARD',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    luhn: false,
    maxCardNumberLength: 19,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: DEFAULT_SECURITY_CODE_NAME,
    startPattern: /^62/,
    type: 'UNIONPAY',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMjhDMzAuMjA5MSAwIDMyIDEuNzkwODYgMzIgNFYxNkMzMiAxOC4yMDkxIDMwLjIwOTEgMjAgMjggMjBINEMxLjc5MDg2IDIwIDAgMTguMjA5MSAwIDE2VjRaIiBmaWxsPSIjRjBGMkY3Ii8+CjxwYXRoIGQ9Ik0yMS40NDc3IDYuNTcwMTFDMjEuMDY0MyA2LjQxNzk4IDIwLjQ1NiA2LjI1IDE5LjcwNCA2LjI1QzE3Ljc4NCA2LjI1IDE2LjQzMiA3LjI3MzgxIDE2LjQyMzcgOC43Mzc1NEMxNi40MDc4IDkuODE3NDggMTcuMzkxNyAxMC40MTczIDE4LjEyNzYgMTAuNzc3NEMxOC44Nzk4IDExLjE0NTMgMTkuMTM1NSAxMS4zODU1IDE5LjEzNTUgMTEuNzEzNUMxOS4xMjc4IDEyLjIxNzIgMTguNTI3NyAxMi40NDk0IDE3Ljk2OCAxMi40NDk0QzE3LjE5MTggMTIuNDQ5NCAxNi43NzU5IDEyLjMyOTcgMTYuMTQzOCAxMi4wNDk0TDE1Ljg4NzggMTEuOTI5M0wxNS42MTU4IDEzLjYxNzFDMTYuMDcxNyAxMy44MjQ5IDE2LjkxMTggMTQuMDA5MiAxNy43ODQgMTQuMDE3M0MxOS44MjQgMTQuMDE3MyAyMS4xNTIxIDEzLjAwOTMgMjEuMTY3OCAxMS40NDk1QzIxLjE3NTYgMTAuNTkzNiAyMC42NTYgOS45Mzc3MiAxOS41MzU5IDkuNDAxNzlDMTguODU1OSA5LjA1Nzc2IDE4LjQzOTUgOC44MjU3OCAxOC40Mzk1IDguNDczNzdDMTguNDQ3NCA4LjE1Mzc3IDE4Ljc5MTcgNy44MjYgMTkuNTU5MyA3LjgyNkMyMC4xOTEzIDcuODA5OTUgMjAuNjU1NyA3Ljk2MTg3IDIxLjAwNzUgOC4xMTM5TDIxLjE4MzMgOC4xOTM3NEwyMS40NDc3IDYuNTcwMTFaIiBmaWxsPSIjMTUxOTVBIi8+CjxwYXRoIGQ9Ik0xNC40IDEzLjkwNTNIMTIuNDU1OEwxMy42NzE4IDYuMzg2M0gxNS42MTU5TDE0LjQgMTMuOTA1M1oiIGZpbGw9IiMxNTE5NUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45Mjc3IDYuMzg2M0gyNi40MzE1TDI4IDEzLjkwNTJIMjYuMTk5OUMyNi4xOTk5IDEzLjkwNTIgMjYuMDIzNyAxMy4wNDEyIDI1Ljk2NzkgMTIuNzc3M0gyMy40NzE4TDIzLjA2MzcgMTMuOTA1MkgyMS4wMjM4TDIzLjkxMTYgNy4wMTAxNUMyNC4xMTE3IDYuNTIyMTcgMjQuNDY0IDYuMzg2MyAyNC45Mjc3IDYuMzg2M1pNMjQuODA3OSA5LjEzNzgxQzI0LjgwNzkgOS4xMzc4MSAyNC4xOTE4IDEwLjgwOTYgMjQuMDMxNyAxMS4yNDE2SDI1LjY0NzdDMjUuNTY3NyAxMC44NjU2IDI1LjE5OTYgOS4wNjU4NCAyNS4xOTk2IDkuMDY1ODRMMjUuMDYzNyA4LjQxNzk2QzI1LjAwNjUgOC41ODQ2OCAyNC45MjM5IDguODEzODYgMjQuODY4IDguOTY4NTZMMjQuODY3NyA4Ljk2OTUxQzI0LjgzIDkuMDc0MDMgMjQuODA0NyA5LjE0NDI5IDI0LjgwNzkgOS4xMzc4MVoiIGZpbGw9IiMxNTE5NUEiLz4KPHBhdGggZD0iTTEwLjgzMTkgNi4zODYzTDguOTI3OTcgMTEuNTEzNUw4LjcxOTkxIDEwLjQ3MzdDOC43MTk4NiAxMC40NzM1IDguNzE5OTYgMTAuNDczOCA4LjcxOTkxIDEwLjQ3MzdMOC4wMzk5NCA3LjAxODM0QzcuOTI3OTkgNi41MzgxMiA3LjU4Mzk2IDYuNDAyMTQgNy4xNTk5OCA2LjM4NjNINC4wMzJMNCA2LjUzODIyQzQuNzYyODkgNi43MzMzMSA1LjQ0NTIzIDcuMDE0NDMgNi4wNDMxIDcuMzYzOTZMNy43NzU5NSAxMy44OTczSDkuODMxODVMMTIuODg3NyA2LjM4NjNIMTAuODMxOVoiIGZpbGw9IiMxNTE5NUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxwYXRoIGQ9Ik0wIDBIMzJWMjBIMFYwWiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
    maxCardNumberLength: 16,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CVV',
    startPattern: /^4(026|17500|405|508|844|91[37])/,
    type: 'VISAELECTRON',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo: DEFAULT_CARD_SVG_LOGO,
    maxCardNumberLength: 16,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CVE',
    startPattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
    type: 'ELO',
  },
  {
    cvcLength: DEFAULT_CVC_LENGTH,
    format: DEFAULT_CARD_FORMAT,
    logo:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMjhDMzAuMjA5MSAwIDMyIDEuNzkwODYgMzIgNFYxNkMzMiAxOC4yMDkxIDMwLjIwOTEgMjAgMjggMjBINEMxLjc5MDg2IDIwIDAgMTguMjA5MSAwIDE2VjRaIiBmaWxsPSIjRjBGMkY3Ii8+CjxwYXRoIGQ9Ik0yMS40NDc3IDYuNTcwMTFDMjEuMDY0MyA2LjQxNzk4IDIwLjQ1NiA2LjI1IDE5LjcwNCA2LjI1QzE3Ljc4NCA2LjI1IDE2LjQzMiA3LjI3MzgxIDE2LjQyMzcgOC43Mzc1NEMxNi40MDc4IDkuODE3NDggMTcuMzkxNyAxMC40MTczIDE4LjEyNzYgMTAuNzc3NEMxOC44Nzk4IDExLjE0NTMgMTkuMTM1NSAxMS4zODU1IDE5LjEzNTUgMTEuNzEzNUMxOS4xMjc4IDEyLjIxNzIgMTguNTI3NyAxMi40NDk0IDE3Ljk2OCAxMi40NDk0QzE3LjE5MTggMTIuNDQ5NCAxNi43NzU5IDEyLjMyOTcgMTYuMTQzOCAxMi4wNDk0TDE1Ljg4NzggMTEuOTI5M0wxNS42MTU4IDEzLjYxNzFDMTYuMDcxNyAxMy44MjQ5IDE2LjkxMTggMTQuMDA5MiAxNy43ODQgMTQuMDE3M0MxOS44MjQgMTQuMDE3MyAyMS4xNTIxIDEzLjAwOTMgMjEuMTY3OCAxMS40NDk1QzIxLjE3NTYgMTAuNTkzNiAyMC42NTYgOS45Mzc3MiAxOS41MzU5IDkuNDAxNzlDMTguODU1OSA5LjA1Nzc2IDE4LjQzOTUgOC44MjU3OCAxOC40Mzk1IDguNDczNzdDMTguNDQ3NCA4LjE1Mzc3IDE4Ljc5MTcgNy44MjYgMTkuNTU5MyA3LjgyNkMyMC4xOTEzIDcuODA5OTUgMjAuNjU1NyA3Ljk2MTg3IDIxLjAwNzUgOC4xMTM5TDIxLjE4MzMgOC4xOTM3NEwyMS40NDc3IDYuNTcwMTFaIiBmaWxsPSIjMTUxOTVBIi8+CjxwYXRoIGQ9Ik0xNC40IDEzLjkwNTNIMTIuNDU1OEwxMy42NzE4IDYuMzg2M0gxNS42MTU5TDE0LjQgMTMuOTA1M1oiIGZpbGw9IiMxNTE5NUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45Mjc3IDYuMzg2M0gyNi40MzE1TDI4IDEzLjkwNTJIMjYuMTk5OUMyNi4xOTk5IDEzLjkwNTIgMjYuMDIzNyAxMy4wNDEyIDI1Ljk2NzkgMTIuNzc3M0gyMy40NzE4TDIzLjA2MzcgMTMuOTA1MkgyMS4wMjM4TDIzLjkxMTYgNy4wMTAxNUMyNC4xMTE3IDYuNTIyMTcgMjQuNDY0IDYuMzg2MyAyNC45Mjc3IDYuMzg2M1pNMjQuODA3OSA5LjEzNzgxQzI0LjgwNzkgOS4xMzc4MSAyNC4xOTE4IDEwLjgwOTYgMjQuMDMxNyAxMS4yNDE2SDI1LjY0NzdDMjUuNTY3NyAxMC44NjU2IDI1LjE5OTYgOS4wNjU4NCAyNS4xOTk2IDkuMDY1ODRMMjUuMDYzNyA4LjQxNzk2QzI1LjAwNjUgOC41ODQ2OCAyNC45MjM5IDguODEzODYgMjQuODY4IDguOTY4NTZMMjQuODY3NyA4Ljk2OTUxQzI0LjgzIDkuMDc0MDMgMjQuODA0NyA5LjE0NDI5IDI0LjgwNzkgOS4xMzc4MVoiIGZpbGw9IiMxNTE5NUEiLz4KPHBhdGggZD0iTTEwLjgzMTkgNi4zODYzTDguOTI3OTcgMTEuNTEzNUw4LjcxOTkxIDEwLjQ3MzdDOC43MTk4NiAxMC40NzM1IDguNzE5OTYgMTAuNDczOCA4LjcxOTkxIDEwLjQ3MzdMOC4wMzk5NCA3LjAxODM0QzcuOTI3OTkgNi41MzgxMiA3LjU4Mzk2IDYuNDAyMTQgNy4xNTk5OCA2LjM4NjNINC4wMzJMNCA2LjUzODIyQzQuNzYyODkgNi43MzMzMSA1LjQ0NTIzIDcuMDE0NDMgNi4wNDMxIDcuMzYzOTZMNy43NzU5NSAxMy44OTczSDkuODMxODVMMTIuODg3NyA2LjM4NjNIMTAuODMxOVoiIGZpbGw9IiMxNTE5NUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxwYXRoIGQ9Ik0wIDBIMzJWMjBIMFYwWiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
    maxCardNumberLength: 19,
    minCardNumberLength: DEFAULT_CARD_MIN,
    securityCodeName: 'CVV',
    startPattern: /^4/,
    type: 'VISA',
  },
]

export type CardNameType =
  | 'AMEX'
  | 'DANKORT'
  | 'HIPERCARD'
  | 'DINERSCLUB'
  | 'DISCOVER'
  | 'JCB'
  | 'LASER'
  | 'MAESTRO'
  | 'MASTERCARD'
  | 'UNIONPAY'
  | 'VISAELECTRON'
  | 'ELO'
  | 'VISA'

export const getCardTypeByValue = (value) =>
  CARD_TYPES.find((cardType) => cardType.startPattern.test(value))
