export function skuChanged(ctx: any) {
  console.log('RECEIVED EVENT', ctx.body)

  return true
}
