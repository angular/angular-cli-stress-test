/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service519Service } from '../../services/service-519.service';

@Component({
  selector: 'app-comp-519',
  templateUrl: './comp-519.component.html',
  styleUrls: ['./comp-519.component.css']
})
export class Comp519Component implements OnInit {

  constructor(private _service: Service519Service) { }

  ngOnInit() {
  }

}
