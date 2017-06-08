/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service746Service } from './service-746.service';

describe('Service746Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service746Service]
    });
  });

  it('should ...', inject([Service746Service], (service: Service746Service) => {
    expect(service).toBeTruthy();
  }));
});
