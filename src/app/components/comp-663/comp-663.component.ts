/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service663Service } from '../../services/service-663.service';

@Component({
  selector: 'app-comp-663',
  templateUrl: './comp-663.component.html',
  styleUrls: ['./comp-663.component.css']
})
export class Comp663Component implements OnInit {

  constructor(private _service: Service663Service) { }

  ngOnInit() {
  }

}
