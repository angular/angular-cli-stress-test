/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service725Service } from '../../services/service-725.service';

@Component({
  selector: 'app-comp-725',
  templateUrl: './comp-725.component.html',
  styleUrls: ['./comp-725.component.css']
})
export class Comp725Component implements OnInit {

  constructor(private _service: Service725Service) { }

  ngOnInit() {
  }

}
