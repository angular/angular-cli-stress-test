/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service34Service } from './service-34.service';

describe('Service34Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service34Service]
    });
  });

  it('should ...', inject([Service34Service], (service: Service34Service) => {
    expect(service).toBeTruthy();
  }));
});
