// 
declare module 'abibadge' {
  function abibadge(abi: string, options?: {
    targetLength?: number,
    href?: string
  }): string;
  export = abibadge;
}
