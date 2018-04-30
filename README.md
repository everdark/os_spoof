# os_spoof
Tiny Chrome Extension for Spoofing OS info

由於 [2018台灣電子報稅系統的網頁版](https://efile.tax.nat.gov.tw/irxw/index.jsp)不支援Windows（太神啦！），
所以寫這個擴充來假裝自己是macOS。

我們只是很單純地竄改`navigator.platform`這個屬性。
在我的測試中，
當使用「戶口名簿＋查詢碼」的方式身份驗證時，
送出資料後會再額外確認UserAgent。
由於市面上已經有非常多自由切換UserAgent的擴充了，
所以就沒有把這個功能也包進來。

我沒有測試其他三種身份驗證方式，但應該大同小異。

# 安裝方式
前往Chrome瀏覽器的[擴充管理頁面](chrome://extensions)，
勾選開發者模式（Developer mode），
選擇LOAD UNPACKED然後把路徑指向本目錄的`os_spoof`子目錄。
