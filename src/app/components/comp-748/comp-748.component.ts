/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service748Service } from '../../services/service-748.service';

@Component({
  selector: 'app-comp-748',
  templateUrl: './comp-748.component.html',
  styleUrls: ['./comp-748.component.css']
})
export class Comp748Component implements OnInit {

  constructor(private _service: Service748Service) { }

  ngOnInit() {
  }

}
