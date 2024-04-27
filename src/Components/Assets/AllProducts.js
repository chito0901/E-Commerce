import p1Img from './FootballCuffedBeanie.jpg'
import p2Img from './JordanDriFITJumpman.webp'
import p3Img from './JordanDriFITSports.webp'
import p4Img from './JordanJumpman.webp'
import p5Img from './JordanPeak.webp'
import p6Img from './JordanSports.webp'
import p7Img from './LacrosseEarFlapBeanie.webp'
import p8Img from './MensCherryBlossomTop.webp'
import p9Img from './NikeBrasilia.webp'
import p10Img from './NikeChallenger.webp'
import p11Img from './NikeClub.jpg'
import p12Img from './NikeDNA.webp'
import p13Img from './NikeDriFit.webp'
import p14Img from './NikeHeritage.webp'
import p15Img from './NikeOne.webp'
import p16Img from './NikePrimary.webp'
import p17Img from './NikePro.webp'
import p18Img from './NikeSportswearClubFleece.webp'
import p19Img from './NikeSportswearPhoenixFleet.webp'
import p20Img from './NikeSportswearTech.webp'
import p21Img from './NikeSportswearTechFleece.webp'
import p22Img from './NikeStussy.webp'
import p23Img from './NikeTempo.webp'
import p24Img from './NikeVictory.jpg'
import p25Img from './PulloverClubFleece.webp'
import p26Img from './WNikeSportswearEssentials.webp'
import p27Img from './WomensFullZipHoodie.jpg'
import p28Img from './WomensLongsleeveHolidayTop.webp'
import p29Img from './WomensLongSleeveTop.webp'
import p30Img from './WomensOversizedFullZipHoodieeCape.webp'
import p31Img from './WomensSportswearEssential.webp'
import p32Img from './AirForce107EasyOn.webp'
import p33Img from './AM97p-1.webp'
import p34Img from './JordanHydro8Retro.webp'
import p35Img from './JordanPlay.webp'
import p36Img from './Killshot2Leather.webp'
import p37Img from './NikeVictoriOne.webp'
import p38Img from './Pulse.webp'
import p39Img from './WNikeAirmax.webp'
import p40Img from './WNikeDunkLow.webp'
import p41Img from './WNikeGammaForce.webp'
import p42Img from './WNikePhoenixWaffle.webp'




