/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service375Service } from '../../services/service-375.service';

@Component({
  selector: 'app-comp-375',
  templateUrl: './comp-375.component.html',
  styleUrls: ['./comp-375.component.css']
})
export class Comp375Component implements OnInit {

  constructor(private _service: Service375Service) { }

  ngOnInit() {
  }

}
