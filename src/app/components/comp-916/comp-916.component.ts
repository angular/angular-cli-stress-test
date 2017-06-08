/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service916Service } from '../../services/service-916.service';

@Component({
  selector: 'app-comp-916',
  templateUrl: './comp-916.component.html',
  styleUrls: ['./comp-916.component.css']
})
export class Comp916Component implements OnInit {

  constructor(private _service: Service916Service) { }

  ngOnInit() {
  }

}
