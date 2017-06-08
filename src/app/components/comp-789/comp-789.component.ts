/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service789Service } from '../../services/service-789.service';

@Component({
  selector: 'app-comp-789',
  templateUrl: './comp-789.component.html',
  styleUrls: ['./comp-789.component.css']
})
export class Comp789Component implements OnInit {

  constructor(private _service: Service789Service) { }

  ngOnInit() {
  }

}
