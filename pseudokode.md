# Pseudokode

## Houses

### GET /houses – hent alle houses

- Find alle houses
- Send dem tilbage, med status 200

### GET /houses/:id – hent ét house

- Find id'et fra requesten
- Find det house der har det pågældende id
- Hvis der er et house, så send det tilbage, med status 200
- Ellers, send status 404

## Teachers

### GET /teachers – hent alle teachers

- Find alle teachers
- Send dem tilbage, med status 200

### GET /teachers/:id – hent én teacher

- Find id'et fra requesten
- Find den teacher der har det pågældende id
- Hvis der er en teacher, så send den tilbage, med status 200
- Ellers, send status 404

### POST /teachers – opret en teacher

- Find navn og house fra requesten
- Hvis navn eller house mangler, så send status 400
- Opret en ny teacher med navnet og house'et
- Send den nye teacher tilbage, med status 201

### PUT /teachers/:id – opdatér en teacher

- Find id'et fra requesten
- Find det nye navn og house fra requesten
- Find den teacher der har det pågældende id
- Hvis der ikke er en teacher, så send status 404
- Ellers, opdatér teacherens navn og house
- Send den opdaterede teacher tilbage, med status 200

### DELETE /teachers/:id – slet en teacher

- Find id'et fra requesten
- Find den teacher der har det pågældende id
- Hvis der ikke er en teacher, så send status 404
- Ellers, slet teacheren
- Send status 204

## Students

### GET /students – hent alle students

- Find alle students
- Send dem tilbage, med status 200

### GET /students/:id – hent én student

- Find id'et fra requesten
- Find den student der har det pågældende id
- Hvis der er en student, så send den tilbage, med status 200
- Ellers, send status 404

### POST /students – opret en student

- Find navn, house og år fra requesten
- Hvis noget af det mangler, så send status 400
- Opret en ny student med navn, house og år
- Send den nye student tilbage, med status 201

### PUT /students/:id – opdatér en student

- Find id'et fra requesten
- Find det nye navn, house og år fra requesten
- Find den student der har det pågældende id
- Hvis der ikke er en student, så send status 404
- Ellers, opdatér studentens navn, house og år
- Send den opdaterede student tilbage, med status 200

### DELETE /students/:id – slet en student

- Find id'et fra requesten
- Find den student der har det pågældende id
- Hvis der ikke er en student, så send status 404
- Ellers, slet studenten
- Send status 204

## Courses

### GET /courses – hent alle courses

- Find alle courses
- Send dem tilbage, med status 200

### GET /courses/:id – hent ét course med teacher og students

- Find id'et fra requesten
- Find det course der har det pågældende id
- Hvis der ikke er et course, så send status 404
- Ellers, find kursets teacher
- Find alle students der går på kurset
- Send kurset tilbage sammen med teacheren og listen af students, med status 200

### POST /courses – opret et course

- Find navn og teacher fra requesten
- Hvis navnet mangler, så send status 400
- Opret et nyt course med navnet og teacheren
- Send det nye course tilbage, med status 201

### PUT /courses/:id – opdatér et course

- Find id'et fra requesten
- Find det nye navn og teacher fra requesten
- Find det course der har det pågældende id
- Hvis der ikke er et course, så send status 404
- Ellers, opdatér kursets navn og teacher
- Send det opdaterede course tilbage, med status 200

### DELETE /courses/:id – slet et course

- Find id'et fra requesten
- Find det course der har det pågældende id
- Hvis der ikke er et course, så send status 404
- Ellers, slet kurset
- Send status 204

### PUT /courses/:id/teacher – skift teacher på et course

- Find kursets id fra requesten
- Find den nye teachers id fra requesten
- Find det course der har det pågældende id
- Hvis der ikke er et course, så send status 404
- Find den teacher der har det pågældende id
- Hvis der ikke er en teacher, så send status 404
- Ellers, sæt teacheren som kursets teacher
- Send det opdaterede course tilbage, med status 200

### POST /courses/:id/students – tilføj en student til et course

- Find kursets id fra requesten
- Find studentens id fra requesten
- Find det course og den student der har de pågældende id'er
- Hvis kurset eller studenten ikke findes, så send status 404
- Hvis studenten allerede går på kurset, så send status 409
- Ellers, tilføj studenten til kurset
- Send status 201

### DELETE /courses/:id/students/:studentId – fjern en student fra et course

- Find kursets id og studentens id fra requesten
- Find ud af om studenten går på kurset
- Hvis studenten ikke går på kurset, så send status 404
- Ellers, fjern studenten fra kurset
- Send status 204

Testene er lavet i Bruno og ligger i mappen `hogwards-api-test`.
