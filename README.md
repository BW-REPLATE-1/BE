# Replate

## Register New User

HTTP Method: [POST]

*URL: /api/auth/register*

### Body

| Name           | Type    | Required | Description                  |
| ---------------| ------- | -------- | -----------------------------|
| `username`     | String  | Yes      | User's username      (unique)|
| `password`     | String  | Yes      | User's password      (unique)|
| `email`        | String  | Yes      | User's email         (unique)|
| `phone_number` | String  | Yes      | User's phone number  (unique)|
| `isBusiness`   | Boolean | Yes      | If user is a business        |

### Register Example
``` 
{
      username: "iampopcorn",
      password: "password11",
      email: "iampopcorn@gmail.com",
      phone_number: 3125559012,
      isBusiness: true
    }
```
### Response

***201 (Created)***
> User was able to register successfully 

***500 (Internal Server Error)***
> Server error returns status code 501

## User Log In

HTTP Method: [POST]

*URL: /api/auth/login*

### Body

| Name       | Type   | Required | Description     |
| ---------- | ------ | -------- | --------------- |
| `username` | String | Yes      | User's username |
| `password` | String | Yes      | User's password |

### Example

``` 
{
      username: "iampopcorn",
      password: "password11"
    }
```

### Response

***201 (Created)***
> User was able to log in successfully

***401 (Unauthorized)***
> Invalid credentials

***500 (Internal Server Error)***
> Server error returns status code 500

## Create a Business Profile

HTTP Method: [POST]

*URL: /api/business-profile*

### Body

| Name               | Type   | Required | Description              |
| ------------------ | ------ | -------- | ------------------------ |
| username           | String | Yes      | Business' username       |
| email              | String | Yes      | Business' email          |
| busines_name       | String | Yes      | Name of organization     |
| business_address   | String | Yes      | Business' address        |
| phone_number       | String | Yes      | Business' email          |

### Example

```
{
      username: "iampopcorn",
      email: "iampopcorn@gmail.com",
      business_name: "I Am Popcorn",
      business_address: "391 Riverside Ave. Munster, IN 606019",
      phone_number: 7735551010,
      user_id: 1
}
```

### Response

***201 (Created)***
> Business was able to create profile successfully

***401 (Unauthorized)***
> Invalid credentials

***500 (Internal Server Error)***
> Server error returns status code 500
