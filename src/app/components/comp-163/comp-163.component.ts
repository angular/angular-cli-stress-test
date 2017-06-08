/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service163Service } from '../../services/service-163.service';

@Component({
  selector: 'app-comp-163',
  templateUrl: './comp-163.component.html',
  styleUrls: ['./comp-163.component.css']
})
export class Comp163Component implements OnInit {

  constructor(private _service: Service163Service) { }

  ngOnInit() {
  }

}
