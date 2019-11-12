// Node prefix
export const TYPE_PREFIX = `Shopify`

// Node types
export const ARTICLE = `Article`
export const BLOG = `Blog`
export const COLLECTION = `Collection`
export const COMMENT = `Comment`
export const PRODUCT = `Product`
export const PRODUCT_OPTION = `ProductOption`
export const PRODUCT_VARIANT = `ProductVariant`
export const PRODUCT_METAFIELD = `ProductMetafield`
export const VARIANT_PRESENTMENT_PRICE = `VariantPresentmentPrice`
export const SHOP_POLICY = `ShopPolicy`
export const PAGE = `Page`
export const SHOP = `Shop`
export const CONTENT = `content`

export const NODE_TO_ENDPOINT_MAPPING = {
  [SHOP]: `shop`,
  [ARTICLE]: `articles`,
  [BLOG]: `blogs`,
  [COLLECTION]: `collections`,
  [PRODUCT]: `products`,
  [PAGE]: `pages`,
}
