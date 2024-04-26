import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RpeCustomChartService } from './rpe-custom-chart.service';

@Component({
  selector: 'app-rpe-custom-chart',
  templateUrl: './rpe-custom-chart.page.html',
  styleUrls: ['./rpe-custom-chart.page.scss'],
})
export class RpeCustomChartPage implements OnInit {

  isValid: boolean = false;
  squatTable: number[][] = [];
  benchTable: number[][] = [];
  deadliftTable: number[][] = [];
  displayedTable: number[][] = [];
  reps: number = 0;

  sections = [
    {
      value: 'squat',
    },
    {
      value: 'bench',
    },
    {
      value: 'deadlift',
    }
  ]

  methods = [
    {
      label: '1st METHOD',
      value: 'firstMethod'
    },
    {
      label: '2nd METHOD',
      value: 'secondMethod'
    }
  ]

  form = this.service.createForm();
  secondForm = this.service.createSecondForm();

  constructor(
    private service: RpeCustomChartService,
    private dataService: DataService
  ) { this.loadData('squatTable'); }

  async loadData(key: string) {
    this.displayedTable = await this.dataService.getData(key);
  }

  saveData() {
    const method = this.form.value.method;
    const lift = this.form.value.lift;
    const oneRm = this.form.value.oneRm;
    const fourRm = this.form.value.fourRm;
    const eightRm = this.form.value.eightRm;
    const seventy = this.secondForm.value.seventyPercent;
    const eighty = this.secondForm.value.eightyFivePercent;

    let dummyTable: number[][] = [];

    for (let i = 0; i <= 10; i++) {
      dummyTable.push([]);
    }
    dummyTable[0][0] = 1;

    if (method === 'firstMethod') {
      if (oneRm && fourRm && eightRm)
        this.service.firstCustomMethod(oneRm, fourRm, eightRm, dummyTable);
    }
    else if (method === 'secondMethod') {
      if (seventy && eighty)
        this.service.secondCustomMethod(seventy, eighty, dummyTable);
    }



    if (lift === 'squat') {
      this.dataService.addData('squatTable', dummyTable);
      this.loadData('squatTable');
    } else if (lift === 'bench') {
      this.dataService.addData('benchTable', dummyTable);
      this.loadData('benchTable');
    } else if (lift === 'deadlift') {
      this.dataService.addData('deadliftTable', dummyTable);
      this.loadData('deadliftTable');
    }
  }

  isFormValid() {
    this.form.valueChanges.subscribe(() => {
      let method = this.form.value.method;
      this.isValid = method === 'firstMethod' ? this.form.valid : this.secondForm.valid;
    })
  }

  getRepsNumber(event: Event) {
    this.reps = parseInt((event.target as HTMLIonSegmentElement)?.value ?? '3', 10);
  }

  displaySetTable() {
    this.form.valueChanges.subscribe(() => {
      let lift = this.form.value.lift;
      if (lift === 'squat') {
        this.loadData('squatTable');
      } else if (lift === 'bench') {
        this.loadData('benchTable');
      } else if (lift === 'deadlift') {
        this.loadData('deadliftTable');
      }
    })
  }

  ngOnInit() {
    this.isFormValid();
    this.displaySetTable();
  }

}