/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service643Service } from '../../services/service-643.service';

@Component({
  selector: 'app-comp-643',
  templateUrl: './comp-643.component.html',
  styleUrls: ['./comp-643.component.css']
})
export class Comp643Component implements OnInit {

  constructor(private _service: Service643Service) { }

  ngOnInit() {
  }

}