let allProducts = [
    {
        id: 1,
        name: "Nike Swoosh",
        desc: "Football Cuffed Beanie",
        category: "accessoriesAndEquip",
        image: p1Img,
        price: 30
    },
    {
        id: 2,
        name: "Jordan Dri-FIT Jumpman",
        desc: "Headband",
        category: "accessoriesAndEquip",
        image: p2Img,
        price: 12 
    },
    {
        id: 3,
        name: "Jordan Dri-FIT Sports",
        desc: "Men's Woven Diamond Shorts",
        category: "shorts", 
        image: p3Img,
        price: 55
    },
    {
        id: 4,
        name: "Jordan Jumpman",
        desc: "Men's Short-Sleeve T-Shirt",
        category: "topsAndTees",
        image: p4Img,
        price: 32
    },
    {
        id: 5,
        name: "Jordan Peak",
        desc: "Essential Beanie",
        category: "accessoriesAndEquip",
        image: p5Img,
        price: 32
    },
    {
        id: 6,
        name: "Jordan Sports",
        desc: 'Women\'s 5" Shorts',
        category: "shorts",
        image: p6Img,
        price: 40
    },
    {
        id: 7,
        name: "Nike",
        desc: "Lacrosse Ear Flap Beanie",
        category: "accessoriesAndEquip",
        image: p7Img,
        price: 32
    },
    {
        id: 8,
        name: "Nike Sportswear",
        desc: "Men's Cherry Blossom Top",
        category: "topsAndTees",
        image: p8Img,
        price: 85
    },
    {
        id: 9,
        name: "Nike Brasilia",
        desc: "Training Duffel Bag (Small, 41L)",
        category: "accessoriesAndEquip",
        image: p9Img,
        price: 37
    },
    {
        id: 10,
        name: "Nike Challenger",
        desc: 'Men\'s Dri-FIT 7" Unlined Running Shorts',
        category: "shorts",
        image: p10Img,
        price: 40
    },
    {
        id: 11,
        name: "Nike Club",
        desc: "Unstructured JDI Cap",
        category: "accessoriesAndEquip",
        image: p11Img,
        price: 28
    },
    {
        id: 12,
        name: "Nike DNA",
        desc: 'Men\'s Dri-FIT 8" Basketball Shorts',
        category: "shorts",
        image: p12Img,
        price: 50
    },
    {
        id: 13,
        name: "Nike Dri-FIT",
        desc: "Men's Fitness T-Shirt",
        category: "topsAndTees",
        image: p13Img,
        price: 35
    },
    {
        id: 14,
        name: "Nike Heritage",
        desc: "Crossbody Bag (4L)",
        category: "accessoriesAndEquip",
        image: p14Img,
        price: 37
    },
    {
        id: 15,
        name: "Nike One",
        desc: 'Women\'s Dri-FIT High-Waisted 3" 2-in-1 Shorts',
        category: "shorts",
        image: p15Img,
        price: 40
    },
    {
        id: 16,
        name: "Nike Primary",
        desc: "Men's Dri-FIT Long-Sleeve Versatile Top",
        category: "topsAndTees",
        image: p16Img,
        price: 60
    },
    {
        id: 17,
        name: "NikePro",
        desc: 'Women\'s 3" Shorts',
        category: "shorts",
        image: p17Img,
        price: 30
    },
    {
        id: 18,
        name: "Nike Sportswear Club Fleece",
        desc: "Men's Pullover Hoodie",
        category: "hoodiesAndPullovers",
        image: p18Img,
        price: 65
    },
    {
        id: 19,
        name: "Nike Sportswear Phoenix Fleet",
        desc: "Women's Oversized Full-Zip Hoodie",
        category: "hoodiesAndPullovers",
        image: p19Img,
        price: 85
    },
    {
        id: 20,
        name: "Nike Sportswear Tech",
        desc: "Men's Lightweight Knit Shorts",
        category: "shorts",
        image: p20Img,
        price: 90
    },
    {
        id: 21,
        name: "Nike Sportswear Tech Fleece",
        desc: "Men's Pullover Hoodie",
        category: "hoodiesAndPullovers",
        image: p21Img,
        price: 120
    },
    {
        id: 22,
        name: "Nike x Stüssy",
        desc: "Washed Fleece Hoodie",
        category: "shorts",
        image: p22Img,
        price: 140
    },
    {
        id: 23,
        name: "Nike Tempo",
        desc: "Women's Brief-Lined Running Shorts",
        category: "shorts",
        image: p23Img,
        price: 32
    },
    {
        id: 24,
        name: "Nike Victory",
        desc: "Swim Head Covering",
        category: "accessoriesAndEquip",
        image: p24Img,
        price: 40
    },
    {
        id: 25,
        name: "Pullover Club Fleece",
        desc: "Pullover Hoodie",
        category: "hoodiesAndPullovers",
        image: p25Img,
        price: 65
    },
    {
        id: 26,
        name: "Nike Sportswear Essentials",
        desc: "Women's Graphic T-Shirt",
        category: "topsAndTees",
        image: p26Img,
        price: 40
    },
    {
        id: 27,
        name: "Nike Sportswear Club Fleece x Doernbecher Freestyle 'Hailey'",
        desc: "Women's Full Zip Hoodie",
        category: "hoodiesAndPullovers",
        image: p27Img,
        price: 70
    },
    {
        id: 28,
        name: "Nike Sportswear Essential",
        desc: "Women's Long-Sleeve Holiday Top",
        category: "topsAndTees",
        image: p28Img,
        price: 45
    },
    {
        id: 29,
        name: "Nike Sportswear Essential",
        desc: "Women's Long Sleeve Top",
        category: "topsAndTees",
        image: p29Img,
        price: 40
    },
    {
        id: 30,
        name: "Nike Sportswear Tech Fleece",
        desc: "Women's Oversized Full-Zip Hoodie Cape",
        category: "hoodiesAndPullovers",
        image: p30Img,
        price: 165
    },
    {
        id: 31,
        name: "Nike Sportswear Essential",
        desc: "Women's Graphic T-Shirt",
        category: "40",
        image: p31Img,
        price: 40
    },
    {
        id: 32,
        name: "Nike Air Force 1'07",
        desc: "Men's Shoes",
        category: "shoesAndSlides",
        image: p32Img,
        price: 175
    },
    {
        id: 33,
        name: "Nike Air Max 97",
        desc: "Men's Shoes",
        category: "shoesAndSlides",
        image: p33Img,
        price: 175
    },
    {
        id: 34,
        name: "Jordan Hydro 8 Retro",
        desc: "Men's Slides",
        category: "shoesAndSlides",
        image: p34Img,
        price: 65
    },
    {
        id: 35,
        name: "Jordan Play",
        desc: "Men's Slides",
        category: "shoesAndSlides",
        image: p35Img,
        price: 45
    },
    {
        id: 36,
        name: "Killshot 2 Leather",
        desc: "Men's Shoes",
        category: "shoesAndSlides",
        image: p36Img,
        price: 90
    },
    {
        id: 37,
        name: "Nike Victori One",
        desc: "Men's Slides",
        category: "shoesAndSlides",
        image: p37Img,
        price: 35
    },
    {
        id: 38,
        name: "Nike Air Max Pulse",
        desc: "Men's Shoes",
        category: "shoesAndSlides",
        image: p38Img,
        price: 150
    },
    {
        id: 39,
        name: "Nike Air Max 1",
        desc: "Women's Shoes",
        category: "shoesAndSlides",
        image: p39Img,
        price: 115
    },
    {
        id: 40,
        name: "Nike Dunk Low",
        desc: "Women's Shoes",
        category: "shoesAndSlides",
        image: p40Img,
        price: 115
    },
    {
        id: 41,
        name: "Nike Gamma Force",
        desc: "Women's Shoes",
        category: "shoesAndSlides",
        image: p41Img,
        price: 95
    },
    {
        id: 42,
        name: "Nike Phoenix Waffle",
        desc: "Women's Shoes",
        category: "shoesAndSlides",
        image: p42Img,
        price: 100
    }
];

export default allProducts