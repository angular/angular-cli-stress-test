/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service125Service } from '../../services/service-125.service';

@Component({
  selector: 'app-comp-125',
  templateUrl: './comp-125.component.html',
  styleUrls: ['./comp-125.component.css']
})
export class Comp125Component implements OnInit {

  constructor(private _service: Service125Service) { }

  ngOnInit() {
  }

}
