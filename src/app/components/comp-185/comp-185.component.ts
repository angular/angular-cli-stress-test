/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service185Service } from '../../services/service-185.service';

@Component({
  selector: 'app-comp-185',
  templateUrl: './comp-185.component.html',
  styleUrls: ['./comp-185.component.css']
})
export class Comp185Component implements OnInit {

  constructor(private _service: Service185Service) { }

  ngOnInit() {
  }

}
