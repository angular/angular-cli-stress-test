/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service902Service } from '../../services/service-902.service';

@Component({
  selector: 'app-comp-902',
  templateUrl: './comp-902.component.html',
  styleUrls: ['./comp-902.component.css']
})
export class Comp902Component implements OnInit {

  constructor(private _service: Service902Service) { }

  ngOnInit() {
  }

}
