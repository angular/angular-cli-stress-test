/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service350Service } from '../../services/service-350.service';

@Component({
  selector: 'app-comp-350',
  templateUrl: './comp-350.component.html',
  styleUrls: ['./comp-350.component.css']
})
export class Comp350Component implements OnInit {

  constructor(private _service: Service350Service) { }

  ngOnInit() {
  }

}
