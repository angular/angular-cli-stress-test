/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service177Service } from '../../services/service-177.service';

@Component({
  selector: 'app-comp-177',
  templateUrl: './comp-177.component.html',
  styleUrls: ['./comp-177.component.css']
})
export class Comp177Component implements OnInit {

  constructor(private _service: Service177Service) { }

  ngOnInit() {
  }

}
