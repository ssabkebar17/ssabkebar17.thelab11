
//first option

window.addEventListener("DOMContentLoaded", () => {
    //let currentrOW=0;
    const patientform=document.querySelector("#patientform");
    patientform.addEventListener("submit",(event)=>{
        event.preventDefault();
        const patientId=document.querySelector("#patientIdNumber");
        const patientfirstname=document.querySelector("#firstName");
        const patientmiddlename=document.querySelector("#middleInitials");
        const patientlastname=document.querySelector("#lastName");
        const patientdob=document.querySelector("#dateOfBirth");
        const patientdepartment=document.querySelector("#ddlDepartment");
      
       const radioIsOutPatient1 = document.querySelector("input[name='radioIsOutPatient']:checked").value;



       const patientId1=patientId.value;
        const patientfirstname1=patientfirstname.value;
        const patientmiddlename1=patientmiddlename.value;
        const patientlastname1=patientlastname.value;
        const patientdob1=patientdob.value;
        const patientdepartment1=patientdepartment.value;
    
       addNewPatientRow(patientId1,patientfirstname1,
        patientmiddlename1,patientlastname1,patientdob1,patientdepartment1,radioIsOutPatient1);
         patientId.value ="";
         patientfirstname.value="";
         patientmiddlename.value ="";
         patientlastname.value ="";
        patientdob.value ="";
        patientdepartment["selectedIndex"] = 0;


    });



    const patients = [];
    function Patient(patientIdNo, firstName, middleInitials, lastName, 
        dateOfBirth, department, isOutPatient) {
            this.patientId1 = patientIdNo;
            this.patientfirstname1 = firstName;
            this.patientmiddlename1 = middleInitials;
            this.patientlastname1 = lastName;
            this.patientdob1 = dateOfBirth;
            this.patientdepartment1 = department;
           
    }
    Patient.prototype.toString = function() {
        return `{patientIdNo: ${this.patientId1}, firstName: ${this.patientfirstname1}, 
            middleInitial: ${this.patientmiddlename1}, lastName: ${this.patientlastname1}, 
            dateOfBirth: ${this.patientdob1}, department: ${this.patientdepartment1}, 
            isOutPatient: ${this.radioIsOutPatient1}}`;
    };

    const chkElderlyPatients = document.querySelector("#chkElderlyPatients");
    chkElderlyPatients.addEventListener("change", (event) => {
        $("#tbodyPatientsList").empty();
        if(event.target.checked) {
           
            patients.filter(p => isElderlyPatient(p))
                .forEach(p => {
                    let dataRow = `<tr><td>${p.patientId1}</td><td>${p.patientfirstname1}</td>
                    <td>${p.patientmiddlename1}</td><td>${p.patientlastname1}</td><td>${p.patientdob1}</td><td>${p.patientdepartment1}</td><td>${p.radioIsOutPatient1}</td></tr>`; 
                    $("#tbodyPatientsList").append(dataRow);
                });
        } else {
            $("#tbodyPatientsList").empty();
          
            patients.forEach(p => {
                let dataRow = `<tr><td>${p.patientId1}</td><td>${p.patientfirstname1}</td><td>${p.patientmiddlename1}</td><td>${p.patientlastname1}</td>
                <td>${p.patientdob1}</td><td>${p.patientdepartment1}</td><td>${p.radioIsOutPatient1}</td></tr>`; 
                $("#tbodyPatientsList").append(dataRow);
            })
        }
    });

    const isElderlyPatient = function(patient) {
        const todaysDate = new Date();
       
        const strYearOfBirth = patient.dateOfBirth.substr(0, 4);
        const nMonthOfBirth = parseInt(patient.dateOfBirth.substr(5, 2));
        const nDateOfMonthBirth = parseInt(patient.dateOfBirth.substr(8, 2)); 
        const strDateOfBirth = `${strYearOfBirth}-${nMonthOfBirth}-${nDateOfMonthBirth}`; //${strTimeOfBirth}`;
        const patientsBirthDate = new Date(strDateOfBirth);
        let age = (todaysDate.getFullYear()) - (patientsBirthDate.getFullYear());
        const monthDiff = todaysDate.getMonth() - patientsBirthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && todaysDate.getDate() < patientsBirthDate.getDate())) {
            age--;
        }
        return age >= 65;
    }


    const addNewPatientRow = function(PatientIDNo,firstName,middleInitials,lastName,dateOfBirth,department,outp){
        const tablePatient=document.querySelector("#tbl");
        const newRow=tablePatient.insertRow(-1);
       
        const newCellpatId=newRow.insertCell(0);
        const newPatId=document.createTextNode(`${PatientIDNo}`);
        newCellpatId.appendChild(newPatId);
        const newCellfn=newRow.insertCell(1);
        const newfn=document.createTextNode(`${firstName}`);
        newCellfn.appendChild(newfn);

        const newCellmn=newRow.insertCell(2);
        const newmn=document.createTextNode(`${middleInitials}`);
        newCellmn.appendChild(newmn);

        const newCellln=newRow.insertCell(3);
        const newln=document.createTextNode(`${lastName}`);
        newCellln.appendChild(newln);

        const newCelldob=newRow.insertCell(4);
        const newdob=document.createTextNode(`${dateOfBirth}`);
        newCelldob.appendChild(newdob);

        const newCelldep=newRow.insertCell(5);
        const newdep=document.createTextNode(`${department}`);
        newCelldep.appendChild(newdep);

        const newCelloutp=newRow.insertCell(6);
        const newoutp=document.createTextNode(`${outp}`);
        newCelloutp.appendChild(newoutp);

    }
});