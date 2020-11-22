const R = require('ramda')

const categories = [
  { id: 'defcf2ed-a579-427e-a211-5a25e7cb623e', name: 'Cervejas' },
  { id: 'a5c0034f-63f5-4423-92e9-91d91957fda8', name: 'Vinhos' },
  { id: 'e44b29a2-10da-4f62-84a5-7d23a28bf209', name: 'Destilados' },
  { id: '227cfc6b-01f7-4499-8651-9dae8d2c1e7c', name: 'Refrigerantes' },
  { id: '282c1a39-efdb-460b-b252-6926a78af5b3', name: 'Salgadinhos' },
]

const beers = [
  {
    id: '76e7010a-c4b6-4b42-b717-668aadab8baa',
    name: 'Koepp, Walter and Bauch',
    price: 4.43,
    description: 'Quisquam modi est id.',
  },
  {
    id: '94d27d31-cc43-4396-a4d5-884ad813ff48',
    name: 'Abernathy, Schimmel and Wintheiser',
    price: 1.95,
    description: 'Velit possimus quia dolore fugiat id.',
  },
  {
    id: '44308bb7-2c76-4eff-81e0-23b02db259d2',
    name: 'Auer and Sons',
    price: 5.24,
    description: 'Harum natus qui.',
  },
  {
    id: '5faf7a1e-3a6e-47df-9d36-4aa4a4f11055',
    name: 'Mohr - Heidenreich',
    price: 3.79,
    description: 'Sed quae magnam sit iusto.',
  },
  {
    id: 'aa775bf7-541e-40f5-897c-3d1884b45de0',
    name: 'Treutel, Gerlach and Haag',
    price: 7.86,
    description: 'Porro fuga minus at eveniet harum eos maiores aut sit.',
  },
]
const wines = [
  {
    id: '8d73e395-a3f3-4a8c-bbfd-cee72e3504da',
    name: 'Jacobs and Sons',
    price: 2.05,
    description: 'In aperiam dolorem.',
  },
  {
    id: '0e1c3f17-4f98-488c-830a-0cb9e824890a',
    name: 'Murphy, Pfannerstill and Von',
    price: 3.81,
    description: 'A ut cumque voluptatem rerum eos fugit ut laborum magnam.',
  },
  {
    id: '3bd09a1a-8c13-4ac3-90ee-de0e3e28c253',
    name: 'Kling - Mertz',
    price: 4.76,
    description: 'Velit dolor quasi amet eveniet repellendus sint.',
  },
  {
    id: 'afb50df3-cee1-4889-b32d-6c0e4393ec56',
    name: 'Feil - Weissnat',
    price: 4.6,
    description: 'Id iure laborum ipsum.',
  },
  {
    id: 'b032d8e0-e900-432e-a907-cf6f786cc6bc',
    name: 'Nienow - Mayert',
    price: 1.59,
    description: 'Quia et ea eligendi excepturi nihil.',
  },
]
const spirits = [
  {
    id: 'f1c61fe2-eb0f-440b-9ef1-5ae95aa77414',
    name: 'Mueller - Thompson',
    price: 9.46,
    description: 'Perferendis laborum consequuntur.',
  },
  {
    id: '620b5953-5fe0-42c2-8932-8ea9bce0bc50',
    name: 'Anderson, Murazik and White',
    price: 6.93,
    description: 'Dicta dolor accusantium a ea suscipit voluptate.',
  },
  {
    id: '4f3d1c41-50a6-4264-ac3a-2241d5215dab',
    name: 'Willms Inc',
    price: 7.83,
    description: 'Illo itaque animi at maxime recusandae voluptate corporis nobis aut.',
  },
  {
    id: 'f82c1733-a18d-468d-a019-c11979853d20',
    name: 'Gleason - Hills',
    price: 9.23,
    description: 'Qui voluptas in in consequatur aspernatur non sint.',
  },
  {
    id: 'e52722a7-cd25-4bcf-bd81-41ef679d4885',
    name: 'Cronin Inc',
    price: 1.01,
    description: 'Ut doloribus vero quidem.',
  },
]
const softDrinks = [
  {
    id: '2cd06492-32d1-422a-b013-e80528f27db1',
    name: 'Multi-layered high-level capacity',
    price: 6.48,
    description: 'Dolorem quibusdam ut necessitatibus quia ad suscipit non.',
  },
  {
    id: '10a4dc70-d71d-4bc4-b53f-ebd44779a480',
    name: 'Distributed exuding portal',
    price: 1.87,
    description: 'Ut dolorem dolor recusandae suscipit sunt error ratione voluptas.',
  },
  {
    id: 'b5a36120-fb09-4e74-8184-534e1aa78160',
    name: 'Profound system-worthy benchmark',
    price: 3.21,
    description: 'Quod ut maxime impedit expedita.',
  },
  {
    id: 'c049d8f7-3853-4bb1-b18b-98fcabbd55bf',
    name: 'Exclusive empowering functionalities',
    price: 5.75,
    description: 'Deserunt cumque molestiae itaque.',
  },
  {
    id: '316bbdd9-e656-4623-a278-a5677a4f9f9a',
    name: 'Automated bifurcated neural-net',
    price: 9.77,
    description: 'Est nisi consectetur libero laborum qui aut autem.',
  },
]
const snacks = [
  {
    id: '7a482bbe-3a73-47e6-99c1-b21c415c775e',
    name: 'Focused multi-tasking utilisation',
    price: 2.55,
    description: 'Pariatur consectetur sapiente quae aliquid ipsa blanditiis earum veniam.',
  },
  {
    id: '85fbc6a6-b233-48ec-83aa-f0b58a8082c2',
    name: 'Cross-platform upward-trending productivity',
    price: 7.17,
    description: 'Maiores illo consequatur est velit totam odio neque.',
  },
  {
    id: '8a1c534b-53af-47bb-843e-3fc497148387',
    name: 'Decentralized intangible superstructure',
    price: 4.47,
    description: 'Blanditiis iusto animi quia et incidunt soluta inventore et molestiae.',
  },
  {
    id: '2a23f913-32f9-4a9a-9556-cf493777b57f',
    name: 'Streamlined background knowledge user',
    price: 2.6,
    description: 'Cupiditate laboriosam fugiat quos numquam dolor qui consequatur.',
  },
  {
    id: '5c3c600e-4949-47fe-8e9a-d37ce4d24f55',
    name: 'Expanded content-based website',
    price: 9.77,
    description: 'Harum optio qui distinctio beatae aut occaecati animi eligendi accusamus.',
  },
]

