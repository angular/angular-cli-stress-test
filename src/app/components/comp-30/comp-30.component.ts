/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service30Service } from '../../services/service-30.service';

@Component({
  selector: 'app-comp-30',
  templateUrl: './comp-30.component.html',
  styleUrls: ['./comp-30.component.css']
})
export class Comp30Component implements OnInit {

  constructor(private _service: Service30Service) { }

  ngOnInit() {
  }

}
