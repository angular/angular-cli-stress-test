/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service282Service } from '../../services/service-282.service';

@Component({
  selector: 'app-comp-282',
  templateUrl: './comp-282.component.html',
  styleUrls: ['./comp-282.component.css']
})
export class Comp282Component implements OnInit {

  constructor(private _service: Service282Service) { }

  ngOnInit() {
  }

}
