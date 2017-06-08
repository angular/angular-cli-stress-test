/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service691Service } from '../../services/service-691.service';

@Component({
  selector: 'app-comp-691',
  templateUrl: './comp-691.component.html',
  styleUrls: ['./comp-691.component.css']
})
export class Comp691Component implements OnInit {

  constructor(private _service: Service691Service) { }

  ngOnInit() {
  }

}
