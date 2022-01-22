const generateCards = employeeData => {
    console.log(employeeData)

    for (let i = 0; i < employeeData.length; i++) {

        
        console.log("logging from line 7", employeeData[i].getRole())

        if (employeeData[i].getRole() === "Manager") {
            
            let name = employeeData[i].name
            console.log(employeeData[i].name)
            let employeeId = employeeData[i].employeeId;
            let email = employeeData[i].email;
            let officeNumber = employeeData[i].officeNumber 
           return `
            <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-header bg-primary text-light">
                <h3>${name}<h3>
                  <div class="container d-flex justify-content-start m-0 p-0">
                <span class="material-icons-outlined">business_center</span>
                <h4 class="ps-2">Manager</h4>
                </div>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group list-group">
                  <li class="list-group-item">ID: ${employeeId}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <li class="list-group-item">Office number: ${officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>
          `
        } else if (employeeData[i] == "Engineer") {
            let name = employeeData[i].name
            let employeeId = employeeData[i].employeeId;
            let email = employeeData[i].email;
            let github = employeeData[i].githubUsername

            return`
            <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-header bg-primary text-light">
                <h3>${name}<h3>
                  <div class="container d-flex justify-content-start m-0 p-0">
                <span class="material-icons-outlined">construction</span>
                <h4 class="ps-2">Engineer</h4>
                </div>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group list-group">
                  <li class="list-group-item">ID: ${employeeId}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <li class="list-group-item">GitHub: <a>${github}</a></li>
                </ul>
              </div>
            </div>
          </div>
            `
        } else if (employeeData[i] == "Intern") {
            let name = employeeData[i].name
            let employeeId = employeeData[i].employeeId;
            let email = employeeData[i].email;
            let school = employeeData[i].school
            return `
            <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-header bg-primary text-light">
                <h3>${name}<h3>
                  <div class="container d-flex justify-content-start m-0 p-0">
                <span class="material-icons-outlined">school</span>
                <h4 class="ps-2">Intern</h4>
                </div>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group list-group">
                  <li class="list-group-item">ID: ${employeeId}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <li class="list-group-item">School: ${school}</li>
                </ul>
              </div>
            </div>
          </div>
            `
        } else {
            console.log("I'm in the wrong loop")
        }

    }

};






module.exports = employeeData => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
    <title>My Team</title>
</head>


<body>
    <header>
        <nav class="navbar navbar-light bg-primary border-bottom border-dark border-4">
            <div class="container-fluid d-flex justify-content-center">
              <span class="h1 text-light">My Team</span>
            </div>
          </nav>
    </header>

    <div class="row m-5">

    ${generateCards(employeeData)}



    </div>

    </body>
    </html>
`

}


