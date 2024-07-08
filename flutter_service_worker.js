'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "db481be45fc6503a2d31d85d269cf69f",
".git/config": "0bd5faf508ac0df27b57663ff84210f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7bbb08b4e961176ce05ba11f5c9d4bad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2fe6b94815d5e544a166438bd45680e3",
".git/logs/refs/heads/main": "3230df8386cb4567f024aaada00bb1cc",
".git/logs/refs/remotes/origin/main": "e6467346c07db13bfc95732f64286cb2",
".git/objects/03/2dc01ba94088ba76fb25e56a6ff0385127e459": "3b3046b2b549a7362b3d162d846fa9e6",
".git/objects/04/4d1e3997b215d2b6ad9a50cbb745ef3a7242a0": "95f0a82e3d355af7b9a558f224774b4b",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/d72e5b10d98270ae15e73608159383bb957bf3": "aa74555545e7a96d86f6564fbeb495b8",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/857af31b5b0161f6ac36d7eab7444839b90f95": "52c59584a2789c177ea10987c4b1eb73",
".git/objects/15/f85f0309fc82ad3839abdb0c33ea75250ef2d3": "3eb2c1c1313dacdc4bb78d5386a0beb3",
".git/objects/17/7d8d6775ed7dfa5c69a6c7ad3ca4aca612bbf7": "347379ce6c8597d5087301f0f17a3c65",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/f5f859c746618cc30656ca3f6bcccc5d9ff066": "b8175a85f1dffca643c46acdbf83ee6e",
".git/objects/19/31721ce366116ec0e4ab021b1ce2df90d9a18f": "46fac42a4624fd88a5e9203b4b81b697",
".git/objects/1b/3bcd626adb2de1fc717540a424039686308f1e": "b2c155c3bc9dd97d133e5dd1cb471b40",
".git/objects/1c/ff38f7b81ee7781a53df852f9028df87d6d04e": "5dbcfeff3cc1c2739257e2b578357c2a",
".git/objects/1d/5ecb14285328f73785496eddfd560009e1c89c": "307d99d09e62269897dad88d62ec9bb1",
".git/objects/1f/8fd10187dff64e914c7dd3b1fbd4445033bafd": "53ee704a7f98752b340cbfcdf6204794",
".git/objects/1f/cd7f37cb8666cedc26a162764f46f15984b15a": "9dc1919303f69fd72d5aa10fe06dd606",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/3222af967beb415e5db8fb297f3d4b02e17517": "6137ab515efbd8161f25106536000793",
".git/objects/24/91a05112b882f254cc616fdfd6a2bf383eb7ba": "3dbcb41a53c53c2952e65ef1813974ec",
".git/objects/25/17795cf5a07ecc4cc1304b61afb4d54f6d513a": "bd06bba893c9735957ec8fadd6be8f7b",
".git/objects/2c/0cf15030bd74c009d14f746aab0085618ec972": "f1c268feaf8e70a47007574adde19c3c",
".git/objects/2c/f841b24228bd50cb8c530bb10c0740985d0809": "5da83885bf42051c657f14ae362736df",
".git/objects/2d/fa87ebca3b59108b408b0de9b21fc9eb943268": "786618be28362d992543643f3225edfc",
".git/objects/2f/427e91c893dcc8acd9c9c83197238dbfee6e58": "c2f5c82f0f0f16244d0a652930ca2e27",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/1d72e9054f2a53db9ded7d5f27a186e108a51d": "824e1008930b6d32684c5c0812309460",
".git/objects/36/ecf27a59e2c8ff83246f28f1d5e875b9d97c98": "ddd26540f9230ce88e16c52402aeff98",
".git/objects/3b/bb0034c4f0b9a18704746b35351367c028b60d": "824a62b9697ef294d0ad3b61aee52622",
".git/objects/3c/2752759fe73bee3edd9739f27b7329ff5ba32a": "eac69e250fc6a750798ce373ccb3c4f1",
".git/objects/3e/e3f45d989e414c511c558f27cc127489c1b986": "8b1d58f4c704b42478d2d2aeca794289",
".git/objects/40/edd007f6da451d8e42c72b346275bd93c8a4d3": "1ebbd3525b19d9cc7f6b8ff262a46dfc",
".git/objects/41/07b93a316b38013cb294197fb8c85a017fee27": "fa7529d58e1ff179cf7637e8d6405a41",
".git/objects/43/5deeb1eb473c0f72f2a547b78b951ac7caf971": "6aa7518faf2cb0b315fa28bdbac973d1",
".git/objects/45/53f015e5225d0276e649d89a5760d0ed90322d": "68e99597499a8750a046fcb45815f1de",
".git/objects/45/b4801c56fb2a9121a87de23f4074860ab89ed0": "ca4bda4ad24700566d03fcf64afaa7c7",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/71385ab307220b3cbef57868f6f01779e32f32": "ba760c6e045390343aff1b942ddbef3a",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/ea8336752ca2f68e58631ebd9d4d338bfdb63a": "bb09265ff081c53a107a2ec6a8550f70",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/0747c73de4a1ee49f6f9e6d88f02bb65c35225": "3831ac90d0887d9350f0278d7995c6bc",
".git/objects/59/2d4b18e5b2fd1d0e85fe960379b6f87e849856": "3131dc8ea2cd5890b663aa2da561a69e",
".git/objects/5a/31e3212cdbbaeb5100d539662062a837d08256": "b8118c74b8feabed0f6f670189fc9690",
".git/objects/5a/60c58e77bd20036a345d0befd31fc5741317e4": "30ed25496815d9785b6b0b85b5ab8e2a",
".git/objects/5d/b1b0dfe18e72b8f2bc5aa194a6a74fe63f69c5": "531a8cb0f3f27f929f8d29f05ac25aff",
".git/objects/5d/b9d87342efb0717604bff51b61ae8f5cfde6fc": "780e4dd31beae9d1e2c498dce7d4c952",
".git/objects/5e/37f8dfc0a5ad5ff42ad20ce9bd69c8efe068e6": "40b695b61ef27915191b7380173bc897",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/50463085f1216cf5ee9bc2d3c716d4be30dec5": "9301b077387d22998d494099c8233cfe",
".git/objects/64/9fbcf74c4315a9f649fef864b8f1e7039d01ae": "01ca9698338a1f4ad49fb5ecfc7d05ac",
".git/objects/65/c5767c8cfc34ac478003976ea39e99618ab85f": "376313819c709b52c38d4fe3cbaf8ac7",
".git/objects/68/f7daef3b2af888398740e6191c0f336e961215": "f5c124d4003248957d760aefe2b22ae7",
".git/objects/6b/464d25f3d311167a204cc7c3db6718ce4817a0": "69f02a1546ceb27012a93fe6725946c9",
".git/objects/6f/756750aa00f63f3eb246d9b3f50a8fab63d8ab": "5889f8e3ac58b2be7b915daaca51d012",
".git/objects/70/3846031441620e99ecad5aa0c94630f699221a": "5d982c0b1686e55ae4bae28759505176",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/f0e81bbb81360c0c7f3099b940bbd3ff443b42": "9cd95f898085abcdda3e53eca2c00449",
".git/objects/79/ed0a81f77c53909e6ad491cb3e4741ca0f5b78": "a116d157f829080427c0c52de59ef6ea",
".git/objects/7b/8efb04c7642022251ec57f0090186e7c7e839a": "61e5d14950d0b001003816c6acd01287",
".git/objects/80/0d5fae95cafb895e832aaf6b84db1faf2aab4e": "02561add7daf8f32f92bd0d2694db641",
".git/objects/84/bf345315a53cf89396dfdc205733b4d920b5a8": "f24aad1b187009adf0f088bb0e81e0ac",
".git/objects/87/56d2f01706e308e37157672300095e0e40472a": "9796b5f1b08bb2c7f2a443a1710ce923",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/ddbc922782f98d8bee59b82c4626dc44e15a09": "c8c0f5d4c16f45b99f65654423300afb",
".git/objects/8a/d5fe6ebfee40b92901425064c5cbc45a2a8e0a": "586b9afdc72f58af78d61a421cd27b69",
".git/objects/8b/df35916dff16f28eaca3709d24fb0b9aa3eecb": "b62c701fce49275d81eaed97f42fa10a",
".git/objects/8f/966a4bfc867fe1686788dff66fae8d503f6c49": "412d3cfc5b40813bbc7b5a337dbeafa1",
".git/objects/90/1d8c45a850c737c810355200a98339f8d6f8c3": "6f3b344891bf28e0ae6b299e5c2fc013",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/90/a80dab596b240fb623e6c50019f82fdb0badb2": "77723afa7e95a96a1246945fd395f963",
".git/objects/93/db8b29327da3dd4e0b6256f9c250468c684713": "97dfaf346f4957e008f329869f805485",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/21781ecb5b50e41a791f4b727bf51a0f174814": "617ccb7c3b0a743c765caa8e8aea55c6",
".git/objects/97/0830d3261ac8f494c4806b89229ddb91e686cb": "d718e5872c3195d6b7040358bfd25efc",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/9a/8dc72df32ebfdae6c3ab1e5cc1a40556585ee4": "1db660b5863e3df97bb6c983ad55e60d",
".git/objects/9d/5949f2d76df1b937ee87accca413f7f12c1561": "fed69ae9fa7803a6394cef51bf24338a",
".git/objects/a5/6cada827000631a113c05cea2d665b7e436487": "e62fe36cbab32dbbc7143c5a615bc0ff",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/02094c8982068b078058a36c6978747f65770e": "699db625ceda794f103bb401ea39ca66",
".git/objects/b0/5a8f9ef6deb406d0cc7ea873a2643ccdbcf4be": "df1c7a18c12e6ef5efa1e9b8255182ac",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/b9ead76d06ddb23537f06a78d2b089a904a15e": "d80168b38c942d571efce71806d5a328",
".git/objects/b8/e2ff3ee840638ad04c6a485c7b09a561ecaf81": "b509e74ab8bc42eda8bade97758dc5fc",
".git/objects/b9/33ac2eba8d0338f2a7825f3e73bfd5cb218b02": "ce7786bee286523b50262f485a512450",
".git/objects/bf/9ba028a76efd626d6928d64736fee233205bd3": "89a657c27ba90a02de79cab7d9f72906",
".git/objects/c3/5360fefe964c0eed8178af31375017cff1357e": "fb8358e64fd83f18b182a4357d9e0914",
".git/objects/c3/645c41d7c2e47714f9041b73d9e86731d8dcf4": "aea1aaee5bb2fd7cce28a9bdcf05e7ff",
".git/objects/c3/a62749aad3aa6208c80d27688a62271b096835": "2f172cd470e8610940c1f0c6473dcf5e",
".git/objects/c8/0cd57ec61b8dc54c1722f14a8546bbb0fb9807": "b6720ccacb9d17903b662ebc86c1dd2e",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/c9/3449a204c1b55685671651f0fb5e65d9d575c2": "c027997d3d835a30f5301a40df45d118",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/f73c36ba8627889af57467ab28d0214f564121": "d4f87becb031b0432912680aa25bb3d2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/d435f4544638c14607d6472defe0636ff0c939": "1014b99ea9114262873462b93f1660e7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/2c940433450af425987a3d1822ab0b858073ee": "79f5640656e1c4810fbd41c77572a96d",
".git/objects/d9/de32b9d9428ac19f166441ddbc0c4dfbcf73ea": "6a75c82a447a7f4d869a23fce6ed55a9",
".git/objects/df/c78bbbef35e7673e28c037f68f74efcb845bde": "041d4570a103780352eeeee320dfb3d5",
".git/objects/e0/5e66b18337f612ab8b0cbcd01b756ed4aba9b1": "7ac1bd6ba1dcb54828714db962f5fe67",
".git/objects/e1/72f878a6cd80533d919ad992e4ee40bbfc9ecc": "ee95870fe1a839b70efaadebb6a6dfe8",
".git/objects/e4/dfd61c6cf8d4d5888b93e039fbcecf17fa977d": "6cdbbcfc39cd70be13c13eb332aa2e49",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/1831cdad80411854da32e4a924c6cdc8e79c27": "97933e86617cc7fe9e6213aca393b0c6",
".git/objects/e9/f7beb8a31867a14a5644bb99667b9bc6f860c8": "205fbc7f447e8aaf830acd5f40f8764a",
".git/objects/ea/102413b95a569cf16496d10bb385c9c1a72e7d": "cfa9bb158f4cdf3f514a2c52ad90b54a",
".git/objects/eb/c04763f597aff14d583a0275fdda1f6fbfde46": "aa644985f727353e06b3237323e9fbbb",
".git/objects/ef/5222352fae41033f910e77b16aa28581aa5e75": "f0de6cf5c97ed00c4aad61166cbd01bd",
".git/objects/ef/c16d881f43a9aeec8eb883586ddef13249b3ab": "f21eacfe786f3ba50fa6b5d0696869fb",
".git/objects/f1/23b5352830c4455e5f713079a5b5eb32ae7482": "57c5744976d57509922a4dedef0f085f",
".git/objects/f1/9d76095843f971f965696992a842be2710196b": "a6588ce0a8e2b8c453fbc50e66e7c3d9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/4e63cae6d293d2a7aef9687cedc6a4d08b6c45": "dd1f9ad0344098a9d086ed978cb3a086",
".git/objects/f6/9b4ca38f121a612c17220442547d98ec770e43": "1785281a6d6ba3fe3f063b5c00e7f68f",
".git/objects/f8/310cdf5c7317b09c36a1cb8aa08c1ec42125c9": "0769bb261b7ad6405d0b82ee65fe63f6",
".git/objects/f9/5dc8761323723440d7d231d07fe15b41e54f6e": "85da2f021dd47b5faa99d4d75e013211",
".git/objects/fe/833a5b0dc7927e187c79cc68788a908c29e628": "733a596e68f51e950f3fe33fe3680088",
".git/refs/heads/main": "7fcf99dd68a4fecc035a1e9d0bad267a",
".git/refs/remotes/origin/main": "7fcf99dd68a4fecc035a1e9d0bad267a",
"assets/AssetManifest.bin": "d43cec015e729edd056c98a4cd1c07fe",
"assets/AssetManifest.bin.json": "03c93bf0750ab44e7452eb656911e80d",
"assets/AssetManifest.json": "2c605f018a0b5b1cfb0b6250a29246b6",
"assets/assets/icon/adaptive-icon.png": "ca97f0c575d228cd8e2724d719a52dd3",
"assets/assets/icon/icon.png": "13036c04bd039e5777b7d3be2771bdb2",
"assets/assets/icon/install_desktop.png": "5ee201ab015ab85868ef7b2b46fb58c9",
"assets/assets/icon/install_mobile.png": "d95a97a6170b15580aa3049d3bc04871",
"assets/assets/icon/notification-icon.png": "23c1a47106aed95513c47a4d03016778",
"assets/assets/icon/skip-back.png": "dff4a39b1a483bdf69b4cddc3641b425",
"assets/assets/icon/skip-forward.png": "cf363c9633f6173d9d9af895c0e9a68e",
"assets/assets/icon/update.png": "77dff3ad46e51f7583014651bc75a41e",
"assets/assets/images/no-internet.png": "7d8876b0eeab315d1f7de3d464141dad",
"assets/assets/images/SoundForYourHeart.png": "ff35b73b59025177a326f4fc74374489",
"assets/assets/images/splashScreen.png": "badcb863a5ce36c0b3c7efff094006ec",
"assets/assets/team/Alin_Vasilescu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Andreea_Mihalache.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Cosmin_Dinu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Dana_Mercioniu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Daniel_Cirstoveanu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Emanuel_Popa.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Larisa_Badea.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Rebecca_Antonov.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Sabin_Cirstoveanu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "cfde9e362259196217e5d1dcbdc1cb55",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "81977bd60017c204cc4c2f4b4873311a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3619e03e8286cfc4d168c7ff6e17eda9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2035c51026e7c34c4bbb71a1198f8acf",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "968534237c655548426c5f68e77b626a",
"icons/Icon-192.png": "5af6c7373aff662e061d1bcc77d38cdc",
"icons/Icon-512.png": "e951ec271dba381a80ce01f271728a36",
"icons/Icon-maskable-192.png": "5af6c7373aff662e061d1bcc77d38cdc",
"icons/Icon-maskable-512.png": "e951ec271dba381a80ce01f271728a36",
"index.html": "b2c9c24862f16363b7410cd98e285864",
"/": "b2c9c24862f16363b7410cd98e285864",
"install-icons/add-to-dock.svg": "0ef197d1c701593176c117d7f9db2a89",
"install-icons/add-to-home-screen.svg": "e7e3f7585dbdbdc9c6be65416846f566",
"install-icons/add-to-phone.svg": "d22dab54423717ccb9c8ae6119af1699",
"install-icons/arrow-forward.svg": "e9d4db9234c0f2ac4d4317151e8fd866",
"install-icons/close.svg": "bd8d31d8feb2a162a184229db533a93b",
"install-icons/install-phone.svg": "9dcc81f5637b30fc4463df01f1daf128",
"install-icons/ios-share.svg": "9555399268c9119141c458f3536315d2",
"install-icons/menu-vert.svg": "23da267b3e4a3f7341f45b93ece349ab",
"install-icons/menu.svg": "b236d8984b7c6957b278353b5621bb95",
"main.dart.js": "3aaf6e13ca1fa0d3b4398e11a32cdfcf",
"manifest.json": "c4a28172c82f962aba4ce1aa226578a5",
"screenshots/image1.jpg": "93e3f175ea528097eab9b1f42866f3c1",
"screenshots/image10.jpg": "9bf80431c488a8c18b36f48ac4a78375",
"screenshots/image2.jpg": "7b2fccb2c7ff13285e9e98ea328dd8e2",
"screenshots/image3.jpg": "00e61f864850009a7d5e6acd1a495371",
"screenshots/image4.jpg": "71c7c59f39aca10e4d855b44d2a157fc",
"screenshots/image5.jpg": "a1b860d593b09ec4202a35c131d861a3",
"screenshots/image6.jpg": "6bc3e252df43a40fe610b4d8b73da1fd",
"screenshots/image7.jpg": "1abfa1218f7482f6cbdc34a8c2c3eb93",
"screenshots/image8.jpg": "e3277bc5fd754fd7d16b418c52393587",
"screenshots/image9.jpg": "11790c74dd20b7b1dba43dcae896688d",
"splash/img/dark-1x.png": "52b73da6053af581beee5b123122b72b",
"splash/img/dark-2x.png": "1be5080da7135b51f4c46f4a92a3e423",
"splash/img/dark-3x.png": "0ba6a40a480682667dd4b14a58306890",
"splash/img/dark-4x.png": "d79725059f270dc1e7619a22b887e6fe",
"splash/img/light-1x.png": "52b73da6053af581beee5b123122b72b",
"splash/img/light-2x.png": "1be5080da7135b51f4c46f4a92a3e423",
"splash/img/light-3x.png": "0ba6a40a480682667dd4b14a58306890",
"splash/img/light-4x.png": "d79725059f270dc1e7619a22b887e6fe",
"version.json": "aeaaeb6e5faf18dd38825d6554931be5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
