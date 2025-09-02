// =============================================================================
// My PURCHASE CONSUMPTION - GOOGLE APPS SCRIPT BACKEND
// Consolidated from multiple files for better organization
// =============================================================================

// Get admin email from script properties, fallback to default if not set
function getAdminEmail() {
  try {
    const properties = PropertiesService.getScriptProperties();
    const adminEmail = properties.getProperty("ADMIN_EMAIL_ID");
    return adminEmail || "techlever45@gmail.com"; // fallback to default
  } catch (error) {
    console.log("Error reading admin email from properties:", error);
    return "techlever45@gmail.com"; // fallback to default
  }
}

const DEFAULT_USER_PREFERENCES = {
  locale: "en-GB",
  currency: "GBP",
  dateFormat: "DD/MM/YYYY",
};

var _ = LodashGS.load();

// =============================================================================
// CORE ENTRY POINTS & INITIALIZATION (REQUIRED FOR GAS RUNTIME)
// =============================================================================

function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setFaviconUrl("https://heartstchr.github.io/img/borl.png")
    .setTitle("Inventory Management")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function includes(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// =============================================================================
// AUTHENTICATION & USER MANAGEMENT
// =============================================================================

function getLoggedInUser() {
  return Session.getActiveUser().getEmail();
}

function getUserPreferences() {
  try {
    const properties = PropertiesService.getUserProperties();
    const savedPreferences = properties.getProperty("USER_PREFERENCES");

    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences);
      // Merge with defaults in case new preferences are added
      return { ...DEFAULT_USER_PREFERENCES, ...parsedPreferences };
    }

    // Return defaults if no saved preferences
    return DEFAULT_USER_PREFERENCES;
  } catch (error) {
    console.log("Error loading user preferences:", error);
    return DEFAULT_USER_PREFERENCES;
  }
}

function saveUserPreferences(preferences) {
  try {
    const properties = PropertiesService.getUserProperties();
    const mergedPreferences = { ...DEFAULT_USER_PREFERENCES, ...preferences };
    properties.setProperty(
      "USER_PREFERENCES",
      JSON.stringify(mergedPreferences)
    );
    return { success: true, preferences: mergedPreferences };
  } catch (error) {
    console.log("Error saving user preferences:", error);
    return { success: false, error: error.toString() };
  }
}

function resetUserPreferences() {
  try {
    const properties = PropertiesService.getUserProperties();
    properties.deleteProperty("USER_PREFERENCES");
    return { success: true, preferences: DEFAULT_USER_PREFERENCES };
  } catch (error) {
    console.log("Error resetting user preferences:", error);
    return { success: false, error: error.toString() };
  }
}

function getAdminPreferences() {
  try {
    const properties = PropertiesService.getScriptProperties();
    const adminEmail = properties.getProperty("ADMIN_EMAIL_ID");
    return {
      adminEmail: adminEmail || "ne99on@gmail.com",
    };
  } catch (error) {
    console.log("Error loading admin preferences:", error);
    return {
      adminEmail: "ne99on@gmail.com",
    };
  }
}

function saveAdminPreferences(adminPreferences) {
  try {
    const properties = PropertiesService.getScriptProperties();
    if (adminPreferences.adminEmail) {
      properties.setProperty("ADMIN_EMAIL_ID", adminPreferences.adminEmail);
    }
    return { success: true, adminPreferences: getAdminPreferences() };
  } catch (error) {
    console.log("Error saving admin preferences:", error);
    return { success: false, error: error.toString() };
  }
}

// =============================================================================
// DATA RETRIEVAL FUNCTIONS
// =============================================================================

function getStringifiedTables(tableNames) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var o = {};
  tableNames.forEach((name) => {
    var rng = ss.getRangeByName(name);
    var vals = trimRangeRows(rng).getValues();
    o[name] = vals;
  });
  return o;
}

function GetRecordById(id, tableName) {
  Tamotsu.initialize();
  var Agent;
  Agent = Tamotsu.Table.define({ sheetName: tableName, idColumn: "id" });
  return Agent.find(id);
}