const allProducts = [
  ...beers,
  ...wines,
  ...spirits,
  ...softDrinks,
  ...snacks,
]

const withoutDetail = R.map(R.pick(['id', 'name']))

const productsByCategory = {
  'defcf2ed-a579-427e-a211-5a25e7cb623e': withoutDetail(beers),
  'a5c0034f-63f5-4423-92e9-91d91957fda8': withoutDetail(wines),
  'e44b29a2-10da-4f62-84a5-7d23a28bf209': withoutDetail(spirits),
  '227cfc6b-01f7-4499-8651-9dae8d2c1e7c': withoutDetail(softDrinks),
  '282c1a39-efdb-460b-b252-6926a78af5b3': withoutDetail(snacks),
}

const productsById = allProducts.reduce(
  (table, product) => R.assoc(product.id, product, table),
  {}
)

const listCategories = () => categories

const listProducts = (categoryId, cursor = 0) => {
  const pageSize = 2
  const all = productsByCategory[categoryId]
  const limit = cursor + pageSize
  const result = all.slice(cursor, cursor + pageSize)
  const nextCursor = result.length < pageSize ? null : limit
  return {
    result,
    nextCursor,
  }
}

const getProduct = id =>
  productsById[id]

module.exports = {
  listCategories,
  listProducts,
  getProduct,
}
