/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service511Service } from '../../services/service-511.service';

@Component({
  selector: 'app-comp-511',
  templateUrl: './comp-511.component.html',
  styleUrls: ['./comp-511.component.css']
})
export class Comp511Component implements OnInit {

  constructor(private _service: Service511Service) { }

  ngOnInit() {
  }

}
