/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service96Service } from '../../services/service-96.service';

@Component({
  selector: 'app-comp-96',
  templateUrl: './comp-96.component.html',
  styleUrls: ['./comp-96.component.css']
})
export class Comp96Component implements OnInit {

  constructor(private _service: Service96Service) { }

  ngOnInit() {
  }

}
