/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service105Service } from '../../services/service-105.service';

@Component({
  selector: 'app-comp-105',
  templateUrl: './comp-105.component.html',
  styleUrls: ['./comp-105.component.css']
})
export class Comp105Component implements OnInit {

  constructor(private _service: Service105Service) { }

  ngOnInit() {
  }

}
