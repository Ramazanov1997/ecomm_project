import { makeAutoObservable } from "mobx"
import _ from 'lodash';

import product_image_1 from '../images/products/product_1.png'

// import msi_laptop_1 from '../images/products/msi_laptop_1.png' 

// import msi_dekstop_1 from '../images/products/msi_dekstop_1.png'



// msi latops 27
// msi dekstops 463
// msi monitors 619
// msi headphones 772
// msi motherboards 953

class Product {
    counter = 0
    Filterpage = ""
    filteredProductsArr = []

    cart = []

    productIdProps = null

    isLogin = true
    isAdmin = false

    msi_laptops = [
        {
            id: 1,
            name: 'MSI Modern 14 B11MOU',
            category: 'laptop',
            price: 440,
            old_price: 600,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I3-1115G4',
                ram: 8,
                ssd: 256,
                display: 14,
                display_hz: '60 hz',
                video_card: 'UHD Graphics Xe G4 48EUs'
            }
        },
        {
            id: 2,
            name: 'MSI Thin GF63 12VE',
            price: 1070,
            old_price: 1300,
            image: 'https://cdn.citilink.ru/kobZKB224EoJSghU71KoAeAndy4OkmrHQ6VVwj5Q0S0/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/a74fe01d-6483-43a8-aef2-de25e5ef14fb.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-12450H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4050'
            }
        },
        {
            id: 3,
            name: 'MSI GF63 Thin 11UC',
            price: 880,
            old_price: 1080,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/0d62166e4bdd58c7ec05422239661f99/5022d7cc914b8eb792155c71ba77be58618598e28b1a528f64eb31932a9bfca8.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-11400H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 3050'
            }
        },
        {
            id: 4,
            name: 'MSI Katana GF66 11UC',
            price: 1270,
            old_price: 1500,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3c1da5b0d40f6f72b1293d4b1fa617f7/f6b7920246f54a4dbf45543f41dd93d4053c2cc6cf66ae57e9a2fc9116688272.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-11400H',
                ram: 16,
                ssd: 512,
                display: 17.3,
                display_hz: 144,
                video_card: 'RTX 3050'
            }
        },
        {
            id: 5,
            name: 'MSI Thin GF63 12VF',
            price: 1085,
            old_price: 1200,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/a6109f2cda6cfedc97559f8986598674/f494f6d28cec9cd84e5fc9157ea88f4b197c2828768bd3626b6f6a04d9427322.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-12450H',
                ram: 16,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4060'
            }
        },
        {
            id: 6,
            name: 'MSI Katana 15 B12VFK',
            price: 1400,
            old_price: 1500,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/491a8ae821c1c31ad0364a6421d52e90/ab5ec9f53950677cdc29656f3bf87a82aed1db13f4895ec11bd14b2f593a82a0.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-12450H',
                ram: 16,
                ssd: 1024,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4060'
            }
        },
        {
            id: 7,
            name: 'MSI Cyborg 15 A12VF',
            price: 1400,
            old_price: 1600,
            image: 'https://storage-asset.msi.com/global/picture/image/feature/nb/Cyborg15-A13V/images/cyborg-gpu-laptop.png',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-12450H',
                ram: 16,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4060'
            }
        },
        {
            id: 8,
            name: 'MSI Katana GF66 12UD',
            price: 990,
            old_price: 1100,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3c1da5b0d40f6f72b1293d4b1fa617f7/f6b7920246f54a4dbf45543f41dd93d4053c2cc6cf66ae57e9a2fc9116688272.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-12700H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 3050 Ti'
            }
        },
        {
            id: 9,
            name: 'MSI Katana GF76 12UEOK',
            price: 1290,
            old_price: 1400,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3a29b5d1238435da2fc879cfe3d5d599/bd6547111327deddda01ab3927ae405fa3345c8d90923148ad2a0361d659c934.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-12700H',
                ram: 16,
                ssd: 512,
                display: 17.3,
                display_hz: 144,
                video_card: 'RTX 3060'
            }
        },
        {
            id: 10,
            name: 'MSI Summit E16 Flip Evo A12MT',
            price: 1500,
            old_price: 1700,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d92eddcf6ded840871a41e8bda2aa22b/bc135067ced39e9354790760265959c58a8082af90b85b498b74287c18abf657.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-1280P',
                ram: 16,
                ssd: 1024,
                display: 16,
                display_hz: 165,
                video_card: 'integrated'
            }
        },
        {
            id: 11,
            name: 'MSI Pulse 15 B13VFK',
            price: 1300,
            old_price: 1500,
            image: 'https://cdn.citilink.ru/ymhUu4b0S4Hz4ZvrM9P-LObDJped74hq1X466cZBk5c/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/ee8e08b2-012d-43ec-963b-638da930a915.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-13620H',
                ram: 32,
                ssd: 1024,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4060'
            }
        },
        {
            id: 12,
            name: 'MSI Katana 17 B12VFK',
            price: 1300,
            old_price: 1400,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/fa8429dae6573ef848a64d9a1e7a0719/7bfc873a6409937233f4d9bd2d5c4e198ada4ac7f194b13e4c38ee905569d899.jpg.webp',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-12650H',
                ram: 16,
                ssd: 1024,
                display: 17.3,
                display_hz: 144,
                video_card: 'RTX 4060'
            }
        },
        {
            id: 13,
            name: 'MSI Pulse 15 B13VGK',
            price: 2750,
            old_price: 3000,
            image: 'https://akyol.com.tm/image/cache/catalog/Notebook/MSI/PULSE/MSI%20PULSE%2015%20B13VGK/MSI%20PULSE%2015%20B13VGK_2_1000x1000-1000x1000.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-13620H',
                ram: 8,
                ssd: 1024,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4070'
            }
        },
        {
            id: 14,
            name: 'MSI Pulse 15 B13VGK',
            price: 3000,
            old_price: 3150,
            image: 'https://akyol.com.tm/image/cache/catalog/Notebook/MSI/PULSE/MSI%20PULSE%2015%20B13VGK/MSI%20PULSE%2015%20B13VGK_2_1000x1000-1000x1000.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-13620H',
                ram: 8,
                ssd: 1024,
                display: 15.6,
                display_hz: 144,
                video_card: 'RTX 4070'
            }
        },
        {
            id: 15,
            name: 'MSI Raider GE78HX 13VH',
            category: 'laptop',
            price: 4025,
            old_price: 4200,
            image: 'https://e-katalog.kz/jpg_zoom1/2385712.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13950HX ',
                ram: 32,
                ssd: 1024,
                display: 17.3,
                display_hz: '240 hz',
                video_card: 'RTX 4080'
            }
        },
        {
            id: 16,
            name: 'MSI Katana 15 B13VGK',
            category: 'laptop',
            price:  1200,
            old_price: 1300,
            image: 'https://e-katalog.kz/jpg_zoom1/2479782.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13900H',
                ram: 16,
                ssd: 1024,
                display: 15.6,
                display_hz: '144 hz',
                video_card: 'RTX 4070'
            }
        },
        {
            id: 17,
            name: 'MSI Raider GE68HX 13VF',
            category: 'laptop',
            price: 1800,
            old_price: 1900,
            image: 'https://e-katalog.kz/jpg_zoom1/2385749.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13950HX',
                ram: 32,
                ssd: 1024,
                display: 16,
                display_hz: '144 hz',
                video_card: 'RTX 4060'
            }
        },
        {
            id: 18,
            name: 'MSI Vector GP77 13VG',
            category: 'laptop',
            price: 2700,
            old_price: 2850,
            image: 'https://e-katalog.kz/jpg_zoom1/2416720.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13700H',
                ram: 32,
                ssd: 1024,
                display: 17.3,
                display_hz: '240 hz',
                video_card: 'RTX 4070'
            }
        },
        {
            id: 19,
            name: 'MSI Stealth 17 Studio A13VH',
            category: 'laptop',
            price: 3620,
            old_price: 3800,
            image: 'https://e-katalog.kz/jpg_zoom1/2385754.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13900H',
                ram: 32,
                ssd: 1024,
                display: 17.3,
                display_hz: '240 hz',
                video_card: 'RTX 4080'
            }
        },
        {
            id: 20,
            name: 'MSI Raider GE68HX 13VG',
            category: 'laptop',
            price: 2400,
            old_price: 2550,
            image: 'https://e-katalog.kz/jpg_zoom1/2385748.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13980HX',
                ram: 32,
                ssd: 1024,
                display: 16,
                display_hz: '240 hz',
                video_card: 'RTX 4070'
            }
        },
        {
            id: 21,
            name: 'MSI Raider GE78HX 13VH',
            category: 'laptop',
            price: 3000,
            old_price: 3200,
            image: 'https://e-katalog.kz/jpg_zoom1/2385712.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I9-13950HX',
                ram: 32,
                ssd: 1024,
                display: 17.3,
                display_hz: '240 hz',
                video_card: 'RTX 4080'
            }
        },
        {
            id: 22,
            name: 'MSI Bravo 15 B5DD',
            category: 'laptop',
            price: 1050,
            old_price: 1190,
            image: 'https://cdn.citilink.ru/D0sFqNEs1UPqN-y8evAJUNWPQC8cMvUDVTN3u5ggRn0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/8df2ba04-f12a-4088-8367-36fbf5966dab.jpg',
            characteristic: {
                processer: 'amd',
                processer_model: 'Ryzen5-5600H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RX 5500M'
            }
        },
        {
            id: 23,
            name: 'MSI Alpha 15 B5EEK',
            category: 'laptop',
            price: 1400,
            old_price: 1600,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/ee91dd5bfa137b9a20d575fbfd923c46/96d216b34d48b8d202db8f9fe9caca69fceedb13ff5c336cd89be42d14cf6d46.jpg.webp',
            characteristic: {
                processer: 'amd',
                processer_model: 'Ryzen5-5600H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RX 6600M'
            }
        },

        {
            id: 24,
            name: 'MSI Bravo 15 B5DD',
            price: 1100,
            old_price: 1200,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2622605317a3be8a34b2c59c2898de2a/45d131b976f9c90e7d47156974d75a013c521487bc1c1da1104fd2c78800817c.jpg.webp',
            characteristic: {
                processer: 'amd',
                processer_model: 'Ryzen5-5600H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RX 5500M'
            }
        },
        {
            id: 25,
            name: 'MSI Alpha 15 B5EEK',
            price: 0,
            old_price: 0,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/165d07bef3c3004cd53013f22db11070/96d216b34d48b8d202db8f9fe9caca69fceedb13ff5c336cd89be42d14cf6d46.jpg.webp',
            characteristic: {
                processer: 'amd',
                processer_model: 'Ryzen5-5600H',
                ram: 8,
                ssd: 512,
                display: 15.6,
                display_hz: 144,
                video_card: 'RX 6600M'
            }
        },
        {
            id: 26,
            name: 'MSI Bravo 17 C7VE',
            category: 'laptop',
            price: 1600,
            old_price: 1750,
            image: 'https://cdn.citilink.ru/Hz0IvruarKRPRHvrFTwHNnOkIat1mFlPK9eo_RIBdB8/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/ac1dbc6d-892c-4070-9094-57c35371cb96.jpg',
            characteristic: {
                processer: 'amd',
                processer_model: 'Ryzen7-7535HS',
                ram: 16,
                ssd: 512,
                display: 17.3,
                display_hz: 144,
                video_card: 'RTX 4050'
            }
        },
        {
            id: 27,
            name: 'MSI Bravo 17 C7VE',
            price: 2100,
            old_price: 2300,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/95f4c21322c82572a8270602ae176d38/91c62bc133c06e02e037fe69de10c4ce37674ac5fe4e32c98f8236cc6093432f.jpg.webp',
            characteristic: {
                processer: 'amd',
                processer_model: 'Ryzen7-7535HS',
                ram: 16,
                ssd: 512,
                display: 17.3,
                display_hz: 144,
                video_card: 'RTX 4050'
            }
        },

    ]



    msi_dekstops = [
        {
            id: 21,
            name: 'MSI Infinite 11SI-1611XRU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/_5uYwUwybRVvCDl4opQlRv0DcNnja60cqCiBtDsc-i4/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/0746fb6a-347d-47fa-b548-787ccae3b0f5.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-11400F',
                motherboard: 'z590',
                ram: 16,
                ssd: 512,
                video_card: 'GTX 1660 Super',
                block_power: 500,
                type_ram: 'ddr4'
            }
        },
        {
            id: 22,
            name: 'MSI PRO DP130 12-477XRU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/4Aov_Q8to1s-txLa-Y8pHUnqhycfBCGWRwd7Hu7-4F4/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/0dc9f7a2-737e-4956-be73-e6d4603e606f.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-12400',
                motherboard: 'H610',
                ram: 8,
                ssd: 256,
                video_card: 'integrated',
                block_power: 350,
                type_ram: 'ddr4'
            }
        },
        {
            id: 23,
            name: 'MSI trident 3 13TC-069RU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/JeLdcRdDP3rR5sozY5_L81DLtZCcyKslLkXuz0F3VkI/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/3b83f77e-6ce5-4607-8af1-85f08362795a.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I7-13700F',
                motherboard: 'H610',
                ram: 16,
                ssd: 1024,
                video_card: 'RTX 3060',
                block_power: 330,
                type_ram: 'ddr4'
            }
        },
        {
            id: 24,
            name: 'MSI Pro DP130 12RK-474RU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/vJr0mtKn9OVw6dP-CCxZJ_VeB5WoQds4aob0nSqkCZo/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/cba02278-a07a-469c-bc56-4fdcf6c8bc28.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-12400F',
                motherboard: 'z590',
                ram: 8,
                ssd: 512,
                video_card: 'GT 1030',
                block_power: 350,
                type_ram: 'ddr4'
            }
        },
        {
            id: 25,
            name: 'MSI infinite S3 13TC-678RU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/fYMMImy03VdUxhclCfZYTU-dwLiQG5yoxHB5vIQVcUY/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/f49d19a8-1441-45c6-9aef-185c748aedd4.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-13400F',
                motherboard: 'H610',
                ram: 16,
                ssd: 1024,
                video_card: 'RTX 3060',
                block_power: 500,
                type_ram: 'ddr4'
            }
        },
        {
            id: 26,
            name: 'MSI Trident 3 A 11SI-077XRU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/CprZKXOE_LBqB3KoV7IU0wCLIgPY9AwwDVlmKOKORFU/resizing_type:fit/gravity:sm/width:400/height:400/plain/items/1618181_v01_b.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-1400F',
                motherboard: 'z590',
                ram: 16,
                ssd: 512,
                video_card: 'GTX 1660 Super',
                block_power: 230,
                type_ram: 'ddr4'
            }
        },
        {
            id: 27,
            name: 'MSI Pro DP20ZA 5M-217RU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/oTOZ372sambeFZG6SP_M9zBM1WgRS7shSGtUf6qastE/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/05ea2045-566d-4b96-8d2f-6736f2d74ff9.jpg',
            characteristic: {
                processer: 'Ryzen',
                processer_model: '5 5600g',
                motherboard: 'B300',
                ram: 8,
                ssd: 512,
                video_card: 'integrated',
                block_power: 230,
                type_ram: 'ddr4'
            }
        },
        {
            id: 28,
            name: 'MSI Infinite 11TH-1610XRU',
            category: 'dekstop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/sVXTXDgok5LsjIF6NXqYtjLx0YvJBN9daCkOGr0E2r0/resizing_type:fit/gravity:sm/width:400/height:400/plain/items/1794761_v01_b.jpg',
            characteristic: {
                processer: 'intel',
                processer_model: 'I5-11400F',
                motherboard: 'H510',
                ram: 16,
                ssd: 1024,
                video_card: 'RTX 3050',
                block_power: 500,
                type_ram: 'ddr4'
            }
        },
        {
            id: 29,
            name: 'MSI Codex 5 11SI-851RU',
            category: 'desktop',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/LtMVsGx62W91-DG0XTLLimZSvZl7hjNoNsKeR5H_O28/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/9d4e6dba-ff1b-4046-b29c-0a18f1b42d5f.jpg',
            characteristic: {
                processer: 'Intel',
                processer_model: 'I5-11400F',
                motherboard: 'B300',
                ram: 16,
                ssd: 512,
                video_card: 'GTX 1660 Super',
                block_power: 500,
                type_ram: 'ddr4'
            }
        },
    ]

    msi_monitors = [
        {
            id: 1,
            name: 'MSI Optix G2412',
            price: 190,
            old_price: 250,
            image: 'https://c.dns-shop.kz/thumb/st1/fit/0/0/28f70f107fea4e7fa2d85fc4940f2280/4ab89ff6f56559fadb6945590251624f08ffb968b77e88151d438ba8fc6462e0.jpg.webp',
            characteristic: {
                response_time: '1ms',
                display: 23.8,
                display_hz: 170,
                matrix: 'IPS',
                resolution: '1920x1080',
                color_depth: '8 bit',
                brightness: 250

            },
        },
        {
            id: 2,
            name: 'MSI Optix G24C4',
            price: 200,
            old_price: 250,
            image: 'https://c.dns-shop.kz/thumb/st4/fit/0/0/8ce1eb9b9294bd5a7abc583c788e675e/3e3f2534117df79e31297e37c9c99b46f8cf5c787aceff6f09223a1bf776de01.jpg.webp',
            characteristic: {
                response_time: '1ms',
                display: 24,
                display_hz: 144,
                matrix: 'VA',
                resolution: '1920x1080',
                color_depth: '8 bit',
                brightness: 250
            },
        },
        {
            id: 3,
            name: 'MSI Pro MP242V',
            price: 120,
            old_price: 200,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/875db7972c9387922e90a38fe43ac0b3/c60a2ed8a8d2acb6b1957ca395f4a66578c3aa89f070b4bb9b76862709a1d966.png.webp',
            characteristic: {
                response_time: '5ms',
                display: 23.8,
                display_hz: 75,
                matrix: 'IPS',
                resolution: '1920x1080',
                color_depth: '6 bit+FRC',
                brightness: 250
            },
        },
        {
            id: 4,
            name: 'MSI Pro MP241X',
            price: 130,
            old_price: 200,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3794a3765cefd85e76eb47f23c1964d0/78c2737bd0f85d00bc4d9b007ffa4cea5f5c08e3ebf23c3a5fe8db68faf64a17.jpg.webp',
            characteristic: {
                response_time: '4ms',
                display: 23.8,
                display_hz: 75,
                matrix: 'IPS',
                resolution: '1920x1080',
                color_depth: '8 bit',
                brightness: 220
            },
        },
        {
            id: 5,
            name: 'MSI PRO MP273A',
            price: 140,
            old_price: 190,
            image: 'https://storage-asset.msi.com/global/picture/product/product_16946568566f9c800be924943d057187d687073e79.png',
            characteristic: {
                response_time: '4ms',
                display: 27,
                display_hz: 100,
                matrix: 'IPS',
                resolution: '1920x1080',
                color_depth: '6 bit + FRC',
                brightness: 300
            },
        },
        {
            id: 6,
            name: 'MSI PRO MP243X',
            price: 110,
            old_price: 180,
            image: 'https://storage-asset.msi.com/global/picture/product/product_16950225027023f9e0e5f86cdb7e4d8de73e468b1b.png',
            characteristic: {
                response_time: '4ms',
                display: 23.8,
                display_hz: 100,
                matrix: 'IPS',
                resolution: '1920x1080',
                color_depth: '8 bit',
                brightness: 250
            },
        },
        {
            id: 7,
            name: 'MSI Optix G27CQ4E2',
            price: 270,
            old_price: 300,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/f8066380ae26d621a7b9c4724642b968/4269a0aee38cb43fbcbab268dc3369950dbb2a9b7e05d55919932f6f9a650480.jpg.webp',
            characteristic: {
                response_time: '4ms',
                display: 27,
                display_hz: 170,
                matrix: 'VA',
                resolution: '2560x1440',
                color_depth: '8 bit',
                brightness: 250
            },
        },
        {
            id: 8,
            name: 'MSI PRO MP243',
            price: 100,
            old_price: 150,
            image: 'https://storage-asset.msi.com/global/picture/product/product_16902717792b529f0d2c26807d73bcd46bf9c45ee2.png',
            characteristic: {
                response_time: '5ms',
                display: 23.8,
                display_hz: 75,
                matrix: 'IPS',
                resolution: '1920x1080',
                color_depth: '8 bit',
                brightness: 250
            },
        },
        {
            id: 9,
            name: 'MSI Optix G274QPX',
            price: 610,
            old_price: 700,
            image: 'https://storage-asset.msi.com/global/picture/product/product_168179964345fcf73eda69b642a3c5426f30e53ae1.png',
            characteristic: {
                response_time: '1ms',
                display: 27,
                display_hz: 240,
                matrix: 'IPS',
                resolution: '2560x1440',
                color_depth: '8 bit + FRC',
                brightness: 400
            },
        },
        {
            id: 10,
            name: 'MSI Optix MPG321UR-QD',
            price: 500,
            old_price: 600,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/304af2c819343725cbb8a5688bb796f1/3e4cd86cfad807ab037353026953c63a12f25a8b87145327a0c8e6b6fa6ae41f.jpg.webp',
            characteristic: {
                response_time: '4ms',
                display: 32,
                display_hz: 144,
                matrix: 'QLED',
                resolution: '3840x2160',
                color_depth: '10 bit',
                brightness: 600
            },
        }
    ]
    msi_headphones = [

        {
            id: 1,
            name: 'MSI Immerse GH20',
            price: 0,
            old_price: 0,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/0ba7ab7acffba27ac4af8bae1535c0c7/1db25b2f38757bcd3c79c888f4e09d999aa955674b32355289fdc66d0f59e305.jpg.webp',
            characteristic: {
                design: 'invoices',
                sound: 'stereo',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '95dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 2,
            name: 'MSI DS502',
            price: 0,
            old_price: 0,
            image: 'https://cdn.citilink.ru/uj_T9mg8cynHOmM3Idm1ll7ge9r8oO3XUFDzetc5Yqw/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/94ab5b38-70fc-4a47-8867-11525134712d.jpg',
            characteristic: {
                design: 'invoices',
                sound: '7.1 (virtual)',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '105dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 3,
            name: 'MSI Immerse GH50',
            price: 0,
            old_price: 0,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/784a505771261ce5a4ff8c173affa7f7/d98308be98e95dd546c8f5fbb3797db8fa85023e0226d365b177654bc26b407c.jpg.webp',
            characteristic: {
                design: 'invoices',
                sound: 'stereo',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '109dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 4,
            name: 'MSI Immerse GH30',
            price: 0,
            old_price: 0,
            image: 'https://asset.msi.com/resize/image/global/product/product_0_20190708133832_5d22d6d8872aa.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
            characteristic: {
                design: 'invoices',
                sound: 'stereo',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '96dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 5,
            name: 'MSI Immerse GH61',
            price: 0,
            old_price: 0,
            image: 'https://asset.msi.com/resize/image/global/product/product_0_20200925101736_5f6d53407b9a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
            characteristic: {
                design: 'invoices',
                sound: '7.1 (virtual)',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–40000hz',
                sensitivity: '107dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 6,
            name: 'MSI Immerse GH60',
            price: 0,
            old_price: 0,
            image: 'https://asset.msi.com/resize/image/global/product/product_1_20180328134143_5abb2b17386e8.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
            characteristic: {
                design: 'invoices',
                sound: 'stereo',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–40000hz',
                sensitivity: '96dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 7,
            name: 'MSI DS502 Gaming',
            price: 0,
            old_price: 0,
            image: 'https://asset.msi.com/resize/image/global/product/product_8_20180328133931_5abb2a93942a5.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
            characteristic: {
                design: 'invoices',
                sound: '7.1 (virtual)',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '105dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 7,
            name: 'MSI Immerse GH40',
            price: 0,
            old_price: 0,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/ebb3919e0b7ee78e4bc5ebb898333d03/043f829db490692ef6a34ade97ca6ea3cafb6f42c1d26ea002a3e11e755cd696.jpg.webp',
            characteristic: {
                design: 'invoices',
                sound: '7.1 (virtual)',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '95dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 7,
            name: 'MSI DS501',
            price: 0,
            old_price: 0,
            image: 'https://avatars.mds.yandex.net/i?id=f9e5ab0d53f96db7b03da707d1a41ee0ee22a887-10639406-images-thumbs&n=13',
            characteristic: {
                design: 'invoices',
                sound: 'stereo',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '97dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 8,
            name: 'MSI Immerse GH10 Gaming',
            price: 0,
            old_price: 0,
            image: 'https://asset.msi.com/resize/image/global/product/product_9_20180328134123_5abb2b03bbdc7.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
            characteristic: {
                design: 'intracanal',
                sound: 'stereo',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–20000hz',
                sensitivity: '85dB',
                impedance: '16-Ohm',
                type_of_emitters: 'dynamic'
            }
        },
        {
            id: 9,
            name: 'MSI Immerse GH70',
            price: 0,
            old_price: 0,
            image: 'https://asset.msi.com/resize/image/global/product/product_4_20180328134207_5abb2b2f056b3.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
            characteristic: {
                design: 'invoices',
                sound: '7.1 (virtual)',
                microphone: 'yes',
                connection_type: 'wired',
                frequency_range: '20–40000hz',
                sensitivity: '100dB',
                impedance: '32-Ohm',
                type_of_emitters: 'dynamic'
            }
        },


    ]
    msi_motherboard = [
        {
            id: 1,
            name: 'MSI PRO Z690-A WIFI',
            price: 190,
            old_price: 250,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a80a97a045bf77f39e32199337cd5b09/8c8ca8d825e24b59a088b20f030a399209acd556d9c7d34f975191d52c2181e8.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'Z690',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 6400,
                audio_chip: 'Realtek ALC897'
            }
        },
        {
            id: 2,
            name: 'MSI MPG Z490 GAMING PLUS',
            price: 150,
            old_price: 250,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/201956440051e1e724b0a19d20e2da53/a62d113ee137aa488ef20b4f4ab55b9a59f9f679cde299736ab0052af6cb71af.png.webp',
            characteristic: {
                socket: 'Intel-LGA1200',
                chipset: 'Z490',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'ATX',
                max_ram_hz: 4800,
                audio_chip: 'Realtek ALC1200-VD1'
            }
        },
        {
            id: 3,
            name: 'MSI PRO B760-P WIFI DDR4',
            price: 170,
            old_price: 220,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/1ba7ebd9133938ccc1a033b112bc6ca6/3941367b688fd3318efd6c31c96ff1b17a937f7d2370546bcf924dae6f00f0e3.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'B760',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'ATX',
                max_ram_hz: 5333,
                audio_chip: 'Realtek ALC897'
            }
        },
        {
            id: 4,
            name: 'MSI PRO Z790-A WIFI DDR5',
            price: 290,
            old_price: 360,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/5a3b527b1460c7d98a033ec2767f0ba8/25aa038893fa7ef3922634c206ff1fe725c25a862c049e6049e8afcdae228483.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'Z790',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 7200,
                audio_chip: 'Realtek ALC4080'
            }
        },
        {
            id: 5,
            name: 'MSI MAG Z790 TOMAHAWK WIFI DDR5',
            price: 320,
            old_price: 470,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/9da7700354de1053bb245cbf03f6e49d/1236dd874c3c7820f259b00db2ef902196ce348adad5bd8896c8f5f3ba2eabb8.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'Z790',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 7200,
                audio_chip: 'Realtek ALC4080'
            }
        },
        {
            id: 6,
            name: 'MSI PRO H610M-E DDR4',
            price: 90,
            old_price: 120,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/1033cb52d304efc28e16154ddaf91199/42b825362ccf8279b9369bce65f661ba05014e6da6ed6681f4c3715c622ea2b2.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'H610',
                max_ram: 2,
                type_ram: 'DDR4',
                form_factor: 'micro-ATX',
                max_ram_hz: 3200,
                audio_chip: 'Realtek ALC897'
            }
        },
        {
            id: 7,
            name: 'MSI MPG Z790 CARBON WIFI',
            price: 490,
            old_price: 550,
            image: 'https://c.dns-shop.kz/thumb/st1/fit/500/500/bef434572a89c672f5e4235581ceea53/aaa9420f72b3e66f014e3d0e6919f7134475459983e6547d4478d9db6e8626eb.png.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'Z790',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 7600,
                audio_chip: 'Realtek ALC4080'
            }
        },
        {
            id: 8,
            name: 'MSI PRO Z790-P WIFI DDR5',
            price: 250,
            old_price: 300,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/bef434572a89c672f5e4235581ceea53/aaa9420f72b3e66f014e3d0e6919f7134475459983e6547d4478d9db6e8626eb.png.webp',
            characteristic: {
                socket: 'Intel-LGA1700',
                chipset: 'Z790',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 7000,
                audio_chip: 'Realtek ALC897'
            }
        },
        {
            id: 9,
            name: 'MSI B560M PRO-E',
            price: 90,
            old_price: 120,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/056b635f608d404211f0890f48b27c9a/5645a39e34c60afc0628ae39df32bd0e4aff4bd5cb7cb523bf41dbc08257d23b.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1200',
                chipset: 'B560',
                max_ram: 2,
                type_ram: 'DDR4',
                form_factor: 'micro-ATX',
                max_ram_hz: 4800,
                audio_chip: 'Realtek ALC4080'
            }
        },
        {
            id: 10,
            name: 'MSI Z490-A PRO',
            price: 110,
            old_price: 170,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/5f4462e2e131f06f27989c61ce54677d/d2506224fb1b65c592b9e49c320a68f8eb6cf269ad4086094059fe3a9e6b7f62.jpg.webp',
            characteristic: {
                socket: 'Intel-LGA1200',
                chipset: 'Z490',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'ATX',
                max_ram_hz: 4800,
                audio_chip: 'Realtek ALC892'
            }
        },
        {
            id: 11,
            name: 'MSI MAG B550 TOMAHAWK',
            price: 160,
            old_price: 200,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/3358b82a68814b0607cca5edc00ebcb7/907bf69866a5592d2a92732fef8e99e4f91d83c3c763c13351dba3b29cfaa5e6.png.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'B550',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'ATX',
                max_ram_hz: 4866,
                audio_chip: 'Realtek ALC1200'
            }
        },
        {
            id: 12,
            name: 'MSI MPG B550 GAMING PLUS',
            price: 160,
            old_price: 220,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/65626ee1400c512d3c9584c15ec983a0/489e1dfb774c68ca8c80a1cd66477739765abc0c00722185d2c1178489ffdec3.png.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'B550',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'ATX',
                max_ram_hz: 4400,
                audio_chip: 'Realtek ALC892'
            }
        },
        {
            id: 13,
            name: 'MSI A320M-A PRO',
            price: 65,
            old_price: 100,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/f9ded1c4f0272c4965b71eb9e03c89d1/8f294b10338291df08061a7370eb823c8686d7e9b7e323d9ef8065a61fbf902c.jpg.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'A320',
                max_ram: 2,
                type_ram: 'DDR4',
                form_factor: 'micro-ATX',
                max_ram_hz: 3200,
                audio_chip: 'Realtek ALC892'
            }
        },
        {
            id: 14,
            name: 'MSI B650 GAMING PLUS WIFI',
            price: 250,
            old_price: 400,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/6b635893ba702e821f3d51d092f79025/f3465b1dd9af53fe73dc06da168b9d1a42ea0530c467065cb097a541a07d152e.jpg.webp',
            characteristic: {
                socket: 'AMD-AM5',
                chipset: 'B650',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 6000,
                audio_chip: 'Realtek ALC897'
            }
        },
        {
            id: 15,
            name: 'MSI MAG B650 TOMAHAWK WIFI',
            price: 295,
            old_price: 330,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/d0fd8baf0a083474fde4c5db6934d0b9/1098a7d88325d218ad4a156029b36ff163be77f64187dd729c48efd129600a8b.jpg.webp',
            characteristic: {
                socket: 'AMD-AM5',
                chipset: 'B650',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 6600,
                audio_chip: 'Realtek ALC4080'
            }
        },
        {
            id: 16,
            name: 'MSI B450M PRO-VDH MAX',
            price: 90,
            old_price: 130,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/7b1936bccadd34c2d3ece20c8123a0b0/92e4bc226d2457bc866eed524bcc7fcde803456f38e8b6ce05d35ef339d12bb1.jpg.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'B450',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'micro-ATX',
                max_ram_hz: 3866,
                audio_chip: 'Realtek ALC892'
            }
        },
        {
            id: 17,
            name: 'MSI MPG X570 GAMING PLUS CARBON WIFI',
            price: 330,
            old_price: 400,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/a520ba4f9000f9c41c7ada4d98786e84/e6d31a68590c70246ed7fbc8d49d1384225cb1f43f9ad50258e057ac2617784a.png.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'X570',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'micro-ATX',
                max_ram_hz: 4400,
                audio_chip: 'Realtek ALC1220'
            }
        },
        {
            id: 18,
            name: 'MSI B550 GAMING GEN3',
            price: 120,
            old_price: 170,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/cab0778a8dba5f7edb62913280e21bb5/8ecdbb6b24b3306206a975d6a475116ede52764c5ead719404e68bb8bec1b20d.jpg.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'B550',
                max_ram: 4,
                type_ram: 'DDR4',
                form_factor: 'ATX',
                max_ram_hz: 4400,
                audio_chip: 'Realtek ALC897'
            }
        },
        {
            id: 19,
            name: 'MSI MAG X670E TOMAHAWK WIFI',
            price: 420,
            old_price: 470,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/ad0d97c4fe36b8154a1a2f145957bdc1/de582a642804d9593c779dec0755f31b92365069831db221d956b521abd2088f.jpg.webp',
            characteristic: {
                socket: 'AMD-AM5',
                chipset: 'X670E',
                max_ram: 4,
                type_ram: 'DDR5',
                form_factor: 'ATX',
                max_ram_hz: 6600,
                audio_chip: 'Realtek ALC1200'
            }
        },
        {
            id: 20,
            name: 'MSI A320M-A PRO',
            price: 65,
            old_price: 90,
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/f9ded1c4f0272c4965b71eb9e03c89d1/8f294b10338291df08061a7370eb823c8686d7e9b7e323d9ef8065a61fbf902c.jpg.webp',
            characteristic: {
                socket: 'AMD-AM4',
                chipset: 'A320',
                max_ram: 2,
                type_ram: 'DDR4',
                form_factor: 'micro-ATX',
                max_ram_hz: 3200,
                audio_chip: 'Realtek ALC892'
            }
        },
    ]


    combinedArray = [
        ..._.cloneDeep(this.msi_motherboard),
        ..._.cloneDeep(this.msi_dekstops),
        ..._.cloneDeep(this.msi_laptops),
        ..._.cloneDeep(this.msi_monitors),
    ];



    constructor() {
        makeAutoObservable(this)
    }

    setFilteredProductsArr(newArr) {
        this.filteredProductsArr = newArr;
    }

    setFilterPage(page) {
        this.Filterpage = page;
    }

    
    setCounter(value) {
        this.counter = value;
    }

}

export default new Product()