// =============================================================================
// DATA MANIPULATION FUNCTIONS
// =============================================================================

function addEntry(formDataObject, formName) {
  var Agent;
  initialize();
  if (formDataObject.ID) {
    formDataObject.ID = Number(formDataObject.ID);
  }
  try {
    Agent = Table.define({ sheetName: formName, idColumn: "id" });
    formDataObject.created_date = JSON.stringify(new Date());
    var srfEntry = new Agent(formDataObject);
    return Agent.createOrUpdate(srfEntry);
  } catch (error) {
    console.log(error);
    return false;
  }
}

function batchCreate(row, x, formName) {
  var Agent;
  initialize();
  Agent = Table.define({ sheetName: formName, idColumn: "id" });
  const rows = Array(x).fill({ model: row });
  return Agent.batchCreate(rows);
}

function deleteEntryByID(id, tableName) {
  var Agent;
  Tamotsu.initialize();

  try {
    Agent = Tamotsu.Table.define({ sheetName: tableName, idColumn: "id" });
    Agent.find(id).destroy();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function UpdateAttributes(sheetName, id, updateObject) {
  var Agent;
  Tamotsu.initialize();
  Agent = Tamotsu.Table.define({ sheetName: sheetName, idColumn: "id" });
  var row = Agent.find(id);
  return row.updateAttributes(updateObject);
}

// =============================================================================
// FILE MANAGEMENT FUNCTIONS
// =============================================================================

function saveFile2(obj) {
  const FOLDER_ID = "1cHyWooe0RLMPR9zhQIuh0K3vgT6r22oz";
  var blob = Utilities.newBlob(
    Utilities.base64Decode(obj.data),
    obj.mimeType,
    obj.fileName
  );
  var folder = DriveApp.getFolderById(FOLDER_ID);
  return folder.createFile(blob).getUrl();
}

function commitFilesToDB(sheetName, id, formDataObject) {
  var Agent;
  Tamotsu.initialize();
  Agent = Tamotsu.Table.define({ sheetName: sheetName, idColumn: "id" });
  var row = Agent.find(id);
  return row.updateAttributes(formDataObject);
}

// =============================================================================
// EMAIL FUNCTIONS
// =============================================================================

function sendMail(htmlMessage, subject) {
  MailApp.sendEmail({
    to: getAdminEmail(),
    subject: subject,
    htmlBody: htmlMessage,
  });
}

// =============================================================================
// UTILITY FUNCTIONS (USED INTERNALLY)
// =============================================================================

function ArrayToJSON(array2D) {
  const header = array2D[0];
  const body = array2D.slice(1);
  const arr2 = body.map((el) => {
    let obj = {};
    for (let i = 0; i < el.length; ++i) {
      obj[header[i]] = el[i];
    }
    return obj;
  });
  return arr2;
}

function trimRangeRows(range) {
  var values = range.getValues();
  for (var rowIndex = values.length - 1; rowIndex >= 0; rowIndex--) {
    if (values[rowIndex].join("") !== "") {
      break;
    }
  }
  return range.offset(
    (rowOffset = 0),
    (columnOffset = 0),
    (numRows = rowIndex + 1)
  );
}

// =============================================================================
// LEGACY/POTENTIALLY UNUSED FUNCTIONS (KEPT FOR COMPATIBILITY)
// =============================================================================

function GetTableDataSource(sheetName) {
  Tamotsu.initialize();
  var Agent;
  var tableDataSource = {};
  Agent = Tamotsu.Table.define({ sheetName: sheetName, idColumn: "id" });
  var dataTable = Agent.all();
  var fields = Object.keys(Agent.first());
  fields.splice(0, 1);

  cols = _.map(fields, function (el) {
    var obj = {};
    obj.field = el;
    obj.label = _.startCase(el);
    return obj;
  });
  tableDataSource.columns = cols;
  tableDataSource.items = dataTable.reverse();
  return tableDataSource;
}

// =============================================================================
// COMMENTED OUT - CONFIRMED UNUSED FUNCTIONS
// =============================================================================

/*
// UNUSED - Legacy file upload function
function saveFile(fileObjects) {
  fileObjects.forEach((o) => {
    var blob = Utilities.newBlob(
      Utilities.base64Decode(o.data),
      o.mimeType,
      o.fileName
    );
    DriveApp.createFile(blob).getId();
  });
}

// UNUSED UTILITY FUNCTIONS
function getDateBefore(days) {
  var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
  return new Date(now.getTime() - days * MILLIS_PER_DAY);
}

function dateDiff(dt_f, dt_i) {
  var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
  var diff = new Date(dt_f).getTime() - new Date(dt_i).getTime();
  return diff / MILLIS_PER_DAY;
}

function humanize(str) {
  var i,
    frags = str.split("_");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
}

function JSONToArray(jsonArray) {
  var header = [];
  for (const [k, v] of Object.entries(jsonArray[0])) {
    header.push(k);
  }
  return jsonArray.map((r) => {
    const a = [];
    for (let i = 0; i < header.length; ++i) {
      a.push(r[header[i]]);
    }
    return a;
  });
}

function getDropdowns(optionSources) {
  let obj = {};
  try {
    optionSources.forEach((source) => {
      obj[source] = flattenModelInJSON(NamedRangeToJSON(source));
    });
    return obj;
  } catch (error) {}
}

function getIndexedDropdowns(optionSources) {
  let obj = {};
  try {
    optionSources.forEach((source) => {
      let o = {};
      const jsons = flattenModelInJSON(NamedRangeToJSON(source));
      jsons.map((row) => {
        o[row["id"]] = row["name"];
      });
      obj[source] = o;
    });
    return obj;
  } catch (error) {}
}

function flattenModelInJSON(JSONArray) {
  try {
    let arr = JSONArray.map((el) => {
      let o = JSON.parse(el.model);
      o.id = el.id;
      Logger.log(o);
      return o;
    });
    return arr;
  } catch (error) {}
}

function NamedRangeToJSON(rangeName) {
  var rng = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(rangeName);
  var vals = trimRangeRows(rng).getValues();
  return ArrayToJSON(vals);
}

function indexedTable(rangeName, index_col_name, value_col_name) {
  var rng = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(rangeName);
  var vals = trimRangeRows(rng).getValues();
  const jsons = ArrayToJSON(vals);
  let o = {};
  jsons.map((row) => {
    o[row[index_col_name]] = row[value_col_name];
  });
  return o;
}

// UNUSED SETUP FUNCTIONS
function SetUp() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var templateSheet = ss.getSheetByName("template");

  var schema = [
    "Payouts",
    "PaymentsReceived",
    "PaymentReceivedCategories",
    "PayoutsCategories",
  ];

  schema.forEach((name) => {
    if (ss.getSheetByName(name) == null) {
      ss.insertSheet(name, { template: templateSheet });
    } else {
      return ss.getSheetByName(name);
    }
  });

  schema.forEach((name) => {
    if (ss.getRangeByName(name) == null) {
      ss.setNamedRange(
        "tbl_" + name,
        ss.getSheetByName(name).getRange("A1:D1000")
      );
    }
  });
}

function _GetSheetByName(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var templateSheet = ss.getSheetByName("template");
  if (ss.getSheetByName(name) == null) {
    ss.insertSheet(name, { template: templateSheet });
  } else {
    return ss.getSheetByName(name);
  }
}

function _GetNamedRange(name) {
  var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(name);
  if (range != null) {
    Logger.log(range.getNumColumns());
  }
}

function _DeleteSheets(arrayOfSheetNames) {
  var ss = SpreadsheetApp.getActive();
  arrayOfSheetNames.forEach((name) => {
    var sheet = ss.getSheetByName(name);
    if (sheet != null) {
      ss.deleteSheet(sheet);
    }
  });
}

function fssfD() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setNamedRange(
    "tbl_etcs_po_request",
    spreadsheet.getRange("A1:B1000")
  );
}
*/
