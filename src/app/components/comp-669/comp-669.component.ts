/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service669Service } from '../../services/service-669.service';

@Component({
  selector: 'app-comp-669',
  templateUrl: './comp-669.component.html',
  styleUrls: ['./comp-669.component.css']
})
export class Comp669Component implements OnInit {

  constructor(private _service: Service669Service) { }

  ngOnInit() {
  }

}
