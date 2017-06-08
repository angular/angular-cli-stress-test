/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service359Service } from '../../services/service-359.service';

@Component({
  selector: 'app-comp-359',
  templateUrl: './comp-359.component.html',
  styleUrls: ['./comp-359.component.css']
})
export class Comp359Component implements OnInit {

  constructor(private _service: Service359Service) { }

  ngOnInit() {
  }

}
