/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service41Service } from '../../services/service-41.service';

@Component({
  selector: 'app-comp-41',
  templateUrl: './comp-41.component.html',
  styleUrls: ['./comp-41.component.css']
})
export class Comp41Component implements OnInit {

  constructor(private _service: Service41Service) { }

  ngOnInit() {
  }

}
