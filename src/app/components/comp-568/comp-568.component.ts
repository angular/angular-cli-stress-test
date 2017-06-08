/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service568Service } from '../../services/service-568.service';

@Component({
  selector: 'app-comp-568',
  templateUrl: './comp-568.component.html',
  styleUrls: ['./comp-568.component.css']
})
export class Comp568Component implements OnInit {

  constructor(private _service: Service568Service) { }

  ngOnInit() {
  }

}
