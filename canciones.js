// --- BASE DE DATOS DE NUESTRA MÚSICA ---
const playlist = [
    {
        nombre: "Apocalypse - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dfed999f959177dfc4f33cdc",
        link: "https://open.spotify.com/track/1WTlony1MLK4u5OaG8uTLg"
    },
    {
        nombre: "Afterlife - Avenged Sevenfold",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0233c52ca8309741c6999ca742",
        link: "https://open.spotify.com/track/7zAt4tdL44D3VuzsvM0N8n"
    },
    {
        nombre: "Til Kingdom Come - Coldplay",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e0362c225863f6ae2432651",
        link: "https://open.spotify.com/track/1wQXj5bgxyZQ2XmE2X9s6n"
    },
    {
        nombre: "Love - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ae18ed3e8c0b2f82d0eaf08c",
        link: "https://open.spotify.com/track/5tyznRXlcIx0XlQ7S8iCMW"
    },
    {
        nombre: "Soñé - En Vivo - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0272e3de3eeba9e298a4fd0f27",
        link: "https://open.spotify.com/track/2VhJ4nrPorAbySEgO4V0BS"
    },
    {
        nombre: "Quiero Perderme Contigo - José José",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029cc7382f4f9c88d095c6056e",
        link: "https://open.spotify.com/track/1nbte2bCwsxqioAhzo68aE"
    },
    {
        nombre: "Querer Querernos - Canserbero",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b67647d776568c8aa90c889d",
        link: "https://open.spotify.com/track/6d3q0F9VNtdxQUTVlRcet6"
    },
    {
        nombre: "Fly Away From Here - Aerosmith",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0236051875634a4833119cb4b8",
        link: "https://open.spotify.com/track/5PxQhGYkbGXzjOLaUfAYMf"
    },
    {
        nombre: "And I Love Her - Kurt Cobain",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4c50ce025b39993dea03d71",
        link: "https://open.spotify.com/track/7x4b0UccXSKBWxWmjcrG2T"
    },
    {
        nombre: "Training Wheels - Melanie Martinez",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fba13f993c51c1985756c668",
        link: "https://open.spotify.com/track/3EGW6TGGbdk6Ys1Y3HU3lj"
    },
    {
        nombre: "At My Worst - Pink Sweat$",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023dfbf6dd3d342394f6b63091",
        link: "https://open.spotify.com/track/0ri0Han4IRJhzvERHOZTMr"
    },
    {
        nombre: "Locos - León Larregui",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021e6305a13127f54112add82c",
        link: "https://open.spotify.com/track/3GSMdtJphymHEsR8K9jT5Q"
    },
    {
        nombre: "Brillas - León Larregui",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f7ab99711c56782832b38504",
        link: "https://open.spotify.com/track/0SRddBTphQwQcfqw4Br1uX"
    },
    {
        nombre: "Como Tú (Magic Music Box) - León Larregui",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024d24286fe308f3b163df142b",
        link: "https://open.spotify.com/track/05neYxc9nmlxJ7uTOZPlnq"
    },
    {
        nombre: "Labios Rotos - En Vivo Desde México / 2010 - Zoé",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0272e3de3eeba9e298a4fd0f27",
        link: "https://open.spotify.com/track/1nULBrlzWatdcjA2ZctIMv"
    },
    {
        nombre: "Te quiero - Hombres G",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d05dadebbef07e6f55971e74",
        link: "https://open.spotify.com/track/5ULNuAoAozLAc721tRcPbX"
    },
    {
        nombre: "Amor Completo - Mon Laferte",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025eebf3f8ec6e9807105f3151",
        link: "https://open.spotify.com/track/00kIWJu9IHiQ6i0qJAU0Z9"
    },
    {
        nombre: "Paraíso Lunar - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0233b019ec69a4a43fd2c61bd1",
        link: "https://open.spotify.com/track/7uMBJGgc3QWdDQWBtBoPzj"
    },
    {
        nombre: "Extraños - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7b7157d868abef6aaf352e6",
        link: "https://open.spotify.com/track/1ZlBHkvF6NgMuoXTbAvJT9"
    },
    {
        nombre: "Nightmare - Avenged Sevenfold",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c34064a3c5e4a25892a091f3",
        link: "https://open.spotify.com/track/4UEo1b0wWrtHMC8bVqPiH8"
    },
    {
        nombre: "The Night We Met - Lord Huron",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b4916183f769aca218acb85f",
        link: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU"
    },
    {
        nombre: "Disfruto - Carla Morrison",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7b804e0b10518b9083e798f",
        link: "https://open.spotify.com/track/6UR5tB1wVm7qvH4xfsHr8m"
    },
    {
        nombre: "Brillo Mio - Caloncho",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025579acbfd4242774781042b2",
        link: "https://open.spotify.com/track/7eCDfoEl8UGeWqcpRO5lgz"
    },
    {
        nombre: "Cupid's Chokehold / Breakfast in America - Gym Class Heroes",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02faa6560290393ee2057a6581",
        link: "https://open.spotify.com/track/2Lhdl74nwwVGOE2Gv35QuK"
    },
    {
        nombre: "Únicos - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0230b531f6856407232b5de5eb",
        link: "https://open.spotify.com/track/4IMBNHCtJWAAqEoOktyl3a"
    },
    {
        nombre: "00:00 - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bc859959b14c83e70b7346e1",
        link: "https://open.spotify.com/track/1o1O7nDie7zzsdHKZxhgQD"
    },
    {
        nombre: "Duality - Slipknot",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026b3463e7160d333ada4b175a",
        link: "https://open.spotify.com/track/61mWefnWQOLf90gepjOCb3"
    },
    {
        nombre: "Brooklyn Baby - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f8d13d33b7a341869ee2338b",
        link: "https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz"
    },
    {
        nombre: "Symphony Of Destruction - Megadeth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027b178f928742be1492c6fba2",
        link: "https://open.spotify.com/track/51TG9W3y9qyO8BY5RXKgnZ"
    },
    {
        nombre: "Cherry Waves - Deftones",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fdf04b824d53ee302180b5e5",
        link: "https://open.spotify.com/track/70L6nHORQsblY813yNqUR3"
    },
    {
        nombre: "Change (In the House of Flies) - Deftones",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025c53799f473fa3e1a48c00ed",
        link: "https://open.spotify.com/track/51c94ac31swyDQj9B3Lzs3"
    },
    {
        nombre: "Ángel - Elefante",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02033b8c6b300fb711d4d7b499",
        link: "https://open.spotify.com/track/2rYjkYQWpn66nf5Ihk7SHJ"
    },
    {
        nombre: "Lovers Rock - TV Girl",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e1bc1af856b42dd7fdba9f84",
        link: "https://open.spotify.com/track/6dBUzqjtbnIa1TwYbyw5CM"
    },
    {
        nombre: "Pretty Boy - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025aa30ba7fff59083baccc773",
        link: "https://open.spotify.com/track/7IL8PSVwLOJxqYne6azxQv"
    },
    {
        nombre: "The Adults Are Talking - The Strokes",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3f1ba3de4659708c25d0f39",
        link: "https://open.spotify.com/track/5ruzrDWcT0vuJIOMW7gMnW"
    },
    {
        nombre: "I Wanna Be Yours - Arctic Monkeys",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ae1c4c5c45aabe565499163",
        link: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n"
    },
    {
        nombre: "Promises - Megadeth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029ce39d341464f1b624716601",
        link: "https://open.spotify.com/track/196rNjJkKTjsk2NTEtJKLq"
    },
    {
        nombre: "Electric Love - BØRNS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cc2cf912462d8ae4ef856434",
        link: "https://open.spotify.com/track/2GiJYvgVaD2HtM8GqD9EgQ"
    },
    {
        nombre: "So Fine - Guns N' Roses",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292d21aef6c0d288cc4c05973",
        link: "https://open.spotify.com/track/2lU2VI066HaPGyKTh6ANvI"
    },
    {
        nombre: "Run Away - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0208a4a1e307802da27797734f",
        link: "https://open.spotify.com/track/36LeuwAt5xiX6eIUWBc7Eo"
    },
    {
        nombre: "Everlong - Foo Fighters",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024bc9bcdbdc9ac34e37d8b6bb",
        link: "https://open.spotify.com/track/5UWwZ5lm5PKu6eKsHAGxOk"
    },
    {
        nombre: "Hold the Line - TOTO",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02105ef588df1ef91bfa811f94",
        link: "https://open.spotify.com/track/4aVuWgvD0X63hcOCnZtNFA"
    },
    {
        nombre: "Every Breath You Take - The Police",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c8e97cafeb2acb85b21a777e",
        link: "https://open.spotify.com/track/1JSTJqkT5qHq8MDJnJbRE1"
    },
    {
        nombre: "Luna - En Vivo - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0272e3de3eeba9e298a4fd0f27",
        link: "https://open.spotify.com/track/7b3k8I1fncAzbk9PHnLkbX"
    },
    {
        nombre: "Instant Crush (feat. Julian Casablancas) - Daft Punk;Julian Casablancas",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b9b36b0e22870b9f542d937",
        link: "https://open.spotify.com/track/2cGxRwrMyEAp8dEbuZaVv6"
    },
    {
        nombre: "Stand By Me - Ben E. King",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c155b31ab9e86a3d96359811",
        link: "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
    },
    {
        nombre: "Sacrifice - London After Midnight",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0263ff2f950052543a31676caf",
        link: "https://open.spotify.com/track/4EJjwH5VKFYfhjji1lDmiH"
    },
    {
        nombre: "Sparks - Coldplay",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029164bafe9aaa168d93f4816a",
        link: "https://open.spotify.com/track/7D0RhFcb3CrfPuTJ0obrod"
    },
    {
        nombre: "Let The Light In (feat. Father John Misty) - Lana Del Rey;Father John Misty",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0259ae8cf65d498afdd5585634",
        link: "https://open.spotify.com/track/4qG7hWhljsqqENL5PaLA2z"
    },
    {
        nombre: "I Don't Want to Miss a Thing - From 'Armageddon' Soundtrack - Aerosmith",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02da8d92affd796f7e20af7375",
        link: "https://open.spotify.com/track/225xvV8r1yKMHErSWivnow"
    },
    {
        nombre: "About A Girl - Nirvana",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0256072fea6785a3ad2d24237c",
        link: "https://open.spotify.com/track/55yvzYuvJYG2RUEnMK78tr"
    },
    {
        nombre: "love u - Shye",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029aa731e8861200571db596a2",
        link: "https://open.spotify.com/track/4pxBGvdDoLLYtzs2Z8AC6e"
    },
    {
        nombre: "LOVE IS (NOT) EASY - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff0a2b6de1c61b7f02bcbc2c",
        link: "https://open.spotify.com/track/3ejn1yIKNeTkrgpo1JkeFE"
    },
    {
        nombre: "A Little Piece of Heaven - Avenged Sevenfold",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0233c52ca8309741c6999ca742",
        link: "https://open.spotify.com/track/1BLfQ6dPXmuDrFmbdfW7Jl"
    },
    {
        nombre: "Amtrak - Los Retros",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0243722f278fb0e84c259a5f57",
        link: "https://open.spotify.com/track/5F6ekGcdu623mkhTVgk64Z"
    },
    {
        nombre: "Tarde - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0230b531f6856407232b5de5eb",
        link: "https://open.spotify.com/track/3EcsBKooLv8jotNKmuYQyd"
    },
    {
        nombre: "Scary Love - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b6ac98a52f62d5cb473da40",
        link: "https://open.spotify.com/track/6TA5aymvVrtiPVbuAwmPIc"
    },
    {
        nombre: "Vibes - Chase Atlantic",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022b87612a35b00d1475a0d331",
        link: "https://open.spotify.com/track/0AIRuNLJPz613ByB1k2W5o"
    },
    {
        nombre: "Heavenly - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fd275af89cec73d6287f9cbf",
        link: "https://open.spotify.com/track/1Bh0UzthW8pKEnYg7v40Oa"
    },
    {
        nombre: "Dusk Till Dawn (feat. Sia) - Radio Edit - ZAYN;Sia",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022898dd297362decb2ae8b6f4",
        link: "https://open.spotify.com/track/3e7sxremeOE3wTySiOhGiP"
    },
    {
        nombre: "Good Looking - Suki Waterhouse",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0210542e1524cbfe41bdb82ad3",
        link: "https://open.spotify.com/track/0j3mqDTK4Z6lvrLzFCUUz6"
    },
    {
        nombre: "Youngblood - 5 Seconds of Summer",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0217745f08b79f421ad2176966",
        link: "https://open.spotify.com/track/2iUXsYOEPhVqEBwsqP70rE"
    },
    {
        nombre: "death bed (coffee for your head) - Powfu;beabadoobee",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02bf01fd0986a195d485922167",
        link: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx"
    },
    {
        nombre: "Staring - Tipling Rock",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02edbb4fdbd873767ddac155ef",
        link: "https://open.spotify.com/track/0lBOxYabLsCS8Hg5ZRaz7p"
    },
    {
        nombre: "Ser Parte - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0230b531f6856407232b5de5eb",
        link: "https://open.spotify.com/track/3ONxFMHXamgGmYLPHcwECM"
    },
    {
        nombre: "My Kind of Woman - Mac DeMarco",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029d377496c6bc8724b521222d",
        link: "https://open.spotify.com/track/6jgkEbmQ2F2onEqsEhiliL"
    },
    {
        nombre: "Can I Call You Tonight? - Dayglow",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025160eaecb31b739ea1c2eaa5",
        link: "https://open.spotify.com/track/61OJxhoY3Ix50rYVKo8zRK"
    },
    {
        nombre: "Fernando - ABBA",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0270f7a1b35d5165c85b95a0e0",
        link: "https://open.spotify.com/track/4BM8yJ0PzBi2ZewpMTOxtx"
    },
    {
        nombre: "Hold On, We're Going Home - Drake;Majid Jordan",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a463abe56cf67ca7f6b8cdd1",
        link: "https://open.spotify.com/track/6jdOi5U5LBzQrc4c1VT983"
    },
    {
        nombre: "Bacalar - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213d8c172a1fbc16a7fb59b5a",
        link: "https://open.spotify.com/track/2DrMtWsICvlJ2X4QBqasNk"
    },
    {
        nombre: "Algún día (Cap. 1) - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e6773c98fbd4ac7c47c0ebc6",
        link: "https://open.spotify.com/track/63fVIeGTRSncciWivjqruM"
    },
    {
        nombre: "It's You - Ali Gatie",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02035175b6195ab45090054066",
        link: "https://open.spotify.com/track/5DqdesEfbRyOlSS3Tf6c29"
    },
    {
        nombre: "Someone To Spend Time With - Los Retros",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a1f060b534d1d9c859acc73f",
        link: "https://open.spotify.com/track/6SE4JAo7T8C7XkFka5bbga"
    },
    {
        nombre: "Happy Together - The Turtles",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020ffc5e905138b8ee65981dd4",
        link: "https://open.spotify.com/track/1JO1xLtVc8mWhIoE3YaCL0"
    },
    {
        nombre: "Please Please Please Let Me Get What I Want - 2005 Remaster - Deftones",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258df6181041c38412db1b253",
        link: "https://open.spotify.com/track/4HpIh5wWfkq5sSuCLLSwYR"
    },
    {
        nombre: "Strawberries & Cigarettes - Troye Sivan",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c9eb4c87e1d7f5353908b712",
        link: "https://open.spotify.com/track/3afkJSKX0EAMsJXTZnDXXJ"
    },
    {
        nombre: "Diet Mountain Dew - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026b850da1e1301dba85b08681",
        link: "https://open.spotify.com/track/2vtmY2mSccRzKGjtcHSzI3"
    },
    {
        nombre: "Fin De Semana - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029404efae45313dd341da5acc",
        link: "https://open.spotify.com/track/390zQV72aph1h6DC34P0j0"
    },
    {
        nombre: "Creep - Radiohead",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ec548c00d3ac2f10be73366d",
        link: "https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r"
    },
    {
        nombre: "Born To Die - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02959280fee07d485cb5b56fe7",
        link: "https://open.spotify.com/track/487OPlneJNni3NWC8SYqhW"
    },
    {
        nombre: "Come As You Are - Nirvana",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02444f118a9126af9e1483dcc0",
        link: "https://open.spotify.com/track/4P5KoWXOxwuobLmHXLMobV"
    },
    {
        nombre: "Eres - Café Tacvba",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02624927252564ef4625307897",
        link: "https://open.spotify.com/track/6kdCN6gTWLcLxmLXoUcwuI"
    },
    {
        nombre: "Bésame Mucho - Live - Zoé",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02662dfa4202fe9408304b3981",
        link: "https://open.spotify.com/track/04YCoK8SspDy9Gv52aUrz8"
    },
    {
        nombre: "A Tout Le Monde - Megadeth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021d9c7b91334880fb1700dc00",
        link: "https://open.spotify.com/track/77Rn1FxBGeqDUXTD2QFeCb"
    },
    {
        nombre: "Cámara Lenta - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029942a0c06ee649d50b7b22ec",
        link: "https://open.spotify.com/track/2SD2CdWAyC3Xo57QTsm8KI"
    },
    {
        nombre: "Love Me Harder - Ariana Grande;The Weeknd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246d1ba2fae86b9c5702533e7",
        link: "https://open.spotify.com/track/5J4ZkQpzMUFojo1CtAZYpn"
    },
    {
        nombre: "Película (Cap. 3) - Siddhartha",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e6773c98fbd4ac7c47c0ebc6",
        link: "https://open.spotify.com/track/3Y7PAH3mOqLGSMp5O5uZFj"
    },
    {
        nombre: "Como Queremos - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029655602ed79447bd3d5a91a4",
        link: "https://open.spotify.com/track/0Zcd8XxgKeRNQAUIpsHr7c"
    },
    {
        nombre: "Gunslinger - Avenged Sevenfold",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0233c52ca8309741c6999ca742",
        link: "https://open.spotify.com/track/7MOQrtXMNImAq5TrPZzC0w"
    },
    {
        nombre: "Corazón Atómico - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b8e3472fbc48bce859650f9",
        link: "https://open.spotify.com/track/0axbGyJYPGhzVaxzm6cHcq"
    },
    {
        nombre: "Respiro (Cap. 8) - Siddhartha;Ximena Sariñana",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e6773c98fbd4ac7c47c0ebc6",
        link: "https://open.spotify.com/track/5O612Iau2nHDR3yv8jAFXs"
    },
    {
        nombre: "De la Noche a la Mañana - Elefante",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02366b39607999ac39405f187e",
        link: "https://open.spotify.com/track/2xezpH0r1pT7kcx2TPNsZ0"
    },
    {
        nombre: "Renacer - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021eada1495a082da8a6c3e516",
        link: "https://open.spotify.com/track/2Wt26eFSwT5bSZV6QmtmEB"
    },
    {
        nombre: "Telephones - Vacations",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022eb4d117b70ea7ac2c24e316",
        link: "https://open.spotify.com/track/0JIMT9gzLIIz0esKLyjbKf"
    },
    {
        nombre: "Buscándote (Cap. 7) - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e6773c98fbd4ac7c47c0ebc6",
        link: "https://open.spotify.com/track/5GEmAmoA6VJUg11Z6iDhjf"
    },
    {
        nombre: "Dreams - 2004 Remaster - Fleetwood Mac",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0257df7ce0eac715cf70e519a7",
        link: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz"
    },
    {
        nombre: "Te necesito - Luis Miguel",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023bc5251815626cf22fc71b30",
        link: "https://open.spotify.com/track/0svWUjefj6RBlIQxA3VCvx"
    },
    {
        nombre: "Shades Of Cool - Lana Del Rey",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026b55c2ee78c5a47393ff8e7a",
        link: "https://open.spotify.com/track/4VSg5K1hnbmIg4PwRdY6wV"
    },
    {
        nombre: "Shepherd of Fire - Avenged Sevenfold",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02519aa8418dd9446d7438c68b",
        link: "https://open.spotify.com/track/1fQaoh3imrMunWVZh5kf90"
    },
    {
        nombre: "Home Sweet Home - Mötley Crüe",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c9dcca18dd8a9e562490baa8",
        link: "https://open.spotify.com/track/1kvq7ksGQWSyRysYYNd6lu"
    },
    {
        nombre: "Sad Girl - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f8d13d33b7a341869ee2338b",
        link: "https://open.spotify.com/track/11MyiSGZSYSmhhqwGUTtAq"
    },
    {
        nombre: "Follow You - Bring Me The Horizon",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0290b88187a9831d91f2438927",
        link: "https://open.spotify.com/track/6lFUdRItQEsEuD7dSINL47"
    },
    {
        nombre: "Here With Me - d4vd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c4ddcc23f630f4c2728a5255",
        link: "https://open.spotify.com/track/4woDw3TGiJV3DSbeKmMzpK"
    },
    {
        nombre: "El Chico - Siddhartha",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0230b531f6856407232b5de5eb",
        link: "https://open.spotify.com/track/13e0qeKohVHdIGMFKjfogd"
    },
    {
        nombre: "pretty, heavy - The Haunting",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fa8c95761408bbbaf17f0f0a",
        link: "https://open.spotify.com/track/53K3B7zaBumyoulvTrzsHc"
    },
    {
        nombre: "Always - Bon Jovi",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025f66fbeaff0725997250591c",
        link: "https://open.spotify.com/track/2RChe0r2cMoyOvuKobZy44"
    },
    {
        nombre: "Can I Call You Tonight? - Dayglow",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025160eaecb31b739ea1c2eaa5",
        link: "https://open.spotify.com/track/64lsIF5pw0sJY0gV5kz0RN"
    },
    {
        nombre: "If I Killed Someone For You - Alec Benjamin",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02459d675aa0b6f3b211357370",
        link: "https://open.spotify.com/track/0WHi11uzahqpEtPGYCW6oQ"
    },
    {
        nombre: "Flightless Bird, American Mouth - Iron & Wine",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02816243514f01ac30d0932622",
        link: "https://open.spotify.com/track/1fEGtTZjrjJW8eUeewnNJR"
    },
    {
        nombre: "HER - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff0a2b6de1c61b7f02bcbc2c",
        link: "https://open.spotify.com/track/5i7g9wTIruXgWKvA83BXlk"
    },
    {
        nombre: "Church - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02601eb33454f13f26db9084e4",
        link: "https://open.spotify.com/track/7bbYT48HWWIbL3YKmtMNzn"
    },
    {
        nombre: "Shinunoga E-Wa - Fujii Kaze",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02731953ff97a79644f6eb7b4e",
        link: "https://open.spotify.com/track/0o9zmvc5f3EFApU52PPIyW"
    },
    {
        nombre: "Around the Fur - Deftones",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b1129853982ea17845d4eb6",
        link: "https://open.spotify.com/track/3Fwe3XoPOiyWUPYdBKMTqV"
    },
    {
        nombre: "My Own Summer (Shove It) - Deftones",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b1129853982ea17845d4eb6",
        link: "https://open.spotify.com/track/1158ckiB5S4cpsdYHDB9IF"
    },
    {
        nombre: "OUT THE ROOF - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8eff9197b35ef5dc2a03070",
        link: "https://open.spotify.com/track/5bqzaOn8ggUOuVoxSvqbQd"
    },
    {
        nombre: "SLIDE - Chase Atlantic",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d8eff9197b35ef5dc2a03070",
        link: "https://open.spotify.com/track/6F0brdSvvG1wMhXWGhjL5a"
    },
    {
        nombre: "we fell in love in october - girl in red",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d6839051c4760457e1a60b2a",
        link: "https://open.spotify.com/track/6IPwKM3fUUzlElbvKw2sKl"
    },
    {
        nombre: "Talking to the Moon - Bruno Mars",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028a9eb5a1f701d1d367a5ea10",
        link: "https://open.spotify.com/track/161DnLWsx1i3u1JT05lzqU"
    },
    {
        nombre: "Horns - Bryce Fox",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0278bca86730234b83dab90919",
        link: "https://open.spotify.com/track/49qEikVVPd6PgH6S2pbXjZ"
    },
    {
        nombre: "Call Me - Blondie",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028cf86a9be38868f1d73cdb58",
        link: "https://open.spotify.com/track/4qO03RMQm88DdpTJcxlglY"
    },
    {
        nombre: "17 (feat. Joshua and DK of SEVENTEEN) - Pink Sweat$;SEVENTEEN",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02098b5abdc8238bc1cfce20c5",
        link: "https://open.spotify.com/track/5SifNhmUO8iSEoWFQU8kxH"
    },
    {
        nombre: "Flaco - Mon Laferte",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ac6e52ed084e8209691f208f",
        link: "https://open.spotify.com/track/3HMYsT5mnqQ57tVjvqlETb"
    },
    {
        nombre: "Him & I (with Halsey) - G-Eazy;Halsey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02046527a9c176f7c2916f3530",
        link: "https://open.spotify.com/track/5k38wzpLb15YgncyWdTZE4"
    },
    {
        nombre: "Gangsta's Paradise - Coolio;L.V.",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027438996f6fe67c59d75d4e43",
        link: "https://open.spotify.com/track/1DIXPcTDzTj8ZMHt3PDt8p"
    },
    {
        nombre: "skins - The Haunting",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cbde10c80838d32e494a47ab",
        link: "https://open.spotify.com/track/44Y0uTXcrn42ZyDptUOrpW"
    },
    {
        nombre: "American Money - BØRNS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cc2cf912462d8ae4ef856434",
        link: "https://open.spotify.com/track/4AewKenHXKBt643p473xCk"
    },
    {
        nombre: "Stuck with Me - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b6ac98a52f62d5cb473da40",
        link: "https://open.spotify.com/track/6eMeqiSoQYtM8u3vvfth21"
    },
    {
        nombre: "Falling - Chase Atlantic",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027fc4b0598b8cbed5a492d370",
        link: "https://open.spotify.com/track/1Ey7PyLGNxvJNvzrxPMLMV"
    },
    {
        nombre: "Sex, Drugs, Etc. - Beach Weather",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020789569bca0861e64a1ecc77",
        link: "https://open.spotify.com/track/7DbdUf8aHSYoliSjO6LZv6"
    },
    {
        nombre: "Me, Myself & I - G-Eazy;Bebe Rexha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0241fe2e2b8cc092bead58f8f5",
        link: "https://open.spotify.com/track/40YcuQysJ0KlGQTeGUosTC"
    },
    {
        nombre: "Quiero Ver - Café Tacvba",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a13d990077d055a9e8808344",
        link: "https://open.spotify.com/track/7s41ZGjQB5Ur8T0fQlk5uM"
    },
    {
        nombre: "From the Start - Good Kid",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020cc0a55b4aa153628e9e4dda",
        link: "https://open.spotify.com/track/6BJHsLiE47Sk0wQkuppqhr"
    },
    {
        nombre: "Vía Láctea - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b8e3472fbc48bce859650f9",
        link: "https://open.spotify.com/track/1nquycJ4zLhrT23rwtH5Wj"
    },
    {
        nombre: "Nunca - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b8e3472fbc48bce859650f9",
        link: "https://open.spotify.com/track/5sVAwLeJ4AGeCYwWzPiyII"
    },
    {
        nombre: "Let You Break My Heart Again - Live - Laufey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020355ec718cdd12960cb8eac0",
        link: "https://open.spotify.com/track/1BwUH7WAF6xfThHXH5ATdC"
    },
    {
        nombre: "La Historia - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7b7157d868abef6aaf352e6",
        link: "https://open.spotify.com/track/3tfXj3yEMpLPeuNf0pKn8v"
    },
    {
        nombre: "Can't Help Falling in Love - Elvis Presley",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b184226408f981e3dd17c606",
        link: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
    },
    {
        nombre: "bittersweet teeth - poptropicaslutz!",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0247f2ebd5ed46affdbe12f167",
        link: "https://open.spotify.com/track/4bqrTmjvXJXF97k0UuFg1k"
    },
    {
        nombre: "(They Long To Be) Close To You - Carpenters",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02242cec3f8fc8c7fee302aac2",
        link: "https://open.spotify.com/track/50q2aUjWoTn6CJIfSPRJQA"
    },
    {
        nombre: "Low Tide Love - Tipling Rock",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0287ce02b9672d88122b454e87",
        link: "https://open.spotify.com/track/0c9jfZf7kDbguXFbTWlGso"
    },
    {
        nombre: "On Melancholy Hill - Gorillaz",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02661d019f34569f79eae9e985",
        link: "https://open.spotify.com/track/0q6LuUqGLUiCPP1cbdwFs3"
    },
    {
        nombre: "Out of My League - Fitz and The Tantrums",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025e145eb24e282b9554501a27",
        link: "https://open.spotify.com/track/2Z5wXgysowvzl0nKGNGU0t"
    },
    {
        nombre: "Mind Over Matter (Reprise) - Young the Giant",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021f66d9c6790a9a1a2418ec57",
        link: "https://open.spotify.com/track/77KnJc8o5G1eKVwX5ywMeZ"
    },
    {
        nombre: "One - Metallica",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fe896727e3db1027ed72d885",
        link: "https://open.spotify.com/track/5IX4TbIR5mMHGE4wiWwKW0"
    },
    {
        nombre: "Girl Of My Dreams (with SUGA of BTS) - Juice WRLD;SUGA;BTS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027459992b444de38842b9bee7",
        link: "https://open.spotify.com/track/59bY27SZQ4r25o02vqOhgC"
    },
    {
        nombre: "November Rain - Guns N' Roses",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e44963b8bb127552ac761873",
        link: "https://open.spotify.com/track/3YRCqOhFifThpSRFJ1VWFM"
    },
    {
        nombre: "Who - LAUV;BTS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022c0e1e9e1fd1e7b132da1606",
        link: "https://open.spotify.com/track/0pSqYDTjY1Xt86usTQslAx"
    },
    {
        nombre: "Supermassive Black Hole - Muse",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0228933b808bfb4cbbd0385400",
        link: "https://open.spotify.com/track/3lPr8ghNDBLc2uZovNyLs9"
    },
    {
        nombre: "Don't Cry (Original) - Guns N' Roses",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e44963b8bb127552ac761873",
        link: "https://open.spotify.com/track/2N2yrmodOnVF10mKvItC9P"
    },
    {
        nombre: "505 - Arctic Monkeys",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020c8ac83035e9588e8ad34b90",
        link: "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp"
    },
    {
        nombre: "Reflections - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b6ac98a52f62d5cb473da40",
        link: "https://open.spotify.com/track/2xql0pid3EUwW38AsywxhV"
    },
    {
        nombre: "Endlessly - Muse",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0248cf14e1e805e59e001b10ea",
        link: "https://open.spotify.com/track/6qofnbCUIA08MT4hvV7wQ0"
    },
    {
        nombre: "Nightclubs in Heaven - Henry Morris",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e4be0bd1893c921396b8e87f",
        link: "https://open.spotify.com/track/66iox4Zx8x9VmE0ON7jueN"
    },
    {
        nombre: "Hate The Way (feat. blackbear) - G-Eazy;blackbear",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ae038f215e76d7e5b7b2755c",
        link: "https://open.spotify.com/track/3QGppKBPd9gHOgHJzRbVIw"
    },
    {
        nombre: "So Far Away - Avenged Sevenfold",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c34064a3c5e4a25892a091f3",
        link: "https://open.spotify.com/track/7Hr1Ignop7cymbE3FbOtXa"
    },
    {
        nombre: "Azul - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b618801325dd9c5a994cefa3",
        link: "https://open.spotify.com/track/1HM9uVbB4DVQh0QlwY7W6v"
    },
    {
        nombre: "Where's My Love - SYML",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f975be33979060df30ac573a",
        link: "https://open.spotify.com/track/1B62o4CbdL9ckGvwsz2cgn"
    },
    {
        nombre: "Let's Get Lost (feat. Devon Baldwin) - G-Eazy;Devon Baldwin",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a45d08547c8333a2247a16c6",
        link: "https://open.spotify.com/track/5DSr1NMci58MEgS20vivSL"
    },
    {
        nombre: "Stop Crying Your Heart Out - Oasis",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0228294fd45c7cbb278fd4418d",
        link: "https://open.spotify.com/track/5YciOakY5dB5dULkiLdCaf"
    },
    {
        nombre: "Rocket Queen - Guns N' Roses",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0221ebf49b3292c3f0f575f0f5",
        link: "https://open.spotify.com/track/0xaNdYwK8ZF3cHSjraQGC0"
    },
    {
        nombre: "You're All I Want - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02963454e08e5e9def7e8cd204",
        link: "https://open.spotify.com/track/0EUw3ZK8Ti14t6R6FOP8Ty"
    },
    {
        nombre: "Wolf River - Reignwolf",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024142e5630f77522829ed2fbb",
        link: "https://open.spotify.com/track/6ZmfA7VqjrH3NlmGdKSqCl"
    },
    {
        nombre: "Hotel California - 2013 Remaster - Eagles",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d666181ad183bf7efc7f4105",
        link: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv"
    },
    {
        nombre: "HEAVEN AND BACK - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff0a2b6de1c61b7f02bcbc2c",
        link: "https://open.spotify.com/track/5dewQ7ojISR32NAYNHFYWC"
    },
    {
        nombre: "Girl of My Dreams - Guti",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ef78aaefd39e48a3d2ee7931",
        link: "https://open.spotify.com/track/0fxrED7Uh7e0waswxKW3IM"
    },
    {
        nombre: "Burning Love - Elvis Presley",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028eb2fc8f0f2e218e2262ca6d",
        link: "https://open.spotify.com/track/7zMUCLm1TN9o9JlLISztxO"
    },
    {
        nombre: "Can't Take My Eyes off You - Frankie Valli",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02328ba1034774366865d78ac1",
        link: "https://open.spotify.com/track/0bfvHnWWOeU1U5XeKyVLbW"
    },
    {
        nombre: "Amor de Siempre - Cuco",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b1c091e32aad5310ebbdd558",
        link: "https://open.spotify.com/track/6q4zA7hWKFF6wsJ64DWdwU"
    },
    {
        nombre: "Compartir - Carla Morrison",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0244e51cce207287378b796084",
        link: "https://open.spotify.com/track/50Jd7tX7dMu79Oknn7sXSW"
    },
    {
        nombre: "Souvenir - León Larregui",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f7ab99711c56782832b38504",
        link: "https://open.spotify.com/track/2pb0aDEgDJ3PfWW1clmvSS"
    },
    {
        nombre: "Si Me Voy (with The Marías) - Cuco;The Marías",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0214a012da5638f895eaefffa5",
        link: "https://open.spotify.com/track/6GiCszfL4D2GlCU8tFU3sR"
    },
    {
        nombre: "Rue Vieille Du Temple - León Larregui",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aaec8345b3aa1c2b1d505462",
        link: "https://open.spotify.com/track/4ViWSkl1it95PjoGn1VkHG"
    },
    {
        nombre: "Me Hace Falta (Cap. 2) - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e6773c98fbd4ac7c47c0ebc6",
        link: "https://open.spotify.com/track/7EAr8k0WiV9ybItof6utFj"
    },
    {
        nombre: "Enamorado tuyo - El Cuarteto De Nos",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e32b600cf149063d811341e3",
        link: "https://open.spotify.com/track/35LdDKNMwvKftENaj1WIwF"
    },
    {
        nombre: "Seize the Day - Avenged Sevenfold",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f996112a93f587975046dc42",
        link: "https://open.spotify.com/track/7HKRWMTErKh56EIBeFcmdf"
    },
    {
        nombre: "Beast and the Harlot - Avenged Sevenfold",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f996112a93f587975046dc42",
        link: "https://open.spotify.com/track/6FVYwnVrnAEIRnY3bHJb46"
    },
    {
        nombre: "Nothing Else Matters - Metallica",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c1a13209dfe146aef3296e34",
        link: "https://open.spotify.com/track/0nLiqZ6A27jJri2VCalIUs"
    },
    {
        nombre: "Master Of Puppets - Metallica",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cad4832cb7b5844343278daa",
        link: "https://open.spotify.com/track/2MuWTIM3b0YEAskbeeFE1i"
    },
    {
        nombre: "Put Your Head On My Shoulder - Paul Anka",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02686c29818cd37e585c48e7ef",
        link: "https://open.spotify.com/track/2DpJ9T2RVRanZcYFHKOAfA"
    },
    {
        nombre: "This Side of Paradise - Coyote Theory",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d45404b4c5a5444cb06c9f7b",
        link: "https://open.spotify.com/track/79EkGysjP2dL5GdpeQjRxT"
    },
    {
        nombre: "Locked out of Heaven - Bruno Mars",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0249055dce3554e72e82082980",
        link: "https://open.spotify.com/track/3w3y8KPTfNeOKPiqUTakBh"
    },
    {
        nombre: "My Love Mine All Mine - Mitski",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234f21d3047d85440dfa37f10",
        link: "https://open.spotify.com/track/3vkCueOmm7xQDoJ17W1Pm3"
    },
    {
        nombre: "De hielo - El Cuarteto De Nos",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029f5248c5be0af950ac81900c",
        link: "https://open.spotify.com/track/2eqbY9whZVv4cnwvzbDAfD"
    },
    {
        nombre: "A Sky Full of Stars - Coldplay",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e5a95573f1b91234630fd2cf",
        link: "https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ"
    },
    {
        nombre: "No Other Heart - Mac DeMarco",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b395acedffa5fa8e7696aea2",
        link: "https://open.spotify.com/track/2aaCNg42RA74s0EmHTBqS7"
    },
    {
        nombre: "Sway - Michael Bublé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff7f3fcf067de4c02b70eac0",
        link: "https://open.spotify.com/track/2ajUl8lBLAXOXNpG4NEPMz"
    },
    {
        nombre: "Seeing Stars - BØRNS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025c02d5dd4513671fd92e6b3d",
        link: "https://open.spotify.com/track/2CzXAeABCmbEB52ZziuMsH"
    },
    {
        nombre: "Somethin' Stupid - Frank Sinatra;Nancy Sinatra",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023e2331ff09f59ea3c87fe5d6",
        link: "https://open.spotify.com/track/4feXcsElKIVsGwkbnTHAfV"
    },
    {
        nombre: "Clarividad - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021eada1495a082da8a6c3e516",
        link: "https://open.spotify.com/track/0hF1wnq9h5KzonxoOml4rP"
    },
    {
        nombre: "Fantasma - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bf159639cb007db12ea47013",
        link: "https://open.spotify.com/track/27tR3saB1q7kFlZsnjdLu7"
    },
    {
        nombre: "Hasta Que Tú Me Quieras - Esteman",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0257b7dd404944928bc590dc22",
        link: "https://open.spotify.com/track/78PMNyj9nQ0GzWCgWLpWUr"
    },
    {
        nombre: "Cardúmenes - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b7ba6e8d16816c57ab86ca63",
        link: "https://open.spotify.com/track/7ApL61GWPoAaSAvzye8PW3"
    },
    {
        nombre: "Late Night Walks - Teddy Vogel",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0232b0b384216d08378d4e195f",
        link: "https://open.spotify.com/track/6aNhdTO95TOWpkdunBJPFK"
    },
    {
        nombre: "Do Better - Cuco",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0265d444a19f72771cba82cb00",
        link: "https://open.spotify.com/track/3hMvsYZjU1pFH0xoywKXA9"
    },
    {
        nombre: "Infinity - Jaymes Young",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026b66accda0ff6a75cdf12a2c",
        link: "https://open.spotify.com/track/1SOClUWhOi8vHZYMz3GluK"
    },
    {
        nombre: "Wonderwall - Oasis",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0285e5dcc05cc216a10f141480",
        link: "https://open.spotify.com/track/4yBiZFLXn0n9AUJ5sWO88k"
    },
    {
        nombre: "Blue - Teddy Vogel",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027559b3038433bbea73aa1097",
        link: "https://open.spotify.com/track/5DfiKuikN0eSin43ytjDHQ"
    },
    {
        nombre: "Keep on Loving You - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fe8d8631cbee4deb2179e684",
        link: "https://open.spotify.com/track/5VYBergVrUDcb8QyEg70cF"
    },
    {
        nombre: "Obsessed With You - Teddy Vogel",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02139396205190deed3d5b5a57",
        link: "https://open.spotify.com/track/2VswH9YFA0kxFEKPygQlQM"
    },
    {
        nombre: "Midnight - Teddy Vogel",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ed1c8983c1f34200a5eafda",
        link: "https://open.spotify.com/track/6mebbHbeJCM7bT6vSeaK6a"
    },
    {
        nombre: "Acapulco - Siddhartha;Emmanuel Horvilleur",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f2c103eb5198d77c5efe1edb",
        link: "https://open.spotify.com/track/3FvQlLlke7bl8phCe1LJgy"
    },
    {
        nombre: "Cinnamon Girl - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02879e9318cb9f4e05ee552ac9",
        link: "https://open.spotify.com/track/2mdEsXPu8ZmkHRRtAdC09e"
    },
    {
        nombre: "Dancing in the Crowd - Dyar Pshder",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e57ce52f5009bd7c61d42b9f",
        link: "https://open.spotify.com/track/5qBQIy7aczEtJgRTDOC7vy"
    },
    {
        nombre: "a song for a girl i only texted - xenx",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a71620676ca59bc58498726f",
        link: "https://open.spotify.com/track/6HoMrBXvRmunF2l00bKkAT"
    },
    {
        nombre: "Dance Class - Good Kid",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027ed97aca3c1a55933da06cfa",
        link: "https://open.spotify.com/track/5YQ6pweUFlPP3czvutzRLD"
    },
    {
        nombre: "Radio - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02959280fee07d485cb5b56fe7",
        link: "https://open.spotify.com/track/3taCbWWTilb7eNMsAzOBq4"
    },
    {
        nombre: "Pretty Boy - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0236a7b44e8382e6165c235dac",
        link: "https://open.spotify.com/track/3cF2uv9ljbCiFHEGL23aNo"
    },
    {
        nombre: "Right Here - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02601eb33454f13f26db9084e4",
        link: "https://open.spotify.com/track/2KtS31kaWNHs12Q5B43Ixh"
    },
    {
        nombre: "Within You, Within Me - Meltt",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021605c07acc88a55bc7684d66",
        link: "https://open.spotify.com/track/77evpfqHmmSklsFpo8wLCB"
    },
    {
        nombre: "Sunflower - Rex Orange County",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e89fffbc825d52c018a2357e",
        link: "https://open.spotify.com/track/7h2nmmoWDi2UpfYKLKWLYB"
    },
    {
        nombre: "Some - Steve Lacy",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c0c6c1cfac7464b6211587d",
        link: "https://open.spotify.com/track/4riDfclV7kPDT9D58FpmHd"
    },
    {
        nombre: "Maneater - Daryl Hall & John Oates",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cfe4163cbb6d12f3ec15898e",
        link: "https://open.spotify.com/track/7j74lucZ59vqN67Ipe2ZcY"
    },
    {
        nombre: "Adventure of a Lifetime - Coldplay",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028ff7c3580d429c8212b9a3b6",
        link: "https://open.spotify.com/track/69uxyAqqPIsUyTO8txoP2M"
    },
    {
        nombre: "You Got It - Roy Orbison",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024516a5d74bac51f3afcba85a",
        link: "https://open.spotify.com/track/0RteYQqW1AOq3JNL0yMWYt"
    },
    {
        nombre: "Love Again - Meltt",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b3075667daa0d0fbf01fb85a",
        link: "https://open.spotify.com/track/56hp2ikFv3vZJgZXtViF2N"
    },
    {
        nombre: "Only in Your Eyes - Meltt",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021605c07acc88a55bc7684d66",
        link: "https://open.spotify.com/track/2SGDxeH9stHj9bYbqtClHw"
    },
    {
        nombre: "99.5 - TV Girl",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028e956c4154ba8b2f7be13443",
        link: "https://open.spotify.com/track/5lTSeN1WSAv6YVBgrIUBav"
    },
    {
        nombre: "Legendary Lovers - TV Girl",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021556d166d0ed059b34a00e1b",
        link: "https://open.spotify.com/track/37FVobI6ZrZwD7QmXTHRR3"
    },
    {
        nombre: "Kingston - Faye Webster",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ac4ebd092fa2cf210e4c8023",
        link: "https://open.spotify.com/track/5WbfFTuIldjL9x7W6y5l7R"
    },
    {
        nombre: "Someone To You - BANNERS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028455d5342074e52373ad7e45",
        link: "https://open.spotify.com/track/14BH4qO7pgCmIe6mgLKOK3"
    },
    {
        nombre: "Shine A Light - BANNERS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d42cb0901afdf20521c3883",
        link: "https://open.spotify.com/track/2nZco160YsPJdiTPq396aq"
    },
    {
        nombre: "Hold On - Chord Overstreet",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c60473419a4ce96822541181",
        link: "https://open.spotify.com/track/5vjLSffimiIP26QG5WcN2K"
    },
    {
        nombre: "Give You the World - Steve Lacy",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026938311000a0e494a26986e5",
        link: "https://open.spotify.com/track/0J119Oas2ox6JTTHUGZxHN"
    },
    {
        nombre: "War Of Hearts - Ruelle",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023a5b5ae9b257903b75947e3c",
        link: "https://open.spotify.com/track/4R8BdwRidxAWaYyFNU00P1"
    },
    {
        nombre: "Dark Paradise - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02959280fee07d485cb5b56fe7",
        link: "https://open.spotify.com/track/2Y115i0IhELJhyyftvoSFt"
    },
    {
        nombre: "Those Eyes - New West",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021bb5dc21200bfc56d8f7ef41",
        link: "https://open.spotify.com/track/50x1Ic8CaXkYNvjmxe3WXy"
    },
    {
        nombre: "Sweet - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dfed999f959177dfc4f33cdc",
        link: "https://open.spotify.com/track/6ilc4vQcwMPlvAHFfsTGng"
    },
    {
        nombre: "Say Something - A Great Big World;Christina Aguilera",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0252744973b0719cda89549292",
        link: "https://open.spotify.com/track/6Vc5wAMmXdKIAM7WUoEb7N"
    },
    {
        nombre: "Disco - Surf Curse",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a7060ab3ca5dc05fc9552e66",
        link: "https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK"
    },
    {
        nombre: "You Don't Own Me (feat. G-Eazy) - SAYGRACE;G-Eazy",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022da2cda6fe3a9fa9ab49b252",
        link: "https://open.spotify.com/track/6KI1ZpZWYAJLvmVhCJz65G"
    },
    {
        nombre: "Lonely - Akon",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0275efdb59b1ab02452a7d59e0",
        link: "https://open.spotify.com/track/6ls5ulRydoPE7oWGPGBqFA"
    },
    {
        nombre: "Loverboy - A-Wall",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022c025e1e5585b4bdcd0b303f",
        link: "https://open.spotify.com/track/3CboywxfJIgvHqi2FF4exb"
    },
    {
        nombre: "rises the moon - Liana Flores",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02effe26bfdf05230a512f68f2",
        link: "https://open.spotify.com/track/51Grh1RyUDcMBbpuyUIUHI"
    },
    {
        nombre: "Die With A Smile - Lady Gaga;Bruno Mars",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0282ea2e9e1858aa012c57cd45",
        link: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe"
    },
    {
        nombre: "Aves del Tiempo (Cap.5) - Siddhartha",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e6773c98fbd4ac7c47c0ebc6",
        link: "https://open.spotify.com/track/5oEUqeHXAQMNPiti0Iv8Hl"
    },
    {
        nombre: "Monitor - Volován",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0293053188ba06d972c13f2023",
        link: "https://open.spotify.com/track/7on4qNO1Iu5EX61mD80Cgv"
    },
    {
        nombre: "El baile y el salón - Café Tacvba",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023b9211139eb247b12f6ba6c5",
        link: "https://open.spotify.com/track/63QpuNHIZ8APaK37LkV8Xd"
    },
    {
        nombre: "A Tout Le Monde - Remastered 2004 - Megadeth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023171798d5cfc745f0ba24c84",
        link: "https://open.spotify.com/track/6olS0TmHmsGr0hXtcBsiVM"
    },
    {
        nombre: "00:00 - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b7ba6e8d16816c57ab86ca63",
        link: "https://open.spotify.com/track/7l4cSfrED7RrtT0t5CSOzv"
    },
    {
        nombre: "Nothing's Gonna Hurt You Baby - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f20d15ff288e94492f7097eb",
        link: "https://open.spotify.com/track/7cs7MLtAWvsdf3w5kBvfK2"
    },
    {
        nombre: "Stargazing - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0236a7b44e8382e6165c235dac",
        link: "https://open.spotify.com/track/0VF7YLIxSQKyNiFL3X6MmN"
    },
    {
        nombre: "Compass - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b6ac98a52f62d5cb473da40",
        link: "https://open.spotify.com/track/0YNtAadZvKBBEFARtfoCV8"
    },
    {
        nombre: "Heaven Is a Bedroom - TV Girl",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0232f5fec7a879ed6ef28f0dfd",
        link: "https://open.spotify.com/track/0REaf0xqIOxEXGZgOXfrCW"
    },
    {
        nombre: "Adore You - Harry Styles",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225180571abce9472f61bd722",
        link: "https://open.spotify.com/track/3jjujdWJ72nww5eGnfs2E7"
    },
    {
        nombre: "So Beautiful - DPR IAN",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b7fd1b534c02e2426b63b345",
        link: "https://open.spotify.com/track/6syar8JKCt3R9ZBl11zmgI"
    },
    {
        nombre: "Twisted - MISSIO",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020363a0cc090d7df4c8270489",
        link: "https://open.spotify.com/track/4TQcARE7Fd58akNhr3N7AE"
    },
    {
        nombre: "Just One Day - BTS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ab9433cc4b9cda9431be879a",
        link: "https://open.spotify.com/track/6t7WriKgVszATnrdBKSUAf"
    },
    {
        nombre: "Safe and Sound - Capital Cities",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b03e92f4e7dcd9db3a06c869",
        link: "https://open.spotify.com/track/5JVbvCHX10U2pLa5DEqGav"
    },
    {
        nombre: "As It Was - Harry Styles",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0282ce362511fb3d9dda6578ee",
        link: "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e"
    },
    {
        nombre: "Meet Me Halfway - Black Eyed Peas",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020bd44f5ff9ecc99f7770acc5",
        link: "https://open.spotify.com/track/0fXQkrDzvDQiZW4sxSkRUl"
    },
    {
        nombre: "Pumped Up Kicks - Foster The People",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02121d5f92cf90576907dfb1e5",
        link: "https://open.spotify.com/track/7w87IxuO7BDcJ3YUqCyMTT"
    },
    {
        nombre: "vampires - The Haunting",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fa8c95761408bbbaf17f0f0a",
        link: "https://open.spotify.com/track/4TalGrCmAZCawkcvfg3Ldw"
    },
    {
        nombre: "Patria Independiente - Peter Jone$",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cc6b4adf09c983c661f43b89",
        link: "https://open.spotify.com/track/7wQr3svCw9ENyxyRFE9uFs"
    },
    {
        nombre: "LOVE IS (NOT) EASY - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff0a2b6de1c61b7f02bcbc2c",
        link: "https://open.spotify.com/track/7pfMEwz79Hrc2IOVMWsrJS"
    },
    {
        nombre: "M. - Anıl Emre Daldal",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d7ddae05b16e763bc82b69a5",
        link: "https://open.spotify.com/track/6wfb4nI2Vih263JqC8WSoW"
    },
    {
        nombre: "Astronomy - Conan Gray",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02561bebcde13f57644b5550b2",
        link: "https://open.spotify.com/track/2JN3ugW1cEahbYw0I5mw5U"
    },
    {
        nombre: "Video Games - Lana Del Rey",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02959280fee07d485cb5b56fe7",
        link: "https://open.spotify.com/track/24jvD83UgLmrdGjhWTFslY"
    },
    {
        nombre: "K. - Cigarettes After Sex",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02dfed999f959177dfc4f33cdc",
        link: "https://open.spotify.com/track/1FWsomP9StpCcXNWmJk8Cl"
    },
    {
        nombre: "Cry - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028324db1ae37be249aed887e7",
        link: "https://open.spotify.com/track/3p4hRhMcb6ch8OLtATMaLw"
    },
    {
        nombre: "Better in the Dark - Jordana;TV Girl",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ebf1802f3aedc62b8f6339d3",
        link: "https://open.spotify.com/track/3SeDS5sSoWnwAZvVgkdKzf"
    },
    {
        nombre: "Tus Pupilas - Siddhartha",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0230b531f6856407232b5de5eb",
        link: "https://open.spotify.com/track/4Kuy0PZKVMQ28gL6we3iwR"
    },
    {
        nombre: "All I Need - Radiohead",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02de3c04b5fc750b68899b20a9",
        link: "https://open.spotify.com/track/5Qv2Nby1xTr9pQyjkrc94J"
    },
    {
        nombre: "Interstate Love Song - 2019 Remaster - Stone Temple Pilots",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fc90a8ed9924435d62235aa8",
        link: "https://open.spotify.com/track/6qLEOZvf5gI7kWE63JE7p3"
    },
    {
        nombre: "Dreamy Eyes - Johnny Tillotson",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df6cab7b1d854d72134a03c3",
        link: "https://open.spotify.com/track/4J0JFGn4avOMbTAFPKBbpF"
    },
    {
        nombre: "Te Miro Para Ver Si Me Ves Mirarte - Surfistas Del Sistema",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0255456974a869bc73356498a0",
        link: "https://open.spotify.com/track/6QyduPrJh0VrXpQAZ1lxOt"
    },
    {
        nombre: "Never Be the Same - Camila Cabello",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02652c9f55dfbf3cfe1800daea",
        link: "https://open.spotify.com/track/4eWQlBRaTjPPUlzacqEeoQ"
    },
    {
        nombre: "Dumb - Nirvana",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c4f52ef8782f0e8ede4c1aaf",
        link: "https://open.spotify.com/track/5gRcv46AMTrosmTOqrOV3Q"
    },
    {
        nombre: "In Silence - Janet Suhh",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fbc7b709e87060114a1dce53",
        link: "https://open.spotify.com/track/2vZZljISFmbnd2SlMBdEAH"
    },
    {
        nombre: "Baby I'm Yours - Arctic Monkeys",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fc5f23d71de7ad824565f94c",
        link: "https://open.spotify.com/track/0SzvmWfOhoxZVGrmvb56YL"
    },
    {
        nombre: "Speed of Sound - Coldplay",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024e0362c225863f6ae2432651",
        link: "https://open.spotify.com/track/7clUVcSOtkNWa58Gw5RfD4"
    },
    {
        nombre: "Love Hurts - Nazareth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0285bc3b24dd834a6dfbb876da",
        link: "https://open.spotify.com/track/11lz5IuUrg2qVuNrGPRVq2"
    },
    {
        nombre: "Heartbeat (BTS World Original Soundtrack) - BTS",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a52fb84b83e665fe7559b19c",
        link: "https://open.spotify.com/track/4ZISkGo0j60iyLbme2rAkC"
    },
    {
        nombre: "Turning Page - Sydney Rose",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cfff7e904a4549ec27dbefab",
        link: "https://open.spotify.com/track/2QFyOnJfJ49OnNgMvKXvTM"
    },
    {
        nombre: "Possibility - Lykke Li",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0227351e4d0f5df8492e2a8139",
        link: "https://open.spotify.com/track/1sFbPuShR6R8v6vSMkx02x"
    },
    {
        nombre: "Marry You - Bruno Mars",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027039c1c841fc3dfa2ad8a0d8",
        link: "https://open.spotify.com/track/6SKwQghsR8AISlxhcwyA9R"
    },
    {
        nombre: "Rude - MAGIC!",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d4e193f09d2e3d732a82e105",
        link: "https://open.spotify.com/track/6RtPijgfPKROxEzTHNRiDp"
    },
    {
        nombre: "The Devil in I - Slipknot",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eed722040c6810f7a7da93ea",
        link: "https://open.spotify.com/track/6vhuve6vceQE6yNCcK2rct"
    },
    {
        nombre: "Psychosocial - Slipknot",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e7fbc0883149094912559f2c",
        link: "https://open.spotify.com/track/3RAFcUBrCNaboRXoP3S5t1"
    },
    {
        nombre: "ocean eyes - Billie Eilish",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022cafcdd985630d72594ecc49",
        link: "https://open.spotify.com/track/2uIX8YMNjGMD7441kqyyNU"
    },
    {
        nombre: "Dreaming of You - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f20d15ff288e94492f7097eb",
        link: "https://open.spotify.com/track/5DZNSYxhFA1WA9WEJg9TNY"
    },
    {
        nombre: "Huracanes - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b7ba6e8d16816c57ab86ca63",
        link: "https://open.spotify.com/track/1yZgpMuX3epcV1U6hjDAI1"
    },
    {
        nombre: "Cámara - Siddhartha",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0230b531f6856407232b5de5eb",
        link: "https://open.spotify.com/track/3o3VGTUFZwT2xJtO65CMvv"
    },
    {
        nombre: "Hey Lover! - Wabie",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0291ee4ab5782c9b197766ca02",
        link: "https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd"
    },
    {
        nombre: "Tú - maye",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e535e8147235d96bb734ba41",
        link: "https://open.spotify.com/track/1jecO8NeYLsVWVptITz4c1"
    },
    {
        nombre: "Like You Do - Joji",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f733e50079838090eebc3fe4",
        link: "https://open.spotify.com/track/4vgU9MGJwhgBEtlO8mMN49"
    },
    {
        nombre: "Iris - The Goo Goo Dolls",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ce5e0c89b768384d45d9b0fa",
        link: "https://open.spotify.com/track/6Qyc6fS4DsZjB2mRW9DsQs"
    },
    {
        nombre: "We Belong Together - Ritchie Valens",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027723fdc89d8e25e65aa6730d",
        link: "https://open.spotify.com/track/7caj6X6NMX3tlhWnu1du6V"
    },
    {
        nombre: "Kiss Me - Sixpence None The Richer",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cfc5eea6cfd77e89ed3ac5a4",
        link: "https://open.spotify.com/track/754kgU5rWscRTfvlsuEwFp"
    },
    {
        nombre: "Let Me Down Slowly - Alec Benjamin",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02459d675aa0b6f3b211357370",
        link: "https://open.spotify.com/track/2qxmye6gAegTMjLKEBoR3d"
    },
    {
        nombre: "Nerves - DPR IAN",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b7fd1b534c02e2426b63b345",
        link: "https://open.spotify.com/track/2qwplOI7upNGwg2mLVrraw"
    },
    {
        nombre: "Chachachá - Jósean Log",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a8659bf75fee7dc8c01afc67",
        link: "https://open.spotify.com/track/6aommJFM8i3iT4inKuDSXh"
    },
  
    {
        nombre: "HEAVEN AND BACK - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ff0a2b6de1c61b7f02bcbc2c",
        link: "https://open.spotify.com/track/1JdQibdvxgcrB8Rv1KFndw"
    },
    {
        nombre: "Heaven - Julia Michaels",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213bc4e3027f6cc128ba19f35",
        link: "https://open.spotify.com/track/1T575AhHueYinKSDflEsGK"
    },
    {
        nombre: "I Think They Call This Love - Elliot James Reay",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a24a9c872775ae61137e23f3",
        link: "https://open.spotify.com/track/6ezlyxouJ9WcHU8WdtHlgk"
    },
    {
        nombre: "This Is How It Feels (with Laufey) - d4vd;Laufey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0264fa1bda999f4fbd2b7c4bb7",
        link: "https://open.spotify.com/track/6BQPRUFGHsgtNYJxuwhktR"
    },
    {
        nombre: "W.D.Y.W.F.M? - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c91ed3bc3c8d484f532fab2f",
        link: "https://open.spotify.com/track/3vooOYHU0Fi3ViCG7Ozh0Y"
    },
    {
        nombre: "Fallen Star - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286a26fe844d212d650debca2",
        link: "https://open.spotify.com/track/60F6pgM6H6miNr5AmjxwjL"
    },
    {
        nombre: "Eternal Summer - The Strokes",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3f1ba3de4659708c25d0f39",
        link: "https://open.spotify.com/track/6IRzBP4gVoV4D2zHmocoWy"
    },
    {
        nombre: "What You Were - The Drums",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024c27d14a19e67dac23661031",
        link: "https://open.spotify.com/track/7DzzfrIaYnIvzkI898X79J"
    },
    {
        nombre: "Mine - Bazzi",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
        link: "https://open.spotify.com/track/7uzmGiiJyRfuViKKK3lVmR"
    },
    {
        nombre: "All I Need To Hear - The 1975",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02286ee394cca4f95479d00b4c",
        link: "https://open.spotify.com/track/42Q00bTTgyQhPE2FVWaoJE"
    },
    {
        nombre: "Cry Baby - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025260c62db020e5861a51556d",
        link: "https://open.spotify.com/track/0EfsDEYaSjGYd66Pr881nq"
    },
    {
        nombre: "Circles - Post Malone",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0291bf597d2ed7528de53f71be",
        link: "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb"
    },
    {
        nombre: "Moral of the Story (feat. Niall Horan) - Ashe;Niall Horan",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0280b423563e0a4673965dcce1",
        link: "https://open.spotify.com/track/2NWVdwbd2hPIzC2lyf4y63"
    },
    {
        nombre: "I See Stars - Michael Barrow & the Tourists;ysabelle",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024a9402fe1c993267b10d2e99",
        link: "https://open.spotify.com/track/2amp1fmzWoaKTYShyDJwee"
    },
    {
        nombre: "Die For You - The Weeknd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a048415db06a5b6fa7ec4e1a",
        link: "https://open.spotify.com/track/0awWj9Wzj375IL5etqa1Dk"
    },
    {
        nombre: "Snowman - Sia",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a75e532b61dac3ddafd022ef",
        link: "https://open.spotify.com/track/7uoFMmxln0GPXQ0AcCBXRq"
    },
    {
        nombre: "Hot Rod - Dayglow",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025160eaecb31b739ea1c2eaa5",
        link: "https://open.spotify.com/track/5euumi7eqEgmxvCIJw2pSp"
    },
    {
        nombre: "I Love You So - The Walters",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a9ab24f62c01f4bd4a08571e",
        link: "https://open.spotify.com/track/4SqWKzw0CbA05TGszDgMlc"
    },
    {
        nombre: "Daddy Issues - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025260c62db020e5861a51556d",
        link: "https://open.spotify.com/track/5E30LdtzQTGqRvNd7l6kG5"
    },
    {
        nombre: "Something About You - Eyedress;Dent May",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024641ca89cd79b552d77145dd",
        link: "https://open.spotify.com/track/6RiiSy9GzSwiyDEJDiMuKe"
    },
    {
        nombre: "sining (feat. Jay R) - Dionela;Jay R",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0219f16592da6f918a04ef6b7c",
        link: "https://open.spotify.com/track/1imaIe1NEAaWnLF0BY0V6F"
    },
    {
        nombre: "I Won't Give Up - Jason Mraz",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246e379c721504777a62bd9b8",
        link: "https://open.spotify.com/track/5ivF4eQBqJiVL5IAE9jRyl"
    },
    {
        nombre: "Someday - OneRepublic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e2889865b7b05955c1d3bcf",
        link: "https://open.spotify.com/track/6aDsgHPZsMztSbZernzlF8"
    },
    {
        nombre: "Teach Me How To Love - Shawn Mendes",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0237a5a19e52f8260b3b158e55",
        link: "https://open.spotify.com/track/5LZtB6nxvjIhUoElp3Zqk0"
    },
    {
        nombre: "Cake By The Ocean - DNCE",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d0a75346badc30c8b845be9",
        link: "https://open.spotify.com/track/76hfruVvmfQbw0eYn1nmeC"
    },
    {
        nombre: "All of Me - John Legend",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bdcc3b587b5249932bc415c2",
        link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a"
    },
    {
        nombre: "Just the Way You Are - Bruno Mars",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028a9eb5a1f701d1d367a5ea10",
        link: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ"
    },
    {
        nombre: "Fleeting Dream (Was It True) - PARIS The Prince",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025f146d88204700d8fbfdf510",
        link: "https://open.spotify.com/track/2LNCKwPSzLoy9N9S6aWVKf"
    },
    {
        nombre: "Formidable - Twenty One Pilots",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c693d6ed6dff0d48cf15c23",
        link: "https://open.spotify.com/track/2jfyY5GIc7wsYVIrCnjblC"
    },
    {
        nombre: "Go Your Own Way - 2004 Remaster - Fleetwood Mac",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02813da91820fd194cbee5bdce",
        link: "https://open.spotify.com/track/07GvNcU1WdyZJq3XxP0kZa"
    },
    {
        nombre: "Seven Wonders - 2017 Remaster - Fleetwood Mac",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aaba065944cd82a6f15c86b6",
        link: "https://open.spotify.com/track/1VN2vWSkSmMKOhxr8lHzSx"
    },
    {
        nombre: "Sex, Drugs, Etc. - Beach Weather",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02511b07369101734098b14b0d",
        link: "https://open.spotify.com/track/7MlDNspYwfqnHxORufupwq"
    },
    {
        nombre: "Don't Speak - No Doubt",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026ebd5e789646a833b8f7d4ba",
        link: "https://open.spotify.com/track/6urCAbunOQI4bLhmGpX7iS"
    },
    {
        nombre: "The World We Knew (Over And Over) - Frank Sinatra",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023e2331ff09f59ea3c87fe5d6",
        link: "https://open.spotify.com/track/62KZRwymXq9Rgm8Cm5UCfx"
    },
    {
        nombre: "Single - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025260c62db020e5861a51556d",
        link: "https://open.spotify.com/track/5Ma3BlNVDtn3JiwMEafSaq"
    },
    {
        nombre: "Dissolve - Absofacto;NITESHIFT",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028af82e1a1a66c0a4e731428d",
        link: "https://open.spotify.com/track/7pBrj5rt4SSxXwFKOyZfHR"
    },
    {
        nombre: "Dissolve - Absofacto;NITESHIFT",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028af82e1a1a66c0a4e731428d",
        link: "https://open.spotify.com/track/4gC3PmUCFHX1DxuKBpSAfc"
    },
    {
        nombre: "Everyone Adores You (at least I do) - Matt Maltese",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026230a85a940c9eeccd588a5c",
        link: "https://open.spotify.com/track/6klFWv2xDGeTDoiKTtx4hg"
    },
    {
        nombre: "Glue Song - beabadoobee",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3862aeefcb2f0860ef017e4",
        link: "https://open.spotify.com/track/3iBgrkexCzVuPy4O9vx7Mf"
    },
    {
        nombre: "Space Song - Beach House",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d1430224d631eaa5954f13c9",
        link: "https://open.spotify.com/track/7H0ya83CMmgFcOhw0UB6ow"
    },
    {
        nombre: "Karma Police - Radiohead",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c8b444df094279e70d0ed856",
        link: "https://open.spotify.com/track/63OQupATfueTdZMWTxW03A"
    },
    {
        nombre: "Say Yes To Heaven - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aa27708d07f49c82ff0d0dae",
        link: "https://open.spotify.com/track/6GGtHZgBycCgGBUhZo81xe"
    },
    {
        nombre: "Just the Two of Us - Grover Washington, Jr.;Bill Withers",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d8e0e065037b496212e554b7",
        link: "https://open.spotify.com/track/5fdNHVZHbWB1AaXk4RBGVD"
    },
    {
        nombre: "Strangers In The Night - 2008 Remastered - Frank Sinatra",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b81d66d1416afa139d12767b",
        link: "https://open.spotify.com/track/2F8DsV74G8roccHCegEAeE"
    },
    {
        nombre: "X's - Cigarettes After Sex",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02967004d2f641e38309a0b547",
        link: "https://open.spotify.com/track/4ImeysCxPlYmM4LRFp7z9f"
    },
    {
        nombre: "I'm Still in Love with You (feat. Sasha) - Sean Paul;Sasha;Jeremy Harding;Murray Elias",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c4f6d15d3d7569def9ef19fd",
        link: "https://open.spotify.com/track/2bskkv8iBlw9KJwXtckZmp"
    },
    {
        nombre: "Unchained Melody - The Righteous Brothers",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cd7530409d09802935c840f9",
        link: "https://open.spotify.com/track/2qhASBzpbFhPRtrnZ5lLnz"
    },
    {
        nombre: "Take My Breath Away - Love Theme from 'Top Gun' - Berlin",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b8f8d696810d68ce774e3a2f",
        link: "https://open.spotify.com/track/77Oww6V7jooOd7aNEMnFJ3"
    },
    {
        nombre: "I've Got You Under My Skin - Frank Sinatra",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d7720a6a8b713b833313f396",
        link: "https://open.spotify.com/track/74jklVKHYTmNMp0baGm6FB"
    },
    {
        nombre: "My Way - 2008 Remastered - Frank Sinatra",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b81d66d1416afa139d12767b",
        link: "https://open.spotify.com/track/2YkIDPL5lGhRhomCq4S2RO"
    },
    {
        nombre: "Aneurysm - Nirvana",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e1f5fcef5fb5f70aa0a717fc",
        link: "https://open.spotify.com/track/0Pie5DFAHHxpkONFUsAI6s"
    },
    {
        nombre: "Romantic Homicide - d4vd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0267481cd84cf4aca8625164fa",
        link: "https://open.spotify.com/track/1xK59OXxi2TAAAbmZK0kBL"
    },
    {
        nombre: "There She Goes - The La's",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020e42d457a15ef2f133976f6b",
        link: "https://open.spotify.com/track/4c6vZqYHFur11FbWATIJ9P"
    },
    {
        nombre: "What Would I Do? - Strawberry Guy",
        portada: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ba5c5d0971159a6e3299d78b",
        link: "https://open.spotify.com/track/5EJA7Rwkeuvm98CZg0XXNO"
    },
    {
        nombre: "Santa Ana - Smooth Ends",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aa283b29c35f32ce22b3f309",
        link: "https://open.spotify.com/track/3R1mpCoNa5oVrXRuBDxqq3"
    },
    {
        nombre: "No Surprises - Radiohead",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c8b444df094279e70d0ed856",
        link: "https://open.spotify.com/track/10nyNJ6zNy2YVYLrcwLccB"
    },
    {
        nombre: "Born To Die - Lana Del Rey",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02959280fee07d485cb5b56fe7",
        link: "https://open.spotify.com/track/4Ouhoi2lAhrLJKFzUqEzwl"
    },
    {
        nombre: "Never Have Enough - Los Retros",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0221487b6ac22311bb7fdcc77d",
        link: "https://open.spotify.com/track/3TafXdrCuhleb8sTg8R3Rk"
    },
    {
        nombre: "Call Out My Name - The Weeknd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b6505c9e982312c40f39cf21",
        link: "https://open.spotify.com/track/09mEdoA6zrmBPgTEN5qXmN"
    },
    {
        nombre: "Still Loving You - Scorpions",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b0d8dc07c6d21bb337b78b4",
        link: "https://open.spotify.com/track/7kjsCbksOZotNNHOvKsJJh"
    },
    {
        nombre: "Solo Tú - Los Retros",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02baf284db8bc362de18ac9e94",
        link: "https://open.spotify.com/track/6YbMkGhGkadLWnt2lIuHSz"
    },
    {
        nombre: "Could It Be I'm Falling In Love - Paul Stanley's Soul Station",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02619d3ee46f3004820b73c262",
        link: "https://open.spotify.com/track/4gyBqhC0RuN4tOYZUhjBNk"
    },
    {
        nombre: "You're The Love Of My Life - Sam Tompkins",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba282e5ca8d0b99b49f85bdd",
        link: "https://open.spotify.com/track/7Bub02pYClaj24yecaPzt5"
    },
    {
        nombre: "I Like Me Better - LAUV",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029ed5fcf212f05d55b1e61eae",
        link: "https://open.spotify.com/track/0EcQcdcbQeVJn9fknj44Be"
    },
    {
        nombre: "Mean It - LAUV;LANY",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022c0e1e9e1fd1e7b132da1606",
        link: "https://open.spotify.com/track/6mXdCcFnPKQznj4CmMRmHC"
    },
    {
        nombre: "My Favorite Part - Mac Miller;Ariana Grande",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e92f776279eaf45d14a33fd",
        link: "https://open.spotify.com/track/66wkCYWlXzSTQAfnsPBptt"
    },
    {
        nombre: "Can't Take My Eyes off You - Muse",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0222f091fb67c4a5f4067033ab",
        link: "https://open.spotify.com/track/3Y4m9Td603gbfMB86UNafs"
    },
    {
        nombre: "Entombed - Deftones",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0273652b7a0dc388dd1d044b69",
        link: "https://open.spotify.com/track/4bLCPfBLKlqiONo6TALTh5"
    },
    {
        nombre: "Orbit - Good Kid",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f2510ac15e01a353423a28a4",
        link: "https://open.spotify.com/track/4jB5OIHRWwiBQAQ81bp6Rj"
    },
    {
        nombre: "Metamodernity - Vansire",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234a91a2fad5a628c55811518",
        link: "https://open.spotify.com/track/4RGWHfQeJftd5XrP8JUgFj"
    },
    {
        nombre: "Resguardum Ether - León Larregui",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025be353af3e7d01599fbbda14",
        link: "https://open.spotify.com/track/6pEDb6J7p5NCatIULkDOwx"
    },
    {
        nombre: "Make You Feel My Love - Sleeping At Last",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0236fb97d9f9103a47e61e0a0b",
        link: "https://open.spotify.com/track/2NZEJxIUnsP18o2aNzeuZW"
    },
    {
        nombre: "Love Me Like You Used To - Lord Huron",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021c44a034e74f2d2ed84fd2cb",
        link: "https://open.spotify.com/track/0JfpIwZfcRwDzD6GRYzfKN"
    },
    {
        nombre: "Burn Fast - Bryce Fox",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0260724be8e7b0e5e17bf32ec0",
        link: "https://open.spotify.com/track/0dxe0Oxkyg1g5adbXrHlR8"
    },
    {
        nombre: "That I Miss You - Vansire",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0239a2cc5c8bf2b0c6448b7135",
        link: "https://open.spotify.com/track/7szBZqBJuj9eAC8HJ4CyTM"
    },
    {
        nombre: "Heart To Heart - Mac DeMarco",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022866217fb30f5428cd77fde4",
        link: "https://open.spotify.com/track/7EAMXbLcL0qXmciM5SwMh2"
    },
    {
        nombre: "a thousand years - Christina Perri",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023dea4a2ccd58ad1f8e4dbb03",
        link: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl"
    },
    {
        nombre: "Turning Page - Sleeping At Last",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0230eb992a82f895893f60375b",
        link: "https://open.spotify.com/track/2kfGoV9a5dbSKCNmUWH2ZF"
    },
    {
        nombre: "Congratulations (feat. Bilal) - Mac Miller;Bilal",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e92f776279eaf45d14a33fd",
        link: "https://open.spotify.com/track/1OubIZ0ARYCUq5kceYUQiO"
    },
    {
        nombre: "Blueberry Eyes (feat. SUGA of BTS) - MAX;SUGA",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029660ae57836f713884d86cbb",
        link: "https://open.spotify.com/track/5dn6QANKbf76pANGjMBida"
    },
    {
        nombre: "Holy Wars...The Punishment Due - 2004 Remix - Megadeth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02be9fa5a89479b6af481938a0",
        link: "https://open.spotify.com/track/5LyRtsQLhcXmy50VXhQXXS"
    },
    {
        nombre: "Vida En El Espejo - Enjambre",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0208b5853acded25e1b5ff5115",
        link: "https://open.spotify.com/track/2yThUakfNYwaToGaKJxKEK"
    },
    {
        nombre: "Te Miro Para Ver Si Me Ves Mirarte - Surfistas Del Sistema",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0255456974a869bc73356498a0",
        link: "https://open.spotify.com/track/6QyduPrJh0VrXpQAZ1lxOt"
    },
    {
        nombre: "Impacto - Enjambre;Denise Gutiérrez",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0266f128e383614b0aa4df5ebd",
        link: "https://open.spotify.com/track/5agpMV7rvg7Hf8IiX5kQXe"
    },
    {
        nombre: "No. 1 Party Anthem - Arctic Monkeys",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ae1c4c5c45aabe565499163",
        link: "https://open.spotify.com/track/5TTGoX70AFrTvuEtqHK37S"
    },
    {
        nombre: "El verdadero amor perdona - dueto con Prince Royce - Maná;Prince Royce",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02378f9769891c17741446a110",
        link: "https://open.spotify.com/track/3Z3ZUu41QYobvrKr494Vjs"
    },
    {
        nombre: "Moonlight - Chase Atlantic",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027fc4b0598b8cbed5a492d370",
        link: "https://open.spotify.com/track/0laLzrH5PsoA7HpGw2vCVh"
    },
    {
        nombre: "Tonight Is The Night I Die - Palaye Royale",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0283b4c84932d8231c9748f9ba",
        link: "https://open.spotify.com/track/417a1PceLb6Z5lnJaRrN07"
    },
    {
        nombre: "Ya No Vivo Por Vivir - Juan Gabriel;Natalia Lafourcade",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02374d004e5113497c05a66fd7",
        link: "https://open.spotify.com/track/5mahfoOSoSDgkLRI5MMHj7"
    },
    {
        nombre: "Middle of Somewhere - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025aa30ba7fff59083baccc773",
        link: "https://open.spotify.com/track/4e8zIDjctZ1DtUPZTraGzS"
    },
    {
        nombre: "A Little Death - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c91ed3bc3c8d484f532fab2f",
        link: "https://open.spotify.com/track/0Ot6e3wYVQQ1Us9PM977jE"
    },
    {
        nombre: "Is This Really Love? - d4vd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a48a6e3a1846038249c61537",
        link: "https://open.spotify.com/track/6NEfCu0Ei1IP2DsQosjFaA"
    },
    {
        nombre: "One More Dance - d4vd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a48a6e3a1846038249c61537",
        link: "https://open.spotify.com/track/4rhDZ5qvYYxaSIWLzCX1WL"
    },
    {
        nombre: "Paradise - The Neighbourhood",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029b6ac98a52f62d5cb473da40",
        link: "https://open.spotify.com/track/75iJMOH4oBobiRiBJVdw2m"
    },
    {
        nombre: "The Less I Know The Better - Tame Impala",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029e1cfc756886ac782e363d79",
        link: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ"
    },
    {
        nombre: "Don't (feat. RM) - eAeon;RM",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027606e1056c60ff26471545d9",
        link: "https://open.spotify.com/track/6KE3Fs6LMzi4hJI3eFqyLC"
    },
    {
        nombre: "Feel It (From “Invincible”) - d4vd",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a9da992c2ef398245027d654",
        link: "https://open.spotify.com/track/3SAga35lAPYdjj3qyfEsCF"
    },
    {
        nombre: "Ella Es Magia - Zoé",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021eada1495a082da8a6c3e516",
        link: "https://open.spotify.com/track/2oMfmic7Xd6ZaspWJiDblk"
    },
    {
        nombre: "Tú Y Yo - Luis Miguel",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02780268564c65ca302786e6ff",
        link: "https://open.spotify.com/track/5QEelAij2rdNm6WzYiw0wc"
    },
    {
        nombre: "love. - wave to earth",
        portada: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0224f8c3ad20b7c6cfecb5832e",
        link: "https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN"
    },
];
