function verify() {
  let error = "";
  let login = document.querySelector("#login").value;
  let date = document.querySelector("#date").value;

  let regexp = new RegExp(/[0-9A-Zaz]/);
  if (login.match(regexp))
    error +=
      '<div #alert class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" aria-label="Close" (click)="closeAlert()"><span aria-hidden="true">&times;</span></button><strong> login error</strong> the login does not contain the special characters.</div>';

  if (!(login.length >= 6 && login.length <= 8))
    error +=
      '<div #alert class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" aria-label="Close" (click)="closeAlert()"><span aria-hidden="true">&times;</span></button><strong> login error</strong> length should be less than 8 and grat than 6.</div>';
    console.log(date);
    
  if (!Date.parse(date))
    error +=
      '<div #alert class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" aria-label="Close" (click)="closeAlert()"><span aria-hidden="true">&times;</span></button><strong> date error</strong> the format should be licke this (2019/05/30) or (2019-05-30).</div>';

  if (error != "") {
    document.querySelector("#displayError").innerHTML = error;
  }
}
