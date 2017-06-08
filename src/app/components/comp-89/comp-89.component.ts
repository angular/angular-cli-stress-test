/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service89Service } from '../../services/service-89.service';

@Component({
  selector: 'app-comp-89',
  templateUrl: './comp-89.component.html',
  styleUrls: ['./comp-89.component.css']
})
export class Comp89Component implements OnInit {

  constructor(private _service: Service89Service) { }

  ngOnInit() {
  }

}
