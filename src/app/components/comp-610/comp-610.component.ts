/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service610Service } from '../../services/service-610.service';

@Component({
  selector: 'app-comp-610',
  templateUrl: './comp-610.component.html',
  styleUrls: ['./comp-610.component.css']
})
export class Comp610Component implements OnInit {

  constructor(private _service: Service610Service) { }

  ngOnInit() {
  }

}
