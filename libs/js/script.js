
// top: Search Box

$("#searchInp").on("keyup", function () {

  txt = $('#searchInp').val();

  if ($("#personnelBtn").hasClass("active")) { 
  
    $.ajax({
      url: "libs/php/searchPersonnel.php",
      type: "POST",  
      dataType: "json",
      data: {
        txt: txt
      },    
      success: function(result) {
    
        if(typeof result === 'string'){ result = $.parseJSON(result);}

        if (result.status.name == "ok") {       

          var data = result['data']['found'];

          $('#personnelTableBody').html("");
    
          var frag = document.createDocumentFragment();

          var tableRow, lastName, jobTitle, firstName, department,location, email;

          data.forEach(function(item, index) {

            lastName = document.createTextNode(item.lastName);
            firstName = document.createTextNode(item.firstName);
            jobTitle = document.createTextNode(item.jobTitle);
            department = document.createTextNode(item.departmentName);
            location = document.createTextNode(item.locationName);
            email = document.createTextNode(item.email);

            tableRow = document.createElement("tr");
    
              var tdName = document.createElement("td");
              tdName.classList = "align-middle text-nowrap";  
              tdName.append(lastName, ", ", firstName);

              var tdJobTitle = document.createElement("td");            
              tdJobTitle.classList = "align-middle text-nowrap d-none d-sm-block";
              tdJobTitle.append(jobTitle);

              var tdDepartment = document.createElement("td");
              tdDepartment.classList = "align-middle text-nowrap d-md-table-cell";
              tdDepartment.append(department);

              var tdLocation = document.createElement("td");
              tdLocation.classList = "align-middle text-nowrap d-none d-md-table-cell";
              tdLocation.append(location);
              
              var tdEmail = document.createElement("td");
              tdEmail.classList = "align-middle text-nowrap d-none d-md-table-cell";
              tdEmail.append(email);

              var buttons = document.createElement("td");
              buttons.classList = "text-end text-nowrap";

              var editButton = document.createElement("BUTTON");
              editButton.setAttribute("type", "button");
              editButton.classList = "btn btn-primary btn-sm "; 
              editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>';
              editButton.dataset.bsToggle = "modal";
              editButton.dataset.bsTarget = "#editPersonnelModal";
              editButton.dataset.id = item.id;
              
              var deleteButton = document.createElement("BUTTON");
              deleteButton.setAttribute("type", "button");
              deleteButton.classList = "btn btn-primary btn-sm";
              deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';
              deleteButton.dataset.bsToggle = "modal";
              deleteButton.dataset.bsTarget = "#deletePersonnelModal";
              deleteButton.dataset.id = item.id;

              buttons.append(editButton, " ", deleteButton);

            tableRow.append(tdName, tdJobTitle, tdDepartment, tdLocation, tdEmail, buttons);
            
            frag.append(tableRow);

          });               
          
           $('#personnelTableBody').append(frag);  
      
        }

      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }
    }); 

  }

  if ($("#departmentsBtn").hasClass("active")) { 
    
    $.ajax({
      url: "libs/php/searchDepartments.php",
      type: "POST",  
      dataType: "json",
      data: {
        txt: txt
      },    
      success: function(result) {
    
        if(typeof result === 'string'){ result = $.parseJSON(result);}

        if (result.status.name == "ok") {    

          var data = result['data']['found'];

          $('#departmentTableBody').html("");

          var frag = document.createDocumentFragment();

          var tableRow, id, department, location;

          data.forEach(function(item, index) {

            department = document.createTextNode(item.name);
            location = document.createTextNode(item.location);

            tableRow = document.createElement("tr");
    
              var tdDepartment = document.createElement("td");
              tdDepartment.classList = "align-middle text-nowrap d-md-table-cell";
              tdDepartment.append(department);

              var tdLocation = document.createElement("td");
              tdLocation.classList = "align-middle text-nowrap d-md-table-cell";
              tdLocation.append(location);
              
              var buttons = document.createElement("td");  buttons.classList = "text-end text-nowrap";

              var editButton = document.createElement("BUTTON");
              editButton.setAttribute("type", "button");
              editButton.classList = "btn btn-primary btn-sm "; 
              editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>';
              editButton.dataset.bsToggle = "modal";
              editButton.dataset.bsTarget = "#editDepartmentModal";
              editButton.dataset.id = item.id;
              
              var deleteButton = document.createElement("BUTTON");
              deleteButton.setAttribute("type", "button");
              deleteButton.classList = "btn btn-primary btn-sm";
              deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';
              deleteButton.dataset.bsToggle = "modal";
              deleteButton.dataset.bsTarget = "#deleteDepartmentModal";
              deleteButton.dataset.id = item.id;

              buttons.append(editButton, " ", deleteButton);

            tableRow.append(tdDepartment, tdLocation, buttons);
            
            frag.append(tableRow);

          });               
  
          $('#departmentTableBody').append(frag);    
              
        }

      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }

    }); 

  }

  if ($("#locationsBtn").hasClass("active")) { 

    $.ajax({
      url: "libs/php/searchLocations.php",
      type: "POST",  
      dataType: "json",
      data: {
        txt: txt
      },    
      success: function(result) {
    
        if(typeof result === 'string'){ result = $.parseJSON(result);}

        if (result.status.name == "ok") {    

          var data = result['data']['found'];

          $('#locationTableBody').html("");

          var frag = document.createDocumentFragment();

          var tableRow, id, location;

          data.forEach(function(item, index) {

            location = document.createTextNode(item.name);

            tableRow = document.createElement("tr");
    
              var tdLocation = document.createElement("td");
              tdLocation.classList = "align-middle text-nowrap d-md-table-cell";
              tdLocation.append(location);
              
              var buttons = document.createElement("td");  buttons.classList = "text-end text-nowrap";

              var editButton = document.createElement("BUTTON");
              editButton.setAttribute("type", "button");
              editButton.classList = "btn btn-primary btn-sm "; 
              editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>';
              editButton.dataset.bsToggle = "modal";
              editButton.dataset.bsTarget = "#editLocationModal";
              editButton.dataset.id = item.id;
              
              var deleteButton = document.createElement("BUTTON");
              deleteButton.setAttribute("type", "button");
              deleteButton.classList = "btn btn-primary btn-sm";
              deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';
              deleteButton.dataset.bsToggle = "modal";
              deleteButton.dataset.bsTarget = "#removeLocationModal";
              deleteButton.dataset.id = item.id;

              buttons.append(editButton, " ", deleteButton);

            tableRow.append(tdLocation, buttons);
            
            frag.append(tableRow);

          });        
          
          $('#locationTableBody').append(frag); 
          
          
        }

      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }
    }); 

  }
  
});

