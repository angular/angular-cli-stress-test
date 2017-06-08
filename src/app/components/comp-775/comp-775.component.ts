/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service775Service } from '../../services/service-775.service';

@Component({
  selector: 'app-comp-775',
  templateUrl: './comp-775.component.html',
  styleUrls: ['./comp-775.component.css']
})
export class Comp775Component implements OnInit {

  constructor(private _service: Service775Service) { }

  ngOnInit() {
  }

}
