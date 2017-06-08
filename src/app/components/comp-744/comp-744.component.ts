/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service744Service } from '../../services/service-744.service';

@Component({
  selector: 'app-comp-744',
  templateUrl: './comp-744.component.html',
  styleUrls: ['./comp-744.component.css']
})
export class Comp744Component implements OnInit {

  constructor(private _service: Service744Service) { }

  ngOnInit() {
  }

}
