const vecinos = [
    {fecha: "05-dic", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 50891.73},
    {fecha: "05-dic", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 50891.73},

    {fecha: "01-dic", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 50891.73},
    {fecha: "28-nov", tipo: "Mercado Pago", credito: 0, haber: 30000, saldo: 70891.73},
    {fecha: "28-nov", tipo: "Factura 45886", credito: 53046.26, haber: 0, saldo: 100891.73},

    {fecha: "24-nov", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 47845.47},
    {fecha: "24-nov", tipo: "Mercado Pago", credito: 0, haber: 30000, saldo: 67845.47},
    {fecha: "24-nov", tipo: "Factura 45854", credito: 45670.63, haber: 0, saldo: 97845.47},

    {fecha: "23-nov", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 52174.84},
    {fecha: "17-nov", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 72174.84},
    {fecha: "17-nov", tipo: "Factura 45746", credito: 16685.34, haber: 0, saldo: 87174.84},
    {fecha: "17-nov", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 70489.50},

    {fecha: "16-nov", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 90489.50},
    {fecha: "16-nov", tipo: "Factura 45696", credito: 94625.97, haber: 0, saldo: 110489.50},

    {fecha: "15-nov", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 15863.53},
    {fecha: "10-nov", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 255863.53},
    {fecha: "09-nov", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 35863.53},
    {fecha: "09-nov", tipo: "Factura 45618", credito: 15472.09, haber: 0, saldo: 50863.53},

    {fecha: "07-nov", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 35394.44},
    {fecha: "07-nov", tipo: "factura 45556", credito: 5193.00, haber: 0, saldo: 45391.44},

    {fecha: "06-nov", tipo: "Mercado Pago", credito: 0, haber: 25000, saldo: 40198.44},
    {fecha: "27-oct", tipo: "Mercado Pago", credito: 0, haber: 40000, saldo: 65198.44},
    {fecha: "27-oct", tipo: "Factura 45500", credito: 64246.84, haber: 0, saldo: 105198.40},

    {fecha: "24-oct", tipo: "Factura 45430", credito: 6047.80, haber: 0, saldo: 40951.60},

    {fecha: "23-oct", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 34903.80},
    {fecha: "20-oct", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 44903.80},
    {fecha: "20-oct", tipo: "Factura 45390", credito: 27729.42, haber: 0, saldo: 54903.80},

    {fecha: "18-oct", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 27174.38},
    {fecha: "18-oct", tipo: "Factura 45308", credito: 38336.99, haber: 0, saldo: 47174.38},

    {fecha: "17-oct", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 8837.39},
    {fecha: "13-oct", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 23837.39},
    {fecha: "13-oct", tipo: "Factura 45252", credito: 9407.80, haber: 0, saldo: 38837.39},

    {fecha: "11-oct", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 29429.59},
    {fecha: "11-oct", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 39429.59},
    {fecha: "10-oct", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 54429.59},
    {fecha: "10-oct", tipo: "Factura 45184", credito: 51332.66, haber: 0, saldo: 74429.59},

    {fecha: "09-oct", tipo: "Factura 45172", credito: 4097.89, haber: 0, saldo: 23096.93},

    {fecha: "06-oct", tipo: "Mercado pago", credito: 0, haber: 0, saldo: 18999.04},
    {fecha: "05-oct", tipo: "Mercado pago", credito: 0, haber: 30000, saldo: 28999.04},
    {fecha: "05-oct", tipo: "Factura 45118", credito: 6239.72, haber: 0, saldo: 58999.04},

    {fecha: "03-oct", tipo: "Mercado pago", credito: 0, haber: 15000, saldo: 52759.32},
    {fecha: "03-oct", tipo: "Factura 45076", credito: 58284.94, haber: 0, saldo: 67759.32},

    {fecha: "02-oct", tipo: "Mercado pago", credito: 0, haber: 15000, saldo: 9474.38},

    {fecha: "28-sep", tipo: "Mercado pago", credito: 0, haber: 10000, saldo: 24681.86},
    {fecha: "28-sep", tipo: "factura 45004", credito: 7350.34, haber: 0, saldo: 34681.86},

    {fecha: "27-sep", tipo: "Mercado pago", credito: 0, haber: 15000, saldo: 27331.52},
    {fecha: "26-sep", tipo: "factura 44936", credito: 15048.23, haber: 0, saldo: 42331.52},

    {fecha: "22-sep", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 27283.29},
    {fecha: "22-sep", tipo: "Factura 44900", credito: 12916.35, haber: 0, saldo: 42283.29},

    {fecha: "21-sep", tipo: "Factura 44838", credito: 0, haber: 15000, saldo: 29366.94},
    {fecha: "20-sep", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 44366.94},
    {fecha: "19-sep", tipo: "Factura 44838", credito: 37257.16, haber: 0, saldo: 59366.94},

    {fecha: "18-sep", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 22109.78},

    {fecha: "15-sep", tipo: "Pago Factura", credito: 0, haber: 20000, saldo: 37109.78},
    {fecha: "15-sep", tipo: "Fcatura 44776", credito: 27306.29, haber: 0, saldo: 57109.78},

    {fecha: "14-sep", tipo: "Factura 44768", credito: 5063.39, haber: 0, saldo: 29803.49},

    {fecha: "13-sep", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 24740.10},
    {fecha: "12-sep", tipo: "Factura 44726", credito: 9152.38, haber: 0, saldo: 34740.10},

    {fecha: "11-sep", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 25587.72},
    {fecha: "08-sep", tipo: "Factura 26082.49", credito: 26082.49, haber: 0, saldo: 40587.72},

    {fecha: "07-sep", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 14505.23},
    {fecha: "06-sep", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 24505.23},
    {fecha: "06-sep", tipo: "Factura 44610", credito: 8422.66, haber: 0, saldo: 34505.23},

    {fecha: "05-sep", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 26082.57},
    {fecha: "05-sep", tipo: "Factura 44604", credito: 8422.66, haber: 0, saldo: 36082.57},

    {fecha: "04-sep", tipo: "Pago factura", credito: 0, haber: 15000, saldo: 32370.25},
    {fecha: "04-sep", tipo: "Factura 44584", credito: 6776.54, haber: 0, saldo: 47370.25},

    {fecha: "31-ago", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 40593.71},
    {fecha: "31-ago", tipo: "Factura 4526", credito: 30243.02, haber: 0, saldo: 50593.71},

    {fecha: "30-ago", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 20350.69},
    {fecha: "29-ago", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 30350.69},
    {fecha: "28-ago", tipo: "Pago factura", credito: 0, haber: 25000, saldo: 40350.69},

    {fecha: "25-ago", tipo: "Factura 44438", credito: 28727.58, haber: 0, saldo: 65350.69},

    {fecha: "24-ago", tipo: "Pago Factura", credito: 0, haber: 20000, saldo: 36623.11},
    {fecha: "24-ago", tipo: "Factura 44400", credito: 26238.39, haber: 0, saldo: 56623.11},

    {fecha: "23-ago", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 30384.72},
    {fecha: "22-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 40384.72},
    {fecha: "22-ago", tipo: "Factura 44364", credito: 7972.40, haber: 0, saldo: 55384.72},

    {fecha: "18-ago", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 47412.32},
    {fecha: "18-ago", tipo: "Factura 44344", credito: 30781.13, haber: 0, saldo: 67412.32},

    {fecha: "17-ago", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 36631.19},
    {fecha: "17-ago", tipo: "Factura 44300", credito: 26351.23, haber: 0, saldo: 46631.19},

    {fecha: "16-ago", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 20279.96},

    {fecha: "15-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 30279.96},
    {fecha: "15-ago", tipo: "Factura 44264", credito: 4781.67, haber: 0, saldo: 45279.96},

    {fecha: "14-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 40498.29},
    {fecha: "14-ago", tipo: "Factura 44236", credito: 22544.30, haber: 0, saldo: 55498.29},

    {fecha: "11-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 32953.99},

    {fecha: "10-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 47953.99},
    {fecha: "10-ago", tipo: "Factura 44184", credito: 31314.65, haber: 0, saldo: 62953.99},

    {fecha: "09-ago", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 31639.34},

    {fecha: "08-ago", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 41639.34},
    {fecha: "08-ago", tipo: "Factura 44124", credito: 2418.58, haber: 0, saldo: 51639.34},

    {fecha: "07-ago", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 49220.76},

    {fecha: "04-ago", tipo: "Factura 44092", credito: 13277.93, haber: 0, saldo: 69220.76},

    {fecha: "03-ago", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 55942.83},
    {fecha: "03-ago", tipo: "Factura 44066", credito: 17852.03, haber: 0, saldo: 659452.83},

    {fecha: "02-ago", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 48090.80},
    {fecha: "02-ago", tipo: "Factura 44028", credito: 27062.15, haber: 0, saldo: 58090.80},

    {fecha: "01-ago", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 31028.65},
    {fecha: "01-ago", tipo: "Factura 44012", credito: 5091.84, haber: 0, saldo: 51028.65},

    {fecha: "31-jul", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 45936.81},
    {fecha: "31-jul", tipo: "Factura 43992", credito: 25116.56, haber: 0, saldo: 65936.81},

    {fecha: "28-jul", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 40820.25},
    {fecha: "28-jul", tipo: "Factura 43982", credito: 32301.12, haber: 0, saldo: 55820.25},

    {fecha: "26-jul", tipo: "Factura 43902", credito: 23519.13, haber: 0, saldo: 23519.13},

    {fecha: "07-jul", tipo: "Pago efectivo", credito: 0, haber: 23733.23, saldo: 0},
    {fecha: "07-jul", tipo: "Factura 43512", credito: 3580.39, haber: 0, saldo: 23733.23},

    {fecha: "30-jun", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 20152.84},
    {fecha: "30-jun", tipo: "Factura 43476", credito: 6782.19, haber: 0, saldo: 30152.84},

    {fecha: "29-jun", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 23370.65},

    {fecha: "28-jun", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 33370.65},
    {fecha: "28-jun", tipo: "Factura 43416", credito: 18972.60, haber: 0, saldo: 43370.65},

    {fecha: "27-jun", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 24398.05},

    {fecha: "23-jun", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 34398.05},
    {fecha: "23-jun", tipo: "Factura 43350", credito: 23124.79, haber: 0, saldo: 44398.05},

    {fecha: "22-jun", tipo: "Mercado Pago", credito: 0, haber: 25000, saldo: 21273.26},

    {fecha: "21-jun", tipo: "factura 43284", credito: 8131.85, haber: 0, saldo: 46273.26},
    
    {fecha: "20-jun", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 38141.46},
    {fecha: "20-jun", tipo: "Factura 43282", credito: 26721.81, haber: 0, saldo: 58141.46},

    {fecha: "16-jun", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 31419.65},

    {fecha: "15-jun", tipo: "Factura 43204", credito: 13139.68, haber: 0, saldo: 41419.65},

    {fecha: "14-jun", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 28279.97},
    {fecha: "14-jun", tipo: "factura 43154", credito: 7020.58, haber: 0, saldo: 38279.97},

    {fecha: "13-jun", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 31259.39},
    {fecha: "13-jun", tipo: "factura 43128", credito: 20679.92, haber: 0, saldo: 41259.39},

    {fecha: "12-jun", tipo: "Pago Factura", credito: 0, haber: 20000, saldo: 20579.47},

    {fecha: "09-jun", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 40579.47},
    {fecha: "09-jun", tipo: "Fctaura 43092", credito: 12287.19, haber: 0, saldo: 50579.47},

    {fecha: "07-jun", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 38292.28},
    {fecha: "07-jun", tipo: "Factura 43054", credito: 7544.06, haber: 0, saldo: 48292.28},

    {fecha: "06-jun", tipo: "Pago Factura", credito: 0, haber: 15000, saldo: 40748.22},
    {fecha: "06-jun", tipo: "factura 43026", credito: 6275.80, haber: 0, saldo: 55748.22},

    {fecha: "05-jun", tipo: "Pago Factura", credito: 0, haber: 15000, saldo: 49472.42},

    {fecha: "02-jun", tipo: "Pago Factura", credito: 0, haber: 20000, saldo: 64472.42},
    {fecha: "02-jun", tipo: "Factura 42964", credito: 51868.12, haber: 0, saldo: 84472.42},

    {fecha: "01-jun", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 32604.30},

    {fecha: "31-may", tipo: "factura 42910", credito: 16936.06, haber: 0, saldo: 42604.30},

    {fecha: "30-may", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 25668.24},

    {fecha: "29-may", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 35668.24},
    {fecha: "29-may", tipo: "factura 42862", credito: 2434.08, haber: 0, saldo: 45668.24},

    {fecha: "26-may", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 43234.16},

    {fecha: "24-may", tipo: "Factura 42786", credito: 38180.49, haber: 0, saldo: 53234.16},

    {fecha: "23-may", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 15053.67},

    {fecha: "22-may", tipo: "Pago Factura", credito: 0, haber: 20000, saldo: 25053.67},

    {fecha: "19-may", tipo: "Factura 42720", credito: 24191.68, haber: 0, saldo: 45053.67},

    {fecha: "17-may", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 30861.99},

    {fecha: "16-may", tipo: "Pago Factura", credito: 0, haber: 10000, saldo: 40861.99},
    {fecha: "16-may", tipo: "Factura 42624", credito: 20405.93, haber: 0, saldo: 50861.99},

    {fecha: "15-may", tipo: "Pago Factura", credito: 0, haber: 15000, saldo: 30456.06},

    {fecha: "12-may", tipo: "Pago Factura", credito: 0, haber: 12000, saldo: 45456.06},
    {fecha: "12-may", tipo: "factura 42582", credito: 32577.32, haber: 0, saldo: 57456.06},

    {fecha: "10-may", tipo: "Pago Factura", credito: 0, haber: 14000, saldo: 34878.74},

    {fecha: "09-may", tipo: "Factura 42490", credito: 19904, haber: 0, saldo: 48878.74},

    {fecha: "08-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 28974.74},

    {fecha: "05-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 38974.74},
    {fecha: "05-may", tipo: "Factura 42420", credito: 5995.39, haber: 0, saldo: 48974.74},

    {fecha: "04-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 42979.35},
    {fecha: "04-may", tipo: "Facturta 42410", credito: 3238.91, haber: 0, saldo: 52979.35},

    {fecha: "03-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 49740.44},
    {fecha: "03-may", tipo: "Factura 42362", credito: 13253.71, haber: 0, saldo: 59740.44},

    {fecha: "02-may", tipo: "Pago efectivo", credito: 0, haber: 40000, saldo: 46486.73},

    {fecha: "28-abr", tipo: "Factura 42308", credito: 32769.02, haber: 0, saldo: 86486.73},

    {fecha: "27-abr", tipo: "Factura 42284", credito: 2142.40, haber: 0, saldo: 53717.71},

    {fecha: "26-abr", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 51575.31},

    {fecha: "21-abr", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 66575.31},
    {fecha: "21-abr", tipo: "factura 42164", credito: 48323.70, haber: 0, saldo: 76575.31},

    {fecha: "20-abr", tipo: "Pago factura", credito: 0, haber: 10000, saldo: 28251.61},

    {fecha: "19-abr", tipo: "factura 42142", credito: 2481.45, haber: 0, saldo: 38251.61},

    {fecha: "18-abr", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 35770.16},
    {fecha: "18-abr", tipo: "Factura 42094", credito: 21733.59, haber: 0, saldo: 45770.16},

    {fecha: "17-abr", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 24036.57},

    {fecha: "14-abr", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 34036.57},

    {fecha: "12-abr", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 44036.57},
    {fecha: "12-abr", tipo: "factura 41968", credito: 20477.14, haber: 10000, saldo: 54036.57},

    {fecha: "11-abr", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 333559.43},

    {fecha: "10-abr", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 43559.43},

    {fecha: "06-abr", tipo: "Pago fact + M/P", credito: 0, haber: 10000, saldo: 53559.43},
    {fecha: "06-abr", tipo: "factura 41886", credito: 41420.42, haber: 0, saldo: 63559.46},

    {fecha: "04-abr", tipo: "factura 41836", credito: 16203.05, haber: 0, saldo: 32139.04},

    {fecha: "03-abr", tipo: "Pago Efcetivo", credito: 0, haber: 10000, saldo: 15935.99},

    {fecha: "31-mar", tipo: "Pago Efcetivo", credito: 0, haber: 10000, saldo: 25935.99},
    {fecha: "31-mar", tipo: "factura 9786.08", credito: 9786.08, haber: 0, saldo: 35935.99},

    {fecha: "29-mar", tipo: "Pago Efcetivo", credito: 0, haber: 10000, saldo: 26149.91},
    {fecha: "29-mar", tipo: "Factura 41708", credito: 15188.16, haber: 0, saldo: 36149.91},

    {fecha: "28-mar", tipo: "Pago Efcetivo", credito: 0, haber: 7000, saldo: 20961.75},
    {fecha: "28-mar", tipo: "Facturas 41680", credito: 5565.78, haber: 0, saldo: 27961.75},

    {fecha: "27-mar", tipo: "Pago Efcetivo", credito: 0, haber: 10000, saldo: 22395.97},

    {fecha: "24-mar", tipo: "Pago Efcetivo", credito: 0, haber: 10000, saldo: 32395.97},
    {fecha: "24-mar", tipo: "Factura 41636", credito: 6149.51, haber: 0, saldo: 42395.97},

    {fecha: "23-mar", tipo: "Pago Efcetivo", credito: 0, haber: 7000, saldo: 36246.46},
    
    {fecha: "22-mar", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 43246.46},
    {fecha: "22-mar", tipo: "Factura 41604", credito: 28271.93, haber: 0, saldo: 53246.46},

    {fecha: "20-mar", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 24974.53},

    {fecha: "17-mar", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 34974.53},
    {fecha: "17-mar", tipo: "Factura 41488", credito: 28956.29, haber: 0, saldo: 44974.53},

    {fecha: "15-mar", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 16018.24},

    {fecha: "14-mar", tipo: "factura 41400", credito: 10054.31, haber: 0, saldo: 26018.24},

    {fecha: "13-mar", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 15963.93},

    {fecha: "10-mar", tipo: "Nota de Crediro", credito: 0, haber: 6515.78, saldo: 25963.93},
    {fecha: "10-mar", tipo: "Pago Efcetivo", credito: 0, haber: 8000, saldo: 32479.71},
    {fecha: "10-mar", tipo: "Factura 41372", credito: 12410.76, haber: 0, saldo: 40479.71},

    {fecha: "08-mar", tipo: "Pago Efcetivo", credito: 0, haber: 9000, saldo: 28068.95},

    {fecha: "06-mar", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 37068.95},
    {fecha: "06-mar", tipo: "Factura 41248", credito: 6515.78, haber: 0, saldo: 47068.95},

    {fecha: "03-mar", tipo: "Factura 41238", credito: 9871.44, haber: 0, saldo: 40553.17},

    {fecha: "02-mar", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 30681.73},
    {fecha: "02-mar", tipo: "Factura 41178", credito: 5686.56, haber: 0, saldo: 40681.73},

    {fecha: "01-mar", tipo: "Pago efcetivo", credito: 0, haber: 7000, saldo: 34995.17},

    {fecha: "28-feb", tipo: "Pago efcetivo", credito: 0, haber: 10000, saldo: 41995.17},
    {fecha: "28-feb", tipo: "Factura 41146", credito: 28391.47, haber: 0, saldo: 51995.17},

    {fecha: "27-feb", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 23603.70},

    {fecha: "24-feb", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 33603.70},
    {fecha: "24-feb", tipo: "Factura 41106", credito: 1832.30, haber: 0, saldo: 43603.70},

    {fecha: "23-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 41771.40},
    {fecha: "23-feb", tipo: "Factura 41046", credito: 11130.68, haber: 0, saldo: 51771.40},

    {fecha: "22-feb", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 40640.72},
    {fecha: "22-feb", tipo: "Factura 41014", credito: 19368.35, haber: 0, saldo: 55640.72},

    {fecha: "17-feb", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 36272.37},
    {fecha: "17-feb", tipo: "factura 40796", credito: 13844.28, haber: 0, saldo: 56272.37},

    {fecha: "16-feb", tipo: "factura 40962", credito: 10150.61, haber: 0, saldo: 42428.09},

    {fecha: "15-feb", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 32277.48},

    {fecha: "14-feb", tipo: "Factura 40896", credito: 13495.68, haber: 0, saldo: 47277.48},

    {fecha: "13-feb", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 33781.80},
    {fecha: "13-feb", tipo: "Factura 40868", credito: 9092.37, haber: 0, saldo: 43781.80},
    {fecha: "13-feb", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 34689.43},

    {fecha: "10-feb", tipo: "Factura 40858", credito: 40858, haber: 7937.82, saldo: 49689.43},

    {fecha: "09-feb", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 41751.61},
    {fecha: "09-feb", tipo: "factura 40822", credito: 41839.82, haber: 0, saldo: 51751.61},
    {fecha: "09-feb", tipo: "Factura 40798", credito: 1969.11, haber: 0, saldo: 9911.79},

    {fecha: "08-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 7942.68},
    {fecha: "08-feb", tipo: "Factura 40798", credito: 286.15, haber: 0, saldo: 17942.68},
    {fecha: "07-feb", tipo: "Factura 40758", credito: 7913, haber: 0, saldo: 17656.53},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 9743.53},
    {fecha: "03-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 19743.53},
    {fecha: "03-feb", tipo: "Factura 40700", credito: 7853.88, haber: 10000, saldo: 29743.53},
    {fecha: "02-feb", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 21889.65},
    {fecha: "01-feb", tipo: "Factura 40658", credito: 13039.72, haber: 0, saldo: 31889.65}
];

const guillermo = [
    {fecha: "01-dic", tipo: "Pago efectivo", credito: 0, haber: 74000, saldo: 10705.14},
    {fecha: "01-dic", tipo: "Factura 45952", credito: 65349.71, haber: 0, saldo: 84705.14},

    {fecha: "24-nov", tipo: "Pago efectivo", credito: 0, haber: 50000, saldo: 19355.40},
    {fecha: "24-nov", tipo: "Factura 45842", credito: 56887.57, haber: 0, saldo: 69355.40},

    {fecha: "17-11", tipo: "Pago efectivo", credito: 0, haber: 60000, saldo: 12467.83},
    {fecha: "17-11", tipo: "Factura 45726", credito: 43921.74, haber: 0, saldo: 72467.88},

    {fecha: "10-11", tipo: "Pago efectiva", credito: 0, haber: 80000, saldo: 28546.09},
    {fecha: "10-11", tipo: "Factura 45638", credito: 90966.29, haber: 0, saldo: 108546.09},

    {fecha: "27-10", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 17579.80},
    {fecha: "27-10", tipo: "Factura 45504", credito: 42753.14, haber: 0, saldo: 67579.80},

    {fecha: "20-10", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 24826.66},
    {fecha: "20-10", tipo: "Factura 45370", credito: 59697.41, haber: 0, saldo: 74826.66},

    {fecha: "13-10", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 15129.25},
    {fecha: "13-10", tipo: "Factura 45272", credito: 39295.62, haber: 0, saldo: 65129.25},

    {fecha: "06-10", tipo: "Pago efectiva", credito: 0, haber: 60000, saldo: 25833.63},
    {fecha: "06-10", tipo: "Factura 45140", credito: 85833.63, haber: 0, saldo: 85833.63},

    {fecha: "29-sep", tipo: "Pago efectiva", credito: 0, haber: 45667.85, saldo: 0},
    {fecha: "29-sep", tipo: "Factura 45028", credito: 29896.35, haber: 0, saldo: 45667.85},

    {fecha: "22-sep", tipo: "Pago efectiva", credito: 0, haber: 60000, saldo: 15771.50},
    {fecha: "22-sep", tipo: "Factura 44894", credito: 40136.24, haber: 0, saldo: 75771.50},

    {fecha: "15-sep", tipo: "Pago efectiva", credito: 0, haber: 60000, saldo: 35635.26},
    {fecha: "15-sep", tipo: "Factura 44788", credito: 53785.84, haber: 0, saldo: 95635.26},

    {fecha: "08-sep", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 41849.42},
    {fecha: "08-sep", tipo: "Factura 44674", credito: 42992.29, haber: 0, saldo: 91849.42},

    {fecha: "01-sep", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 48857.13},
    {fecha: "01-sep", tipo: "Factura 44540", credito: 34305.18, haber: 0, saldo: 98857.13},

    {fecha: "25-ago", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 64551.95},
    {fecha: "25-ago", tipo: "Factura 44426", credito: 69915.01, haber: 0, saldo: 114551.95},

    {fecha: "18-ago", tipo: "Pago efectiva", credito: 0, haber: 60000, saldo: 44636.14},
    {fecha: "18-ago", tipo: "factura 44326", credito: 75323.18, haber: 0, saldo: 104636.14},

    {fecha: "04-ago", tipo: "Pago efectiva", credito: 0, haber: 35000, saldo: 29312.96},
    {fecha: "04-ago", tipo: "Factura 44082", credito: 45698, haber: 0, saldo: 64312.96},

    {fecha: "28-jul", tipo: "Pago efectiva", credito: 0, haber: 30000, saldo: 18614.96},
    {fecha: "28-jul", tipo: "Factura 43990", credito: 47185.83, haber: 0, saldo: 48614.96},

    {fecha: "21-jul", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 1429.13},
    {fecha: "21-jul", tipo: "Factura 43824", credito: 28911.40, haber: 0, saldo: 51429.13},

    {fecha: "14-jul", tipo: "Pago efectiva", credito: 0, haber: 40000, saldo: 22517.73},
    {fecha: "14-jul", tipo: "factura 43712", credito: 34269.27, haber: 0, saldo: 62517.73},

    {fecha: "07-jul", tipo: "Pago efectiva", credito: 0, haber: 35000, saldo: 28248.46},
    {fecha: "07-jul", tipo: "Factura 43608", credito: 35005.11, haber: 0, saldo: 63248.46},

    {fecha: "30-jun", tipo: "Pago efectiva", credito: 0, haber: 35000, saldo: 28243.35},
    {fecha: "30-jun", tipo: "Factura 43478", credito: 45806.42, haber: 0, saldo: 62243.35},

    {fecha: "26-jun", tipo: "Pago efectiva", credito: 0, haber: 25000, saldo: 17436.93},
    {fecha: "26-jun", tipo: "Factura 43382", credito: 10563.24, haber: 0, saldo: 42436.93},

    {fecha: "16-jun", tipo: "Pago efectiva", credito: 0, haber: 35000, saldo: 31873.69},
    {fecha: "16-jun", tipo: "Factura 43216", credito: 30031.59, haber: 0, saldo: 66873.69},
    
    {fecha: "09-jun", tipo: "Pago efectiva", credito: 0, haber: 50000, saldo: 36842.10},
    {fecha: "09-jun", tipo: "Factura 43090", credito: 56842.10, haber: 0, saldo: 80132.39},

    {fecha: "26-may", tipo: "Pago efectiva", credito: 0, haber: 30000, saldo: 23290.29},
    {fecha: "26-may", tipo: "Factura 42844", credito: 27193.24, haber: 0, saldo: 53290.29},

    {fecha: "19-may", tipo: "Pago efectiva", credito: 0, haber: 30000, saldo: 26097.05},
    {fecha: "19-may", tipo: "Factura 42728", credito: 30417.22, haber: 0, saldo: 56097.05},

    {fecha: "12-may", tipo: "Pago efectiva", credito: 0, haber: 30000, saldo: 25679.83},
    {fecha: "12-may", tipo: "factura 42568", credito: 41534.03, haber: 0, saldo: 55679.91},

    {fecha: "08-may", tipo: "Pago efectiva", credito: 0, haber: 5000, saldo: 14145.88},
    {fecha: "08-may", tipo: "Factura Potter", credito: 5280, haber: 0, saldo: 19145.88},

    {fecha: "02-may", tipo: "Pago efectiva", credito: 0, haber: 30000, saldo: 18831.64},
    {fecha: "02-may", tipo: "Factura 42320", credito: 29421.39, haber: 0, saldo: 48831.64},

    {fecha: "21-abr", tipo: "Pago efectiva", credito: 0, haber: 40000, saldo: 19410.25},
    {fecha: "21-abr", tipo: "Factura 42194", credito: 24241.50, haber: 0, saldo: 59410.25},

    {fecha: "17-abr", tipo: "cerveza", credito: 1320, haber: 0, saldo: 35168.75},

    {fecha: "14-abr", tipo: "Pago efectivo", credito: 0, haber: 35000, saldo: 33848.75},
    {fecha: "14-abr", tipo: "factura 42056", credito: 58497.56, haber: 0, saldo: 68848.75},

    {fecha: "06-abr", tipo: "Pago efectivo", credito: 0, haber: 40000, saldo: 10351.19},
    {fecha: "06-abr", tipo: "Factura 41918", credito: 24808.33, haber: 0, saldo: 50351.19},

    {fecha: "31-mar", tipo: "Pago efectivo", credito: 0, haber: 40000, saldo: 25542.86},
    {fecha: "31-mar", tipo: "Factura 41766", credito: 39651.19, haber: 0, saldo: 65542.86},

    {fecha: "24-mar", tipo: "Pago efectivo", credito: 0, haber: 30000, saldo: 25891.67},
    {fecha: "24-mar", tipo: "Factura 41658", credito: 39216.03, haber: 0, saldo: 55891.67},

    {fecha: "20-mar", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 16675.64},
    {fecha: "20-mar", tipo: "Factura 41522", credito: 6177.60, haber: 0, saldo: 26675.64},

    {fecha: "17-mar", tipo: "Pago efectivo", credito: "", haber: 40000, saldo: 20498.04},
    {fecha: "17-mar", tipo: "Factura 41490", credito: 46206.87, haber: 0, saldo: 60498.04},

    {fecha: "03-mar", tipo: "Pago efectivo", credito: 0, haber: 36500, saldo: 14291.17},
    {fecha: "03-mar", tipo: "Factura 41228", credito: 42228.76, haber: 0, saldo: 50791.17},

    {fecha: "24-feb", tipo: "Pago efectivo", credito: 0, haber: 40000, saldo: 8562.41},
    {fecha: "24-feb", tipo: "Factura 41094", credito: 31407.69, haber: 0, saldo: 48562.41},

    {fecha: "17-feb", tipo: "Pago efectivo", credito: 0, haber: 40000, saldo: 17154.72},
    {fecha: "17-feb", tipo: "Factura 40974", credito: 44111.25, haber: 0, saldo: 57154.72},

    {fecha: "10-feb", tipo: "Pago efectivo", credito: 0, haber: 40000, saldo: 13043.47},
    {fecha: "10-feb", tipo: "Factura 40832", credito: 23018.29, haber: 0, saldo: 53043.70},

    {fecha: "03-feb", tipo: "Pago efectivo", credito: 0, haber: 30000, saldo: 30025.41},
    {fecha: "03-feb", tipo: "Factura 40722", credito: 34608.16, haber: 0, saldo: 60025.41},
    {fecha: "30-ene", tipo: "Pago efectivo", credito: 0, haber: 30000, saldo: 25417.25},
    {fecha: "30-ene", tipo: "Factura 40614", credito: 37189.72, haber: 0, saldo: 55417.25}
];

const amelia = [
    {fecha: "20-jul", tipo: "Factura 43816", credito: 27755.68, haber: 27000, saldo: 755.68},

    {fecha: "17-jul", tipo: "Pago efectivo", credito: 0, haber: 10744.15, saldo: 0},
    {fecha: "28-jun", tipo: "Pago efectivo", credito: 0, haber: 12602.93, saldo: 15824.50},

    {fecha: "23-jun", tipo: "factura 43346", credito: 15824.50, haber: 0, saldo: 28427.23},

    {fecha: "20-jun", tipo: "Mercado Pago", credito: 0, haber: 11675.36, saldo: 12602.93},

    {fecha: "17-jun", tipo: "Factura 43214", credito: 12602.93, haber: 0, saldo: 24218.29},

    {fecha: "26-may", tipo: "Mercado Pago", credito: 0, haber: 13163.41, saldo: 11675.36},
    {fecha: "26-may", tipo: "Factura 42830", credito: 11675.36, haber: 0, saldo: 24838.77},

    {fecha: "23-may", tipo: "Factura 42752", credito: 6415.70, haber: 0, saldo: 13163.41},

    {fecha: "19-may", tipo: "Factura 42636", credito: 5249.57, haber: 18574.7, saldo: 6747.71},
    {fecha: "19-may", tipo: "Factura 42726", credito: 6747.71, haber: 0, saldo: 25322.41},

    {fecha: "16-may", tipo: "Factura 42636", credito: 5249.57, haber: 0, saldo: 18574.7},

    {fecha: "09-may", tipo: "mercado Pago", credito: 0, haber: 5684.48, saldo: 13325.13},
    {fecha: "09-may", tipo: "Factura 13325.13", credito: 13325.13, haber: 0, saldo: 19009.61},

    {fecha: "08-may", tipo: "mercado Pago", credito: 0, haber: 12465.60, saldo: 5684.48},

    {fecha: "05-may", tipo: "Factura 42402", credito: 12465.60, haber: 0, saldo: 12465.60},

    {fecha: "03-may", tipo: "Mercado Pago", credito: 0, haber: 20278.25, saldo: 0},

    {fecha: "02-may", tipo: "Pago factura", credito: 0, haber: 15301.73, saldo: 20278.25},
    {fecha: "02-may", tipo: "Factura 42318", credito: 12077.05, haber: 0, saldo: 35579.98},

    {fecha: "26-abr", tipo: "Factura 42238", credito: 8201.20, haber: 0, saldo: 23502.93},

    {fecha: "21-abr", tipo: "Pago M/P", credito: 0, haber: 13290.85, saldo: 15301.73},
    {fecha: "21-abr", tipo: "factura 42106", credito:15301.73, haber: 0, saldo: 28592.58},

    {fecha: "18-abr", tipo: "factura 42106", credito: 5851.97, haber: 0, saldo: 13290.85},

    {fecha: "17-abr", tipo: "Mercado Pago", credito: 0, haber: 13466, saldo: 7438.88},

    {fecha: "14-abr", tipo: "Factura 42038", credito: 7438.88, haber: 0, saldo: 20904.88},

    {fecha: "04-abr", tipo: "Mercado Pago", credito: 0, haber: 22786.12, saldo: 13466},
    {fecha: "04-abr", tipo: "factura 41908", credito: 13466, haber: 0, saldo: 36252.16},

    {fecha: "31-mar", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 22786.12},
    {fecha: "31-mar", tipo: "Factura 41758", credito: 15742.44, haber: 0, saldo: 32786.12},

    {fecha: "23-mar", tipo: "Factura 41634", credito: 8465.84, haber: 0, saldo: 17043.68},

    {fecha: "22-mar", tipo: "Factura 41574", credito: 5687.18, haber: 0, saldo: 8577.84},

    {fecha: "20-mar", tipo: "Mercado Pago", credito: 0, haber: 10320.08, saldo: 2890.66},

    {fecha: "17-mar", tipo: "Factura 41504", credito: 2890.66, haber: 0, saldo: 13210.74},

    {fecha: "16-mar", tipo: "Factura 41454", credito: 2051.5, haber: 0, saldo: 10320.08},

    {fecha: "10-mar", tipo: "Factura 41352", credito: 8268.58, haber: 0, saldo: 8268.58},

    {fecha: "09-mar", tipo: "Mercado Pago", credito: 0, haber: 7075.68, saldo: 0},
    {fecha: "08-mar", tipo: "factura 41326", credito: 7075.68, haber: 0, saldo: 7075.68},

    {fecha: "07-mar", tipo: "Mercado Pago", credito: 0, haber: 22395.17, saldo: 0},

    {fecha: "06-mar", tipo: "Factura 41244", credito: 2760.18, haber: 0, saldo: 22395.17},

    {fecha: "03-mar", tipo: "Factura 41236", credito: 4497.76, haber: 0, saldo: 19634.99},

    {fecha: "28-feb", tipo: "Pago efcetivo", credito: 0, haber: 16000, saldo: 15137.23},
    {fecha: "28-feb", tipo: "Factura 41150", credito: 4858, haber: 0, saldo: 31137.23},

    {fecha: "17-feb", tipo: "Factura 40982", credito: 19278.17, haber: 0, saldo: 26279.23},

    {fecha: "16-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 7001.06},
    {fecha: "16-feb", tipo: "Factura 40940", credito: 8201.10, haber: 0, saldo: 17001.06},

    {fecha: "13-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 8799.96},
    {fecha: "13-feb", tipo: "Factura 40884", credito: 18799.96, haber: 0, saldo: 18799.96},

    {fecha: "1-feb", tipo: "No Hay Saldo", credito: 0, haber: 0, saldo: 0}
];

const eva = [
    {fecha: "11-may", tipo: "Mercado Pago", credito: 0, haber: 6831.39, saldo: 0},

    {fecha: "05-may", tipo: "Factura 42428", credito: 6831.39, haber: 0, saldo: 6831.39},

    {fecha: "03-mar", tipo: "Pago efectivo", credito: 0, haber: 930.83, saldo: 0},

    {fecha: "05-ene", tipo: "Mercado Pago", credito: 0, haber: 5000, saldo: 930.83},
    {fecha: "19-dic", tipo: "Pago Efectivo", credito: 0, haber: 5500, saldo: 5930.83},
    {fecha: "16-dic", tipo: "Mercado Pago", credito: 0, haber: 9000, saldo: 11430.83},
    {fecha: "16-dic", tipo: "Factura 39790", credito: 13223.78, haber: 0, saldo: 20430.83}
];

// ****** Zona 2 ****** //

const mirta = [
    {fecha: "04-dic", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 27213.70},    
    {fecha: "30-nov", tipo: "Factura 45926", credito: 47213.70, haber: 0, saldo: 47213.70},    
    {fecha: "30-nov", tipo: "Mercado Pago", credito: 0, haber: 17828.77, saldo: 0},

    {fecha: "27-nov", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 17828.77},    
    {fecha: "23-nov", tipo: "Mercado Pago", credito: 0, haber: 12000, saldo: 32828.77},    
    {fecha: "23-nov", tipo: "Factura 45808", credito: 33052.56, haber: 0, saldo: 44828.77},

    {fecha: "21-nov", tipo: "Mercado Pago", credito: 0, haber: 12000, saldo: 11776.21},    
    {fecha: "16-nov", tipo: "Mercado Pago", credito: 0, haber: 13000, saldo: 23776.21},    
    {fecha: "16-nov", tipo: "Factura 45708", credito: 19125.21, haber: 0, saldo: 36776.21},  

    {fecha: "13-nov", tipo: "Mercado Pago", credito: 0, haber: 15322.26, saldo: 17651},    
    {fecha: "09-nov", tipo: "Mercado Pago", credito: 0, haber: 22000, saldo: 32973.26},    
    {fecha: "09-nov", tipo: "Factura 45610", credito: 26229.80, haber: 0, saldo: 54973.26},    

    {fecha: "06-nov", tipo: "Mercado Pago", credito: 0, haber: 24414.28, saldo: 28743.46},    
    {fecha: "06-nov", tipo: "Factura 45526", credito: 32743.46, haber: 0, saldo: 53157.74},    

    {fecha: "26-oct", tipo: "Mercado Pago", credito: 0, haber: 5779.38, saldo: 20414.28},    
    {fecha: "26-oct", tipo: "Factura 45470", credito: 20414.28, haber: 0, saldo: 26193.66},

    {fecha: "23-oct", tipo: "Mercado Pago", credito: 0, haber: 13000, saldo: 5779.38},    
    {fecha: "23-oct", tipo: "Factura 45410", credito: 5297.40, haber: 0, saldo: 18779.38},

    {fecha: "17-oct", tipo: "Factura 45304", credito: 13481.94, haber: 0, saldo: 13481.94},    
    {fecha: "17-oct", tipo: "Mercado Pago", credito: 21684.38, haber: 0, saldo: 0},

    {fecha: "12-oct", tipo: "Pago efectivo", credito: 0, haber: 13000, saldo: 21684.38},    
    {fecha: "12-oct", tipo: "Factura 45232", credito: 16797.67, haber: 0, saldo: 34684.38},

    {fecha: "09-oct", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 17886.71},    
    {fecha: "05-oct", tipo: "Pago efectivo", credito: 0, haber: 6000, saldo: 28886.71},
    {fecha: "05-oct", tipo: "Factura 45126", credito: 19525.66, haber: 0, saldo: 34886.71},

    {fecha: "03-oct", tipo: "Mercado Pago", credito: 0, haber: 5000, saldo: 15361.05},
    {fecha: "02-oct", tipo: "Mercado Pago", credito: 0, haber: 18000, saldo: 20361.05},
    {fecha: "28-sep", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 38361.05},
    {fecha: "28-sep", tipo: "Factura 44996", credito: 22086.65, haber: 0, saldo: 53361.05},

    {fecha: "26-sep", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 31274.40},
    {fecha: "26-sep", tipo: "Factura 44932", credito: 27448.45, haber: 0, saldo: 46274.40},

    {fecha: "21-sep", tipo: "Pago efectivo", credito: 0, haber: 5000, saldo: 18825.95},
    {fecha: "21-sep", tipo: "Factura 44880", credito: 4116.58, haber: 0, saldo: 23825.95},

    {fecha: "18-sep", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 19709.37},
    {fecha: "18-sep", tipo: "Factura 44828", credito: 9086.73, haber: 0, saldo: 39709.37},

    {fecha: "15-sep", tipo: "Pago efectivo", credito: 0, haber: 12000, saldo: 30622.64},
    {fecha: "15-sep", tipo: "Factura 44792", credito: 15693.57, haber: 0, saldo: 42622.64},

    {fecha: "14-sep", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 26929.07},
    {fecha: "14-sep", tipo: "factura 44762", credito: 13978.97, haber: 0, saldo: 41929.07},

    {fecha: "11-sep", tipo: "Pago efectivo", credito: 0, haber: 13000, saldo: 27950.10},
    {fecha: "11-sep", tipo: "Factura 44688", credito: 8462.80, haber: 0, saldo: 40950.10},

    {fecha: "07-sep", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 32487.30},
    {fecha: "07-sep", tipo: "Factura 44644", credito: 23659.67, haber: 0, saldo: 42487.30},

    {fecha: "01-sep", tipo: "Factura 44562", credito: 1195.86, haber: 0, saldo: 18827.63},

    {fecha: "31-ago", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 17631.77},
    {fecha: "31-ago", tipo: "Factura 44530", credito: 12615.43, haber: 0, saldo: 25631.77},

    {fecha: "28-ago", tipo: "Pago efectivo", credito: 0, haber: 9000, saldo: 13016.34},

    {fecha: "24-ago", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 22016.34},
    {fecha: "24-ago", tipo: "factura 44408", credito: 18935.64, haber: 0, saldo: 30146.34},

    {fecha: "22-ago", tipo: "Pago efcetivo", credito: 0, haber: 7000, saldo: 11080.70},

    {fecha: "17-ago", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 18080.70},
    {fecha: "17-ago", tipo: "Factura 44318", credito: 12365.23, haber: 0, saldo: 30080.70},

    {fecha: "14-ago", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 17715.47},
    {fecha: "14-ago", tipo: "Factura 44234", credito: 3472.00, haber: 0, saldo: 27715.47},

    {fecha: "10-ago", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 24243.47},
    {fecha: "10-ago", tipo: "factura 44194", credito: 26777.95, haber: 0, saldo: 34243.47},

    {fecha: "07-ago", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 7465.52},

    {fecha: "03-ago", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 14465.52},
    {fecha: "03-ago", tipo: "factura 44062", credito: 12008.93, haber: 0, saldo: 21465.52},

    {fecha: "31-jul", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 9456.59},

    {fecha: "27-jul", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 16456.59},
    {fecha: "27-jul", tipo: "Factura 43948", credito: 13847.03, haber: 0, saldo: 23456.59},

    {fecha: "24-jul", tipo: "Pago Efectivo", credito: 0, haber: 8000, saldo: 9609.56},

    {fecha: "20-jul", tipo: "Pago Efectivo", credito: 0, haber: 11000, saldo: 17609.58},
    {fecha: "20-jul", tipo: "Factura 43812", credito: 15281.63, haber: 0, saldo: 28609.58},

    {fecha: "17-jul", tipo: "Pago Efectivo", credito: 0, haber: 8000, saldo: 13327.93},

    {fecha: "13-jul", tipo: "Pago Efectivo", credito: 0, haber: 20000, saldo: 21327.95},
    {fecha: "13-jul", tipo: "Fatura 43688", credito: 12844.37, haber: 0, saldo: 41327.93},

    {fecha: "06-jul", tipo: "Pago Efectivo", credito: 0, haber: 11000, saldo: 28483.58},
    {fecha: "06-jul", tipo: "factura 43562", credito: 25156.79, haber: 0, saldo: 39483.58},

    {fecha: "03-jul", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 14326.79},
    {fecha: "03-jul", tipo: "Factura 43496", credito: 6895.08, haber: 0, saldo: 24326.79},

    {fecha: "29-jun", tipo: "Pago Efectivo", credito: 0, haber: 8000, saldo: 17431.71},
    {fecha: "29-jun", tipo: "Factura 43456", credito: 10439.98, haber: 0, saldo: 25431.71},

    {fecha: "22-jun", tipo: "Pago Efectivo", credito: 0, haber: 5000, saldo: 21991.73},
    {fecha: "22-jun", tipo: "factura 43322", credito: 17995.42, haber: 0, saldo: 26991.73},

    {fecha: "20-jun", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 8996.31},

    {fecha: "15-jun", tipo: "Pago Efectivo", credito: 0, haber: 6000, saldo: 18996.31},
    {fecha: "15-jun", tipo: "Factura 43198", credito: 14008.41, haber: 0, saldo: 24996.31},

    {fecha: "12-jun", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 10987.90},

    {fecha: "08-jun", tipo: "Pago Efectivo", credito: 0, haber: 6000, saldo: 20987.90},
    {fecha: "08-jun", tipo: "Factura 43078", credito: 16602.98, haber: 0, saldo: 26987.90},

    {fecha: "05-jun", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 7384.94},

    {fecha: "01-jun", tipo: "Pago Efectivo", credito: 0, haber: 9000, saldo: 17384.94},
    {fecha: "01-jun", tipo: "Factura 42936", credito: 13752.73, haber: 0, saldo: 26384.94},

    {fecha: "29-may", tipo: "Pago Efectivo", credito: 0, haber: 8500, saldo: 12632.21},
    {fecha: "29-may", tipo: "factura 42880", credito: 3839.18, haber: 0, saldo: 21132.21},

    {fecha: "25-may", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 17293.03},
    {fecha: "25-may", tipo: "Factura 42812", credito: 14486.49, haber: 0, saldo: 29293.03},

    {fecha: "22-may", tipo: "Pago Efectivo", credito: 0, haber: 5000, saldo: 14806.54},

    {fecha: "18-may", tipo: "Pago Efectivo", credito: 0, haber: 13500, saldo: 19806.54},
    {fecha: "18-may", tipo: "Factura 42678", credito: 15799.4, haber: 0, saldo: 33306.54},

    {fecha: "11-may", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 17507.14},
    {fecha: "11-may", tipo: "Factura 42532", credito: 15003.36, haber: 0, saldo: 29507.14},

    {fecha: "11-may", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 17507.14},
    {fecha: "11-may", tipo: "factura 42532", credito: 15003.36, haber: 0, saldo: 29507.14},
    
    {fecha: "04may", tipo: "Pago Efectivo", credito: 0, haber: 11500, saldo: 14503.78},
    {fecha: "04may", tipo: "factura 42414", credito: 11304.72, haber: 0, saldo: 27503.78},

    {fecha: "27-abr", tipo: "Pago Efectivo", credito: 0, haber: 11500, saldo: 16199.06},
    {fecha: "27-abr", tipo: "Factura 42280", credito: 12156.03, haber: 0, saldo: 27699.06},

    {fecha: "20-abr", tipo: "N/C", credito: 0, haber: 395.86, saldo: 15543.03},
    {fecha: "20-abr", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 15938.89},
    {fecha: "20-abr", tipo: "Factura 42158", credito: 15212.28, haber: 0, saldo: 25938.89},

    {fecha: "13-abr", tipo: "Pago efectivo", credito: 0, haber: 9000, saldo: 10726.61},
    {fecha: "13-abr", tipo: "Factura 41996", credito: 10952.22, haber: 0, saldo: 19726.61},

    {fecha: "10-abr", tipo: "Pago efectivo", credito: 0, haber: 9000, saldo: 8774.39},

    {fecha: "30-mar", tipo: "Pago efectivo", credito: 0, haber: 9000, saldo: 14548.95},
    {fecha: "30-mar", tipo: "Factura 41730", credito: 6571.54, haber: 0, saldo: 23548.95},

    {fecha: "27-mar", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 16977.41},

    {fecha: "23-mar", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 26977.41},
    {fecha: "23-mar", tipo: "Factura 41616", credito: 23058.4, haber: 0, saldo: 34977.41},

    {fecha: "16-mar", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 11919.01},
    {fecha: "16-mar", tipo: "Factura 41480", credito: 12472.74, haber: 0, saldo: 22919.01},

    {fecha: "02-mar", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 9188.89},
    {fecha: "02-mar", tipo: "factura 41192", credito: 10269.76, haber: 0, saldo: 17188.89},

    {fecha: "27-feb", tipo: "Pago efectivo", credito: 0, haber: 6000, saldo: 6919.13},
    {fecha: "27-feb", tipo: "Factura 41130", credito: 5854.61, haber: 0, saldo: 12919.13},

    {fecha: "23-feb", tipo: "Pago efectivo", credito: 0, haber: 8500, saldo: 7061.52},
    {fecha: "23-feb", tipo: "Factura 41050", credito: 3853.83, haber: 0, saldo: 15561.52},

    {fecha: "16-feb", tipo: "Pago efectivo", credito: 9000, haber: 0, saldo: 11707.69},
    {fecha: "16-feb", tipo: "Factura 40944", credito: 7509.07, haber: 0, saldo: 20707.69},

    {fecha: "13-feb", tipo: "Pago efectivo", credito: 0, haber: 9500, saldo: 13198.62},
    {fecha: "13-feb", tipo: "Factura 40864", credito: 13200.62, haber: 0, saldo: 22698.62},

    {fecha: "02-ene", tipo: "Pago efectivo", credito: 0, haber: 11500, saldo: 9498},
    {fecha: "02-ene", tipo: "Factura 40694", credito: 8511.77, haber: 0, saldo: 20998}
];

const melisa = [
    {fecha: "30-nov", tipo: "Mercado Pago", credito: 0, haber: 806.73, saldo: 0},
    {fecha: "21-nov", tipo: "Mercado Pago", credito: 0, haber: 12000, saldo: 806.73},
    {fecha: "12-oct", tipo: "Factura 45242", credito: 10178.48, haber: 0, saldo: 12806.73},

    {fecha: "28-ago", tipo: "Pago Efectivo", credito: 0, haber: 3500, saldo: 2628.25},

    {fecha: "14-ago", tipo: "Pago Efectivo", credito: 0, haber: 4700, saldo: 6128.25},
    {fecha: "14-ago", tipo: "Factura 44766", credito: 9412.77, haber: 0, saldo: 10828.25},

    {fecha: "17-ago", tipo: "Pago Efectivo", credito: 0, haber: 9900, saldo: 1415.48},
    {fecha: "17-ago", tipo: "Factura 44316", credito: 5593.96, haber: 0, saldo: 11315.48},

    {fecha: "03-ago", tipo: "Pago Efectivo", credito: 0, haber: 2000, saldo: 5721.52},
    {fecha: "03-ago", tipo: "Factura 44070", credito: 1360.58, haber: 0, saldo: 7721.52},

    {fecha: "27-jun", tipo: "Pago Efectivo", credito: 0, haber: 8500, saldo: 6360.94},
    {fecha: "27-jun", tipo: "Factura 43938", credito: 9690.33, haber: 0, saldo: 14860.94},

    {fecha: "09-jun", tipo: "Pago Efectivo", credito: 0, haber: 4500, saldo: 5170.61},
    {fecha: "09-jun", tipo: "Factura 43450", credito: 9670.61, haber: 0, saldo: 9670.61},

    {fecha: "08-jun", tipo: "Pago Efectivo", credito: 0, haber: 1185.94, saldo: 0},

    {fecha: "18-may", tipo: "Pago Efectivo", credito: 0, haber: 3400, saldo: 1185.94},
    {fecha: "18-may", tipo: "Factura 42684", credito: 2003.59, haber: 0, saldo: 4585.94},

    {fecha: "11-may", tipo: "Pago Efectivo", credito: 0, haber: 4500, saldo: 2582.35},
    {fecha: "11-may", tipo: "factura 42552", credito: 1260.58, haber: 0, saldo: 7082.35},

    {fecha: "04-may", tipo: "Pago Efectivo", credito: 0, haber: 2200, saldo: 5821.77},
    {fecha: "04-may", tipo: "Factura 42404", credito: 3963.02, haber: 0, saldo: 8021.77},

    {fecha: "27-abr", tipo: "Pago Efectivo", credito: 0, haber: 3000, saldo: 4058.75},

    {fecha: "17-abr", tipo: "Factura 42080", credito: 6438.79, haber: 0, saldo: 7058.75},

    {fecha: "05-Abr", tipo: "Pago Efectivo", credito: 0, haber: 8000, saldo: 619.96},
    {fecha: "05-Abr", tipo: "Factura 41880", credito: 2995.62, haber: 0, saldo: 8619.96},

    {fecha: "30-mar", tipo: "Pago Efectivo", credito: 0, haber: 3500, saldo: 5624.34},
    {fecha: "30-mar", tipo: "factura 41736", credito: 5158.88, haber: 0, saldo: 9124.34},

    {fecha: "23-mar", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 3965.46},
    {fecha: "23-mar", tipo: "Factura 41618", credito: 1101.06, haber: 0, saldo: 10965.46},

    {fecha: "16-mar", tipo: "Pago Efectivo", credito: 0, haber: 5700, saldo: 9864.4},
    {fecha: "16-mar", tipo: "Factura 41474", credito: 10785.46, haber: 0, saldo: 15564.40},

    {fecha: "13-mar", tipo: "Pago Efectivo", credito: 0, haber: 4000, saldo: 4778.94},
    {fecha: "13-mar", tipo: "Factura 41386", credito: 4530.37, haber: 0, saldo: 8778.94},
    {fecha: "13-mar", tipo: "Mercado pado", credito: 0, haber: 3600, saldo: 4248.57},

    {fecha: "01-mar", tipo: "Mercado pado", credito: 0, haber: 1900, saldo: 7848.57},

    {fecha: "23-feb", tipo: "Pago Efectivo", credito: 0, haber: 2400, saldo: 9748.57},
    {fecha: "23-feb", tipo: "Factura 41066", credito: 6388.93, haber: 0, saldo: 12148.57},

    {fecha: "01-feb", tipo: "Mercado Pago", credito: 0, haber: 3000, saldo: 5759.64},
    {fecha: "23-ene", tipo: "Pago Efectivo", credito: 0, haber: 5200, saldo: 8759.64},
    {fecha: "23-ene", tipo: "Mercado Pago", credito: 0, haber: 2000, saldo: 13959.64},
    {fecha: "16-dic", tipo: "Mercado Pago", credito: 0, haber: 9000, saldo: 15959.64},
    {fecha: "16-dic", tipo: "Factura 40350", credito: 5441.13, haber: 0, saldo: 24959.64},
    {fecha: "15-dic", tipo: "Pago efectivo", credito: 0, haber: 4500, saldo: 19518.51},
    {fecha: "15-dic", tipo: "Factura 39774", credito: 3271.88, haber: 0, saldo: 24018.51}
];

// ******* Zona 3 ***** //

const viviana = [
    {fecha: "21-nov", tipo: "Mercado PAgo", credito: 0, haber: 5907.3, saldo: 0},
    {fecha: "17-nov", tipo: "Factura 45736", credito: 12907.36, haber: 7000, saldo: 5907.36},

    {fecha: "06-oct", tipo: "Ajuste", credito: 0, haber: 2335.07, saldo: 0},
    {fecha: "06-oct", tipo: "Pago Factura", credito: 0, haber: 3000, saldo: 2335.07},
    {fecha: "02-oct", tipo: "Pago Factura", credito: 0, haber: 4500, saldo: 5335.07},

    {fecha: "29-sep", tipo: "Pago Factura", credito: 0, haber: 7000, saldo: 9835.07},
    {fecha: "29-sep", tipo: "Factura 45046", credito: 11902.52, haber: 0, saldo: 16835.07},

    {fecha: "18-ago", tipo: "Pago Factura", credito: 0, haber: 4000, saldo: 4932.55},
    {fecha: "18-ago", tipo: "Factura 44786", credito: 8932.55, haber: 0, saldo: 8932.55},

    {fecha: "25-ago", tipo: "Factura 44416", credito: 0, haber: 2075.08, saldo: 0},

    {fecha: "04-ago", tipo: "Pago Fabian", credito: 0, haber: 3500, saldo: 2075.08},
    {fecha: "04-ago", tipo: "factura 44094", credito: 2782.56, haber: 0, saldo: 5575.08},

    {fecha: "21-jul", tipo: "Pago Fabian", credito: 0, haber: 4000, saldo: 2792.52},
    {fecha: "21-jul", tipo: "Factura 43842", credito: 2782.56, haber: 0, saldo: 6792.52},

    {fecha: "17-jul", tipo: "Pago Fabian", credito: 0, haber: 3000, saldo: 4009.96},
    {fecha: "17-jul", tipo: "Factura 43598", credito: 4496.06, haber: 0, saldo: 7009.96},

    {fecha: "30-jun", tipo: "Pago Fabian", credito: 0, haber: 3000, saldo: 2513.90},
    {fecha: "30-jun", tipo: "Factura 43492", credito: 1133.40, haber: 0, saldo: 5513.90},

    {fecha: "17-jun", tipo: "Pago Fabian", credito: 0, haber: 4000, saldo: 4380.20},
    {fecha: "17-jun", tipo: "Factura 43220", credito: 6790.68, haber: 0, saldo: 8380.20},

    {fecha: "02-jun", tipo: "Pago Fabian", credito: 0, haber: 3000, saldo: 1589.52},
    {fecha: "02-jun", tipo: "Factura 42970", credito: 4589.52, haber: 0, saldo: 4589.52},

    {fecha: "1-feb", tipo: "No Hay Saldo", credito: 0, haber: 0, saldo: 0}
];

const jorge = [
    {fecha: "04-dic", tipo: "Pago efectivo", credito: 0, haber: 35704.01, saldo: 30000},
    {fecha: "04-dic", tipo: "Factura 45970", credito: 43126.26, haber: 0, saldo: 65704.01},

    {fecha: "27-nov", tipo: "Pago efectivo", credito: 0, haber: 25000, saldo: 22577.75},
    {fecha: "27-nov", tipo: "Factura 45868", credito: 21577.75, haber: 0, saldo: 47577.75},

    {fecha: "23-nov", tipo: "Pago efectivo", credito: 0, haber: 22543.05, saldo: 26000},
    {fecha: "23-nov", tipo: "Factura 45810", credito: 28543.05, haber: 0, saldo: 48543.05},

    {fecha: "21-nov", tipo: "Pago efectivo", credito: 0, haber: 22188.59, saldo: 20000},
    {fecha: "21-nov", tipo: "Factura 45766", credito: 23337.96, haber: 0, saldo: 42188.59},

    {fecha: "13-nov", tipo: "Pago efectivo", credito: 0, haber: 30000, saldo: 18850.63},
    {fecha: "13-nov", tipo: "Factura 45658", credito: 23939.74, haber: 0, saldo: 48850.63},

    {fecha: "06-nov", tipo: "Pago efectivo", credito: 0, haber: 30000, saldo: 24910.89},
    {fecha: "06-nov", tipo: "Factura 45524", credito: 43024.40, haber: 0, saldo: 54910.89},

    {fecha: "26-oct", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 11886.49},
    {fecha: "26-oct", tipo: "Factura 45460", credito: 3254.73, haber: 0, saldo: 26886.49},

    {fecha: "23-oct", tipo: "Pago efectivo", credito: 0, haber: 25000, saldo: 23631.76},
    {fecha: "23-oct", tipo: "Factura 45400", credito: 33909.34, haber: 0, saldo: 48631.76},

    {fecha: "17-oct", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 14722.42},
    {fecha: "17-oct", tipo: "Factura 45306", credito: 11566.19, haber: 0, saldo: 34722.42},

    {fecha: "09-oct", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 23156.24},
    {fecha: "09-oct", tipo: "Factura 45162", credito: 24309.50, haber: 0, saldo: 43156.24},

    {fecha: "02-oct", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 18846.74},
    {fecha: "02-oct", tipo: "factura 45064", credito: 18323.34, haber: 0, saldo: 33846.74},

    {fecha: "26-sep", tipo: "Pago efectivo", credito: 0, haber: 16000, saldo: 15523.40},
    {fecha: "26-sep", tipo: "Factura 44960", credito: 21523.40, haber: 0, saldo: 31523.40},

    {fecha: "21-sep", tipo: "Pago efectivo", credito: 0, haber: 8289.70, saldo: 10000},
    {fecha: "18-sep", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 18289.70},
    {fecha: "18-sep", tipo: "Factura 44820", credito: 30289.70, haber: 0, saldo: 38289.70},

    {fecha: "14-sep", tipo: "Pago efectivo", credito: 0, haber: 10866.56, saldo: 8000},
    {fecha: "14-sep", tipo: "Factura 44770", credito: 7729.42, haber: 0, saldo: 18866.56},

    {fecha: "11-sep", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 11137.14},
    {fecha: "11-sep", tipo: "Factura 44704", credito: 10697.62, haber: 0, saldo: 26137.14},

    {fecha: "04-sep", tipo: "Pago efectivo", credito: 0, haber: 25000, saldo: 15439.52},
    {fecha: "04-sep", tipo: "Factura 44574", credito: 24313.91, haber: 0, saldo: 40439.52},

    {fecha: "31-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 16125.61},
    {fecha: "31-ago", tipo: "Factura 44520", credito: 8874.40, haber: 0, saldo: 31125.61},

    {fecha: "28-ago", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 22251.21},
    {fecha: "28-ago", tipo: "Factura 44462", credito: 30625.03, haber: 0, saldo: 42251.21},

    {fecha: "17-ago", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 11626.18},
    {fecha: "17-ago", tipo: "Factura 44314", credito: 8874.77, haber: 0, saldo: 21626.18},

    {fecha: "14-ago", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 12751.41},
    {fecha: "14-ago", tipo: "Factura 44230", credito: 12751.41, haber: 0, saldo: 27751.41},

    {fecha: "07-ago", tipo: "Pago efectivo", credito: 0, haber: 25202.68, saldo: 15000},
    {fecha: "07-ago", tipo: "Factura 44114", credito: 24351.64, haber: 0, saldo: 40202.68},

    {fecha: "31-jul", tipo: "Pago efectivo", credito: 0, haber: 25000, saldo: 15851.04},
    {fecha: "31-jul", tipo: "Factura 43998", credito: 24466.62, haber: 0, saldo: 40851.04},

    {fecha: "24-jul", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 16384.42},
    {fecha: "24-jul", tipo: "factura 43858", credito: 17724.25, haber: 0, saldo: 36384.42},

    {fecha: "17-jul", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 18660.17},
    {fecha: "17-jul", tipo: "Factura 43744", credito: 24547.63, haber: 0, saldo: 38660.17},

    {fecha: "10-jul", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 14112.54},
    {fecha: "10-jul", tipo: "Factura 43634", credito: 23652.69, haber: 0, saldo: 29112.54},

    {fecha: "20-jun", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 8443.03},
    {fecha: "20-jun", tipo: "factura 43252", credito: 14084.41, haber: 0, saldo: 23443.03},

    {fecha: "12-jun", tipo: "Pago efectivo", credito: 0, haber: 16000, saldo: 9358.62},
    {fecha: "12-jun", tipo: "Factura 43114", credito: 15966.45, haber: 0, saldo: 25358.62},

    {fecha: "06-jun", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 9392.17},
    {fecha: "06-jun", tipo: "factura 42998", credito: 16997.68, haber: 0, saldo: 24392.17},

    {fecha: "29-may", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 7414.19},
    {fecha: "29-may", tipo: "factura 42884", credito: 11912.97, haber: 0, saldo: 22414.49},

    {fecha: "22-may", tipo: "Pago efectivo", credito: 0, haber: 14000, saldo: 10501.52},
    {fecha: "22-may", tipo: "Factura 42738", credito: 13151.99, haber: 0, saldo: 24501.52},

    {fecha: "15-may", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 11349.53},
    {fecha: "15-may", tipo: "Factura 42606", credito: 17961.68, haber: 0, saldo: 26349.53},

    {fecha: "08-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 8387.85},
    {fecha: "08-may", tipo: "factura 42474", credito: 11387.85, haber: 0, saldo: 18387.85},

    {fecha: "28-may", tipo: "Pago efectivo", credito: 0, haber: 13604.89, saldo: 7000},
    {fecha: "28-may", tipo: "Factura 42324", credito: 12065.96, haber: 0, saldo: 20604.89},
    
    {fecha: "26-abr", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 8538.93},
    {fecha: "26-abr", tipo: "Factura 42244", credito: 15061, haber: 0, saldo: 23538.93},

    {fecha: "18-abr", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 8477.93},

    {fecha: "17-abr", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 16477.93},
    {fecha: "17-abr", tipo: "Factura 42078", credito: 22747.99, haber: 0, saldo: 36477.93},
    
    {fecha: "10-abr", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 13729.94},
    {fecha: "10-abr", tipo: "Factura 41940", credito: 20729.69, haber: 0, saldo: 28729.94},

    {fecha: "03-abr", tipo: "Pago efectivo", credito: 0, haber: 8520, saldo: 8000.25},
    {fecha: "03-abr", tipo: "Factura 41804", credito: 8806.86, haber: 0, saldo: 16520.85},

    {fecha: "30-mar", tipo: "Pago efectivo", credito: 0, haber: 7000, saldo: 7713.99},

    {fecha: "27-mar", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 14713.99},
    {fecha: "27-mar", tipo: "factura 41674", credito: 18598.28, haber: 0, saldo: 29713.99},

    {fecha: "20-mar", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 11115.71},
    {fecha: "20-mar", tipo: "Factura 41528", credito: 15137.47, haber: 0, saldo: 21115.71},

    {fecha: "13-mar", tipo: "Pago efectivo", credito: 0, haber: 6000, saldo: 5977.24},

    {fecha: "06-mar", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 11977.24},
    {fecha: "06-mar", tipo: "Factura 41256", credito: 8752.21, haber: 0, saldo: 21977.24},

    {fecha: "13-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 13225.03},
    {fecha: "13-feb", tipo: "Factura 40866", credito: 12024.27, haber: 0, saldo: 23225.03},

    {fecha: "6-feb", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 11200.76},
    {fecha: "6-feb", tipo: "Factura 40744", credito: 12217.37, haber: 0, saldo: 21200.76}
];

const emilse = [
    {fecha: "04-dic", tipo: "Factura 45968", credito: 57744.66, haber: 0, saldo: 57744.66},
    {fecha: "04-dic", tipo: "Pago efcetivo", credito: 0, haber: 56321.69, saldo: 0},

    {fecha: "27-nov", tipo: "Factura 45864", credito: 56321.69, haber: 0, saldo: 56321.69},
    {fecha: "27-nov", tipo: "Pago efcetivo", credito: 0, haber: 18572.92, saldo: 0},

    {fecha: "21-nov", tipo: "Factura 45772", credito: 18572.92, haber: 0, saldo: 18572.92},
    {fecha: "21-nov", tipo: "Mercado Pago", credito: 0, haber: 18572.92, saldo: 0},

    {fecha: "14-nov", tipo: "Pago efectivo", credito: 0, haber: 19761.61, saldo: 55198.6},

    {fecha: "13-nov", tipo: "Pago efectivo", credito: 0, haber: 12123.24, saldo: 74960.27},
    {fecha: "13-nov", tipo: "Factura 45664", credito: 55198.66, haber: 0, saldo: 87083.51},

    {fecha: "06-11", tipo: "Factura 45536", credito: 31884.85, haber: 0, saldo: 31884.85},
    {fecha: "06-11", tipo: "Mercado Pago", credito: 0, haber: 19761.61, saldo: 0},

    {fecha: "23-oct", tipo: "Factura 45406", credito: 19761.61, haber: 0, saldo: 19761.61},
    {fecha: "23-oct", tipo: "Mercado Pago", credito: 0, haber: 16267.66, saldo: 0},

    {fecha: "17-oct", tipo: "Factura 45278", credito: 0, haber: 16267.66, saldo: 16267.66},
    {fecha: "17-oct", tipo: "Mercado Pago", credito: 30961.51, haber: 0, saldo: 0},

    {fecha: "09-oct", tipo: "Factura 45170", credito: 30961.51, haber: 0, saldo: 30961.51},
    {fecha: "09-oct", tipo: "Pago factura", credito: 0, haber: 39438.84, saldo: 0},

    {fecha: "02-oct", tipo: "Factura 45066", credito: 39438.84, haber: 0, saldo: 39438.84},
    {fecha: "02-oct", tipo: "Pago Factura", credito: 0, haber: 33487.87, saldo: 0},

    {fecha: "26-sep", tipo: "Factura 44948", credito: 33487.87, haber: 0, saldo: 33487.87},
    {fecha: "26-sep", tipo: "Pago Efetivo", credito: 0, haber: 34735.27, saldo: 0},

    {fecha: "18-sep", tipo: "Pago Efetivo", credito: 0, haber: 26250, saldo: 34735.27},
    {fecha: "18-sep", tipo: "Factura 44816", credito: 32974.46, haber: 0, saldo: 60985.27},

    {fecha: "11-sep", tipo: "Factura 44706", credito: 28010.81, haber: 0, saldo: 28010.81},
    {fecha: "11-sep", tipo: "Pago efectivo", credito: 22752.74, haber: 0, saldo: 0},

    {fecha: "04-sep", tipo: "Factura 44576", credito: 22752.74, haber: 0, saldo: 22752.74},
    {fecha: "04-sep", tipo: "Pago efcetivo", credito: 0, haber: 28012.62, saldo: 0},

    {fecha: "29-ago", tipo: "Factura 4472", credito: 28012.62, haber: 0, saldo: 28012.62},
    {fecha: "29-ago", tipo: "Pago efcetivo", credito: 0, haber: 35063.28, saldo: 0},

    {fecha: "22-ago", tipo: "Factura 44250", credito: 35063.28, haber: 0, saldo: 35063.28},
    {fecha: "22-ago", tipo: "Pago factura", credito: 41803.29, haber: 0, saldo: 0},

    {fecha: "14-ago", tipo: "Factura 44250", credito: 41803.29, haber: 0, saldo: 41803.29},
    {fecha: "14-ago", tipo: "Pago factura", credito: 0, haber: 26038.42, saldo: 0},

    {fecha: "07-ago", tipo: "Factura 44000", credito: 26038.42, haber: 0, saldo: 26038.42},
    {fecha: "07-ago", tipo: "Pago Efectivo", credito: 0, haber: 16296.22, saldo: 0},

    {fecha: "31-jul", tipo: "Factura 44000", credito: 16296.22, haber: 0, saldo: 16296.22},
    {fecha: "31-jul", tipo: "Pago efectivo", credito: 0, haber: 22377.52, saldo: 0},

    {fecha: "24-jul", tipo: "Factura 43864", credito: 22377.52, haber: 0, saldo: 22377.52},
    {fecha: "24-jul", tipo: "Pago efectivo", credito: 0, haber: 28253.67, saldo: 0},

    {fecha: "17-jul", tipo: "Factura 43750", credito: 28253.67, haber: 0, saldo: 28253.67},
    {fecha: "17-jul", tipo: "Pago efectivo", credito: 0, haber: 18053.04, saldo: 0},

    {fecha: "10-jul", tipo: "Factura 43636", credito: 18053.04, haber: 0, saldo: 18053.04},
    {fecha: "10-jul", tipo: "Pago efcetivo", credito: 0, haber: 23273.90, saldo: 0},

    {fecha: "03-jul", tipo: "Factura 43494", credito: 23273.80, haber: 0, saldo: 23273.80},
    {fecha: "03-jul", tipo: "Mercado Pago", credito: 0, haber: 35731.07, saldo: 0},

    {fecha: "27-jun", tipo: "Factura 43402", credito: 17158.47, haber: 0, saldo: 35731.07},

    {fecha: "26-jun", tipo: "Factura 43376", credito: 18572.60, haber: 0, saldo: 18572.60},
    {fecha: "26-jun", tipo: "Pago Efectivo", credito: 0, haber: 12861.96, saldo: 0},

    {fecha: "20-jun", tipo: "Pago Efectivo", credito: 0, haber: 19311.92, saldo: 12861.96},
    {fecha: "20-jun", tipo: "Factura 43256", credito: 12861.96, haber: 0, saldo: 32173.88},

    {fecha: "12-jun", tipo: "Pago Efectivo", credito: 0, haber: 23649.77, saldo: 19311.92},
    {fecha: "12-jun", tipo: "Factura 43120", credito: 19311.92, haber: 0, saldo: 42961.69},

    {fecha: "06-jun", tipo: "Pago Efectivo", credito: 0, haber: 41251.44, saldo: 23649.77},
    {fecha: "06-jun", tipo: "Factura 43000", credito: 23649.77, haber: 0, saldo: 64901.21},

    {fecha: "29-may", tipo: "Pago Efectivo", credito: 0, haber: 15503.15, saldo: 41251.44},
    {fecha: "29-may", tipo: "Factura 42878", credito: 41251.44, haber: 0, saldo: 56754.59},

    {fecha: "22-may", tipo: "Factura 42634", credito: 0, haber: 23972.20, saldo: 15503.15},
    {fecha: "22-may", tipo: "Factura 42746", credito: 15503.15, haber: 0, saldo: 37475.35},

    {fecha: "16-may", tipo: "Factura 42634", credito: 6765.66, haber: 0, saldo: 23972.20},

    {fecha: "15-may", tipo: "Pago efectivo", credito: 0, haber: 21210.65, saldo: 17206.54},
    {fecha: "15-may", tipo: "factura 42604", credito: 17206.54, haber: 0, saldo: 38417.17},

    {fecha: "08-may", tipo: "Pago efectivo", credito: 0, haber: 28502.44, saldo: 21210.63},
    {fecha: "08-may", tipo: "factura 42470", credito: 21210.63, haber: 0, saldo: 49713.07},

    {fecha: "02-may", tipo: "Pago efectivo", credito: 15482.31, haber: 0, saldo: 28502.44},
    {fecha: "02-may", tipo: "Factura 42358", credito: 28502.44, haber: 0, saldo: 43984.75},

    {fecha: "26-abr", tipo: "Pago efectivo", credito: 0, haber: 17638.05, saldo: 15482.31},
    {fecha: "26-abr", tipo: "Factura 42256", credito: 15482.31, haber: 0, saldo: 33120.36},

    {fecha: "17-abr", tipo: "Pago efectivo", credito: 0, haber: 7693.67, saldo: 17638.05},
    {fecha: "17-abr", tipo: "Factura 42072", credito: 17638.05, haber: 0, saldo: 25331.72},

    {fecha: "10-abr", tipo: "Pago efectivo", credito: 0, haber: 34070.51, saldo: 74693.67},
    {fecha: "10-abr", tipo: "Factura 41946", credito: 7693.67, haber: 0, saldo: 41764.18},

    {fecha: "03-abr", tipo: "Pago efectivo", credito: 0, haber: 13478.92, saldo: 34070.51},
    {fecha: "03-abr", tipo: "factura 41808", credito: 34070.51, haber: 0, saldo: 47549.43},

    {fecha: "27-mar", tipo: "Pago efectivo", credito: 0, haber: 11737.42, saldo: 13478.92},
    {fecha: "27-mar", tipo: "Factura 41670", credito: 13478.92, haber: 0, saldo: 25216.34},

    {fecha: "13-mar", tipo: "Pago efectivo", credito: 0, haber: 17226.94, saldo: 11737.42},
    {fecha: "13-mar", tipo: "Factura 41258", credito: 11737.42, haber: 0, saldo: 28964.36},

    {fecha: "03-mar", tipo: "Pago efectivo", credito: 0, haber: 16867.66, saldo: 17226.94},
    {fecha: "03-mar", tipo: "Factura 41258", credito: 17226.94, haber: 0, saldo: 34094.60},

    {fecha: "27-feb", tipo: "Pago efectivo", credito: 0, haber: 11864.89, saldo: 16867.66},
    {fecha: "27-feb", tipo: "Factura 41124", credito: 16867.66, haber: 0, saldo: 28732.55},

    {fecha: "22-feb", tipo: "Pago efectivo", credito: 0, haber: 18648.31, saldo: 11864.89},
    {fecha: "22-feb", tipo: "Factura 41020", credito: 11864.89, haber: 0, saldo: 30513.20},

    {fecha: "13-feb", tipo: "Pago efectivo", credito: 0, haber: 16885.98, saldo: 18648.31},
    {fecha: "13-feb", tipo: "Factura 40860", credito: 18648.31, haber: 0, saldo: 35534.29},

    {fecha: "6-feb", tipo: "Pago efectivo", credito: 0, haber: 18368.20, saldo: 16885.98},
    {fecha: "6-feb", tipo: "Factura 40748", credito: 16885.98, haber: 0, saldo: 35254.18}
];

// ***** Zona 4 ****** //

const carlos = [
    {fecha: "01-dic", tipo: "Mercado Pago", credito: 0, haber: 5800, saldo: 95594.93},
    {fecha: "30-nov", tipo: "Mercado Pago", credito: 0, haber: 730, saldo: 101394.93},
    {fecha: "29-nov", tipo: "Factura 45918", credito: 27608.17, haber: 0, saldo: 102124.93},
    {fecha: "28-nov", tipo: "Factura 45898", credito: 74516.76, haber: 0, saldo: 74516.76},

    {fecha: "28-nov", tipo: "Mercado Pago", credito: 0, haber: 28268.83, saldo: 0},
    {fecha: "27-nov", tipo: "Mercado Pago", credito: 0, haber: 54700, saldo: 28268.83},
    {fecha: "23-nov", tipo: "Mercado Pago", credito: 0, haber: 6920, saldo: 82968.83},
    {fecha: "22-nov", tipo: "Mercado Pago", credito: 0, haber: 4280, saldo: 89888.83},
    {fecha: "22-nov", tipo: "Factura 45784", credito: 81907.01, haber: 0, saldo: 94168.83},

    {fecha: "21-nov", tipo: "Mercado Pago", credito: 0, haber: 60000, saldo: 12261.82},
    {fecha: "16-nov", tipo: "Mercado Pago", credito: 0, haber: 2100, saldo: 72261.82},
    {fecha: "08-nov", tipo: "Factura 45568", credito: 24836.22, haber: 0, saldo: 74361.82},

    {fecha: "07-nov", tipo: "Factura 45564", credito: 49525.60, haber: 0, saldo: 49525.60},
    {fecha: "07-nov", tipo: "Mercado Pago", credito: 0, haber: 17638.81, saldo: 0},

    {fecha: "06-nov", tipo: "Mercado Pago", credito: 0, haber: 60420, saldo: 17638.81},
    {fecha: "27-oct", tipo: "Mercado Pago", credito: 0, haber: 5908, saldo: 78058.81},
    {fecha: "27-oct", tipo: "Factura 45498", credito: 56433.37, haber: 0, saldo: 83966.81},

    {fecha: "26-oct", tipo: "Mercado Pago", credito: 0, haber: 18730, saldo: 27533.44},
    {fecha: "25-oct", tipo: "Mercado Pago", credito: 0, haber: 4920, saldo: 46263.44},
    {fecha: "24-oct", tipo: "Mercado Pago", credito: 0, haber: 5760, saldo: 51183.44},
    {fecha: "23-oct", tipo: "Mercado Pago", credito: 0, haber: 36384, saldo: 56943.44},
    {fecha: "20-oct", tipo: "Mercado Pago", credito: 0, haber: 3160, saldo: 93327.44},
    {fecha: "19-oct", tipo: "Mercado Pago", credito: 0, haber: 1280, saldo: 96487.44},
    {fecha: "18-oct", tipo: "Mercado Pago", credito: 0, haber: 2400, saldo: 97767.44},
    {fecha: "18-oct", tipo: "Factura 45314", credito: 100167.44, haber: 0, saldo: 100167.44},

    {fecha: "18-oct", tipo: "Mercado Pago", credito: 0, haber: 16850.32, saldo: 0},
    {fecha: "17-oct", tipo: "Mercado Pago", credito: 0, haber: 39549, saldo: 16850.32},
    {fecha: "13-oct", tipo: "Mercado Pago", credito: 0, haber: 15130, saldo: 56399.32},
    {fecha: "12-oct", tipo: "Mercado Pago", credito: 0, haber: 6534, saldo: 71529.32},
    {fecha: "11-oct", tipo: "Mercado Pago", credito: 0, haber: 2000, saldo: 78063.32},
    {fecha: "10-oct", tipo: "Mercado Pago", credito: 0, haber: 4850, saldo: 80063.32},
    {fecha: "10-oct", tipo: "Factura 45204", credito: 75215.79, haber: 0, saldo: 84913.32},

    {fecha: "09-oct", tipo: "Mercado Pago", credito: 0, haber: 39056, saldo: 9697.53},
    {fecha: "06-oct", tipo: "Mercado Pago", credito: 0, haber: 5820, saldo: 48753.53},
    {fecha: "05-oct", tipo: "Mercado Pago", credito: 0, haber: 12770, saldo: 54573.53},
    {fecha: "04-oct", tipo: "Mercado Pago", credito: 0, haber: 10240, saldo: 67343.53},
    {fecha: "03-oct", tipo: "Mercado Pago", credito: 0, haber: 2450, saldo: 77583.53},
    {fecha: "03-oct", tipo: "Factura 45088", credito: 74558.01, haber: 0, saldo: 80033.53},

    {fecha: "02-oct", tipo: "Mercado pago", credito: 0, haber: 19580, saldo: 5475.52},
    {fecha: "29-sep", tipo: "Mercado pago", credito: 0, haber: 10220, saldo: 25055.52},
    {fecha: "28-sep", tipo: "Mercado pago", credito: 0, haber: 6353, saldo: 35275.52},
    {fecha: "27-sep", tipo: "Mercado pago", credito: 0, haber: 2350, saldo: 41628.52},
    {fecha: "26-sep", tipo: "Pago Factura", credito: 0, haber: 43112, saldo: 43978.52},
    {fecha: "26-sep", tipo: "factura 44956", credito: 16947.30, haber: 0, saldo: 87090.52},
    {fecha: "22-sep", tipo: "factura 44896", credito: 70147.69, haber: 0, saldo: 70143.22},

    {fecha: "22-sep", tipo: "Mercado Pago", credito: 0, haber: 28876, saldo: -4.47},
    {fecha: "21-sep", tipo: "Mercado Pago", credito: 0, haber: 3920, saldo: 28871.53},
    {fecha: "20-sep", tipo: "Mercado Pago", credito: 0, haber: 3305, saldo: 32791.53},
    {fecha: "19-sep", tipo: "Mercado Pago", credito: 0, haber: 7330, saldo: 36096.53},
    {fecha: "18-sep", tipo: "Mercado Pago", credito: 0, haber: 7520, saldo: 43426.53},
    {fecha: "15-sep", tipo: "Mercado Pago", credito: 0, haber: 2190, saldo: 50966.53},
    {fecha: "12-sep", tipo: "Mercado Pago", credito: 0, haber: 1550, saldo: 53136.53},
    {fecha: "11-sep", tipo: "Mercado Pago", credito: 0, haber: 13230, saldo: 54685.53},
    {fecha: "08-sep", tipo: "Factura 44676", credito: 69880.90, haber: 0, saldo: 67916.53},

    {fecha: "08-sep", tipo: "Mercado Pago", credito: 0, haber: 9603, saldo: -1964.37},
    {fecha: "07-sep", tipo: "Mercado Pago", credito: 0, haber: 14954, saldo: 7638.63},
    {fecha: "05-sep", tipo: "Mercado Pago", credito: 0, haber: 3300, saldo: 22592.63},
    {fecha: "04-sep", tipo: "Mercado Pago", credito: 0, haber: 18344, saldo: 25892.63},
    {fecha: "31-ago", tipo: "Mercado Pago", credito: 0, haber: 2900, saldo: 44236.63},
    {fecha: "30-ago", tipo: "Mercado Pago", credito: 0, haber: 3640, saldo: 47136.63},
    {fecha: "29-ago", tipo: "Mercado Pago", credito: 0, haber: 3440, saldo: 50776.63},
    {fecha: "28-ago", tipo: "Mercado Pago", credito: 0, haber: 12840, saldo: 54216.63},
    {fecha: "25-ago", tipo: "Factura 44452", credito: 75746.40, haber: 0, saldo: 67056.63},

    {fecha: "24-ago", tipo: "Mercado Pago", credito: 0, haber: 4920, saldo: -8689.77},
    {fecha: "23-ago", tipo: "Mercado Pago", credito: 0, haber: 2200, saldo: -3769.77},
    {fecha: "23-ago", tipo: "Mercado Pago", credito: 0, haber: 20890, saldo: -1569.77},
    {fecha: "18-ago", tipo: "Mercado Pago", credito: 0, haber: 17154, saldo: 19320.23},
    {fecha: "17-ago", tipo: "Mercado Pago", credito: 0, haber: 800, saldo: 36474.23},
    {fecha: "16-ago", tipo: "Mercado Pago", credito: 0, haber: 18548, saldo: 37274.23},
    {fecha: "15-ago", tipo: "Mercado Pago", credito: 0, haber: 8850, saldo: 55822.23},
    {fecha: "14-ago", tipo: "Mercado Pago", credito: 0, haber: 8300, saldo: 64672.23},
    {fecha: "10-ago", tipo: "Mercado Pago", credito: 0, haber: 11610, saldo: 72972.23},
    {fecha: "10-ago", tipo: "Factura 44196", credito: 72977.47, haber: 0, saldo: 84582.23},

    {fecha: "08-ago", tipo: "Mercado Pago", credito: 0, haber: 2110, saldo: 11604.76},
    {fecha: "07-ago", tipo: "Mercado Pago", credito: 0, haber: 33850, saldo: 13814.76},
    {fecha: "05-ago", tipo: "Mercado Pago", credito: 0, haber: 4040, saldo: 47664.76},
    {fecha: "04-ago", tipo: "Mercado Pago", credito: 0, haber: 8980, saldo: 51704.76},
    {fecha: "02-ago", tipo: "Mercado Pago", credito: 0, haber: 2600, saldo: 60684.76},
    {fecha: "01-ago", tipo: "Mercado Pago", credito: 0, haber: 3180, saldo: 63284.76},

    {fecha: "31-jul", tipo: "Mercado Pago", credito: 0, haber: 9922, saldo: 66444.76},

    {fecha: "28-jul", tipo: "Factura 43958", credito: 74767.92, haber: 0, saldo: 76366.76},
    {fecha: "28-jul", tipo: "Mercado pago", credito: 0, haber: 44080, saldo: 1598.84},

    {fecha: "27-jul", tipo: "Mercado pago", credito: 0, haber: 14630, saldo: 45678.84},

    {fecha: "26-jul", tipo: "Mercado pago", credito: 0, haber: 2700, saldo: 60308.84},

    {fecha: "25-jul", tipo: "Mercado pago", credito: 0, haber: 1400, saldo: 63008.84},

    {fecha: "24-jul", tipo: "Mercado pago", credito: 0, haber: 5362, saldo: 64408.84},

    {fecha: "21-jul", tipo: "Mercado Pago", credito: 0, haber: 6225, saldo: 69770.84},

    {fecha: "20-jul", tipo: "factura 43800", credito: 75983.64, haber: 0, saldo: 75995.84},
    {fecha: "20-jul", tipo: "Mercado Pago", credito: 0, haber: 33160, saldo: 12.20},

    {fecha: "19-jul", tipo: "Mercado Pago", credito: 0, haber: 960, saldo: 33172.20},

    {fecha: "18-jul", tipo: "Pago efectivo", credito: 0, haber: 1610, saldo: 34132.20},

    {fecha: "17-jul", tipo: "Pago efectivo", credito: 0, haber: 9268, saldo: 35742.20},
    {fecha: "14-jul", tipo: "Pago efectivo", credito: 0, haber: 2750, saldo: 45010.20},
    {fecha: "12-jul", tipo: "Pago efectivo", credito: 0, haber: 15747, saldo: 47780.20},

    {fecha: "10-jul", tipo: "Factura 43650", credito: 63527.20, haber: 0, saldo: 63527.20},
    {fecha: "10-jul", tipo: "Pago efectivo", credito: 0, haber: 6027.77, saldo: 0},

    {fecha: "10-jul", tipo: "Mercado Pago", credito: 0, haber: 29794, saldo: 6027.77},

    {fecha: "06-jul", tipo: "Mercado Pago", credito: 0, haber: 3600, saldo: 35821.77},

    {fecha: "03-jul", tipo: "Mercado Pago", credito: 0, haber: 4778, saldo: 39421.77},

    {fecha: "30-jun", tipo: "Factura 43484", credito: 41855.29, haber: 0, saldo: 44199.77},
    {fecha: "30-jun", tipo: "Mercado Pago", credito: 0, haber: 14900, saldo: 2344.48},

    {fecha: "29-jun", tipo: "Mercado Pago", credito: 0, haber: 5350, saldo: 17244.48},

    {fecha: "28-jun", tipo: "Mercado Pago", credito: 0, haber: 2607, saldo: 22594.48},

    {fecha: "27-jun", tipo: "Mercado Pago", credito: 0, haber: 11426, saldo: 25201.48},

    {fecha: "23-jun", tipo: "Mercado Pago", credito: 0, haber: 26525, saldo: 36627.48},
    {fecha: "23-jun", tipo: "Factura 43338", credito: 42898.46, haber: 0, saldo: 63152.48},

    {fecha: "22-jun", tipo: "Mercado Pago", credito: 0, haber: 2656, saldo: 20254.02},

    {fecha: "21-jun", tipo: "Mercado Pago", credito: 0, haber: 9650, saldo: 22910.02},

    {fecha: "20-jun", tipo: "Mercado Pago", credito: 0, haber: 24420, saldo: 32560.02},

    {fecha: "17-jun", tipo: "Mercado Pago", credito: 0, haber: 9628, saldo: 56980.02},

    {fecha: "15-jun", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 66608.02},
    {fecha: "15-jun", tipo: "factura 43192", credito: 65529.07, haber: 0, saldo: 86608.02},

    {fecha: "13-jun", tipo: "Mercado Pago", credito: 0, haber: 3380, saldo: 22078.95},

    {fecha: "12-jun", tipo: "Mercado Pago", credito: 0, haber: 9974, saldo: 25458.95},

    {fecha: "09-jun", tipo: "Mercado Pago", credito: 0, haber: 8570, saldo: 35432.95},

    {fecha: "08-jun", tipo: "Mercado Pago", credito: 0, haber: 5770, saldo: 44002.95},

    {fecha: "07-jun", tipo: "Mercado Pago", credito: 0, haber: 1190, saldo: 49772.95},

    {fecha: "06-jun", tipo: "Mercado Pago", credito: 0, haber: 3000, saldo: 50962.95},
    {fecha: "06-jun", tipo: "Factura 43008", credito: 53723.93, haber: 0, saldo: 53962.95},

    {fecha: "05-jun", tipo: "Mercado Pago", credito: 0, haber: 27655, saldo: 239.02},

    {fecha: "01-jun", tipo: "Mercado Pago", credito: 0, haber: 700, saldo: 29329.02},

    {fecha: "31-may", tipo: "Mercado Pago", credito: 0, haber: 1300, saldo: 30029.02},

    {fecha: "30-may", tipo: "Mercado Pago", credito: 0, haber: 3370, saldo: 31329.02},

    {fecha: "29-may", tipo: "Mercado Pago", credito: 0, haber: 4400, saldo: 34669.02},

    {fecha: "26-may", tipo: "Mercado Pago", credito: 0, haber: 16240, saldo: 39099.02},

    {fecha: "24-may", tipo: "Factura 42782", credito: 53559.54, haber: 13223, saldo: 55339.02},
    {fecha: "24-may", tipo: "Mercado Pago", credito: 0, haber: 26500, saldo: 1779.48},

    {fecha: "22-may", tipo: "Mercado Pago", credito: 0, haber: 13223, saldo: 28279.48},

    {fecha: "19-may", tipo: "Mercado Pago", credito: 0, haber: 3178, saldo: 41502.48},

    {fecha: "18-may", tipo: "Factura 42670", credito: 45056.05, haber: 0, saldo: 44680.48},
    {fecha: "18-may", tipo: "Pago efectivo", credito: 0, haber: 15170, saldo: -375.57},

    {fecha: "17-may", tipo: "Mercado Pago", credito: 0, haber: 900, saldo: 14794.43},

    {fecha: "16-may", tipo: "Mercado Pago", credito: 0, haber: 3980, saldo: 15694.43},

    {fecha: "15-may", tipo: "Mercado Pago", credito: 0, haber: 14864, saldo: 19674.43},

    {fecha: "12-may", tipo: "Mercado Pago", credito: 0, haber: 5600, saldo: 34538.43},

    {fecha: "10-may", tipo: "Mercado Pago", credito: 0, haber: 3330, saldo: 40138.43},

    {fecha: "09-may", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 43468.43},

    {fecha: "08-may", tipo: "Mercado Pago", credito: 0, haber: 13084, saldo: 53468.43},

    {fecha: "05-may", tipo: "Mercado Pago", credito: 0, haber: 66863.22, saldo: 66552.43},
    {fecha: "05-may", tipo: "Mercado Pago", credito: 0, haber: 12046, saldo: -310.79},

    {fecha: "03-may", tipo: "Mercado Pago", credito: 0, haber: 5255, saldo: 11735.21},

    {fecha: "02-may", tipo: "Mercado Pago", credito: 0, haber: 26112, saldo: 16990.21},

    {fecha: "27-abr", tipo: "Nota credito", credito: 0, haber: 178.50, saldo: 43102.21},
    {fecha: "27-abr", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 43280.71},
    {fecha: "27-abr", tipo: "factura 42226", credito: 44151.48, haber: 0, saldo: 58280.71},

    {fecha: "26-abr", tipo: "Mercado Pago", credito: 0, haber: 19227, saldo: 14129.23},

    {fecha: "19-abr", tipo: "Mercado Pago", credito: 0, haber: 6420, saldo: 33356.23},

    {fecha: "18-abr", tipo: "Mercado Pago", credito: 0, haber: 500, saldo: 39776.23},

    {fecha: "17-abr", tipo: "Mercado Pago", credito: 0, haber: 14881, saldo: 40276.23},

    {fecha: "14-abr", tipo: "factura 42042", credito: 59507.28, haber: 0, saldo: 55157.23},
    {fecha: "14-abr", tipo: "Mercado Pago", credito: 0, haber: 26560, saldo: -4350.05},

    {fecha: "12-abr", tipo: "Mercado Pago", credito: 0, haber: 5258, saldo: 22209.95},

    {fecha: "10-abr", tipo: "Mercado Pago", credito: 0, haber: 17737, saldo: 27467.95},

    {fecha: "06-abr", tipo: "Mercado Pago", credito: 0, haber: 8500, saldo: 45207.95},
    {fecha: "06-abr", tipo: "factura 41926", credito: 45646.28, haber: 0, saldo: 53707.95},

    {fecha: "04-abr", tipo: "Mercado Pago", credito: 0, haber: 5000, saldo: 10016.67},
    {fecha: "04-abr", tipo: "Mercado Pago", credito: 0, haber: 4600, saldo: 15016.67},

    {fecha: "03-abr", tipo: "Mercado Pago", credito: 0, haber: 16030, saldo: 19616.67},

    {fecha: "31-mar", tipo: "Pago Efectivo", credito: 0, haber: 13000, saldo: 35646.67},
    {fecha: "31-mar", tipo: "Mercado Pago", credito: 0, haber: 2480, saldo: 48646.67},
    {fecha: "31-mar", tipo: "Factura 41770", credito: 36041.92, haber: 0, saldo: 51126.67},

    {fecha: "30-mar", tipo: "Mercado Pago", credito: 0, haber: 5000, saldo: 15084.75},

    {fecha: "28-mar", tipo: "Mercado Pago", credito: 0, haber: 5000, saldo: 20084.75},

    {fecha: "27-mar", tipo: "Mercado Pago", credito: 0, haber: 21300, saldo: 25084.75},

    {fecha: "24-mar", tipo: "Mercado Pago", credito: 0, haber: 17680, saldo: 46384.75},
    {fecha: "24-mar", tipo: "Factura 41628", credito: 45459.80, haber: 0, saldo: 64064.75},

    {fecha: "20-mar", tipo: "Mercado Pago", credito: 0, haber: 8584, saldo: 27304.95},

    {fecha: "17-mar", tipo: "Pago efcetivo", credito: 0, haber: 12000, saldo: 35888.95},
    {fecha: "17-mar", tipo: "Factura 41518", credito: 35894.47, haber: 0, saldo: 47888.95},

    {fecha: "16-mar", tipo: "Mercado Pago", credito: 0, haber: 5881.30, saldo: 11994.48},

    {fecha: "15-mar", tipo: "Mercado Pago", credito: 0, haber: 3240, saldo: 17875.78},

    {fecha: "14-mar", tipo: "Mercado Pago", credito: 0, haber: 750, saldo: 21115.78},

    {fecha: "13-mar", tipo: "Mercado Pago", credito: 0, haber: 11150, saldo: 21865.78},

    {fecha: "10-mar", tipo: "Mercado Pago", credito: 0, haber: 3914, saldo: 33843.78},

    {fecha: "09-mar", tipo: "Mercado Pago", credito: 35283.59, haber: 0, saldo: 36929.78},
    {fecha: "09-mar", tipo: "Mercado Pago", credito: 0, haber: 220, saldo: 1646.19},

    {fecha: "08-mar", tipo: "Mercado Pago", credito: 0, haber: 2940, saldo: 1866.19},

    {fecha: "07-mar", tipo: "Mercado Pago", credito: 0, haber: 13712, saldo: 4806.19},

    {fecha: "06-mar", tipo: "Mercdao Pago", credito: 0, haber: 4065, saldo: 18518.19},

    {fecha: "03-mar", tipo: "Factura 41216", credito: 31539.45, haber: 0, saldo: 22583.19},
    {fecha: "03-mar", tipo: "Mercado Pago", credito: 0, haber: 8000, saldo: -8956.26},
    {fecha: "03-mar", tipo: "Pago Factura", credito: 0, haber: 20000, saldo: -956.26},

    {fecha: "01-mar", tipo: "Mercado Pago", credito: 0, haber: 980, saldo: 19043.74},
    {fecha: "28-feb", tipo: "Mercado Pago", credito: 0, haber: 6990, saldo: 20023.74},

    {fecha: "27-feb", tipo: "Mercado Pago", credito: 0, haber: 2935.00, saldo: 27013.74},

    {fecha: "24-feb", tipo: "Factura 41088", credito: 30416.98, haber: 0, saldo: 29948.74},
    {fecha: "24-feb", tipo: "Pago efectivo", credito: 0, haber: 13000, saldo: -468.24},
    {fecha: "24-feb", tipo: "Mercado Pago", credito: 0, haber: 420, saldo: 12531.76},
    {fecha: "24-feb", tipo: "Mercado Pago", credito: 0, haber: 560, saldo: 12951.76},

    {fecha: "23-feb", tipo: "Mercado Pago", credito: 0, haber: 900, saldo: 13511.76},

    {fecha: "22-feb", tipo: "Mercado Pago", credito: 0, haber: 14136, saldo: 14411.76},

    {fecha: "17-feb", tipo: "Mercado Pago", credito: 0, haber: 800, saldo: 28547.76},
    {fecha: "17-feb", tipo: "Pago efectivo", credito: 0, haber: 21300, saldo: 29347.76},
    {fecha: "17-feb", tipo: "factura 41012", credito: 29493.10, haber: 0, saldo: 50647.76},

    {fecha: "16-feb", tipo: "Mercado Pago", credito: 0, haber: 1700, saldo: 21154.66},

    {fecha: "15-feb", tipo: "Mercado Pago", credito: 0, haber: 440, saldo: 22854.66},

    {fecha: "14-feb", tipo: "Mercado Pago", credito: 0, haber: 800, saldo: 23294.66},

    {fecha: "13-feb", tipo: "Mercado Pago", credito: 0, haber: 11600, saldo: 24094.66},

    {fecha: "10-feb", tipo: "Mercado Pago", credito: 0, haber: 2300, saldo: 35694.66},

    {fecha: "09-feb", tipo: "Factura 40796", credito: 38045.8, haber: 0, saldo: 37994.66},
    {fecha: "09-feb", tipo: "Pago efectivo", credito: 0, haber: 13600, saldo: -51.14},
    {fecha: "09-feb", tipo: "Mercado Pago", credito: 0, haber: 1920, saldo: 13548.86},

    {fecha: "08-feb", tipo: "Mercado Pago", credito: 0, haber: 1110, saldo: 15468.86},
    {fecha: "08-feb", tipo: "Mercado Pago", credito: 0, haber: 1470, saldo: 16578.86},
    {fecha: "08-feb", tipo: "Mercado Pago", credito: 0, haber: 2000, saldo: 18048.86},
    {fecha: "08-feb", tipo: "Mercado Pago", credito: 0, haber: 1000, saldo: 20048.86},

    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 2840, saldo: 21048.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 3600, saldo: 23888.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 1580, saldo: 27488.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 550, saldo: 29068.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 1320, saldo: 29618.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 443, saldo: 30938.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 440, saldo: 31381.86},
    {fecha: "06-feb", tipo: "Mercado Pago", credito: 0, haber: 950, saldo: 31821.86},

    {fecha: "24-ene", tipo: "Factura 40748", credito: 40506, haber: 0, saldo: 32771.86}
];

const rossana = [
    {fecha: "28-nov", tipo: "Factura 45880", credito: 10627.38, haber: 0, saldo: 10627.38}, 
    {fecha: "28-nov", tipo: "Pago efectivo", credito: 0, haber: 10587.22, saldo: 0},

    {fecha: "14-nov", tipo: "Factura 45670", credito: 10587.22, haber: 0, saldo: 10587.22}, 
    {fecha: "14-nov", tipo: "Pago efectivo", credito: 0, haber: 6414.05, saldo: 0},

    {fecha: "07-nov", tipo: "Factura 45562", credito: 6414.05, haber: 0, saldo: 6414.05}, 
    {fecha: "07-nov", tipo: "Pago efectivo", credito: 0, haber: 6206.82, saldo: 0},

    {fecha: "24-oct", tipo: "Factura 45416", credito: 6206.82, haber: 0, saldo: 6206.82}, 
    {fecha: "24-oct", tipo: "Mercado Pago", credito: 0, haber: 4178.71, saldo: 0},

    {fecha: "17-oct", tipo: "Factura 45298", credito: 4178.71, haber: 0, saldo: 4178.71}, 
    {fecha: "17-oct", tipo: "Mercado Pago", credito: 0, haber: 7988.36, saldo: 0},

    {fecha: "10-oct", tipo: "Factura 45188", credito: 7988.36, haber: 0, saldo: 7988.36}, 
    {fecha: "10-oct", tipo: "Pago efectivo", credito: 0, haber: 9429.33, saldo: 0}, 

    {fecha: "03-oct", tipo: "Factura 45082", credito: 9429.33, haber: 0, saldo: 9429.33}, 
    {fecha: "03-oct", tipo: "Mercado Pago", credito: 0, haber: 8115.55, saldo: 0}, 

    {fecha: "26-sep", tipo: "Mercado Pago", credito: 0, haber: 9924.11, saldo: 8115.55}, 
    {fecha: "26-sep", tipo: "Factura 44938", credito: 8115.55, haber: 0, saldo: 18039.66}, 

    {fecha: "12-sep", tipo: "Mercado Pago", credito: 0, haber: 7760, saldo: 9924.11}, 
    {fecha: "12-sep", tipo: "Factura 44712", credito: 7395.04, haber: 0, saldo: 17684.11},

    {fecha: "05-sep", tipo: "Factura 44600", credito: 10289.07, haber: 0, saldo: 10289.07}, 
    {fecha: "05-sep", tipo: "Mercado Pago", credito: 0, haber: 6295.04, saldo: 0}, 

    {fecha: "29-ago", tipo: "Factura 44476", credito: 6295.04, haber: 0, saldo: 6295.04}, 
    {fecha: "29-ago", tipo: "Pago efectivo", credito: 0, haber: 11200.82, saldo: 0}, 

    {fecha: "15-ago", tipo: "Factura 44258", credito: 11200.82, haber: 0, saldo: 11200.82},
    {fecha: "15-ago", tipo: "Pago Efectivo", credito: 0, haber: 5862.60, saldo: 0},

    {fecha: "08-ago", tipo: "Pago Efectivo", credito: 5862.60, haber: 0, saldo: 5862.60},
    {fecha: "08-ago", tipo: "Pago Efectivo", credito: 0, haber: 3538.83, saldo: 0},

    {fecha: "02-ago", tipo: "Pago Efectivo", credito: 0, haber: 5678.16, saldo: 3538.83},
    {fecha: "02-ago", tipo: "Factura 44046", credito: 3538.83, haber: 0, saldo: 9126.99},

    {fecha: "25-jul", tipo: "Factura 43894", credito: 5678.16, haber: 0, saldo: 5678.16},
    {fecha: "25-jul", tipo: "Pago factura", credito: 0, haber: 5675.25, saldo: 0},

    {fecha: "18-jul", tipo: "Factura 43646", credito: 5675.25, haber: 0, saldo: 5675.25},
    {fecha: "18-jul", tipo: "Pago efcetivo", credito: 0, haber: 6199.6, saldo: 0},

    {fecha: "11-jul", tipo: "Factura 43646", credito: 6199.60, haber: 0, saldo: 6199.60},
    {fecha: "11-jul", tipo: "Pago efectivo", credito: 0, haber: 7762.28, saldo: 0},

    {fecha: "04-jul", tipo: "Mercado Pago", credito: 0, haber: 6782.70, saldo: 7762.28},
    {fecha: "04-jul", tipo: "Factura 43524", credito: 7762.28, haber: 0, saldo: 14544.98},

    {fecha: "27-jun", tipo: "Factura 43398", credito: 6782.70, haber: 0, saldo: 6782.70},
    {fecha: "27-jun", tipo: "Pago Efectivo", credito: 0, haber: 1952.94, saldo: 0},

    {fecha: "20-jun", tipo: "Pago Efectivo", credito: 0, haber: 6123.16, saldo: 1952.94},
    {fecha: "20-jun", tipo: "Factura 43272", credito: 1952.94, haber: 0, saldo: 8076.10},

    {fecha: "13-jun", tipo: "Pago Efectivo", credito: 0, haber: 3733.51, saldo: 6123.16},
    {fecha: "13-jun", tipo: "Factura 43136", credito: 6123.16, haber: 0, saldo: 9856.67},

    {fecha: "06-jun", tipo: "Pago Efectivo", credito: 0, haber: 6316.05, saldo: 3733.51},
    {fecha: "06-jun", tipo: "factura 43012", credito: 3733.51, haber: 0, saldo: 10049.56},

    {fecha: "25-may", tipo: "Pago Efectivo", credito: 0, haber: 6638.11, saldo: 6316.05},
    {fecha: "25-may", tipo: "Factura 42892", credito: 6316.05, haber: 0, saldo: 12954.16},

    {fecha: "23-may", tipo: "Pago Efectivo", credito: 0, haber: 5158.62, saldo: 6638.11},
    {fecha: "23-may", tipo: "Factura 42764", credito: 6638.11, haber: 0, saldo: 11796.73},

    {fecha: "16-may", tipo: "Pago Efectivo", credito: 0, haber: 7124.37, saldo: 5158.62},
    {fecha: "16-may", tipo: "Factura 42640", credito: 5158.62, haber: 0, saldo: 12282.99},

    {fecha: "10-may", tipo: "Pago Efectivo", credito: 3456.32, haber: 0, saldo: 7124.37},
    {fecha: "10-may", tipo: "factura 42508", credito: 7124.37, haber: 0, saldo: 10580.69},

    {fecha: "09-may", tipo: "Mercado Pago", credito: 0, haber: 1590, saldo: 3456.32},

    {fecha: "02-may", tipo: "Pago Efectivo", credito: 0, haber: 5355.28, saldo: 5046.32},
    {fecha: "02-may", tipo: "Factura 42350", credito: 5046.32, haber: 0, saldo: 10401.6},

    {fecha: "26-abr", tipo: "Pago Efectivo", credito: 0, haber: 5069.83, saldo: 5355.28},
    {fecha: "26-abr", tipo: "Factura 42230", credito: 5355.28, haber: 0, saldo: 10425.11},

    {fecha: "18-abr", tipo: "Pago Efectivo", credito: 0, haber: 3198.30, saldo: 5069.83},
    {fecha: "18-abr", tipo: "factura 42100", credito: 5069.83, haber: 0, saldo: 8268.13},

    {fecha: "04-abr", tipo: "Pago Efectivo", credito: 0, haber: 2201.99, saldo: 3198.30},
    {fecha: "04-abr", tipo: "Factura 41860", credito: 3198.30, haber: 0, saldo: 5400.29},

    {fecha: "21-mar", tipo: "Pago Efectivo", credito: 0, haber: 6955.15, saldo: 2201.99},
    {fecha: "21-mar", tipo: "Factura 41556", credito: 2201.99, haber: 0, saldo: 9157.14},

    {fecha: "14-mar", tipo: "Pago Efectivo", credito: 0, haber: 5000, saldo: 6955.15},
    {fecha: "14-mar", tipo: "Factura 41404", credito: 3277.50, haber: 0, saldo: 11955.15},

    {fecha: "07-mar", tipo: "Factura 41286", credito: 8677.55, haber: 0, saldo: 8677.55},

    {fecha: "06-mar", tipo: "Mercado Pago", credito: 5151.38, haber: 0, saldo: 0},

    {fecha: "22-feb", tipo: "Pago efectivo", credito: 0, haber: 4042.62, saldo: 5151.38},
    {fecha: "22-feb", tipo: "Factura 41034", credito: 5151.38, haber: 0, saldo: 9194.00},

    {fecha: "14-feb", tipo: "Pago efectivo", credito: 0, haber: 5607.28, saldo: 4042.62},
    {fecha: "14-feb", tipo: "Factura 40906", credito: 4042.62, haber: 0, saldo: 9650.28},

    {fecha: "31-ene", tipo: "Factura 40636", credito: 5607.66, haber: 0, saldo: 5607.66}
];

const fernando = [
    {fecha: "05-dic", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 19058.54},
    {fecha: "05-dic", tipo: "Fcatura 45984", credito: 18690.69, haber: 0, saldo: 39058.54},

    {fecha: "28-nov", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 20367.85},
    {fecha: "28-nov", tipo: "Factura 45890", credito: 21378.38, haber: 0, saldo: 40367.85},

    {fecha: "22-nov", tipo: "Mercado Pago", credito: 0, haber: 20000, saldo: 18989.47},
    {fecha: "22-nov", tipo: "Factura 45794", credito: 22140.88, haber: 0, saldo: 38989.47},

    {fecha: "14-nov", tipo: "Mercado Pago", credito: 0, haber: 25000, saldo: 16848.59},
    {fecha: "14-nov", tipo: "Factura 45672", credito: 22389.67, haber: 0, saldo: 41848.59},

    {fecha: "07-nov", tipo: "Mercado Pago", credito: 0, haber: 15000, saldo: 19458.92},
    {fecha: "07-nov", tipo: "Factura 45548", credito: 11105.84, haber: 0, saldo: 34458.92},

    {fecha: "25-oct", tipo: "Factura 45438", credito: 3201.41, haber: 0, saldo: 23353.08},

    {fecha: "24-oct", tipo: "Pago efectivo", credito: 0, haber: 15000, saldo: 20151.67},
    {fecha: "24-oct", tipo: "Factura 45418", credito: 19350.86, haber: 0, saldo: 35151.67},

    {fecha: "11-oct", tipo: "Pago efectivo", credito: 0, haber: 5000, saldo: 15800.81},
    {fecha: "11-oct", tipo: "Factura 45228", credito: 7053.11, haber: 0, saldo: 20800.81},

    {fecha: "10-oct", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 13747.70},
    {fecha: "10-oct", tipo: "Factura 45202", credito: 18349.15, haber: 0, saldo: 33747.70},

    {fecha: "03-oct", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 15398.55},
    {fecha: "03-oct", tipo: "Factura 45078", credito: 10258.66, haber: 0, saldo: 27398.55},

    {fecha: "19-sep", tipo: "Pago Efectivo", credito: 0, haber: 15000, saldo: 17139.89},
    {fecha: "19-sep", tipo: "Factura 44844", credito: 14208.52, haber: 0, saldo: 32139.89},

    {fecha: "05-sep", tipo: "Pago Efectivo", credito: 0, haber: 30000, saldo: 17931.37},
    {fecha: "05-sep", tipo: "Factura 44606", credito: 29587.94, haber: 0, saldo: 47931.37},

    {fecha: "23-ago", tipo: "Pago Efectivo", credito: 0, haber: 15000, saldo: 18343.43},
    {fecha: "23-ago", tipo: "Factura 44396", credito: 20347.37, haber: 0, saldo: 33343.43},

    {fecha: "08-ago", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 12996.06},
    {fecha: "08-ago", tipo: "Factura 44128", credito: 10966.69, haber: 0, saldo: 24996.06},

    {fecha: "01-ago", tipo: "Pago Efectivo", credito: 0, haber: 12000, saldo: 14029.37},
    {fecha: "01-ago", tipo: "Factura 44026", credito: 13991.57, haber: 0, saldo: 26029.37},

    {fecha: "25-jul", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 12037.80},
    {fecha: "25-jul", tipo: "Factura 43874", credito: 8994.90, haber: 0, saldo: 22037.80},

    {fecha: "18-jul", tipo: "Pago Efectivo", credito: 0, haber: 13000, saldo: 13042.90},
    {fecha: "18-jul", tipo: "Factura 43760", credito: 12243.54, haber: 0, saldo: 26042.90},

    {fecha: "04-jul", tipo: "Pago Efectivo", credito: 0, haber: 10000, saldo: 13799.36},
    {fecha: "04-jul", tipo: "Factura 43530", credito: 9006.26, haber: 0, saldo: 23799.36},

    {fecha: "27-jun", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 14793.10},
    {fecha: "27-jun", tipo: "factura 43400", credito: 10034.39, haber: 0, saldo: 22793.10},

    {fecha: "20-jun", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 12758.71},
    {fecha: "20-jun", tipo: "Factura 43270", credito: 10081.95, haber: 0, saldo: 22758.71},

    {fecha: "13-jun", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 12676.76},
    {fecha: "13-jun", tipo: "factura 43138", credito: 14542.19, haber: 0, saldo: 23676.76},

    {fecha: "06-jun", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 9134.57},
    {fecha: "06-jun", tipo: "Factura 43010", credito: 5960.32, haber: 0, saldo: 19134.57},

    {fecha: "30-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 13174.25},
    {fecha: "30-may", tipo: "Factura 42900", credito: 7788.32, haber: 0, saldo: 23174.25},

    {fecha: "23-may", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 15385.93},
    {fecha: "23-may", tipo: "Factura 42770", credito: 9433.18, haber: 0, saldo: 23385.93},

    {fecha: "09-may", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 13952.75},
    {fecha: "09-may", tipo: "Factura 42498", credito: 8457.97, haber: 0, saldo: 23952.75},

    {fecha: "03-abr", tipo: "Pago efectivo", credito: 0, haber: 10000, saldo: 15494.78},
    {fecha: "03-abr", tipo: "factura 42382", credito: 9229.86, haber: 0, saldo: 25494.78},

    {fecha: "26-abr", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 16264.92},
    {fecha: "26-abr", tipo: "factura 42224", credito: 14736.45, haber: 0, saldo: 27264.92},

    {fecha: "11-abr", tipo: "Pago efectivo", credito: 0, haber: 12000, saldo: 12528.47},
    {fecha: "11-abr", tipo: "Factura 41960", credito: 13121.51, haber: 0, saldo: 24528.47},

    {fecha: "04-abr", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 11406.98},
    {fecha: "04-abr", tipo: "factura 41862", credito: 13374.12, haber: 0, saldo: 22406.98},

    {fecha: "15-mar", tipo: "Pago efectivo", credito: 0, haber: 5000, saldo: 9530.64},
    {fecha: "15-mar", tipo: "factura 41438", credito: 4059.33, haber: 0, saldo: 14530.64},

    {fecha: "07-mar", tipo: "Pago efectivo", credito: 0, haber: 9000, saldo: 10471.31},
    {fecha: "07-mar", tipo: "Factura 41280", credito: 9573.49, haber: 0, saldo: 19471.31},

    {fecha: "28-feb", tipo: "Pago efectivo", credito: 0, haber: 8000, saldo: 9897.82},
    {fecha: "28-feb", tipo: "Factura 41138", credito: 8134.02, haber: 0, saldo: 17897.82},

    {fecha: "14-feb", tipo: "Pago efectivo", credito: 0, haber: 6000, saldo: 9763.80},
    {fecha: "14-feb", tipo: "Factura 40910", credito: 5897.12, haber: 0, saldo: 15763.80},

    {fecha: "07-feb", tipo: "Pago efectivo", credito: 0, haber: 9000, saldo: 10066.68},
    {fecha: "07-feb", tipo: "Factura 40768", credito: 8552.10, haber: 0, saldo: 19066.68},
    {fecha: "31-ene", tipo: "Pago efectivo", credito: 0, haber: 8500, saldo: 10514.58},
    {fecha: "31-ene", tipo: "Factura 40634", credito: 10017.33, haber: 0, saldo: 19014.58},
    {fecha: "10-ene", tipo: "Pago Efectivo", credito: 0, haber: 7000, saldo: 8997.25},
    {fecha: "10-ene", tipo: "Factura 40242", credito: 8704.93, haber: 0, saldo: 15997.25}
];

const cristina = [
    {fecha: "04-dic", tipo: "Mercado pago", credito: 0, haber: 3211.74, saldo: 0},
    {fecha: "28-nov", tipo: "Mercado pago", credito: 0, haber: 19000, saldo: 3211.74},
    {fecha: "28-nov", tipo: "Factura 45882", credito: 21418.36, haber: 0, saldo: 22211.74},

    {fecha: "14-nov", tipo: "Mercado pago", credito: 0, haber: 4000, saldo: 793.38},
    {fecha: "07-nov", tipo: "Mercado pago", credito: 0, haber: 16000, saldo: 4793.38},
    {fecha: "07-nov", tipo: "Factura 4558", credito: 16685.08, haber: 0, saldo: 20793.38},

    {fecha: "24-oct", tipo: "Mercado pago", credito: 0, haber: 11000, saldo: 4108.30},
    {fecha: "24-oct", tipo: "Factura 45422", credito: 7334.44, haber: 0, saldo: 15108.30},

    {fecha: "10-oct", tipo: "Mercado pago", credito: 0, haber: 20000, saldo: 7773.86},
    {fecha: "10-oct", tipo: "Factura 45194", credito: 25713.43, haber: 0, saldo: 27773.86},

    {fecha: "26-sep", tipo: "Mercado pago", credito: 0, haber: 10000, saldo: 2060.43},
    {fecha: "26-sep", tipo: "Factura 44942", credito: 11833.93, haber: 0, saldo: 12060.43},

    {fecha: "19-sep", tipo: "Mercado pago", credito: 0, haber: 15000, saldo: 226.50},
    {fecha: "19-sep", tipo: "Factura 44848", credito: 11480.08, haber: 0, saldo: 15226.50},

    {fecha: "05-sep", tipo: "Mercado pago", credito: 0, haber: 20000, saldo: 3746.42},
    {fecha: "05-sep", tipo: "Factura 44594", credito: 21654.19, haber: 0, saldo: 23746.42},

    {fecha: "29-ago", tipo: "Mercado pago", credito: 0, haber: 16000, saldo: 2092.23},
    {fecha: "29-ago", tipo: "Factura 44486", credito: 15980.98, haber: 0, saldo: 18092.23},

    {fecha: "08-ago", tipo: "Mercado Pago", credito: 0, haber: 4000, saldo: 2111.25},

    {fecha: "01-ago", tipo: "Mercado Pago", credito: 0, haber: 22000, saldo: 6111.25},
    {fecha: "01-ago", tipo: "Factura 44022", credito: 26287.540, haber: 0, saldo: 28111.25},

    {fecha: "25-jul", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 1823.71},
    {fecha: "25-jul", tipo: "Factura 43880", credito: 8791.38, haber: 0, saldo: 11823.71},

    {fecha: "18-jul", tipo: "Mercado Pago", credito: 0, haber: 12000, saldo: 3032.33},
    {fecha: "18-jul", tipo: "Factura 43768", credito: 10715.15, haber: 0, saldo: 15032.33},

    {fecha: "11-jul", tipo: "Mercado Pago", credito: 0, haber: 16000, saldo: 4317.18},
    {fecha: "11-jul", tipo: "Factura 43656", credito: 15654.79, haber: 0, saldo: 20317.18},

    {fecha: "04-jul", tipo: "Mercado Pago", credito: 0, haber: 16000, saldo: 4662.39},
    {fecha: "04-jul", tipo: "factura 43528", credito: 15975.81, haber: 0, saldo: 20662.39},

    {fecha: "27-jun", tipo: "mercado Pago", credito: 0, haber: 15000, saldo: 4686.58},
    {fecha: "27-jun", tipo: "Factura 43394", credito: 18686.58, haber: 0, saldo: 19686.58},

    {fecha: "13-jun", tipo: "mercado Pago", credito: 0, haber: 14108.40, saldo: 1000},
    {fecha: "13-jun", tipo: "factura 43134", credito: 12262.35, haber: 0, saldo: 15108.4},

    {fecha: "23-may", tipo: "mercado Pago", credito: 0, haber: 16000, saldo: 2846.05},
    {fecha: "23-may", tipo: "Fatura 42896", credito: 13142.63, haber: 0, saldo: 18846.05},

    {fecha: "16-may", tipo: "mercado Pago", credito: 0, haber: 10000, saldo: 5703.42},
    {fecha: "16-may", tipo: "Factura 42614", credito: 10319.89, haber: 0, saldo: 15703.42},

    {fecha: "09-may", tipo: "mercado Pago", credito: 0, haber: 14000, saldo: 5383.53},
    {fecha: "09-may", tipo: "Factura 42488", credito: 16416.67, haber: 0, saldo: 19383.53},

    {fecha: "27-abr", tipo: "mercado Pago", credito: 0, haber: 10000, saldo: 2966.86},
    {fecha: "27-abr", tipo: "factura 4220", credito: 9086.09, haber: 0, saldo: 12966.86},

    {fecha: "18-abr", tipo: "Pago efectivo", credito: 0, haber: 12000, saldo: 3880.77},
    {fecha: "18-abr", tipo: "factura 42090", credito: 11885.73, haber: 0, saldo: 15880.77},

    {fecha: "11-abr", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 3995.04},
    {fecha: "11-abr", tipo: "Factura 41958", credito: 12608.71, haber: 0, saldo: 14995.04},

    {fecha: "04-abr", tipo: "Pago efectivo", credito: 0, haber: 18000, saldo: 2386.33},
    {fecha: "04-abr", tipo: "factura 41844", credito: 17637.19, haber: 0, saldo: 20386.33},

    {fecha: "28-mar", tipo: "Pago efectivo", credito: 0, haber: 11000, saldo: 2749.14},
    {fecha: "28-mar", tipo: "factura 41688", credito: 10462.16, haber: 0, saldo: 13749.14},

    {fecha: "21-mar", tipo: "Pago efectivo", credito: 0, haber: 22000, saldo: 3286.98},
    {fecha: "21-mar", tipo: "factura 41560", credito: 19976.67, haber: 0, saldo: 25286.98},

    {fecha: "14-mar", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 5310.31},
    {fecha: "14-mar", tipo: "factura 41402", credito: 14945.92, haber: 0, saldo: 25310.31},

    {fecha: "07-mar", tipo: "Pago efectivo", credito: 0, haber: 20000, saldo: 10364.39},
    {fecha: "07-mar", tipo: "factura 41274", credito: 16003.70, haber: 0, saldo: 30364.39},

    {fecha: "28-feb", tipo: "Pago factura", credito: 0, haber: 15000, saldo: 14360.69},
    {fecha: "28-feb", tipo: "Factura 41142", credito: 25210.68, haber: 0, saldo: 29360.69},

    {fecha: "14-feb", tipo: "Pago factura", credito: 0, haber: 15000, saldo: 4150.01},
    {fecha: "14-feb", tipo: "factura 40908", credito: 14067.15, haber: 0, saldo: 19150.01},

    {fecha: "07-feb", tipo: "Pago factura", credito: 0, haber: 9000, saldo: 5082.86},
    {fecha: "07-feb", tipo: "Factura 40762", credito: 14082.86, haber: 0, saldo: 14082.86},
    {fecha: "1-feb", tipo: "No Hay Saldo", credito: 0, haber: 0, saldo: 0}
];

const emanuel = [
    {fecha: "24-Oct", tipo: "Mercado Pago", credito: 0, haber: 10157.30, saldo: 0},
    {fecha: "26-Oct", tipo: "Mercado Pago", credito: 0, haber: 13000, saldo: 10157.30},
    {fecha: "26-sep", tipo: "Factura 44940", credito: 23157.30, haber: 0, saldo: 23157.30},
    {fecha: "26-sep", tipo: "Pago Factura", credito: 0, haber: 13287.24, saldo: 0},

    {fecha: "12-sep", tipo: "Factura 44722", credito: 13287.24, haber: 0, saldo: 13287.24},
    {fecha: "12-sep", tipo: "Mercado Pago", credito: 0, haber: 21356.68, saldo: 0},

    {fecha: "29-ago", tipo: "Factura 44484", credito: 21356.68, haber: 0, saldo: 21356.68},
    {fecha: "29-ago", tipo: "Mercado pago", credito: 0, haber: 19508.31, saldo: 0},

    {fecha: "15-ago", tipo: "Factura 44260", credito: 19508.31, haber: 0, saldo: 19508.31},

    {fecha: "01-ago", tipo: "Pago efcetivo", credito: 0, haber: 12000, saldo: 13780.01},
    {fecha: "01-ago", tipo: "Factura 44020", credito: 15297.43, haber: 0, saldo: 25780.01},

    {fecha: "25-jul", tipo: "Pago efcetivo", credito: 0, haber: 21267, saldo: 10482.56},
    {fecha: "25-jul", tipo: "factura 43890", credito: 8482.40, haber: 0, saldo: 31749.56},

    {fecha: "11-jul", tipo: "factura 43648", credito: 23267.16, haber: 0, saldo: 23267.16},
    {fecha: "11-jul", tipo: "Pago efcetivo", credito: 20312.08, haber: 0, saldo: 0},

    {fecha: "27-jun", tipo: "factura 43388", credito: 20312.08, haber: 0, saldo: 20312.08},
    {fecha: "27-jun", tipo: "Mercado Pago", credito: 0, haber: 13396.63, saldo: 0},

    {fecha: "20-jun", tipo: "Mercado Pago", credito: 0, haber: 21051.35, saldo: 13396.63},
    {fecha: "20-jun", tipo: "Factura 43268", credito: 13396.63, haber: 0, saldo: 34447.98},

    {fecha: "13-jun", tipo: "Mercado Pago", credito: 0, haber: 12000, saldo: 21051.35},
    {fecha: "13-jun", tipo: "Factura 43146", credito: 1867.54, haber: 0, saldo: 33051.35},

    {fecha: "26-may", tipo: "Mercado Pago", credito: 0, haber: 10000, saldo: 31183.81},

    {fecha: "16-may", tipo: "factura 42360", credito: 0, haber: 27910, saldo: 41183.81},
    {fecha: "16-may", tipo: "Factura 42620", credito: 23028.32, haber: 0, saldo: 69093.81},

    {fecha: "03-may", tipo: "factura 42360", credito: 17920.25, haber: 0, saldo: 46065.49},

    {fecha: "02-may", tipo: "Mercado Pago", credito: 0, haber: 26000, saldo: 28145.24},
    {fecha: "02-may", tipo: "Factura 42328", credito: 25708.32, haber: 0, saldo: 54145.24},

    {fecha: "26-abr", tipo: "Mercado Pago", credito: 0, haber: 30000, saldo: 28436.92},
    {fecha: "26-abr", tipo: "factura 42246", credito: 23614.20, haber: 0, saldo: 58436.92},

    {fecha: "11-abr", tipo: "Mercado Pago", credito: 0, haber: 33985.37, saldo: 34822.72},
    {fecha: "11-abr", tipo: "Factura 41962", credito: 34822.72, haber: 0, saldo: 68808.09},

    {fecha: "4-abr", tipo: "Mercado Pago", credito: 0, haber: 30000, saldo: 33985.37},
    {fecha: "4-abr", tipo: "Factura 41838", credito: 25135.85, haber: 0, saldo: 63985.37},

    {fecha: "28-mar", tipo: "Pago Efectivo", credito: 0, haber: 26000, saldo: 38849.52},
    {fecha: "28-mar", tipo: "factura 41684", credito: 16491.49, haber: 0, saldo: 64849.52},

    {fecha: "21-mar", tipo: "Pago Efectivo", credito: 0, haber: 34747.89, saldo: 48358.03},
    {fecha: "21-mar", tipo: "factura 41568", credito: 48358.03, haber: 0, saldo: 83105.92},

    {fecha: "14-mar", tipo: "Pago Efectivo", credito: 0, haber: 20000, saldo: 34747.89},
    {fecha: "14-mar", tipo: "Factura 41410", credito: 10277.65, haber: 0, saldo: 54747.89},

    {fecha: "07-mar", tipo: "Factura 41282", credito: 44470.24, haber: 0, saldo: 44470.24},

    {fecha: "06-mar", tipo: "Mercado Pago", credito: 0, haber: 29111.44, saldo: 0},

    {fecha: "03-mar", tipo: "Factura 41240", credito: 9057.24, haber: 0, saldo: 19854.04},

    {fecha: "01-mar", tipo: "Mercado Pago", credito: 0, haber: 7438.86, saldo: 10796.80},
    {fecha: "28-feb", tipo: "Factura 41132", credito: 10796.80, haber: 0, saldo: 18235.66},

    {fecha: "15-feb", tipo: "Mercado Pago", credito: 0, haber: 7438.86, saldo: 7438.86},

    {fecha: "14-feb", tipo: "Factura 40900", credito: 7438.86, haber: 0, saldo: 14877.72},

    {fecha: "07-feb", tipo: "Pago efectivo", credito: 0, haber: 12151.20, saldo: 7438.86},
    {fecha: "07-feb", tipo: "Factura 40766", credito: 7438.86, haber: 0, saldo: 19590.06},
    {fecha: "24-ene", tipo: "Factura 40516", credito: 12151.20, haber: 0, saldo: 12151.20}
];