// top: Refresh Button

$("#refreshBtn").click(function () {
  $('#searchInp').val("");
  
  if ($("#personnelBtn").hasClass("active")) {

    $("#personnelBtn").click();

  } else {
    if ($("#departmentsBtn").hasClass("active")) {

      $("#departmentsBtn").click();

    } else {
      
      $("#locationsBtn").click();
      
    }
    
  }
  
});

// top: Filter Button

$("#filterBtn").click(function () {

// ## need to disable filter if departments or location tab is selected, before reaching this function

    $('#filterDepartment').empty();
    $('#filterLocation').empty();

    $("#filterDepartment").prop('disabled', false);
    $("#filterLocation").prop('disabled', false);
    
    $('#filterDepartment').append( $("<option>",{ value: 'name', text:  "All" }) )
    $('#filterLocation').append( $("<option>",{ value: 'name', text:  "All" }) )

    const departments = [];
    const locations = [];

    $.ajax({
        
      url: "libs/php/getAll.php",
      type: "POST",   
          
      success: function(result) {
        
        if(typeof result === 'string'){ result = $.parseJSON(result); }

        if (result.status.name == "ok") {  

          data = result['data'];

          // populating the selectable options with unique values

          for(element in data){

            if(locations.indexOf(data[element].location) === -1){
              locations.push(data[element].location);
            }

            if(departments.indexOf(data[element].department) === -1){
              departments.push(data[element].department);
            }
            
          };

          departments.sort();
          locations.sort();

          // adding sorted unique elements to the html dropdowns
          
          for(element in departments){
             $('#filterDepartment').append( $("<option>",{ value: 'department', text: departments[element] }) );
          }

          for(element in locations){
             $('#filterLocation').append( $("<option>",{ value: 'location', text: locations[element] }) );
          }
          

          $("#filterModal").modal("show");  
    
        }
            
      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }

  });

  
    
});

    function applyFilter(selectedFilter){
      var id = selectedFilter.id;

      // used within add department modal
      if(id === "existingLocation"){
        $("#newLocation").val('');
        $("#newLocation").attr('disabled','disabled');
        $("#newDepartment").prop('disabled', false);
      }

      // used within add department modal
      if(id === "newLocation"){
        if($("#newLocation").val() !== ""){
          $("#newDepartment").prop('disabled', false);
          $("#existingLocation").attr('disabled', 'disabled');
        }else{
          $("#newDepartment").attr('disabled', 'disabled');
          $("#existingLocation").prop('disabled', false);
        } 
      }
          
    }

    $("#filterSubmit").click(function (e) {
          
      e.preventDefault();

      var selectedDepartment = $("#filterDepartment :selected").text().toLowerCase();
      var selectedLocation = $("#filterLocation :selected").text().toLowerCase();
    
      // if both equal ALL then user has not made a selection. No action is taken.
      if(selectedDepartment !== selectedLocation){
        
        $.ajax({
          url: "libs/php/getAll.php",
          type: "POST",      
          success: function(result) {
          
            // console.log(JSON.stringify(result));

            if(typeof result === 'string'){ result = $.parseJSON(result); }
          
            if (result.status.name == "ok") {  
                          
              data = result['data'];
              
              $('#personnelTableBody').html("");                               
              
              var frag = document.createDocumentFragment();

              // variables for table row to be displayed
              var tableRow, id, lastName, firstName, jobTitle, department, location, email;
              
              // variables for current element in loop
              var thisDepartment, thisLocation;

              data.forEach(function(item, index) {  
            
                thisDepartment = item['department'].toLowerCase();
                thisLocation = item['location'].toLowerCase();
                
                  id = document.createTextNode(item.id);
                  lastName = document.createTextNode(item.lastName);
                  firstName = document.createTextNode(item.firstName);
                  jobTitle = document.createTextNode(item.jobTitle);
                  department = document.createTextNode(item.department);
                  location = document.createTextNode(item.location);
                  email = document.createTextNode(item.email);

                  tableRow = document.createElement("tr");

                    var tdName       = document.createElement("td");  tdName.classList = "align-middle text-nowrap";      tdName.append(lastName, ", ", firstName);
                    var tdJobTitle   = document.createElement("td");  tdJobTitle.classList = "align-middle text-nowrap d-none d-sm-block";  tdJobTitle.append(jobTitle);
                    var tdDepartment = document.createElement("td");  tdDepartment.classList = "align-middle text-nowrap d-md-table-cell"; tdDepartment.append(department);
                    var tdLocation   = document.createElement("td");  tdLocation.classList = "align-middle text-nowrap d-none d-md-table-cell";  tdLocation.append(location);
                    var tdEmail      = document.createElement("td");  tdEmail.classList = "align-middle text-nowrap d-none d-md-table-cell"; tdEmail.append(email);
                 
                    var buttons = document.createElement("td");   buttons.classList = "text-end text-nowrap";

                    var editButton = document.createElement("BUTTON");  editButton.setAttribute("type", "button"); editButton.classList = "btn btn-primary btn-sm "; 
                    editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>';  editButton.dataset.bsToggle = "modal";
                    editButton.dataset.bsTarget = "#editPersonnelModal";  editButton.dataset.id = item.id;
                    
                    var deleteButton = document.createElement("BUTTON");  deleteButton.setAttribute("type", "button");  deleteButton.classList = "btn btn-primary btn-sm";
                    deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';  deleteButton.dataset.bsToggle = "modal";
                    deleteButton.dataset.bsTarget = "#deletePersonnelModal";  deleteButton.dataset.id = item.id;

                    buttons.append(editButton, " " , deleteButton);

                    tableRow.append(tdName, tdJobTitle, tdDepartment, tdLocation, tdEmail, buttons);
                
                  if( selectedDepartment === "all"){
                    // display all matching locations
                    if(thisLocation === selectedLocation ){  
                        frag.append(tableRow);      
                    }
                  }
                  else{
                    if(selectedLocation === "all"){
                      // display all matching departments
                      if(thisDepartment === selectedDepartment){
                        frag.append(tableRow);   
                      }
                    }
                    else{
                      // display all matching locations and departments
                      if(thisLocation === selectedLocation && thisDepartment === selectedDepartment){
                        frag.append(tableRow);
                      }
                    }
                  }
                
                
              });

              $('#personnelTableBody').append(frag);  
             
                
              var tableEntries = $("#personnelTableBody tr").length;

              if(tableEntries === 0){
                 //$("#noFilterNeeded").show();
                $("#messageModal").find('.modal-body p').text("NO MATCHING ENTRIES");
                $("#messageModal").modal("show");  
              }
             

            } // end if ok
          
          },  // end success 
          error: function(xhr, status, error) {
            console.error('Error: ' + error);
          }
        });
        
        $("#filterModal").modal("hide"); 

      } // end if department not equal location 
      else{ 
        // no selection made so no need to run ajax, just close the modal and refresh
        $("#filterModal").modal("hide"); 
        $("#personnelBtn").click();
        
      }

    });

    
