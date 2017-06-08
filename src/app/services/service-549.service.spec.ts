/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service549Service } from './service-549.service';

describe('Service549Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service549Service]
    });
  });

  it('should ...', inject([Service549Service], (service: Service549Service) => {
    expect(service).toBeTruthy();
  }));
});
