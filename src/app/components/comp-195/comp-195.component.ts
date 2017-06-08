/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service195Service } from '../../services/service-195.service';

@Component({
  selector: 'app-comp-195',
  templateUrl: './comp-195.component.html',
  styleUrls: ['./comp-195.component.css']
})
export class Comp195Component implements OnInit {

  constructor(private _service: Service195Service) { }

  ngOnInit() {
  }

}
