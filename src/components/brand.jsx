import React from "react";
import { useParams } from "react-router-dom";

const Brand = () => {
  const data = {
    ZTE: [
      {
        id: "zte_axon_10_pro-9695",
        name: "Axon 10 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/zte-axon-10-pro-4g.jpg",
        description:
          "ZTE Axon 10 Pro Android smartphone. Announced Feb 2019. Features 6.47″  display, Snapdragon 855 chipset, 4000 mAh battery, 256 GB storage, 12 GB RAM.",
      },
      {
        id: "zte_axon_m-8902",
        name: "Axon M",
        img: "https://fdn2.gsmarena.com/vv/bigpic/zte-axon-m-1.jpg",
        description:
          "ZTE Axon M Android smartphone. Announced Oct 2017. Features 5.2″  display, Snapdragon 821 chipset, 20 MP primary camera, 3180 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "zte_blade_v9-8971",
        name: "Blade V9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/zte-blade-v9-.jpg",
        description:
          "ZTE Blade V9 Android smartphone. Announced Feb 2018. Features 5.7″  display, Snapdragon 450 chipset, Dual: 16 MP (f/1.8, 1.12µm, PDAF) + 5 MP primary camera, 8 MP front camera, 3100 mAh battery, 64 GB storage, 4 GB RAM.",
      },
      {
        id: "zte_max_xl-8660",
        name: "Max XL",
        img: "https://fdn2.gsmarena.com/vv/bigpic/zte-max-xl.jpg",
        description:
          "ZTE Max XL Android smartphone. Announced Apr 2017. Features 6.0″  display, Snapdragon 435 chipset, 13 MP primary camera, 5 MP front camera, 3990 mAh battery, 32 GB storage, 2 GB RAM, Corning Gorilla Glass (unspecified version).",
      },
      {
        id: "zte_zmax-6697",
        name: "Zmax",
        img: "https://fdn2.gsmarena.com/vv/bigpic/zte-zmax.jpg",
        description:
          "ZTE Zmax Android smartphone. Announced Sep 2014. Features 5.7″  display, Snapdragon 400 chipset, 8 MP primary camera, 1.6 MP front camera, 3400 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 3.",
      },
    ],
    Sony: [
      {
        id: "sony_xperia_1-9543",
        name: "Xperia 1",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1.jpg",
        description:
          "Sony Xperia 1 Android smartphone. Announced Feb 2019. Features 6.5″  display, Snapdragon 855 chipset, 3330 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 6.",
      },
      {
        id: "sony_xperia_10-9353",
        name: "Xperia 10",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-.jpg",
        description:
          "Sony Xperia 10 Android smartphone. Announced Feb 2019. Features 6.0″  display, Snapdragon 630 chipset, 2870 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "sony_xperia_xa2-8986",
        name: "Xperia XA2",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-.jpg",
        description:
          "Sony Xperia XA2 Android smartphone. Announced Jan 2018. Features 5.2″  display, Snapdragon 630 chipset, 23 MP primary camera, 8 MP front camera, 3300 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "sony_xperia_5-9840",
        name: "Xperia 5",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-.jpg",
        description:
          "Sony Xperia 5 Android smartphone. Announced Sep 2019. Features 6.1″  display, Snapdragon 855 chipset, 3140 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 6.",
      },
      {
        id: "sony_xperia_z5_premium-7536",
        name: "Xperia Z5 Premium",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sony-z5-premium-.jpg",
        description:
          "Sony Xperia Z5 Premium Android smartphone. Announced Sep 2015. Features 5.5″  display, Snapdragon 810 chipset, 23 MP primary camera, 5.1 MP front camera, 3430 mAh battery, 32 GB storage, 3 GB RAM, Scratch-resistant glass.",
      },
      {
        id: "sony_xperia_m2-6146",
        name: "Xperia M2",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m2.jpg",
        description:
          "Sony Xperia M2 Android smartphone. Announced Feb 2014. Features 4.8″  display, Snapdragon 400 chipset, 8 MP primary camera, 2300 mAh battery, 8 GB storage, 1000 MB RAM, Corning Gorilla Glass 3.",
      },
    ],
    Asus: [
      {
        id: "asus_zenfone_6_zs630kl-9698",
        name: "Zenfone 6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6-zs630kl.jpg",
        description:
          "Asus Zenfone 6 ZS630KL Android smartphone. Announced May 2019. Features 6.4″  display, Snapdragon 855 chipset, 5000 mAh battery, 512 GB storage, 12 GB RAM, Corning Gorilla Glass 6.",
      },
      {
        id: "asus_zenfone_5_ze620kl-9061",
        name: "Zenfone 5 ",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-5-ze620kl-5z-zs620kl.jpg",
        description:
          "Asus Zenfone 5 ZE620KL Android smartphone. Announced Feb 2018. Features 6.2″  display, Snapdragon 636 chipset, 3300 mAh battery, 64 GB storage, 6 GB RAM, Corning Gorilla Glass (unspecified version).",
      },
      {
        id: "asus_rog_phone_ii_zs660kl-9770",
        name: "ROG Phone II ZS660KL",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone2.jpg",
        description:
          "Asus ROG Phone II ZS660KL Android smartphone. Announced Jul 2019. Features 6.59″  display, Snapdragon 855+ chipset, 6000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Glass 6.",
      },
      {
        id: "asus_zenfone_4_ze554kl-8782",
        name: "Zenfone 4",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-4-ze554kl.jpg",
        description:
          "Asus Zenfone 4 ZE554KL Android smartphone. Announced Aug 2017. Features 5.5″  display, Snapdragon 630 chipset, Dual: 12 MP (f/1.8, 25mm, 1/2.55″, 1.4µm, OIS, dual pixel PDAF) + 8 MP primary camera, 8 MP front camera, 3300 mAh battery, 64 GB storage, 6 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "asus_zenfone_3_ze520kl-8197",
        name: "Zenfone 3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-3-ZE520KL-1.jpg",
        description:
          "Asus Zenfone 3 ZE520KL Android smartphone. Announced Jul 2016. Features 5.2″  display, Snapdragon 625 chipset, 16 MP primary camera, 8 MP front camera, 2600 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "asus_rog_phone_5s-11054",
        name: "ROG Phone 5s",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5s-new.jpg",
        description:
          "Asus ROG Phone 5s Android smartphone. Announced Aug 2021. Features 6.78″  display, Snapdragon 888+ 5G chipset, 6000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus.",
      },
      {
        id: "asus_rog_phone_5-10715",
        name: "ROG Phone 5",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5.jpg",
        description:
          "Asus ROG Phone 5 Android smartphone. Announced Mar 2021. Features 6.78″  display, Snapdragon 888 5G chipset, 6000 mAh battery, 256 GB storage, 16 GB RAM, Corning Gorilla Glass Victus.",
      },
      {
        id: "asus_zenfone_3_ze552kl-8106",
        name: "Zenfone 3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-3-ze552kl.jpg",
        description:
          "Asus Zenfone 3 ZE552KL Android smartphone. Announced May 2016. Features 5.5″  display, Snapdragon 625 chipset, 16 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "asus_rog_phone_6-11647",
        name: "ROG Phone 6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone6.jpg",
        description:
          "Asus ROG Phone 6 Android smartphone. Announced Jul 2022. Features 6.78″  display, Snapdragon 8+ Gen 1 chipset, 6000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus.",
      },
      {
        id: "asus_zenfone_6_a601cg_(2014)-6853",
        name: "Zenfone 6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6.jpg",
        description:
          "Asus Zenfone 6 A601CG (2014) Android smartphone. Announced Jan 2014. Features 6.0″  display, Intel Atom Z2560 chipset, 13 MP primary camera, 2 MP front camera, 3230 mAh battery, 32 GB storage, 2 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "asus_rog_phone_5_pro-10784",
        name: "ROG Phone 5 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5-pro.jpg",
        description:
          "Asus ROG Phone 5 Pro Android smartphone. Announced Mar 2021. Features 6.78″  display, Snapdragon 888 5G chipset, 6000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus.",
      },
    ],
    Huawei: [
      {
        id: "huawei_p40-10153",
        name: "P40",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40.jpg",
        description:
          "Huawei P40 Android smartphone. Announced Mar 2020. Features 6.1″  display, Kirin 990 5G chipset, 3800 mAh battery, 256 GB storage, 8 GB RAM.",
      },
      {
        id: "huawei_nova_3i-9632",
        name: "nova 3i",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-3i.jpg",
        description:
          "Huawei nova 3i Android smartphone. Announced Jul 2018. Features 6.3″  display, Kirin 710 chipset, 3340 mAh battery, 128 GB storage, 6 GB RAM.",
      },
      {
        id: "huawei_mate_10_lite-8857",
        name: "Mate 10 Lite",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-10-lite.jpg",
        description:
          "Huawei Mate 10 Lite Android smartphone. Announced Oct 2017. Features 5.9″  display, Kirin 659 chipset, Dual: 16 MP (f/2.2, 27mm, PDAF) + 2 MP primary camera, Dual: 13 MP (f/2.0, 26mm) + 2 MP front camera, 3340 mAh battery, 64 GB storage, 4 GB RAM.",
      },
      {
        id: "huawei_p8_lite_(2017)-8516",
        name: "P8 Lite",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p8-lite-2017.jpg",
        description:
          "Huawei P8 Lite (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Kirin 655 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM.",
      },
      {
        id: "huawei_p9_lite-7983",
        name: "P9 lite",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p9-lite-r1.jpg",
        description:
          "Huawei P9 lite Android smartphone. Announced Apr 2016. Features 5.2″  display, Kirin 650 chipset, 13 MP primary camera, 8 MP front camera, 3000 mAh battery, 16 GB storage, 3 GB RAM.",
      },
      {
        id: "huawei_mate_20-9367",
        name: "Mate 20",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-20-.jpg",
        description:
          "Huawei Mate 20 Android smartphone. Announced Oct 2018. Features 6.53″  display, Kirin 980 chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM.",
      },
      {
        id: "huawei_p30-9530",
        name: "P30",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30.jpg",
        description:
          "Huawei P30 Android smartphone. Announced Mar 2019. Features 6.1″  display, Kirin 980 chipset, 3650 mAh battery, 256 GB storage, 8 GB RAM.",
      },
      {
        id: "huawei_y7_(2019)-9625",
        name: "Y7",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-y7-prime-2019.jpg",
        description:
          "Huawei Y7 (2019) Android smartphone. Announced Mar 2019. Features 6.26″  display, Snapdragon 450 chipset, 4000 mAh battery, 64 GB storage, 4 GB RAM.",
      },
      {
        id: "huawei_y6-7440",
        name: "Y6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-4a.jpg",
        description:
          "Huawei Y6 Android smartphone. Announced Jul 2015. Features 5.0″  display, Snapdragon 210 chipset, 8 MP primary camera, 2 MP front camera, 2200 mAh battery, 8 GB storage, 2 GB RAM.",
      },
      {
        id: "huawei_ascend_plus-6375",
        name: "Ascend Plus",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-h881c-ascend-plus.jpg",
        description:
          "Huawei Ascend Plus Android smartphone. Announced Apr 2014. Features 4.0″  display, 5 MP primary camera, 1700 mAh battery.",
      },
      {
        id: "huawei_p30_lite-9545",
        name: "P30 lite",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-lite-.jpg",
        description:
          "Huawei P30 lite Android smartphone. Announced Mar 2019. Features 6.15″  display, Kirin 710 chipset, 3340 mAh battery, 256 GB storage, 8 GB RAM.",
      },
      {
        id: "huawei_p30_pro-9635",
        name: "P30 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-pro.jpg",
        description:
          "Huawei P30 Pro Android smartphone. Announced Mar 2019. Features 6.47″  display, Kirin 980 chipset, 4200 mAh battery, 512 GB storage, 8 GB RAM.",
      },
      {
        id: "huawei_p9-7972",
        name: "P9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p9r2.jpg",
        description:
          "Huawei P9 Android smartphone. Announced Apr 2016. Features 5.2″  display, Kirin 955 chipset, Dual: 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "huawei_p40_pro-10152",
        name: "P40 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40-pro.jpg",
        description:
          "Huawei P40 Pro Android smartphone. Announced Mar 2020. Features 6.58″  display, Kirin 990 5G chipset, 4200 mAh battery, 512 GB storage, 8 GB RAM.",
      },
    ],
    HTC: [
      {
        id: "htc_u12+-9119",
        name: "U12+",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-u12-plus-.jpg",
        description:
          "HTC U12+ Android smartphone. Announced May 2018. Features 6.0″  display, Snapdragon 845 chipset, 3500 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "htc_u11-8630",
        name: "U11",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-u11.jpg",
        description:
          "HTC U11 Android smartphone. Announced May 2017. Features 5.5″  display, Snapdragon 835 chipset, 12 MP primary camera, 16 MP front camera, 3000 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "htc_one_x10-8487",
        name: "One X10",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-one-x10.jpg",
        description:
          "HTC One X10 Android smartphone. Announced Apr 2017. Features 5.5″  display, MT6755 Helio P10 chipset, 16 MP primary camera, 8 MP front camera, 4000 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass (unspecified version).",
      },
      {
        id: "htc_u_ultra-8519",
        name: "U Ultra",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-u-ultra.jpg",
        description:
          "HTC U Ultra Android smartphone. Announced Jan 2017. Features 5.7″  display, Snapdragon 821 chipset, 12 MP primary camera, 16 MP front camera, 3000 mAh battery, 128 GB storage, 4 GB RAM, Corning Gorilla Glass 5 (64 GB version).",
      },
      {
        id: "htc_one_a9-7576",
        name: "One A9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-one-a9-new.jpg",
        description:
          "HTC One A9 Android smartphone. Announced Sep 2015. Features 5.0″  display, Snapdragon 617 chipset, 13 MP primary camera, 4 MP front camera, 2150 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "htc_one_m9-6891",
        name: "One M9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-one-m9-1.jpg",
        description:
          "HTC One M9 Android smartphone. Announced Mar 2015. Features 5.0″  display, Snapdragon 810 chipset, 20 MP primary camera, 4 MP front camera, 2840 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "htc_one_m8_prime-6371",
        name: "One M8",
        img: "https://fdn2.gsmarena.com/vv/bigpic/htc-one-prime-m8.jpg",
        description:
          "HTC One M8 Prime Android smartphone. Announced Q3 2014. Features 5.5″  display, Dual: 4 MP primary camera, 5 MP front camera, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
    ],
    LG: [
      {
        id: "lg_g8_thinq-9540",
        name: "G8 ThinQ",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-g8-thinq-r1.jpg",
        description:
          "LG G8 ThinQ Android smartphone. Announced Feb 2019. Features 6.1″  display, Snapdragon 855 chipset, 3500 mAh battery, 128 GB storage, 6 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5.",
      },
      {
        id: "lg_v60_thinq_5g-10103",
        name: "V60 ThinQ 5G",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-v60-thinq-5g-b.jpg",
        description:
          "LG V60 ThinQ 5G Android smartphone. Announced Feb 2020. Features 6.8″  display, Snapdragon 865 5G chipset, 5000 mAh battery, 256 GB storage, 8 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5.",
      },
      {
        id: "lg_v20-8238",
        name: "V20",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-v20-ofic1.jpg",
        description:
          "LG V20 Android smartphone. Announced Sep 2016. Features 5.7″  display, Snapdragon 820 chipset, Dual: 16 MP (f/1.8, 29mm, 1/2.6″, laser AF, 3-axis OIS) + 8 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 4.",
      },
      {
        id: "lg_g4-6901",
        name: "G4",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-g4-.jpg",
        description:
          "LG G4 Android smartphone. Announced Apr 2015. Features 5.5″  display, Snapdragon 808 chipset, 16 MP primary camera, 8 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "lg_velvet_5g_uw-10378",
        name: "Velvet 5G UW",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-5g-uw-.jpg",
        description:
          "LG Velvet 5G UW Android smartphone. Announced Aug 2020. Features 6.8″  display, Snapdragon 765G 5G chipset, 4300 mAh battery, 128 GB storage, 6 GB RAM, MIL-STD-810G compliant.",
      },
      {
        id: "lg_k7_(2017)-8817",
        name: "K7 ",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-k7-2017.jpg",
        description:
          "LG K7 (2017) Android smartphone. Announced Apr 2017. Features 5.0″  display, MT6737M chipset, 8 MP primary camera, 5 MP front camera, 2500 mAh battery, 16 GB storage, 2 GB RAM.",
      },
      {
        id: "lg_g3-6294",
        name: "G3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-1.jpg",
        description:
          "LG G3 Android smartphone. Announced May 2014. Features 5.5″  display, Snapdragon 801 chipset, 13 MP primary camera, 2.1 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "lg_q_stylo_4-9251",
        name: "Q Stylo 4",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo-4-q710ms.jpg",
        description:
          "LG Q Stylo 4 Android smartphone. Announced Jun 2018. Features 6.2″  display, Snapdragon 450 chipset, 13 MP primary camera, 5 MP front camera, 3300 mAh battery, 32 GB storage, 2 GB RAM.",
      },
      {
        id: "lg_stylo_6-10255",
        name: "Stylo 6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo6.jpg",
        description:
          "LG Stylo 6 Android smartphone. Announced May 2020. Features 6.8″  display, MT6765 Helio P35 chipset, 4000 mAh battery, 64 GB storage, 3 GB RAM.",
      },
      {
        id: "lg_q51-10102",
        name: "Q51",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-q51.jpg",
        description:
          "LG Q51 Android smartphone. Announced Feb 2020. Features 6.5″  display, MT6762 Helio P22 chipset, 4000 mAh battery, 32 GB storage, 3 GB RAM, MIL-STD-810G compliant.",
      },
      {
        id: "lg_v60_thinq_5g_uw-10256",
        name: "V60 ThinQ 5G UW",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-v60-thinq-5g-b.jpg",
        description:
          "LG V60 ThinQ 5G UW Android smartphone. Announced Feb 2020. Features 6.8″  display, Snapdragon 865 5G chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5.",
      },
      {
        id: "lg_g2_mini_lte_(tegra)-6118",
        name: "G2 mini LTE (Tegra)",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-g2-mini-ofic1.jpg",
        description:
          "LG G2 mini LTE (Tegra) Android smartphone. Announced Feb 2014. Features 4.7″  display, Nvidia Tegra 4i chipset, 13 MP primary camera, 1.3 MP front camera, 2440 mAh battery, 8 GB storage, 1000 MB RAM, Corning Gorilla Glass 2.",
      },
      {
        id: "lg_q7-9206",
        name: "Q7",
        img: "https://fdn2.gsmarena.com/vv/bigpic/lg-q7-.jpg",
        description:
          "LG Q7 Android smartphone. Announced May 2018. Features 5.5″  display, MT6750S chipset, 13 MP primary camera, 5 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant.",
      },
    ],
    Motorola: [
      {
        id: "motorola_razr_2022-11752",
        name: "Razr",
        img: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-razr-2022-1.jpg",
        description:
          "Motorola Razr 2022 Android smartphone. Announced Aug 2022. Features 6.7″  display, Snapdragon 8+ Gen 1 chipset, 3500 mAh battery, 512 GB storage, 12 GB RAM.",
      },
      {
        id: "motorola_edge+_(2023)-12251",
        name: "Edge+",
        img: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-plus-2023.jpg",
        description:
          "Motorola Edge+ (2023) Android smartphone. Announced May 2023. Features 6.67″  display, Snapdragon 8 Gen 2 chipset, 5100 mAh battery, 512 GB storage, 8 GB RAM, Corning Gorilla Glass Victus.",
      },
      {
        id: "motorola_one_5g-10407",
        name: "One",
        img: "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-5g.jpg",
        description:
          "Motorola One 5G Android smartphone. Announced Sep 2020. Features 6.7″  display, Snapdragon 765 5G chipset, 5000 mAh battery, 128 GB storage, 4 GB RAM.",
      },
      {
        id: "motorola_moto_g_(2023)-12249",
        name: "Moto G",
        img: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-5g-2023.jpg",
        description:
          "Motorola Moto G (2023) Android smartphone. Announced May 2023. Features 6.5″  display, Snapdragon 480+ 5G chipset, 5000 mAh battery, 128 GB storage, 4 GB RAM.",
      },
      {
        id: "motorola_moto_g4_plus-8050",
        name: "Moto G4 Plus",
        img: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g4-plus-r.jpg",
        description:
          "Motorola Moto G4 Plus Android smartphone. Announced May 2016. Features 5.5″  display, Snapdragon 617 chipset, 16 MP primary camera, 5 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 3.",
      },
    ],
    Oneplus: [
      {
        id: "oneplus_12-12725",
        name: "12",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
        description:
          "OnePlus 12 Android smartphone. Announced Dec 2023. Features 6.82″  display, Snapdragon 8 Gen 3 chipset, 5400 mAh battery, 1024 GB storage, 24 GB RAM, Corning Gorilla Glass Victus 2.",
      },
      {
        id: "oneplus_11-11893",
        name: "11",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
        description:
          "OnePlus 11 Android smartphone. Announced Jan 2023. Features 6.7″  display, Snapdragon 8 Gen 2 chipset, 5000 mAh battery, 512 GB storage, 16 GB RAM, Corning Gorilla Glass Victus.",
      },
      {
        id: "oneplus_6-9109",
        name: "6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6-red.jpg",
        description:
          "OnePlus 6 Android smartphone. Announced May 2018. Features 6.28″  display, Snapdragon 845 chipset, 3300 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_nord_n20_5g-11218",
        name: "Nord N20 5G",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-n20-5g-.jpg",
        description:
          "OnePlus Nord N20 5G Android smartphone. Announced Apr 2022. Features 6.43″  display, Snapdragon 695 5G chipset, 4500 mAh battery, 128 GB storage, 6 GB RAM, Schott Xensation Up.",
      },
      {
        id: "oneplus_10t-11622",
        name: "10T",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-10t-5g.jpg",
        description:
          "OnePlus 10T Android smartphone. Announced Aug 2022. Features 6.7″  display, Snapdragon 8+ Gen 1 chipset, 4800 mAh battery, 256 GB storage, 16 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_nord_2t-11517",
        name: "Nord 2T",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2t.jpg",
        description:
          "OnePlus Nord 2T Android smartphone. Announced May 2022. Features 6.43″  display, Dimensity 1300 chipset, 4500 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_one-6327",
        name: "One",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg",
        description:
          "OnePlus One Android smartphone. Announced Apr 2014. Features 5.5″  display, Snapdragon 801 chipset, 13 MP primary camera, 5 MP front camera, 3100 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "oneplus_8-10161",
        name: "8",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8.jpg",
        description:
          "OnePlus 8 Android smartphone. Announced Apr 2020. Features 6.55″  display, Snapdragon 865 5G chipset, 4300 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_7_pro-9689",
        name: "7 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r1.jpg",
        description:
          "OnePlus 7 Pro Android smartphone. Announced May 2019. Features 6.67″  display, Snapdragon 855 chipset, 4000 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_3-7995",
        name: "3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3-.jpg",
        description:
          "OnePlus 3 Android smartphone. Announced Jun 2016. Features 5.5″  display, Snapdragon 820 chipset, 3000 mAh battery, 64 GB storage, 6 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "oneplus_9-10747",
        name: "9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-.jpg",
        description:
          "OnePlus 9 Android smartphone. Announced Mar 2021. Features 6.55″  display, Snapdragon 888 5G chipset, 4500 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_8_pro-9919",
        name: "8 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8-pro.jpg",
        description:
          "OnePlus 8 Pro Android smartphone. Announced Apr 2020. Features 6.78″  display, Snapdragon 865 5G chipset, 4510 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_nord_ce_2_5g-11269",
        name: "Nord CE 2 5G",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-5g.jpg",
        description:
          "OnePlus Nord CE 2 5G Android smartphone. Announced Feb 2022. Features 6.43″  display, Dimensity 900 chipset, 4500 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "oneplus_11r-11915",
        name: "11",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-ace2.jpg",
        description:
          "OnePlus 11R Android smartphone. Announced Feb 2023. Features 6.74″  display, Snapdragon 8+ Gen 1 chipset, 5000 mAh battery, 512 GB storage, 18 GB RAM.",
      },
      {
        id: "oneplus_7_pro_5g-9704",
        name: "7 Pro 5G",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r1.jpg",
        description:
          "OnePlus 7 Pro 5G Android smartphone. Announced May 2019. Features 6.67″  display, Snapdragon 855 chipset, 4000 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 5.",
      },
    ],
    Samsung: [
      {
        id: "samsung_galaxy_s24-12773",
        name: "Galaxy S24",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg",
        description:
          "Samsung Galaxy S24 Android smartphone. Announced Jan 2024. Features 6.2″  display, Snapdragon 8 Gen 3 chipset, 4000 mAh battery, 512 GB storage, 12 GB RAM, Corning Gorilla Glass Victus 2.",
      },
      {
        id: "samsung_galaxy_s24_ultra-12771",
        name: "Galaxy S24 Ultra",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
        description:
          "Samsung Galaxy S24 Ultra Android smartphone. Announced Jan 2024. Features 6.8″  display, Snapdragon 8 Gen 3 chipset, 5000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Armor.",
      },
      {
        id: "samsung_galaxy_s23_ultra-12024",
        name: "Galaxy S23 Ultra",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        description:
          "Samsung Galaxy S23 Ultra Android smartphone. Announced Feb 2023. Features 6.8″  display, Snapdragon 8 Gen 2 chipset, 5000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Glass Victus 2.",
      },
      {
        id: "samsung_galaxy_s23-12082",
        name: "Galaxy S23",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
        description:
          "Samsung Galaxy S23 Android smartphone. Announced Feb 2023. Features 6.1″  display, Snapdragon 8 Gen 2 chipset, 3900 mAh battery, 512 GB storage, 8 GB RAM, Corning Gorilla Glass Victus 2.",
      },
      {
        id: "samsung_galaxy_z_fold6-13147",
        name: "Galaxy Z Fold 6",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg",
        description:
          "Samsung Galaxy Z Fold6 Android smartphone. Announced Jul 2024. Features 7.6″  display, Snapdragon 8 Gen 3 chipset, 4400 mAh battery, 1024 GB storage, 12 GB RAM.",
      },
      {
        id: "samsung_galaxy_z_fold5-12418",
        name: "Galaxy Z Fold5",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
        description:
          "Samsung Galaxy Z Fold5 Android smartphone. Announced Jul 2023. Features 7.6″  display, Snapdragon 8 Gen 2 chipset, 4400 mAh battery, 1024 GB storage, 12 GB RAM.",
      },
      {
        id: "samsung_galaxy_z_fold4-11737",
        name: "Galaxy Z Fold 4",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4.jpg",
        description:
          "Samsung Galaxy Z Fold4 Android smartphone. Announced Aug 2022. Features 7.6″  display, Snapdragon 8+ Gen 1 chipset, 4400 mAh battery, 1024 GB storage, 12 GB RAM.",
      },
      {
        id: "samsung_galaxy_s10e-9537",
        name: "Galaxy S10e",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10e.jpg",
        description:
          "Samsung Galaxy S10e Android smartphone. Announced Feb 2019. Features 5.8″  display, Exynos 9820 chipset, 3100 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_note9-9163",
        name: "Galaxy Note9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note9-r1.jpg",
        description:
          "Samsung Galaxy Note9 Android smartphone. Announced Aug 2018. Features 6.4″  display, Exynos 9810 chipset, 4000 mAh battery, 512 GB storage, 8 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_note8-8505",
        name: "Galaxy Note8",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-8-sm-n950.jpg",
        description:
          "Samsung Galaxy Note8 Android smartphone. Announced Aug 2017. Features 6.3″  display, Exynos 8895 chipset, 3300 mAh battery, 256 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_s8-8161",
        name: "Galaxy S8",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
        description:
          "Samsung Galaxy S8 Android smartphone. Announced Mar 2017. Features 5.8″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_note_4-6434",
        name: "Galaxy Note 4",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-4-new.jpg",
        description:
          "Samsung Galaxy Note 4 Android smartphone. Announced Sep 2014. Features 5.7″  display, Snapdragon 805 chipset, 16 MP primary camera, 3.7 MP front camera, 3220 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "samsung_g3812b_galaxy_s3_slim-6209",
        name: "G3812B Galaxy S3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/Samsung-G3812B-Galaxy-S3-Slim.jpg",
        description:
          "Samsung G3812B Galaxy S3 Android smartphone. Announced Mar 2014. Features 4.52″  display, 5 MP primary camera, 2100 mAh battery, 8 GB storage, 1000 MB RAM.",
      },
      {
        id: "samsung_galaxy_note10_lite-10003",
        name: "Galaxy Note10 Lite",
        img: "https://fdn2.gsmarena.com/vv/bigpic/sasmung-galaxy-note10-lite-r.jpg",
        description:
          "Samsung Galaxy Note10 Lite Android smartphone. Announced Jan 2020. Features 6.7″  display, Exynos 9810 chipset, 4500 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "samsung_galaxy_note_3-5665",
        name: "Galaxy Note 3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-3.jpg",
        description:
          "Samsung Galaxy Note 3 Android smartphone. Announced Sep 2013. Features 5.7″  display, Snapdragon 800 chipset, 13 MP primary camera, 2 MP front camera, 3200 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "samsung_galaxy_note_ii_cdma-5152",
        name: "Galaxy Note II",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-ii-cdma.jpg",
        description:
          "Samsung Galaxy Note II CDMA Android smartphone. Announced Q3 2012. Features 5.5″  display, Exynos 4412 Quad chipset, 8 MP primary camera, 1.9 MP front camera, 3100 mAh battery, 16 GB storage, 2 GB RAM.",
      },
      {
        id: "samsung_galaxy_s7_(usa)-7960",
        name: "Galaxy S7 (USA)",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-usa.jpg",
        description:
          "Samsung Galaxy S7 (USA) Android smartphone. Announced Feb 2016. Features 5.1″  display, Snapdragon 820 chipset, 12 MP primary camera, 5 MP front camera, 3000 mAh battery, 32 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "samsung_galaxy_s7_edge-7945",
        name: "Galaxy S7 edge",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-edge-.jpg",
        description:
          "Samsung Galaxy S7 edge Android smartphone. Announced Feb 2016. Features 5.5″  display, Snapdragon 820 chipset, 12 MP primary camera, 5 MP front camera, 3600 mAh battery, 128 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "samsung_galaxy_a50-9554",
        name: "Galaxy A50",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg",
        description:
          "Samsung Galaxy A50 Android smartphone. Announced Feb 2019. Features 6.4″  display, Exynos 9610 chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "samsung_galaxy_a73_5g-11257",
        name: "Galaxy A73",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg",
        description:
          "Samsung Galaxy A73 5G Android smartphone. Announced Mar 2022. Features 6.7″  display, Snapdragon 778G 5G chipset, 5000 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_note_3_neo-5961",
        name: "Galaxy Note 3",
        img: "https://fdn2.gsmarena.com/vv/bigpic/-samsung-galaxy-note-3-neo-new1.jpg",
        description:
          "Samsung Galaxy Note 3 Neo Android smartphone. Announced Jan 2014. Features 5.5″  display, Exynos 5260 Hexa chipset, 8 MP primary camera, 2 MP front camera, 3100 mAh battery, 16 GB storage, 2 GB RAM.",
      },
      {
        id: "samsung_galaxy_a9_(2018)-9344",
        name: "Galaxy A9",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a9-2018.jpg",
        description:
          "Samsung Galaxy A9 (2018) Android smartphone. Announced Oct 2018. Features 6.3″  display, Snapdragon 660 chipset, 3800 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_k_zoom-6210",
        name: "Galaxy K zoom",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-k-zoom-new.jpg",
        description:
          "Samsung Galaxy K zoom Android smartphone. Announced Apr 2014. Features 4.8″  display, Exynos 5260 Hexa chipset, 20.7 MP primary camera, 2 MP front camera, 2430 mAh battery, 8 GB storage, 2 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "samsung_galaxy_s5_mini-6252",
        name: "Galaxy S5 mini",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s5-mini.jpg",
        description:
          "Samsung Galaxy S5 mini Android smartphone. Announced Jun 2014. Features 4.5″  display, Exynos 3470 Quad chipset, 8 MP primary camera, 2.1 MP front camera, 2100 mAh battery, 16 GB storage, 1.5 GB RAM.",
      },
      {
        id: "samsung_galaxy_alpha-6573",
        name: "Galaxy Alpha",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-alpha.jpg",
        description:
          "Samsung Galaxy Alpha Android smartphone. Announced Aug 2014. Features 4.7″  display, Exynos 5430 Octa chipset, 12 MP primary camera, 2.1 MP front camera, 1860 mAh battery, 32 GB storage, 2 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "samsung_galaxy_note_fe-8683",
        name: "Galaxy Note",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-fe1.jpg",
        description:
          "Samsung Galaxy Note FE Android smartphone. Announced Jul 2017. Features 5.7″  display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
      },
      {
        id: "samsung_galaxy_note_edge-6631",
        name: "Galaxy Note Edge",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-edge1.jpg",
        description:
          "Samsung Galaxy Note Edge Android smartphone. Announced Sep 2014. Features 5.6″  display, Snapdragon 805 chipset, 16 MP primary camera, 3.7 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 3.",
      },
      {
        id: "samsung_galaxy_a5_(2017)-8494",
        name: "Galaxy A5",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017-new.jpg",
        description:
          "Samsung Galaxy A5 (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "samsung_galaxy_a3_(2017)-8336",
        name: "Galaxy A3 ",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a3-2017.jpg",
        description:
          "Samsung Galaxy A3 (2017) Android smartphone. Announced Jan 2017. Features 4.7″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 8 MP front camera, 2350 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 4.",
      },
      {
        id: "samsung_galaxy_core_prime-6716",
        name: "Galaxy Core Prime",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-core-prime.jpg",
        description:
          "Samsung Galaxy Core Prime Android smartphone. Announced Nov 2014. Features 4.5″  display, Snapdragon 410 chipset, 5 MP primary camera, 2 MP front camera, 2000 mAh battery, 8 GB storage, 1000 MB RAM.",
      },
      {
        id: "samsung_galaxy_j4-9204",
        name: "Galaxy J4",
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j4-j400.jpg",
        description:
          "Samsung Galaxy J4 Android smartphone. Announced May 2018. Features 5.5″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM.",
      },
    ],
    Iphone: [
      {
        id: "apple_iphone_x-8858",
        name: "iPhone X",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
        description:
          "Apple iPhone X smartphone. Announced Sep 2017. Features 5.8″  display, Apple A11 Bionic chipset, Dual: 12 MP (f/1.8, 28mm, 1.22µm) + 12 MP primary camera, 7 MP front camera, 2716 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
      },
      {
        id: "apple_iphone_xs-9318",
        name: "iPhone XS",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
        description:
          "Apple iPhone XS smartphone. Announced Sep 2018. Features 5.8″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 2658 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
      },
      {
        id: "apple_iphone_11-9848",
        name: "iPhone 11",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
        description:
          "Apple iPhone 11 smartphone. Announced Sep 2019. Features 6.1″  display, Apple A13 Bionic chipset, 3110 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
      },
      {
        id: "apple_iphone_xr-9320",
        name: "iPhone XR",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
        description:
          "Apple iPhone XR smartphone. Announced Sep 2018. Features 6.1″  display, Apple A12 Bionic chipset, 12 MP primary camera, 7 MP front camera, 2942 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
      },
      {
        id: "apple_iphone_12_pro_max-10237",
        name: "iPhone 12 Pro Max",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
        description:
          "Apple iPhone 12 Pro Max smartphone. Announced Oct 2020. Features 6.7″  display, Apple A14 Bionic chipset, 3687 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
      },
      {
        id: "apple_iphone_7-8064",
        name: "iPhone 7",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg",
        description:
          "Apple iPhone 7 smartphone. Announced Sep 2016. Features 4.7″  display, Apple A10 Fusion chipset, 12 MP primary camera, 7 MP front camera, 1960 mAh battery, 256 GB storage, 2 GB RAM, Ion-strengthened glass.",
      },
      {
        id: "apple_iphone_12_pro-10508",
        name: "iPhone 12 Pro",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
        description:
          "Apple iPhone 12 Pro smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
      },
      {
        id: "apple_iphone-1827",
        name: "iPhone",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone.gif",
        description:
          "Apple iPhone smartphone. Announced Jan 2007. Features 3.5″  display, 2 MP primary camera, 1400 mAh battery, 16 GB storage, Corning Gorilla Glass.",
      },
      {
        id: "apple_iphone_se-7969",
        name: "iPhone SE",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5se-ofic.jpg",
        description:
          "Apple iPhone SE smartphone. Announced Mar 2016. Features 4.0″  display, Apple A9 chipset, 12 MP primary camera, 1.2 MP front camera, 1624 mAh battery, 128 GB storage, 2 GB RAM.",
      },
      {
        id: "apple_iphone_13-11103",
        name: "iPhone 13",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
        description:
          "Apple iPhone 13 smartphone. Announced Sep 2021. Features 6.1″  display, Apple A15 Bionic chipset, 3240 mAh battery, 512 GB storage, 4 GB RAM, Ceramic Shield glass.",
      },
      {
        id: "apple_iphone_xs_max-9319",
        name: "iPhone XS Max",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
        description:
          "Apple iPhone XS Max smartphone. Announced Sep 2018. Features 6.5″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 3174 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
      },
      {
        id: "apple_iphone_6s-7242",
        name: "iPhone 6s",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
        description:
          "Apple iPhone 6s smartphone. Announced Sep 2015. Features 4.7″  display, Apple A9 (14 chipset, 12 MP primary camera, 5 MP front camera, 1715 mAh battery, 128 GB storage, 2 GB RAM, Ion-strengthened glass.",
      },
      {
        id: "apple_iphone_14_plus-11862",
        name: "iPhone 14 Plus",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg",
        description:
          "Apple iPhone 14 Plus smartphone. Announced Sep 2022. Features 6.7″  display, Apple A15 Bionic chipset, 4323 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
      },
      {
        id: "apple_iphone_14_pro_max-11773",
        name: "iPhone 14 Pro Max",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        description:
          "Apple iPhone 14 Pro Max smartphone. Announced Sep 2022. Features 6.7″  display, Apple A16 Bionic chipset, 4323 mAh battery, 1024 GB storage, 6 GB RAM, Ceramic Shield glass.",
      },
      {
        id: "apple_iphone_12-10509",
        name: "iPhone 12",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
        description:
          "Apple iPhone 12 smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 256 GB storage, 4 GB RAM, Ceramic Shield glass.",
      },
      {
        id: "apple_iphone_8-8573",
        name: "iPhone 8",
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg",
        description:
          "Apple iPhone 8 smartphone. Announced Sep 2017. Features 4.7″  display, Apple A11 Bionic chipset, 12 MP primary camera, 7 MP front camera, 1821 mAh battery, 256 GB storage, 2 GB RAM, Ion-strengthened glass.",
      },
    ],
  };
  const brandData = [
    {
      brand: "Iphone",
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      number: 16,
    },
    {
      brand: "Samsung",
      logo: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_4.png?$512_N_PNG$",
      number: 31,
    },
    {
      brand: "Oneplus",
      logo: "data:image/png;base64,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",
      number: 15,
    },
    {
      brand: "Motorola",
      logo: "https://static.vecteezy.com/system/resources/previews/020/927/440/non_2x/motorola-brand-logo-phone-symbol-with-name-white-design-usa-mobile-illustration-with-black-background-free-vector.jpg",
      number: 5,
    },
    {
      brand: "LG",
      logo: "https://www.lg.com/content/dam/lge/global/our-brand/src/mocks/bs0009/download-detail--logo-02.png",
      number: 13,
    },
    {
      brand: "HTC",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAACKx1CMylGOzVIJDQV1qUNLbSx4rUVsmz5FYiiQ0FR0p0OAuUqEvkxPci0NEgciMhQuQho8ViITGgpVezEgLhIFBwMpOhdZgTRgijd7sUdIaCozSR2GwU0ZJA5DXyZwoEBlkjsRGAogLxIYIg4/WiQdKRA3UCAxRhxchTVy6YW1AAADoUlEQVR4nO3bfVuyMBiGcRgKCoplvqWSWGr2/b/gU8oAhYDphIeO8/evt2wXApubGgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQPrNI0/14mL0X/vB686Z78ii2K06C56Z78ii2ZZ4MSdhaJGw/ErYfCduPhO1Hwva7SDh6ex5v+ivbl+xVf78+vOe/taMq7yCz3dNxPN5c24/T7jr7ccK5sX51LNfKcgfbVc47D72uGueQOcZ0EgZ5TV51INSScOOZljBzCWEGfqZ704FQ435cHeGpF4hfmrxsv6cj4fdxCluxlvtswgq9S3Gnlwfwg4oH0JWwrBl3O9KZsBNWbbmuhN8NeRoTdnoKDdeV0LS2+hJW/wTrTGhavq6EvkqzehPmPANTrwZPehJ+DEvavGBpTGiZjhf2EmHoecvUICLC5J0fw5yRLC7NG9aS0WKbatUKnK6X1XWSgfRLV0IRfM13V0vDs9Hhc5uMJFayrPq+72dsnKhykH2tv4rnRocgaXO4mu9eRlkvKZcP8dsTim520nG2ji/IsluiJ6JDFVZNkjO2vav3VaRG/PD3qnkccfDbWTiLE+ZOQiMdJz5hd11/1cQJRWHf164s2xQerlLCadymV1ClS5zQHRfWbaPTbi0KyyolXMk2h9cz1UeIEw6L68ZB+bVsVEwYFZniVbm7N5AJrUlx3WwpqpyJSgnlbeg+/CnzQyYsub8Mw5PdKqyqknAUnSyxVO/uDWTCYF1S+KUt4SF6MNfxIDUU1mkmlq6E82jKdjHLfZzUKkYxfQmfZUJbvbs3aCDhUSbMW/3RTyYcPJUU6ku4lgNPX727N6ic0NeW8PPvJzT/ekJ5lf5v96G+hEeZsN5naY0J54NGxsMaE75Fc5qyqbAmDSQ05Lw0VO3sTZpIKCfxQrm3t2gi4UJ+Y6tluGgi4TFaEhHLnXJ/1TUwazN2ZuRym+BBmkgYL/qYVu/xX/MbSbiRH6IpnE1hpQaNJDSSLQ/hDraLxcS2/dU3+8yfnCwiX3c9kZpJuE9t6vxsvcgNoKsdGbnhoWVnpt6Es1Bl30rP7tqgvu/4J0OFiHoS1riKcfKpELGdCVUitjShMe1WjdjWhEbHF7/9RklrwugfJRUSRr9sKqwKz1WWU20c97umVf5jqvv28TdL5yQsGy3sqLB4s8F+PfMr/o9qdOy/hk6JZT3L/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/wDRbJANSIJCEYAAAAASUVORK5CYII=",
      number: 7,
    },
    {
      brand: "Huawei",
      logo: "data:image/png;base64,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",
      number: 14,
    },
    {
      brand: "Asus",
      logo: "data:image/png;base64,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",
      number: 10,
    },
    {
      brand: "Sony",
      logo: "data:image/png;base64,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",
      number: 6,
    },
    {
      brand: "ZTE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkLYDInTa9q1RlDJL1zLpfL11DweXW-R05A&s",
      number: 5,
    },
  ];
  const { brand } = useParams();
  const brandInfo = brandData.find((item) => item.brand === brand);
  console.log(brandInfo);

  return (
    <div className="h-full w-full p-20 bg-black pt-20 text-white">
      <div className="w-full flex-col flex items-center">
        <img
          src={brandInfo.logo}
          alt=""
          height={350}
          width={350}
          className="w- fit h-f it object-cover"
        />
        <p className="font-light pb-10">Number of Devices {brandInfo.number}</p>
      </div>
      <div className="text-white grid grid-cols-4 gap-5">
        {data[brand].map((bra, ind) => (
          <a href={`/device/${bra.id}?name=${bra.name}`}>
            <div
              key={ind}
              className="w-fit flex flex-col justify-center items-center border-2 cursor-default border-black duration-200 hover:border-blue-400 p-3 rounded-2xl hover:bg-blue-500/10 hover:-translate-y-2"
            >
              <div className="h-fit w-fit mb-4 overflow-hidden">
                <img
                  src={bra.img}
                  alt={bra.brand}
                  className="w-full rounded-lg h-full object-cover"
                />
              </div>
              <p className="text-4xl  font-semibold">{bra.name}</p>
              <p className="text-sm text-gray-600">{bra.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Brand;
