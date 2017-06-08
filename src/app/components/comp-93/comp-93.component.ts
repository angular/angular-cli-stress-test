/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service93Service } from '../../services/service-93.service';

@Component({
  selector: 'app-comp-93',
  templateUrl: './comp-93.component.html',
  styleUrls: ['./comp-93.component.css']
})
export class Comp93Component implements OnInit {

  constructor(private _service: Service93Service) { }

  ngOnInit() {
  }

}
