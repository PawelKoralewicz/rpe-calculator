import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HomePageService } from './home.page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  calculationChart: any[] = [];
  form = this.service.createForm();
  isValid: boolean = false;
  reps: number = 0;
  weights: any[] = [];

  rpes = [
    {
      id: 0,
      label: 10,
    },
    {
      id: 1,
      label: 9.5,
    },
    {
      id: 2,
      label: 9,
    },
    {
      id: 3,
      label: 8.5,
    },
    {
      id: 4,
      label: 8,
    },
    {
      id: 5,
      label: 7.5,
    },
    {
      id: 6,
      label: 7,
    },
    {
      id: 7,
      label: 6.5,
    },
    {
      id: 8,
      label: 6,
    },
    {
      id: 9,
      label: 5.5,
    },
    {
      id: 10,
      label: 5,
    },

  ]

  lifts = [
    {
      value: 'squatTable',
      label: 'Squat'
    },
    {
      value: 'benchTable',
      label: 'Bench Press'
    },
    {
      value: 'deadliftTable',
      label: 'Deadlift'
    },
  ];

  constructor(
    private service: HomePageService,
    private dataService: DataService
  ) { }

  async loadData(lift: string) {
    this.calculationChart = await this.dataService.getData(lift);
    console.table(this.calculationChart);
  }

  calculate() {
    const weight = this.form.value.weight;
    const reps = this.form.value.reps;
    const rpe = this.form.value.rpe;
    if (this.form.value.lift)
        this.loadData(this.form.value.lift);
        
    if (reps !== null && reps !== undefined && rpe !== null && rpe !== undefined && weight !== null && weight !== undefined) {
      const percentage = this.calculationChart[rpe][reps - 1];
      const oneRm = weight / percentage;

      let dummyTable: number[][] = [];

      for (let i = 0; i <= 10; i++) {
        dummyTable.push([]);
      }
      for(let i = 0; i <= 10; i++) {
        for (let j = 0; j < 15; j++)
        dummyTable[i][j] = oneRm * this.calculationChart[i][j];
      }

      this.weights = dummyTable;
      
      console.log(oneRm);
      console.table(this.weights);
    }
  }

  isFormValid() {
    this.form.valueChanges.subscribe(() => {
      this.isValid = this.form.valid;
      if(this.form.value.lift)
      this.loadData(this.form.value.lift)
    })
  }

  getRepsNumber(event: Event) {
    this.reps = parseInt((event.target as HTMLIonSegmentElement)?.value ?? '3', 10);
  }

  ngOnInit() {
    this.isFormValid();
  }

}
