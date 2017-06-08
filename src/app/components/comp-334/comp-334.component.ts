/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service334Service } from '../../services/service-334.service';

@Component({
  selector: 'app-comp-334',
  templateUrl: './comp-334.component.html',
  styleUrls: ['./comp-334.component.css']
})
export class Comp334Component implements OnInit {

  constructor(private _service: Service334Service) { }

  ngOnInit() {
  }

}
