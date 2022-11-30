import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  formGroup: FormGroup;
  customers$: Observable<Customer[]>;
  projects$: Observable<Project[]>;

  countries: Customer[] = [
    {
      name: 'Zetes 1',
      id: 1,
    },
    {
      name: 'Zetes 2',
      id: 2,
    },
    {
      name: 'Test',
      id: 3,
    },
  ];

  cities: Project[] = [
    {
      name: 'Alliance 1',
      id: 1,
    },
    {
      name: 'Alliance 2',
      id: 2,
    },
    {
      name: 'Alliance 3',
      id: 3,
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  selectCountry(selected: MatAutocompleteSelectedEvent) {
    this.formGroup.controls.city.enable();
    let projecs: Customer[] = this.cities.filter(
      (city) => city.country == selected.option.value
    );

    this.cities$ = this.formGroup.controls.city.valueChanges.pipe(
      startWith(null),
      map((text) =>
        text
          ? relatedCities.filter((city) =>
              city.name.toLowerCase().includes(text.toLowerCase())
            )
          : relatedCities
      )
    );
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      counrty: [, Validators.required],
      city: [{ value: null, disabled: true }, Validators.required],
    });

    this.countries$ = this.formGroup.controls.counrty.valueChanges.pipe(
      startWith(null),
      map((text) =>
        text
          ? this.countries.filter((country) =>
              country.name.toLowerCase().includes(text.toLowerCase())
            )
          : this.countries
      )
    );
  }
}

export class Customer {
  name: string;
  id: number;
}

export class Project {
  name: string;
  id: number;
}
