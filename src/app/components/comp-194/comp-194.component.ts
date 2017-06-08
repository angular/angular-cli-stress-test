/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service194Service } from '../../services/service-194.service';

@Component({
  selector: 'app-comp-194',
  templateUrl: './comp-194.component.html',
  styleUrls: ['./comp-194.component.css']
})
export class Comp194Component implements OnInit {

  constructor(private _service: Service194Service) { }

  ngOnInit() {
  }

}
