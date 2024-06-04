# 1. Получение списка пользователей

URL: `http://localhost:3000/users`

Метод: GET

Описание: Получение списка пользователей.

Тело запроса: нет необходимости отправлять тело запроса.

Пример ответа:

```
[
    {
        "id":1,
        "name":"John",
        "age":30,
        "email":"john@example.com"},
    {
        "id":2,
        "name":"Jane",
        "age":25,
        "email":"jane@example.com"},
    {
        "id":3,
        "name":"Mary",
        "age":20,
        "email":"mary@example.com"}
]
```

# 2. Получение сортированного по имени списка пользователей

URL: `http://localhost:3000/users/sorted`

Метод: GET

Описание: Получение сортированного по имени списка пользователей.

Тело запроса: нет необходимости отправлять тело запроса.

Пример ответа:

```
[
    {
        "id":2,
        "name":"Jane",
        "age":25,
        "email":"jane@example.com"},
    {
        "id":1,
        "name":"John",
        "age":30,
        "email":"john@example.com"},
    {
        "id":3,
        "name":"Mary",
        "age":20,
        "email":"mary@example.com"}
]
```

# 3. Получение списка пользователей старше определенного возраста

URL: `http://localhost:3000/age/:age`

Метод: GET

Описание: Получение списка пользователей старше определнного возраста.

Тело запроса: нет необходимости отправлять тело запроса.

Пример запроса:

`http://localhost:3000/users/age/24`

Пример ответа:

```
[
    {
        "id":1,
        "name":"John",
        "age":30,
        "email":"john@example.com"},
    {
        "id":2,
        "name":"Jane",
        "age":25,
        "email":"jane@example.com"},
]
```

# 4. Получение списка пользователей с определенным доменом

URL: `http://localhost:3000/domain/:domain`

Метод: GET

Описание: Получение списка пользователей с определенным доменом эл. почты.

Тело запроса: нет необходимости отправлять тело запроса.

Пример запроса:

`http://localhost:3000/users/domain/example.com`

Пример ответа:

```
[
    {
        "id":1,
        "name":"John",
        "age":30,
        "email":"john@example.com"},
    {
        "id":2,
        "name":"Jane",
        "age":25,
        "email":"jane@example.com"},
    {
        "id":3,
        "name":"Mary",
        "age":20,
        "email":"mary@example.com"}
]
```

# 5. Получение пользователя по его id

URL: `http://localhost:3000/users/:id`

Метод: GET

Описание: Получение конкретного пользователя по его id.

Тело запроса: нет необходимости отправлять тело запроса.

Пример запроса:

`http://localhost:3000/users/1`

Пример ответа:

```
[
    {
        "id":1,
        "name":"John",
        "age":30,
        "email":"john@example.com"},
]
```

# 6. Добавление нового пользователя

URL: `http://localhost:3000/users/`

Метод: POST

Описание: Добавление пользователя.

Тело запроса: содержит объект нового пользователя с обязательными полями:

- id
- name
- age
- email

Пример запроса:

`http://localhost:3000/users`

```
{
    "id": "4",
    "name": "Andrew",
    "age": "22",
    "email": "andrei-200@mail.ru",
}
```

# 7. Обновление пользователя

URL: `http://localhost:3000/users/:id`

Метод: PUT

Описание: Обновление пользователя

Тело запроса: содержит объект пользователя с новыми данными.

- name
- age
- email

Пример запроса:

`http://localhost:3000/users/2`

```
{
    "name": "Andrew",
    "age": "22",
    "email": "andrei-200@mail.ru",
}
```

Пример ответа:

```
{
    "id": "2"
    "name": "Andrew",
    "age": "22",
    "email": "andrei-200@mail.ru",
}
```

# 8. Удаление пользователя

URL: `http://localhost:3000/users/:id`

Метод: DELETE

Описание: Удаление пользователя пользователя

Тело запроса: нет необходимости отправлять тело запроса.

Пример запроса:

`http://localhost:3000/users/2`
