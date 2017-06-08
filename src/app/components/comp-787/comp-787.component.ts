/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service787Service } from '../../services/service-787.service';

@Component({
  selector: 'app-comp-787',
  templateUrl: './comp-787.component.html',
  styleUrls: ['./comp-787.component.css']
})
export class Comp787Component implements OnInit {

  constructor(private _service: Service787Service) { }

  ngOnInit() {
  }

}
