import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  fa: {
    translation: {
      "company management": "مدیریت شرکت",
      "phone number": "تلفن : ۰۳۱۵۵۴۶۴۴۵۱",
      "fax number": "فاکس : ۰۳۱۵۵۴۶۴۴۵۲",
      "mobile number": "همراه : ۰۹۱۳۴۶۱۳۶۷۶",
      "telegram number": "تلگرام : ۰۹۱۳۸۶۱۳۶۷۶",
      address: "آدرس",
      address2:
        "کاشان . خیابان آیت الله کاشانی . سه راه غزنوی . ساختمان اداری نارون . طبقه اول . واحد۳",
      header1: "گروه بازرگانی بین المللی",
      header2: "پویان پاسارگاد کاشان",
      home: "خانه",
      services: "خدمات",
      products: "محصولات",
      carpet: "فرش",
      "handy-crafts": "صنایع دستی",
      "dried-fruit": "خشکبار",
      "herbal-essensse": "عرقیات گیاهی",
      instruction: "مصالح ساختمانی",
      mineral: "مواد معدنی",
      more: "بیش تر",
      product1: `ایران یکی از برجسته ترین کشور ها در تولید انواع فرش ماشینی و دستباف و کاشان مهد تولید فرش جهان است.این شرکت تلاش دارد زیباترین و اصیل ترین فرش های ایرانی را برای شما عرضه نماید`,
      product2: `هنر ایران یکی از غنی ترین میراث های هنری در تاریخ جهان و صنایع دستی یکی از بارز ترین جلوه های هنر ایرانی است.ما برآن هستیم که اصیل ترین صنایع دستی ایران را به طور مستقیم در این سایت معرفی و عرضه نماییم`,
      product3: `خشکبار جزو خوراکی های خوشمزه و مورد علاقه همگان است.خشکبار سرشار از مواد غذایی مفید مثل چربی های غیر اشباع مناسب برای قلب،پروتئین ها،ویتامین ها و مواد معدنی است. ما تلاش داریم تا بهترین و مرغوب ترین خشکبار ایرانی را در بهترین دسته بندی برای مشتریان عرضه نماییم`,
      product4: `عرقیات یکی از پرمصرف ترین شکل های استفاده از گیاهان است و کاشان بزرگترین مرکز تولید انواع عرقیات گیاهی از جمله گلاب و بیدمشک می باشد. ما مرغوب ترین محصولات عرقیات را برای شما عرضه می کنیم`,
      product5: `این شرکت یکی از شرکت های پیشتاز در زمینه صادرات کاشی دیوار،کف می باشد.این شرکت در حال حاضر به کشور های آسیای میانه،عراق،افغانستان،پاکستان و تاجیکستان صادرات دارد.`,
      product6: `ایران یکی از غنی ترین کشور ها در زمینه انواع مواد معدنی است.بسیاری از ذخایر معدنی ما از حیث کمیت و کیفیت در رده های برتر جهانی است.این شرکت با توجه به توان تخصصی مدیران خود میتواند انواع مواد معدنی را تهیه و عرضه نماید`,
      vision: "چشم انداز",
      service1: `اکتشاف،استخراج،فرآوری و سایر مشاوره های تخصصی در حوضه معدن بخشی از خدمات کادر تخصصی ما در این حوضه است.طراحی و اجرا و نصب ماشین آلات معدنی یکی از کلیدی ترین مباحث در بهره وری فعالیت های معدنی است`,
      serviceH1: "معادن",
      service2: `این شرکت تلاش دارد تا با توجه به توان تخصصی تیم حرفه ای خود بهترین خدمات را در حوضه صادرات و واردات و مشاوره های مربوطه ارائه نماید`,
      serviceH2: "صادرات",
      service3: `این شرکت گسترده ترین خدمات در حوضه سرمایه گذاری ، از تهیه طرح های توجیهی تا اخذ مجوز های دولتی و مشاوره های حین اجرا را ارائه می دهد`,
      serviceH3: "مشاوره و سرمایه گذاری",
      service4: `رقابت در عرصه های داخلی و بین المللی نیازمند تبهیت از استاندارد های جهانی در تولید و ارائه خدمات می باشد.این شرکت میتواند در اخز بهترین و معتبر ترین گواهینامه های بین المللی شما را راهنمایی کند`,
      serviceH4: "کنترل کیفیت",
      "carpet-text": `
        ایران یکی از کشورهای نمونه در زمینه تولید محصولات نساجی است که از
        گذشته تا کنون سهم بزرگی در تولید فرش دستباف و انواع محصولات دیگر بافته
        شده از نخ و پشم داشته است. با توجه به اینکه هر ملتی دارای یک کالای
        نمادین است ، می‌توان گفت فرش دستباف نیز جزو آن دسته از کالاهای بسیار
        مهم و صادراتی ایران به شمار می‌رود و در بین ملل مختلف نیز بعنوان
        معروفترین تولید کننده فرش به خصوص فرش دستباف شناخته می‌شود. در مقاله
        این هفته سایت زیلومه شما با موضوعات مهمی در زمینه فرش دستباف آشنا
        خواهید شد.
        
        فرش دستباف چیست؟ یکی از مهمترین تجهیزات و کالاها که از گذشته تا کنون
        اهمیت ویژه‌ای در زندگی انسان داشته است ، فرش و محصولات نساجی می‌باشد ؛
        زیرا استفاده از این وسایل در ایجاد حس آسایش و آرامش انسان کمک شایانی
        می‌کند. حال در این بین یکی از بی‌نظیرترین و پرطرفدارترین انواع فرش ،
        فرش‌های دستباف هستند که جزو محصولات کهن ایرانی نیز به شمار می‌روند. در
        اینجا سوالی که ممکن است برای خریداران پیش بیاید این است که فرش دستباف
        چیست؟ دقت داشته باشید که کلمه فرش یک عبارت عربی است که به معنی گسترده
        می‌باشد و به مواردی چون قالی و پلاس اطلاق می‌شود. در نتیجه می‌توان گفت
        منظور از فرش دستباف ، زیراندازی می‌باشد که به وسیله دست از تار و پود
        بافته شده است که این امر طبیعتا موجب ایجاد طرح‌های بسیار زیبا بر روی
        آن می‌شود و طرفداران زیادی در سراسر دنیا دارد.
        
        تاریخچه فرش دستباف با توجه به تاریخچه کهنی که در تولید فرش و قالی
        دستباف ایرانی وجود دارد در حال حاضر می‌توان گفت محصول بافته شده به دست
        هنرمندان ایرانی جزو بهترین و زیباترین نوع فرش در دنیا است که این امر
        از نظر کارشناسان بین‌المللی فرش تایید شده است. اما با وجود آنکه در سال
        ۱۳۲۸ شمسی اولین فرش‌های گره‌دار به عنوان پوشش اسب و یا در چادر
        صحرانشینان مورد استفاده قرار گرفته است و سپس در تولید این محصول
        پیشرفت‌های زیادی حاصل شده پژوهشگران اعتقاد دارند که آغاز شکوفایی هنر
        فرشبافی در ایران به قرن ۱۶ و ۱۷ میلادی بر می‌گردد.
        
        در سال‌های گذشته با پیشرفت تکنولوژی در بسیاری از زمینه‌ها از جمله
        زمینه تولید فرش ، شاهد تغییر و تحولات بسیار عظیمی در تولید این محصول
        بودیم ؛ به طوری که در ابتدای تولید فرش به دست هنرمندان ایرانی ،
        نقش‌های بسیار ساده و طرح‌های آسانی روی این محصولات نساجی پیاده می‌شد
        اما با گذشت زمان تحول شگرفی در تولید این محصول به وجود آمد و این امر
        موجب تنوع بی‌نظیر در بازار فرش دستباف شد.
        
        فرش‌های دستباف تاریخی در میان فرش‌های مهم دستباف در تاریخ ایران
        می‌توان به فرش و قالی‌های ذیل اشاره کرد :
        
        فرش‌های دستباف تاریخی قالی پازیریک : این فرش قدمتی ۲۵۰۰ ساله دارد و در
        اندازه‌های ۲۱۰ در ۱۸۳ سانتیمتر و با حدود ۳۶۰۰ گره بافته شده است. فرش
        بهارستان : معروف به فرش بهار خسرو که یک قالی بسیار عالی در زمان خسرو
        پرویز می‌باشد. قالی دستباف عصر صفوی : یکی دیگر از زیباترین قالی‌های
        دستباف ایرانی بوده که خلاقیت و نبوغ هنرمندان در زمان حکومت صفویان را
        نشان می‌دهد ، در این دوره قالیبافان با استفاده از طرح‌هایی در حدود
        ۱۵۰۰ تخته فرش و قالی از خود به جا گذاشته اند. قالی ترنج منظره حیوانات
        : یکی دیگر از فرش‌های ایرانی است که با زمینه قرمز رنگ و طرح‌های زیبایی
        ، تولید شده از ابریشم می‌باشد که موجب محبوبیت بالای آن شده است. قالی
        چلسی : یکی دیگر از فرش‌های زیبای جهان قالی چلسی است که در مجموعه
        فرش‌های موزه ویکتوریا و آلبرت لندن نگهداری می‌شود. خواندن مطلب معایب و
        محاسن فرش ماشینی ۱۲۰۰ شانه فرش دستباف کاشان علیرغم آنچه در مورد هنر
        بافندگان ایرانی ذکر شد لازم است بدانید که بافت فرش در بعضی از شهرهای
        ایران با دقت و هنرنمایی بیشتری انجام می‌شود که این امر موجب مشهوریت
        فرش در این استان‌ها شده است. در این بین قالی دستباف کاشان جزو قالی‌های
        بسیار محبوب و پرطرفدار در سطح ایران و جهان است که در طرح‌ها و رنگ‌های
        بسیار متعدد و متنوعی به فروش می‌رسد. علاوه بر این ، کیفیت بی‌نظیر فرش
        دستباف کاشان و زیبایی بی‌حد این محصول موجب شده است از گذشته تا به
        امروز خرید و فروش این نوع فرش توسط مشتریان رونق داشته باشد. طرح‌های
        بسیار ظریف و نفیسی که بر روی قالی‌های دستباف توسط هنرمندان کاشانی
        پیاده می‌شود موجب این محبوبیت شده است ، به‌گونه‌ای که شهر کاشان در عهد
        صفویه یکی از فاخرترین و بهترین مراکز تولید فرش و قالی دستباف بوده است.
        
        فرش دستباف تبریز علاوه بر شهر کاشان یکی دیگر از شهرهای مشهور ایران در
        زمینه تولید محصولات نساجی به خصوص فرش و قالی دستباف شهر تبریز است و از
        گذشته دور تاکنون این شهر مهد تولید و توزیع انواع فرش دستباف در طرح‌ها
        و مدل‌های متنوع و گوناگون بوده است. با این حال می‌توان گفت امروزه یکی
        از مهمترین صنایع دستی این شهر قالی بافی است که شهرت جهانی دارد.
        
        هنر فرش بافی در شهر تبریز مانند کاشان از دوره صفویه آغاز شد که این امر
        در اوایل کار به بخش‌های روستایی مرتبط بود و کم‌کم در کارگاه‌های بزرگ
        قالی بافی نیز جایی باز کرد. تبحر و تخصص بی‌نظیری که هنرمندان تبریزی در
        تولید فرش‌های دستباف دارند موجب شده است که ظریف‌ترین و خوش نقش و
        نگارترین فرش‌های ایران در این شهر بافته شود. قالی بافی در شهر تبریز به
        صورت گره با قلاب و متقارن است که در نوع خود بی‌نظیر می‌باشد ، با این
        حال به طور حتم انتخاب محصول این شهر جهت پهن کردن در منازل ایرانی
        می‌تواند بی‌نظیر باشد.
        
        مشخصات فرش دستباف به دلیل گسترش روز افزون انواع فرش دستباف در بازار
        ایران و جهان باید در هنگام خرید این محصول نکات متعددی را مورد توجه
        قرار دهید. فرش دستبافت ایرانی به طور کلی در ۳ قالب ترنج ، خشتی و افشان
        بافته شده که نوع ترنج آن از همه پرطرفدارتر است. این نوع فرش حاشیه‌ای
        پهن در اطراف دارد و طرح‌های بیضی و دایره در میانه. همچنین دقت داشته
        باشید که تفاوت فرش‌های دستباف در برابر فرش‌های ماشینی بسیار زیاد است
        به طوری که فرش‌های دستباف از دور و نزدیک جلوه بسیار زیبایی دارند و
        بسیار درخشنده هستند. تقارن رنگ یکی دیگر از شاخص‌های برجسته این محصول
        می‌باشد که به زیبایی آن می‌افزاید. از طرفی دقت داشته باشید پرز این
        فرش‌ها باید درخشان و انعطاف‌پذیر باشد به طوری که این نوع فرش تنها فرشی
        است که با پا خوردن و شستشو زیبایی چند برابری می‌گیرد.
        
        طرح و نقش فرش دستباف گذشته از کیفیت و مرغوبیت فرش دستباف در هنگام خرید
        این محصول ، نکته بسیار حائز اهمیت دیگری که برای مشتریان مهم است ، توجه
        به طرح و نقش این محصول می‌باشد. دقت داشته باشید اگر بخواهید فرش دستباف
        ایرانی را خریداری کنید باید بدانید که به طور کلی طرح و نقش در قالی
        ایرانی شامل موارد زیر می‌شود :
        
        خواندن مطلب آموزش چله کشی گلیم
        
        طرح و نقش فرش دستباف
        
        طرح شاه عباسی
        
        طرح اسلیمی
        
        طرح افشان
        
        طرح بته جقه
        
        طرح درختی
        
        طرح شکارگاه
        
        طرح قابی
        
        طرح ترکمن و بخارا
        
        طرح گل فرنگ
        
        طرح ماهی درهم
        
        طرح محرابی
        
        طرح محرمات
        
        طرح گلدانی
        
        طرح ایلی
        
        طرح هندسی
        
        طرح آثار باستانی و ابنیه اسلامی
        
        طرح اقتباسی
        
        طرح تلفیقی
        
        مواد به کار رفته در فرش دستباف
        
        یکی از شاخص‌ترین مواردی که موجب محبوبیت و مشهوریت فرش دستباف ایرانی
        شده است مواد مصرف شده در این قالی‌ها است که دارای کیفیت و مرغوبیت
        بسیار بالایی هستند و این امر در کنار زیبایی محصول مورد اهمیت می‌باشد.
        یکی از مواد به کار رفته در تار و پود فرش دستبافت ایرانی پنبه و پشم
        می‌باشد که این نوع فرش و قالی به فرش یا قالی پشمی مشهور است. همچنین
        می‌توان گفت در میان عشایر به جای نخ از پشم استفاده می‌شود.
        
        انواع فرش دستباف از انواع فرش دستباف می‌توان به موارد زیر اشاره کرد :
        
        قالی تمام ابریشم : پرز و چله آن از نخ ابریشم مرغوب بافته شده است. گل
        ابریشم : نوع دیگری از فرش یا قالی دستباف است که در دوره حاشیه‌ها و در
        نقش‌های آن به جای پرز پشمی ، از ابریشم استفاده می‌شود. قالی کف ابریشم
        : نوع دیگری از فرش دستباف است که در زمینه آن به جای پشم از ابریشم
        استفاده می‌شود. سوف : نوع دیگری از فرش و قالی دستباف است که زمینه آن
        از پود ضخیم و نازک تشکیل شده است و نقش و گل و بوته پرزدار دارد. فرش
        دستباف ابریشم همانطور که گفته شد یکی از مواد به کار رفته در قالی
        دستبافت ایرانی نخ ابریشم است که به طور حتم اینگونه قالی از محبوبیت
        بالایی برخوردار است و طرفداران زیادی دارد. به طور کلی می‌توان گفت فرش
        تبریز و کاشان جزو فرش‌هایی هستند که معمولا از جنس پشم یا ابریشم است و
        این امر موجب کیفیت بسیار بالای محصولات شده است. همچنین دقت داشته باشید
        با توجه به اینکه این نوع فرش از ابریشم تولید شده است طبیعتا قیمت
        بالاتری نسبت به دیگر انواع محصول دارد.`,
      "herbal-text": `
        عرقیات یکی از پرمصرف‌ترین شکل‌های استفاده از گیاهان است. امروزه در
        ایران بیش از ۴۰ نوع گیاه وجود دارد که عرق‌گیری شده و به صورت طبی مورد
        استفاده قرار می‌گیرند. عرقیات طبی در واقع رایحه، عطر یا اسانس گیاهانی
        می‌باشند که آن را به آب اضافه می‌نمایند داروهای معطری می‌باشند که
        رایحهٔ آنها می‌تواند گیرنده‌های عصبی بویایی را تحریک نموده و بر روند
        ساخته شدن هورمونها حرارت بدن، سوخت و ساز بدن، سطح هورمون‌های استرس و
        جنسی، سامانه دفاعی بدن، افکار و رفتارهای عاطفی و جسمانی ما اثر
        بگذارند. این مواد معطر که مقدار آنها در عصاره یا روغن گیاهان شفابخش
        بیشتر وجود دارد با تحریک مغز و ترشح انتقال‌دهنده‌های عصبی موجب حالات
        روانی خاصی در انسان می‌شود و احساس سلامت، سرخوشی، خوشنودی و خرسندی به
        وجود می‌آورند. این بوها می‌توانند استرس و تا حدودی درد را کاهش داده و
        موجب تعادل عاطفی شوند. از جمله عرقیات پرمصرف می‌توان گلاب، عرق نعنا،
        عرق بهارنارنج و عرق بیدمشک را نام برد.
        
        عرق آویشن: مسکن – ضد سرماخوردگی – مقوی معده – معالج بیماریهای قارچی
        پوست – ضد ورم بینی وگلو.
        
        عرق اسطو خودوس: تقویت کننده اعصاب – معالج برونشیت وزکام – پایین آورنده
        تب ونیروبخش – ضد تشنج وصرع درمان بیماریهای عصبی.
        
        عرق بید: درمان تب های شدید ودردهای تناسلی – زردی پوست (یرقان) – تصفیه
        خون.
        
        عرق بهارنارنج: تقویت کننده مغز واعصاب – نشاط آور- تقویت قلب.
        
        عرق بادرنجبویه: ضد خستگیهای روحی – استفراغ های دوران بارداری – برونشیت
        وتشنج – ضد قلنج – درمان دل پیچه.
        
        عرق بومادران: ضد ورم روده ومعده – ضد روماتیسم ونقرس – رفع اختلالات
        قاعدگی ودرد دوران قاعدگی.
        
        عرق بیدمشک: تقویت کننده فلب – رفع ناراحتیهای اعصاب – ضد تپش قلب.
        
        عرق پونه: ضد سیاه سرفه وگریپ – خلط آور- بادشکن – قابض – بازکننده عروق
        – ضد عفونی کننده .
        
        چهارعرق سرد: تب بر- خنک – تقویت کننده معده.
        
        چهارعرق گرم: تقویت کننده معده – مفید برای هضم غذا – رفع ناراحتی های
        روده .
        
        عرق چهل گیاه: تقویت کننده معده – کمک به هضم غذا – بادشکن – ضد سردی –
        ضد تهوع واستفراغ .
        
        عرق خارخاسک: مدر قوی – رفع سنگ کلیه ومثانه – کیسه صفرا- تصفیه خون.
        
        عرق خارشتر: ضد عفونت مجاری ادراری – سنگ شکن – مدرقوی – ضد سیاه سرفه.
        
        عرق رازیانه: معطر کننده – محرک – بادشکن – مدروقاعده آور- درمان بواسیر
        ونقرس – ازدیاد شیر مادران .
        
        عرق زنیان: ضد نفخ معده – ضد ترشی معده – ضد عفونت – ضد انگل – بادشکن –
        درمان عوارض بعد از ترک اعتیاد.
        
        عرق زیره: ضد چاقی – تصفیه کننده خون – ضد هیستری وتشنج – افزایش شیر
        مادران – بادشکن – هضم کننده غذا – کاهنده چربی خون.
        
        سرکه سیب: لاغر کننده – مکمل غذا
        
        عرق سنبل الطیب: خواب آور- مسکن – تقویت قلب – اشتها آور.
        
        عرق شاتره: ضد خارشهای پوستی – صفرا بر- تقویت کبد – نشاط آور- ضد نفخ –
        اشتها آور.
        
        عرق شنبلیله: ضد قند – تقویت قوای جنسی – نیرو بخش.
        
        عرق شیرین بیان: درمان قاطع زخم معده واثنی عشر- ضد سرفه – صفرا بر.
        
        عرق شوید: ضد چربی خون – جهت پایین آوردن کلسترول – ازدیاد شیر مادران –
        درمان لاغری
        
        عرق کاسنی: مفید برای کبد – ضد جوش – ضد خارش – تصفیه کننده خون – کاهنده
        چربی .
        
        عرق کیالک: تصفیه کننده خون – جلوگیری ازعواقب سعت کلسترول – جلوگیری
        ازتنگ شدن رگها.
        
        عرق گزنه: اثر قاطع در رفع بیماریهای پوستی وجلدی – ضد چربی وقند خون –
        ضد خون ریزی – بازکننده عروق – مدر.
        
        عرق گلبهار: مفید برای لطافت پوست دست وصورت – مقوی معده
        
        عرق مریم گلی: ضد دیابت – ضد رماتیسم واسهال – ضد سینوزیت – ضد انگل – ضد
        نفخ .
        
        عرق مخلصه: ملین – مقوی – دفع سموم – ضد قولنج – پاد زهر قوی مفید برای
        ناراحتیهای کمرو مفاصل عضلانی – تقویت معده .
        
        عرق مورد: ضد خون ریزی – قابض روده – درمان اسهال وبواسیر- تقویت رشد مو-
        ضد آفت .
        
        عرق نعنا: ضد دل درد – دلپیچه – ضد نفخ – بادشکن – تقویت کننده معده
        کودکان
        
        عرق یونجه: چاق کننده – نیروبخش – معالج رعشه وناراحتی های عصبی – تصفیه
        خون – کاهش قند خون`,
      "instruction-text": `
        این شرکت یکی از شرکت های پیشتاز در زمینه صادرات کاشی دیوار، کف می
        باشد.این شرکت در حال حاضر به کشورهای آسیای میانه ، عراق ، افغانستان و
        پاکستان صادرات دارد .
        
        به طور کلی اهداف این شرکت از ابتدای تاسیس، دستیابی به کیفیت برتر،
        همیشگی، احراز نام نیک و حفظ دائمی منزلت و اعتبار بین نمایندگان و مصرف
        کنندگان، سودآوری نه از طریق کاهش هزینه تولید بلکه ارتقاء بهره وری،
        کاهش ضایعات، آموزش مداوم و کسب رضایت نیروی انسانی که در نظر این شرکت
        از عناصر مهم تولید به شمار می روند و علاوه بر این ارتباط مداوم با
        مجامع علمی و صنعتی این شاخه از صنعت عظیم ساختمان بوده است. در نتیجه
        رعایت اهداف و سیاست های فوق این شرکت توانسته است برای سالهای متوالی
        بعنوان واحد نمونه انتخاب گردد.
        
        شرکت پویان پاسارگاد از ابتدای تاسیس، تامین با بهترین کیفیت را سرلوحه
        خود قرار داده و از این رو از بهترین تولیدکنندگان استفاده می نماید.
        
        کارخانه های تامین کننده این شرکت مجهز به آخرین و بروزترین ماشین آلات
        می باشد، که از شرکتهای ایتالیایی System – Intensa – Projecta – Siti
        B&T – Tsc خریداری شده است. این شرکتها با به روزرسانی دستگاه های چاپ
        دیجیتال، پرس های هیدرولیکی با ظرفیت بالا، کوره های رولری دو طبقه و یک
        طبقه با طول ۸۸ متر و عرض ۸۰/۲، ماشین آلات رکتیفاید، درجه بندی و
        سورتینگ تمام اتوماتیک که مجهز به سیستم های کامپیوتری جهت کنترل
        پارامترهای فیزیکی از جمله ابعاد و تاب می باشند توانسته است جایگاه
        ممتازی بین تولیدکنندگان داخلی و خارجی کسب نماید`,
      "mineral-text": `
        معدنکاری یا برداشت کانی‌ها به عمل استخراج کانی‌های ارزشمند یا دیگر
        مواد از زمین و معمولاً از معادن گفته می‌شود. موادی که از این کانسارها
        به‌دست می‌آید شامل فلزات، زغال‌سنگ، شیل نفتی، سنگ‌های قیمتی، الماس،
        سنگ آهک، سنگ بعد، سنگ نمک، طلا، نقره، پتاس، شن، خاک رس و موادی از این
        دست می‌شود. معدن‌کاری برای به‌دست آوردن هر ماده‌ای که نمی‌توان از طریق
        فرآیندهای کشاورزی رشد داد، یا به‌طور مصنوعی در آزمایشگاه یا کارخانه
        تولید کرد، لازم است. در یک تعریف کامل‌تر معدن‌کاری شامل برداشت هرگونه
        منبع تجدیدناپذیر مانند نفت، گاز طبیعی یا حتی آب نیز می‌شود.
        
        
        یک کارگر معدن با ۹۰ کیلوگرم بار گوگرد که آن را از کف آتشفشان ایجن با
        خود حمل کرده‌است. استخراج سنگ و فلز از زمان‌های پیش از تاریخ توسط
        انسان انجام می‌شده‌است. فرآیندهای معدن‌کاری امروزی شامل جستجوی بدنه
        معادن، تجزیه و تحلیل ظرفیت سودآوری یک معدن پیدا شده، استخراج مواد مورد
        نظر و احیای نهایی زمین پس از بسته شدن معدن است.
        
        
        یک نقشه ساده از معادن فعال جهان. عملیات استخراج، هم در طول دوره فعالیت
        معدن و هم پس از بسته شدن آن، معمولاً بر روی بر محیط زیست اثرات مخربی
        به‌جا می‌گذارد. از این رو، بیشتر کشورهای جهان مقرراتی را برای کاهش این
        تأثیرات منفی تصویب کرده‌اند. موضوع ایمنی کار نیز، مدت‌های طولانی است
        که نگران‌کننده است و شیوه‌های نوین بهبود چشمگیری در زمینه ایمنی در
        معادن به دنبال داشته‌است.`,
      "nuts-text": `
        خشکبار جز خوراکی های خوشمزه و مورد علاقه همگان است، خشکبار به تکه های
        خشک شده برخی میوه ها مثل انگور، آلو، توت، زردآلو و مغز دانه ها گفته می
        شود.این میوه ها پس از خشک شدن و از دست دادن آب خود، میزان قند و برخی
        دیگر از خواص آنها افزایش می یابد. خشکبار سرشار از مواد غذایی مفید مثل
        چربیهای غیر اشباع مناسب برای قلب، پروتئینها، ویتامینها و مواد معدنی
        است.`,
      language: "زبان",
      contact: "تماس با ما",
    },
  },
  en: {
    translation: {
      "company management": "Company Management",
      "phone number": "Phone : +983155464451",
      "fax number": "Fax : +983155464452",
      "mobile number": "Mobile : +989134613676",
      "telegram number": "Telegram : +989138613676",
      address: "Address",
      address2: "1st Floor, Narvan Office, Kashani St, Kashan, Iran",
      header1: "International Business Group",
      header2: "Pouyan Pasargad Kashan",
      home: "Home",
      services: "Services",
      products: "Products",
      carpet: "Carpet",
      "handy-crafts": "Handy Crafts",
      "dried-fruit": "Dried Fruit",
      "herbal-essensse": "Herbal Essences",
      instruction: "Building Materials",
      mineral: "Minerals",
      more: "More",
      product1: `Iran is one of the most prominent countries in the production of machine and hand-woven carpets, and Kashan is the cradle of carpet production in the world. This company is trying to offer you the most beautiful and original Iranian carpets.`,
      product2: `Iranian art is one of the richest artistic heritages in the history of the world and handicrafts are one of the most obvious manifestations of Iranian art.`,
      product3: `Nuts are among the delicious and favorite foods of everyone. Nuts are rich in useful nutrients such as unsaturated fats suitable for the heart, proteins, vitamins and minerals. We are trying to offer the best and highest quality Iranian dried fruit in the best category for our customers`,
      product4: `Spirits are one of the most widely used forms of using plants, and Kashan is the largest center for the production of all kinds of herbal spirits, including rose water and betel nut. We offer you the best quality spirits products`,
      product5: `This company is one of the leading companies in the field of exporting wall and floor tiles. This company currently exports to the countries of Central Asia, Iraq, Afghanistan, Pakistan and Tajikistan.`,
      product6: `Iran is one of the richest countries in the field of all kinds of minerals. Many of our mineral reserves are in the top ranks of the world in terms of quantity and quality. Due to the expertise of its managers, this company can produce and supply all kinds of minerals.`,
      vision: "Vision",
      service1: `Exploration, extraction, processing and other specialized consultations in the mining area are part of the services of our specialized staff in this area. The design, implementation and installation of mining machinery is one of the most important issues in the productivity of mining activities.`,
      serviceH1: "Mines",
      service2: `This company is trying to provide the best services in the field of export and import and related consultations according to the expertise of its professional team.`,
      serviceH2: "Exports",
      service3: `This company provides the widest range of services in the investment area, from preparing explanatory plans to obtaining government licenses and consulting during implementation.`,
      serviceH3: "Consulting and Investment",
      service4: `Competition in the domestic and international arenas requires knowledge of global standards in production and service provision. This company can guide you in choosing the best and most reliable international certificates.`,
      serviceH4: "Quality Control",
      "carpet-text": `Iran is one of the exemplary countries in the field of producing textile products
        In the past, until now, a large contribution has been made to the production of hand-woven carpets and other types of woven products
        It has been made of yarn and wool. Considering that every nation has a commodity
        It is symbolic, it can be said that handwoven carpet is one of those many goods
        It is considered important and export of Iran and among different nations as well
        It is known as the most famous producer of carpets, especially hand-woven carpets. in the article
        This week, your Zilome site is familiar with important topics in the field of handwoven carpets
        you will be
        
        What is a handmade carpet? One of the most important equipment and goods from the past until now
        It has had a special importance in human life, carpets and textile products;
        Because the use of these devices is helpful in creating a sense of comfort and peace
        he does. Meanwhile, one of the most unique and popular types of carpets,
        There are hand-woven carpets, which are among the old Iranian products. At
        Here, the question that may arise for buyers is that the carpet is handmade
        What is? Be careful that the word Farsh is an Arabic phrase that means wide
        and refers to items such as carpet and plush. As a result, we can say
        The meaning of hand-woven carpet is an underlay made by hand from yarn and weft
        It is woven, which naturally creates very beautiful designs on it
        It can and has many fans all over the world.
        
        The history of hand-woven carpets according to the ancient history of the production of carpets and rugs
        There is Iranian hand-woven, currently it can be said that it is a hand-woven product
        Iranian artists are among the best and most beautiful types of carpets in the world
        It has been approved by international carpet experts. But even though in the year
        1328, the first knotted carpets as a cover for horses or tents
        Desert dwellers are then used in the production of this product
        Many advances have been made. Researchers believe that the beginning of the flourishing of art
        Carpet weaving in Iran dates back to the 16th and 17th centuries.
        
        In the past years, with the advancement of technology in many fields, including
        The field of carpet production has witnessed huge changes in the production of this product
        we were ; So that at the beginning of carpet production by Iranian artists,
        Very simple patterns and easy designs were used on these textile products
        But with the passage of time, there was a tremendous change in the production of this product
        It caused a unique diversity in the handwoven carpet market.
        
        Historical hand-woven carpets are among the most important hand-woven carpets in the history of Iran
        We can refer to the following carpets and rugs:
        
        Historical hand-woven carpets of Pazyrik carpet: This carpet is 2500 years old and in
        It measures 210 x 183 cm and is woven with about 3,600 knots. Carpet
        Baharstan: known as Khosrow's spring carpet, which was a very excellent carpet during Khosrow's time
        It is Parvez. Safavid hand-woven carpet: another one of the most beautiful carpets
        It was Iranian handloom that showed the creativity and genius of artists during the Safavid rule
        It shows that, in this period, carpet weavers used designs of approx
        They left behind 1,500 carpets and rugs. Carpet with animal scenery
        : It is another Iranian carpet with a red background and beautiful designs
        It is produced from silk, which has made it very popular. carpet
        Chelsea: Another beautiful carpet in the world is the Chelsea carpet in the collection
        The carpets are kept in the Victoria and Albert Museum in London. Read the disadvantages and
        Merits of machine carpet 1200 comb handwoven Kashan carpet despite what about art
        Iranian weavers mentioned, it is necessary to know that carpet weaving in some cities
        Iran is done with more precision and artistry, which makes it famous
        The carpet is made in these provinces. In the meantime, Kashan hand-woven carpet is one of the carpets
        It is very popular in Iran and the world in designs and colors
        It is sold in many different ways. In addition, the unparalleled quality of the carpet
        Kashan's handloom and the boundless beauty of this product have made it popular from the past to the present
        Today, the buying and selling of this type of carpet by customers will be prosperous. Designs
        Very delicate and exquisite on the carpets handwoven by Kashani artists
        It is possible to walk, which has caused this popularity, so that the city of Kashan in Ahed
        Safavieh has been one of the most luxurious and best centers for the production of handmade carpets and rugs.
        
        Besides the city of Kashan, Tabriz hand-woven carpet is another famous city in Iran
        The field of production of textile products, especially hand-woven rugs and carpets, is in Tabriz and from
        In the distant past, until now, this city has been the cradle of production and distribution of all kinds of handmade carpets in designs
        And there have been various models. However, one can say today
        One of the most important handicrafts of this city is carpet weaving, which is world famous.
        
        The art of carpet weaving in the city of Tabriz, like Kashan, began in the Safavid period
        In the beginning, the work was related to rural sectors and gradually in large workshops Carpet weaving also opened a place. The unique skill and expertise of Tabrizi artists
        The production of hand-woven carpets has made it the most elegant and beautiful
        The most beautiful carpets of Iran are woven in this city. Carpet weaving in the city of Tabriz
        The face of the knot is symmetrical with a hook, which is unique in its kind, with this
        Now definitely choosing the product of this city to spread in Iranian homes
        It can be unique.
        
        Characteristics of hand-woven carpets due to the increasing number of types of hand-woven carpets in the market
        Iran and the world should consider several points when buying this product
        put. Iranian hand-woven carpets are generally in 3 formats: tanraj, khasti and afshan
        It is woven, of which the bergamot type is the most popular. This type of marginal carpet
        It is wide around and has oval and circle designs in the middle. Also be careful
        Be aware that the difference between hand-woven carpets and machine-made carpets is huge
        So that handwoven carpets look very beautiful from far and near
        They are very bright. Color symmetry is another prominent feature of this product
        which adds to its beauty. On the other hand, be careful about this
        Carpets should be shiny and flexible so that this type of carpet is the only carpet
        It gets many times more beautiful by walking and washing.
        
        The design and pattern of the hand-woven carpet is beyond the quality of the hand-woven carpet when buying
        This product, another very important point that is important for customers, attention
        It is due to the design and role of this product. Be careful if you want a handmade carpet
        To buy Iranian, you should know that in general, the design and pattern in the carpet
        Iranian includes the following:
        
        Reading the tutorial of carpet weaving
        
        Design and pattern of handmade carpet
        
        Shah Abbasi plan
        
        Slim design
        
        spray plan
        
        Bete Jakeh design
        
        tree design
        
        hunting ground plan
        
        frame design
        
        Turkmen and Bukhara plan
        
        Farang flower design
        
        Dahram fish design
        
        Altar design
        
        Privacy plan
        
        Vase design
        
        Eli's plan
        
        Geometric design
        
        Antiquities plan and Islamic buildings
        
        Adaptation design
        
        Consolidated plan
        
        Materials used in handmade carpets
        
        One of the most significant things that cause the popularity and popularity of Iranian hand-woven carpet
        The materials used in these carpets are of high quality
        They are very high and this is important along with the beauty of the product.
        One of the materials used in the warp and weft of Iranian handmade carpets is cotton and wool
        It is possible that this type of carpet is known as a woolen carpet. also
        It can be said that among the nomads, wool is used instead of yarn.
        
        Types of hand-woven carpets Among the types of hand-woven carpets, the following can be mentioned:
        
        All-silk carpet: its pile and tuft are woven from high-quality silk thread. Flower
        Silk: It is another type of hand-woven carpet or rug that is used in the period of borders and doors
        Its patterns use silk instead of wool. Silk floor carpet
        : Another type of hand-woven carpet is made of silk instead of wool
        is used Sof: It is another type of hand-woven carpet and rug that has a background
        It consists of thick and thin fabric and has patterns of flowers and fluffy bushes. Carpet
        As mentioned, handwoven silk is one of the materials used in the carpet
        Iranian hand-woven silk thread is definitely the most popular carpet
        It is high and has many fans. In general, we can say carpet
        Tabriz and Kashan carpets are usually made of wool or silk
        This has resulted in very high quality products. Also be careful
        Considering that this type of carpet is made of silk, the price is naturally high
        It is higher than other types of products.`,
      "herbal-text": `Extracts are one of the most widely used forms of using plants. Today in
        There are more than 40 types of plants in Iran that are extracted and used medicinally
        are used Medicinal perfumes are actually scents, perfumes or herbal essences
        There are those who add it to water, they are aromatic medicines which
        Their scent can stimulate the olfactory nerve receptors and go
        The production of hormones, body temperature, body metabolism, stress hormone levels, etc
        Sex, the body's defense system, our emotional and physical thoughts and behaviors
        let them These aromatic substances are contained in extracts or oils of healing plants
        There is more by stimulating the brain and releasing neurotransmitters that cause states
        There is a special mentality in a person and a feeling of health, euphoria, pleasure and satisfaction
        they exist These smells can reduce stress and to some extent pain
        cause emotional balance. Among the widely used spirits are rose water, mint spirit,
        He mentioned Baharnaranj and Birimashk sweat.
        
        Thyme sweat: pain reliever - anti-cold - stomach tonic - treatment of fungal diseases
        Skin - anti-edematous nose and throat.
        
        Asto Khodus sweat: Nerve booster - Bronchitis and colic treatment - Lowering
        Fever and energizing - anticonvulsant and epilepsy treatment of nervous diseases.
        
        Willow sweat: treatment of severe fevers and genital pains - yellow skin (jaundice) - purification
        Blood.
        
        Spring orange juice: brain and nerve booster - invigorating - strengthening the heart.
        
        Lemon juice: anti-fatigue - vomiting during pregnancy - bronchitis
        And convulsions - anti-convulsions - treatment of heart problems.
        
        Yarrow sweat: anti-inflammation of intestines and stomach - anti-rheumatism and gout - eliminating disorders
        Menstruation and menstrual pain.
        
        Beetroot sweat: strengthening phleb - relieving nervous disorders - anti-heart palpitations.
        
        Oregano: anti whooping cough and flu - expectorant - carminative - astringent - blood vessel opener
        - Disinfectants .
        
        Four cold sweats: anti-fever-cool-stomach booster.
        
        Warm sweats: strengthening the stomach - useful for digestion - relieving discomfort
        intestine
        
        The sweat of 40 plants: stomach booster - digestion aid - windbreaker - anti-cold -
        Anti nausea and vomiting.
        
        Horsetail sweat: strong diuretic - removing kidney and bladder stones - gall bladder - blood purification.
        
        Itchy sweat: anti-urinary tract infection - stone crusher - anti-whooping cough.
        
        Fennel sweat: aromatic - stimulant - carminative - aphrodisiac - treatment of hemorrhoids
        And gout - increase in breast milk.
        
        Sweating: anti-flatulence - anti-sour stomach - anti-infection - anti-parasitic - windbreaker -
        Treatment of complications after withdrawal from addiction.
        
        Cumin sweat: anti-obesity - blood purifier - anti-hysteria and convulsions - milk increase
        Mothers - wind breaker - food digester - blood fat reducer.
        
        Apple cider vinegar: slimming - food supplement
        
        Valerian extract: sleep-inducing, pain-relieving, heart-strengthening, appetizing.
        
        Shatre's sweat: anti-itching, anti-bilious, strengthening the liver, invigorating, anti-flatulent.
        Appetizer.
        
        Fenugreek extract: anti-sugar, sexual enhancement, invigorating.
        
        Licorice extract: decisive treatment for gastric and duodenal ulcers, anti-cough and bile.
        
        sweat: anti-fatty blood - to lower cholesterol - increase breast milk -
        Slimming treatment
        
        Chicory sweat: useful for the liver - anti-pimple - anti-itch - blood purifier - reducer
        fat
        
        Kialak sweat: blood purifier - prevention of the consequences of cholesterol level - prevention
        Narrowing of the veins.
        
        Nettle sweat: decisive effect in curing skin and skin diseases - anti-fat and blood sugar -
        Antihemorrhagic - vasodilator - diuretic.
        
        Gulbahar sweat: useful for the softness of the skin of the hands and face - tonic for the stomach
        
        Sage sweat: anti-diabetic - anti-rheumatism and diarrhea - anti-sinusitis - anti-parasitic - anti-
        flatulence
        
        Mokhlaseh sweat: laxative - tonic - detoxification - anti-colic - strong antidote, useful for
        Back problems, muscle joints - strengthening the stomach.
        
        sweat case: anti-hemorrhage - intestinal astringent - treatment of diarrhea and hemorrhoids - strengthening hair growth -
        Anti-pest
        
        Peppermint: anti-heartache - heartburn - anti-flatulence - wind breaker - stomach booster
        children`,
      "instruction-text": `This company is one of the leading companies in the field of exporting wall and floor tiles
        This company currently sells to the countries of Central Asia, Iraq, Afghanistan and
        Pakistan exports.
        
        In general, the goals of this company since the beginning of its establishment are to achieve superior quality,
        Perpetuity, establishing a good name and permanently maintaining dignity and credibility between representatives and consumers
        providers, profitability not through reducing production cost but improving productivity,
        Reduction of waste, continuous training and obtaining the satisfaction of human resources in the opinion of this company
        They are one of the important elements of production and in addition to this, continuous communication with
        The scientific and industrial societies of this branch of the construction industry have been huge. as a result
        This company has been able to comply with the above goals and policies for consecutive years
        be selected as a sample unit.
        
        Pouyan Pasargad company has been focusing on providing the best quality since its establishment
        and therefore uses the best producers.
        
        The supplying factories of this company are equipped with the latest and most up-to-date machines
        which is from the Italian companies System - Intensa - Projecta - Siti
        B&T – Tsc has been purchased. These companies update printing devices
        Digital, high-capacity hydraulic presses, two-story and one-story roller furnaces
        The floor is 88 meters long and 80.2 meters wide, rectified machines, grading and so on
        Fully automatic sorting equipped with computer systems for control
        Physical parameters such as dimensions and warp are able to position
        To gain distinction between domestic and foreign producers`,
      "mineral-text": `Mining or extraction of minerals to the act of extracting valuable or other minerals
        Materials are said to come from the earth and usually from mines. Materials from these deposits
        obtained including metals, coal, oil shale, precious stones, diamonds,
        Limestone, limestone, salt rock, gold, silver, potash, sand, clay and other materials
        it is done Mining to obtain any material that cannot be obtained through
        Grown by agricultural processes, either artificially in a laboratory or factory
        produced, it is necessary. In a more complete definition, mining includes the harvesting of any
        Non-renewable resource such as oil, natural gas or even water.
        
        
        A mine worker with 90 kg of sulfur that he brought from the bottom of Ijen volcano
        carried by himself Stone and metal mining since prehistoric times by
        Man is done. Today's mining processes include body prospecting
        Mines, analysis of the profit potential of a found mine, extraction of case materials
        The opinion and the final restoration of the land after the closure of the mine.
        
        
        A simple map of the world's active mines. Mining operations, both during the period of activity
        The mine and after its closure, usually on the destructive effects on the environment
        leaves Therefore, most countries in the world have regulations to reduce this
        Negative effects have been approved. The issue of work safety is also a long time
        which is alarming and new methods of significant improvement in the field of safety
        Mines have followed.`,
      "nuts-text": `Dried fruit is one of the delicious and favorite foods of everyone, dried fruit in pieces
        Some fruits such as grapes, plums, berries, apricots and kernels are dried
        After these fruits dry and lose their water, the amount of sugar and some
        Other properties increase. Nuts are rich in useful nutrients such as
        Heart-healthy unsaturated fats, proteins, vitamins and minerals
        Is.`,
      language: "Language",
      contact: "Contact Us",
    },
  },
  ar: {
    translation: {
      "company management": "إدارة الشركة",
      "phone number": "هاتف : +983155464451",
      "fax number": "فاكس : +983155464452",
      "mobile number": "التليفون المحمول : +989134613676",
      "telegram number": "التلگرام : +989138613676",
      address: "تبوك",
      address2:
        "كاشان شارع آية الله كاشاني ثلاث طرق للغزنوي. مبنى مكاتب نارون. الطابق الاول. الوحدة 3",
      header1: "مجموعة الأعمال الدولية",
      header2: "بويان باسارجاد كاشان",
      home: "الصفحة الرئيسية",
      services: "خدمات",
      products: "منتجات",
      carpet: "السجاد",
      "handy-crafts": "الحرف اليدوية",
      "dried-fruit": "فاكهة مجففة",
      "herbal-essensse": "مقتطفات العشبية",
      instruction: "مواد بناء",
      mineral: "المعادن",
      more: "أكثر",
      product1: `تعتبر ايران من ابرز الدول في انتاج السجاد اليدوي والمكائن ​​، وكاشان هي مهد انتاج السجاد في العالم ، وتحاول هذه الشركة ان تقدم لكم اجمل انواع السجاد الايراني الاصلي.`,
      product2: `يعد الفن الإيراني من أغنى التراث الفني في تاريخ العالم ، وتعد الحرف اليدوية من أكثر مظاهر الفن الإيراني وضوحًا.`,
      product3: `تعد المكسرات من الأطعمة الشهية والمفضلة لدى الجميع ، فهي غنية بالعناصر الغذائية المفيدة مثل الدهون غير المشبعة المناسبة للقلب والبروتينات والفيتامينات والمعادن. نحن نحاول تقديم أفضل وأعلى جودة للفواكه المجففة الإيرانية في أفضل فئة لعملائنا`,
      product4: `تعتبر المشروبات الروحية واحدة من أكثر أشكال استخدام النباتات استخدامًا ، وكاشان هي أكبر مركز لإنتاج جميع أنواع المشروبات الروحية ، بما في ذلك ماء الورد وجوز التنبول. نحن نقدم لك أفضل منتجات المشروبات الروحية عالية الجودة`,
      product5: `تعتبر هذه الشركة من الشركات الرائدة في مجال تصدير بلاط الحوائط والأرضيات ، وتقوم هذه الشركة بالتصدير حاليا إلى دول آسيا الوسطى والعراق وأفغانستان وباكستان وطاجيكستان.`,
      product6: `تعد إيران من أغنى الدول في مجال المعادن بجميع أنواعها ، والعديد من احتياطياتنا المعدنية في أعلى مراتب العالم من حيث الكمية والنوعية. وبفضل خبرة مديريها ، يمكن لهذه الشركة أن تنتج وتورد جميع أنواع المعادن.`,
      vision: "رؤية",
      service1: `الاستكشاف والاستخراج والمعالجة والاستشارات المتخصصة الأخرى في مجال التعدين هي جزء من خدمات موظفينا المتخصصين في هذا المجال.يعد تصميم وتنفيذ وتركيب آلات التعدين من أهم القضايا في إنتاجية أنشطة التعدين.`,
      serviceH1: "مناجم",
      service2: `تحاول هذه الشركة تقديم أفضل الخدمات في مجال التصدير والاستيراد والاستشارات ذات الصلة حسب خبرة فريقها المحترف.`,
      serviceH2: "يصدّر",
      service3: `تقدم هذه الشركة أوسع نطاق من الخدمات في مجال الاستثمار ، من إعداد الخطط التوضيحية إلى الحصول على التراخيص الحكومية والاستشارات أثناء التنفيذ.`,
      serviceH3: "الاستشارات والاستثمار",
      service4: `تتطلب المنافسة في الساحتين المحلية والدولية معرفة المعايير العالمية في الإنتاج وتقديم الخدمات ، ويمكن لهذه الشركة أن ترشدك في اختيار أفضل الشهادات الدولية وأكثرها موثوقية.`,
      serviceH4: "مراقبة الجودة",
      "carpet-text": `إيران هي واحدة من الدول المثالية في مجال إنتاج المنتجات النسيجية
        في الماضي وحتى الآن ، تم تقديم مساهمة كبيرة في إنتاج السجاد المنسوج يدويًا وأنواع أخرى من المنتجات المنسوجة
        كانت مصنوعة من الغزل والصوف. معتبرا أن كل أمة لديها سلعة
        يمكن القول أن السجادة المنسوجة يدويًا هي واحدة من تلك السلع العديدة
        تعتبر مهمة وتصدير إيران وبين الدول المختلفة كذلك
        تُعرف بأنها أشهر منتج للسجاد ، وخاصة السجاد المنسوج يدويًا. في المقالة
        هذا الأسبوع ، يكون موقع Zilome الخاص بك على دراية بالموضوعات المهمة في مجال السجاد المنسوج يدويًا
        ستكون
        
        ما هي السجادة المصنوعة يدويا؟ من أهم المعدات والبضائع من الماضي حتى الآن
        كان لها أهمية خاصة في حياة الإنسان والسجاد ومنتجات المنسوجات.
        لأن استخدام هذه الأجهزة مفيد في خلق شعور بالراحة والسلام
        يفعل. وفي الوقت نفسه ، أحد أكثر أنواع السجاد تميزًا وشعبية ،
        هناك سجاد منسوج يدويًا ، وهو من المنتجات الإيرانية القديمة. في
        هنا ، السؤال الذي قد يطرح نفسه للمشترين هو أن السجادة مصنوعة يدويًا
        ما هو؟ احذر من أن كلمة فرش هي عبارة عربية تعني واسع
        ويشير إلى عناصر مثل السجاد والقطيفة. نتيجة لذلك ، يمكننا القول
        معنى السجادة المنسوجة يدويًا هي طبقة أساس مصنوعة يدويًا من الخيوط واللحمة
        إنه منسوج ، مما يخلق بشكل طبيعي تصميمات جميلة جدًا عليه
        يمكنه ولديه العديد من المعجبين في جميع أنحاء العالم.
        
        تاريخ السجاد المنسوج يدويًا حسب التاريخ القديم لإنتاج السجاد والبسط
        هناك نسيج إيراني منسوج يدويًا ، ويمكن القول حاليًا إنه منتج منسوج يدويًا
        يعد الفنانون الإيرانيون من بين أفضل وأجمل أنواع السجاد في العالم
        تمت الموافقة عليه من قبل خبراء السجاد الدوليين. ولكن على الرغم من ذلك في العام
        1328 ، أول سجاد معقود كغطاء للخيول أو الخيام
        ثم يتم استخدام سكان الصحراء في إنتاج هذا المنتج
        لقد تم إحراز الكثير من التقدم ، ويعتقد الباحثون أن بداية ازدهار الفن
        يعود تاريخ نسج السجاد في إيران إلى القرنين السادس عشر والسابع عشر.
        
        في السنوات الماضية مع تقدم التكنولوجيا في العديد من المجالات منها
        شهد مجال إنتاج السجاد تغيرات هائلة في إنتاج هذا المنتج
        كنا ؛ حتى أنه في بداية إنتاج السجاد للفنانين الإيرانيين ،
        تم استخدام أنماط بسيطة للغاية وتصميمات سهلة على هذه المنتجات النسيجية
        ولكن مع مرور الوقت ، حدث تغيير هائل في إنتاج هذا المنتج
        لقد تسبب في تنوع فريد في سوق السجاد المنسوج يدويًا.
        
        يعد السجاد التاريخي المنسوج يدويًا من بين أهم أنواع السجاد المنسوج يدويًا في تاريخ إيران
        يمكننا الرجوع إلى السجاد والبسط التالية:
        
        سجاد تاريخي منسوج يدويًا من سجاد بازيريك: يعود تاريخ هذه السجادة إلى 2500 عام
        يبلغ مقاسها 210 × 183 سم ، وهي منسوجة بحوالي 3600 عقدة. السجاد
        بهارستان: تُعرف بسجادة خسرو الربيعية ، والتي كانت سجادة ممتازة جدًا في عهد خسرو
        إنه بارفيز. السجاد الصفوي المنسوج يدوياً: آخر من أجمل أنواع السجاد
        كان النول الإيراني هو الذي أظهر إبداع وعبقرية الفنانين خلال الحكم الصفوي
        يظهر أنه في هذه الفترة ، استخدم نساجي السجاد تصميمات تقريبًا
        تركوا وراءهم 1500 سجاد وبسط. سجادة ذات مشهد حيواني
        : سجادة إيرانية أخرى بخلفية حمراء وتصاميم جميلة
        يتم إنتاجه من الحرير ، مما جعله يتمتع بشعبية كبيرة. سجادة
        تشيلسي: سجادة جميلة أخرى في العالم هي سجادة تشيلسي في المجموعة
        السجاد محفوظ في متحف فيكتوريا وألبرت في لندن. اقرأ عيوب و
        مزايا السجادة الآلية 1200 مشط سجاد كاشان منسوج يدويًا على الرغم من ما يتعلق بالفن
        وذكر النساجون الإيرانيون أنه من الضروري معرفة نسج السجاد في بعض المدن
        تتم إيران بمزيد من الدقة والفنية ، مما يجعلها مشهورة
        السجادة مصنوعة في هذه المقاطعات. في غضون ذلك ، تعتبر سجادة كاشان المنسوجة يدويًا واحدة من السجاد
        تحظى بشعبية كبيرة في إيران والعالم من حيث التصميمات والألوان
        يباع بعدة طرق مختلفة. بالإضافة إلى الجودة التي لا مثيل لها للسجاد
        نول كاشان اليدوي والجمال اللامحدود لهذا المنتج جعله مشهورًا من الماضي إلى الحاضر
        اليوم ، سيكون بيع وشراء هذا النوع من السجاد من قبل العملاء مزدهرًا. تصميمات
        رقيق للغاية ورائع على السجاد المنسوج يدويًا بواسطة فنانين كاشاني
        ومن الممكن أن يمشي الأمر الذي سبب هذه الشعبية ، حتى أن مدينة كاشان في العهد
        تعتبر الصفوية من أفخم وأفضل مراكز إنتاج السجاد والبسط المصنوعة يدويًا.
        
        إلى جانب مدينة كاشان ، تعد سجادة تبريز المنسوجة يدويًا مدينة مشهورة أخرى في إيران
        مجال إنتاج المنتجات النسيجية ، وخاصة السجاد المنسوج يدويًا والسجاد ، في تبريز ومنها
        في الماضي البعيد ، وحتى الآن ، كانت هذه المدينة مهد إنتاج وتوزيع جميع أنواع السجاد اليدوي في التصميمات
        وكانت هناك نماذج مختلفة. ومع ذلك ، يمكن للمرء أن يقول اليوم
        ومن أهم الحرف اليدوية في هذه المدينة حياكة السجاد المشهورة عالمياً.
        
        بدأ فن نسج السجاد في مدينة تبريز ، مثل كاشان ، في العصر الصفوي
        في البداية كان العمل مرتبطا بالقطاعات الريفية وتدريجيا في ورش كبيرة نسج السجاد أيضا فتح مكانا. المهارة والخبرة الفريدة لفنانى التبريزي
        صنع السجاد المنسوج يدويًا جعله الأكثر أناقة وجمالًا
        أجمل سجاد إيران منسوج في هذه المدينة. نسج السجاد في مدينة تبريز
        وجه العقدة متماثل مع خطاف ، وهو فريد من نوعه بهذا الشكل
        الآن بالتأكيد اختار منتج هذه المدينة لينتشر في البيوت الإيرانية
        يمكن أن تكون فريدة من نوعها.
        
        خصائص السجاد المنسوج يدويًا بسبب العدد المتزايد لأنواع السجاد المنسوج يدويًا في السوق
        يجب على إيران والعالم التفكير في عدة نقاط عند شراء هذا المنتج
        وضع. يتكون السجاد الإيراني المنسوج يدويًا بشكل عام من 3 أشكال: التنراج ، والخاستي ، والأفشان
        إنه منسوج ، وهو النوع الأكثر شعبية من البرغموت. هذا النوع من السجاد الهامشي
        إنه واسع وله تصميمات بيضاوية ودائرية في المنتصف. كن حذرا أيضا
        اعلم أن الفرق بين السجاد المنسوج يدويًا والسجاد المصنوع آليًا كبير
        لذلك فإن السجاد المنسوج يدويًا يبدو جميلًا جدًا من بعيد وقريب
        إنها مشرقة جدا. يعد تناسق الألوان ميزة بارزة أخرى لهذا المنتج
        مما يزيد من جمالها. من ناحية أخرى ، كن حذرا بشأن هذا
        يجب أن يكون السجاد لامعًا ومرنًا بحيث يكون هذا النوع من السجاد هو السجاد الوحيد
        يصبح أكثر جمالا عدة مرات من خلال المشي والغسيل.
        
        تصميم ونمط السجادة المنسوجة يدويًا يفوق جودة السجاد المنسوج يدويًا عند الشراء
        هذا المنتج ، نقطة أخرى مهمة للغاية ومهمة للعملاء ، الاهتمام
        إنه بسبب تصميم ودور هذا المنتج. كن حذرًا إذا كنت تريد سجادة مصنوعة يدويًا
        لشراء السجاد الإيراني ، يجب أن تعلم بشكل عام أن التصميم والنمط في السجادة
        يشمل الايراني ما يلي:
        
        قراءة دروس نسج السجاد
        
        تصميم ونمط السجاد اليدوي
        
        خطة شاه عباسي
        
        تصميم نحيف
        
        خطة الرش
        
        تصميم بيت جيكه
        
        تصميم شجرة
        
        خطة أرض الصيد
        
        تصميم الإطار
        
        خطة تركمان وبخارى
        
        تصميم زهرة Farang
        
        تصميم أسماك ضهرم
        
        تصميم المذبح
        
        خطة الخصوصية
        
        تصميم مزهرية
        
        تصميم ايلي
        
        تصميم هندسي
        
        مخطط الآثار والمباني الإسلامية
        
        تصميم التكيف
        
        الخطة الموحدة
        
        المواد المستخدمة في صناعة السجاد اليدوي
        
        من أهم الأشياء التي تتسبب في شعبية وشعبية السجاد الإيراني المنسوج يدويًا
        المواد المستخدمة في هذا السجاد ذات جودة عالية
        إنها عالية جدًا وهذا مهم إلى جانب جمال المنتج.
        يعد القطن والصوف من المواد المستخدمة في لف ولحمة السجاد الإيراني اليدوي
        من الممكن أن يُعرف هذا النوع من السجاد بالسجادة الصوفية. ايضا
        يمكن القول أنه من بين البدو ، يتم استخدام الصوف بدلاً من الغزل.
        
        أنواع السجاد المنسوج يدويًا من بين أنواع السجاد المنسوج يدويًا يمكن ذكر ما يلي:
        
        سجادة من الحرير بالكامل: نسيجها وخصلتها منسوجة من خيوط حرير عالية الجودة. ورد
        الحرير: هو نوع آخر من السجاد أو البساط المنسوج يدويًا والذي يستخدم في فترة الحدود والأبواب
        تستخدم أنماطه الحرير بدلاً من الصوف. سجادة أرضية من الحرير
        : نوع آخر من السجاد المنسوج يدويًا مصنوع من الحرير بدلاً من الصوف
        يستخدم Sof: هو نوع آخر من السجاد والبساط المنسوج يدويًا وله خلفية
        يتكون من قماش سميك ورقيق وله أنماط من الزهور والشجيرات الرقيقة. السجاد
        كما ذكرنا ، فإن الحرير المنسوج يدويًا هو أحد الخامات المستخدمة في السجادة
        خيوط الحرير الإيرانية المنسوجة يدويًا هي بالتأكيد أكثر السجاد شعبية
        إنه مرتفع وله العديد من المعجبين. بشكل عام ، يمكننا أن نقول السجاد
        يصنع سجاد تبريز وكاشان عادة من الصوف أو الحرير
        وقد نتج عن ذلك منتجات عالية الجودة. كن حذرا أيضا
        بالنظر إلى أن هذا النوع من السجاد مصنوع من الحرير ، فإن السعر مرتفع بشكل طبيعي
        إنه أعلى من الأنواع الأخرى من المنتجات.`,
      "herbal-text": `تعتبر المستخلصات من أكثر أشكال استخدام النباتات استخدامًا. اليوم في
        يوجد أكثر من 40 نوعًا من النباتات في إيران يتم استخلاصها واستخدامها طبيًا
        يستخدم العطور الطبية هي في الواقع روائح أو عطور أو خلاصات عشبية
        وهناك من يضيفه إلى الماء ، فهو من الأدوية العطرية
        رائحتهم يمكن أن تحفز مستقبلات العصب الشمي وتذهب
        إنتاج الهرمونات ، درجة حرارة الجسم ، التمثيل الغذائي للجسم ، مستويات هرمون التوتر ، إلخ
        الجنس ، نظام الدفاع عن الجسم ، أفكارنا وسلوكياتنا العاطفية والجسدية
        دعهم هذه المواد العطرية موجودة في مستخلصات أو زيوت النباتات العلاجية
        هناك المزيد من خلال تحفيز الدماغ وإطلاق النواقل العصبية التي تسبب الحالات
        هناك عقلية خاصة في الإنسان وشعور بالصحة والنشوة والسرور والرضا
        انهم موجودين هذه الروائح يمكن أن تقلل من التوتر وإلى حد ما الألم
        يسبب التوازن العاطفي. من بين المشروبات الروحية المستخدمة على نطاق واسع ماء الورد ، وروح النعناع ،
        وذكر عرق باهارنارانج وبريماشك.
        
        عرق الزعتر: مسكن للآلام - مضاد للبرد - مقوي للمعدة - علاج الأمراض الفطرية
        الجلد - مضاد لتورم الأنف والحلق.
        
        عرق استو خدوس: مقوي للأعصاب - التهاب الشعب الهوائية وعلاج المغص - التخفيض
        الحمى والتنشيط - علاج الصرع ومضادات الاختلاج للأمراض العصبية.
        
        عرق الصفصاف: علاج الحمى الشديدة وآلام الأعضاء التناسلية - اصفرار الجلد (اليرقان) - التنقية
        الدم.
        
        عصير البرتقال الربيعي: يقوي المخ والأعصاب - ينشط - يقوي القلب.
        
        عصير الليمون: مضاد للارهاق - قيء اثناء الحمل - التهاب الشعب الهوائية
        والتشنجات - مضادات التشنجات - علاج مشاكل القلب.
        
        عرق اليارو: مضاد لالتهاب الامعاء والمعدة - مضاد للروماتيزم والنقرس - يقضي على الاضطرابات
        آلام الدورة الشهرية.
        
        عرق الشمندر: تقوية الوريد - تخفيف الاضطرابات العصبية - مكافحة خفقان القلب.
        
        الزعتر: مضاد للسعال الديكي والإنفلونزا - طارد للبلغم - طارد للريح - قابض - يفتح الأوعية الدموية
        - المطهرات.
        
        أربعة تعرق بارد: معزز مضاد للحمى - بارد - معدة.
        
        التعرق الدافئ: تقوية المعدة - مفيد للهضم - تخفيف الانزعاج
        الأمعاء
        
        عرق 40 نبتة: مقوي للمعدة - مساعد للهضم - سترة واقية - مضاد للبرد -
        مضاد للغثيان والقيء.
        
        عرق ذيل الحصان: مدر للبول قوي - يزيل حصوات الكلى والمثانة - المرارة - تنقية الدم.
        
        العرق المسبب للحكة: مضاد عدوى المسالك البولية - كسارة الحجر - السعال الديكي.
        
        عرق الشمر: عطري - منشط - طارد للريح - مثير للشهوة الجنسية - علاج البواسير
        والنقرس - زيادة في حليب الثدي.
        
        التعرق: مضاد لانتفاخ البطن - مضاد للحموضة - مضاد للالتهابات - مضاد للطفيليات - سترة واقية -
        علاج المضاعفات بعد الانسحاب من الإدمان.
        
        عرق الكمون: مضاد للسمنة - منقي للدم - مضاد للهستيريا والتشنجات - زيادة الحليب
        الأمهات - قواطع الرياح - هضم الطعام - مخفض الدهون بالدم.
        
        خل التفاح: التخسيس - مكمل غذائي
        
        مستخلص حشيشة الهر: مهدئ للنوم ، مسكن للألم ، مقوي للقلب ، فاتح للشهية.
        
        عرق الشاطر: مضاد للحكة ، مضاد للصفراء ، يقوي الكبد ، ينشط ، مضاد لانتفاخ البطن.
        مقبلات.
        
        مستخلص الحلبة: مضاد للسكر ، مقوي جنسي ، منشط.
        
        مستخلص عرق السوس: علاج حاسم لقرحة المعدة والاثني عشر ومضاد للسعال والصفراء.
        
        العرق: الدم المضاد للدهون - لخفض الكوليسترول - زيادة حليب الثدي -
        علاج التخسيس
        
        عرق الهندباء: مفيد للكبد - مضاد للبثور - مضاد للحكة - منقي للدم - مخفض
        سمين
        
        عرق كيالاك: منقي الدم - الوقاية من عواقب مستوى الكوليسترول - الوقاية
        - ضيق الأوردة.
        
        عرق نبات القراص: تأثير حاسم في علاج الأمراض الجلدية والجلدية - مضاد للدهون وسكر الدم -
        مضاد للنزف - موسع وعائي - مدر للبول.
        
        عرق الغلبهار: مفيد لنعومة جلد اليدين والوجه - مقوي للمعدة
        
        عرق المريمية: مضاد لمرض السكر - مضاد للروماتيزم والاسهال - مضاد لالتهاب الجيوب الأنفية - مضاد للطفيليات - مضاد -
        انتفاخ
        
        العرق المخلص: ملين - منشط - ازالة السموم - مضاد للمغص - ترياق قوي ومفيد لل
        مشاكل الظهر ومفاصل العضلات - تقوية المعدة.
        
        كيس العرق: مضاد للنزيف - قابض معوي - علاج الاسهال والبواسير - تقوية نمو الشعر -
        مكافحة الآفات
        
        النعناع: مضاد لألم القلب - حرقة المعدة - مضاد لانتفاخ البطن - مضاد للرياح - مقوي للمعدة
        الأطفال`,
      "instruction-text": `تعتبر هذه الشركة من الشركات الرائدة في مجال تصدير بلاط الحوائط والأرضيات
        تبيع هذه الشركة حاليًا إلى دول آسيا الوسطى والعراق وأفغانستان و
        صادرات باكستان.
        
        بشكل عام ، كانت أهداف هذه الشركة منذ بداية تأسيسها هي تحقيق الجودة الفائقة ،
        الدوام ، وإقامة اسم طيب ، والحفاظ بشكل دائم على الكرامة والمصداقية بين الممثلين والمستهلكين
        مقدمو الخدمة ، الربحية ليس من خلال خفض تكلفة الإنتاج ولكن تحسين الإنتاجية ،
        الحد من الهدر والتدريب المستمر والحصول على رضاء الكوادر البشرية في رأي هذه الشركة
        هم أحد العناصر المهمة للإنتاج بالإضافة إلى التواصل المستمر معهم
        كانت الجمعيات العلمية والصناعية لهذا الفرع من صناعة البناء ضخمة. نتيجة ل
        تمكنت هذه الشركة من الامتثال للأهداف والسياسات المذكورة أعلاه لسنوات متتالية
        يتم اختيارها كوحدة عينة.
        
        تركز شركة بويان باسارجاد على تقديم أفضل جودة منذ إنشائها
        وبالتالي يستخدم أفضل المنتجين.
        
        تم تجهيز المصانع الموردة لهذه الشركة بأحدث الآلات وأكثرها حداثة
        وهي من نظام الشركات الإيطالي - إنتينسا - بروجكتا - سيتي
        تم شراء B&T - Tsc. تقوم هذه الشركات بتحديث أجهزة الطباعة
        مكابس هيدروليكية رقمية عالية السعة ، أفران دوارة من طابقين وطابق واحد
        يبلغ طول الأرضية 88 مترًا وعرضها 80.2 مترًا ، والآلات المصححة والدرجات وما إلى ذلك
        فرز آلي بالكامل مزود بأنظمة كمبيوتر للتحكم
        يمكن وضع المعلمات الفيزيائية مثل الأبعاد والالتواء
        للتمييز بين المنتجين المحليين والأجانب`,
      "mineral-text": `التنقيب عن المعادن أو استخلاصها بغرض استخراج معادن ثمينة أو معادن أخرى
        يقال إن المواد تأتي من الأرض وعادة ما تأتي من المناجم. المواد من هذه الرواسب
        تم الحصول عليها بما في ذلك المعادن والفحم والصخر الزيتي والأحجار الكريمة والماس ،
        الحجر الجيري والحجر الجيري والصخور المالحة والذهب والفضة والبوتاس والرمل والطين وغيرها من المواد
        تم ذلك التعدين للحصول على أي مادة لا يمكن الحصول عليها من خلالها
        نمت عن طريق العمليات الزراعية ، سواء بشكل مصطنع في المختبر أو المصنع
        أنتجت ، فمن الضروري. في تعريف أكثر اكتمالا ، يشمل التعدين حصاد أي
        مورد غير متجدد مثل النفط والغاز الطبيعي أو حتى الماء.
        
        
        عامل منجم يحتوي على 90 كجم من الكبريت أحضره من قاع بركان إيجين
        يحمله بنفسه تعدين الحجر والمعادن منذ عصور ما قبل التاريخ من قبل
        انتهى الرجل. تشمل عمليات التعدين اليوم التنقيب عن الجثث
        المناجم ، تحليل الربح المحتمل لمنجم تم العثور عليه ، استخراج مواد الحالة
        الرأي والترميم النهائي للأرض بعد إغلاق المنجم.
        
        
        خريطة بسيطة للمناجم النشطة في العالم. عمليات التعدين سواء خلال فترة النشاط
        المنجم وبعد إغلاقه ، وعادة ما يكون على الآثار المدمرة على البيئة
        اوراق اشجار لذلك ، فإن معظم دول العالم لديها لوائح للحد من هذا
        تمت الموافقة على الآثار السلبية. مسألة سلامة العمل هي أيضا وقت طويل
        وهي طرق مقلقة وجديدة لتحسين كبير في مجال السلامة
        تبعت الألغام.`,
      "nuts-text": `تعتبر الفاكهة المجففة من الأطعمة اللذيذة والمفضلة لدى الجميع ، فالفواكه المجففة مقطعة إلى قطع
        يتم تجفيف بعض الفواكه مثل العنب والخوخ والتوت والمشمش والحبوب
        بعد أن تجف هذه الثمار وتفقد ماءها وكمية السكر وبعضها
        زيادة الخصائص الأخرى. المكسرات غنية بالعناصر الغذائية المفيدة مثل
        الدهون غير المشبعة الصحية للقلب والبروتينات والفيتامينات والمعادن
        هو.`,
      language: "لغة",
      contact: "اتصل بنا",
    },
  },
  es: {
    translation: {
      "company management": "Administracion de COMPAÑIA",
      "phone number": "Teléfono : +983155464451",
      "fax number": "Fax : +983155464452",
      "mobile number": "Móvil : +989134613676",
      "telegram number": "Telegram : +989138613676",
      address: "Dirección",
      address2:
        "Kashán Ayatolá Kashani St. Tres caminos de Ghaznavi. Edificio de oficinas Narun. primer piso . Unidad 3",
      header1: "Grupo de Negocios Internacionales",
      header2: "Pouyan Pasargad Kashan",
      home: "Pagina Principal",
      services: "Servicios",
      products: "Productos",
      carpet: "Alfombra",
      "handy-crafts": "artesanías",
      "dried-fruit": "fruta seca",
      "herbal-essensse": "Esencias de hierbas",
      instruction: "Materiales de construcción",
      mineral: "Minerales",
      more: "Más",
      product1: `Irán es uno de los países más destacados en la producción de alfombras tejidas a mano y a máquina, y Kashan es la cuna de la producción de alfombras en el mundo. Esta empresa está tratando de ofrecerle las alfombras iraníes más hermosas y originales.`,
      product2: `El arte iraní es uno de los patrimonios artísticos más ricos de la historia del mundo y la artesanía es una de las manifestaciones más evidentes del arte iraní.`,
      product3: `Las nueces se encuentran entre los alimentos deliciosos y favoritos de todos. Las nueces son ricas en nutrientes útiles, como grasas insaturadas adecuadas para el corazón, proteínas, vitaminas y minerales. Estamos tratando de ofrecer la mejor y más alta calidad de frutos secos iraníes en la mejor categoría para nuestros clientes.`,
      product4: `Los licores son una de las formas más utilizadas de usar plantas, y Kashan es el centro más grande para la producción de todo tipo de licores a base de hierbas, incluidas el agua de rosas y la nuez de betel. Te ofrecemos productos de bebidas espirituosas de la mejor calidad.`,
      product5: `Esta empresa es una de las empresas líderes en el campo de la exportación de revestimientos y pavimentos, actualmente exporta a los países de Asia Central, Irak, Afganistán, Pakistán y Tayikistán.`,
      product6: `Irán es uno de los países más ricos en el campo de todo tipo de minerales. Muchas de nuestras reservas minerales se encuentran entre las primeras del mundo en términos de cantidad y calidad. Debido a la experiencia de sus gerentes, esta empresa puede producir y suministrar todo tipo de minerales.`,
      vision: "visión",
      service1: `La exploración, extracción, procesamiento y demás asesorías especializadas en el área minera son parte de los servicios de nuestro personal especializado en esta área El diseño, implementación e instalación de maquinaria minera es uno de los temas más importantes en la productividad de las actividades mineras.`,
      serviceH1: "Minas",
      service2: `Esta empresa está tratando de brindar los mejores servicios en el campo de la exportación e importación y consultas relacionadas de acuerdo con la experiencia de su equipo profesional.`,
      serviceH2: "Exportar",
      service3: `Esta empresa brinda la más amplia gama de servicios en el área de inversiones, desde la elaboración de planos explicativos hasta la obtención de licencias gubernamentales y asesoría durante la implementación.`,
      serviceH3: "Consultoría e inversión",
      service4: `La competencia en el ámbito nacional e internacional requiere el conocimiento de estándares globales en producción y prestación de servicios, esta empresa puede guiarlo en la elección de los mejores y más confiables certificados internacionales.`,
      serviceH4: "Control de calidad",
      "carpet-text": `Irán es uno de los países ejemplares en el campo de la producción de productos textiles.
        En el pasado, hasta ahora, se ha hecho una gran contribución a la producción de alfombras tejidas a mano y otros tipos de productos tejidos.
        Ha sido confeccionada con hilo y lana. Considerando que cada nación tiene una mercancía
        Es simbólico, se puede decir que la alfombra tejida a mano es uno de esos muchos bienes
        Se considera importante y de exportación de Irán y también entre diferentes naciones.
        Es conocido como el productor más famoso de alfombras, especialmente alfombras tejidas a mano. en el artículo
        Esta semana, su sitio Zilome está familiarizado con temas importantes en el campo de las alfombras tejidas a mano.
        Tú serás
        
        ¿Qué es una alfombra hecha a mano? Uno de los equipos y bienes más importantes del pasado hasta ahora.
        Ha tenido una especial importancia en la vida humana, alfombras y productos textiles;
        Porque el uso de estos dispositivos es útil para crear una sensación de comodidad y paz.
        lo hace. Mientras tanto, uno de los tipos de alfombras más exclusivos y populares,
        Hay alfombras tejidas a mano, que se encuentran entre los antiguos productos iraníes. A
        Aquí, la duda que les puede surgir a los compradores es que la alfombra está hecha a mano
        ¿Que es? Tenga cuidado que la palabra Farsh es una frase árabe que significa ancho
        y se refiere a artículos como alfombras y felpa. Como resultado, podemos decir
        El significado de alfombra tejida a mano es una base hecha a mano con hilo y trama.
        Está tejido, lo que naturalmente crea diseños muy hermosos en él.
        Puede y tiene muchos fans en todo el mundo.
        
        La historia de las alfombras tejidas a mano según la historia antigua de la producción de alfombras y tapetes.
        Hay tejido a mano iraní, actualmente se puede decir que es un producto tejido a mano.
        Los artistas iraníes se encuentran entre los mejores y más bellos tipos de alfombras del mundo.
        Ha sido aprobado por expertos internacionales en alfombras. Pero aunque en el año
        1328, las primeras alfombras anudadas como cubierta para caballos o tiendas de campaña
        Luego, los habitantes del desierto se utilizan en la producción de este producto.
        Se han hecho muchos avances. Los investigadores creen que el comienzo del florecimiento del arte
        El tejido de alfombras en Irán se remonta a los siglos XVI y XVII.
        
        En los últimos años, con el avance de la tecnología en muchos campos, incluyendo
        El campo de la producción de alfombras ha sido testigo de grandes cambios en la producción de este producto.
        éramos ; De modo que al comienzo de la producción de alfombras por parte de artistas iraníes,
        En estos productos textiles se utilizaron patrones muy simples y diseños fáciles.
        Pero con el paso del tiempo, hubo un cambio tremendo en la elaboración de este producto.
        Causó una diversidad única en el mercado de las alfombras tejidas a mano.
        
        Las alfombras históricas tejidas a mano se encuentran entre las alfombras tejidas a mano más importantes en la historia de Irán.
        Podemos referirnos a las siguientes alfombras y moquetas:
        
        Alfombras históricas tejidas a mano de la alfombra Pazyrik: Esta alfombra tiene 2500 años y está en
        Mide 210 x 183 cm y está tejido con unos 3.600 nudos. Alfombra
        Baharstan: conocida como la alfombra de primavera de Khosrow, que fue una excelente alfombra durante la época de Khosrow
        es Párvez. Alfombra Safavid tejida a mano: otra de las alfombras más hermosas
        Fue el telar manual iraní el que mostró la creatividad y el genio de los artistas durante el gobierno de Safavid.
        Muestra que, en este período, los tejedores de alfombras usaban diseños de aprox.
        Dejaron atrás 1.500 alfombras y tapetes. Alfombra con paisaje de animales
        : Es otra alfombra iraní con fondo rojo y hermosos diseños.
        Se produce a partir de la seda, lo que la ha hecho muy popular. alfombra
        Chelsea: Otra alfombra hermosa en el mundo es la alfombra Chelsea en la colección
        Las alfombras se conservan en el Victoria and Albert Museum de Londres. Lea las desventajas y
        Méritos de la alfombra de máquina 1200 peine alfombra Kashan tejida a mano a pesar de lo que pasa con el arte
        Tejedores iraníes mencionados, es necesario saber que el tejido de alfombras en algunas ciudades
        Irán está hecho con más precisión y maestría, lo que lo hace famoso.
        La alfombra se hace en estas provincias. Mientras tanto, la alfombra tejida a mano de Kashan es una de las alfombras
        Es muy popular en Irán y el mundo en diseños y colores.
        Se vende de muchas maneras diferentes. Además, la calidad inigualable de la alfombra
        El telar manual de Kashan y la belleza ilimitada de este producto lo han hecho popular desde el pasado hasta el presente.
        Hoy, la compra y venta de este tipo de alfombras por parte de los clientes será próspera. diseños
        Muy delicadas y exquisitas en las alfombras tejidas a mano por artistas de Kashani
        Es posible caminar, lo que ha causado esta popularidad, por lo que la ciudad de Kashan en Ahed
        Safavieh ha sido uno de los mejores y más lujosos centros para la producción de alfombras y tapetes hechos a mano.
        
        Además de la ciudad de Kashan, la alfombra tejida a mano de Tabriz es otra ciudad famosa en Irán.
        El campo de producción de productos textiles, especialmente alfombras y tapices tejidos a mano, está en Tabriz y desde
        En un pasado lejano, hasta la actualidad, esta ciudad ha sido cuna de producción y distribución de todo tipo de alfombras artesanales en diseños
        Y ha habido varios modelos. Sin embargo, se puede decir hoy
        Una de las artesanías más importantes de esta ciudad es el tejido de alfombras, el cual es mundialmente famoso.
        
        El arte de tejer alfombras en la ciudad de Tabriz, como Kashan, comenzó en el período Safavid.
        En un principio el trabajo se relacionaba con sectores rurales y poco a poco en grandes talleres El tejido de alfombras también abrió un lugar. La habilidad y la experiencia únicas de los artistas de Tabrizi
        La producción de alfombras tejidas a mano la ha convertido en la más elegante y hermosa
        En esta ciudad se tejen las alfombras más hermosas de Irán. Tejido de alfombras en la ciudad de Tabriz
        La cara del nudo es simétrica con un gancho, que es único en su género, con este
        Ahora definitivamente eligiendo el producto de esta ciudad para difundirlo en los hogares iraníes.
        Puede ser único.
        
        Características de las alfombras tejidas a mano debido al creciente número de tipos de alfombras tejidas a mano en el mercado
        Irán y el mundo deberían considerar varios puntos al comprar este producto
        poner. Las alfombras iraníes tejidas a mano están generalmente en 3 formatos: tanraj, khasti y afshan
        Está tejido, de los cuales el tipo bergamota es el más popular. Este tipo de alfombra marginal
        Es ancho alrededor y tiene diseños ovalados y circulares en el medio. también ten cuidado
        Tenga en cuenta que la diferencia entre las alfombras tejidas a mano y las alfombras hechas a máquina es enorme.
        Para que las alfombras tejidas a mano se vean muy hermosas de lejos y de cerca
        Son muy brillantes. La simetría del color es otra característica destacada de este producto.
        que se suma a su belleza. Por otro lado, ten cuidado con esto.
        Las alfombras deben ser brillantes y flexibles para que este tipo de alfombra sea la única alfombra
        Se vuelve muchas veces más hermoso al caminar y lavar.
        
        El diseño y el patrón de la alfombra tejida a mano están más allá de la calidad de la alfombra tejida a mano al comprar
        Este producto, otro punto muy importante que es importante para los clientes, la atención.
        Se debe al diseño y función de este producto. Ojo si quieres una alfombra hecha a mano
        Para comprar iraní, debes saber que, en general, el diseño y estampado en la alfombra
        iraní incluye lo siguiente:
        
        Leyendo el tutorial de tejido de alfombras.
        
        Diseño y patronaje de alfombra artesanal
        
        El plan de Shah Abbasi
        
        Diseño delgado
        
        plan de pulverización
        
        Diseño de Bete Jakeh
        
        diseño de árbol
        
        plano de coto de caza
        
        diseño de marco
        
        Plan de Turkmenistán y Bukhara
        
        diseño de flores farang
        
        diseño de peces dahram
        
        diseño de altares
        
        plan de privacidad
        
        diseño de florero
        
        el diseño de eli
        
        Diseño geométrico
        
        Plan de antigüedades y edificios islámicos
        
        Diseño de adaptación
        
        plan consolidado
        
        Materiales utilizados en alfombras hechas a mano
        
        Una de las cosas más significativas que causan la popularidad y popularidad de la alfombra iraní tejida a mano.
        Los materiales utilizados en estas alfombras son de alta calidad.
        Son muy altos y esto es importante junto con la belleza del producto.
        Uno de los materiales utilizados en la urdimbre y trama de las alfombras artesanales iraníes es el algodón y la lana.
        Es posible que a este tipo de alfombra se le conozca como alfombra de lana. además
        Se puede decir que entre los nómadas se usa lana en lugar de hilo.
        
        Tipos de alfombras tejidas a mano Entre los tipos de alfombras tejidas a mano se pueden mencionar las siguientes:
        
        Alfombra totalmente de seda: su pelo y mechón están tejidos con hilo de seda de alta calidad. Flor
        Seda: Es otro tipo de alfombra o tapete tejido a mano que se utiliza en la época de las cenefas y puertas
        Sus patrones usan seda en lugar de lana. alfombra de piso de seda
        : Otro tipo de alfombra tejida a mano está hecha de seda en lugar de lana.
        se usa Sof: Es otro tipo de alfombra y tapete tejido a mano que tiene un fondo
        Se compone de tela gruesa y fina y tiene patrones de flores y arbustos esponjosos. Alfombra
        Como se mencionó, la seda tejida a mano es uno de los materiales utilizados en la alfombra.
        El hilo de seda iraní tejido a mano es definitivamente la alfombra más popular
        Es alto y tiene muchos fans. En general, podemos decir alfombra
        Las alfombras Tabriz y Kashan suelen estar hechas de lana o seda.
        Esto ha resultado en productos de muy alta calidad. también ten cuidado
        Teniendo en cuenta que este tipo de alfombra está hecha de seda, el precio es naturalmente alto
        Es más alto que otros tipos de productos.`,
      "herbal-text": `Los extractos son una de las formas más utilizadas de utilizar las plantas. Hoy en
        Hay más de 40 tipos de plantas en Irán que se extraen y usan con fines medicinales.
        son usados Los perfumes medicinales son en realidad esencias, perfumes o esencias herbales
        Hay quienes lo añaden al agua, son medicinas aromáticas que
        Su olor puede estimular los receptores del nervio olfativo e ir
        La producción de hormonas, la temperatura corporal, el metabolismo corporal, los niveles de hormonas del estrés, etc.
        El sexo, el sistema de defensa del cuerpo, nuestros pensamientos y comportamientos emocionales y físicos.
        Déjalos Estas sustancias aromáticas están contenidas en extractos o aceites de plantas curativas.
        Hay más estimulando el cerebro y liberando neurotransmisores que provocan estados
        Hay una mentalidad especial en una persona y un sentimiento de salud, euforia, placer y satisfacción.
        Ellos existen Estos olores pueden reducir el estrés y, en cierta medida, el dolor.
        Provocar equilibrio emocional. Entre los licores más utilizados se encuentran el agua de rosas, el licor de menta,
        Mencionó el sudor de Baharnaranj y Birimashk.
        
        Sudor de tomillo: analgésico - anti-resfriado - tónico estomacal - tratamiento de enfermedades fúngicas
        Piel - nariz y garganta antiedematosa.
        
        Sudor Asto Khodus: Refuerzo de los nervios - Tratamiento de bronquitis y cólicos - Reductor
        Fiebre y energizante - Tratamiento anticonvulsivo y epiléptico de enfermedades nerviosas.
        
        Sudor de sauce: tratamiento de fiebres intensas y dolores genitales - piel amarilla (ictericia) - purificación
        Sangre.
        
        Jugo de naranja de primavera: refuerzo cerebral y nervioso - tonificante - fortalecedor del corazón.
        
        Zumo de limón: antifatiga - vómitos durante el embarazo - bronquitis
        Y convulsiones - anticonvulsivos - tratamiento de problemas cardíacos.
        
        Sudor de milenrama: antiinflamatorio de intestinos y estómago - antirreumatismo y gota - eliminación de trastornos
        Menstruación y dolor menstrual.
        
        Sudor de remolacha: fortalece la fleb - alivia los trastornos nerviosos - palpitaciones anti-corazón.
        
        Orégano: contra la tos ferina y la gripe - expectorante - carminativo - astringente - abridor de vasos sanguíneos
        - Desinfectantes.
        
        Cuatro sudores fríos: refuerzo anti-fiebre-frío-estómago.
        
        Sudores cálidos: fortalece el estómago - útil para la digestión - alivia las molestias
        intestino
        
        El sudor de 40 plantas: refuerzo estomacal - ayuda a la digestión - rompevientos - anti-resfriado -
        Anti náuseas y vómitos.
        
        Sudor de cola de caballo: fuerte diurético - eliminación de cálculos renales y vesicales - vesícula biliar - depuración de la sangre.
        
        Picazón en el sudor: infección del tracto urinario anti - trituradora de piedra - tos ferina anti.
        
        Sudor de hinojo: aromático - estimulante - carminativo - afrodisíaco - tratamiento de hemorroides
        Y gota - aumento de la leche materna.
        
        Sudoración: antiflatulencias - antiacidez estomacal - antiinfecciones - antiparasitario - cortavientos -
        Tratamiento de las complicaciones tras la abstinencia de la adicción.
        
        Sudor de comino: antiobesidad - purificador de sangre - antihisteria y convulsiones - aumento de leche
        Madres - cortavientos - digestor de alimentos - reductor de grasas en sangre.
        
        Vinagre de sidra de manzana: adelgazante - complemento alimenticio
        
        Extracto de valeriana: inductor del sueño, analgésico, fortalecedor del corazón, apetecible.
        
        Sudor de Shatre: antipruriginoso, antibilioso, fortalecedor del hígado, tonificante, antiflatulento.
        Aperitivo.
        
        Extracto de fenogreco: antiazúcar, potenciador sexual, tonificante.
        
        Extracto de regaliz: tratamiento decisivo para las úlceras gástricas y duodenales, antitusígeno y biliar.
        
        sudor: sangre antigrasa - para bajar el colesterol - aumentar la leche materna -
        Tratamiento adelgazante
        
        Sudor de achicoria: útil para el hígado - anti-espinillas - anti-picazón - depurativo de la sangre - reductor
        grasa
        
        Sudor Kialak: purificador de sangre - prevención de las consecuencias del nivel de colesterol - prevención
        Estrechamiento de las venas.
        
        Sudor de ortiga: efecto decisivo en la curación de enfermedades cutáneas y cutáneas - antigrasa y azúcar en sangre -
        Antihemorrágico - vasodilatador - diurético.
        
        Sudor de Gulbahar: útil para la suavidad de la piel de las manos y la cara - tónico para el estómago
        
        Sudor de salvia: antidiabético - antirreumático y antidiarreico - antisinusitis - antiparasitario - anti-
        flatulencia
        
        Mokhlaseh sudor: laxante - tónico - desintoxicante - anticólico - antídoto fuerte, útil para
        Problemas de espalda, articulaciones musculares: fortalecimiento del estómago.
        
        estuche de sudor: antihemorrágico - astringente intestinal - tratamiento de diarreas y hemorroides - fortalecimiento del crecimiento del cabello -
        Anti-plagas
        
        Menta: anti-dolor de corazón - acidez estomacal - anti-flatulencia - rompevientos - refuerzo estomacal
        niños`,
      "instruction-text": `Esta empresa es una de las empresas líderes en el campo de la exportación de baldosas para paredes y pisos.
        Esta empresa vende actualmente a los países de Asia Central, Irak, Afganistán y
        Exportaciones de Pakistán.
        
        En general, los objetivos de esta empresa desde el comienzo de su establecimiento son lograr una calidad superior,
        Perpetuidad, estableciendo un buen nombre y manteniendo permanentemente la dignidad y credibilidad entre representantes y consumidores.
        proveedores, la rentabilidad no a través de la reducción del costo de producción sino de la mejora de la productividad,
        Reducción de residuos, formación continua y obtención de la satisfacción de los recursos humanos en opinión de esta empresa
        Son uno de los elementos importantes de la producción y además de esto, la comunicación continua con
        Las sociedades científicas e industriales de esta rama de la industria de la construcción han sido enormes. como resultado
        Esta empresa ha sido capaz de cumplir con los objetivos y políticas anteriores durante años consecutivos.
        seleccionarse como unidad de muestra.
        
        La empresa Pouyan Pasargad se ha centrado en proporcionar la mejor calidad desde su establecimiento.
        y por lo tanto utiliza los mejores productores.
        
        Las fábricas proveedoras de esta empresa están equipadas con las últimas y más actualizadas máquinas
        que es de las empresas italianas System - Intensa - Projecta - Siti
        B&T – Tsc ha sido comprado. Estas empresas actualizan los dispositivos de impresión
        Prensas hidráulicas digitales de alta capacidad, hornos de rodillos de dos y un piso
        El piso tiene 88 metros de largo y 80,2 metros de ancho, maquinas rectificadas, niveladoras etc.
        Clasificación totalmente automática equipada con sistemas informáticos para el control
        Los parámetros físicos como las dimensiones y la deformación son capaces de posicionar
        Lograr distinción entre productores nacionales y extranjeros.`,
      "mineral-text": `Minería o extracción de minerales al acto de extraer minerales valiosos u otros
        Se dice que los materiales provienen de la tierra y generalmente de las minas. Materiales de estos yacimientos
        obtenidos, incluidos metales, carbón, esquisto bituminoso, piedras preciosas, diamantes,
        Piedra caliza, piedra caliza, roca salina, oro, plata, potasa, arena, arcilla y otros materiales
        se hace Minería para obtener cualquier material que no se pueda obtener a través de
        Cultivado por procesos agrícolas, ya sea artificialmente en un laboratorio o fábrica
        producido, es necesario. En una definición más completa, la minería incluye la cosecha de cualquier
        Recurso no renovable como el petróleo, el gas natural o incluso el agua.
        
        
        Un minero con 90 kg de azufre que trajo del fondo del volcán Ijen
        llevado por él mismo Minería de piedra y metal desde tiempos prehistóricos por
        El hombre está hecho. Los procesos mineros actuales incluyen la prospección de cuerpos
        Minas, análisis del potencial de ganancias de una mina encontrada, extracción de materiales de caja
        El dictamen y la restauración definitiva del terreno tras el cierre de la mina.
        
        
        Un mapa simple de las minas activas del mundo. Explotación minera, tanto durante el periodo de actividad
        La mina y después de su cierre, por lo general sobre los efectos destructivos sobre el medio ambiente
        hojas Por lo tanto, la mayoría de los países del mundo tienen regulaciones para reducir este
        Los efectos negativos han sido aprobados. El tema de la seguridad en el trabajo también lleva mucho tiempo
        que es alarmante y nuevos métodos de mejora significativa en el campo de la seguridad
        Las minas han seguido.`,
      "nuts-text": `Los frutos secos son uno de los alimentos deliciosos y favoritos de todos, los frutos secos en trozos
        Algunas frutas como uvas, ciruelas, bayas, albaricoques y granos se secan
        Después de que estas frutas se sequen y pierdan su agua, la cantidad de azúcar y algo
        Otras propiedades aumentan. Las nueces son ricas en nutrientes útiles como
        Grasas no saturadas, proteínas, vitaminas y minerales saludables para el corazón
        Es.`,
      language: "Idioma",
      contact: "Contáctenos",
    },
  },
  ru: {
    translation: {
      "company management": "руководство фирмы",
      "phone number": "Телефон : +983155464451",
      "fax number": "факс : +983155464452",
      "mobile number": "Мобильный : +989134613676",
      "telegram number": "Telegram : +989138613676",
      address: "Адрес",
      address2:
        "Кашан Аятолла Кашани ул. Три пути Газневи. Офисное здание Нарун. первый этаж . Блок 3",
      header1: "Международная бизнес-группа",
      header2: "Пуян Пасаргад Кашан",
      home: "Главная страница",
      services: "Услуги",
      products: "Товары",
      carpet: "Ковер",
      "handy-crafts": "Ремесла",
      "dried-fruit": "сухофрукт",
      "herbal-essensse": "Травяные эссенции",
      instruction: "Строительные материалы",
      mineral: "полезные ископаемые",
      more: "Более",
      product1: `Иран - одна из самых выдающихся стран по производству ковров машинного и ручного ткачества, а Кашан - колыбель коврового производства в мире.Эта компания старается предложить вам самые красивые и оригинальные иранские ковры.`,
      product2: `Иранское искусство является одним из самых богатых художественных наследий в истории мира, а ремесла являются одним из наиболее очевидных проявлений иранского искусства.`,
      product3: `Орехи являются одними из самых вкусных и любимых всеми продуктов.Орехи богаты полезными питательными веществами, такими как ненасыщенные жиры, полезные для сердца, белки, витамины и минералы. Мы стараемся предложить нашим клиентам лучшие и самые качественные иранские сухофрукты в лучшей категории.`,
      product4: `Спиртные напитки - одна из наиболее широко используемых форм использования растений, а Кашан - крупнейший центр производства всех видов травяных спиртов, включая розовую воду и орехи бетеля. Мы предлагаем вам алкогольную продукцию самого высокого качества`,
      product5: `Эта компания является одной из ведущих компаний в области экспорта настенной и напольной плитки.Эта компания в настоящее время экспортирует в страны Центральной Азии, Ирак, Афганистан, Пакистан и Таджикистан.`,
      product6: `Иран является одной из самых богатых стран в области всех видов полезных ископаемых.Многие из наших запасов полезных ископаемых находятся на первых позициях в мире по количеству и качеству.Благодаря опыту своих менеджеров, эта компания может производить и поставлять все виды полезных ископаемых.`,
      vision: "зрение",
      service1: `Разведка, добыча, переработка и другие специализированные консультации в области добычи полезных ископаемых являются частью услуг нашего специализированного персонала в этой области.Проектирование, реализация и установка горной техники является одним из наиболее важных вопросов в производительности горнодобывающей деятельности.`,
      serviceH1: "шахты",
      service2: `Эта компания старается предоставлять лучшие услуги в области экспорта и импорта и связанных с этим консультаций в соответствии с опытом своей профессиональной команды.`,
      serviceH2: "Экспорт",
      service3: `Эта компания предоставляет широчайший спектр услуг в инвестиционной сфере, от подготовки пояснительных планов до получения государственных лицензий и консультирования при реализации.`,
      serviceH3: "Консалтинг и инвестиции",
      service4: `Конкуренция на внутренней и международной арене требует знания мировых стандартов в производстве и предоставлении услуг.Эта компания может помочь вам в выборе лучших и самых надежных международных сертификатов.`,
      serviceH4: "Контроль качества",
      "carpet-text": `Иран является одной из образцовых стран в области производства текстильной продукции.
        В прошлом и по сей день большой вклад вносится в производство ковров ручной работы и других видов тканых изделий.
        Он был сделан из пряжи и шерсти. Учитывая, что у каждой нации есть товар
        Символично, можно сказать, что ковер ручной работы является одним из тех многих товаров,
        Считается важным и экспорт Ирана, а также среди разных стран.
        Он известен как самый известный производитель ковров, особенно ковров ручной работы. в статье
        На этой неделе ваш сайт Zilome знаком с важными темами в области ковров ручной работы.
        ты будешь
        
        Что такое ковер ручной работы? Одно из самых важных оборудования и товаров от прошлого до настоящего времени
        Он имел особое значение в жизни человека, ковров и текстильных изделий;
        Потому что использование этих устройств помогает создать ощущение комфорта и покоя.
        он делает. Между тем, один из самых уникальных и популярных видов ковров,
        К старинным иранским изделиям относятся ковры ручной работы. В
        Здесь у покупателей может возникнуть вопрос, что ковер ручной работы.
        Что такое? Будьте осторожны, слово «фарш» — это арабская фраза, означающая широкий
        и относится к таким предметам, как ковер и плюш. В результате мы можем сказать
        Значение ковра ручной работы - это подложка, сделанная вручную из пряжи и утка.
        Он тканый, что, естественно, создает на нем очень красивые узоры.
        Он может и имеет много поклонников по всему миру.
        
        История ковров ручного ткачества по древней истории производства ковров и ковриков
        Есть иранское ручное ткачество, в настоящее время можно сказать, что это ручное ткачество.
        Иранские художники считаются одними из лучших и самых красивых видов ковров в мире.
        Он был одобрен международными экспертами по коврам. Но даже если в году
        1328 г., первые вязаные ковры в качестве покрытия для лошадей или палаток.
        Жители пустыни затем используются в производстве этого продукта.
        Было достигнуто много успехов.Исследователи считают, что начало расцвета искусства
        Ковроткачество в Иране восходит к 16-17 векам.
        
        В последние годы с развитием технологий во многих областях, в том числе
        В области производства ковров произошли огромные изменения в производстве этого продукта.
        мы были ; Так что в начале производства ковров иранскими мастерами,
        На этих текстильных изделиях использовались очень простые узоры и легкие рисунки.
        Но с течением времени в производстве этого продукта произошли огромные изменения.
        Это вызвало уникальное разнообразие на рынке ковров ручной работы.
        
        Исторические ковры ручной работы - одни из самых важных ковров ручной работы в истории Ирана.
        Мы можем обратиться к следующим коврам и коврикам:
        
        Исторические ковры ручной работы Пазырикского ковра: Этому ковру 2500 лет и в
        Его размеры 210 х 183 см, а плетение производится примерно на 3600 узлах. Ковер
        Бахарстан : известен как весенний ковер Хосрова, который был очень хорошим ковром во времена Хосрова.
        Это Парвез. Сефевидский ковер ручной работы: еще один из самых красивых ковров
        Именно иранский ручной ткацкий станок показал креативность и гениальность художников во время правления Сефевидов.
        Это показывает, что в этот период ковроделы использовали узоры ок.
        Они оставили после себя 1500 ковров и ковриков. Ковер с изображением животных
        : Это еще один иранский ковер с красным фоном и красивым рисунком.
        Он производится из шелка, что сделало его очень популярным. ковер
        Челси: Еще один красивый ковер в мире – это ковер Челси в коллекции.
        Ковры хранятся в Музее Виктории и Альберта в Лондоне. Читайте недостатки и
        Достоинства машинного ковра 1200 гребенчатый ковер ручной работы Кашан несмотря ни на что об искусстве
        Упомянуты иранские ткачи, необходимо знать, что ковроткачество в некоторых городах
        Иран выполнен с большей точностью и артистизмом, чем и прославился.
        Ковер сделан в этих провинциях. А пока кашанский ковер ручной работы – один из ковров
        Он очень популярен в Иране и мире по дизайну и цвету.
        Он продается по-разному. Кроме того, непревзойденное качество ковра
        Ручной ткацкий станок Кашана и безграничная красота этого изделия сделали его популярным от прошлого до настоящего времени.
        Сегодня покупка и продажа этого типа ковров покупателями будет процветать. Дизайн
        Очень нежные и изысканные на коврах ручной работы кашанских мастеров.
        Можно ходить пешком, чем и вызвана такая популярность, так что город Кашан в Ахеде
        Сафавие был одним из самых роскошных и лучших центров производства ковров и ковриков ручной работы.
        
        Помимо города Кашан, Тебризский ковер ручной работы - еще один известный город в Иране.
        Область производства текстильных изделий, особенно ковров и ковров ручной работы, находится в Тебризе и из
        В далеком прошлом и до сих пор этот город был колыбелью производства и распространения всевозможных ковров ручной работы в дизайне.
        И были разные модели. Однако сегодня можно сказать
        Одним из важнейших ремесел этого города является ковроткачество, известное во всем мире.
        
        Искусство ковроткачества в городе Тебриз, как и в Кашане, началось в период Сефевидов.
        Вначале работа была связана с сельскими секторами и постепенно в крупных мастерских. Ковроткачество также открыло место. Уникальное мастерство и опыт художников Тебризи
        Производство ковров ручной работы сделало его самым нарядным и красивым.
        В этом городе ткут самые красивые ковры Ирана. Ковроткачество в городе Тебриз
        Лицевая сторона узла симметрична крючку, уникальному в своем роде, с этим
        Теперь определенно выбираю продукт этого города для распространения в иранских домах.
        Он может быть уникальным.
        
        Характеристики ковров ручной работы в связи с увеличением количества видов ковров ручной работы на рынке
        Иран и мир должны учитывать несколько моментов при покупке этого продукта.
        помещать. Иранские ковры ручной работы обычно бывают трех форматов: танрадж, хасти и афшан.
        Он тканый, из которых наиболее популярен бергамотовый тип. Этот тип маргинального ковра
        Он широкий вокруг и имеет овальные и круглые узоры посередине. Также будьте осторожны
        Имейте в виду, что разница между коврами ручной работы и коврами машинного производства огромна.
        Чтобы ковры ручной работы очень красиво смотрелись издалека и вблизи
        Они очень яркие. Симметрия цвета – еще одна заметная особенность этого продукта.
        что добавляет ему красоты. С другой стороны, будьте осторожны с этим
        Ковры должны быть блестящими и гибкими, чтобы этот тип ковра был единственным ковром.
        При ходьбе и умывании становится во много раз красивее.
        
        Дизайн и рисунок ковра ручной работы превосходит качество ковра ручной работы при покупке.
        Этот продукт, еще один очень важный момент, который важен для клиентов, внимание
        Это связано с дизайном и ролью этого продукта. Будьте осторожны, если вы хотите ковер ручной работы
        Чтобы купить иранский, вы должны знать, что в целом дизайн и рисунок в ковре
        Иранский включает в себя следующее:
        
        Чтение учебника ковроткачества
        
        Дизайн и узор ковра ручной работы
        
        План шаха Аббаси
        
        Тонкий дизайн
        
        план распыления
        
        Бете Джаке дизайн
        
        дизайн дерева
        
        план охотничьего угодья
        
        конструкция рамы
        
        Туркменский и бухарский план
        
        Фаранг цветочный дизайн
        
        Дизайн рыбы Дахрам
        
        Алтарь дизайн
        
        План конфиденциальности
        
        Дизайн вазы
        
        дизайн Эли
        
        Геометрический дизайн
        
        План древностей и исламские постройки
        
        Адаптационный дизайн
        
        Сводный план
        
        Материалы, используемые в коврах ручной работы
        
        Одна из самых значимых вещей, обуславливающих популярность и популярность иранского ковра ручной работы.
        Материалы, используемые в этих коврах, отличаются высоким качеством.
        Они очень высокие и это немаловажно наряду с красотой изделия.
        Одними из материалов, используемых в основе и утке иранских ковров ручной работы, являются хлопок и шерсть.
        Возможно, этот тип ковра известен как шерстяной ковер. также
        Можно сказать, что у кочевников вместо пряжи используется шерсть.
        
        Виды ковров ручной работы Среди видов ковров ручной работы можно отметить следующие:
        
        Цельношелковый ковер: его ворс и ворс сотканы из высококачественной шелковой нити. Цветок
        Шелк: это еще один тип ковра или коврика ручной работы, который использовался в период границ и дверей.
        В его узорах вместо шерсти используется шелк. Шелковый напольный ковер
        : Другой тип ковра ручной работы сделан из шелка вместо шерсти.
        используется Sof: это еще один тип ковра и коврика ручной работы, у которого есть фон.
        Он состоит из плотной и тонкой ткани и имеет узоры в виде цветов и пушистых кустов. Ковер
        Как уже упоминалось, шелк ручной работы является одним из материалов, используемых в коврах.
        Иранский шелковый ковер ручной работы, безусловно, самый популярный ковер.
        Он высок и имеет много поклонников. В общем можно сказать ковер
        Ковры Тебриз и Кашан обычно изготавливаются из шерсти или шелка.
        Это позволило получить продукцию очень высокого качества. Также будьте осторожны
        Учитывая, что этот тип ковра сделан из шелка, цена, естественно, высока.
        Это выше, чем у других видов продукции.`,
      "herbal-text": `Экстракты являются одной из наиболее широко используемых форм использования растений. Сегодня в
        В Иране выращивают и используют в лечебных целях более 40 видов растений.
        используются Лечебные духи на самом деле являются запахами, отдушками или травяными эссенциями.
        Есть те, кто добавляет его в воду, это ароматические лекарства, которые
        Их запах может стимулировать рецепторы обонятельного нерва.
        Производство гормонов, температура тела, обмен веществ в организме, уровень гормонов стресса и т. д.
        Секс, защитная система организма, наши эмоциональные и физические мысли и поведение
        позволь им Эти ароматические вещества содержатся в экстрактах или маслах целебных растений.
        Это еще не все, стимулируя мозг и высвобождая нейротрансмиттеры, вызывающие состояния.
        В человеке особый менталитет и ощущение здоровья, эйфории, удовольствия и удовлетворения.
        они существуют Эти запахи могут уменьшить стресс и в некоторой степени боль.
        вызывают эмоциональное равновесие. Среди широко используемых спиртных напитков розовая вода, мятный спирт,
        Он упомянул Бахарнарадж и Биримашк пот.
        
        Пот тимьяна: обезболивающее - против простуды - тонизирующее средство для желудка - лечение грибковых заболеваний
        Кожа - противоотечное средство для носа и горла.
        
        Асто Ходус пот: Усилитель нервов - Лечение бронхита и колик - Понижение
        Лихорадочное и тонизирующее - противосудорожное и эпилептическое лечение нервных заболеваний.
        
        Ивовый пот: лечение сильных лихорадок и болей в половых органах - пожелтение кожи (желтуха) - очищение
        Кровь.
        
        Весенний апельсиновый сок: укрепляет мозг и нервную систему, бодрит и укрепляет сердце.
        
        Лимонный сок: против усталости - рвота при беременности - бронхит
        А судороги - антиконвульсии - лечение проблем с сердцем.
        
        Пот тысячелистника: против воспаления кишечника и желудка - против ревматизма и подагры - устраняет расстройства
        Менструация и менструальные боли.
        
        Свекольный пот: укрепление флебов, облегчение нервных расстройств, учащенное сердцебиение.
        
        Орегано: против коклюша и гриппа - отхаркивающее - ветрогонное - вяжущее - открывает кровеносные сосуды
        - Дезинфицирующие средства.
        
        Четыре холодных пота: анти-лихорадка-охлаждение желудка.
        
        Теплый пот: укрепление желудка - полезно для пищеварения - снятие дискомфорта
        кишечник
        
        Пот 40 растений: стимулятор желудка - помощь пищеварению - ветровка - против простуды -
        Против тошноты и рвоты.
        
        Пот хвоща: сильное мочегонное средство – выведение камней из почек и мочевого пузыря – желчный пузырь – очищение крови.
        
        Зудящий пот: против инфекции мочевыводящих путей - камнедробилка - против коклюша.
        
        Фенхелевый пот: ароматический - стимулирующий - ветрогонный - афродизиак - лечение геморроя
        А подагра - увеличение грудного молока.
        
        Потоотделение: против метеоризма - против кислого желудка - против инфекций - против паразитов - ветровка -
        Лечение осложнений после выхода из зависимости.
        
        Пот тмина: против ожирения - очиститель крови - против истерии и судорог - увеличение молока
        Матери - ветровка - пищеваритель - понизитель жира в крови.
        
        Яблочный уксус: похудение - пищевая добавка
        
        Экстракт валерианы: снотворное, болеутоляющее, укрепляющее сердце, аппетитное.
        
        Пот Шатре: против зуда, против желчи, укрепляет печень, бодрит, против метеоризма.
        Закуска.
        
        Экстракт пажитника: антисахарное, сексуальное усиление, бодрящий.
        
        Экстракт солодки: решающее средство при язве желудка и двенадцатиперстной кишки, против кашля и желчи.
        
        пот: антижировая кровь - для снижения холестерина - увеличение грудного молока -
        Лечение похудения
        
        Пот цикория: полезен для печени - против прыщей - против зуда - очиститель крови - восстановитель
        толстый
        
        Киалак пот: очиститель крови - профилактика последствий уровня холестерина - профилактика
        Сужение вен.
        
        Пот крапивы: решающий эффект в лечении кожи и кожных заболеваний - против жира и сахара в крови -
        Антигеморрагическое - сосудорасширяющее - мочегонное.
        
        Гульбахар пот: полезен для мягкости кожи рук и лица - тоник для желудка
        
        Пот шалфея: антидиабетическое - антиревматическое и диарейное - антисинуситное - антипаразитарное - анти-
        метеоризм
        
        Мохлаше пота: слабительное - тонизирующее - дезинтоксикационное - антиколическое - сильное противоядие, полезно для
        Проблемы со спиной, суставы мышц - укрепление желудка.
        
        случай пота: против кровотечения - вяжущее средство для кишечника - лечение диареи и геморроя - усиление роста волос -
        Анти-вредитель
        
        Мята перечная: против сердечной боли, изжоги, против метеоризма, ветровки, стимулятора желудка.
        дети`,
      "instruction-text": `Эта компания является одной из ведущих компаний в области экспорта настенной и напольной плитки.
        Эта компания в настоящее время продает в страны Центральной Азии, Ирак, Афганистан и
        Пакистан экспортирует.
        
        В целом цели этой компании с самого начала ее создания заключаются в достижении высшего качества,
        Вечность, установление доброго имени и постоянное поддержание достоинства и доверия между представителями и потребителями
        поставщиков, прибыльность не за счет снижения себестоимости продукции, а за счет повышения производительности,
        Сокращение потерь, непрерывное обучение и получение удовлетворения человеческих ресурсов по мнению этой компании
        Они являются одним из важных элементов производства и помимо этого непрерывная связь с
        Научные и производственные общества этой отрасли строительной индустрии были огромными. как результат
        Эта компания смогла соответствовать вышеуказанным целям и политикам в течение нескольких лет подряд.
        быть выбрана в качестве единицы выборки.
        
        Компания Pouyan Pasargad с момента своего основания уделяет особое внимание обеспечению наилучшего качества.
        и поэтому использует лучших производителей.
        
        Заводы-поставщики этой компании оснащены новейшим и современным оборудованием.
        который от итальянских компаний System-Intensa-Projecta-Siti
        B&T – Tsc был куплен. Эти компании обновляют печатающие устройства
        Цифровые высокопроизводительные гидравлические прессы, двухъярусные и одноярусные роликовые печи
        Этаж 88 метров в длину и 80,2 метра в ширину, ректифицированные машины, сортировка и т.д.
        Полностью автоматическая сортировка, оснащенная компьютерными системами управления
        Физические параметры, такие как размеры и деформация, могут позиционироваться
        Чтобы получить различие между отечественными и иностранными производителями`,
      "mineral-text": `Добыча или добыча полезных ископаемых к акту добычи ценных или других полезных ископаемых
        Говорят, что материалы поступают из земли и обычно из шахт. Материалы из этих месторождений
        добываются в том числе металлы, уголь, горючие сланцы, драгоценные камни, алмазы,
        Известняк, известняк, соляная порода, золото, серебро, поташ, песок, глина и другие материалы
        сделано Добыча полезных ископаемых для получения любого материала, который нельзя получить с помощью
        Выращены с помощью сельскохозяйственных процессов, искусственно в лаборатории или на заводе.
        производится, это необходимо. В более полном определении добыча полезных ископаемых включает в себя добычу любых
        Невозобновляемый ресурс, такой как нефть, природный газ или даже вода.
        
        
        Горняк с 90 кг серы, которые он принес со дна вулкана Иджен
        несет сам Добыча камня и металлов с доисторических времен
        Человек готов. Сегодняшние процессы добычи полезных ископаемых включают поиск тела
        Шахты, анализ потенциальной прибыли найденной шахты, добыча материалов дела
        Мнение и окончательное восстановление земли после закрытия шахты.
        
        
        Простая карта действующих шахт мира. Добыча полезных ископаемых, как в период деятельности
        Шахта и после ее закрытия, как правило, по разрушительному воздействию на окружающую среду
        листья Поэтому в большинстве стран мира действуют правила, направленные на снижение этого
        Отрицательные эффекты были одобрены. Вопрос безопасности труда также давно
        что настораживает и новые методы значительного улучшения в области безопасности
        Мины последовали.`,
      "nuts-text": `Сухофрукты одни из самых вкусных и любимых всеми блюд, сухофрукты в кусочках
        Некоторые фрукты, такие как виноград, сливы, ягоды, абрикосы и косточки, сушат
        После того, как эти фрукты высохнут и потеряют воду, количество сахара и немного
        Другие свойства увеличиваются. Орехи богаты полезными питательными веществами, такими как
        Полезные для сердца ненасыщенные жиры, белки, витамины и минералы
        Является.`,
      language: "язык",
      contact: "свяжитесь с нами",
    },
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  resources,
  lng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
