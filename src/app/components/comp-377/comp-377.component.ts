/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service377Service } from '../../services/service-377.service';

@Component({
  selector: 'app-comp-377',
  templateUrl: './comp-377.component.html',
  styleUrls: ['./comp-377.component.css']
})
export class Comp377Component implements OnInit {

  constructor(private _service: Service377Service) { }

  ngOnInit() {
  }

}
