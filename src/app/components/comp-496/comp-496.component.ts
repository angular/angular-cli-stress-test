/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service496Service } from '../../services/service-496.service';

@Component({
  selector: 'app-comp-496',
  templateUrl: './comp-496.component.html',
  styleUrls: ['./comp-496.component.css']
})
export class Comp496Component implements OnInit {

  constructor(private _service: Service496Service) { }

  ngOnInit() {
  }

}
