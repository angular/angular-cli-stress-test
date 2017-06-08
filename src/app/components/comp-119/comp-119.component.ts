/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service119Service } from '../../services/service-119.service';

@Component({
  selector: 'app-comp-119',
  templateUrl: './comp-119.component.html',
  styleUrls: ['./comp-119.component.css']
})
export class Comp119Component implements OnInit {

  constructor(private _service: Service119Service) { }

  ngOnInit() {
  }

}
