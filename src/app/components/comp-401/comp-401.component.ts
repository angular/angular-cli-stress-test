/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service401Service } from '../../services/service-401.service';

@Component({
  selector: 'app-comp-401',
  templateUrl: './comp-401.component.html',
  styleUrls: ['./comp-401.component.css']
})
export class Comp401Component implements OnInit {

  constructor(private _service: Service401Service) { }

  ngOnInit() {
  }

}
