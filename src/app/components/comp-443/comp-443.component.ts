/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service443Service } from '../../services/service-443.service';

@Component({
  selector: 'app-comp-443',
  templateUrl: './comp-443.component.html',
  styleUrls: ['./comp-443.component.css']
})
export class Comp443Component implements OnInit {

  constructor(private _service: Service443Service) { }

  ngOnInit() {
  }

}
