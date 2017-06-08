/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service168Service } from './service-168.service';

describe('Service168Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service168Service]
    });
  });

  it('should ...', inject([Service168Service], (service: Service168Service) => {
    expect(service).toBeTruthy();
  }));
});
