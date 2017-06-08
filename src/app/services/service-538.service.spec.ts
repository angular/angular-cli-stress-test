/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service538Service } from './service-538.service';

describe('Service538Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service538Service]
    });
  });

  it('should ...', inject([Service538Service], (service: Service538Service) => {
    expect(service).toBeTruthy();
  }));
});
