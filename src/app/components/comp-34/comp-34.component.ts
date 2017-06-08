/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service34Service } from '../../services/service-34.service';

@Component({
  selector: 'app-comp-34',
  templateUrl: './comp-34.component.html',
  styleUrls: ['./comp-34.component.css']
})
export class Comp34Component implements OnInit {

  constructor(private _service: Service34Service) { }

  ngOnInit() {
  }

}
