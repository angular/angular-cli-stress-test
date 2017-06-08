/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service24Service } from '../../services/service-24.service';

@Component({
  selector: 'app-comp-24',
  templateUrl: './comp-24.component.html',
  styleUrls: ['./comp-24.component.css']
})
export class Comp24Component implements OnInit {

  constructor(private _service: Service24Service) { }

  ngOnInit() {
  }

}
