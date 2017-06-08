/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service728Service } from '../../services/service-728.service';

@Component({
  selector: 'app-comp-728',
  templateUrl: './comp-728.component.html',
  styleUrls: ['./comp-728.component.css']
})
export class Comp728Component implements OnInit {

  constructor(private _service: Service728Service) { }

  ngOnInit() {
  }

}
