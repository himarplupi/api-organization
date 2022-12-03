<h1 align="center">API Documentation</h2>

# Base Url

dev : `http://localhost:5000/***{path}***`

## 1. Kabinet

### Create Kabinet

| method | POST |
| --- | --- |
| url | kabinet |

**Body:**

```json
{
	"name": String*,
	"priode": Number*,
	"description": Text,
	"logo": String,
	"active": Boolean->default: false
}
```

**Response:**

```json
// status code: 201
{
	"status": "success",
	"message": "kabinet baru berhasil dibuat"
}
```

### Get All Kabinet

| method | GET |
| --- | --- |
| url | kabinet |

**Query:**

| limit | number |
| --- | --- |
| page | number |
| search | string |

**Response:**

```json
// status code: 200
{
	"status": "success",
	"data": {
		"kabinet": [
			{
				"id": "<id>",
				"name": "<name>",
				"priode": "<year>",
				"description": "<description>",
				"logo": "<svg-string-element>",
				"active": "<trueOrFalse>"
			},
			...
		],
		"metadata": {
			"total_page": number,
			"total_data": number,
			"page": number,
			"link": {
				"next": "<baseUrl?limit=...&page=page+1>",
				"prev": "<baseUrl?limit=...&page=page-1>"
			}
		}
	}
}
```

### Get Kabinet

| method | GET |
| --- | --- |
| url | kabinet/:id |

**Response:**

```json
// status code: 200
{
	"status": "success",
	"data": {
		"kabinet": {
			"id": "<id>"
			"name": "<name>",
			"priode": "<year>",
			"description": "<description>",
			"logo": "<svg-string-element>",
			"active": "<trueOrFalse>"
		}
	}
}

// status code: 404
{
	"status": "not found",
	"message": "kabinet tidak ditemukan"
}
```

### Update Kabinet

| method | PUT |
| --- | --- |
| url | kabinet/:id |

**Body:**

```json
{
	"name": String,
	"priode": Number,
	"description": Text,
	"logo": String,
	"active": Boolean->default: false
}
```

**Response:**

```json
**// status code: 200
{
	"status": "success",
	"message": "kabinet berhasil diperbarui"
}**
```

### Delete Kabinet

| method | DELETE |
| --- | --- |
| url | kabinet/:id |

**Response:**

```json
**// status code: 200
{
	"status": "success",
	"message": "kabinet berhasil dihapus"
}**
```

## 2. Department

### Create Department

| method | POST |
| --- | --- |
| url | departments |

**Body:**

```json
{
	"name": String*,
	"division": enum("BE", "DP")*,
	"logo": String
}
```

**Response:**

```json
// status code: 201
{
	"status": "success",
	"message": "departemen baru berhasil dibuat"
}
```

### Get All Department

| method | GET |
| --- | --- |
| url | departments |

**Query:**

| limit | number |
| --- | --- |
| page | number |
| search | string |

**Response:**

```json
// status code: 200
{
	"status": "success",
	"data": {
		"departments": [
			{
				"id": "<id>",
				"name": "<name>",
				"division": "<division>",
				"logo": "<urlLogo>"
			},
			...
		],
		"metadata": {
			"total_page": number,
			"total_data": number,
			"page": number,
			"link": {
				"next": "<baseUrl?limit=...&page=page+1>",
				"prev": "<baseUrl?limit=...&page=page-1>"
			}
		}
	}
}
```

### Get Department

| method | GET |
| --- | --- |
| url | departments/:id |

**Response:**

```json
// status code: 200
{
	"status": "success",
	"data": {
		"department": {
			"id": "<id>"
			"name": "<name>",
			"division": "<division>",
			"logo": "<urlLogo>"
		}
	}
}

// status code: 404
{
	"status": "not found",
	"message": "departemen tidak ditemukan"
}
```

### Update Department

| method | PUT |
| --- | --- |
| url | departments/:id |

**Body:**

```json
{
	"name": String,
	"division": enum("BE", "DP"),
	"logo": String
}
```

**Response:**

```json
**// status code: 200
{
	"status": "success",
	"message": "departemen berhasil diperbarui"
}**
```

### Delete Department

| method | DELETE |
| --- | --- |
| url | departments/:id |

**Response:**

```json
**// status code: 200
{
	"status": "success",
	"message": "departemen berhasil dihapus"
}**
```

## 3. Proker

### Create Proker

| method | POST |
| --- | --- |
| url | prokers |

**Body:**

```json
{
	"name": String*,
	"thumbnail": String*,
	"department_id": Number*,
	"link": String,
	"post_id": Number
}
```

**Response:**

```json
// status code: 201
{
	"status": "success",
	"message": "proker baru berhasil dibuat"
}
```

### Get All Proker

| method | GET |
| --- | --- |
| url | prokers |

**Query:**

| limit | number |
| --- | --- |
| page | number |
| department_id | number |
| search | string |

**Response:**

```json
// status code: 200
{
	"status": "success",
	"data": {
		"prokers": [
			{
				"id": "<id>",
				"name": "<name>",
				"thumbnail": "<thumbnail>",
				"department": {
					"id": "<departmentId>",
					"name": "<departmentName>"
				},
				"link": "<link>",
				"post_id": "<postId>"
			},
			...
		],
		"metadata": {
			"total_page": number,
			"total_data": number,
			"page": number,
			"link": {
				"next": "<baseUrl?limit=...&page=page+1>",
				"prev": "<baseUrl?limit=...&page=page-1>"
			}
		}
	}
}
```

### Get Proker

| method | GET |
| --- | --- |
| url | prokers/:id |

**Response:**

```json
// status code: 200
{
	"status": "success",
	"data": {
		"prokers": {
			"id": "<id>"
			"name": "<name>",
			"thumbnail": "<thumbnail>",
			"link": "<link>",
			"department": {
				"id": "<departmentId>"
				"name": "<departmentName>",
				"division": "<division>"
			},
			"post_id": "<postId>"
		}
	}
}

// status code: 404
{
	"status": "not found",
	"message": "proker tidak ditemukan"
}
```

### Update Proker

| method | PUT |
| --- | --- |
| url | prokers/:id |

**Body:**

```json
{
	"name": String,
	"thumbnail": String,
	"link": String,
	"department_id": Number
}
```

**Response:**

```json
**// status code: 200
{
	"status": "success",
	"message": "proker berhasil diperbarui"
}**
```

### Delete Proker

| method | DELETE |
| --- | --- |
| url | prokers/:id |

**Response:**

```json
**// status code: 200
{
	"status": "success",
	"message": "Proker berhasil dihapus"
}**
```