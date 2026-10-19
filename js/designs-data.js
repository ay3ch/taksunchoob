/* دسته‌بندی طرح‌ها؛ طرح‌های چرمی سابق در بافت‌دار قرار گرفته‌اند. */
const DESIGNS = [
  {
    "code": "1001",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1004",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1015",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1016",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1017",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1019",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1020",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1022",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1027",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1029",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1031",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1032",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1033",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1034",
    "category": "چوبی",
    "color": "#e6e4e0"
  },
  {
    "code": "1201",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1202",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1203",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1204",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1205",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1206",
    "category": "سنگی",
    "color": "#dedbd6"
  },
  {
    "code": "1207",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1208",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1209",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1210",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1211",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1212",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1213",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1214",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1215",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1216",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1217",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1218",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1219",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1220",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1221",
    "category": "خالدار",
    "color": "#eeeeea"
  },
  {
    "code": "1222",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1223",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "1224",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1225",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1226",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1227",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1228",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1229",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1230",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1231",
    "category": "سنگی",
    "color": "#efeee9"
  },
  {
    "code": "1233",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1234",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1235",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1236",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1238",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1240",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1241",
    "category": "سنگی",
    "color": "#e8e6e1"
  },
  {
    "code": "1242",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1243",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1245",
    "category": "سنگی",
    "color": "#e4e2de"
  },
  {
    "code": "1246",
    "category": "سنگی",
    "color": "#d8d5d0"
  },
  {
    "code": "1248",
    "category": "سنگی",
    "color": "#f0efeb"
  },
  {
    "code": "1250",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1255",
    "category": "سنگی",
    "color": "#e6e4e0"
  },
  {
    "code": "1401",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1402",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1403",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1404",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1405",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1406",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1407",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1408",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1409",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1410",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1411",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1412",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1413",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1414",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1415",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1416",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1417",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1418",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1419",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1469",
    "category": "خالدار",
    "color": "#e7e6e0"
  },
  {
    "code": "1472",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1475",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1478",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "1511",
    "category": "بافت‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "1514",
    "category": "بافت‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4301",
    "category": "ساده",
    "color": "#e6e4e0"
  },
  {
    "code": "4302",
    "category": "خالدار",
    "color": "#e6e4e0"
  },
  {
    "code": "4303",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4304",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4305",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4306",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4307",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4308",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4311",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4313",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4314",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4315",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4317",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4318",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4319",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4320",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4322",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4323",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4324",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4326",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4330",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  },
  {
    "code": "4331",
    "category": "طرح‌دار",
    "color": "#e6e4e0"
  }
];
