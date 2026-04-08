export const cars = [
  {
    id: "c1",
    name: "Avatr Series (阿维塔全系)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动/增程", en: "EV/EREV" },
    image: "https://storage.meteor.today/image/69b1411398370269981cb8af.jpg",
    specs: {
      zh: {
        "品牌": "阿维塔 (Avatr)",
        "车型": "全系车型 (11, 12等)",
        "动力类型": "纯电动 (EV) / 增程式 (EREV)",
        "智能驾驶": "华为ADS高阶智驾",
      },
      en: {
        "Brand": "Avatr",
        "Models": "All Series (11, 12, etc.)",
        "Powertrain": "EV / EREV",
        "ADAS": "Huawei ADS",
      }
    },
    features: {
      zh: ["华为全栈智能汽车解决方案", "宁德时代电池", "情感涡流设计", "高阶智驾"],
      en: ["Huawei Smart Auto Solution", "CATL Battery", "Emotional Vortex Design", "Advanced ADAS"]
    }
  },
  {
    id: "c2",
    name: "Li Auto International (理想国际版全系)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "增程式 (EREV)", en: "EREV" },
    image: "https://storage.meteor.today/image/69b143387bb750997742deb3.jpg",
    specs: {
      zh: {
        "品牌": "理想 (Li Auto)",
        "车型": "国际版全系 (L7, L8, L9)",
        "系统语言": "中/英/俄三国语言",
        "网络支持": "带外接卡槽，支持国外通讯卡",
        "锁机风险": "无锁机风险",
      },
      en: {
        "Brand": "Li Auto",
        "Models": "International Series (L7, L8, L9)",
        "Languages": "CN/EN/RU Supported",
        "Network": "External SIM Slot, Global SIM Support",
        "Lock Risk": "No Region Lock",
      }
    },
    features: {
      zh: ["原厂多语言车机", "无锁机风险", "支持国外SIM卡", "魔毯空气悬架", "家庭智能座舱"],
      en: ["Factory Multi-language OS", "No Region Lock", "Global SIM Support", "Magic Carpet Air Suspension", "Family Smart Cabin"]
    }
  },
  {
    id: "c3",
    name: "Changan Auto Series (长安汽车全系)",
    type: { zh: "全系", en: "All Series" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "汽油/新能源", en: "Gasoline/NEV" },
    image: "https://storage.meteor.today/image/69b1433cc75c658163284517.jpg",
    images: ["https://storage.meteor.today/image/69b1433cc75c658163284517.jpg", "https://duk.tw/kg2i8P.jpg"],
    specs: {
      zh: {
        "品牌": "长安 (Changan)",
        "车型": "UNI系列, CS系列, 逸动等",
        "动力类型": "燃油 / 混动 / 纯电",
      },
      en: {
        "Brand": "Changan",
        "Models": "UNI Series, CS Series, Eado, etc.",
        "Powertrain": "Gasoline / PHEV / EV",
      }
    },
    features: {
      zh: ["蓝鲸动力", "高性价比", "丰富配置", "可靠品质"],
      en: ["Blue Core Power", "High Cost-Performance", "Rich Features", "Reliable Quality"]
    }
  },
  {
    id: "c4",
    name: "Geely Galaxy Starship Hybrid (吉利星舰混动)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "插电混动 (PHEV)", en: "PHEV" },
    image: "https://storage.meteor.today/image/69b143da7bb750997742e3e3.jpg",
    specs: {
      zh: {
        "品牌": "吉利 (Geely)",
        "车型": "银河星舰 (Galaxy Starship)",
        "动力类型": "雷神电混",
        "架构": "GEA全球智能新能源架构",
      },
      en: {
        "Brand": "Geely",
        "Models": "Galaxy Starship",
        "Powertrain": "Thor Hybrid",
        "Architecture": "GEA Architecture",
      }
    },
    features: {
      zh: ["雷神电混技术", "未来科技设计", "豪华智能座舱", "超长续航"],
      en: ["Thor Hybrid Tech", "Futuristic Design", "Luxury Smart Cabin", "Ultra-long Range"]
    }
  },
  {
    id: "c5",
    name: "Geely Galaxy E5 EV (吉利银河E5纯电)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动 (EV)", en: "EV" },
    image: "https://duk.tw/vZSQmW.webp",
    specs: {
      zh: {
        "品牌": "吉利 (Geely)",
        "车型": "银河E5 (Galaxy E5)",
        "动力类型": "纯电动 (EV)",
        "电池": "神盾短刀电池",
      },
      en: {
        "Brand": "Geely",
        "Models": "Galaxy E5",
        "Powertrain": "EV",
        "Battery": "Aegis Short Blade Battery",
      }
    },
    features: {
      zh: ["神盾短刀电池", "GEA架构", "Flyme Auto车机", "全球化车型"],
      en: ["Aegis Battery", "GEA Architecture", "Flyme Auto OS", "Global Model"]
    }
  },
  {
    id: "c6",
    name: "Geely Geome EV (吉利星愿纯电)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动 (EV)", en: "EV" },
    image: "https://storage.meteor.today/image/69b14339ac68d9f5c0dc8458.webp",
    specs: {
      zh: {
        "品牌": "吉利 (Geely)",
        "车型": "星愿 (Geome)",
        "动力类型": "纯电动 (EV)",
        "定位": "智能纯电小车",
      },
      en: {
        "Brand": "Geely",
        "Models": "Geome EV",
        "Powertrain": "EV",
        "Positioning": "Smart Compact EV",
      }
    },
    features: {
      zh: ["灵动设计", "Flyme Auto", "神盾电池", "后驱操控"],
      en: ["Agile Design", "Flyme Auto", "Aegis Battery", "RWD Handling"]
    }
  },
  {
    id: "c7",
    name: "Wuling Aishang A100 EV (五菱埃尚A100纯电)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动 (EV)", en: "EV" },
    image: "https://i.ibb.co/LbkpKHJ/A100.png",
    specs: {
      zh: {
        "品牌": "五菱 (Wuling)",
        "车型": "埃尚A100 (Aishang A100)",
        "动力类型": "纯电动 (EV)",
      },
      en: {
        "Brand": "Wuling",
        "Models": "Aishang A100",
        "Powertrain": "EV",
      }
    },
    features: {
      zh: ["经济实用", "城市代步", "空间灵活", "充电便捷"],
      en: ["Economical", "City Commute", "Flexible Space", "Convenient Charging"]
    }
  },
  {
    id: "c8",
    name: "Bestune Series (奔腾全系)",
    type: { zh: "全系", en: "All Series" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "汽油/新能源", en: "Gasoline/NEV" },
    image: "https://i.ibb.co/R4ZsbkFh/image.png",
    specs: {
      zh: {
        "品牌": "奔腾 (Bestune)",
        "车型": "B70, T90, 小马等全系",
        "动力类型": "燃油 / 纯电",
      },
      en: {
        "Brand": "Bestune",
        "Models": "B70, T90, Pony, etc.",
        "Powertrain": "Gasoline / EV",
      }
    },
    features: {
      zh: ["一汽品质", "国潮设计", "宽适空间", "智能安全"],
      en: ["FAW Quality", "National Trend Design", "Spacious", "Smart Safety"]
    }
  },
  {
    id: "c9",
    name: "GAC AION Series (广汽AION全系)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动 (EV)", en: "EV" },
    image: "https://i.ibb.co/BmH4LSW/image.jpg",
    specs: {
      zh: {
        "品牌": "广汽埃安 (GAC AION)",
        "车型": "AION Y, S, V, LX等全系",
        "动力类型": "纯电动 (EV)",
        "电池": "弹匣电池",
      },
      en: {
        "Brand": "GAC AION",
        "Models": "AION Y, S, V, LX, etc.",
        "Powertrain": "EV",
        "Battery": "Magazine Battery",
      }
    },
    features: {
      zh: ["弹匣电池系统安全技术", "星灵架构", "超大空间", "ADiGO智驾互联"],
      en: ["Magazine Battery Safety", "Star Soul Architecture", "Spacious", "ADiGO Smart Drive"]
    }
  },
  {
    id: "c10",
    name: "Livan 8 (吉利睿蓝8)",
    type: { zh: "右舵车", en: "RHD" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动", en: "EV" },
    image: "https://i.ibb.co/bTJzBcZ/8-Livan-8.jpg",
    images: ["https://i.ibb.co/bTJzBcZ/8-Livan-8.jpg", "https://i.ibb.co/4Z7jRxb5/8-2.jpg"],
    specs: {
      zh: {
        "品牌": "睿蓝 (Livan)",
        "车型": "睿蓝8",
        "动力类型": "纯电动 (EV)"
      },
      en: {
        "Brand": "Livan",
        "Models": "Livan 8",
        "Powertrain": "EV"
      }
    },
    features: {
      zh: ["右舵版", "纯电 MPV", "智能座舱"],
      en: ["RHD", "EV MPV", "Smart Cabin"]
    }
  },
  {
    id: "c11",
    name: "Riddara RD6 Pickup (雷达 RD6 皮卡)",
    type: { zh: "右舵车", en: "RHD" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动", en: "EV" },
    image: "https://i.ibb.co/hRcp3fNx/Riddara-RD6-a.png",
    images: ["https://i.ibb.co/hRcp3fNx/Riddara-RD6-a.png", "https://i.ibb.co/G3cqp2kS/Riddara-RD6-b.png"],
    specs: {
      zh: {
        "品牌": "雷达 (Riddara)",
        "车型": "RD6",
        "动力类型": "纯电动 (EV)"
      },
      en: {
        "Brand": "Riddara",
        "Models": "RD6",
        "Powertrain": "EV"
      }
    },
    features: {
      zh: ["右舵版", "纯电皮卡", "外放电功能", "宽敞装载空间"],
      en: ["RHD", "EV Pickup", "V2L Tech", "Spacious Bed"]
    }
  },
  {
    id: "c12",
    name: "Deepal L Series (深蓝 L系列)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电/增程", en: "EV/EREV" },
    image: "https://i.ibb.co/hbb6ctX/Deep-L-series-b.webp",
    specs: {
      zh: {
        "品牌": "深蓝 (Deepal)",
        "车型": "L系列 (L07等)",
        "动力类型": "纯电/增程"
      },
      en: {
        "Brand": "Deepal",
        "Models": "L Series (L07, etc.)",
        "Powertrain": "EV/EREV"
      }
    },
    features: {
      zh: ["超级增程", "智能座舱", "无框车门"],
      en: ["Super EREV", "Smart Cabin", "Frameless Doors"]
    }
  },
  {
    id: "c13",
    name: "Deepal S Series (深蓝 S系列)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电/增程", en: "EV/EREV" },
    image: "https://i.ibb.co/FLbqPScy/Deepal-S-series.webp",
    specs: {
      zh: {
        "品牌": "深蓝 (Deepal)",
        "车型": "S系列 (S07等)",
        "动力类型": "纯电/增程"
      },
      en: {
        "Brand": "Deepal",
        "Models": "S Series (S07, etc.)",
        "Powertrain": "EV/EREV"
      }
    },
    features: {
      zh: ["超级增程", "智能舒享空间", "科技运动前脸"],
      en: ["Super EREV", "Comfort Space", "Tech-Sport Front"]
    }
  },
  {
    id: "c14",
    name: "Toyota Corolla E-Hybrid (丰田 卡罗拉双擎)",
    type: { zh: "二手车", en: "Used Car" },
    price: "Contact for Quote",
    year: "2023",
    mileage: "Contact for details",
    fuelType: { zh: "油电混合 (HEV)", en: "HEV" },
    image: "https://duk.tw/uuop4O.jpg",
    images: [
      "https://duk.tw/uuop4O.jpg",
      "https://duk.tw/Oblabh.jpg",
      "https://duk.tw/6m4QkW.jpg",
      "https://duk.tw/vD169o.jpg",
      "https://duk.tw/RsHw0f.jpg"
    ],
    specs: {
      zh: {
        "品牌": "丰田 (Toyota)",
        "车型": "2023款 卡罗拉双擎 1.8 无级 智能电混先锋版",
        "变速箱": "自动挡 (CVT)",
        "动力类型": "油电混合 (HEV)"
      },
      en: {
        "Brand": "Toyota",
        "Models": "2023 Corolla 1.8 E-Hybrid Pioneer CVT",
        "Transmission": "CVT",
        "Powertrain": "HEV"
      }
    },
    features: {
      zh: ["智能电混", "经济省油", "先锋版配置", "可靠耐用"],
      en: ["Smart E-Hybrid", "Fuel Efficient", "Pioneer Edition", "Reliable & Durable"]
    }
  },
  {
    id: "c15",
    name: "Geely Binyue L (吉利缤越L)",
    type: { zh: "SUV", en: "SUV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "汽油 (Gasoline)", en: "Gasoline" },
    image: "https://duk.tw/TlMN0t.png",
    images: [
      "https://duk.tw/TlMN0t.png",
      "https://duk.tw/1Gw0Jh.png",
      "https://duk.tw/EpEBzu.jpg",
      "https://duk.tw/buOZT6.jpg",
      "https://duk.tw/u0dyl2.jpg"
    ],
    specs: {
      zh: {
        "品牌": "吉利 (Geely)",
        "车型": "缤越L",
        "动力类型": "燃油"
      },
      en: {
        "Brand": "Geely",
        "Models": "Binyue L",
        "Powertrain": "Gasoline"
      }
    },
    features: {
      zh: ["全新动感设计", "强劲动力输出", "智能互联座舱", "宽敞灵活空间"],
      en: ["Dynamic Design", "Strong Power Output", "Smart Connected Cabin", "Spacious Flex Space"]
    }
  },
  {
    id: "c16",
    name: "Zeekr 9x (极氪9x)",
    type: { zh: "新能源", en: "NEV" },
    price: "Contact for Quote",
    year: "2025-2026",
    mileage: "0 km",
    fuelType: { zh: "纯电动 (EV)", en: "EV" },
    image: "https://duk.tw/BoQ5c3.png",
    images: [
      "https://duk.tw/BoQ5c3.png",
      "https://duk.tw/sjF0No.png",
      "https://duk.tw/R2eMAx.webp",
      "https://duk.tw/9fCYC7.webp",
      "https://duk.tw/PoBPKz.webp"
    ],
    specs: {
      zh: {
        "品牌": "极氪 (Zeekr)",
        "车型": "极氪9x",
        "动力类型": "纯电动 (EV)"
      },
      en: {
        "Brand": "Zeekr",
        "Models": "Zeekr 9x",
        "Powertrain": "EV"
      }
    },
    features: {
      zh: ["先锋设计", "智能座舱", "高性能驱动", "宽适空间"],
      en: ["Avant-garde Design", "Smart Cabin", "High-Performance Drive", "Spacious Interior"]
    }
  },
  {
    id: "c17",
    name: "Changan Qiyuan Q05 (长安启源Q05)",
    type: { zh: "SUV", en: "SUV" },
    price: "Contact for Quote",
    year: "2023-2026",
    mileage: "0 km",
    fuelType: { zh: "插电混动 (PHEV)", en: "PHEV" },
    image: "https://duk.tw/5z5amQ.jpg",
    images: [
      "https://duk.tw/5z5amQ.jpg",
      "https://duk.tw/R3KgOm.jpg",
      "https://duk.tw/ocTujl.jpg"
    ],
    specs: {
      zh: {
        "品牌": "长安 (Changan)",
        "车型": "启源Q05",
        "动力类型": "插电混动 (PHEV)"
      },
      en: {
        "Brand": "Changan",
        "Models": "Qiyuan Q05",
        "Powertrain": "PHEV"
      }
    },
    features: {
      zh: ["数智电驱", "超低油耗", "舒适座舱", "智能安全"],
      en: ["Smart Electric Drive", "Ultra-low Fuel Consump.", "Comfort Cabin", "Smart Safety"]
    }
  },
  {
    id: "c18",
    name: "GAC Trumpchi GS3 (广汽传祺GS3)",
    type: { zh: "SUV", en: "SUV" },
    price: "Contact for Quote / 价格优势",
    year: "2024-2025",
    mileage: "大量现车",
    fuelType: { zh: "汽油 (Gasoline)", en: "Gasoline" },
    image: "https://duk.tw/jDcQoJ.png",
    images: [
      "https://duk.tw/jDcQoJ.png",
      "https://duk.tw/vjflGX.webp",
      "https://duk.tw/ep5zWg.webp",
      "https://duk.tw/VX62cU.webp"
    ],
    specs: {
      zh: {
        "品牌": "广汽传祺 (GAC)",
        "车型": "GS3",
        "配置": "798 / 898 / 998 (灰/银/白)",
        "货源": "南沙提，大量现车，厂家许可证"
      },
      en: {
        "Brand": "GAC Trumpchi",
        "Models": "GS3",
        "Trims": "798 / 898 / 998 (Grey/Silver/White)",
        "Stock": "Nansha Pickup, In-stock, Factory License"
      }
    },
    features: {
      zh: ["包刷车机", "厂家出许可证", "大量现车", "价格优势"],
      en: ["Pre-flashed OS", "Factory License", "Large Inventory", "Pricing Advantage"]
    }
  },
  {
    id: "c19",
    name: "GAC AION i60 210版",
    type: { zh: "SUV", en: "SUV" },
    price: "Contact for Quote",
    year: "2024-2025",
    mileage: "0 km",
    fuelType: { zh: "增程式 (REEV)", en: "REEV" },
    image: "https://duk.tw/HyrOW9.png",
    images: [
      "https://duk.tw/HyrOW9.png",
      "https://duk.tw/erDCgp.png",
      "https://duk.tw/mpTyCx.webp",
      "https://duk.tw/3bbozP.webp",
      "https://duk.tw/fXt6MW.webp",
      "https://duk.tw/McP9Ow.webp",
      "https://duk.tw/24viJi.webp",
      "https://duk.tw/NhxnKo.webp"
    ],
    specs: {
      zh: {
        "品牌": "广汽埃安 (GAC AION)",
        "车型": "i60 210版",
        "动力系统": "1.5L 增程器 + 高功率电机 (180kW)",
        "续航": "CLTC纯电210km / 综合超1200km"
      },
      en: {
        "Brand": "GAC AION",
        "Models": "i60 210 Edition",
        "Powertrain": "1.5L REEV + 180kW Motor",
        "Range": "CLTC EV 210km / Combined 1200+km"
      }
    },
    features: {
      zh: ["无里程焦虑", "空间魔术师 (纯平后备箱)", "50W无线快充", "6kW V2L外放电"],
      en: ["No Range Anxiety", "Magic Flat Trunk Space", "50W Fast Wireless Charge", "6kW V2L Output"]
    }
  }
];
