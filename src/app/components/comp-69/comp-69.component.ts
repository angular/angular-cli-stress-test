/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service69Service } from '../../services/service-69.service';

@Component({
  selector: 'app-comp-69',
  templateUrl: './comp-69.component.html',
  styleUrls: ['./comp-69.component.css']
})
export class Comp69Component implements OnInit {

  constructor(private _service: Service69Service) { }

  ngOnInit() {
  }

}
