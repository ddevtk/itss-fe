// http://localhost:8000/apis/word/pack?packInfo={"level":"-1","topics":[]}
import axiosClient from './axiosClient';

const URL = '/lessons';
const word = [{
    "_id": {
      "$oid": "60cfe0c9f5dc801af8279f34"
    },
    "level": "A2",
    "examples": [
      "I wrote the computer code for the project."
    ],
    "specialty": "6",
    "topics": [
      "9",
      "11"
    ],
    "synonyms": [],
    "word": "code",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624236228/dynonary/words/luyewkybbedebjgm2kdj.png",
    "note": "",
    "type": "n",
    "phonetic": "kəʊd",
    "mean": "mã, luật lệ, quy tắc",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d0205de09a5f00072cc4b3"
    },
    "level": "A2",
    "examples": [
      "Do you really expect me to believe you?"
    ],
    "specialty": "0",
    "topics": [
      "1"
    ],
    "synonyms": [
      "Hope"
    ],
    "word": "expect",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624252508/dynonary/words/dowehuo7yoechkuduxm9.jpg",
    "note": "",
    "type": "v",
    "phonetic": "ɪkˈspekt",
    "mean": "mong đợi",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d06886f38ce90015e8ba36"
    },
    "level": "A1",
    "examples": [
      "my name is Dyno"
    ],
    "specialty": "0",
    "topics": [
      "1"
    ],
    "synonyms": [],
    "word": "name",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624270982/dynonary/words/atueumgryl9z7pwx7tpx.png",
    "note": "",
    "type": "n",
    "phonetic": "neɪm",
    "mean": "tên",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d2947ca5b10d0015f98dc4"
    },
    "level": "B1",
    "examples": [
      "The survey indicated that people responded favorably to the taste of the new energy bar."
    ],
    "specialty": "0",
    "topics": [
      "20",
      "11"
    ],
    "synonyms": [
      "show",
      "point out"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "indicate",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624413306/dynonary/words/f8m67mfqqpx2pu32glgv.svg",
    "note": "",
    "type": "v",
    "phonetic": "ˈɪndɪkeɪt",
    "mean": "thể hiện, trình bày",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d29a3f012562001586f4f4"
    },
    "level": "B2",
    "examples": [
      "Mr. John has assured us that he can complete the project by himself."
    ],
    "specialty": "0",
    "topics": [
      "20",
      "1"
    ],
    "synonyms": [
      "convince"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "assure",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624414783/dynonary/words/r4jxximqfrzwmtw2buo6.jpg",
    "mean": "đảm bảo, cam đoan",
    "phonetic": "əˈʃʊə(r)",
    "type": "v",
    "note": "",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d29be9012562001586f4f9"
    },
    "level": "B2",
    "examples": [
      "Ausgaard Automobiles plans to launch a line of small utility trucks."
    ],
    "specialty": "10",
    "topics": [],
    "synonyms": [
      "release"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "launch",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624415209/dynonary/words/vade5rm4emk9uewrgm6q.jpg",
    "mean": "giải phóng, phát hành, tung ra",
    "phonetic": "lɔːntʃ",
    "type": "v",
    "note": "",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d2e5de012562001586f506"
    },
    "level": "A1",
    "examples": [
      "Records show he was born in Poland in 1900."
    ],
    "specialty": "0",
    "topics": [
      "20",
      "10",
      "1"
    ],
    "synonyms": [
      "indicate"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "show",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624434141/dynonary/words/hyid4oazja5vlnsgglmm.jpg",
    "note": "",
    "type": "v",
    "phonetic": "ʃəʊ",
    "mean": "thể hiện, chỉ ra",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d2eab0501c6f0015e40aac"
    },
    "level": "B2",
    "examples": [
      "A new system that incorporates the latest data-analysis methods was implemented this week."
    ],
    "specialty": "6",
    "topics": [
      "20",
      "9",
      "10",
      "7"
    ],
    "synonyms": [
      "carry out",
      "conduct",
      "undertake"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "implement",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624435376/dynonary/words/mxz7uppjvqbza1ioztyu.png",
    "note": "",
    "type": "v",
    "phonetic": "ˈɪmplɪment",
    "mean": "triển khai, thực hiện",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d2ebf6501c6f0015e40aaf"
    },
    "level": "A2",
    "examples": [
      "The Rio Blue jacket comes with a specially shaped pocket that prevents loose coins from dropping out. "
    ],
    "specialty": "0",
    "topics": [
      "20",
      "1"
    ],
    "synonyms": [
      "avoid",
      "avert",
      ""
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "prevent",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624435702/dynonary/words/ikpcnvxpz2cpuwsqtmcb.jpg",
    "note": "prevent A from V-ing (Ngăn chặn A khỏi việc gì đó))",
    "type": "v",
    "phonetic": "prɪˈvent",
    "mean": "ngăn chặn",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d2ee0d501c6f0015e40ab2"
    },
    "level": "B2",
    "examples": [
      "I conducted a formal taste test of the four new bottled iced tea drink."
    ],
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [
      "implement",
      "carry out",
      "perform"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "conduct",
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624436237/dynonary/words/eytglxrsn6ctlz2u9uk9.png",
    "note": "conduct a survey/study (Nghiên cứu).",
    "type": "v",
    "phonetic": "kənˈdʌkt",
    "mean": "triển khai, thực hiện",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d66b96798fbf0015f3383e"
    },
    "level": "B2",
    "examples": [
      "He had fulfilled his promise to his father."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624664982/dynonary/words/lmybjuip9otj2sy2sw71.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "7"
    ],
    "synonyms": [
      "satisfy",
      "meet"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "fulfill",
    "type": "v",
    "note": "UK - fulfil",
    "phonetic": "fʊlˈfɪl",
    "mean": "đáp ứng, hoàn thành, thoả mãn, đủ điều kiện",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d66ebc12a1df001557785c"
    },
    "level": "B2",
    "examples": [
      "Seats will be assigned on a first-cone, first-served basis."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624665788/dynonary/words/fxwivvkyutd1joedpxrq.png",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [
      "appoint"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "assign",
    "type": "v",
    "note": "",
    "mean": "chỉ định",
    "phonetic": "əˈsaɪn",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d66f9112a1df0015577861"
    },
    "level": "B1",
    "examples": [
      "Frist Rate had relocated to a convenient neighborhood."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624666156/dynonary/words/relocate_2_eup6th.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [
      "carry"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "relocate",
    "type": "v",
    "note": "",
    "mean": "di dời",
    "phonetic": "riːˈləʊkeɪt",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d6717612a1df0015577867"
    },
    "level": "A2",
    "examples": [
      "Fortunately, yesterday's big snowfall did not affect any shipment."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624666486/dynonary/words/oxas0nh2x9uasp2vvyne.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "affect",
    "type": "v",
    "note": "affect favorably (Ảnh hưởng có lợi)",
    "mean": "ảnh hưởng",
    "phonetic": "əˈfekt",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d6728912a1df001557786c"
    },
    "level": "C1",
    "examples": [
      "International air travel soars above expectations."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624666761/dynonary/words/u3dqc9hfon18doxw04dy.jpg",
    "specialty": "12",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [
      "ascend"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "soar",
    "type": "v",
    "note": "",
    "mean": "tăng mạnh, bay lên",
    "phonetic": "sɔːr",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d673b212a1df0015577871"
    },
    "level": "B1",
    "examples": [
      "I have attached a copy of the employment agreement."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624667057/dynonary/words/xabfhpba0cwoqpwjpqf2.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [
      "enclose"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "attach",
    "type": "v",
    "note": "attached facilities (Trang thiết bị đi kèm).",
    "mean": "đính kèm",
    "phonetic": "əˈtætʃ",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d6748e12a1df0015577877"
    },
    "level": "B2",
    "examples": [
      "These changes will enhance business efficiency and improve productivity."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624667278/dynonary/words/vngdvob6pyalhl4fygg6.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [
      "imporve"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "enhance",
    "type": "v",
    "note": "enhance efficiency/productivity (Cải thiện hiệu suất làm việc).",
    "mean": "cải thiện, tăng cường, nâng cao",
    "phonetic": "ɪnˈhæns",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d6753912a1df001557787c"
    },
    "level": "A2",
    "examples": [
      "This is a good time to consider relocating our headquarters."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624667449/dynonary/words/cr5utbfjr62hj8s7nvja.png",
    "specialty": "0",
    "topics": [
      "20",
      "1",
      "11"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "consider",
    "type": "v",
    "note": "Consider + V-ing",
    "mean": "xem xét",
    "phonetic": "kənˈsɪdə",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d6769212a1df0015577884"
    },
    "level": "B2",
    "examples": [
      "The human resources (HR) department intends to recruit at least twenty new employees."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624667794/dynonary/words/qnahsjacshpmswh5fido.jpg",
    "specialty": "5",
    "topics": [
      "20",
      "11"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "recruit",
    "type": "v",
    "note": "",
    "mean": "tuyển dụng, chiêu mộ",
    "phonetic": "rɪˈkruːt",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d6775a12a1df0015577889"
    },
    "level": "B2",
    "examples": [
      "I must ask you to accompany me to the police station."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624667993/dynonary/words/gtf5mm6pvjgkugm3q4ob.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "11",
      "10"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "accompany",
    "type": "v",
    "note": "be accompanied by (Đi cùng bởi ...)",
    "mean": "đi cùng với, đồng hành",
    "phonetic": "əˈkʌmpəni",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a69222"
    },
    "word": "absolute",
    "phonetic": "",
    "type": "",
    "mean": "tuyệt đối",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60d678c712a1df0015577894"
    },
    "level": "B2",
    "examples": [
      "I personally guarantee total and immediate support in all measures undertaken."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624668358/dynonary/words/exi07ngixbdynpvwjrab.jpg",
    "specialty": "0",
    "topics": [
      "20",
      "11"
    ],
    "synonyms": [
      "assure"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "guarantee",
    "type": "v",
    "note": "guarantee on-time delivery (Đảm bảo giao hàng đúng giờ)",
    "mean": "bảo đảm, cam đoan, bảo hành",
    "phonetic": "ˌɡærənˈtiː",
    "__v": 0
  },{
    "_id": {
      "$oid": "60d67a4412a1df001557789e"
    },
    "level": "B1",
    "examples": [
      "Desparte Systems plans to build a data center as part of its effort to reorganize its global business."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1624668740/dynonary/words/p9zwt5lkmdxzieihj4ie.jpg",
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "reorganize",
    "type": "v",
    "note": "UK - reorganise",
    "mean": "tái tổ chức",
    "phonetic": "riˈɔːrɡənaɪz",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a69224"
    },
    "word": "account",
    "phonetic": "",
    "type": "",
    "mean": "tài khoản",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60dc7648d132b700153a8a48"
    },
    "level": "A1",
    "examples": [
      "All the applicants should address their application to the HR Manager."
    ],
    "picture": "https://res.cloudinary.com/dynonary/image/upload/v1625060935/dynonary/words/fgrheiyjt2gutujmjjkd.png",
    "specialty": "0",
    "topics": [],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "applicant",
    "type": "n",
    "mean": "ứng viên, người nộp đơn",
    "phonetic": "ˈapləkənt",
    "note": "",
    "__v": 0
  },{
    "_id": {
      "$oid": "60de4c4579629f0015c3fe05"
    },
    "level": "B1",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "afford",
    "type": "v",
    "note": "",
    "phonetic": "əˈfɔːrd",
    "mean": "đủ khả năng mua",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a69225"
    },
    "word": "accumulator",
    "phonetic": "",
    "type": "",
    "mean": "pin, ắc quy",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a69226"
    },
    "word": "acronym",
    "phonetic": "",
    "type": "",
    "mean": "chữ viết tắt",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60de4d0879629f0015c3fe09"
    },
    "level": "B2",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [
      "reject",
      "refuse",
      "fall",
      "decrease"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "decline",
    "type": "v",
    "note": "decline the invitation: từ chối lời mời.\na decline in: Giảm trong cái gì đó.",
    "phonetic": "dɪˈklaɪn",
    "mean": "từ chối, giảm",
    "__v": 0
  },{
    "_id": {
      "$oid": "60de4d8779629f0015c3fe10"
    },
    "level": "C1",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "collaborate",
    "type": "v",
    "note": "Collaborate on + st.\nCollaborate with + sb.",
    "phonetic": "kəˈlæbəreɪt",
    "mean": "hợp tác",
    "__v": 0
  },{
    "_id": {
      "$oid": "60de4e0579629f0015c3fe14"
    },
    "level": "B2",
    "examples": [
      "I need you to clarify a few points in the contract before I meet with the tomorrow."
    ],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "clarify",
    "type": "v",
    "note": "",
    "phonetic": "ˈklærəfaɪ",
    "mean": "làm rõ, làm sạch",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a69228"
    },
    "word": "active",
    "phonetic": "",
    "type": "",
    "mean": "trạng thái hoạt động",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a69229"
    },
    "word": "adapter",
    "phonetic": "",
    "type": "",
    "mean": "bộ chuyển đổi",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60de4ec779629f0015c3fe1f"
    },
    "level": "B2",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "undergo",
    "type": "v",
    "note": "undergo repairs: bị sửa chữa.\nundergo an inspection: trải qua cuộc kiểm tra.",
    "phonetic": "ˌʌndərˈɡəʊ",
    "mean": "trải qua, bị",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a6922a"
    },
    "word": "add",
    "phonetic": "",
    "type": "",
    "mean": "cộng, thêm",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60de524c79629f0015c3fe26"
    },
    "level": "B2",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [
      "alter"
    ],
    "antonyms": [],
    "isChecked": false,
    "word": "modify",
    "type": "v",
    "note": "",
    "phonetic": "ˈmɑːdɪfaɪ",
    "mean": "sửa đổi",
    "__v": 0
  },{
    "_id": {
      "$oid": "60de52b879629f0015c3fe2b"
    },
    "level": "B2",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "acknowledge",
    "type": "v",
    "note": "acknowledge one's contributions/efforts.",
    "phonetic": "əkˈnɑːlɪdʒ",
    "mean": "thừa nhận, công nhận",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a6922c"
    },
    "word": "advance",
    "phonetic": "",
    "type": "",
    "mean": "nâng cao",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },{
    "_id": {
      "$oid": "60de52ee79629f0015c3fe2f"
    },
    "level": "B1",
    "examples": [],
    "picture": null,
    "specialty": "0",
    "topics": [
      "20"
    ],
    "synonyms": [],
    "antonyms": [],
    "isChecked": false,
    "word": "enlarge",
    "type": "v",
    "note": "",
    "phonetic": "ɪnˈlɑːrdʒ",
    "mean": "phóng to, mở rộng",
    "__v": 0
  },{
    "_id": {
      "$oid": "60fa537b4eea162750a6922d"
    },
    "word": "adware",
    "phonetic": "",
    "type": "",
    "mean": "phần mềm quảng cáo",
    "picture": "",
    "topics": [],
    "level": "0",
    "examples": [],
    "note": "",
    "specialty": "6",
    "synonyms": [],
    "antonyms": [],
    "isChecked": false
  },];

// Day la Api lay ra word theo param page, perPage, packInfo chuyen vao // to chua viet
const lessonsApi = {
    // correct word game
    getWordPackCWG: (
      level = '-1',
      topics = [],
    ) => {
      return word;
    },
      // get word, type, phonetic, mean
    getWordList: (page = 1, perPage = 8, packInfo, sortType = 'rand') => {
      return axiosClient.get(`${URL}/pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo), sortType },})},
  };

export default lessonsApi;
