/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service591Service } from '../../services/service-591.service';

@Component({
  selector: 'app-comp-591',
  templateUrl: './comp-591.component.html',
  styleUrls: ['./comp-591.component.css']
})
export class Comp591Component implements OnInit {

  constructor(private _service: Service591Service) { }

  ngOnInit() {
  }

}
