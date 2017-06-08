/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service990Service } from '../../services/service-990.service';

@Component({
  selector: 'app-comp-990',
  templateUrl: './comp-990.component.html',
  styleUrls: ['./comp-990.component.css']
})
export class Comp990Component implements OnInit {

  constructor(private _service: Service990Service) { }

  ngOnInit() {
  }

}
