import { promisify } from "util"

await new Promise((resolve) => setTimeout(() => {
    resolve()
}, 3000)) // 3000 = 3 saniye. 5000 = 5 saniyedir. Burayı değiştirdiğinizde 7. satırdaki 3 Saniye Beklendi. kısmını ayarladığınız zaman olarak değiştiriniz.

console.log("3 Saniye Beklendi.")
/**
 * İstediğiniz zaman ile terminale mesaj yazdırmalı NodeJS kodu.
 */
