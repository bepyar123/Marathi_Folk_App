import React, { useState } from "react";
import { MapPin, Shirt, Calendar, Utensils, Users } from "lucide-react";
import { motion } from "framer-motion";
import CulturalPlatformFooter from "../components/CulturalPlatformFooter";
import { Link } from "react-router-dom";
import { Music, Clock, Landmark } from "lucide-react";

const CultureExplorer = () => {
  const [language, setLanguage] = useState("mr");
  const [activeTab, setActiveTab] = useState("dress");

  // ---------- TEXT ----------
  const marathi = {
    title: "🎵 महाराष्ट्र सांस्कृतिक मंच",
    subtitle: "Cultural AI Platform for Maharashtra",
  };

  const english = {
    title: "🎵 Maharashtra Cultural Platform",
    subtitle: "Cultural AI Platform for Maharashtra",
  };

  const text = language === "mr" ? marathi : english;

  // ---------- PAGE HEADING ----------
  const heading = {
    mr: "संस्कृती अन्वेषक",
    en: "Culture Explorer",
  };

  // ---------- TABS ----------
  const tabs = {
    mr: [
      { key: "dress", name: "पोशाख", icon: <Shirt size={20} /> },
      { key: "festivals", name: "सण", icon: <Calendar size={20} /> },
      { key: "dishes", name: "पदार्थ", icon: <Utensils size={20} /> },
      { key: "traditions", name: "परंपरा", icon: <Users size={20} /> },
    ],
    en: [
      { key: "dress", name: "Dress", icon: <Shirt size={20} /> },
      { key: "festivals", name: "Festivals", icon: <Calendar size={20} /> },
      { key: "dishes", name: "Dishes", icon: <Utensils size={20} /> },
      { key: "traditions", name: "Traditions", icon: <Users size={20} /> },
    ],
  };

  // Cultural Data for both languages
  const data = {
    mr: {
      dress: [
        {
          title: "पैठणी साडी",
          description:
            "रेशीम साडी ज्यावर मोर आणि फुलांचे नक्षीकाम असते — अभिमान आणि सौंदर्याचे प्रतीक.",
          location: "औरंगाबाद, येवला",
          tags: ["लग्न", "सण"],
          image: "/images/paithani.jpg",
        },
        {
          title: "नऊवारी साडी",
          description:
            "नऊ गजांची साडी जी धोतर शैलीत नेसली जाते — सामर्थ्य आणि परंपरेचे प्रतीक.",
          location: "महाराष्ट्रभर",
          tags: ["सांस्कृतिक कार्यक्रम", "समारंभ"],
          image: "/images/nauvari.jpg",
        },
        {
          title: "फेटा",
          description:
            "पुरुषांचा पारंपरिक पगडी, सन्मान आणि उत्सवाचे प्रतीक.",
          location: "पुणे, सातारा",
          tags: ["उत्सव", "लग्न"],
          image: "/images/pheta.jpg",
        },
        {
          title: "कोल्हापुरी चप्पल",
          description: "हाताने बनवलेली चामड्याची चप्पल, टिकाऊपणा आणि कला यासाठी प्रसिद्ध.",
          location: "कोल्हापूर",
          tags: ["दैनंदिन वापर", "वारसा"],
          image: "/images/kolhapuri.jpg",
        },
        {
          title: "धोतर-कुर्ता",
          description:
            "पुरुषांचा पारंपरिक पोशाख, धार्मिक व सांस्कृतिक प्रसंगी परिधान केला जातो.",
          location: "पश्चिम महाराष्ट्र",
          tags: ["परंपरा", "सण"],
          image: "/images/dhoti_kurta.jpg",
        },
        {
          title: "नथ",
          description:
            "महाराष्ट्रीय स्त्रीत्वाचे प्रतीक असलेली नथ — मोत्यांनी आणि सोन्याने बनवलेली.",
          location: "पुणे, नाशिक",
          tags: ["लग्न", "परंपरा"],
          image: "/images/nath.jpg",
        },
        {
          title: " हिरवे चूड्यांचे संच",
          description:
            "विवाहित स्त्रियांसाठी शुभ आणि समृद्धीचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["सण", "शुभ चिन्ह"],
          image: "/images/green_bangles.jpg",
        },
        {
          title: "कोकणी पयजामा",
          description: "कोकणातील पारंपरिक महिला पोशाख, हलके आणि आरामदायक.",
          location: "कोकण",
          tags: ["परंपरा", "सौंदर्य"],
          image: "/images/konkan_pyjama_choli.jpg",
        },
        {
          title: "नारायण पेठ साडी",
          description: "नारायण पेठच्या पारंपरिक साडी — गोड रंगसंगती, दैनंदिन आणि सणासाठी योग्य.",
          location: "नारायण पेठ, पुणे",
          tags: ["महिला पोशाख", "परंपरा"],
          image: "/images/narayan_peth_saree.jpg",
        },
       ],
      festivals: [
        {
          title: "गणेश चतुर्थी",
          description:
            "भगवान गणेशाच्या जन्माचा उत्सव महाराष्ट्रातील सर्वात मोठा सण म्हणून साजरा केला जातो.",
          location: "मुंबई, पुणे, कोकण",
          tags: ["मुख्य सण", "सार्वजनिक उत्सव"],
          image: "/images/ganesh_chaturthi.jpg",
        },
        {
          title: "गुढी पाडवा",
          description:
            "महाराष्ट्रीय नववर्ष, जे गुढी उभारून साजरे केले जाते — समृद्धीचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["नववर्ष", "परंपरा"],
          image: "/images/gudi_padwa.jpg",
        },
        {
          title: "दिवाळी",
          description:
            "प्रकाशाचा सण, ज्यात दिवे, मिठाई आणि आनंदाची देवाणघेवाण केली जाते.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["मुख्य सण", "कुटुंब"],
          image: "/images/diwali.jpg",
        },
        {
          title: "दहीहंडी",
          description:
            "गोविंदा पथकांचा थर लावून दहीहंडी फोडण्याचा सण — उत्साहाचा प्रतीक.",
          location: "मुंबई, ठाणे",
          tags: ["युवा सण", "खेळ"],
          image: "/images/dahi_handi.jpg",
        },
        {
          title: "शिवजयंती",
          description:
            "छत्रपती शिवाजी महाराज यांच्या जन्मदिनानिमित्त देशभक्तीचा उत्सव.",
          location: "रायगड, पुणे, सातारा",
          tags: ["इतिहास", "देशभक्ती"],
          image: "/images/shiv_jayanti.jpg",
        },
        {
          title: "मकर संक्रांती",
          description: "सण जो सूर्याच्या उत्तरायणाच्या प्रारंभाला साजरा केला जातो.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["ऋतू सण", "परंपरा"],
          image: "/images/makar_sankranti.jpg",
        },
        {
          title: "होलि",
          description: "रंगांचा सण, मित्र आणि कुटुंबांसोबत आनंद साजरा केला जातो.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["रंग", "उत्सव"],
          image: "/images/holi.jpg",
        },
        {
          title: "हळदीकुंकू सोहळा",
          description: "विवाहित आणि विवाहसमारंभात पारंपरिक हळदीकुंकू विधी, सौख्याचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["विवाह", "परंपरा"],
          image: "/images/haldi_kunku.jpg",
        },
        {
          title: "पोळा उत्सव",
          description: "शेतकऱ्यांचा उत्सव, बैलांची पूजा आणि पारंपरिक खेळ यांचा समावेश.",
          location: "महाराष्ट्र" ,
          tags: ["शेती", "सण", "परंपरा"],
          image: "/images/pola.jpg",
        },
      ],
      dishes: [
        {
          title: "मिसळ पाव",
          description: "तिखट रस्सा, फरसाण आणि पाव यांचा भन्नाट संगम.",
          location: "कोल्हापूर, पुणे",
          tags: ["नाश्ता", "स्ट्रीट फूड"],
          image: "/images/misalpav.jpg",
        },
        {
          title: "वडा पाव",
          description: "मुंबईचे प्रसिद्ध फास्ट फूड — ‘इंडियन बर्गर’.",
          location: "मुंबई",
          tags: ["स्ट्रीट फूड", "जलद खाणे"],
          image: "/images/vadapav.jpg",
        },
        {
          title: "थालिपीठ",
          description: "बहु-अनाज पीठापासून बनवलेला पौष्टिक पदार्थ.",
          location: "पुणे, नागपूर",
          tags: ["आरोग्यदायी", "ग्रामीण"],
          image: "/images/thalipeeth.jpg",
        },
        {
          title: "पोहे",
          description: "हलका, पौष्टिक आणि लोकप्रिय नाश्ता.",
          location: "नाशिक, कोकण",
          tags: ["नाश्ता", "घरगुती"],
          image: "/images/pohe.jpg",
        },
        {
          title: "मोदक",
          description: "भगवान गणेशाचा आवडता गोड पदार्थ.",
          location: "कोकण, पुणे",
          tags: ["गोड पदार्थ", "सण"],
          image: "/images/modak.jpg",
        },
      {
        title: "उपमा",
        description: "गव्हाचे सूक्ष्म तांदळाचे पीठ, हलका आणि पौष्टिक नाश्ता.",
        location: "संपूर्ण महाराष्ट्र",
        tags: ["नाश्ता", "आरोग्यदायी"],
        image: "/images/upma.jpg",
      },
      {
        title: "भाकरी व पिठलं",
        description: "ज्वारी/भाताच्या भाकर्‍या सोबत मसालेदार रस्सा.",
        location: "महाराष्ट्रभर",
        tags: ["दैनंदिन", "ग्रामीण"],
        image: "/images/bhakri_pithal.jpg",
      },
      {
        title: "झुणका भाकर्‍या",
        description: "बेसन झुणका आणि ज्वारी/भाताच्या भाकर्‍या — पारंपरिक महाराष्ट्रियन पदार्थ.",
        location: "पुणे, नागपूर",
        tags: ["दैनंदिन", "ग्रामीण"],
        image: "/images/jhunka_bhakri.jpg",
      },
      {
        title: "शिरा (संतुलित गोड)",
        description: "उत्सवांमध्ये बनवलेला गोड पदार्थ — पोषक आणि रुचकर.",
        location: "संपूर्ण महाराष्ट्र",
        tags: ["गोड पदार्थ", "सण"],
        image: "/images/shira.jpg",
      },
      {
        title: "कांदापोहे",
        description: "पोह्यात कांदा, हळद, मिरची घालून बनवलेला हलका नाश्ता.",
        location: "संपूर्ण महाराष्ट्र",
        tags: ["नाश्ता", "घरगुती"],
        image: "/images/kanda_pohe.jpg",
      },
      {
        title: "सोलकढी",
        description: "कोकणात बनवला जाणारा कोकम आणि नारळाचे थंड पेय.",
        location: "कोकण",
        tags: ["पेय", "आरोग्यदायी"],
        image: "/images/solkadhi.jpg",
      },
      {
        title: "वरण-भात",
        description: "शुद्ध मसाले न वापरता बनवलेला पारंपरिक डाळ-भात.",
        location: "संपूर्ण महाराष्ट्र",
        tags: ["दैनंदिन", "घरगुती"],
        image: "/images/varan_bhat.jpg",
      },
      {
        title: "खिचडी",
        description: "तांदूळ आणि डाळीचा हलका, पौष्टिक पदार्थ.",
        location: "संपूर्ण महाराष्ट्र",
        tags: ["आरोग्यदायी", "साधे जेवण"],
        image: "/images/kichadi.jpg",
      },
      {
        title: "कोल्हापुरी मटण/कोल्हापुरी चिकन",
        description: "तिखट मसालेदार मटण/चिकन — कोल्हापूरचे वैशिष्ट्यपूर्ण पदार्थ.",
        location: "कोल्हापूर",
        tags: ["मुख्य जेवण", "स्पायसी"],
        image: "/images/kolhapuri_chicken.jpg",
      },

      ],
      traditions: [
        {
          title: "ओवी आणि भारूड",
          description:
            "महिलांच्या श्रमगीतांतून संस्कार आणि समाजाचे प्रतिबिंब दिसते.",
          location: "विदर्भ, मराठवाडा",
          tags: ["लोकगीत", "संस्कृती"],
          image: "/images/ovi_bharud.jpg",
        },
        {
          title: "भजन मंडळ",
          description:
            "भक्तीगीतांच्या माध्यमातून समाजजागृती आणि सांस्कृतिक एकता जपली जाते.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["भक्ती", "वारसा"],
          image: "/images/bhajan.jpg",
        },
        {
          title: "काठी नृत्य",
          description:
            "दांडिया शैलीतील ग्रामीण नृत्यप्रकार.",
          location: "पश्चिम महाराष्ट्र",
          tags: ["लोकनृत्य", "उत्सव"],
          image: "/images/kathi_dance.jpg",
        },
        {
          title: "पोवाडा गायन",
          description:
            "वीररसप्रधान गीतप्रकार जो मराठ्यांच्या पराक्रमाचे वर्णन करतो.",
          location: "सातारा, नाशिक",
          tags: ["वीररस", "इतिहास"],
          image: "/images/powada.jpg",
        },
        {
          title: "लावणी नृत्य",
          description: "लोकप्रिय मराठी नृत्य प्रकार, संगीत आणि नृत्याचे मिश्रण.",
          location: "कोल्हापूर, सातारा",
          tags: ["लोकनृत्य", "सांस्कृतिक वारसा"],
          image: "/images/lavni_dance.jpg",
        },
        {
          title: "तुळशी विवाह",
          description: "घरच्या तुळशीच्या विवाहाचा धार्मिक विधी — समृद्धी आणि शुभतेचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["परंपरा", "धार्मिक"],
          image: "/images/tulsi_wedding.jpg",
        },
        {
          title: "वारकरी संप्रदाय",
          description: "संतांच्या कीर्तनाद्वारे भक्ती आणि अध्यात्माचा अनुभव.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["धार्मिक", "वारसा"],
          image: "/images/warakari.jpg",
        },
        {
          title: "हळदीकुंकू सोहळा",
          description: "विवाहित आणि विवाहसमारंभात पारंपरिक हळदीकुंकू विधी, सौख्याचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["विवाह", "परंपरा"],
          image: "/images/haldi_kunku.jpg",
        },
        {
          title: "मंगलागोर  उत्सव",
          description: "गावातील फुलवाटिकांचा सण, पारंपरिक गीत आणि नृत्यांसह साजरा केला जातो.",
          location: "मंगलागोर, महाराष्ट्र",
          tags: ["सण", "परंपरा", "लोककला"],
          image: "/images/mangalagore_festival.jpg",
        },

      ],
    },

    en: {
      dress: [
        {
          title: "Paithani Saree",
          description:
            "Silk saree with intricate peacock motifs — symbol of grace and pride.",
          location: "Aurangabad, Yeola",
          tags: ["Festivals", "Weddings"],
          image: "/images/paithani.jpg",
        },
        {
          title: "Nauvari Saree",
          description:
            "Nine-yard saree draped in dhoti style — symbolizing strength and tradition.",
          location: "Across Maharashtra",
          tags: ["Culture", "Ceremonies"],
          image: "/images/nauvari.jpg",
        },
        {
          title: "Kolhapuri Chappal",
          description:
            "Handcrafted leather sandals — symbol of skill and tradition.",
          location: "Kolhapur",
          tags: ["Ethnic Wear", "Heritage"],
          image: "/images/kolhapuri.jpg",
        },
        {
          title: "Pheta (Turban)",
          description:
            "Colorful headgear for men worn on festive occasions.",
          location: "Pune, Satara",
          tags: ["Celebration", "Tradition"],
          image: "/images/pheta.jpg",
        },
        {
          title: "Dhoti-Kurta",
          description: "Traditional attire for men worn in religious events.",
          location: "Western Maharashtra",
          tags: ["Tradition", "Festival"],
          image: "/images/dhoti_kurta.jpg",
        },
        {
          title: "Nath (Nose Ring)",
          description: "Symbol of Maharashtrian femininity, traditionally made with pearls and gold.",
          location: "Pune, Nashik",
          tags: ["Wedding", "Tradition"],
          image: "/images/nath.jpg",
        },
        {
          title: "Set of Green Bangles",
          description: "Symbol of auspiciousness and prosperity for married women.",
          location: "All Maharashtra",
          tags: ["Festival", "Auspicious"],
          image: "/images/green_bangles.jpg",
        },

        {
          title: "Konkan Pyjama",
          description: "Traditional women’s attire from Konkan, lightweight and comfortable.",
          location: "Konkan",
          tags: ["Tradition", "Beauty"],
          image: "/images/konkan_pyjama_choli.jpg",
        },
        {
          title: "Narayan Peth Saree",
          description: "Traditional saree from Narayan Peth — colorful and suitable for daily wear and festivals.",
          location: "Narayan Peth, Pune",
          tags: ["Women's Wear", "Tradition"],
          image: "/images/narayan_peth_saree.jpg",
        },
      ],
      festivals: [
        {
          title: "Ganesh Chaturthi",
          description:
            "Grand celebration of Lord Ganesha’s birth filled with devotion and joy.",
          location: "Mumbai, Pune, Konkan",
          tags: ["Major Festival"],
          image: "/images/ganesh_chaturthi.jpg",
        },
        {
          title: "Gudi Padwa",
          description:
            "Maharashtrian New Year marked by raising the symbolic Gudi.",
          location: "All Maharashtra",
          tags: ["Tradition", "Prosperity"],
          image: "/images/gudi_padwa.jpg",
        },
        {
          title: "Diwali",
          description:
            "Festival of Lights — symbol of victory of light over darkness.",
          location: "All regions",
          tags: ["Festival", "Family"],
          image: "/images/diwali.jpg",
        },
        {
          title: "Dahi Handi",
          description:
            "Human pyramid competition celebrating Lord Krishna’s playful spirit.",
          location: "Mumbai, Thane",
          tags: ["Sport", "Festival"],
          image: "/images/dahi_handi.jpg",
        },
        {
          title: "Shiv Jayanti",
          description:
            "Commemoration of Chhatrapati Shivaji Maharaj’s birth — symbol of pride.",
          location: "Raigad, Pune",
          tags: ["Patriotism", "History"],
          image: "/images/shiv_jayanti.jpg",
        },
        {
          title: "Makar Sankranti",
          description: "Harvest festival marking the transition of the sun to Uttarayan.",
          location: "All Maharashtra",
          tags: ["Seasonal Festival", "Tradition"],
          image: "/images/makar_sankranti.jpg",
        },
        {
          title: "Holi",
          description: "Festival of colors celebrated with friends and family.",
          location: "All Maharashtra",
          tags: ["Colors", "Festival"],
          image: "/images/holi.jpg",
        },
        {
          title: "Haldi-Kunku Ceremony",
          description: "Traditional turmeric and vermilion ritual in weddings — symbolizing prosperity.",
          location: "All Maharashtra",
          tags: ["Wedding", "Tradition"],
          image: "/images/haldi_kunku.jpg",
        },
        {
          title: "Pola Festival",
          description: "Farmers’ festival featuring bull worship and traditional games.",
          location: " Maharashtra",
          tags: ["Agriculture", "Festival", "Tradition"],
          image: "/images/pola.jpg",
        },
      ],
      dishes: [
        {
          title: "Misal Pav",
          description: "Spicy sprout curry topped with farsan — breakfast staple.",
          location: "Kolhapur, Pune",
          tags: ["Spicy", "Street Food"],
          image: "/images/misalpav.jpg",
        },
        {
          title: "Vada Pav",
          description:
            "Spicy potato fritter served in a bun — Mumbai’s signature snack.",
          location: "Mumbai",
          tags: ["Fast Food", "Iconic"],
          image: "/images/vadapav.jpg",
        },
        {
          title: "Thalipeeth",
          description:
            "Multigrain spiced flatbread — nutritious and flavorful.",
          location: "Pune, Nagpur",
          tags: ["Healthy", "Traditional"],
          image: "/images/thalipeeth.jpg",
        },
        {
          title: "Modak",
          description:
            "Steamed sweet dumpling — favorite of Lord Ganesha.",
          location: "Konkan, Pune",
          tags: ["Sweet", "Festival"],
          image: "/images/modak.jpg",
        },
        {
          title: "Upma",
          description: "Savory semolina porridge — light and nutritious breakfast.",
          location: "All Maharashtra",
          tags: ["Breakfast", "Healthy"],
          image: "/images/upma.jpg",
        },
        {
          title: "Bhakri with Pithal",
          description: "Jowar or rice flatbread served with spicy curry.",
          location: "Across Maharashtra",
          tags: ["Daily Dish", "Rural Cuisine"],
          image: "/images/bhakri_pithal.jpg",
        },
        {
          title: "Zhunka Bhakri",
          description: "Besan curry served with jowar or rice flatbread — traditional Maharashtrian dish.",
          location: "Pune, Nagpur",
          tags: ["Daily Dish", "Rural Cuisine"],
          image: "/images/jhunka_bhakri.jpg",
        },
        {
          title: "Shira (Sweet Dish)",
          description: "Nutritious sweet prepared during festivals.",
          location: "All Maharashtra",
          tags: ["Sweet", "Festival"],
          image: "/images/shira.jpg",
        },
        {
          title: "Kanda Pohe",
          description: "Flattened rice cooked with onions, turmeric, and chilies — light breakfast.",
          location: "All Maharashtra",
          tags: ["Breakfast", "Homemade"],
          image: "/images/kanda_pohe.jpg",
        },
        {
          title: "Solkadhi",
          description: "Refreshing drink made from kokum and coconut milk, popular in Konkan.",
          location: "Konkan",
          tags: ["Beverage", "Healthy"],
          image: "/images/solkadhi.jpg",
        },
        {
          title: "Varan-Bhat",
          description: "Traditional lentil and rice dish — simple and home-style.",
          location: "All Maharashtra",
          tags: ["Daily Dish", "Homemade"],
          image: "/images/varan_bhat.jpg",
        },
        {
          title: "Khichadi",
          description: "Light, nutritious dish made with rice and lentils.",
          location: "All Maharashtra",
          tags: ["Healthy", "Simple Meal"],
          image: "/images/kichadi.jpg",
        },
        {
          title: "Kolhapuri Mutton/Chicken",
          description: "Spicy mutton/chicken dish — signature of Kolhapur cuisine.",
          location: "Kolhapur",
          tags: ["Main Course", "Spicy"],
          image: "/images/kolhapuri_chicken.jpg",
        },
        
      ],
      traditions: [
        {
          title: "Ovi-Bharud",
          description:
            "Folk verses sung by women depicting daily life and values.",
          location: "Vidarbha, Marathwada",
          tags: ["Folk Song"],
          image: "/images/ovi_bharud.jpg",
        },
        {
          title: "Bhajan Mandal",
          description:
            "Groups singing devotional songs promoting unity and spirituality.",
          location: "All Maharashtra",
          tags: ["Devotion", "Heritage"],
          image: "/images/bhajan.jpg",
        },
        {
          title: "Powada",
          description:
            "Heroic ballads describing Maratha bravery and valor.",
          location: "Satara, Nashik",
          tags: ["Heroic", "Folk Art"],
          image: "/images/powada.jpg",
        },
        {
          title: "Kathi Dance",
          description:
            "Folk dance using sticks performed during harvest festivals.",
          location: "Western Maharashtra",
          tags: ["Folk Dance"],
          image: "/images/kathi_dance.jpg",
        },
        {
          title: "Lavani Dance",
          description: "Popular Marathi dance form combining rhythm, music, and storytelling.",
          location: "Kolhapur, Satara",
          tags: ["Folk Dance", "Cultural Heritage"],
          image: "/images/lavni_dance.jpg",
        },
        {
          title: "Tulsi Vivah",
          description: "Religious ceremony of Tulsi plant marriage symbolizing prosperity.",
          location: "All Maharashtra",
          tags: ["Tradition", "Religious"],
          image: "/images/tulsi_wedding.jpg",
        },
        {
          title: "Warkari Tradition",
          description: "Devotional movement through pilgrimages and Kirtans, promoting spirituality.",
          location: "All Maharashtra",
          tags: ["Religious", "Heritage"],
          image: "/images/warakari.jpg",
        },
        {
          title: "Haldi-Kunku Ceremony",
          description: "Traditional turmeric and vermilion ritual in weddings — symbolizing prosperity.",
          location: "All Maharashtra",
          tags: ["Wedding", "Tradition"],
          image: "/images/haldi_kunku.jpg",
        },
       {
        title: "Mangalagore Festival",
        description: "Celebration of village flower gardens with traditional songs and dances.",
        location: "Mangalagore, Maharashtra",
        tags: ["Festival", "Tradition", "Folk Art"],
        image: "/images/mangalagore_festival.jpg",
      },

      ],
   },
  };

  return (
    <div className="bg-[#fff7ef] min-h-screen flex flex-col">

      {/* NAVBAR */}
      <header className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-5 shadow-lg text-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">{text.title}</h1>
          <p className="text-sm md:text-base font-light">{text.subtitle}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 mt-3 md:mt-0 text-base md:text-lg font-medium">
          <Link to="/predict" className="hover:underline flex items-center gap-1">
            <Music size={18} /> लोकगीते / Folk Songs
          </Link>

          <Link to="/timeline" className="hover:underline flex items-center gap-1">
            <Clock size={18} /> कालरेषा / Timeline
          </Link>

          <Link to="/cultureexplorer" className="hover:underline flex items-center gap-1">
            <Landmark size={18} /> संस्कृती अन्वेषक / Culture Explorer
          </Link>

          <Link
            to="/communityform"
            className="bg-white text-[#d32f2f] font-semibold px-5 py-2 rounded-lg hover:bg-[#ffe1e1] transition shadow-md"
          >
            योगदान द्या / Contribute
          </Link>
        </nav>
      </header>

      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-8">
      {/* Heading & Language Toggle */}
      <div className="flex justify-between items-center w-full max-w-5xl mb-6 mt-8">
        <h1 className="text-4xl font-extrabold text-center flex-1 text-orange-600 ">
          {heading[language]}
        </h1>
        <button
          onClick={() => setLanguage(language === "mr" ? "en" : "mr")}
          className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all"
        >
          {language === "mr" ? "English" : "मराठी"}
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-gray-700 text-center mb-6">
        {language === "mr"
          ? "महाराष्ट्राच्या समृद्ध वारशाचा शोध घ्या — पोशाख, सण, खाद्यपदार्थ आणि परंपरा."
          : "Explore Maharashtra’s rich heritage — from attire and festivals to cuisine and traditions."}
      </p>

      {/* Tabs */}
      <div className="flex justify-center bg-white rounded-full shadow-md overflow-hidden mb-12">
        {tabs[language].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-8 py-3 font-semibold text-gray-700 transition-all ${
              activeTab === tab.key
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {data[language][activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-[320px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <MapPin size={16} className="mr-1 text-orange-600" />
                {item.location}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      <CulturalPlatformFooter />
    </div>
  );
};

export default CultureExplorer;
