/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service456Service } from './service-456.service';

describe('Service456Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service456Service]
    });
  });

  it('should ...', inject([Service456Service], (service: Service456Service) => {
    expect(service).toBeTruthy();
  }));
});
