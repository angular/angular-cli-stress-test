/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service878Service } from '../../services/service-878.service';

@Component({
  selector: 'app-comp-878',
  templateUrl: './comp-878.component.html',
  styleUrls: ['./comp-878.component.css']
})
export class Comp878Component implements OnInit {

  constructor(private _service: Service878Service) { }

  ngOnInit() {
  }

}
