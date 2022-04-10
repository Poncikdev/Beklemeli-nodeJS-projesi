import { promisify } from "until"
var sleep = promisify(setTimeout)

await sleep(3000)// 1000 => 1 saniye 3000 => 3 saniye. Bu kısmı istediğiniz gibi değiştirebilirsiniz. Örnek: await sleep(5000) 5 saniye sonra terminale mesaj.

console.log("3 Saniye Beklendi!")

/**
 * Beklemeli NodeJS projesi
 */
