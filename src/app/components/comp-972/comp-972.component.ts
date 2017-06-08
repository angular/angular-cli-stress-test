/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service972Service } from '../../services/service-972.service';

@Component({
  selector: 'app-comp-972',
  templateUrl: './comp-972.component.html',
  styleUrls: ['./comp-972.component.css']
})
export class Comp972Component implements OnInit {

  constructor(private _service: Service972Service) { }

  ngOnInit() {
  }

}
