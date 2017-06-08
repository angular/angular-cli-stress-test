/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service458Service } from '../../services/service-458.service';

@Component({
  selector: 'app-comp-458',
  templateUrl: './comp-458.component.html',
  styleUrls: ['./comp-458.component.css']
})
export class Comp458Component implements OnInit {

  constructor(private _service: Service458Service) { }

  ngOnInit() {
  }

}
