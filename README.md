# CASE

Proje, Node.js ve Express kullanılarak geliştirilmiş bir web uygulamasını içerir. MongoDB veritabanı kullanılarak, "countries" ve "salesrep" adında iki ayrı endpoint uygulanmıştır.

## Başlangıç

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

1. **Dependecies'leri Yükleyin**

   ```bash
   npm install



## MongoDB Bağlantısını Ayarlayın

MongoDB bağlantınızı config.js dosyasında yapılandırın veya ortam değişkenleri aracılığıyla sağlayın.


Uygulamayı Başlatın

```
npm start
```

Uygulama varsayılan olarak http://localhost:27017 adresinde çalışacaktır.


## Endpoints

1. Countries Endpoint
   
Endpoint: /countries
HTTP Method: GET
Açıklama: Tüm ülkelerin listesini almak için kullanılır.

Endpoint: /countries?region=
HTTP Method: GET
Açıklama: Belli bir region'a ait ülkelerin listesini döner.

Endpoint: /countries
HTTP Method: POST
Açıklama: Ülke ve bölge oluşturmak için kullanılır.

2. Salesrep Endpoint
   
Endpoint: /salesrep
HTTP Method: GET
Açıklama: Her bölge için gerekli minimum ve maksimum satış temsilcisi sayısını içeren JSON formatında bir liste döner.
