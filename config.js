import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { Button, ButtonV2, Carousel, AIRich } from './lib/MessageBuilder.js';

global.Button = Button;
global.ButtonV2 = ButtonV2;
global.Carousel = Carousel;
global.AIRich = AIRich;

// ضع هنا الرقم المخصص لربط البوت (Pairing Code) إذا كنت تستخدمه
global.pairingNumber = 212621790049; 

global.owner = [
  ['212610591087', 'ABDENNACER CHAKIR', true],
  ['212621790049', 'ARFOXBOT STREAM', true], // تم إدراج اسمك ورقمك هنا كمالك أساسي للبوت
];

global.namebot = 'ARFOXBOT STREAM'; // تم تعديل اسم البوت هنا
global.author = 'ABDENNACER CHAKIR'; // تم تأكيد اسمك هنا
global.source = 'https://www.instagram.com/abden__nacer?igsh=MXZpNWRhczFicGU0Mg==';

global.wait = 'Loading... | جاري الانتظار';
global.eror = 'There is an error... | وقع خطأ';

global.pakasir = {
	slug: 'kilersbotz',
	apikey: 'bWDO2M8GcfruzXscdKNQJC3vw8Y8PV13',
	expired: 30, //1 = 1menit. 30 = 30menit
};

global.stickpack = 'Created By';
global.stickauth = global.namebot; // سيأخذ اسم البوت تلقائياً لحقوق الملصقات

global.multiplier = 38; // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
	emoticon(string) {
		string = string.toLowerCase();
		let emot = {
			level: '📊',
			limit: '🎫',
			health: '❤️',
			stamina: '🔋',
			exp: '✨',
			money: '💹',
			bank: '🏦',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🛍️',
			mythic: '🎁',
			legendary: '🗃️',
			superior: '💼',
			pet: '🔖',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			pickaxe: '⛏️',
			fishingrod: '🎣',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐴',
			cat: '🐱',
			dog: '🐶',
			fox: '🦊',
			petFood: '🍖',
			iron: '⛓️',
			gold: '🪙',
			emerald: '❇️',
			upgrader: '🧰',
		};
		let results = Object.keys(emot)
			.map((v) => [v, new RegExp(v, 'gi')])
			.filter((v) => v[1].test(string));
		if (!results.length) return '';
		else return emot[results[0][0]];
	},
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
	unwatchFile(file);
	console.log(chalk.redBright("Update 'config.js'"));
	import(`${file}?update=${Date.now()}`);
});
