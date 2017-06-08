/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service835Service } from '../../services/service-835.service';

@Component({
  selector: 'app-comp-835',
  templateUrl: './comp-835.component.html',
  styleUrls: ['./comp-835.component.css']
})
export class Comp835Component implements OnInit {

  constructor(private _service: Service835Service) { }

  ngOnInit() {
  }

}
