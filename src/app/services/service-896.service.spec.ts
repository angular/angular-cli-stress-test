/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service896Service } from './service-896.service';

describe('Service896Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service896Service]
    });
  });

  it('should ...', inject([Service896Service], (service: Service896Service) => {
    expect(service).toBeTruthy();
  }));
});
