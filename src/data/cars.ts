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
    price: "EXW $36,000 - $67,000",
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
  }
];
