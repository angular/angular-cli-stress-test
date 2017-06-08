/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service427Service } from '../../services/service-427.service';

@Component({
  selector: 'app-comp-427',
  templateUrl: './comp-427.component.html',
  styleUrls: ['./comp-427.component.css']
})
export class Comp427Component implements OnInit {

  constructor(private _service: Service427Service) { }

  ngOnInit() {
  }

}
