/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service616Service } from './service-616.service';

describe('Service616Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service616Service]
    });
  });

  it('should ...', inject([Service616Service], (service: Service616Service) => {
    expect(service).toBeTruthy();
  }));
});
