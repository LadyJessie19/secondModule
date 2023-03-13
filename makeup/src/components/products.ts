type ProductsType = {
    id: number,
    name: string,
    photo: string,
    price: number
}

const products:ProductsType[] = [
    {
        id: 1,
        name: "Base Maybelline",
        photo: 'https://www.2beauty.com.br/blog/wp-content/uploads/2016/05/maybelline1.jpg',
        price: 24.99
    },
    {
        id: 2,
        name: "Batons Sephora",
        photo: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwc85a81cd/images/Color%20BR/SC/OPTIMIZE/optimize%20abril/410069_5_SEPHORA_ROUGE_MATTE_COMPO_07_2024_1000px.jpg?sw=556&sh=680&sm=fit',
        price: 18.99
    },
    {
        id: 3,
        name: "Corretivo MaryKay",
        photo: 'https://pimg.amr.marykaycdn.com/HeroZoom/10000/10139826-CorretivoYellow.jpg',
        price: 15.99
    },
    {
        id: 4,
        name: "Kajal Sephora",
        photo: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw54af295d/images/hi-res-BR/_69D6F1C6-DDF5-435F-A8F0-90ACDC591ABD__Colossal-Kajal_500px.jpg?sw=556&sh=680&sm=fit',
        price: 33.99
    },
    {
        id: 5,
        name: "Prime - Loreal",
        photo: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/523037-500-500/revitalift-blur-magico-l-oreal-paris-aperfeicoador-da-pele--1-.jpg?v=638053538394100000',
        price: 9.99
    },
    {
        id: 6,
        name: "Quem disse, Berenice - Paleta de sombras",
        photo: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/Q73899/Paleta-de-Sombras-Adoro-Roses-12g_Q73899_Semiaberto_.jpg',
        price: 12.99
    },
    {
        id: 7,
        name: "Kit esponjinhas",
        photo: 'https://fashionbiju.vteximg.com.br/arquivos/ids/167557-1000-1000/IMG_4411-removebg-preview.png?v=637412329079370000',
        price: 12.99
    },
    {
        id: 8,
        name: "Kit pinceis",
        photo: 'https://m.media-amazon.com/images/I/51Swly4kZVL._AC_SX425_.jpg',
        price: 45.99
    },
]

export default products