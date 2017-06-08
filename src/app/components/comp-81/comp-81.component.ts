/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service81Service } from '../../services/service-81.service';

@Component({
  selector: 'app-comp-81',
  templateUrl: './comp-81.component.html',
  styleUrls: ['./comp-81.component.css']
})
export class Comp81Component implements OnInit {

  constructor(private _service: Service81Service) { }

  ngOnInit() {
  }

}
