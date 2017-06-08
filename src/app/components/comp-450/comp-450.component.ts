/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service450Service } from '../../services/service-450.service';

@Component({
  selector: 'app-comp-450',
  templateUrl: './comp-450.component.html',
  styleUrls: ['./comp-450.component.css']
})
export class Comp450Component implements OnInit {

  constructor(private _service: Service450Service) { }

  ngOnInit() {
  }

}
