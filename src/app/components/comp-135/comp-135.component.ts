/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service135Service } from '../../services/service-135.service';

@Component({
  selector: 'app-comp-135',
  templateUrl: './comp-135.component.html',
  styleUrls: ['./comp-135.component.css']
})
export class Comp135Component implements OnInit {

  constructor(private _service: Service135Service) { }

  ngOnInit() {
  }

}