// top: Add Button

$("#addBtn").click(function () {
  
  if ($("#personnelBtn").hasClass("active")) {

    //if browser not closed fields need reset if adding multiple employees

    $("#newPersonnelFirstName").val("");
    $("#newPersonnelLastName").val("");
    $("#newPersonnelJobTitle").val("");
    $("#newPersonnelEmailAddress").val("");
    $("#newPersonnelDepartment option:checked").val("Select");

    $.ajax({
      url: "libs/php/getAllDepartments.php",
      type: "POST",      
      success: function(result) {

        if(typeof result === 'string'){result = $.parseJSON(result);}

        if (result.status.name == "ok"){

          data = result['data'];

          // populating the selectable options

          for(element in data){
            $("#newPersonnelDepartment").append( $("<option>",{ value: data[element].id, text: data[element].name }) );
          };
          
          $("#addEmployeeModal").modal("show");   
    
        }
              
      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }
    });   
  
  }

  
  if ($("#departmentsBtn").hasClass("active")) {
    
    // on opening modal need to ensure all fields are set correctly
    
      $("#existingLocation option:checked").val("Select"); // starts with Select as option
        
      $("#newDepartment").val("");
    

    $.ajax({
      url: "libs/php/getAllLocations.php",
      type: "POST",      
      success: function(result) {

        if(typeof result === 'string'){result = $.parseJSON(result);}

        if (result.status.name == "ok"){

          data = result['data'];

          // populating the selectable options

          for(element in data){
            $("#existingLocation").append( $("<option>",{ value: data[element].id, text: data[element].name }) );
          };
          
          $("#addDepartmentModal").modal("show");   
  
        }
              
      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }
    });   

      
  }
  
  
  if ($("#locationsBtn").hasClass("active")) {
    
    // on opening modal set to empty field
    $("#addNewLocation").val("");

    $("#addLocationModal").modal("show");   
  }
  
});
  
    $("#submitEmployeeButton").click(function (e) {
      
      e.preventDefault();

      formCompleted = true;

      first= $("#newPersonnelFirstName").val();
      last= $("#newPersonnelLastName").val();
      title= $("#newPersonnelJobTitle").val();
      email= $("#newPersonnelEmailAddress").val();
      departmentID=  $("#newPersonnelDepartment option:checked").val();

      if( first === "" || last === "" || title === "" || email === "" || departmentID === "Select"){
        formCompleted = false;
        $("#errorModal").find('.modal-body p').text("Please complete the form.");
        $("#errorModal").modal("show");  
      }else{
        // check email is valid
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = email.match(regex);
        
        if (!isValid) {
          formCompleted = false;
          $("#errorModal").find('.modal-body p').text("Invalid email address.");
          $("#errorModal").modal("show");  
        }
      }


      if(formCompleted){

        $.ajax({
          url: "libs/php/addEmployee.php",
          type: "POST",      
          data: {
            first: first,
            last: last,
            title: title,
            email: email,
            departmentID: departmentID
          },
          success: function(result) {
          
            console.log(JSON.stringify(result));
    
            if(typeof result === 'string'){ result = $.parseJSON(result); }
          
            if (result.status.name == "ok") {  
    
              $("#addEmployeeModal").modal("hide"); 

              $("#messageModal").find('.modal-body p').text("EMPLOYEE ADDED");
              $("#messageModal").modal("show");  
            
            } // end if ok
          
          },  // end success 
          error: function(xhr, status, error) {
            console.error('Error: ' + error);
          }
        });
    
    
      }
      
    });

    $("#submitDepartmentButton").click(function (e) {
      
      e.preventDefault();

      formCompleted = true;

      locationName = $("#existingLocation :selected").text();;
      locationID = $("#existingLocation :selected").val();
    
      department = $("#newDepartment").val();


      if( department === "" || ($("#existingLocation :selected").text() == 'Select') ){
        formCompleted = false;
        $("#errorModal").find('.modal-body p').text("Please complete the form.");
        $("#errorModal").modal("show");  
      }

      if(formCompleted){
        
        $.ajax({
          url: "libs/php/insertDepartment.php",
          type: "POST",      
          data: {
            name: department,
            locationID: locationID,
            locationName: locationName
          },
          success: function(result) {
    
            if(typeof result === 'string'){ result = $.parseJSON(result); }
          
            if (result.status.name == "ok") {  

              $("#addDepartmentModal").modal("hide"); 

              $("#messageModal").find('.modal-body p').text("DEPARTMENT ADDED");
              $("#messageModal").modal("show");  
            }

            if (result.status.name == "exists") {
              $("#errorModal").find('.modal-body p').text("DEPARTMENT ALREADY EXISTS IN THIS LOCATION.");
              $("#errorModal").modal("show"); 
            } 
           
          
          }, 
          error: function(xhr, status, error) {
            console.error('Error: ' + error);
          }
        });

      }

    });

    $("#submitLocationButton").click(function (e) {
      
      e.preventDefault();

      formCompleted = true;

      var location = $('#addNewLocation').val();

       if( location === ""){
        formCompleted = false;
        $("#errorModal").find('.modal-body p').text("Please complete the form.");
        $("#errorModal").modal("show");  
      }

      if(formCompleted){

        $.ajax({
          url: "libs/php/insertLocation.php",
          type: "POST",      
          data: {
            name: location
          },
          success: function(result) {
    
            if(typeof result === 'string'){ result = $.parseJSON(result); }
          
            if (result.status.name == "ok") {  
              $("#addLocationModal").modal("hide"); 
              $("#messageModal").find('.modal-body p').text("LOCATION ADDED");
              $("#messageModal").modal("show"); 
            } // end if ok
          
            if (result.status.name == "exists") {

              $("#errorModal").find('.modal-body p').text("LOCATION ALREADY EXISTS.");
              $("#errorModal").modal("show"); 
            } 

          },  // end success 
          error: function(xhr, status, error) {
            console.error('Error: ' + error);
          }
        });
      }
    
    });


