/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service168Service } from '../../services/service-168.service';

@Component({
  selector: 'app-comp-168',
  templateUrl: './comp-168.component.html',
  styleUrls: ['./comp-168.component.css']
})
export class Comp168Component implements OnInit {

  constructor(private _service: Service168Service) { }

  ngOnInit() {
  }

}
