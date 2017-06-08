/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service434Service } from '../../services/service-434.service';

@Component({
  selector: 'app-comp-434',
  templateUrl: './comp-434.component.html',
  styleUrls: ['./comp-434.component.css']
})
export class Comp434Component implements OnInit {

  constructor(private _service: Service434Service) { }

  ngOnInit() {
  }

}
