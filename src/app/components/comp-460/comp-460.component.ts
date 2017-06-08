/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service460Service } from '../../services/service-460.service';

@Component({
  selector: 'app-comp-460',
  templateUrl: './comp-460.component.html',
  styleUrls: ['./comp-460.component.css']
})
export class Comp460Component implements OnInit {

  constructor(private _service: Service460Service) { }

  ngOnInit() {
  }

}
