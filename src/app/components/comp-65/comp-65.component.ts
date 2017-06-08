/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service65Service } from '../../services/service-65.service';

@Component({
  selector: 'app-comp-65',
  templateUrl: './comp-65.component.html',
  styleUrls: ['./comp-65.component.css']
})
export class Comp65Component implements OnInit {

  constructor(private _service: Service65Service) { }

  ngOnInit() {
  }

}
