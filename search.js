import Fuse from 'fuse.js';

const data={
    zte: [
      {
        "id": "zte_axon_10_pro-9695",
        "name": "Axon 10 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/zte-axon-10-pro-4g.jpg",
        "description": "ZTE Axon 10 Pro Android smartphone. Announced Feb 2019. Features 6.47″  display, Snapdragon 855 chipset, 4000 mAh battery, 256 GB storage, 12 GB RAM."
      },
      {
        "id": "zte_axon_m-8902",
        "name": "Axon M",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/zte-axon-m-1.jpg",
        "description": "ZTE Axon M Android smartphone. Announced Oct 2017. Features 5.2″  display, Snapdragon 821 chipset, 20 MP primary camera, 3180 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "zte_blade_v9-8971",
        "name": "Blade V9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/zte-blade-v9-.jpg",
        "description": "ZTE Blade V9 Android smartphone. Announced Feb 2018. Features 5.7″  display, Snapdragon 450 chipset, Dual: 16 MP (f/1.8, 1.12µm, PDAF) + 5 MP primary camera, 8 MP front camera, 3100 mAh battery, 64 GB storage, 4 GB RAM."
      },
      {
        "id": "zte_max_xl-8660",
        "name": "Max XL",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/zte-max-xl.jpg",
        "description": "ZTE Max XL Android smartphone. Announced Apr 2017. Features 6.0″  display, Snapdragon 435 chipset, 13 MP primary camera, 5 MP front camera, 3990 mAh battery, 32 GB storage, 2 GB RAM, Corning Gorilla Glass (unspecified version)."
      },
      {
        "id": "zte_zmax-6697",
        "name": "Zmax",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/zte-zmax.jpg",
        "description": "ZTE Zmax Android smartphone. Announced Sep 2014. Features 5.7″  display, Snapdragon 400 chipset, 8 MP primary camera, 1.6 MP front camera, 3400 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 3."
      }
    ],
    sony: [
      {
        "id": "sony_xperia_1-9543",
        "name": "Xperia 1",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1.jpg",
        "description": "Sony Xperia 1 Android smartphone. Announced Feb 2019. Features 6.5″  display, Snapdragon 855 chipset, 3330 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 6."
      },
      {
        "id": "sony_xperia_10-9353",
        "name": "Xperia 10",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-.jpg",
        "description": "Sony Xperia 10 Android smartphone. Announced Feb 2019. Features 6.0″  display, Snapdragon 630 chipset, 2870 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "sony_xperia_xa2-8986",
        "name": "Xperia XA2",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-.jpg",
        "description": "Sony Xperia XA2 Android smartphone. Announced Jan 2018. Features 5.2″  display, Snapdragon 630 chipset, 23 MP primary camera, 8 MP front camera, 3300 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "sony_xperia_5-9840",
        "name": "Xperia 5",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-.jpg",
        "description": "Sony Xperia 5 Android smartphone. Announced Sep 2019. Features 6.1″  display, Snapdragon 855 chipset, 3140 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 6."
      },
      {
        "id": "sony_xperia_z5_premium-7536",
        "name": "Xperia Z5 Premium",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sony-z5-premium-.jpg",
        "description": "Sony Xperia Z5 Premium Android smartphone. Announced Sep 2015. Features 5.5″  display, Snapdragon 810 chipset, 23 MP primary camera, 5.1 MP front camera, 3430 mAh battery, 32 GB storage, 3 GB RAM, Scratch-resistant glass."
      },
      {
        "id": "sony_xperia_m2-6146",
        "name": "Xperia M2",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m2.jpg",
        "description": "Sony Xperia M2 Android smartphone. Announced Feb 2014. Features 4.8″  display, Snapdragon 400 chipset, 8 MP primary camera, 2300 mAh battery, 8 GB storage, 1000 MB RAM, Corning Gorilla Glass 3."
      }
    ],
    asus: [
      {
        "id": "asus_zenfone_6_zs630kl-9698",
        "name": "Zenfone 6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6-zs630kl.jpg",
        "description": "Asus Zenfone 6 ZS630KL Android smartphone. Announced May 2019. Features 6.4″  display, Snapdragon 855 chipset, 5000 mAh battery, 512 GB storage, 12 GB RAM, Corning Gorilla Glass 6."
      },
      {
        "id": "asus_zenfone_5_ze620kl-9061",
        "name": "Zenfone 5 ",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-5-ze620kl-5z-zs620kl.jpg",
        "description": "Asus Zenfone 5 ZE620KL Android smartphone. Announced Feb 2018. Features 6.2″  display, Snapdragon 636 chipset, 3300 mAh battery, 64 GB storage, 6 GB RAM, Corning Gorilla Glass (unspecified version)."
      },
      {
        "id": "asus_rog_phone_ii_zs660kl-9770",
        "name": "ROG Phone II ZS660KL",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone2.jpg",
        "description": "Asus ROG Phone II ZS660KL Android smartphone. Announced Jul 2019. Features 6.59″  display, Snapdragon 855+ chipset, 6000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Glass 6."
      },
      {
        "id": "asus_zenfone_4_ze554kl-8782",
        "name": "Zenfone 4",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-4-ze554kl.jpg",
        "description": "Asus Zenfone 4 ZE554KL Android smartphone. Announced Aug 2017. Features 5.5″  display, Snapdragon 630 chipset, Dual: 12 MP (f/1.8, 25mm, 1/2.55″, 1.4µm, OIS, dual pixel PDAF) + 8 MP primary camera, 8 MP front camera, 3300 mAh battery, 64 GB storage, 6 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "asus_zenfone_3_ze520kl-8197",
        "name": "Zenfone 3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-3-ZE520KL-1.jpg",
        "description": "Asus Zenfone 3 ZE520KL Android smartphone. Announced Jul 2016. Features 5.2″  display, Snapdragon 625 chipset, 16 MP primary camera, 8 MP front camera, 2600 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "asus_rog_phone_5s-11054",
        "name": "ROG Phone 5s",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5s-new.jpg",
        "description": "Asus ROG Phone 5s Android smartphone. Announced Aug 2021. Features 6.78″  display, Snapdragon 888+ 5G chipset, 6000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus."
      },
      {
        "id": "asus_rog_phone_5-10715",
        "name": "ROG Phone 5",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5.jpg",
        "description": "Asus ROG Phone 5 Android smartphone. Announced Mar 2021. Features 6.78″  display, Snapdragon 888 5G chipset, 6000 mAh battery, 256 GB storage, 16 GB RAM, Corning Gorilla Glass Victus."
      },
      {
        "id": "asus_zenfone_3_ze552kl-8106",
        "name": "Zenfone 3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-3-ze552kl.jpg",
        "description": "Asus Zenfone 3 ZE552KL Android smartphone. Announced May 2016. Features 5.5″  display, Snapdragon 625 chipset, 16 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "asus_rog_phone_6-11647",
        "name": "ROG Phone 6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone6.jpg",
        "description": "Asus ROG Phone 6 Android smartphone. Announced Jul 2022. Features 6.78″  display, Snapdragon 8+ Gen 1 chipset, 6000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus."
      },
      {
        "id": "asus_zenfone_6_a601cg_(2014)-6853",
        "name": "Zenfone 6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6.jpg",
        "description": "Asus Zenfone 6 A601CG (2014) Android smartphone. Announced Jan 2014. Features 6.0″  display, Intel Atom Z2560 chipset, 13 MP primary camera, 2 MP front camera, 3230 mAh battery, 32 GB storage, 2 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "asus_rog_phone_5_pro-10784",
        "name": "ROG Phone 5 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5-pro.jpg",
        "description": "Asus ROG Phone 5 Pro Android smartphone. Announced Mar 2021. Features 6.78″  display, Snapdragon 888 5G chipset, 6000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus."
      }
    ],
    huawei: [
      {
        "id": "huawei_p40-10153",
        "name": "P40",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40.jpg",
        "description": "Huawei P40 Android smartphone. Announced Mar 2020. Features 6.1″  display, Kirin 990 5G chipset, 3800 mAh battery, 256 GB storage, 8 GB RAM."
      },
      {
        "id": "huawei_nova_3i-9632",
        "name": "nova 3i",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-3i.jpg",
        "description": "Huawei nova 3i Android smartphone. Announced Jul 2018. Features 6.3″  display, Kirin 710 chipset, 3340 mAh battery, 128 GB storage, 6 GB RAM."
      },
      {
        "id": "huawei_mate_10_lite-8857",
        "name": "Mate 10 Lite",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-10-lite.jpg",
        "description": "Huawei Mate 10 Lite Android smartphone. Announced Oct 2017. Features 5.9″  display, Kirin 659 chipset, Dual: 16 MP (f/2.2, 27mm, PDAF) + 2 MP primary camera, Dual: 13 MP (f/2.0, 26mm) + 2 MP front camera, 3340 mAh battery, 64 GB storage, 4 GB RAM."
      },
      {
        "id": "huawei_p8_lite_(2017)-8516",
        "name": "P8 Lite",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p8-lite-2017.jpg",
        "description": "Huawei P8 Lite (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Kirin 655 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM."
      },
      {
        "id": "huawei_p9_lite-7983",
        "name": "P9 lite",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p9-lite-r1.jpg",
        "description": "Huawei P9 lite Android smartphone. Announced Apr 2016. Features 5.2″  display, Kirin 650 chipset, 13 MP primary camera, 8 MP front camera, 3000 mAh battery, 16 GB storage, 3 GB RAM."
      },
      {
        "id": "huawei_mate_20-9367",
        "name": "Mate 20",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-20-.jpg",
        "description": "Huawei Mate 20 Android smartphone. Announced Oct 2018. Features 6.53″  display, Kirin 980 chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM."
      },
      {
        "id": "huawei_p30-9530",
        "name": "P30",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30.jpg",
        "description": "Huawei P30 Android smartphone. Announced Mar 2019. Features 6.1″  display, Kirin 980 chipset, 3650 mAh battery, 256 GB storage, 8 GB RAM."
      },
      {
        "id": "huawei_y7_(2019)-9625",
        "name": "Y7",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-y7-prime-2019.jpg",
        "description": "Huawei Y7 (2019) Android smartphone. Announced Mar 2019. Features 6.26″  display, Snapdragon 450 chipset, 4000 mAh battery, 64 GB storage, 4 GB RAM."
      },
      {
        "id": "huawei_y6-7440",
        "name": "Y6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-4a.jpg",
        "description": "Huawei Y6 Android smartphone. Announced Jul 2015. Features 5.0″  display, Snapdragon 210 chipset, 8 MP primary camera, 2 MP front camera, 2200 mAh battery, 8 GB storage, 2 GB RAM."
      },
      {
        "id": "huawei_ascend_plus-6375",
        "name": "Ascend Plus",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-h881c-ascend-plus.jpg",
        "description": "Huawei Ascend Plus Android smartphone. Announced Apr 2014. Features 4.0″  display, 5 MP primary camera, 1700 mAh battery."
      },
      {
        "id": "huawei_p30_lite-9545",
        "name": "P30 lite",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-lite-.jpg",
        "description": "Huawei P30 lite Android smartphone. Announced Mar 2019. Features 6.15″  display, Kirin 710 chipset, 3340 mAh battery, 256 GB storage, 8 GB RAM."
      },
      {
        "id": "huawei_p30_pro-9635",
        "name": "P30 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-pro.jpg",
        "description": "Huawei P30 Pro Android smartphone. Announced Mar 2019. Features 6.47″  display, Kirin 980 chipset, 4200 mAh battery, 512 GB storage, 8 GB RAM."
      },
      {
        "id": "huawei_p9-7972",
        "name": "P9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p9r2.jpg",
        "description": "Huawei P9 Android smartphone. Announced Apr 2016. Features 5.2″  display, Kirin 955 chipset, Dual: 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "huawei_p40_pro-10152",
        "name": "P40 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40-pro.jpg",
        "description": "Huawei P40 Pro Android smartphone. Announced Mar 2020. Features 6.58″  display, Kirin 990 5G chipset, 4200 mAh battery, 512 GB storage, 8 GB RAM."
      }
    ],
    htc: [
      {
        "id": "htc_u12+-9119",
        "name": "U12+",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-u12-plus-.jpg",
        "description": "HTC U12+ Android smartphone. Announced May 2018. Features 6.0″  display, Snapdragon 845 chipset, 3500 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 3."
      },
  
      {
        "id": "htc_u11-8630",
        "name": "U11",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-u11.jpg",
        "description": "HTC U11 Android smartphone. Announced May 2017. Features 5.5″  display, Snapdragon 835 chipset, 12 MP primary camera, 16 MP front camera, 3000 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "htc_one_x10-8487",
        "name": "One X10",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-one-x10.jpg",
        "description": "HTC One X10 Android smartphone. Announced Apr 2017. Features 5.5″  display, MT6755 Helio P10 chipset, 16 MP primary camera, 8 MP front camera, 4000 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass (unspecified version)."
      },
      {
        "id": "htc_u_ultra-8519",
        "name": "U Ultra",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-u-ultra.jpg",
        "description": "HTC U Ultra Android smartphone. Announced Jan 2017. Features 5.7″  display, Snapdragon 821 chipset, 12 MP primary camera, 16 MP front camera, 3000 mAh battery, 128 GB storage, 4 GB RAM, Corning Gorilla Glass 5 (64 GB version)."
      },
      {
        "id": "htc_one_a9-7576",
        "name": "One A9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-one-a9-new.jpg",
        "description": "HTC One A9 Android smartphone. Announced Sep 2015. Features 5.0″  display, Snapdragon 617 chipset, 13 MP primary camera, 4 MP front camera, 2150 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "htc_one_m9-6891",
        "name": "One M9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-one-m9-1.jpg",
        "description": "HTC One M9 Android smartphone. Announced Mar 2015. Features 5.0″  display, Snapdragon 810 chipset, 20 MP primary camera, 4 MP front camera, 2840 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "htc_one_m8_prime-6371",
        "name": "One M8",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/htc-one-prime-m8.jpg",
        "description": "HTC One M8 Prime Android smartphone. Announced Q3 2014. Features 5.5″  display, Dual: 4 MP primary camera, 5 MP front camera, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      }
    ],
    lg: [
      {
        "id": "lg_g8_thinq-9540",
        "name": "G8 ThinQ",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-g8-thinq-r1.jpg",
        "description": "LG G8 ThinQ Android smartphone. Announced Feb 2019. Features 6.1″  display, Snapdragon 855 chipset, 3500 mAh battery, 128 GB storage, 6 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5."
      },
      {
        "id": "lg_v60_thinq_5g-10103",
        "name": "V60 ThinQ 5G",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-v60-thinq-5g-b.jpg",
        "description": "LG V60 ThinQ 5G Android smartphone. Announced Feb 2020. Features 6.8″  display, Snapdragon 865 5G chipset, 5000 mAh battery, 256 GB storage, 8 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5."
      },
      {
        "id": "lg_v20-8238",
        "name": "V20",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-v20-ofic1.jpg",
        "description": "LG V20 Android smartphone. Announced Sep 2016. Features 5.7″  display, Snapdragon 820 chipset, Dual: 16 MP (f/1.8, 29mm, 1/2.6″, laser AF, 3-axis OIS) + 8 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 4."
      },
      {
        "id": "lg_g4-6901",
        "name": "G4",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-g4-.jpg",
        "description": "LG G4 Android smartphone. Announced Apr 2015. Features 5.5″  display, Snapdragon 808 chipset, 16 MP primary camera, 8 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "lg_velvet_5g_uw-10378",
        "name": "Velvet 5G UW",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-5g-uw-.jpg",
        "description": "LG Velvet 5G UW Android smartphone. Announced Aug 2020. Features 6.8″  display, Snapdragon 765G 5G chipset, 4300 mAh battery, 128 GB storage, 6 GB RAM, MIL-STD-810G compliant."
      },
      {
        "id": "lg_k7_(2017)-8817",
        "name": "K7 ",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-k7-2017.jpg",
        "description": "LG K7 (2017) Android smartphone. Announced Apr 2017. Features 5.0″  display, MT6737M chipset, 8 MP primary camera, 5 MP front camera, 2500 mAh battery, 16 GB storage, 2 GB RAM."
      },
      {
        "id": "lg_g3-6294",
        "name": "G3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-1.jpg",
        "description": "LG G3 Android smartphone. Announced May 2014. Features 5.5″  display, Snapdragon 801 chipset, 13 MP primary camera, 2.1 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "lg_q_stylo_4-9251",
        "name": "Q Stylo 4",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo-4-q710ms.jpg",
        "description": "LG Q Stylo 4 Android smartphone. Announced Jun 2018. Features 6.2″  display, Snapdragon 450 chipset, 13 MP primary camera, 5 MP front camera, 3300 mAh battery, 32 GB storage, 2 GB RAM."
      },
      {
        "id": "lg_stylo_6-10255",
        "name": "Stylo 6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo6.jpg",
        "description": "LG Stylo 6 Android smartphone. Announced May 2020. Features 6.8″  display, MT6765 Helio P35 chipset, 4000 mAh battery, 64 GB storage, 3 GB RAM."
      },
      {
        "id": "lg_q51-10102",
        "name": "Q51",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-q51.jpg",
        "description": "LG Q51 Android smartphone. Announced Feb 2020. Features 6.5″  display, MT6762 Helio P22 chipset, 4000 mAh battery, 32 GB storage, 3 GB RAM, MIL-STD-810G compliant."
      },
      {
        "id": "lg_v60_thinq_5g_uw-10256",
        "name": "V60 ThinQ 5G UW",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-v60-thinq-5g-b.jpg",
        "description": "LG V60 ThinQ 5G UW Android smartphone. Announced Feb 2020. Features 6.8″  display, Snapdragon 865 5G chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5."
      },
      {
        "id": "lg_g2_mini_lte_(tegra)-6118",
        "name": "G2 mini LTE (Tegra)",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-g2-mini-ofic1.jpg",
        "description": "LG G2 mini LTE (Tegra) Android smartphone. Announced Feb 2014. Features 4.7″  display, Nvidia Tegra 4i chipset, 13 MP primary camera, 1.3 MP front camera, 2440 mAh battery, 8 GB storage, 1000 MB RAM, Corning Gorilla Glass 2."
      },
      {
        "id": "lg_q7-9206",
        "name": "Q7",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/lg-q7-.jpg",
        "description": "LG Q7 Android smartphone. Announced May 2018. Features 5.5″  display, MT6750S chipset, 13 MP primary camera, 5 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant."
      }
    ],
    motorola: [
      {
        "id": "motorola_razr_2022-11752",
        "name": "Razr",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-razr-2022-1.jpg",
        "description": "Motorola Razr 2022 Android smartphone. Announced Aug 2022. Features 6.7″  display, Snapdragon 8+ Gen 1 chipset, 3500 mAh battery, 512 GB storage, 12 GB RAM."
      },
      {
        "id": "motorola_edge+_(2023)-12251",
        "name": "Edge+",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-plus-2023.jpg",
        "description": "Motorola Edge+ (2023) Android smartphone. Announced May 2023. Features 6.67″  display, Snapdragon 8 Gen 2 chipset, 5100 mAh battery, 512 GB storage, 8 GB RAM, Corning Gorilla Glass Victus."
      },
      {
        "id": "motorola_one_5g-10407",
        "name": "One",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-5g.jpg",
        "description": "Motorola One 5G Android smartphone. Announced Sep 2020. Features 6.7″  display, Snapdragon 765 5G chipset, 5000 mAh battery, 128 GB storage, 4 GB RAM."
      },
      {
        "id": "motorola_moto_g_(2023)-12249",
        "name": "Moto G",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-5g-2023.jpg",
        "description": "Motorola Moto G (2023) Android smartphone. Announced May 2023. Features 6.5″  display, Snapdragon 480+ 5G chipset, 5000 mAh battery, 128 GB storage, 4 GB RAM."
      },
      {
        "id": "motorola_moto_g4_plus-8050",
        "name": "Moto G4 Plus",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g4-plus-r.jpg",
        "description": "Motorola Moto G4 Plus Android smartphone. Announced May 2016. Features 5.5″  display, Snapdragon 617 chipset, 16 MP primary camera, 5 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3."
      }
    ],
    oneplus: [
      {
        "id": "oneplus_12-12725",
        "name": "12",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
        "description": "OnePlus 12 Android smartphone. Announced Dec 2023. Features 6.82″  display, Snapdragon 8 Gen 3 chipset, 5400 mAh battery, 1024 GB storage, 24 GB RAM, Corning Gorilla Glass Victus 2."
      },
      {
        "id": "oneplus_11-11893",
        "name": "11",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
        "description": "OnePlus 11 Android smartphone. Announced Jan 2023. Features 6.7″  display, Snapdragon 8 Gen 2 chipset, 5000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus."
      },
      {
        "id": "oneplus_6-9109",
        "name": "6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6-red.jpg",
        "description": "OnePlus 6 Android smartphone. Announced May 2018. Features 6.28″  display, Snapdragon 845 chipset, 3300 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_nord_n20_5g-11218",
        "name": "Nord N20 5G",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-n20-5g-.jpg",
        "description": "OnePlus Nord N20 5G Android smartphone. Announced Apr 2022. Features 6.43″  display, Snapdragon 695 5G chipset, 4500 mAh battery, 128 GB storage, 6 GB RAM, Schott Xensation Up."
      },
      {
        "id": "oneplus_10t-11622",
        "name": "10T",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-10t-5g.jpg",
        "description": "OnePlus 10T Android smartphone. Announced Aug 2022. Features 6.7″  display, Snapdragon 8+ Gen 1 chipset, 4800 mAh battery, 256 GB storage, 16 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_nord_2t-11517",
        "name": "Nord 2T",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2t.jpg",
        "description": "OnePlus Nord 2T Android smartphone. Announced May 2022. Features 6.43″  display, Dimensity 1300 chipset, 4500 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_one-6327",
        "name": "One",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg",
        "description": "OnePlus One Android smartphone. Announced Apr 2014. Features 5.5″  display, Snapdragon 801 chipset, 13 MP primary camera, 5 MP front camera, 3100 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "oneplus_8-10161",
        "name": "8",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8.jpg",
        "description": "OnePlus 8 Android smartphone. Announced Apr 2020. Features 6.55″  display, Snapdragon 865 5G chipset, 4300 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_7_pro-9689",
        "name": "7 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r1.jpg",
        "description": "OnePlus 7 Pro Android smartphone. Announced May 2019. Features 6.67″  display, Snapdragon 855 chipset, 4000 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_3-7995",
        "name": "3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3-.jpg",
        "description": "OnePlus 3 Android smartphone. Announced Jun 2016. Features 5.5″  display, Snapdragon 820 chipset, 3000 mAh battery, 64 GB storage, 6 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "oneplus_9-10747",
        "name": "9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-.jpg",
        "description": "OnePlus 9 Android smartphone. Announced Mar 2021. Features 6.55″  display, Snapdragon 888 5G chipset, 4500 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_8_pro-9919",
        "name": "8 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8-pro.jpg",
        "description": "OnePlus 8 Pro Android smartphone. Announced Apr 2020. Features 6.78″  display, Snapdragon 865 5G chipset, 4510 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_nord_ce_2_5g-11269",
        "name": "Nord CE 2 5G",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-5g.jpg",
        "description": "OnePlus Nord CE 2 5G Android smartphone. Announced Feb 2022. Features 6.43″  display, Dimensity 900 chipset, 4500 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "oneplus_11r-11915",
        "name": "11",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-ace2.jpg",
        "description": "OnePlus 11R Android smartphone. Announced Feb 2023. Features 6.74″  display, Snapdragon 8+ Gen 1 chipset, 5000 mAh battery, 512 GB storage, 18 GB RAM."
      },
      {
        "id": "oneplus_7_pro_5g-9704",
        "name": "7 Pro 5G",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r1.jpg",
        "description": "OnePlus 7 Pro 5G Android smartphone. Announced May 2019. Features 6.67″  display, Snapdragon 855 chipset, 4000 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5."
      }
    ],
    samsung: [
      {
        "id": "samsung_galaxy_z_fold6-13147",
        "name": "Galaxy Z Fold 6",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg",
        "description": "Samsung Galaxy Z Fold6 Android smartphone. Announced Jul 2024. Features 7.6″  display, Snapdragon 8 Gen 3 chipset, 4400 mAh battery, 1024 GB storage, 12 GB RAM."
      },
      {
        "id": "samsung_galaxy_z_fold5-12418",
        "name": "Galaxy Z Fold5",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
        "description": "Samsung Galaxy Z Fold5 Android smartphone. Announced Jul 2023. Features 7.6″  display, Snapdragon 8 Gen 2 chipset, 4400 mAh battery, 1024 GB storage, 12 GB RAM."
      },
      {
        "id": "samsung_galaxy_z_fold4-11737",
        "name": "Galaxy Z Fold 4",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4.jpg",
        "description": "Samsung Galaxy Z Fold4 Android smartphone. Announced Aug 2022. Features 7.6″  display, Snapdragon 8+ Gen 1 chipset, 4400 mAh battery, 1024 GB storage, 12 GB RAM."
      },
      {
        "id": "samsung_galaxy_s10e-9537",
        "name": "Galaxy S10e",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10e.jpg",
        "description": "Samsung Galaxy S10e Android smartphone. Announced Feb 2019. Features 5.8″  display, Exynos 9820 chipset, 3100 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_note9-9163",
        "name": "Galaxy Note9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note9-r1.jpg",
        "description": "Samsung Galaxy Note9 Android smartphone. Announced Aug 2018. Features 6.4″  display, Exynos 9810 chipset, 4000 mAh battery, 512 GB storage, 8 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_note8-8505",
        "name": "Galaxy Note8",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-8-sm-n950.jpg",
        "description": "Samsung Galaxy Note8 Android smartphone. Announced Aug 2017. Features 6.3″  display, Exynos 8895 chipset, 3300 mAh battery, 256 GB storage, 6 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_s8-8161",
        "name": "Galaxy S8",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
        "description": "Samsung Galaxy S8 Android smartphone. Announced Mar 2017. Features 5.8″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_note_4-6434",
        "name": "Galaxy Note 4",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-4-new.jpg",
        "description": "Samsung Galaxy Note 4 Android smartphone. Announced Sep 2014. Features 5.7″  display, Snapdragon 805 chipset, 16 MP primary camera, 3.7 MP front camera, 3220 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "samsung_g3812b_galaxy_s3_slim-6209",
        "name": "G3812B Galaxy S3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/Samsung-G3812B-Galaxy-S3-Slim.jpg",
        "description": "Samsung G3812B Galaxy S3 Android smartphone. Announced Mar 2014. Features 4.52″  display, 5 MP primary camera, 2100 mAh battery, 8 GB storage, 1000 MB RAM."
      },
      {
        "id": "samsung_galaxy_note10_lite-10003",
        "name": "Galaxy Note10 Lite",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/sasmung-galaxy-note10-lite-r.jpg",
        "description": "Samsung Galaxy Note10 Lite Android smartphone. Announced Jan 2020. Features 6.7″  display, Exynos 9810 chipset, 4500 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "samsung_galaxy_note_3-5665",
        "name": "Galaxy Note 3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-3.jpg",
        "description": "Samsung Galaxy Note 3 Android smartphone. Announced Sep 2013. Features 5.7″  display, Snapdragon 800 chipset, 13 MP primary camera, 2 MP front camera, 3200 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "samsung_galaxy_note_ii_cdma-5152",
        "name": "Galaxy Note II",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-ii-cdma.jpg",
        "description": "Samsung Galaxy Note II CDMA Android smartphone. Announced Q3 2012. Features 5.5″  display, Exynos 4412 Quad chipset, 8 MP primary camera, 1.9 MP front camera, 3100 mAh battery, 16 GB storage, 2 GB RAM."
      },
      {
        "id": "samsung_galaxy_note_3_neo-5961",
        "name": "Galaxy Note 3",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/-samsung-galaxy-note-3-neo-new1.jpg",
        "description": "Samsung Galaxy Note 3 Neo Android smartphone. Announced Jan 2014. Features 5.5″  display, Exynos 5260 Hexa chipset, 8 MP primary camera, 2 MP front camera, 3100 mAh battery, 16 GB storage, 2 GB RAM."
      },
      {
        "id": "samsung_galaxy_a9_(2018)-9344",
        "name": "Galaxy A9",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a9-2018.jpg",
        "description": "Samsung Galaxy A9 (2018) Android smartphone. Announced Oct 2018. Features 6.3″  display, Snapdragon 660 chipset, 3800 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_k_zoom-6210",
        "name": "Galaxy K zoom",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-k-zoom-new.jpg",
        "description": "Samsung Galaxy K zoom Android smartphone. Announced Apr 2014. Features 4.8″  display, Exynos 5260 Hexa chipset, 20.7 MP primary camera, 2 MP front camera, 2430 mAh battery, 8 GB storage, 2 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "samsung_galaxy_s5_mini-6252",
        "name": "Galaxy S5 mini",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s5-mini.jpg",
        "description": "Samsung Galaxy S5 mini Android smartphone. Announced Jun 2014. Features 4.5″  display, Exynos 3470 Quad chipset, 8 MP primary camera, 2.1 MP front camera, 2100 mAh battery, 16 GB storage, 1.5 GB RAM."
      },
      {
        "id": "samsung_galaxy_alpha-6573",
        "name": "Galaxy Alpha",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-alpha.jpg",
        "description": "Samsung Galaxy Alpha Android smartphone. Announced Aug 2014. Features 4.7″  display, Exynos 5430 Octa chipset, 12 MP primary camera, 2.1 MP front camera, 1860 mAh battery, 32 GB storage, 2 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "samsung_galaxy_note_fe-8683",
        "name": "Galaxy Note",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-fe1.jpg",
        "description": "Samsung Galaxy Note FE Android smartphone. Announced Jul 2017. Features 5.7″  display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_note_edge-6631",
        "name": "Galaxy Note Edge",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-edge1.jpg",
        "description": "Samsung Galaxy Note Edge Android smartphone. Announced Sep 2014. Features 5.6″  display, Snapdragon 805 chipset, 16 MP primary camera, 3.7 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "samsung_galaxy_a5_(2017)-8494",
        "name": "Galaxy A5",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017-new.jpg",
        "description": "Samsung Galaxy A5 (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "samsung_galaxy_a3_(2017)-8336",
        "name": "Galaxy A3 ",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a3-2017.jpg",
        "description": "Samsung Galaxy A3 (2017) Android smartphone. Announced Jan 2017. Features 4.7″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 8 MP front camera, 2350 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "samsung_galaxy_core_prime-6716",
        "name": "Galaxy Core Prime",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-core-prime.jpg",
        "description": "Samsung Galaxy Core Prime Android smartphone. Announced Nov 2014. Features 4.5″  display, Snapdragon 410 chipset, 5 MP primary camera, 2 MP front camera, 2000 mAh battery, 8 GB storage, 1000 MB RAM."
      },
      {
        "id": "samsung_galaxy_j4-9204",
        "name": "Galaxy J4",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j4-j400.jpg",
        "description": "Samsung Galaxy J4 Android smartphone. Announced May 2018. Features 5.5″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM."
      },
      {
        "id": "samsung_galaxy_s7_(usa)-7960",
        "name": "Galaxy S7 (USA)",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-usa.jpg",
        "description": "Samsung Galaxy S7 (USA) Android smartphone. Announced Feb 2016. Features 5.1″  display, Snapdragon 820 chipset, 12 MP primary camera, 5 MP front camera, 3000 mAh battery, 32 GB storage, 4 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "samsung_galaxy_s7_edge-7945",
        "name": "Galaxy S7 edge",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-edge-.jpg",
        "description": "Samsung Galaxy S7 edge Android smartphone. Announced Feb 2016. Features 5.5″  display, Snapdragon 820 chipset, 12 MP primary camera, 5 MP front camera, 3600 mAh battery, 128 GB storage, 4 GB RAM, Corning Gorilla Glass 4."
      },
      {
        "id": "samsung_galaxy_a50-9554",
        "name": "Galaxy A50",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg",
        "description": "Samsung Galaxy A50 Android smartphone. Announced Feb 2019. Features 6.4″  display, Exynos 9610 chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 3."
      },
      {
        "id": "samsung_galaxy_a73_5g-11257",
        "name": "Galaxy A73",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg",
        "description": "Samsung Galaxy A73 5G Android smartphone. Announced Mar 2022. Features 6.7″  display, Snapdragon 778G 5G chipset, 5000 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 5."
      },
      {
        "id": "samsung_galaxy_s24-12773",
        "name": "Galaxy S24",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg",
        "description": "Samsung Galaxy S24 Android smartphone. Announced Jan 2024. Features 6.2″  display, Snapdragon 8 Gen 3 chipset, 4000 mAh battery, 512 GB storage, 12 GB RAM, Corning Gorilla Glass Victus 2."
      },
      {
        "id": "samsung_galaxy_s24_ultra-12771",
        "name": "Galaxy S24 Ultra",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
        "description": "Samsung Galaxy S24 Ultra Android smartphone. Announced Jan 2024. Features 6.8″  display, Snapdragon 8 Gen 3 chipset, 5000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Armor."
      },
      {
        "id": "samsung_galaxy_s23_ultra-12024",
        "name": "Galaxy S23 Ultra",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        "description": "Samsung Galaxy S23 Ultra Android smartphone. Announced Feb 2023. Features 6.8″  display, Snapdragon 8 Gen 2 chipset, 5000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Glass Victus 2."
      },
      {
        "id": "samsung_galaxy_s23-12082",
        "name": "Galaxy S23",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
        "description": "Samsung Galaxy S23 Android smartphone. Announced Feb 2023. Features 6.1″  display, Snapdragon 8 Gen 2 chipset, 3900 mAh battery, 512 GB storage, 8 GB RAM, Corning Gorilla Glass Victus 2."
      }
    ],
    iphone: [
      {
        "id": "apple_iphone_x-8858",
        "name": "iPhone X",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
        "description": "Apple iPhone X smartphone. Announced Sep 2017. Features 5.8″  display, Apple A11 Bionic chipset, Dual: 12 MP (f/1.8, 28mm, 1.22µm) + 12 MP primary camera, 7 MP front camera, 2716 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass."
      },
      {
        "id": "apple_iphone_xs-9318",
        "name": "iPhone XS",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
        "description": "Apple iPhone XS smartphone. Announced Sep 2018. Features 5.8″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 2658 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass."
      },
      {
        "id": "apple_iphone_11-9848",
        "name": "iPhone 11",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
        "description": "Apple iPhone 11 smartphone. Announced Sep 2019. Features 6.1″  display, Apple A13 Bionic chipset, 3110 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass."
      },
      {
        "id": "apple_iphone_xr-9320",
        "name": "iPhone XR",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
        "description": "Apple iPhone XR smartphone. Announced Sep 2018. Features 6.1″  display, Apple A12 Bionic chipset, 12 MP primary camera, 7 MP front camera, 2942 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass."
      },
      {
        "id": "apple_iphone_12_pro_max-10237",
        "name": "iPhone 12 Pro Max",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
        "description": "Apple iPhone 12 Pro Max smartphone. Announced Oct 2020. Features 6.7″  display, Apple A14 Bionic chipset, 3687 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass."
      },
      {
        "id": "apple_iphone_7-8064",
        "name": "iPhone 7",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg",
        "description": "Apple iPhone 7 smartphone. Announced Sep 2016. Features 4.7″  display, Apple A10 Fusion chipset, 12 MP primary camera, 7 MP front camera, 1960 mAh battery, 256 GB storage, 2 GB RAM, Ion-strengthened glass."
      },
      {
        "id": "apple_iphone_12_pro-10508",
        "name": "iPhone 12 Pro",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
        "description": "Apple iPhone 12 Pro smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass."
      },
      {
        "id": "apple_iphone-1827",
        "name": "iPhone",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone.gif",
        "description": "Apple iPhone smartphone. Announced Jan 2007. Features 3.5″  display, 2 MP primary camera, 1400 mAh battery, 16 GB storage, Corning Gorilla Glass."
      },
      {
        "id": "apple_iphone_se-7969",
        "name": "iPhone SE",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5se-ofic.jpg",
        "description": "Apple iPhone SE smartphone. Announced Mar 2016. Features 4.0″  display, Apple A9 chipset, 12 MP primary camera, 1.2 MP front camera, 1624 mAh battery, 128 GB storage, 2 GB RAM."
      },
      {
        "id": "apple_iphone_13-11103",
        "name": "iPhone 13",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
        "description": "Apple iPhone 13 smartphone. Announced Sep 2021. Features 6.1″  display, Apple A15 Bionic chipset, 3240 mAh battery, 512 GB storage, 4 GB RAM, Ceramic Shield glass."
      },
      {
        "id": "apple_iphone_xs_max-9319",
        "name": "iPhone XS Max",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
        "description": "Apple iPhone XS Max smartphone. Announced Sep 2018. Features 6.5″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 3174 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass."
      },
      {
        "id": "apple_iphone_6s-7242",
        "name": "iPhone 6s",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
        "description": "Apple iPhone 6s smartphone. Announced Sep 2015. Features 4.7″  display, Apple A9 (14 chipset, 12 MP primary camera, 5 MP front camera, 1715 mAh battery, 128 GB storage, 2 GB RAM, Ion-strengthened glass."
      },
      {
        "id": "apple_iphone_14_plus-11862",
        "name": "iPhone 14 Plus",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg",
        "description": "Apple iPhone 14 Plus smartphone. Announced Sep 2022. Features 6.7″  display, Apple A15 Bionic chipset, 4323 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass."
      },
      {
        "id": "apple_iphone_14_pro_max-11773",
        "name": "iPhone 14 Pro Max",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        "description": "Apple iPhone 14 Pro Max smartphone. Announced Sep 2022. Features 6.7″  display, Apple A16 Bionic chipset, 4323 mAh battery, 1024 GB storage, 6 GB RAM, Ceramic Shield glass."
      },
      {
        "id": "apple_iphone_12-10509",
        "name": "iPhone 12",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
        "description": "Apple iPhone 12 smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 256 GB storage, 4 GB RAM, Ceramic Shield glass."
      },
      {
        "id": "apple_iphone_8-8573",
        "name": "iPhone 8",
        "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg",
        "description": "Apple iPhone 8 smartphone. Announced Sep 2017. Features 4.7″  display, Apple A11 Bionic chipset, 12 MP primary camera, 7 MP front camera, 1821 mAh battery, 256 GB storage, 2 GB RAM, Ion-strengthened glass."
      }
    ]
  }
  

// Combine the data into a single array
const devices = [...data.zte, ...data.sony,...data.asus,...data.huawei,...data.htc,...data.lg,...data.motorola,...data.oneplus,...data.samsung,...data.iphone];

// Define the options for Fuse.js
const options = {
  includeScore: true,
  keys: ['name', 'description'], // Search by name or description
};

const fuse = new Fuse(devices, options);



function FuzzySearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Handle search
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);
    if (searchTerm.length > 0) {
      const result = fuse.search(searchTerm);
      setResults(result.map(({ item }) => item));
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Fuzzy Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a device..."
        className="border p-2 rounded"
      />
      <ul>
        {results.length > 0 ? (
          results.map((device) => (
            <li key={device.id} className="p-2 border-b">
              <img src={device.img} alt={device.name} style={{ width: '50px' }} />
              <div>
                <h2>{device.name}</h2>
                <p>{device.description}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
}

export default FuzzySearchComponent;


// Function to perform fuzzy search
function search(query) {
    const result = fuse.search(query);
    return result.map(({ item }) => item); // Return only the matched items
  }
  
  // Example search query
  const query = 'iphone x';
  const results = search(query);
  console.log(query)
  console.log(results);
  