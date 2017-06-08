/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service49Service } from './service-49.service';

describe('Service49Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service49Service]
    });
  });

  it('should ...', inject([Service49Service], (service: Service49Service) => {
    expect(service).toBeTruthy();
  }));
});
