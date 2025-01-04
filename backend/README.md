# API Documentation

## User Registration
`POST /users/register`

Register a new user in the system.

### Request Body

```json
{
    "fullname": {
        "firstname": "string", // minimum 3 characters
        "lastname": "string"  // optional, minimum 3 characters if provided
    },
    "email": "string",     // valid email format
    "password": "string"   // minimum 6 characters
}
```

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

#### Success (201 Created)
```json
{
    "token": "JWT_TOKEN_STRING",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

#### Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Error message",
            "param": "field_name",
            "location": "body"
        }
    ]
}
```

### Validation Rules
- Email must be a valid email format
- First name must be at least 3 characters long
- Password must be at least 6 characters long

### Notes
- The password is automatically hashed before storage
- A JWT token is generated and returned upon successful registration
- The response includes both the authentication token and user details

## API Documentation

### User Endpoints

#### Get User Profile
- **URL**: `/users/profile`
- **Method**: `GET`
- **Auth Required**: Yes
- **Description**: Get the current user's profile information

#### Logout User
- **URL**: `/users/logout`
- **Method**: `POST`
- **Auth Required**: Yes
- **Description**: Logout the current user and invalidate their token

For detailed API documentation including request/response formats, please see [API Documentation](./docs/api.md).
