/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service710Service } from '../../services/service-710.service';

@Component({
  selector: 'app-comp-710',
  templateUrl: './comp-710.component.html',
  styleUrls: ['./comp-710.component.css']
})
export class Comp710Component implements OnInit {

  constructor(private _service: Service710Service) { }

  ngOnInit() {
  }

}
