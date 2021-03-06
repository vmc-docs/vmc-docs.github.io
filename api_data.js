define({ "api": [
  {
    "type": "patch",
    "url": "v1/appointments/accept/:id",
    "title": "Accept Appointment",
    "description": "<p>Update accepted field of appointment document</p>",
    "version": "0.1.0",
    "name": "AcceptAppointment",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only appointment with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Appointment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "post",
    "url": "v1/appointments",
    "title": "Create Appointment",
    "description": "<p>Create a new appointment</p>",
    "version": "0.1.0",
    "name": "CreateAppointment",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment, appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Appointment's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speciality",
            "description": "<p>Medic speciality preference</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ccPreference",
            "description": "<p>Consultation channel preferences</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "date",
            "description": "<p>Appointment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "from",
            "description": "<p>Appointment start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "to",
            "description": "<p>Appointment end time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "patch",
    "url": "v1/appointments/:id",
    "title": "Delete Appointment",
    "description": "<p>Delete a appointment</p>",
    "version": "0.1.0",
    "name": "DeleteAppointment",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only appointment with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Appointment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "get",
    "url": "v1/appointments/:id",
    "title": "Get Appointment",
    "description": "<p>Get appointment information</p>",
    "version": "0.1.0",
    "name": "GetAppointment",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only appointment with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Appointment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "get",
    "url": "v1/appointments",
    "title": "List Appointments",
    "description": "<p>Get a list of appointments</p>",
    "version": "0.1.0",
    "name": "ListAppointments",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Appointment's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "date",
            "description": "<p>Appointment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "from",
            "description": "<p>Appointment start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "to",
            "description": "<p>Appointment end time</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "put",
    "url": "v1/appointments/:id",
    "title": "Replace Appointment",
    "description": "<p>Replace the whole appointment document with a new one</p>",
    "version": "0.1.0",
    "name": "ReplaceAppointment",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speciality",
            "description": "<p>Medic speciality preference</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ccPreference",
            "description": "<p>Consultation channel preferences</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "date",
            "description": "<p>Appointment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "from",
            "description": "<p>Appointment start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "to",
            "description": "<p>Appointment end time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only appointment with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Appointment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "patch",
    "url": "v1/appointments/:id",
    "title": "Update Appointment",
    "description": "<p>Update some fields of a appointment document</p>",
    "version": "0.1.0",
    "name": "UpdateAppointment",
    "group": "Appointment",
    "permission": [
      {
        "name": "appointment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speciality",
            "description": "<p>Medic speciality preference</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ccPreference",
            "description": "<p>Consultation channel preferences</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "date",
            "description": "<p>Appointment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "from",
            "description": "<p>Appointment start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..8",
            "optional": true,
            "field": "to",
            "description": "<p>Appointment end time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Appointment notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated appointments can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only appointment with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Appointment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/appointment.route.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "post",
    "url": "v1/consultations",
    "title": "Create Consultation",
    "description": "<p>Create a new consultation</p>",
    "version": "0.1.0",
    "name": "CreateConsultation",
    "group": "Consultation",
    "permission": [
      {
        "name": "consultation, consultation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Consultation's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": true,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Consultation id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated consultations can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/consultation.route.js",
    "groupTitle": "Consultation"
  },
  {
    "type": "patch",
    "url": "v1/consultations/:id",
    "title": "Delete Consultation",
    "description": "<p>Delete a consultation</p>",
    "version": "0.1.0",
    "name": "DeleteConsultation",
    "group": "Consultation",
    "permission": [
      {
        "name": "consultation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated consultations can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only consultation with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Consultation does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/consultation.route.js",
    "groupTitle": "Consultation"
  },
  {
    "type": "get",
    "url": "v1/consultations/:id",
    "title": "Get Consultation",
    "description": "<p>Get consultation information</p>",
    "version": "0.1.0",
    "name": "GetConsultation",
    "group": "Consultation",
    "permission": [
      {
        "name": "consultation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Consultation id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated consultations can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only consultation with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Consultation does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/consultation.route.js",
    "groupTitle": "Consultation"
  },
  {
    "type": "get",
    "url": "v1/consultations",
    "title": "List Consultations",
    "description": "<p>Get a list of consultations</p>",
    "version": "0.1.0",
    "name": "ListConsultations",
    "group": "Consultation",
    "permission": [
      {
        "name": "consultation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Consultation's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Consultation id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated consultations can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/consultation.route.js",
    "groupTitle": "Consultation"
  },
  {
    "type": "put",
    "url": "v1/consultations/:id",
    "title": "Replace Consultation",
    "description": "<p>Replace the whole consultation document with a new one</p>",
    "version": "0.1.0",
    "name": "ReplaceConsultation",
    "group": "Consultation",
    "permission": [
      {
        "name": "consultation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": true,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Consultation id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated consultations can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only consultation with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Consultation does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/consultation.route.js",
    "groupTitle": "Consultation"
  },
  {
    "type": "patch",
    "url": "v1/consultations/:id",
    "title": "Update Consultation",
    "description": "<p>Update some fields of a consultation document</p>",
    "version": "0.1.0",
    "name": "UpdateConsultation",
    "group": "Consultation",
    "permission": [
      {
        "name": "consultation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": true,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Consultation id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medic",
            "description": "<p>Medic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>Patient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "symptoms",
            "description": "<p>Patient's symptoms</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "notes",
            "description": "<p>Medic's notes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated consultations can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only consultation with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Consultation does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/consultation.route.js",
    "groupTitle": "Consultation"
  },
  {
    "type": "post",
    "url": "v1/medics",
    "title": "Create Medic",
    "description": "<p>Create a new medic</p>",
    "version": "0.1.0",
    "name": "CreateMedic",
    "group": "Medic",
    "permission": [
      {
        "name": "medic, medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Medic's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..256",
            "optional": true,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{11..22}"
            ],
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Medic's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Medic's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Medic's phoneNumber</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "patch",
    "url": "v1/medics/:id",
    "title": "Delete Medic",
    "description": "<p>Delete a medic</p>",
    "version": "0.1.0",
    "name": "DeleteMedic",
    "group": "Medic",
    "permission": [
      {
        "name": "medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only medic with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Medic does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "get",
    "url": "v1/medics/fetch/medic/",
    "title": "Find Medic",
    "description": "<p>Fnd by medic information</p>",
    "version": "0.1.0",
    "name": "FindMedic",
    "group": "Medic",
    "permission": [
      {
        "name": "medic, medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Medic's email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Medic's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Medic's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only medic with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Medic does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "get",
    "url": "v1/medics/:id",
    "title": "Get Medic",
    "description": "<p>Get medic information</p>",
    "version": "0.1.0",
    "name": "GetMedic",
    "group": "Medic",
    "permission": [
      {
        "name": "medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Medic's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Medic's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only medic with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Medic does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "get",
    "url": "v1/medics",
    "title": "List Medics",
    "description": "<p>Get a list of medics</p>",
    "version": "0.1.0",
    "name": "ListMedics",
    "group": "Medic",
    "permission": [
      {
        "name": "medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Medic's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "medics",
            "description": "<p>List of medics.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "put",
    "url": "v1/medics/:id",
    "title": "Replace Medic",
    "description": "<p>Replace the whole medic document with a new one</p>",
    "version": "0.1.0",
    "name": "ReplaceMedic",
    "group": "Medic",
    "permission": [
      {
        "name": "medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..256",
            "optional": true,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{11..22}"
            ],
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Medic's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Medic's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Medic's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only medic with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Medic does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "patch",
    "url": "v1/medics/:id",
    "title": "Update Medic",
    "description": "<p>Update some fields of a medic document</p>",
    "version": "0.1.0",
    "name": "UpdateMedic",
    "group": "Medic",
    "permission": [
      {
        "name": "medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..256",
            "optional": true,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{11..22}"
            ],
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Medic's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Medic's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Medic's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Medic's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Medic's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Medic's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Medic's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Medic's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Medic's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Medic's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated medics can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only medic with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Medic does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/medic.route.js",
    "groupTitle": "Medic"
  },
  {
    "type": "post",
    "url": "v1/patients",
    "title": "Create Patient",
    "description": "<p>Create a new patient</p>",
    "version": "0.1.0",
    "name": "CreatePatient",
    "group": "Patient",
    "permission": [
      {
        "name": "patient, medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Patient's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..256",
            "optional": true,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{11..22}"
            ],
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Patient's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Patient's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Patient's phoneNumber</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  },
  {
    "type": "patch",
    "url": "v1/patients/:id",
    "title": "Delete Patient",
    "description": "<p>Delete a patient</p>",
    "version": "0.1.0",
    "name": "DeletePatient",
    "group": "Patient",
    "permission": [
      {
        "name": "patient"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only patient with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Patient does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  },
  {
    "type": "get",
    "url": "v1/patients/fetch/patient/",
    "title": "Find Patient",
    "description": "<p>Fnd by patient information</p>",
    "version": "0.1.0",
    "name": "FindPatient",
    "group": "Patient",
    "permission": [
      {
        "name": "patient, medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Patient's email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Patient's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Patient's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only patient with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Patient does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  },
  {
    "type": "get",
    "url": "v1/patients/:id",
    "title": "Get Patient",
    "description": "<p>Get patient information</p>",
    "version": "0.1.0",
    "name": "GetPatient",
    "group": "Patient",
    "permission": [
      {
        "name": "patient"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Patient's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Patient's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only patient with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Patient does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  },
  {
    "type": "get",
    "url": "v1/patients",
    "title": "List Patients",
    "description": "<p>Get a list of patients</p>",
    "version": "0.1.0",
    "name": "ListPatients",
    "group": "Patient",
    "permission": [
      {
        "name": "medic"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Patient's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "patients",
            "description": "<p>List of patients.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  },
  {
    "type": "put",
    "url": "v1/patients/:id",
    "title": "Replace Patient",
    "description": "<p>Replace the whole patient document with a new one</p>",
    "version": "0.1.0",
    "name": "ReplacePatient",
    "group": "Patient",
    "permission": [
      {
        "name": "patient"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..256",
            "optional": true,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{11..22}"
            ],
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Patient's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Patient's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Patient's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only patient with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Patient does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  },
  {
    "type": "patch",
    "url": "v1/patients/:id",
    "title": "Update Patient",
    "description": "<p>Update some fields of a patient document</p>",
    "version": "0.1.0",
    "name": "UpdatePatient",
    "group": "Patient",
    "permission": [
      {
        "name": "patient"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..256",
            "optional": true,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "18..",
            "optional": true,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "male",
              "female"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{11..22}"
            ],
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Patient's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "basic",
              "premium"
            ],
            "optional": true,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Patient's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Patient's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Patient's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Patient's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Patient's address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Patient's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Patient's phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>Patient's plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated patients can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only patient with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Patient does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/patient.route.js",
    "groupTitle": "Patient"
  }
] });
