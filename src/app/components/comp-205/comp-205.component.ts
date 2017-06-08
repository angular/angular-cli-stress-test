/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service205Service } from '../../services/service-205.service';

@Component({
  selector: 'app-comp-205',
  templateUrl: './comp-205.component.html',
  styleUrls: ['./comp-205.component.css']
})
export class Comp205Component implements OnInit {

  constructor(private _service: Service205Service) { }

  ngOnInit() {
  }

}
