/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service688Service } from '../../services/service-688.service';

@Component({
  selector: 'app-comp-688',
  templateUrl: './comp-688.component.html',
  styleUrls: ['./comp-688.component.css']
})
export class Comp688Component implements OnInit {

  constructor(private _service: Service688Service) { }

  ngOnInit() {
  }

}
