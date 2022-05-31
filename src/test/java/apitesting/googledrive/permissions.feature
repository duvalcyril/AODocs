Feature: permissions

  Scenario: Create a folder, share it, upload a file then check permissions

    * def authorizationToken = 'Bearer ' + bearerToken

    * def folderCreation =
      """
      {
        "mimeType": "application/vnd.google-apps.folder",
        "name": "AODocs_testFolder"
      }
      """
    * def userShareFolder =
     """
      {
        "type": "user",
        "role": "reader",
        "emailAddress":"test.aodocs3@gmail.com"
      }
      """

    Given url driveUrl
    And header Authorization = authorizationToken
    And request folderCreation
    When method post
    Then status 200

    * def folderId = $.id

    Given url driveUrl + '/' + folderId + '/permissions'
    And header Authorization = authorizationToken
    And request userShareFolder
    When method post
    Then status 200

    * def userId = $.id

    Given url 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'
    And multipart file metaData = { contentType: 'application/json', upload-option: {name:'test.txt',parents:[folderId]}}
    And multipart file testFile = { read: 'test.txt', contentType: 'text/plain'}
    And header Authorization = authorizationToken
    When method post
    Then status 200

    * def fileId = $.id

    Given url driveUrl + '/' + fileId + '/permissions'
    And header Authorization = authorizationToken
    When method get
    Then status 200
    And match $.permissions[0].id == userId
    And match $.permissions[0].role == 'reader'