// Tabs: Personnel

$("#personnelBtn").click(function (e) {

  e.preventDefault();

  $("#filterBtn").removeClass("disabled");
   $("#newPersonnelDepartment").empty();
    // $("#newPersonnelDepartment option:checked").val("Select");

    $.ajax({
      url: "libs/php/getAll.php",
      type: "POST",      
      success: function(result) {

        //console.log(JSON.stringify(result));

        if(typeof result === 'string'){ result = $.parseJSON(result); }
    
        if (result.status.name == "ok") {  
          data = result['data'];

            $('#personnelTableBody').html("");
      
            var frag = document.createDocumentFragment();

            var tableRow, lastName, jobTitle, firstName, department,location, email;

            data.forEach(function(item, index) {

              id = document.createTextNode(item.id);  //  id = result['data'][element]['id'];
              lastName = document.createTextNode(item.lastName);
              firstName = document.createTextNode(item.firstName);
              jobTitle = document.createTextNode(item.jobTitle);
              department = document.createTextNode(item.department);
              location = document.createTextNode(item.location);
              email = document.createTextNode(item.email);

              tableRow = document.createElement("tr");
    
                var tdName = document.createElement("td"); tdName.classList = "align-middle text-nowrap";  tdName.append(lastName, ", ", firstName);
                var tdJobTitle = document.createElement("td"); tdJobTitle.classList = "align-middle text-nowrap d-none d-sm-block";  tdJobTitle.append(jobTitle);
                var tdDepartment = document.createElement("td"); tdDepartment.classList = "align-middle text-nowrap d-md-table-cell"; tdDepartment.append(department);
                var tdLocation = document.createElement("td"); tdLocation.classList = "align-middle text-nowrap d-none d-md-table-cell"; tdLocation.append(location);
                var tdEmail = document.createElement("td"); tdEmail.classList = "align-middle text-nowrap d-none d-md-table-cell"; tdEmail.append(email);
              
                var buttons = document.createElement("td"); buttons.classList = "text-end text-nowrap";

                var editButton = document.createElement("BUTTON"); editButton.setAttribute("type", "button"); editButton.classList = "btn btn-primary btn-sm "; 
                editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>'; editButton.dataset.bsToggle = "modal";
                editButton.dataset.bsTarget = "#editPersonnelModal";  editButton.dataset.id = item.id;
                
                var deleteButton = document.createElement("BUTTON"); deleteButton.setAttribute("type", "button"); deleteButton.classList = "btn btn-primary btn-sm";
                deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';deleteButton.dataset.bsToggle = "modal";
                deleteButton.dataset.bsTarget = "#deletePersonnelModal"; deleteButton.dataset.id = item.id;

                buttons.append(editButton, " ", deleteButton);

              tableRow.append(tdName, tdJobTitle, tdDepartment, tdLocation, tdEmail, buttons);
              
              frag.append(tableRow);

            });               
            
            $('#personnelTableBody').append(frag);  
                  
        }
    },
    error: function(xhr, status, error) {
      console.error('Error: ' + error);
    }
    });

});

    // Personnel: Button - Edit

      $("#editPersonnelModal").on("show.bs.modal", function (e) {
            
        $.ajax({
          url:
            "libs/php/getPersonnelByID.php",
          type: "POST",
          dataType: "json",
          data: {
            // Retrieve the data-id attribute from the calling button
            // see https://getbootstrap.com/docs/5.0/components/modal/#varying-modal-content
            // for the non-jQuery JavaScript alternative
            id: $(e.relatedTarget).attr("data-id") 
          },
          success: function (result) {
            var resultCode = result.status.code;
            
            if (resultCode == 200) {
              
              // Update the hidden input with the employee id so that
              // it can be referenced when the form is submitted
      
              $("#editPersonnelEmployeeID").val(result.data.personnel[0].id);
      
              $("#editPersonnelFirstName").val(result.data.personnel[0].firstName);
              $("#editPersonnelLastName").val(result.data.personnel[0].lastName);
              $("#editPersonnelJobTitle").val(result.data.personnel[0].jobTitle);
              $("#editPersonnelEmailAddress").val(result.data.personnel[0].email);
      
              $("#editPersonnelDepartment").html("");
      
              $.each(result.data.department, function () {
                $("#editPersonnelDepartment").append(
                  $("<option>", {
                    value: this.id,
                    text: this.name
                  })
                );
              });
      
              $("#editPersonnelDepartment").val(result.data.personnel[0].departmentID);
              
            } else {
              $("#editPersonnelModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#editPersonnelModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
      });

      $("#editPersonnelForm").on("submit", function (e) {
    
        // Executes when the form button with type="submit" is clicked
        // stop the default browser behviour
        e.preventDefault();
      
        // AJAX call to save form data
        
        email = $( "#editPersonnelEmailAddress" ).val(),
         
        // check email is valid
      
        // /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9;
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        isValid = email.match(regex);
        
        if (!isValid) {
          $("#errorModal").find('.modal-body p').text("Invalid email address.");
          $("#errorModal").modal("show");  

        }
        else{

          $.ajax({
            url:
              "libs/php/updatePersonnelByID.php",
            type: "POST",
            dataType: "json",
            data: {
              // Retrieve the data-id attribute from the calling button
              // see https://getbootstrap.com/docs/5.0/components/modal/#varying-modal-content
              // for the non-jQuery JavaScript alternative
      
              id:  $( "#editPersonnelEmployeeID" ).val(),
              firstName: $( "#editPersonnelFirstName" ).val(),
              lastName: $( "#editPersonnelLastName" ).val(),
              email: email,
              jobTitle: $( "#editPersonnelJobTitle" ).val(),
              department: $( "#editPersonnelDepartment" ).val()
            },
            success: function (result) {
      
              if(typeof result === 'string'){
                result = $.parseJSON(result); 
              }  
        
              if(result.status.name == "ok") {  
                
                $("#editPersonnelModal").modal('hide');
                
                $("#messageModal").find('.modal-body p').text("EMPLOYEE UPDATED.");
                $("#messageModal").modal("show");  
                
              } else {
                $("#editPersonnelModal .modal-title").replaceWith(
                  "Error retrieving data"
                );
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              $("#editPersonnelModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          });
        
        }

      });
    
    // Personnel: Button - Delete

      $("#deletePersonnelModal").on("show.bs.modal", function (e) {
    
        $.ajax({
          url:
            "libs/php/getPersonnelByID.php",
          type: "POST",
          dataType: "json",
          data: {
            // Retrieve the data-id attribute from the calling button
            // see https://getbootstrap.com/docs/5.0/components/modal/#varying-modal-content
            // for the non-jQuery JavaScript alternative
            id: $(e.relatedTarget).attr("data-id") 
          },
          success: function (result) {
            var resultCode = result.status.code;
            
            if (resultCode == 200) {
    
              employee = result.data.personnel[0];
              department = result.data.department;
    
              // Update the hidden input with the employee id so that
              // it can be referenced when the form is submitted
              
              $("#deletePersonnelEmployeeID").val(employee.id);
             
              $("#deletePersonnelName").val(employee.firstName + " " + employee.lastName);
              $("#deletePersonnelName").attr('disabled','disabled');
      
              $("#deletePersonnelJobTitle").val(employee.jobTitle);
              $("#deletePersonnelJobTitle").attr('disabled','disabled');
      
              $.each(department, function () {
                if(employee.departmentID == this.id){
                  $("#deletePersonnelDepartment").val(this.name);
                  $("#deletePersonnelDepartment").attr('disabled','disabled');
      
                }
              });
    
              
            } else {
              $("#deletePersonnelModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#deletePersonnelModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
      });

    
      $("#deletePersonnelForm").on("submit", function (e) {
    
        // stop the default browser behviour
        e.preventDefault();

        // display warning on first submit
          $("#warningModal").find('.modal-body p').text("WARNING : THIS IS IRREVERSIBLE. ONLY PROCEED IF YOU WISH TO REMOVE THIS EMPLOYEE FROM THE SYSTEM.");
          $("#warningModal").modal("show");  
      
      });

      $("#warningModalProceed").click(function (e) {
    
         // AJAX call to save form data
          $.ajax({
              url: "libs/php/deletePersonnelByID.php",
              type: "POST",
              dataType: "json",
              data: {
                id:  $( "#deletePersonnelEmployeeID" ).val(),
              },
              success: function (result) {
                
                  if(typeof result === 'string'){ result = $.parseJSON(result);}  
          
                  if(result.status.name == "ok") {  

                    $("#warningModal").modal('hide');
                    $("#deletePersonnelModal").modal('hide');
                    $("#messageModal").find('.modal-body p').text("EMPLOYEE REMOVED.");
                    $("#messageModal").modal("show");  
                  
                  } else {
  
                    $("#deletePersonnelModal .modal-title").replaceWith( "Error retrieving data" );
  
                  }
  
              },
              error: function (jqXHR, textStatus, errorThrown) {    
                $("#deletePersonnelModal .modal-title").replaceWith( "Error retrieving data" );
              }
          });

      });
      
  
// Tabs: Departments

$("#departmentsBtn").click(function () {

  $("#filterBtn").addClass('disabled');
  $("#existingLocation").empty();

  $.ajax({
    url: "libs/php/getAllDepartments.php",
    type: "POST",      
    success: function(result) {
    // console.log(JSON.stringify(result)); 

    if(typeof result === 'string'){result = $.parseJSON(result); }

    if (result.status.name == "ok"){

    $('#departmentTableBody').html(""); 

      var frag = document.createDocumentFragment();
        
      var tableRow, department, location;

      result.data.forEach(function(item, index) {

      //id = document.createTextNode(item.id);  //  id = result['data'][element]['id'];
      department = document.createTextNode(item.name);
      location = document.createTextNode(item.location);

      tableRow = document.createElement("tr");

        var tdDepartment = document.createElement("td"); tdDepartment.classList = "align-middle text-nowrap d-md-table-cell"; tdDepartment.append(department);
        var tdLocation = document.createElement("td"); tdLocation.classList = "align-middle text-nowrap d-md-table-cell"; tdLocation.append(location);
      
        var buttons = document.createElement("td"); buttons.classList = "text-end text-nowrap";

        var editButton = document.createElement("BUTTON"); editButton.setAttribute("type", "button"); editButton.classList = "btn btn-primary btn-sm "; 
        editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>'; editButton.dataset.bsToggle = "modal";
        editButton.dataset.bsTarget = "#editDepartmentModal";  editButton.dataset.id = item.id;
        
        var deleteButton = document.createElement("BUTTON"); deleteButton.setAttribute("type", "button"); deleteButton.classList = "btn btn-primary btn-sm";
        deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';deleteButton.dataset.bsToggle = "modal";
        deleteButton.dataset.bsTarget = "#deleteDepartmentModal"; deleteButton.dataset.id = item.id;

        buttons.append(editButton, " ", deleteButton);

      tableRow.append(tdDepartment, tdLocation, buttons);
      
      frag.append(tableRow);

     }); 

     $('#departmentTableBody').append(frag);

  
    }                 

   },
    error: function(xhr, status, error) {
      console.error('Error: ' + error);
    }
  });

});

    // Departments: Button - Edit

      $("#editDepartmentModal").on("show.bs.modal", function (e) {
          
        $.ajax({
          url:
            "libs/php/getDepartmentByID.php",
          type: "POST",
          dataType: "json",
          data: {
            // Retrieve the data-id attribute from the calling button
            // see https://getbootstrap.com/docs/5.0/components/modal/#varying-modal-content
            // for the non-jQuery JavaScript alternative
            id: $(e.relatedTarget).attr("data-id") 
          },
          success: function (result) {

              //  "data": {
              // "department": [
              //   {
              //     "id": 1,
              //     "name": "Human Resources",
              //     "locationID": 1
              //   }
              // ],
              // "locations": [
              //   {
              //     "id": "12",
              //     "name": "Bangor"
              //   },
              //   {
              //     "id"

            var resultCode = result.status.code;

            if (resultCode == 200) {

              department = result.data['department'][0];
              locations = result.data['locations'];
              
              // Update the hidden input with the employee id so that
              // it can be referenced when the form is submitted
              
              $("#editDepartmentID").val(department.id);
      
              $("#editDepartmentName").val(department.name);
      
              $("#editDepartmentLocation").html("");
      
              $.each(locations, function () {
                $("#editDepartmentLocation").append(
                  $("<option>", {
                    value: this.id,
                    text: this.name
                  })
                );
              });
      
              $("#editDepartmentLocation").val(department.locationID);
              
              
            } else {
              $("#editDepartmentModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#editDepartmentModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
      });

      $("#editDepartmentForm").on("submit", function (e) {
        
        // Executes when the form button with type="submit" is clicked
        // stop the default browser behviour
        e.preventDefault();
      
        // AJAX call to save form data

        var department=  $( "#editDepartmentName" ).val();

        if(department != ""){
        
          $.ajax({
            url:
              "libs/php/updateDepartmentByID.php",
            type: "POST",
            dataType: "json",
            data: {
              departmentID:  $( "#editDepartmentID" ).val(),
              departmentName: department,
              locationID: $( "#editDepartmentLocation" ).val(),
            },
            success: function (result) {
      
              if(typeof result === 'string'){ result = $.parseJSON(result);}  
        
              if(result.status.name == "ok") {  
                
                $("#editDepartmentModal").modal('hide');
          
                $("#messageModal").find('.modal-body p').text("DEPARTMENT UPDATED.");
                $("#messageModal").modal("show");  
                
              } else if(result.status.name == "exists"){
                  
                  $("#messageModal").find('.modal-body p').text("DEPARTMENT ALREADY EXISTS AT THIS LOCATION.");
                  $("#messageModal").modal("show");  

              } else {
                $("#editDeartmentModal .modal-title").replaceWith(
                  "Error retrieving data"
                );
              }

          
            },
            error: function (jqXHR, textStatus, errorThrown) {
              $("#editDepartmentModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          });

        }else{
          
          $("#errorModal").find('.modal-body p').text("DEPARTMENT HAS NO NAME.");
          $("#errorModal").modal("show");  
        }        
      });
      
    // Departments: Button - Delete

      $("#deleteDepartmentModal").on("show.bs.modal", function (e) {

        $.ajax({
          url:
            "libs/php/getDepartmentByID.php",
          type: "POST",
          dataType: "json",
          data: {
            id: $(e.relatedTarget).attr("data-id") 
          },
          success: function (result) {
            var resultCode = result.status.code;
            
            if (resultCode == 200) {
      
              department = result.data['department'][0];
              
              locations = result.data['locations'];

              $("#removeDepartmentID").val(department.id);

      
              $("#removeDepartmentName").val(department.name);
              $("#removeDepartmentName").attr('disabled','disabled');
             
              $.each(locations, function () {
                if(department.locationID == this.id){
                  $("#removeDepartmentLocation").val(this.name);
                  $("#removeDepartmentLocation").attr('disabled','disabled');
                }
              });
                
            } else {
              $("#deletePersonnelModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#deletePersonnelModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
      
      });

      $("#removeDepartmentForm").on("submit", function (e) {
        
        // stop the default browser behviour
        e.preventDefault();

        // works out staff numbers in this department and displays message
        
        // AJAX call to save form data
        department = $("#removeDepartmentName").val();
        
        $.ajax({
          url: "libs/php/getAll.php",
          type: "POST",    
          success: function (result) {
            
            if(typeof result === 'string'){ result = $.parseJSON(result);}  

            var resultCode = result.status.code;
            
            if (resultCode == 200) {
              
              total = 0;

              for(element in result['data']){
                if(result['data'][element].department == department){
                  total = total + 1;
                };
              }

              if(total > 0){

                $("#deleteDepartmentModal").modal('hide');
          
                $("#messageModal").find('.modal-body p').text(
                  "THERE ARE " + total + " PEOPLE IN THIS DEPARTMENT, THEREFORE IT CANNOT BE REMOVED." + 
                  "\n\n YOU SHOULD CHANGE THE DEPARTMENT THESE PEOPLE ARE IN FIRST, THEN TRY AGAIN"
                );

                $("#messageModal").modal("show");  

              }else{

                // if (confirm("THERE ARE NO PEOPLE IN THIS DEPARTMENT SO IT IS SAFE TO REMOVE.") == true){
                  // ok to remove
                  
                  $.ajax({
                    url: "libs/php/deleteDepartmentByID.php",
                    type: "POST",
                    dataType: "json",
                    data: {
                      id:  $( "#removeDepartmentID" ).val(),
                    },
                    success: function (result) {
                      
                      if(typeof result === 'string'){ result = $.parseJSON(result);}  
          
                      if(result.status.name == "ok") {  

                        $("#deleteDepartmentModal").modal('hide');

                        $("#messageModal").find('.modal-body p').text(
                         department + " Removed From Departments."
                        );

                        $("#messageModal").modal("show");  

                      } else {

                        $("#deletePersonnelModal .modal-title").replaceWith( "Error retrieving data" );

                      }
          
                    },
                    error: function (jqXHR, textStatus, errorThrown) {    
                      $("#editPersonnelModal .modal-title").replaceWith( "Error retrieving data" );
                    }

                  }); // end of removal ajax

                // }else{
                //   // dont remove
                // }
                
              }      
              
            } else {
              $("#deleteDepartmentlModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#deleteDepartmentlModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
        
          
      
      });
      
// Tabs: Locations

$("#locationsBtn").click(function () {
  
  // Call function to refresh location table

  $("#filterBtn").addClass('disabled');

  $.ajax({

    url: "libs/php/getAllLocations.php",
    type: "POST",      
    success: function(result) {
      // console.log(JSON.stringify(result));

      if(typeof result === 'string'){
        result = $.parseJSON(result); 
      }

      if (result.status.name == "ok") {  

        $('#locationTableBody').html(""); 
        
        var frag = document.createDocumentFragment();
        
        var tableRow, location;

        result.data.forEach(function(item, index) {

          location = document.createTextNode(item.name);
          
          tableRow = document.createElement("tr");

          var tdLocation = document.createElement("td"); tdLocation.classList = "align-middle text-nowrap d-md-table-cell"; tdLocation.append(location);
        
          var buttons = document.createElement("td"); buttons.classList = "text-end text-nowrap";

          var editButton = document.createElement("BUTTON"); editButton.setAttribute("type", "button"); editButton.classList = "btn btn-primary btn-sm "; 
          editButton.innerHTML = '<i class="fa-solid fa-pencil fa-fw"></i>'; editButton.dataset.bsToggle = "modal";
          editButton.dataset.bsTarget = "#editLocationModal";  editButton.dataset.id = item.id;
          
          var deleteButton = document.createElement("BUTTON"); deleteButton.setAttribute("type", "button"); deleteButton.classList = "btn btn-primary btn-sm";
          deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';deleteButton.dataset.bsToggle = "modal";
          deleteButton.dataset.bsTarget = "#removeLocationModal"; deleteButton.dataset.id = item.id;

          buttons.append(editButton, " ", deleteButton);

          tableRow.append(tdLocation, buttons);
        
          frag.append(tableRow);

        }); 

        $('#locationTableBody').append(frag);
      
      }

      },
      error: function(xhr, status, error) {
        console.error('Error: ' + error);
      }
  
  });
});
                    
    // Locations: Button - Edit

      $("#editLocationModal").on("show.bs.modal", function (e) {
        
        $.ajax({
          url:
            "libs/php/getLocationByID.php",
          type: "POST",
          dataType: "json",
          data: {
            // Retrieve the data-id attribute from the calling button
            // see https://getbootstrap.com/docs/5.0/components/modal/#varying-modal-content
            // for the non-jQuery JavaScript alternative
            id: $(e.relatedTarget).attr("data-id") 
          },
          success: function (result) {


            var resultCode = result.status.code;

            if (resultCode == 200) {

              id = result.data[0]['id'];
              name = result.data[0]['name'];
              
              // Update the hidden input with the employee id so that
              // it can be referenced when the form is submitted
              
              $("#editLocationID").val(id);
      
              $("#editLocationName").val(name);          
              
            } else {
              $("#editLocationModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#editLocationModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
      });

      $("#editLocationForm").on("submit", function (e) {
      
        e.preventDefault();

        var location=  $( "#editLocationName" ).val();

        if(location != ""){
        
          $.ajax({
              url:
                "libs/php/updateLocationByID.php",
              type: "POST",
              dataType: "json",
              data: {
                id:  $( "#editLocationID" ).val(),
                name: location
              },
              success: function (result) {

                if(typeof result === 'string'){ result = $.parseJSON(result);}  
          
                if(result.status.name == "ok") {  
                  
                  $("#editLocationModal").modal('hide');
          
                  $("#messageModal").find('.modal-body p').text("LOCATION UPDATED.");
                  $("#messageModal").modal("show");  
                
                } else if(result.status.name == "exists") {  
                  
                  $("#messageModal").find('.modal-body p').text("NAME ALREADY EXISTS.");
                  $("#messageModal").modal("show");  
                
                } else {
                  $("#editLocationModal .modal-title").replaceWith(
                    "Error retrieving data"
                  );
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $("#editLocationModal .modal-title").replaceWith(
                  "Error retrieving data"
                );
              }
          });
        }else{
          
          $("#errorModal").find('.modal-body p').text("LOCATION HAS NO NAME.");
          $("#errorModal").modal("show");  
        } 

      });
    
    // Locations: Button - Delete

      $("#removeLocationModal").on("show.bs.modal", function (e) {
      
        $.ajax({
          url:
            "libs/php/getLocationByID.php",
          type: "POST",
          dataType: "json",
          data: {
            id: $(e.relatedTarget).attr("data-id") 
          },
          success: function (result) {
            var resultCode = result.status.code;
            
            if (resultCode == 200) {

              $("#removeLocationID").val(result.data[0].id);
      
              $("#removeLocationName").val(result.data[0].name);
              $("#removeLocationName").attr('disabled','disabled');
      
            
                          
            } else {
              $("#removelocationModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#removeLocationModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
      
      
      });

      $("#removeLocationForm").on("submit", function (e) {
        
        e.preventDefault();
  
        var locationID = $("#removeLocationID").val();
        var locationName = $("#removeLocationName").val();

        $.ajax({
          url: "libs/php/getAll.php",
          type: "POST",    
          success: function (result) {
            
            if(typeof result === 'string'){ result = $.parseJSON(result);} 
            
            var resultCode = result.status.code;
            
            if (resultCode == 200) {
              
              total = 0;

              for(element in result['data']){
                if(result['data'][element].location == locationName){
                  total = total + 1;
                };
              }

              if(total > 0){

                $("#removeLocationModal").modal('hide');

                $("#messageModal").find('.modal-body p').text(
                  "THERE ARE " + total + " PEOPLE AT THIS LOCATION, THEREFORE IT CANNOT BE REMOVED." + 
                  "\n\n YOU SHOULD CHANGE THE DEPARTMENT/LOCATION THESE PEOPLE ARE IN FIRST, THEN TRY AGAIN"
                );

                $("#messageModal").modal("show");  

              }else{
            
                $.ajax({
                  url: "libs/php/deleteLocationByID.php",
                  type: "POST", 
                  dataType: "json",
                  data: {
                    id: locationID
                  },   
                  success: function (result) {
                    
                    var resultCode = result.status.code;
                    
                    if (resultCode == 200) {

                      $("#removeLocationModal").modal('hide');

                      $("#messageModal").find('.modal-body p').text(
                       locationName + " Removed From Locations."
                      );

                      $("#messageModal").modal("show");

                    } else {
                  
                      $("#removeLocationlModal .modal-title").replaceWith(
                        "Error retrieving data"
                      );
                    }
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    $("#deleteLocationModal .modal-title").replaceWith(
                      "Error retrieving data"
                    );
                  }
                });           
                
              }      
              
            } else {
              $("#deleteDepartmentlModal .modal-title").replaceWith(
                "Error retrieving data"
              );
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#deleteDepartmentlModal .modal-title").replaceWith(
              "Error retrieving data"
            );
          }
        });
        
      });

  $("#errorModalOk").click(function (e) {
      $("#errorModal").modal("hide");                  
  });


  // used for the confirmation messages boxes top x and ok action

    $("#messageModalDismiss").click(function (e) {
      $("#messageModal").modal('hide');
      // location.reload();
       $("#refreshBtn").click();
    });

    $("#messageModalOk").click(function (e) {
      $("#messageModal").modal('hide');
      // location.reload();
       $("#refreshBtn").click();
    });

    $("#warningModalCancel").click(function (e) {
      $("#warningModal").modal('hide');
      $("#deletePersonnelModal").modal('hide');
    });     


$(document).ready(function () {
 $("#personnelBtn").click();

});

