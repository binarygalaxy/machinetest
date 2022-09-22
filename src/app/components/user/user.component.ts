import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private dataService: DataService) {}
  staticData: any[] = [];
  employeeDetails: any[] = [];
  nameSearch: string = '';
  companySearch: string = '';
  designationSearch: string = '';

  ngOnInit(): void {
    this.dataService.getAllEmployees().subscribe((resp) => {
      this.employeeDetails = resp;
      this.staticData = resp;
    });
  }

  onNameSearch($event) {
    let searchVal = $event.target.value;
    this.employeeDetails = this.staticData.filter((row) =>
      row.name.toLocaleLowerCase().includes(searchVal)
    );
  }

  onCompanySearch($event) {
    let searchVal = $event.target.value;
    this.employeeDetails = this.staticData.filter((row) =>
      row.company.name.toLocaleLowerCase().includes(searchVal)
    );
  }

  onDesignationSearch($event) {
    let searchVal = $event.target.value;
    this.employeeDetails = this.staticData.filter((row) =>
      row.company.designation.toLocaleLowerCase().includes(searchVal)
    );
  }
}
