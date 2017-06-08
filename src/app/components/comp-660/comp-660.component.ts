/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service660Service } from '../../services/service-660.service';

@Component({
  selector: 'app-comp-660',
  templateUrl: './comp-660.component.html',
  styleUrls: ['./comp-660.component.css']
})
export class Comp660Component implements OnInit {

  constructor(private _service: Service660Service) { }

  ngOnInit() {
  }

}
