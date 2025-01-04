// ...existing documentation...

### Get User Profile
**Endpoint:** `GET /users/profile`

**Authentication:** Required (JWT Token)

**Description:** Retrieves the profile information of the currently authenticated user.

**Response:**
```json
{
    "_id": "string",
    "firstname": "string",
    "lastname": "string",
    "email": "string",
    "createdAt": "string",
    "updatedAt": "string"
}
```

**Status Codes:**
- 200: Success
- 401: Unauthorized (Invalid or missing token)

### Logout User
**Endpoint:** `POST /users/logout`

**Authentication:** Required (JWT Token)

**Description:** Logs out the current user by invalidating their token and clearing cookies.

**Response:**
```json
{
    "message": "Logged out"
}
```

**Status Codes:**
- 200: Success
- 401: Unauthorized (Invalid or missing token)

// ...remaining documentation...
