/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service906Service } from '../../services/service-906.service';

@Component({
  selector: 'app-comp-906',
  templateUrl: './comp-906.component.html',
  styleUrls: ['./comp-906.component.css']
})
export class Comp906Component implements OnInit {

  constructor(private _service: Service906Service) { }

  ngOnInit() {
  }

}
