/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service424Service } from './service-424.service';

describe('Service424Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service424Service]
    });
  });

  it('should ...', inject([Service424Service], (service: Service424Service) => {
    expect(service).toBeTruthy();
  }));
});
