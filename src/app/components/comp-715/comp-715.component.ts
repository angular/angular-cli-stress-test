/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service715Service } from '../../services/service-715.service';

@Component({
  selector: 'app-comp-715',
  templateUrl: './comp-715.component.html',
  styleUrls: ['./comp-715.component.css']
})
export class Comp715Component implements OnInit {

  constructor(private _service: Service715Service) { }

  ngOnInit() {
  }

}
