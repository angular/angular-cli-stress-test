/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service50Service } from '../../services/service-50.service';

@Component({
  selector: 'app-comp-50',
  templateUrl: './comp-50.component.html',
  styleUrls: ['./comp-50.component.css']
})
export class Comp50Component implements OnInit {

  constructor(private _service: Service50Service) { }

  ngOnInit() {
  }

}
